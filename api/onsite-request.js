// API endpoint for onsite service requests
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ _error: 'Method not allowed' ,})}

  res.status(200).json({ message: 'Onsite request received' ,})}