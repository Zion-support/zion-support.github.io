import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import fs from 'fs';
import path from 'path';

const router = Router();

// Validation middleware
const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// GET /api/users
router.get('/users', async (_req, res) => {
  try {
    // Example data - replace with actual database query
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    
    res.json({ 
      success: true, 
      data: users,
      count: users.length 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch users' 
    });
  }
});

// POST /api/users
router.post('/users', [
  body('name').isLength({ min: 2 }).trim().escape(),
  body('email').isEmail().normalizeEmail(),
  validate
], async (req: any, res: any) => {
  try {
    const { name, email } = req.body;
    
    // Example user creation - replace with actual database operation
    const newUser = {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString()
    };
    
    res.status(201).json({ 
      success: true, 
      data: newUser,
      message: 'User created successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to create user' 
    });
  }
});

// GET /api/users/:id
router.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Example user lookup - replace with actual database query
    const user = {
      id: parseInt(id),
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date().toISOString()
    };
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        error: 'User not found' 
      });
    }
    
    return res.json({ 
      success: true, 
      data: user 
    });
  } catch (error) {
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch user' 
    });
  }
});

// POST /api/logs - Production logging endpoint
router.post('/logs', [
  body('logs').isArray().withMessage('Logs must be an array'),
  body('logs.*.timestamp').isISO8601().withMessage('Each log must have a valid timestamp'),
  body('logs.*.level').isIn(['error', 'warn', 'info', 'debug']).withMessage('Each log must have a valid level'),
  body('logs.*.message').isString().notEmpty().withMessage('Each log must have a message'),
  validate
], async (req: any, res: any) => {
  try {
    const { logs } = req.body;
    
    // Ensure logs directory exists
    const logsDir = path.join(__dirname, '../../logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Create log file name based on date
    const today = new Date().toISOString().split('T')[0];
    const logFileName = `production-${today}.json`;
    const logFilePath = path.join(logsDir, logFileName);
    
    // Read existing logs or create empty array
    let existingLogs = [];
    if (fs.existsSync(logFilePath)) {
      try {
        const fileContent = fs.readFileSync(logFilePath, 'utf8');
        existingLogs = JSON.parse(fileContent);
      } catch (parseError) {
        console.warn('Failed to parse existing log file, starting fresh:', parseError);
      }
    }
    
    // Add new logs
    const allLogs = [...existingLogs, ...logs];
    
    // Write back to file
    fs.writeFileSync(logFilePath, JSON.stringify(allLogs, null, 2));
    
    // Also log to console for immediate visibility
    logs.forEach((log: any) => {
      const logMessage = `[${log.level.toUpperCase()}] ${log.timestamp}: ${log.message}`;
      switch (log.level) {
        case 'error':
          console.error(logMessage, log.error);
          break;
        case 'warn':
          console.warn(logMessage);
          break;
        case 'info':
          console.info(logMessage);
          break;
        case 'debug':
          console.debug(logMessage);
          break;
        default:
          console.log(logMessage);
      }
    });
    
    res.json({ 
      success: true, 
      message: `Successfully logged ${logs.length} entries`,
      loggedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to process logs:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process logs' 
    });
  }
});

// GET /api/logs - Retrieve logs (for debugging/monitoring)
router.get('/logs', async (req: any, res: any) => {
  try {
    const { date, level, limit = 100 } = req.query;
    const logsDir = path.join(__dirname, '../../logs');
    
    if (!fs.existsSync(logsDir)) {
      return res.json({ 
        success: true, 
        data: [],
        message: 'No logs directory found' 
      });
    }
    
    // Get log files
    const logFiles = fs.readdirSync(logsDir)
      .filter(file => file.startsWith('production-') && file.endsWith('.json'))
      .sort()
      .reverse(); // Most recent first
    
    let allLogs: any[] = [];
    
    // Read logs from files
    for (const file of logFiles) {
      const filePath = path.join(logsDir, file);
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const logs = JSON.parse(fileContent);
        allLogs = [...allLogs, ...logs];
      } catch (parseError) {
        console.warn(`Failed to parse log file ${file}:`, parseError);
      }
    }
    
    // Filter by date if specified
    if (date) {
      allLogs = allLogs.filter(log => 
        log.timestamp.startsWith(date)
      );
    }
    
    // Filter by level if specified
    if (level) {
      allLogs = allLogs.filter(log => log.level === level);
    }
    
    // Sort by timestamp (most recent first)
    allLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
    // Apply limit
    allLogs = allLogs.slice(0, parseInt(limit as string));
    
    res.json({ 
      success: true, 
      data: allLogs,
      count: allLogs.length,
      totalFiles: logFiles.length
    });
  } catch (error) {
    console.error('Failed to retrieve logs:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to retrieve logs' 
    });
  }
});

export default router;