import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!client) {
    return res.status(500).json({ error: "OpenAI client not configured" });
  }

  try {
    const { topic, industry, targetAudience } = req.body;
    
    const prompt = `Generate a comprehensive whitepaper about ${topic} for the ${industry} industry targeting ${targetAudience}.`;
    
    const completion = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 4000,
    });

    const content = completion.choices[0]?.message?.content || "Failed to generate content";
    
    return res.status(200).json({ 
      success: true, 
      content,
      topic,
      industry,
      targetAudience
    });
  } catch (error) {
    console.error("Error generating whitepaper:", error);
    return res.status(500).json({ error: "Failed to generate whitepaper" });
  }
}
