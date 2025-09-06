import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { since, limit = '100' } = req.query;
    
    // Mock sync pull
    const events = [
      {
        id: 'event-1',
        type: 'user_created',
        entityId: 'user-1',
        timestamp: '2024-01-20T10:00:00Z',
        data: { name: 'John Doe' }
      },
      {
        id: 'event-2',
        type: 'project_updated',
        entityId: 'project-1',
        timestamp: '2024-01-20T11:00:00Z',
        data: { title: 'Updated Project' }
      }
    ];

    // Filter events since timestamp if provided
    let filteredEvents = events;
    if (since) {
      const sinceTime = new Date(since as string).getTime();
      filteredEvents = events.filter(event => 
        new Date(event.timestamp).getTime() > sinceTime
      );
    }

    const limitNum = parseInt(limit as string, 10);
    filteredEvents = filteredEvents.slice(0, limitNum);

    res.status(200).json({
      success: true,
      instanceId: 'zion-instance-1',
      lastSyncedAt: new Date().toISOString(),
      events: filteredEvents
    });
  } catch (error) {
    res.status(500).json({ error: 'Sync pull failed' });
  }
}