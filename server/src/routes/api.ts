import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.get('/health', (_req: Request, res: Response) => {
  res.json({ success: true, message: 'API is healthy', timestamp: new Date().toISOString() });
});

router.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date().toISOString() },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date().toISOString() },
    ];
    res.json({ success: true, data: users, count: users.length });
  } catch (_error) {
    res.status(500).json({ success: false, error: 'Failed to fetch users' });
  }
});

router.post(
  '/users',
  [body('name').isLength({ min: 2 }).trim().escape(), body('email').isEmail().normalizeEmail(), validate],
  async (req: Request, res: Response) => {
    try {
      const { name, email } = req.body as { name: string; email: string };
      const newUser = { id: Date.now(), name, email, createdAt: new Date().toISOString() };
      res.status(201).json({ success: true, data: newUser, message: 'User created successfully' });
    } catch (_error) {
      res.status(500).json({ success: false, error: 'Failed to create user' });
    }
  }
);

router.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = { id: Number(id), name: 'John Doe', email: 'john@example.com', createdAt: new Date().toISOString() };
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    return res.json({ success: true, data: user });
  } catch (_error) {
    return res.status(500).json({ success: false, error: 'Failed to fetch user' });
  }
});

router.put(
  '/users/:id',
  [body('name').optional().isLength({ min: 2 }).trim().escape(), body('email').optional().isEmail().normalizeEmail(), validate],
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body as { name?: string; email?: string };
      const updatedUser = {
        id: Number(id),
        name: name || 'John Doe',
        email: email || 'john@example.com',
        updatedAt: new Date().toISOString(),
      };
      res.json({ success: true, data: updatedUser, message: 'User updated successfully' });
    } catch (_error) {
      res.status(500).json({ success: false, error: 'Failed to update user' });
    }
  }
);

router.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    void id; // placeholder for deletion logic
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (_error) {
    res.status(500).json({ success: false, error: 'Failed to delete user' });
  }
});

export default router;
