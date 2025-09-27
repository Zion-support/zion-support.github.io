// API endpoint for error reporting

export default async function handler(req: any, res: any) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const errorDetails = req.body;

		// Validate the request
		if (!errorDetails || !errorDetails.message) {
			return res.status(400).json({ error: "Invalid error data" });
		}

		// Log the error (in production, you would send this to your error tracking service)
		console.error('Error reported:', errorDetails);

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error('Error reporting error:', error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

