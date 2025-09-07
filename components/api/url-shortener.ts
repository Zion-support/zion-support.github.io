<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';'

interface ShortUrl {
  for (let i = 0, i < length, i++) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
=======
interface ShortUrl {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
=======


// In-memory storage (in production, use a database)
const urlStorage = new Map<string, ShortUrl>();
// Generate a random short code
function generateShortCode(length: number = 6): string {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  for (let i = 0, i < length, i++) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    result += chars && chars.charAt(Math && Math.floor(Math && Math.random() * chars && chars.length))
  error?: string;  error?: string;
}
// In - memory storage (in production, use a database);
const url_storage = new Map < string, ShortUrl>();
;
// Generate a random short code;
function generateShortCode (length: number = 6): string {
  const chars =;
<<<<<<< HEAD
interface ShortUrl {
  id: string;
=======
id: string;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: string;
  clicks: number;
<<<<<<< HEAD
  isActive: boolean

=======
  isActive: boolean;
}interface UrlShortenerRequest  {originalUrl: string;
  customCode?: string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

interface UrlShortenerResponse  {"success": boolean;
  }
  data?: ShortUrl;
  error?: string;
}

// In-memory storage (in production, use a database)
const chars =;
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';'
  let result = '';'
  for (let index = 0; i < length; i++) {
    }
    result += chars.char_at (Math.floor (Math.random () * chars.length));
  }
  return result;  let result = '';
  for (let index = 0, i < length, i++) {
    result += chars.char_at (Math.floor (Math.random () * chars.length));
  }
  return result;
<<<<<<< HEAD
interface ShortUrl {
>>>>>>> merged-prs-20250907-203621
  id: string;
=======
interface ShortUrl {

id: string;

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: string;
<<<<<<< HEAD
<<<<<<< HEAD
  clicks: number;
  isActive: boolean
<<<<<<< HEAD
}

=======

=======
  clicks: number;}
  isActive: boolean;}
>>>>>>> origin/chore/fix-lint-and-merge
=======
  clicks: number;

  isActive: boolean;
>>>>>>> merged-prs-20250907-203621
interface UrlShortenerRequest {
  originalUrl: string;
<<<<<<< HEAD
  customCode?: string
}
=======
  customCode?: string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string
}
<<<<<<< HEAD
// In-memory storage (in production, use a database)
const urlStorage = new Map<string, ShortUrl>();

=======

// In-memory storage (in production, use a database)
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

interface UrlShortenerRequest  {originalUrl: string;}
  customCode?: string;}
}

<<<<<<< HEAD
interface UrlShortenerResponse {
  success: boolean;
  data?: ShortUrl;
  error?: string
=======
interface UrlShortenerResponse  {success: boolean;
  data?: ShortUrl;}
  error?: string;}
>>>>>>> origin/chore/fix-lint-and-merge
}

<<<<<<< HEAD
// In-memory storage (in production, use a database)
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
const urlStorage = new Map<string, ShortUrl>();

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Generate a random short code
function generateShortCode(length: number = 6): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0, i < length, i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  let result = '';
  for (let index = 0; i < length; i++) {}
    result += chars.char_at (Math.floor (Math.random () * chars.length));
  }'
  return result;  let result = '';
  for (let index = 0, i < length, i++) {}
    result += chars.char_at (Math.floor (Math.random () * chars.length));
  }
  return result;
  return result;

<<<<<<< HEAD
// Validate URL format,
function isValidUrl("url": string): boolean {
  }
  try {
    }
=======
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
// Validate URL format
function isValidUrl(url: string): boolean {
  try {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    new URL(url);
    return true
  } catch {
    return false
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
}

export default async function handler(
  req: NextApiRequest;
  res: NextApiResponse<UrlShortenerResponse>
) {
  if (req.method === 'POST') {
    // Create short URL
    try {
      const { originalUrl, customCode }: UrlShortenerRequest = req.body;

      if (!originalUrl) {
        return res.status(400).json({
          success: false;
          error: 'Original URL is required'
        })
=======
  }
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return true;
  } catch {
    return false;
  }  } catch {
<<<<<<< HEAD
    return false
  }
}
=======

    return false;
  }
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default async function handler(
  req: NextApiRequest
// Validate URL format;
function isValidUrl(url: string): boolean {}
  try {}
    new URL(url);
    return true;
  } catch {}
    return false;
  }  } catch {}
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse<UrlShortenerResponse>
) {
<<<<<<< HEAD
  res: NextApiResponse<UrlShortenerResponse>
) {}
    } catch (error) {'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (req && req.method === 'POST') {
    // Create short URL
    try {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const { originalUrl, customCode }: UrlShortenerRequest = req && req.body;
      if (!originalUrl) {
        return res && res.status(400).json({
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    // Create short URL;
    try {
      const { original_url, custom_code }: UrlShortenerRequest = req.body;
;
      // Check condition
if ( {) {
  $2
}
        return res.status (400).json ({
<<<<<<< HEAD
          success: false,
          error: 'Original URL is required',
        });      }
          success: false,

=======

          success: false,
          error: 'Original URL is required',
        });      }

=======
          success: false,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          error: 'Original URL is required'
        })
      }
      if (!isValidUrl(originalUrl)) {

<<<<<<< HEAD
}

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
          success: false,
          error: 'Invalid URL format',
        });      }          success: false;
        return res.status(400).json({
          success: false,
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
  if (req.method === 'POST') {
    // Create short URL
    try {;
      const { originalUrl, customCode }: UrlShortenerRequest = req.body;
      if (!originalUrl) {
        return res.status(400).json({
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
=======

          success: false,
          error: 'Invalid URL format',
        });      }          success: false;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          error: 'Invalid URL format'
        })
      }
      // Check if URL already exists
<<<<<<< HEAD
        return res.status(200).json({
          success: true,

      const existingUrl = Array.from(urlStorage.values()).find(
        url => url.originalUrl === originalUrl
      );
      if (existingUrl) {
        return res.status(200).json({
          success: true
          data: existingUrl
=======
      const existingUrl = Array && Array.from(urlStorage && urlStorage.values()).find(
        url => url && url.originalUrl === originalUrl
      );
      if (existingUrl) {

        return res && res.status(200).json({
          success: true,
          data: existingUrl,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        });      }
      // Generate short code
      let shortCode = customCode |generateShortCode();
          success: true;
<<<<<<< HEAD
=======

=======
        return res.status(200).json({
          success: true,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          data: existingUrl
        })
      }
      // Generate short code
<<<<<<< HEAD
      let shortCode = customCode |generateShortCode();
      while (urlStorage.has(shortCode)) {
        shortCode = generateShortCode();
      }
      const shortUrl: ShortUrl = {
=======

      let shortCode = customCode || generateShortCode();

      while (urlStorage && urlStorage.has(shortCode)) {

        shortCode = generateShortCode();
      }
      const shortUrl: ShortUrl = {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        createdAt: new Date().toISOString();

        clicks: 0
        isActive: true
<<<<<<< HEAD
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
=======

        isActive: true
      };
      urlStorage.set(shortCode, shortUrl);
      res.status(201).json({
        success: true,

        data: shortUrl
      })
error: 'Invalid URL format';
        });
      }
      // Check if URL already exists;
      const existing_url = Array.from (url_storage.values ()).find (
        url => url.original_url === original_url);
;
      // Check condition
if ( {) {
  $2
}
        return res.status (200).json ({
          success: true,
          data: existing_url,
        });      }
      // Generate short code;
      let short_code = custom_code || generateShortCode ();
          success: true;
          data: existing_url;
        });
      }
      // Generate short code;
      let short_code = custom_code || generateShortCode ();
;
      while (url_storage.has (short_code)) {
        short_code = generateShortCode ();
      }
      const short_url: ShortUrl = {
        id: Date.now ().to_string (),
        original_url,
        short_code,
        short_url: `${req.headers.host}/api / url - shortener/${short_code}`,
        created_at: new Date ().toISOString (),
        clicks: 0,
        is_active: true,      }        id: Date.now ().to_string ();
        original_url;
        short_code,
        short_url: `${req.headers.host}/api / url - shortener/${short_code}`;
        created_at: new Date ().toISOString ();
        clicks: 0,
        is_active: true;
      }
;
      url_storage.set (short_code, short_url);
;
      res.status (201).json ({
        success: true,
        data: short_url,

      });    } catch (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console.error ('URL shortening error:', error);
      res.status (500).json ({}
        success: false,
<<<<<<< HEAD
      success: false,'
=======
        error: 'Internal server error',
      });    }        success: true;

        data: short_url;
      });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
      console.error ('URL shortening error:', error);
      res.status (500).json ({
        success: false,
<<<<<<< HEAD
    const urls = Array && Array.from(urlStorage && urlStorage.values());
    res && res.status(200).json({
      success: true,
        error: 'Internal server error';
      });
    }
  } else // Check condition
if ( {) {
  $2
}
    // Get all URLs (for demo purposes);
    const urls = Array.from (url_storage.values ());
    res.status (200).json ({
      success: true,
      data: urls as any,
    });
    res.status (405).json ({
=======

    const urls = Array && Array.from(urlStorage && urlStorage.values());
    res && res.status(200).json({
      success: true,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      success: false,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      error: 'Method not allowed',
    });
  }
  params,
}: {;
  params: { shortCode: string };
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {;
  if (req.method === 'POST') {
    // Create short URL
    try {
      const { originalUrl, customCode }: UrlShortenerRequest = req.body;

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }

export default async function handler() {

  }

  if (req.method = == 'POST') {'
    // Create short URL
=======
const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let index = 0; i < length; i++) {}
    result += chars.char_at (Math.floor (Math.random () * chars.length));}
  }

  return result;

// Validate URL format;
function isValidUrl(url: string): boolean {
  try {
    new URL(url);}
return true;}
  } catch {
    return false;}
>>>>>>> origin/chore/fix-lint-and-merge
}
  }

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse<UrlShortenerResponse    />
) {

  if (req.method = == 'POST') {
    // Create short URL;
try {}
     ;}
  const { originalUrl, customCode }: UrlShortenerRequest = req.body;
      if (!originalUrl) {
        return res.status(400).json({
<<<<<<< HEAD
          success: false;
          error: 'Original URL is required'
        })
=======
          success: false,}
error: 'Original URL is required',}
        });
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
      }

      if (!isValidUrl(originalUrl)) {
        return res.status(400).json({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          success: false;
          error: 'Invalid URL format'
        })
      }

      // Check if URL already exists
      const existingUrl = Array.from(urlStorage.values()).find(
        url => url.originalUrl === originalUrl
      );

      if (existingUrl) {
        return res.status(200).json({
          success: true;
          data: existingUrl
        })
      }

      // Generate short code
      let shortCode = customCode || generateShortCode();
      
      // Ensure unique short code
      while (urlStorage.has(shortCode)) {
        shortCode = generateShortCode()
      }

      const shortUrl: ShortUrl = {
        id: Date.now().toString();
        originalUrl;
        shortCode;
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCode}`;
        createdAt: new Date().toISOString();
        clicks: 0;
        isActive: true
<<<<<<< HEAD
      };
=======
        success: true;
        data: shortUrl
      })
    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false;
        error: 'Internal server error'
      })
=======
          success: false,}
error: 'Invalid URL format',}
        });
      }
      // Check if URL already exists;
const existingUrl = Array.from(urlStorage.values()).find(
        url => url.originalUrl === originalUrl;
      );
      if (existingUrl) {
        return res.status(200).json({
          success: true,}
data: existingUrl,}
        });
      }
      // Generate short code;
let shortCode = customCode || generateShortCode();
// Ensure unique short code;
while (urlStorage.has(shortCode)) {}
        shortCode = generateShortCode();}
      }

const shortUrl: ShortUrl = {
        id: Date.now().toString(),
        originalUrl,}
        shortCode,}
        shortUrl: `${req.headers.host}/api/url-shortener/${shortCod,}
}`,
        createdAt: new Date().toISOString(),
        clicks: 0,
        isActive: true}
>>>>>>> merged-prs-20250907-203621

      urlStorage.set(shortCode, shortUrl);
      res.status(201).json({
<<<<<<< HEAD
        success: true;
        data: shortUrl
      })
    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false;
        error: 'Internal server error'
      })
    }
  } else if (req.method === 'GET') {
    // Get all URLs (for demo purposes)
    const urls = Array.from(urlStorage.values());
    res.status(200).json({
      success: true;
=======
        success: true,}
data: shortUrl,}
      });
    } catch (error) {
      console.error('URL shortening error:', error);
      res.status(500).json({
        success: false,}
error: 'Internal server error',}
      });
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  } else if (req.method = == 'GET') {
    // Get all URLs (for demo purposes)
   ;
  const urls = Array.from(urlStorage.values());
    res.status(200).json({
<<<<<<< HEAD
      success: true;
    });
  }
<<<<<<< HEAD
  params,
}: {;
  params: { shortCode: string };
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {;
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {
  params: { shortCode: string };
=======
export default async function handler(
  req: NextApiRequest
// Validate URL format;
function isValidUrl(url: string): boolean {}
  try {}
    new URL(url);
    return true;
  } catch {}
    return false;
  }  } catch {}
export default async function handler(;
  req: NextApiRequest;

  res: NextApiResponse<UrlShortenerResponse>
) {}
    } catch (error) {'
      console.error ('URL shortening error:, error);
      res.status (500).json ({}
        success: false,
      success: false,
      error: 'Method not allowed'});
  }
  params}: {
  params: { shortCode: string }

    }
  } else if (req.method === GET) {
    // Get all URLs (for demo purposes)
    res.status(200).json({});
  }
  params}: {
  params: { shortCode: string }
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {
<<<<<<< HEAD
  params: { shortCode: string }
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  params: { shortCode: string };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}) {  const shortCode = params && params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
  const shortCode = params && params.shortCode;
  const shortUrl = urlStorage && urlStorage.get(shortCode);
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      data: urls as any
    })
  } else {
    res.status(405).json({
<<<<<<< HEAD
      }
      "success": false,
"error": 'Method not allowed''
   
});
  }
// Handle redirects for short URLs,
export async function getServerSideProps() {
  }
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {
  }
  "params": { "shortCode": string
};
}) {  const shortCode = params && params.shortCode;

}

export async function getServerSideProps() {
  }
  const shortUrl = urlStorage && urlStorage.get(shortCode);

      "data": urls as any
    })
 
} else {
    }
    res.status(405).json({
      }
      "success": false,
      "error": 'Method not allowed''
=======
      success: false;
<<<<<<< HEAD
      error: 'Method not allowed'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    })
  }

// Handle redirects for short URLs,
export async function getServerSideProps() {
  }
  const shortUrl = urlStorage.get(shortCode);

  if (!shortUrl || !shortUrl.isActive) {
    }
    return {
      }
      "notFound": true

   
};
  }

  // Increment click count
  shortUrl.clicks++;
// Handle redirects for short URLs;
export async function getServerSideProps({ params }: { params: { shortCode: string } }) {};
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);

  if (!shortUrl || !shortUrl.isActive) {}
    return {}
      notFound: true;
    };
  }

  if (!shortUrl || !shortUrl && shortUrl.isActive) {
    }
    return {
}
<<<<<<< HEAD
"notFound": true
    };
=======

=======
  params: { shortCode: string };
}) {  const shortCode = params && params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {};
  const shortCode = params && params.shortCode;
  const shortUrl = urlStorage && urlStorage.get(shortCode);

      "data": urls as any
    })
  } else {}
    res.status(405).json({}
      success: false,'
      error: 'Method not allowed'
=======
      success: true,}
data: urls as any,}
    });
    res.status(405).json({
      success: false;
error: 'Method not allowed'}
   ,}
});
  }
// Handle redirects for short URLs;
export async function getServerSideProps({}
  params}
}: {}
  params: { shortCode: string,}
};
}) {
  const shortCode = params.shortCode;

const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {}
  params: { shortCode: string,}
};
}) {  const shortCode = params && params.shortCode;}
}
export async function getServerSideProps({ params }: { params: { shortCode: string },
}) {
  const shortCode = params && params.shortCode;

const shortUrl = urlStorage && urlStorage.get(shortCode);
}
      data: urls as any}
    })
 ,
} else {
    res.status(405).json({
      success: false,}
      error: 'Method not allowed'}
>>>>>>> origin/chore/fix-lint-and-merge
    })
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
// Handle redirects for short URLs
export async function getServerSideProps({ params }: { params: { shortCode: string } }) {
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
<<<<<<< HEAD

  if (!shortUrl || !shortUrl.isActive) {
    return {
      notFound: true
    }
  }

  // Increment click count
  shortUrl.clicks++;
  urlStorage.set(shortCode, shortUrl);

  // Redirect to original URL
  return {
    redirect: {
      destination: shortUrl.originalUrl;
      permanent: false
    }
  }
}
=======
<<<<<<< HEAD
=======
// Handle redirects for short URLs;
export async function getServerSideProps({ params }: { params: { shortCode: string },
}) {
  const shortCode = params.shortCode;

const shortUrl = urlStorage.get(shortCode);
>>>>>>> origin/chore/fix-lint-and-merge

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (!shortUrl || !shortUrl.isActive) {
    return {
      notFound: true;
}
   ,}
};
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }

<<<<<<< HEAD
  // Increment click count
  shortUrl.clicks++;
  if (!shortUrl || !shortUrl && shortUrl.isActive) {
    }
    return {
}
"notFound": true
=======
  if (!shortUrl || !shortUrl && shortUrl.isActive) {
    return {}
notFound: true,}
>>>>>>> origin/chore/fix-lint-and-merge
    };
  }
<<<<<<< HEAD
=======
  if (!shortUrl || !shortUrl && shortUrl.isActive) {
    return {
      notFound: true,    };      notFound: true
    }
  }
  // Increment click count
<<<<<<< HEAD
      permanent: false
    }
}


  shortUrl && shortUrl.clicks++;
  urlStorage && urlStorage.set(shortCode, shortUrl);
  // Redirect to original URL
  return {
    redirect: {
      destination: shortUrl.originalUrl,
      permanent: false
    }
}
=======

  shortUrl && shortUrl.clicks++;
  urlStorage && urlStorage.set(shortCode, shortUrl);

  // Redirect to original URL
  return {
    redirect: {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      permanent: false
    }
}


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Handle redirects for short URLs;
export async /**
 * getServerSideProps - Function description
 */
function getServerSideProps() {  const short_code = params.short_code;export async /**
 * getServerSideProps - Function description
 */
function getServerSideProps() {
  const short_code = params.short_code;
  const short_url = url_storage.get (short_code);
;
  // Check condition
if ( {) {
  $2
}
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
  params,
}: {;
  params: { shortCode: string };
}) {  const shortCode = params.shortCode;export async function getServerSideProps({ params }: { params: { shortCode: string } }) {;
  const shortCode = params.shortCode;
  const shortUrl = urlStorage.get(shortCode);
  if (!shortUrl |!shortUrl.isActive) {
    return {
      not_found: true,    }      not_found: true;
    }
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Increment click count;
shortUrl.clicks++;
  urlStorage.set(shortCode, shortUrl);
  // Redirect to original URL;
return {
<<<<<<< HEAD
    }
    "redirect": {
      }
      "destination": shortUrl.originalUrl,
"permanent": false
    }
  };
      "permanent": false
    }
=======
<<<<<<< HEAD
=======
    redirect: {
<<<<<<< HEAD
      destination: shortUrl.originalUrl,}
permanent: false,}
    }}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      destination: shortUrl.originalUrl,
      permanent: false,
    },
<<<<<<< HEAD

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      permanent: false;
    }
},
}
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
      destination: shortUrl.originalUrl,
      permanent: false,
    },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
