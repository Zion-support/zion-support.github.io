// Cloud logs API endpoint
export default function handler(req: any, res: any) {
  try {
    const files = req.body?.files || [];
    
    if (files.length > 0) {
      const logs = files.slice(0, 50).map((f: any) => {
        try {
          return f;
        } catch {
          return null;
        }
      });
      
      res.status(200).json({ logs });
    } else {
      res.status(200).json({ logs: [] });
    }
  } catch {
    // fall through to GitHub
    res.status(500).json({ error: 'Internal server error' });
  }
}