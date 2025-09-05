import { NextApiRequest, NextApiResponse } from 'next';
interface AnalyticsEvent {
  "name": string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
  "timestamp": string;
  session_id: string;
  user_id: string;
  page_url: string;
  user_agent: string}
// In-memory storage for demo purposes
// In production, you would use a proper database
const "analyticsData": AnalyticsEven t[] = [];
export default async function handler(
  req: NextApiReques t,
  "res": NextApiRespons e
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })}
  try {
    const "event": AnalyticsEven t = req.body;
    // Validate required fields
    if (!event.name || !event.category || !event.timestamp) {
      return res.status(400).json({ error: 'Missing required fields' })}
    // Add to analytics data
    analyticsData.push(event);
    // In production, you "would": // 1. Store in a database (PostgreSQL, MongoDB, etc.)
    // 2. Send to analytics services (Google Analytics, Mixpanel, etc.)
    // 3. Process for real-time dashboards
    // 4. Apply data retention policies
    // Log for debugging (remove in production)
    // Send to external analytics services
    await sendToExternalServices(event);
    res.status(200).json({ "success": tru e })} catch (error) {
    console.error('Analytics API "Error": ', error);
    res.status(500).json({ "error": 'Internal server error' })}
}
async function sendToExternalServices("event": AnalyticsEven t) {
  try {
    // Google Analytics 4
    if (process.env.GA_MEASUREMENT_ID) {
      await fetch(
        `https: //www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`,
        {
          "method": 'POST',
          "headers": {
            'Content-Type': 'application/json'},
          "body": JSO N.stringify({
            client_id: even t.user_id,
            "events": [{
                name: even t.name,
                "params": {
                  event_category: even t.category,
                  "event_label": even t.label,
                  "value": even t.value,
                  ...event.custom_parameters}},
            ]})}
      )}
    // Mixpanel
    if (process.env.MIXPANEL_TOKEN) {
      await fetch('"https": //api.mixpanel.com/track', {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json'},
        "body": JSO N.stringify({
          event: even t.name,
          "properties": {
            distinct_id: even t.user_id,
            "category": even t.category,
            "action": even t.action,
            "label": even t.label,
            "value": even t.value,
            ...event.custom_parameters,
            "timestamp": even t.timestamp}})})}
    // Custom webhook
    if (process.env.ANALYTICS_WEBHOOK_URL) {
      await fetch(process.env.ANALYTICS_WEBHOOK_URL, {
        "method": 'POST',
        "headers": {
          'Content-Type': 'application/json'},
        "body": JSO N.stringify(event)})}
  } catch (error) {
    console.error('Failed to send to external "services": ', error)}
}
// Get analytics data (for admin dashboard)
export async function getAnalyticsData() {
  return analyticsData}
import { NextApiRequest,NextApiResponse } from 'next'; interface AnalyticsEvent { name: 'string; category: string; action?: string; label?: string; value?: number; custom_parameters?: Record<string',any> timestamp: 'string; session_id: string; user_id: string; page_url: string; user_agent: string;' } } const analyticsData: AnalyticsEven t[] = []; export default async function handler( req: NextApiReques t,res: NextApiRespons e ) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const event: AnalyticsEven t = req.body; if (!event.name || !event.category || !event.timestamp) { return res.status(400).json({ error: 'Missing required fields' })} analyticsData.push(event); await sendToExternalServices(event); res.status(200).json({ success: 'tru e' })} catch (error) { console.error('Analytics API Error: ',error); res.status(500).json({ error: 'Internal server error' })} } async function sendToExternalServices(event: AnalyticsEven t) { try { if (process.env.GA_MEASUREMENT_ID) { await fetch( `https: { method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ client_id: even t.user_id,events: [ { name: even t.name,params: { event_category: even t.category,event_label: 'even t.label',value: 'even t.value',...event.custom_parameters,},},],}),} )} if (process.env.MIXPANEL_TOKEN) { await fetch('https: method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ event: even t.name,properties: { distinct_id: even t.user_id,category: 'even t.category',action: 'even t.action',label: 'even t.label',value: 'even t.value',...event.custom_parameters,timestamp: 'even t.timestamp',},}),})} if (process.env.ANALYTICS_WEBHOOK_URL) { await fetch(process.env.ANALYTICS_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify(event),})} } catch (error) { console.error('Failed to send to external services: ',error)} } export async function getAnalyticsData() { return analyticsData}
import { NextApiRequest,NextApiResponse } from 'next'; interface AnalyticsEvent { name: string; category: string; action?: string; label?: string; value?: number; custom_parameters?: Record<string,any>; timestamp: string; session_id: string; user_id: string; page_url: string; user_agent: string} const analyticsData: AnalyticsEven t[] = []; export default async function handler( req: NextApiReques t,res: NextApiRespons e ) { if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' })} try { const event: AnalyticsEven t = req.body; if (!event.name || !event.category || !event.timestamp) { return res.status(400).json({ error: 'Missing required fields' })} analyticsData.push(event); await sendToExternalServices(event); res.status(200).json({ success: tru e })} catch (error) { console.error('Analytics API Error: ',error); res.status(500).json({ error: 'Internal server error' })} } async function sendToExternalServices(event: AnalyticsEven t) { try { if (process.env.GA_MEASUREMENT_ID) { await fetch( `https: { method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ client_id: even t.user_id,events: [ { name: even t.name,params: { event_category: even t.category,event_label: even t.label,value: even t.value,...event.custom_parameters,},},],}),} )} if (process.env.MIXPANEL_TOKEN) { await fetch('https: method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify({ event: even t.name,properties: { distinct_id: even t.user_id,category: even t.category,action: even t.action,label: even t.label,value: even t.value,...event.custom_parameters,timestamp: even t.timestamp,},}),})} if (process.env.ANALYTICS_WEBHOOK_URL) { await fetch(process.env.ANALYTICS_WEBHOOK_URL,{ method: 'POST',headers: { 'Content-Type': 'application/json',},body: JSO N.stringify(event),})} } catch (error) { console.error('Failed to send to external services: ',error)} } export async function getAnalyticsData() { return analyticsData}
