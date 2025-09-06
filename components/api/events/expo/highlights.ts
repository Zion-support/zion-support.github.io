import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = null;

    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Failed to generate highlights' })
};
}
