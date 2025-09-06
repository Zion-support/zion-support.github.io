export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  
  const { title, targetAudience, keyFeatures, additionalNotes, toneInstruction } = req.body || {};
  
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${title} Target Audience: ${targetAudience} Key Features: - ${keyFeatures?.join('\n- ') || ''} ${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''} ${toneInstruction} Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  
  // Mock response
  const description = `Mock service description for ${title}`;
  
  res.status(200).json({ description });
}