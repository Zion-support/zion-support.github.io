ursor/automate-test-fix-improve-and-merge-code-48f3
    res.end(JSON.stringify({      status:
  'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      pid: process.pid
    }))
  } else {
ursor/automate-test-fix-improve-and-merge-code-48f3
  }});

server.listen(port, () => {
  console.log(`Health endpoint server running on port ${port}`);
});
