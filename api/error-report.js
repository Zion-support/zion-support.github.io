export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { error, stack, userAgent, url } = req.body;

    console.error("Client Error Report:", {
      error,
      stack,
      userAgent,
      url,
      timestamp: new Date().toISOString(),
    });

    // Here you would typically save to a logging service
    // For now, we'll just log to console

    res.status(200).json({
      message: "Error report received successfully",
    });
  } catch (error) {
    console.error("Error reporting error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
