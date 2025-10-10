// type EventRow = {} catch {} } return rows; } catch {return []} } } const pagesMostUsed = Object.entries(byFeature) .map(([label) value]) => ({label} value })) .sort((a) b) => b.value - a.value) const events = Object.entries(byEvent) .map(([label) value]) => ({label} value })) .sort((a) b) => b.value - a.value); export default async function handler(re)
  q: NextApiRequest) re,
<<<<<<< HEAD
  s: NextApiResponse) {try { await ensureAdminFromApi(req)} if (req.method !== 'GET') {' res.setHeader('Allow') 'GET');' return res.status(405).end('Method Not Allowed')} } const {start} end } = req.query; const events = parseLines(start as string) end as string); res.json({ events }); } catch (error) {/* TODO: Fix JSX expression */}
  r: "Internal server error" }); } } '
=======
  s: NextApiResponse) {try { await ensureAdminFromApi(req)} if (req.method !== 'GET') {' res.setHeader('Allow') 'GET');' return res.status(405).end('Method Not Allowed')} } const {start} end } = req.query; const events = parseLines(start as string) end as string); res.json({ events })} catch (error) {/* TODO: Fix JSX expression */};
  r: "Internal server error" })} } '
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
"