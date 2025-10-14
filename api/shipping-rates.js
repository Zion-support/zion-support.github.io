export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
<<<<<<< HEAD

=======
  
>>>>>>> feaefa73e38684732879a5a585c43b6a6650ba92
  try {
    // Add your API logic here
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}