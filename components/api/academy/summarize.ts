import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';


  if (!apiKey) return fallback();
  try {}
    const client = new OpenAI({ apiKey });`
    const prompt = `Summarize the following module for a founder preparing to deploy a Zion instance. Provide a concise, actionable summary with 4-6 bullet points.\n\nTitle: ${moduleTitle}\nContent:\n${moduleContent}`;


          content: 'You are a concise, practical course assistant.'
        }'
        { role: 'user', content: prompt }
      ]
      temperature: 0.3
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini'
      messages: [
{
          role: 'system',
          content: You are a concise, practical course assistant.},
        { role: 'user', content: prompt }],
      temperature: 0.3,
origin/cursor/automate-test-improve-and-merge-code-2533
    });
    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {
  }
    const text = completion.choices?.[0]?.message?.content ?? '';
  } catch (err) {



