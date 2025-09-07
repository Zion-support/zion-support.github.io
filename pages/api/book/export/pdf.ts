import { NextApiRequest, NextApiResponse } from 'next';


import puppeteer from 'puppeteer',;
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
  if (!html) {
    res.status(400).json({ error: 'Missing html' });
    return
}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' });
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
}

};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ pdf: 'generated' });
  } catch (e: any) {
    res.status(500).json({
      error: e?.message || 'Failed to render PDF'
    });
  }
}
