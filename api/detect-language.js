export default function handler(req, res) {
  const { preferred } = req.query;
  let lang = 'en';

  if (preferred) {
    if (preferred.startsWith('es')) {
      lang = 'es';
    } else if (preferred.startsWith('fr')) {
      lang = 'fr';
    } else if (preferred.startsWith('de')) {
      lang = 'de';
    }
  }

  res.setHeader('Set-Cookie', `zion_language=${lang}; Path=/; Max-Age=31536000`);
  res.statusCode = 200;
  res.json({ language: lang });
}