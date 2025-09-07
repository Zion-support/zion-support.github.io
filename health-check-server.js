#!/usr/bin/env node;

      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      version: process.version;
    };
    '
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(healthStatus, null, 2));

    res.end('Not Found');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {}
  console.log(`Health check server running on port ${PORT}`);