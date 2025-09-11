import type { NextApiRequest, NextApiResponse } from 'next';
interface ShortUrl {

// In-memory storage (in production, use a database)
const urlStorage = new Map<string, ShortUrl>();
// Generate a random short code
function generateShortCode(length: number = 6): string {


interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string
}
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
  return result;  let result = '';
  for (let i = 0, i < length, i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
=======
=======}



=======

    return true;
  } catch {
    return false;
  }  } catch {
    return false;
  }
}

=======

          success: false,
          error: 'Original URL is required',
        });      }

=======
          success: false,=======
          success: false,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          error: 'Original URL is required'
        })
      }
      if (!isValidUrl(originalUrl)) {

export default async function handler(_req: NextApiRequest, _res: NextApiResponse<UrlShortenerResponse>) {_if (req.method === 'POST') {
    // Create short window.URL
    try {
      const { originalUrl, customCode }: UrlShortenerRequest = req.body,

      if (!originalUrl) {
        return res.status(400).json({

          success: false,
          error: 'Original URL is required'
        })
      }
if (!isValidUrl(originalUrl)) {
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return res && res.status(400).json({
      if () {) {
  $2
}
        return res.status (400).json ({          success: false;
          error: 'Original URL is required';
        });
      }
      if () {) {
  $2
}
        return res.status (400).json ({
          success: false,
          error: 'Invalid URL format',
        });      }          success: false;


        return res && res.status(200).json({
          success: true,
          data: existingUrl,

=======
        return res.status(200).json({
          success: true,

      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false
        error: 'Internal server error'
      })
    }
  } else if (req.method === 'GET') {
    // Get all URLs (for demo purposes)
    const urls = Array.from(urlStorage.values());
    res.status(200).json({
      success: true
      data: urls as any
    });
    res.status(405).json({
      success: false
      error: 'Method not allowed'
    });
  }
// Handle redirects for short URLs
export async function getServerSideProps({
      destination: shortUrl.originalUrl,
      permanent: false,
    },
      destination: shortUrl.originalUrl
      permanent: false
    }
  };      destination: shortUrl.originalUrl;

      permanent: false
    }
}
}
      destination: shortUrl.originalUrl,
      permanent: false,
    },
  };
  };      destination: shortUrl.originalUrl;
      permanent: false
    }
};
}
  };
=======
  }      destination: short_url.original_url;
      permanent: false;
    }
}
}=======

      destination: shortUrl.originalUrl,
      permanent: false,
    },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
