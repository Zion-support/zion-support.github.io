import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
	status: "healthy" | "unhealthy";
	timestamp: string;
	uptime: number;
	version: string;
	environment: string;
	services: {
		database: "healthy" | "unhealthy";
		cache: "healthy" | "unhealthy";
		external: "healthy" | "unhealthy";
	};
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<HealthResponse>) {
	if (req.method !== "GET") {
		return res.status(405).json({ 
			status: "unhealthy",
			timestamp: new Date().toISOString(),
			uptime: 0,
			version: "1.0.0",
			environment: process.env.NODE_ENV || "development",
			services: {
				database: "unhealthy",
				cache: "unhealthy",
				external: "unhealthy"
			}
		});
	}

	try {
		// Basic health checks
		const healthResponse: HealthResponse = {
			status: "healthy",
			timestamp: new Date().toISOString(),
			uptime: process.uptime(),
			version: process.env.npm_package_version || "1.0.0",
			environment: process.env.NODE_ENV || "development",
			services: {
				database: "healthy", // In a real app, you'd check actual database connectivity
				cache: "healthy",    // In a real app, you'd check cache service
				external: "healthy"  // In a real app, you'd check external dependencies
			}
		};

		// Set cache headers
		res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
		res.setHeader('Pragma', 'no-cache');
		res.setHeader('Expires', '0');

		return res.status(200).json(healthResponse);

	} catch (error) {
		console.error("Health check failed:", error);
		return res.status(500).json({
			status: "unhealthy",
			timestamp: new Date().toISOString(),
			uptime: process.uptime(),
			version: process.env.npm_package_version || "1.0.0",
			environment: process.env.NODE_ENV || "development",
			services: {
				database: "unhealthy",
				cache: "unhealthy",
				external: "unhealthy"
			}
		});
	}
}