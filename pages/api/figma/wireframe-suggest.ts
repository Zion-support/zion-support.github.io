// Figma wireframe suggest API endpoint
import type {
  NextApiRequest, NextApiResponse
} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({
      error: 'Method not allowed'
    });
    return;
  }
  
  const {
    screenName,
    role
  } = req.body || {};
  
  if (!screenName) {
    res.status(400).json({
      error: 'screenName is required'
    });
    return;
  }
  
  try {
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen: ${screenName}\n- Primary role: ${role || 'Talent'}\n- Return a compact outline with bullets and short labels.`;
    
    // Mock implementation
    const suggestion = 'Mock wireframe suggestion';
    
    res.status(200).json({
      suggestion
    });
  } catch (e: unknown) {
    const message = process.env.OPENAI_API_KEY ? ((e as any)?.message || 'Failed to generate') : 'Set OPENAI_API_KEY to enable suggestions.';
    res.status(500).json({
      error: message
    });
  }
}