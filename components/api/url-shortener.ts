import type { NextApiRequest, NextApiResponse } from 'next';

interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: string;
  clicks: number;
  isActive: boolean;

interface UrlShortenerRequest {
  originalUrl: string;
  customCode?: string;

interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string;  error?: string
}

// In-memory storage (in production, use a database)
const urlStorage = new Map<string, ShortUrl>();

// Generate a random short code
function generateShortCode(length: number = 6): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length));
  }
  return result;  let result = '';
  for (let i = 0, i < length, i++) {
    result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length))
  }
  return result
}

// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }  } catch {
    return false
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UrlShortenerResponse>
) {
  if (req && req.method === 'POST') {
    // Create short URL
    try {
      const { originalUrl, customCode }: UrlShortenerRequest = req && req.body;

      if (!originalUrl) {
        return res && res.status(400).json({
          success: false,
          error: 'Original URL is required',
        });      }

      if (!isValidUrl(originalUrl)) {
        return res && res.status(400).json({          success: false;
          error: 'Original URL is required'
        })
      }

      if (!isValidUrl(originalUrl)) {
        return res && res.status(400).json({
          success: false,
          error: 'Invalid URL format',
        });      }          success: false;
          error: 'Invalid URL format'
        })
      }

      // Check if URL already exists
      const existingUrl = Array && Array.from(urlStorage && urlStorage.values()).find(
        url => url && url.originalUrl === originalUrl
      );

      if (existingUrl) {
        return res && res.status(200).json({
          success: true,
          data: existingUrl,
        });      }

      // Generate short code
      let shortCode = customCode || generateShortCode();
          success: true;
          data: existingUrl
        })
      }

      // Generate short code
      let shortCode = customCode || generateShortCode();

      while (urlStorage && urlStorage.has(shortCode)) {
        shortCode = generateShortCode();
      }

      const shortUrl: ShortUrl = {
        id: Date && Date.now().toString(),
        originalUrl,
        shortCode,
        shortUrl: `${req && req.headers.host}/api/url-shortener/${shortCode}`,
        createdAt: new Date().toISOString(),
        clicks: 0,
        isActive: true,      };        id: Date && Date.now().toString();
        originalUrl;
        shortCode,
        shortUrl: `${req && req.headers.host}/api/url-shortener/${shortCode}`;
        createdAt: new Date().toISOString();
        clicks: 0,
        isActive: true
      };

      urlStorage && urlStorage.set(shortCode, shortUrl);

      res && res.status(201).json({
        success: true,
        data: shortUrl,
      });    } catch (error) {
      console && console.error('URL shortening error:', error);
      res && res.status(500).json({
        success: false,
        error: 'Internal server error',
      });    }        success: true;
        data: shortUrl
      })
    } catch (error) {
      console && console.error('URL shortening error:', error);
      res && res.status(500).json({
        success: false,
        error: 'Internal server error'
      })
    }
  } else if (req && req.method === 'GET') {
    // Get all URLs (for demo purposes)
    const urls = Array && Array.from(urlStorage && urlStorage.values());
    res && res.status(200).json({
      success: true,
      data: urls as any,
    });
    res && res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

// Handle redirects for short URLs
export async function getServerSideProps({
  params,
}: {
  params: { shortCode: string };
}) {  const shortCode = params && params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
  const shortCode = params && params.shortCode;
  const shortUrl = urlStorage && urlStorage.get(shortCode);

  if (!shortUrl || !shortUrl && shortUrl.isActive) {
    return {
      notFound: true,    };      notFound: true
    };
  }

  // Increment click count
  shortUrl && shortUrl.clicks++;
  urlStorage && urlStorage.set(shortCode, shortUrl);

  // Redirect to original URL
  return {
    redirect: {
      destination: shortUrl && shortUrl.originalUrl,
      permanent: false,
    },
  };      destination: shortUrl && shortUrl.originalUrl;
      permanent: false
    }
  };
}
