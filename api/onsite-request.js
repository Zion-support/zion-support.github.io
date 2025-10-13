// API endpoint for onsite requests

export default function handler(req, res) {
  res.status(200).json({ message: "Onsite request received" });
}
