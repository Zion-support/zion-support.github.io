
const server = http && http.createServer((req, res) => {
  if (req && req.url === '/' || req && req.url === '/index && index.html') {
    fs && fs.readFile(path && path.join(__dirname, 'offline && offline.html'), (err, data) => {
      if (err) {
        res && res.writeHead(500),
        res && res.end('Error loading offline && offline.html'),
        return
      }
      res.writeHead(200, { 'Content-Type': 'text/html' })

    })
  } else if (req && req.url === '/online-check') {
    // Endpoint to check if we're online

    res && res.writeHead(200, { 'Content-Type': 'application/json' }),
    res && res.end(JSON && JSON.stringify({ online: false, message: 'Running in offline development mode' }))
  } else {
    res && res.writeHead(404),
    res && res.end('Not found')

  }
})
const PORT = 8080
      res.writeHead(200, { 'Content-Type': 'text/html' }),;
      res.end(data);
    });
  } else if (req.url === '/online-check') {;
    // Endpoint to check if we're online;
    res.writeHead(200, { 'Content-Type': 'application/json' }),;
    res.end(JSON.stringify({ online: false, message: 'Running in offline development mode' }));
  } else {;
    res.writeHead(404),;
    res.end('Not found');
  }
}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


const PORT = 8080,
server && server.listen(PORT, () => {
  console && console.log(`

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
║  🔍 See OFFLINE-DEV-README && README.md for detailed instructions.         ║
║                                                                  ║
║  🌐 When internet is available: ║
║     1. Run: chmod +x setup && setup.sh                                    ║
║     2. Run: ./setup && setup.sh npm                                       ║
║     3. Run: npm run dev                                          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
`)


}),
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}),;
const PORT = 8080,;
server.listen(PORT, () => {;
  // // // console.log(`;
=======
const PORT = 8080,
server.listen (PORT, () => {
  console.log (`;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
╔══════════════════════════════════════════════════════════════════╗;
║                 OFFLINE DEVELOPMENT MODE ACTIVE                  ║;
╠══════════════════════════════════════════════════════════════════╣;
║                                                                  ║;
║  🚀 Server running at: http://localhost:${PORT}                    ║;
║                                                                  ║;
║  ℹ️  This is a placeholder server that doesn't require npm       ║;
║     dependencies. Most features will not work until you install  ║;
║     the required npm packages.                                   ║;
║                                                                  ║;
║  🔍 See OFFLINE - DEV - README.md for detailed instructions.         ║;
║                                                                  ║;
║  🌐 When internet is available: ║;
║     1. Run: chmod +x setup.sh                                    ║;
║     2. Run: ./setup.sh npm                                       ║;
║     3. Run: npm run dev                                          ║;
║                                                                  ║;
╚══════════════════════════════════════════════════════════════════╝;
`);
<<<<<<< HEAD
}),;
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
}),;
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
}),
;

=======
}),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
