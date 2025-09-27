// API endpoint for analytics events

export default async function handler(req: any, res: any) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const { events, session } = req.body;

		// Validate the request
		if (!events || !Array.isArray(events)) {
			return res.status(400).json({ error: "Invalid events data" });
		}

		// Process analytics events
		for (const event of events) {
			console.log('Analytics event:', event);
			// In a real implementation, you would send this to your analytics service
		}

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error('Analytics error:', error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

