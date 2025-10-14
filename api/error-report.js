}
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
}
    const { error, stack, url, userAgent } = req.body;    console.error('Client Error Report:', { error, stack, url, userAgent })":;
console.log('Error report received:', new Date().toISOString())":;
res.status(200).json({ success: true, message: 'Error report received' })":
  } catch (error) {console.error('Error processing error report:', error)"}"
}
    const { error, stack, url, userAgent } = req.body;    console.error('Client Error Report:', { error, stack, url, userAgent });
    console.log('Error report received:', new Date().toISOString());
    res.status(200).json({ success: true, message: "Error report received" });
  } catch (error) { console.error('Error processing error report:', error); }
}
    res.status(500).json({ error: "Failed to process error report" });
export default function handler(req, res) {;
if (req.method !== "POST") {;
return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    // Add your API logic here;
res.status(200).json({ success: true });
  } catch (error) {;
console.error("API Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
