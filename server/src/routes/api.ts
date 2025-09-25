import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import type { Request, Response, NextFunction } from 'express';

const router: ReturnType<typeof Router> = Router();

// Validation middleware
const validate = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	return next();
};

// GET /api/users
router.get('/users', async (_req: Request, res: Response) => {
	try {
		// Example data - replace with actual database query
		const users = [
			{ id: 1, name: 'John Doe', email: 'john@example.com' },
			{ id: 2, name: 'Jane Smith', email: 'jane@example.com' }
		];
		return res.json({
			success: true,
			data: users,
			count: users.length
		});
	} catch (_error) {
		return res.status(500).json({
			success: false,
			error: 'Failed to fetch users'
		});
	}
});

// POST /api/users
router.post(
	'/users',
	[
		body('name').isLength({ min: 2 }).trim().escape(),
		body('email').isEmail().normalizeEmail(),
		validate
	],
	async (req: Request, res: Response) => {
		try {
			const { name, email } = req.body;
			// Example user creation - replace with actual database operation
			const newUser = {
				id: Date.now(),
				name,
				email,
				createdAt: new Date().toISOString()
			};
			return res.status(201).json({
				success: true,
				data: newUser,
				message: 'User created successfully'
			});
		} catch (_error) {
			return res.status(500).json({
				success: false,
				error: 'Failed to create user'
			});
		}
	}
);

// GET /api/users/:id
router.get('/users/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params as { id: string };
		// Example user lookup - replace with actual database query
		const user = {
			id: parseInt(id, 10),
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
	} catch (_error) {
		return res.status(500).json({
			success: false,
			error: 'Failed to fetch user'
		});
	}
});

export default router;