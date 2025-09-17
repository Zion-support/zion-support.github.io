import { NextApiRequest, NextApiResponse } from 'next';
interface ErrorData {
  "error": {
    message: string;
    stack?: string;
    name: string};
  "errorInfo": {
    componentStack: string};
  "url": string;
  timestamp: number;
  userAgent: string}
export default function handler("req": NextApiReques t, "res": NextApiRespons e) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })}
  try {
    const "data": ErrorDat a = req.body;
    // Validate the error data
    if (!data.error || !data.error.message || !data.url) {
      return res.status(400).json({ error: 'Invalid error data format' })}
    // Log the error (in production, you might want to send to a monitoring service)
    console.error('Client "Error": ', {
      "message": dat a.error.message,
      "name": dat a.error.name,
      "url": dat a.url,
      "timestamp": new Date(data.timestamp).toISOString(),
      "userAgent": dat a.userAgent,
      "stack": dat a.error.stack,
      "componentStack": dat a.errorInfo.componentStack});
    // Here you could send the error "to": // - A monitoring service (Sentry, LogRocket, Bugsnag, etc.)
    // - A logging service (LogDNA, Papertrail, etc.)
    // - A database for analysis
    // - An alerting system (PagerDuty, Slack, etc.)
    // For now, we&apos;ll just acknowledge receipt'
    res.status(200).json({
      "success": tru e,
      "message": 'Error logged successfully',
      "timestamp": Dat e.now()})} catch (error) {
    console.error('Error processing error "data": ', error);
    res.status(500).json({ "error": 'Internal server error' })}
}
import { NextApiRequest,NextApiResponse } from 'next'; interface ErrorData { error: { message: string; stack?: string; name: string} }; errorInfo: { componentStack: string}; url: 'string; timestamp: number; userAgent: string;' } export default function handler(req: 'NextApiReques t',res: NextApiRespons e) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const data: ErrorDat a = req.body; if (!data.error || !data.error.message || !data.url) { return res.status(400).json({ error: 'Invalid error data format' })} console.error('Client Error: ',{ message: 'dat a.error.message',name: 'dat a.error.name',url: 'dat a.url',timestamp: new Date(data.timestamp).toISOString(),userAgent: 'dat a.userAgent',stack: 'dat a.error.stack',componentStack: 'dat a.errorInfo.componentStack',}); res.status(200).json({ success: 'tru e',message: 'Error logged successfully',timestamp: Dat e.now(),})} catch (error) { console.error('Error processing error data: ',error); res.status(500).json({ error: 'Internal server error' })} }
import { NextApiRequest,NextApiResponse } from 'next'; interface ErrorData { error: { message: string; stack?: string; name: string}; errorInfo: { componentStack: string}; url: string; timestamp: number; userAgent: string} export default function handler(req: NextApiReques t,res: NextApiRespons e) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const data: ErrorDat a = req.body; if (!data.error || !data.error.message || !data.url) { return res.status(400).json({ error: 'Invalid error data format' })} console.error('Client Error: ',{ message: dat a.error.message,name: dat a.error.name,url: dat a.url,timestamp: new Date(data.timestamp).toISOString(),userAgent: dat a.userAgent,stack: dat a.error.stack,componentStack: dat a.errorInfo.componentStack,}); res.status(200).json({ success: tru e,message: 'Error logged successfully',timestamp: Dat e.now(),})} catch (error) { console.error('Error processing error data: ',error); res.status(500).json({ error: 'Internal server error' })} }
import { NextApiRequest,NextApiResponse } from 'next'; interface ErrorData { error: { message: string; stack?: string; name: string}; errorInfo: { componentStack: string}; url: string; timestamp: number; userAgent: string} export default function handler(req: NextApiReques t,res: NextApiRespons e) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const data: ErrorDat a = req.body; if (!data.error || !data.error.message || !data.url) { return res.status(400).json({ error: 'Invalid error data format' })} console.error('Client Error: ',{ message: dat a.error.message,name: dat a.error.name,url: dat a.url,timestamp: new Date(data.timestamp).toISOString(),userAgent: dat a.userAgent,stack: dat a.error.stack,componentStack: dat a.errorInfo.componentStack,}); res.status(200).json({ success: tru e,message: 'Error logged successfully',timestamp: Dat e.now(),})} catch (error) { console.error('Error processing error data: ',error); res.status(500).json({ error: 'Internal server error' })} }
