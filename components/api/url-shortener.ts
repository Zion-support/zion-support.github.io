import type { NextApiRequest, NextApiResponse } from 'next';
interface ShortUrl {

}
// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    new URL(url);

=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return true;
  } catch {
    return false;
  }  } catch {

    return false
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse<UrlShortenerResponse>
) {

        });      }
      // Generate short code
      let shortCode = customCode |generateShortCode();
          success: true;

=======
          data: existingUrl
        })
      }
      // Generate short code

      let shortCode = customCode || generateShortCode();

      while (urlStorage && urlStorage.has(shortCode)) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

        clicks: 0
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

    } catch (error) {
      console.error ('URL shortening error:', error);
      res.status (500).json ({
        success: false,

    const urls = Array && Array.from(urlStorage && urlStorage.values());
    res && res.status(200).json({
      success: true,

      success: false,
      error: 'Method not allowed',
    });
  }
// Handle redirects for short URLs
export async function getServerSideProps({
  params
}: {
  params: { shortCode: string }
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
  params,
}: {;
  params: { shortCode: string };
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {
      permanent: false
    }
}
}
=======
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
  params
}: {
  params: { shortCode: string }
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {

    return {
      not_found: true,    }      not_found: true;
    }
  }
  // Increment click count;
  short_url.clicks++;
  url_storage.set (short_code, short_url);
;
  // Redirect to original URL;
  return {
    redirect: {
=======
      destination: short_url.original_url,
      permanent: false,
    },
  }      destination: short_url.original_url;
      permanent: false;
    }
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
