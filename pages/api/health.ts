import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
	status: "healthy" | "unhealthy";
	timestamp: string;
	uptime: number;
	version: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HealthResponse>) {
	if (req.method !== 'GET') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const healthResponse: HealthResponse = {
		status: "healthy",
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
		version: process.env.npm_package_version || "1.0.0"
	};

	return res.status(200).json(healthResponse);
}