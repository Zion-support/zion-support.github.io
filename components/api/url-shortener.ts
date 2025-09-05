 
}export default async function handler (req: NextApiRequest, res: NextApiResponse<UrlShortenerResponse>) {
  if (req.method === 'POST') {
  // Create short window.URL try {
  
}// Check if window.URL already exists const existingUrl = Array.from (urlStorage.values () ) .find (url => url.originalUrl === originalUrl);
const shortUrl: ShortUrl = {
  id: Date.now () .toString (), originalUrl, shortCode, shortUrl: `$ {
  req.headers.host 
}/api/url-shortener/$ {
  shortCode 
}`;
createdAt: new Date () .toISOString ();
clicks: 0;
isActive: true 
};
urlStorage.set (shortCode, shortUrl);
}
}// Handle redirects for short URLs 
}// Increment click count shortUrl.clicks++;
urlStorage.set (shortCode, shortUrl);
}