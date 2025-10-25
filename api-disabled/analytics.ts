import { NextApiRequest, NextApiResponse } from 'next'

interface AnalyticsEvent {
  name: string
  category: string
  timestamp: number
  value?: number
  session_id?: string
  user_id?: string
  page_url?: string
  user_agent?: string
  custom_parameters?: Record<string, any>
}

// In-memory storage for demo purposes
// In production, you would use a proper database
const analyticsData: AnalyticsEvent[] = []

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const event: AnalyticsEvent = req.body

    // Validate required fields
    if (!event.name || !event.category || !event.timestamp) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Add to analytics data
    analyticsData.push(event)

    // In production, you would:
    // 1. Store in a database (PostgreSQL, MongoDB, etc.)
    // 2. Send to analytics services (Google Analytics, Mixpanel, etc.)
    // 3. Process for real-time dashboards
    // 4. Apply data retention policies

    // Log for debugging (remove in production)
    console.log('Analytics Event:', {
      name: event.name,
      category: event.category,
      timestamp: event.timestamp,
      session_id: event.session_id
    })

    // Send to external analytics services
    await sendToExternalServices(event)

    res.status(200).json({ success: true })
  } catch (error) {
    console.error('Analytics error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

async function sendToExternalServices(event: AnalyticsEvent) {
  try {
    // Google Analytics 4
    if (process.env.GA_MEASUREMENT_ID && process.env.GA_API_SECRET) {
      const gaUrl = `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`
      
      await fetch(gaUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          events: [{
            name: event.name,
            parameters: {
              value: event.value,
              ...event.custom_parameters
            }
          }]
        })
      })
    }

    // Mixpanel
    if (process.env.MIXPANEL_TOKEN) {
      await fetch('https://api.mixpanel.com/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event: event.name,
          properties: {
            value: event.value,
            ...event.custom_parameters,
            timestamp: event.timestamp
          }
        })
      })
    }

    // Custom webhook
    if (process.env.ANALYTICS_WEBHOOK_URL) {
      await fetch(process.env.ANALYTICS_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
    }
  } catch (error) {
    console.error('Error sending to external services:', error)
  }
}