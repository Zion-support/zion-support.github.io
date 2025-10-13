// API endpoint for onsite requests
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle onsite request
    res.status(200).json({ message: 'Request received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
