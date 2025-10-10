// import {NextApiRequest} NextApiResponse } from 'next' interface CSPReport {' 'csp-report': {' 'document-uri': string;' 'referrer': string;' 'violated-directive': string;' 'effective-directive': string;' 'original-policy': string;' 'disposition': string;' 'blocked-uri': string;' 'line-number'?: number;' 'column-number'?: number;' 'source-file'?: string;' 'status-code': number}' 'script-sample'?: string}} export default function handler(re)
  r: 'Invalid CSP report format' })} ' const cspData = report['csp-report']; // Log the CSP violation (in production) you might want to send to a monitoring service)' // console.warn('CSP,
  r: cspData['column-number']} timestam)
  p: new Date().toISOString() }); // Here you could send the violation,
  r: 'Internal server error' })} }'
