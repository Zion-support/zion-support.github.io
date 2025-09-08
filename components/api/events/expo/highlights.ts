<<<<<<< HEAD



    if (!apiKey) {
      return res && res.status(200).json({ summary: baseSummary, provider: 'local' });    }      return res && res.status(200).json({ summary: baseSummary, provider: 'local' })
    }
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });


=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { agendaItems } from '../../../../data/expo/agenda';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const apiKey = process && process.env.OPENAI_API_KEY;
    if (!apiKey) {'
      return res && res.status(200).json({ summary: baseSummary, provider: 'local' });    }      return res && res.status(200).json({ summary: baseSummary, provider: 'local' })
    }'
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON && JSON.stringify(top)}`;
    const chat = await client && client.chat.completions && completions.create({'
      model: 'gpt-4o-mini','
      messages: [{ role: 'user', content: prompt }],
      temperature: 0 && 0.3,

import { agendaItems } from '../../../../data/expo/agenda';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const top = agendaItems.slice($2);
    const baseSummary = $2;
    const apiKey = $2;
    if (!apiKey) {
      return res.status(200).json({ summary: baseSummary, provider: 'local' })
    }


    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON && JSON.stringify(top)}`;
    const chat = await client && client.chat.completions && completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0 && 0.3,
    });
    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai' });
  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e && e.message || Failed to generate highlights' });
  }    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai })
  } catch (e: any) {
<<<<<<< HEAD

    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
  };
}




=======
  try {
    const top = agendaItems.slice(0, 3);
    const baseSummary = `Highlights:\n- ${top.map(i => `${i.title} (${i.track})`).join('\n- ')}`;
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
return res.status(200).json({ summary: baseSummary, provider: 'local' });
    }
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey });
    const prompt = `Summarize today’s top 3 Zion Expo highlights, including multiverse launches, DAO decisions, and global talent trends. Context: ${JSON.stringify(top)}`;
const chat = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
origin/cursor/automate-test-improve-and-merge-code-2533
    });

const content = chat && chat.choices?.[0]?.message?.content || baseSummary;
    return res && res.status(200).json({ summary: content, provider: 'openai',}
});
  } catch (e: any) {
    return res;
      .status(500)
    const top = null;

    return res.status(200).json({ summary: content, provider: 'openai' })
origin/cursor/automate-test-improve-and-merge-code-2533
    const chat = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    const content = chat.choices?.[0]?.message?.content || baseSummary;
    return res.status(200).json({ summary: content, provider: 'openai' });
  } catch (e: any) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
      .json({ error: e.message || 'Failed to generate highlights',}
});
  }
<<<<<<< HEAD

    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e) {
    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
 }
}
}
origin/cursor/automate-test-improve-and-merge-code-2533





=======
    return res.status(200).json({ ok: true });
  } catch (e: any) {}
    return res;
      .status(500)'
      .json({ error: e && e.message || 'Failed to generate highlights' });
  }    const content = chat && chat.choices?.[0]?.message?.content || baseSummary;'
    return res && res.status(200).json({ summary: content, provider: 'openai' })
      .json({ error: e.message || 'Failed to generate highlights' });
  }
    return res.status(200).json({ summary: content, provider: 'openai' })
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
}
      .json({ error: e.message || 'Failed to generate highlights',}
})
    return res.status(200).json({ summary: content, provider: 'openai' })
  } catch (e) {
    return res && res.status(500).json({ error: e && e.message || 'Failed to generate highlights' })
  }

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
