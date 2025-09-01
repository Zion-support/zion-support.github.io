import express from 'express';
import { body, validationResult } from 'express-validator';
;
const router = express.Router();

// Validation middleware;
const validate = (...args: unknown[]): unknown => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};

// GET /api/health
router.get'/health': unknown, (req: unknown, res: unknown {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
  });
});

// GET /api/users
router.get'/users': unknown, async (req: unknown, res: unknown {
  try {
    // Example users list - replace with actual database query
    const users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        createdAt: new Date().toISOString(),
      },
    ];

    res.json({
      success: true,
      data: users,
      count: users.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users',
    });
  }
});

// POST /api/users
router.post(
  '/users',
  [
    body('name').isLength({ min: 2 }).trim().escape(),
    body('email').isEmail().normalizeEmail(),
    validate,
  ],
  async (req: any, res: any) => {
    try {
      const { name, email } = req.body;

      // Example user creation - replace with actual database operation
      const newUser = {
        id: Date.now(),
        name,
        email,
        createdAt: new Date().toISOString(),
      };

      res.status(201).json({
        success: true,
        data: newUser,
        message: 'User created successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to create user',
      });
    }
  }
);

// GET /api/users/:id
router.get'/users/:id', async (req, res {
  try {
    const { id } = req.params;

    // Example user lookup - replace with actual database query
    const user = {
      id: parseInt(id),
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date().toISOString(),
    };

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch user',
    });
  }
});

// PUT /api/users/:id
router.put(
  '/users/:id',
  [
    body('name').optional().isLength({ min: 2 }).trim().escape(),
    body('email').optional().isEmail().normalizeEmail(),
    validate,
  ],
  async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      // Example user update - replace with actual database operation
      const updatedUser = {
        id: parseInt(id),
        name: name || 'John Doe',
        email: email || 'john@example.com',
        updatedAt: new Date().toISOString(),
      };

      res.json({
        success: true,
        data: updatedUser,
        message: 'User updated successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Failed to update user',
      });
    }
  }
);

// DELETE /api/users/:id
router.delete'/users/:id', async (req, res {
  try {
    const { id } = req.params;

    // Example user deletion - replace with actual database operation
    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete user',
    });
  }
});

export default router;
