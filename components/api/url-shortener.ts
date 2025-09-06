import type { NextApiRequest, NextApiResponse } from 'next';

interface ShortUrl {
<<<<<<< HEAD
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
  error?: string;
=======
  id: string, originalUrl: string,
  shortCode: string, shortUrl: string,
  createdAt: string, clicks: number,
  isActive: boolean
}

interface UrlShortenerRequest {
  originalUrl: string,
  customCode?: string
}

interface UrlShortenerResponse {
  success: boolean, data?: ShortUrl,
  error?: string
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

// In-memory storage (in production, use a database)
const urlStorage = new Map<string, ShortUrl>();

// Generate a random short code
function generateShortCode(length: number = 6): string {
<<<<<<< HEAD
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
=======
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0, i < length, i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
<<<<<<< HEAD
    return true;
  } catch {
    return false;
  }
=======
    return true
  } catch {
    return false
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UrlShortenerResponse>
) {
  if (req.method === 'POST') {
    // Create short URL
    try {
      const { originalUrl, customCode }: UrlShortenerRequest = req.body;

      if (!originalUrl) {
        return res.status(400).json({
          success: false,
<<<<<<< HEAD
          error: 'Original URL is required',
        });
=======
          error: 'Original URL is required'
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }

      if (!isValidUrl(originalUrl)) {
        return res.status(400).json({
          success: false,
<<<<<<< HEAD
          error: 'Invalid URL format',
        });
=======
          error: 'Invalid URL format'
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }

      // Check if URL already exists
      const existingUrl = Array.from(urlStorage.values()).find(
        url => url.originalUrl === originalUrl
      );

      if (existingUrl) {
        return res.status(200).json({
          success: true,
<<<<<<< HEAD
          data: existingUrl,
        });
=======
          data: existingUrl
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      }

      // Generate short code
      let shortCode = customCode || generateShortCode();
<<<<<<< HEAD

      // Ensure unique short code
      while (urlStorage.has(shortCode)) {
        shortCode = generateShortCode();
      }

      const shortUrl: ShortUrl = {
        id: Date.now().toString(),
        originalUrl,
        shortCode,
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCode}`,
        createdAt: new Date().toISOString(),
        clicks: 0,
        isActive: true,
=======
      
      // Ensure unique short code
      while (urlStorage.has(shortCode)) {
        shortCode = generateShortCode()
      }

      const shortUrl: ShortUrl = {
        id: Date.now().toString(), originalUrl,
        shortCode;
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCode}`;
        createdAt: new Date().toISOString(), clicks: 0,
        isActive: true
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      };

      urlStorage.set(shortCode, shortUrl);

      res.status(201).json({
        success: true,
<<<<<<< HEAD
        data: shortUrl,
      });
=======
        data: shortUrl
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false,
<<<<<<< HEAD
        error: 'Internal server error',
      });
=======
        error: 'Internal server error'
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }
  } else if (req.method === 'GET') {
    // Get all URLs (for demo purposes)
    const urls = Array.from(urlStorage.values());
    res.status(200).json({
      success: true,
<<<<<<< HEAD
      data: urls as any,
    });
  } else {
    res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

// Handle redirects for short URLs
export async function getServerSideProps({
  params,
}: {
  params: { shortCode: string };
}) {
=======
      data: urls as any
    })
  } else {
    res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }
}

// Handle redirects for short URLs
export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);

  if (!shortUrl || !shortUrl.isActive) {
    return {
<<<<<<< HEAD
      notFound: true,
=======
      notFound: true
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    };
  }

  // Increment click count
  shortUrl.clicks++;
  urlStorage.set(shortCode, shortUrl);

  // Redirect to original URL
  return {
    redirect: {
      destination: shortUrl.originalUrl,
<<<<<<< HEAD
      permanent: false,
    },
  };
=======
      permanent: false
    }
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
