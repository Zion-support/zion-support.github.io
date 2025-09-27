// API endpoint for error reporting
export default async function handler(req: any, res: any) {
 setTimeout(resolve, 50));

    res.status(200).json({
      success: true,
      errorId: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now()
    })} catch (error) {
    console.error("Error reporting API error:", error);
    res.status(500).json({ error: "Internal server error" })}
}

