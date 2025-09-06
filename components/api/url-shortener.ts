import type { NextApiRequest, NextApiResponse } from 'next';
interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: string;
  clicks: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  isActive: boolean
}
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

  isActive: boolean;
interface UrlShortenerRequest {
  originalUrl: string;
  customCode?: string;

interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string
}
=======
  isActive: boolean;

interface UrlShortenerRequest {
  originalUrl: string;
  customCode?: string;

interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// In-memory storage (in production, use a database)

const urlStorage = new Map<string, ShortUrl>();
// Generate a random short code
function generateShortCode(length: number = 6): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
<<<<<<< HEAD
  return result;  let result = '';
  for (let i = 0, i < length, i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
=======
  return result;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
<<<<<<< HEAD
  }  } catch {
    return false
  }
}
=======
  }
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<UrlShortenerResponse>
) {
  if (req.method === 'POST') {
    // Create short URL
    try {;
      const { originalUrl, customCode }: UrlShortenerRequest = req.body;
      if (!originalUrl) {
        return res.status(400).json({
<<<<<<< HEAD
          success: false
          error: 'Original URL is required'
        });      }
      if (!isValidUrl(originalUrl)) {
        return res.status(400).json({          success: false;
          error: 'Original URL is required'
        })
      }
      if (!isValidUrl(originalUrl)) {
        return res.status(400).json({
          success: false
          error: 'Invalid URL format'
        });      }          success: false;
          error: 'Invalid URL format'
        })
      }
=======
          success: false,
          error: 'Original URL is required',
        });
     
}

      if (!isValidUrl(originalUrl)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid URL format',
        });
     
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      // Check if URL already exists
      const existingUrl = Array.from(urlStorage.values()).find(
        url => url.originalUrl === originalUrl
      );
      if (existingUrl) {
        return res.status(200).json({
<<<<<<< HEAD
          success: true
          data: existingUrl
        });      }
      // Generate short code
      let shortCode = customCode |generateShortCode();
          success: true;
          data: existingUrl
        })
      }
      // Generate short code
      let shortCode = customCode |generateShortCode();
=======
          success: true,
          data: existingUrl,
        });
     
}

      // Generate short code
      let shortCode = customCode || generateShortCode();

      // Ensure unique short code
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      while (urlStorage.has(shortCode)) {
        shortCode = generateShortCode();
      }
      const shortUrl: ShortUrl = {
<<<<<<< HEAD
        id: Date.now().toString()
        originalUrl
        shortCode
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCode}`
        createdAt: new Date().toISOString()
        clicks: 0
        isActive: true,      };        id: Date.now().toString();
        originalUrl;
        shortCode
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCode}`;
        createdAt: new Date().toISOString();
        clicks: 0
        isActive: true
      }
=======
        id: Date.now().toString(),
        originalUrl,
        shortCode,
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCode}`,
        createdAt: new Date().toISOString(),
        clicks: 0,
        isActive: true,
      };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      urlStorage.set(shortCode, shortUrl);
      res.status(201).json({
<<<<<<< HEAD
        success: true
        data: shortUrl
      });    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false
        error: 'Internal server error'
      });    }        success: true;
        data: shortUrl
      })
    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false
        error: 'Internal server error'
      })
=======
        success: true,
        data: shortUrl,
      });
    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  } else if (req.method === 'GET') {
    // Get all URLs (for demo purposes)
    const urls = Array.from(urlStorage.values());
    res.status(200).json({
<<<<<<< HEAD
      success: true
      data: urls as any
=======
      success: true,
      data: urls as any,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    });
    res.status(405).json({
      success: false
      error: 'Method not allowed'
    });
  }
// Handle redirects for short URLs
export async function getServerSideProps({
<<<<<<< HEAD
  params
}: {
<<<<<<< HEAD
  params: { shortCode: string }
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
=======
<<<<<<< HEAD
  params: { shortCode: string };
}) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  params,
}: {;
  params: { shortCode: string };
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {
    return {
<<<<<<< HEAD
      notFound: true,    };      notFound: true
    }
=======
      notFound: true,
    };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  // Increment click count
  shortUrl.clicks++;
  urlStorage.set(shortCode, shortUrl);
  // Redirect to original URL
  return {
    redirect: {
<<<<<<< HEAD
      destination: shortUrl.originalUrl
      permanent: false
    }
  };      destination: shortUrl.originalUrl;

      permanent: false
    }
}
}
=======
      destination: shortUrl.originalUrl,
      permanent: false,
    },
<<<<<<< HEAD
  };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
  };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  };      destination: shortUrl.originalUrl;
      permanent: false
    }
};
}
=======
  };
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
