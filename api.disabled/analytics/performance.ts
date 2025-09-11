export {};
interface PerformanceData {
  url: string;
  timestamp: number;
  metrics: {
    fcp?: number;
    lcp?: number;
    fid?: number;
    cls?: number;
    ttfb?: number;
    fmp?: number}}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })}

=======module.exports = {};
module.exports = {};

=======

module.exports = {};

=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
module.exports = {};
module.exports = {};
module.exports = {};
module.exports = {};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


