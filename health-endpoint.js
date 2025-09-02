<<<<<<< HEAD
const http = require(,
  http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url ===
  '/health') {
    res.writeHead(200, {
  'Content-Type': 'application/json });
=======
const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
    res.end(JSON.stringify({
      status:
  'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      pid: process.pid
    }))
  } else {
<<<<<<< HEAD
    res.writeHead(404, {,
  Content-Type': 'text/plain });
    res.end(
  'Not Found');
=======
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found');
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
  }
});

server.listen(port, () => {
  console.log(`Health endpoint server running on port ${port}`);
});
