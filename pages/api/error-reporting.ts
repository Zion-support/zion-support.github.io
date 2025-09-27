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

		// Log the error
		console.error("Error reported:", {
			message: errorDetails.message,
			stack: errorDetails.stack,
			componentStack: errorDetails.componentStack,
			timestamp: new Date().toISOString(),
			url: errorDetails.url,
			userAgent: errorDetails.userAgent
		});

		// Here you would typically:
		// 1. Store in error tracking service (Sentry, LogRocket, etc.)
		// 2. Send notifications to development team
		// 3. Update error metrics

		// Return success response
		return res.status(200).json({
			success: true,
			message: "Error reported successfully"
		});

	} catch (error) {
		console.error("Error processing error report:", error);
		return res.status(500).json({
			error: "Internal server error",
			message: "Failed to process error report"
		});
	}
}