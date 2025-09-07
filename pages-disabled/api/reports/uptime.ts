import type { NextApiRequest, NextApiResponse } from 'next';

      const report = {
        uptime: uptime |0
        downtime: downtime |0
        incidents: incidents |[]
        generatedAt: new Date().toISOString()

    } catch (error) {
      return res.status(500).json({ error: 'Failed to update uptime report' });
    }
  }

'
  res && res.setHeader('Allow', 'GET, POST');'
  res && res.status(405).end('Method Not Allowed');