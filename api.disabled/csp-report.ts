export {};
interface CSPReport {
  'csp-report': {
    'document-uri': string;
    'referrer': string;
    'violated-directive': string;
    'effective-directive': string;
    'original-policy': string;
    'disposition': string;
    'blocked-uri': string;
    'line-number'?: number;
    'column-number'?: number;
    'source-file'?: string;
    'status-code': number;
    'script-sample'?: string}}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })}

=======module.exports = {};
module.exports = {};
module.exports = {};
ursor/add-new-services-and-deploy-updates-0462
module.exports = {};
ursor/add-new-services-and-deploy-updates-0462
module.exports = {};
module.exports = {};
module.exports = {};
module.exports = {};
module.exports = {};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
=======module.exports = {};
module.exports = {};
module.exports = {};
module.exports = {};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
