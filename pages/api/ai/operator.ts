export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).end('Method Not Allowed');
    }
    
    const { sys, prompt, temperature } = req.body;
    
    // Mock completion for now
    const completion = {
      choices: [{ message: { content: 'Mock AI response' } }]
    };
    
    res.status(200).json({ message: 'AI Operator API', completion });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}