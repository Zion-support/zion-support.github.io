import { NextApiRequest,NextApiResponse } from 'next'; interface CSPReport { 'csp-report': { 'document-uri': string; referrer: string; 'violated-directive': string; 'effective-directive': string; 'original-policy': string; disposition: string; 'blocked-uri': string; 'line-number'?: number; 'column-number'?: number; 'source-file'?: string; 'status-code': number; 'script-sample'?: string}} export default function handler(req: NextApiReques t,res: NextApiRespons e) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const report: CSPRepor t = req.body; if (!report['csp-report']) { return res.status(400).json({ error: 'Invalid CSP report format' })} const cspData = report['csp-report']; .toISOString(),}); res.status(204).end()} catch (error) { console.error('Error processing CSP report: ',error); res.status(500).json({ error: 'Internal server error' })} }
import { NextApiRequest, NextApiResponse } from 'next';
interface CSPReport {
  'csp-report': {
    'document-uri': string;
    "referrer": string;
    'violated-directive': string;
    'effective-directive': string;
    'original-policy': string;
    disposition: string;
    'blocked-uri': string;
    'line-number'?: number;
    'column-number'?: number;
    'source-file'?: string;
    'status-code': number;
    'script-sample'?: string}}
export default function handler("req": NextApiReques t, "res": NextApiRespons e) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })}
  try {
    const "report": CSPRepor t = req.body;
    // Validate the CSP report
    if (!report['csp-report']) {
      return res.status(400).json({ error: 'Invalid CSP report format' })}
    const cspData = report['csp-report'];
    // Log the CSP violation (in production, you might want to send to a monitoring service)
    console.warn('CSP "Violation": ', {
      "documentUri": cspDat a['document-uri'],
      "violatedDirective": cspDat a['violated-directive'],
      "blockedUri": cspDat a['blocked-uri'],
      "sourceFile": cspDat a['source-file'],
      "lineNumber": cspDat a['line-number'],
      "columnNumber": cspDat a['column-number'],
      "timestamp": new Date().toISOString()});
    // Here you could send the violation "to": // - A monitoring service (Sentry, LogRocket, etc.)
    // - A security monitoring system
    // - A database for analysis
    // Return a 204 No Content response as per CSP reporting spec
    res.status(204).end()} catch (error) {
    console.error('Error processing CSP "report": ', error);
    res.status(500).json({ "error": 'Internal server error' })}
}
import { NextApiRequest,NextApiResponse } from 'next'; interface CSPReport { 'csp-report': { 'document-uri': string; referrer: string; 'violated-directive': string; 'effective-directive': string; 'original-policy': string; disposition: string; 'blocked-uri': string; 'line-number'?: number; 'column-number'?: number; 'source-file'?: string; 'status-code': number; 'script-sample'?: string} }} export default function handler(req: 'NextApiReques t',res: NextApiRespons e) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const report: CSPRepor t = req.body; if (!report['csp-report']) { return res.status(400).json({ error: 'Invalid CSP report format' })} const cspData = report['csp-report']; console.warn('CSP Violation: ',{ documentUri: cspDat a['document-uri'],violatedDirective: cspDat a['violated-directive'],blockedUri: cspDat a['blocked-uri'],sourceFile: cspDat a['source-file'],lineNumber: cspDat a['line-number'],columnNumber: cspDat a['column-number'],timestamp: new Date().toISOString(),}); res.status(204).end()} catch (error) { console.error('Error processing CSP report: ',error); res.status(500).json({ error: 'Internal server error' })} }
import { NextApiRequest,NextApiResponse } from 'next'; interface CSPReport { 'csp-report': { 'document-uri': string; referrer: string; 'violated-directive': string; 'effective-directive': string; 'original-policy': string; disposition: string; 'blocked-uri': string; 'line-number'?: number; 'column-number'?: number; 'source-file'?: string; 'status-code': number; 'script-sample'?: string}} export default function handler(req: NextApiReques t,res: NextApiRespons e) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const report: CSPRepor t = req.body; if (!report['csp-report']) { return res.status(400).json({ error: 'Invalid CSP report format' })} const cspData = report['csp-report']; console.warn('CSP Violation: ',{ documentUri: cspDat a['document-uri'],violatedDirective: cspDat a['violated-directive'],blockedUri: cspDat a['blocked-uri'],sourceFile: cspDat a['source-file'],lineNumber: cspDat a['line-number'],columnNumber: cspDat a['column-number'],timestamp: new Date().toISOString(),}); res.status(204).end()} catch (error) { console.error('Error processing CSP report: ',error); res.status(500).json({ error: 'Internal server error' })} }
