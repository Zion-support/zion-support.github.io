
<<<<<<< HEAD
const http = require('http'),
const fs = require('fs'),
const path = require('path'),
=======
const _http = require('http');
const _fs = require('fs');
const _path = require('path');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _server = http.createServer(_(req, _res) => {_if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, _'offline.html'), _(_err, _data) => {
      if (err) {
<<<<<<< HEAD
        res.writeHead(500),
        res.end('Error loading offline.html'),
        return
      }
      res.writeHead(200, { 'Content-Type': 'text/html' }),
      res.end(data)
    })
  } else if (req.url === '/online-check') {
    // Endpoint to check if we're online
    res.writeHead(200, { 'Content-Type': 'application/json' }),
    res.end(JSON.stringify({ online: false, message: 'Running in offline development mode' }))
  } else {
    res.writeHead(404),
    res.end('Not found')
  }
}),

const PORT = 8080,
server.listen(PORT, () => {
<<<<<<< HEAD
  // // // console.log(`
=======
  // console.log(`
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
}),
=======
        res.writeHead(500);
        res.end('Error loading offline.html');
        return;}
      res.writeHead(200, {_'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url === '/online-check') {_// Endpoint to check if we're online
    res.writeHead(200, _{ 'Content-Type': 'application/json'});
    res.end(JSON.stringify({_online: false, _message: 'Running in offline development mode'}));
  } else {_res.writeHead(404);
    res.end('Not found');}
});

const _PORT = 8080;
server.listen(_PORT, _() => {});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
