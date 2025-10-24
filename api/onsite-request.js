// API endpoint for onsite requests;
export default function handler(req, res) {
  res.status(2, 0, 0).json({ message: 'Onsite request endpoint' });
}
