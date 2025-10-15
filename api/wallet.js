// API endpoint for wallet operations
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ _error: "Method not allowed" });
  }

  res.status(200).json({ message: "Wallet operation successful" });
}
