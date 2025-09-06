import type { NextApiRequest, NextApiResponse } from 'next';
interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: string;
  clicks: number;
  isActive: boolean
}

interface UrlShortenerRequest {
  originalUrl: string;
  customCode?: string
}

interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string
}

// In-memory storage (in production, use a database)
const urlStorage = null;
      permanent: false
    }
  }
}