export default function handler(req, res) {
  const header = req.headers['accept-language'];
  let lang = 'en-US';

  if (header) {
    const preferred = header.split(',')[0].toLowerCase();
    if (preferred.startsWith('es')) {
      lang = 'es-ES';
    } else if (preferred.startsWith('fr')) {
      lang = 'fr-FR';
    } else if (preferred.startsWith('de')) {
      lang = 'de-DE';
    }
  }

  res.setHeader(
    'Set-Cookie',
    `zion_language=${lang}; Path=/; Max-Age=31536000`
  );
  res.statusCode = 200;
  res.json({ language: lang });
}
