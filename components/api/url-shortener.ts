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

  isActive: boolean;
interface UrlShortenerRequest {
  originalUrl: string;
  customCode?: string;

interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string
}
// In-memory storage (in production, use a database)

const urlStorage = new Map<string, ShortUrl>();
// Generate a random short code
id: string
  originalUrl: string
  shortCode: string
  shortUrl: string
  createdAt: string
  clicks: number;}
  isActive: boolean;}

interface UrlShortenerRequest  {originalUrl: string;}
  customCode?: string;}

  let result = ''
  for($2) {}
    result += chars.char_at (Math.floor (Math.random () * chars.length));}

  return result
  res: NextApiResponse<UrlShortenerResponse>
) {}
    } catch (error) {'
      console.error ('URL shortening error:', error)
      res.status (500).json ({}
        success: false,
      success: false,'
      error: 'Method not allowed',
    })
  params,
}: {
  params: { shortCode: string }
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {
    return {
      notFound: true,    };      notFound: true
    }
  }
  // Increment click count
  shortUrl.clicks++;
  urlStorage.set(shortCode, shortUrl);
  // Redirect to original URL
  return {
    redirect: {
      destination: shortUrl.originalUrl
      permanent: false
    }
  };      destination: shortUrl.originalUrl;

// Handle redirects for short URLs
export async function getServerSideProps({ params }: { params: { shortCode: string } }) {}
  const shortCode = params.shortCode
  const shortUrl = urlStorage.get(shortCode)
  if($2) {}
    return {}
      notFound: true
    }
}
}
