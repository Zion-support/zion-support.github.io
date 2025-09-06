import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { readJson } from '[^']*';
import { HelpArticle, matchIntent } from '[^']*';
import { logSupportEventToOperator } from '[^']*';
const SYSTEM_PROMPT = null;
        links: matchedArticles.map((a) => ({ title: a.title, href: `/help/${a.slug}` }))}})
  } catch (e: any) {
    return res.status(200).json({ assistantMessage: 'I could not reach the assistant right now. Please try again in a moment.' })
  }
}