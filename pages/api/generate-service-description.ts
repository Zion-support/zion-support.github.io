export default async function handler(req: any, res: any) {
  const { title, targetAudience, keyFeatures, additionalNotes, toneInstruction } = req.body || {};
  
  const prompt = `You are a marketing copy expert. Given the following service inputs, write a polished, compelling, and detailed service description suitable for a website service page. Service Title: ${title}Target Audience: ${targetAudience}Key Features: - ${keyFeatures?.join('\n- ') || ''}${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''}${toneInstruction}Requirements: - 2-3 sentence hook opening that addresses audience needs - 3-5 concise sections with bolded headings (e.g., What You Get, How It Works, Why Choose Us, Deliverables, Timeline) - Use clear, benefit-focused language - End with a short call to action`;
  
  // Using Responses API for modern SDK
  const description = 'Generated service description would go here';
  
  res.status(200).json({ description });
}