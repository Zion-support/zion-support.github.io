
const http = require($2);
const fs = require($2);
const path = require($2);
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'offline.html'), (err, data) => {
      if (err) {
        res.writeHead($2);
        res.end($2);
        return
      }
      res.writeHead($2);
      res.end(data)
    })
  } else if (req.url === '/online-check') {
    // Endpoint to check if we're online
    res.writeHead($2);
    res.end(JSON.stringify({ online: false, message: 'Running in offline development mode' }))
  } else {
    res.writeHead($2);
    res.end('Not found')
  }
}),

const PORT = $2;
server.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                 OFFLINE DEVELOPMENT MODE ACTIVE                  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  🚀 Server running at: http: //localhost:${PORT}                    ║
║                                                                  ║
║  ℹ️  This is a placeholder server that doesn't require npm       ║
║     dependencies. Most features will not work until you install  ║
║     the required npm packages.                                   ║
║                                                                  ║
║  🔍 See OFFLINE-DEV-README.md for detailed instructions.         ║
║                                                                  ║
║  🌐 When internet is available: ║
║     1. Run: chmod +x setup.sh                                    ║
║     2. Run: ./setup.sh npm                                       ║
║     3. Run: npm run dev                                          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
`)
}),
