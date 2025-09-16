import type { NextApiRequest, NextApiResponse } from 'next';
  }
  return result;
}

// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
  }
}

export default async function handler(
        isActive: true
      };

      urlStorage.set(shortCode, shortUrl);

      res.status(201).json({
        success: true,
    }
  } else if (req.method === 'GET') {
    // Get all URLs (for demo purposes)
    const urls = Array.from(urlStorage.values());
    res.status(200).json({
