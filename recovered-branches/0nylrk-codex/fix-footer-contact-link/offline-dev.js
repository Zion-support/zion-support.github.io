
<<<<<<< HEAD
const http = require('http');
const fs = require('fs');
const path = require('path');
=======
const http = require('http')
const fs = require('fs')
const path = require('path')
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
const server = http.createServer((req, res) => {
  if (req.url === '/' |req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'offline.html'), (err, data) => {
      if (err) {
<<<<<<< HEAD
        res.writeHead(500);
        res.end('Error loading offline.html');
        return
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
=======
        res.writeHead(500)
        res.end('Error loading offline.html')
        return
      }
      res.writeHead(200, { 'Content-Type': 'text/html' })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      res.end(data)
    })
  } else if (req.url === '/online-check') {
    // Endpoint to check if we're online
<<<<<<< HEAD
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ online: false, message: 'Running in offline development mode' }))
  } else {
    res.writeHead(404);
    res.end('Not found')
  }
}),

const PORT = 8080;
=======
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ online: false, message: 'Running in offline development mode' }))
  } else {
    res.writeHead(404)
    res.end('Not found')
  }
})
const PORT = 8080
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
server.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                 OFFLINE DEVELOPMENT MODE ACTIVE                  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  🚀 Server running at: http://localhost:${PORT}                    ║
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
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
