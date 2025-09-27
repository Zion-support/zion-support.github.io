import { NextApiRequest, NextApiResponse } from 'next';

// API endpoint for security events
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const securityEvent = req.body;

		// Validate the request
		if (!securityEvent || !securityEvent.type) {
			return res.status(400).json({ error: "Invalid security event data" });
		}

		// Log the security event (in production, you would send this to your security monitoring service)
		console.warn('Security event:', securityEvent);

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error('Security event error:', error);
		return res.status(500).json({ error: "Internal server error" });
	}
}