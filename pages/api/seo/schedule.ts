<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    const seedTopics = [;
      'AI Devs in BrazilAI Devs in KenyaAI Devs in VietnamRent Servers in KabulRent Servers in NairobiLLM Engineers in TorontoCybersecurity Experts in BerlinCloud Architects in Lisbon'];
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
    const outDir = path.join(process.cwd(), 'datapage-metadataseo'),;
    fs.mkdirSync(outDir, { recursive: true });
    for (const prompt of picks) {;
      const regionMatch = prompt.match(/in\s+([A-Za-z\s]+)/i);
      const region = regionMatch ? regionMatch[1].trim() : undefined;
      const serviceMatch = prompt.match(/^(.*?)\s+in\s+/i);
      const service = serviceMatch ? serviceMatch[1].trim() : undefined;
      const genReq = await fetch(`${process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`, {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ prompt, region, service })}),;
      const gen = await genReq.json();
      if (gen?.slug && gen?.payload) {;
        fs.writeFileSync(path.join(outDir, `${gen.slug}.json`), JSON.stringify(gen.payload, null, 2));
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return res.status(200).json({ ok: true, count: 4 });
  } catch (error) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to schedule landing pages' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { urls, frequency } = req.body;
    
    if (!urls || !Array.isArray(urls)) {
      return res.status(400).json({ error: 'URLs array is required' });
    }

    const outDir = path.join(process.cwd(), 'data', 'seo');
    fs.mkdirSync(outDir, { recursive: true });

    // Mock SEO scheduling - replace with actual scheduling logic
    const schedule = {
      id: Date.now().toString(),
      urls,
      frequency: frequency || 'daily',
      status: 'scheduled',
      createdAt: new Date().toISOString(),
      nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };

    const schedulePath = path.join(outDir, 'schedule.json');
    fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2));

    res.status(200).json({ 
      success: true, 
      schedule 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to schedule SEO tasks' });
>>>>>>> main
  }
}