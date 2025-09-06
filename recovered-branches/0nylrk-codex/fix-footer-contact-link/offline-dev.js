    })
  } else if (req && req.url === '/online-check') {
    // Endpoint to check if we're online
    res && res.writeHead(200, { 'Content-Type': 'application/json' }),
    res && res.end(JSON && JSON.stringify({ online: false, message: 'Running in offline development mode' }))
  } else {
    res && res.writeHead(404),
    res && res.end('Not found')



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

;
}),;
const PORT = 8080,;
server.listen(PORT, () => {;
  // // // console.log(`;
const PORT = 8080,
server.listen (PORT, () => {
  console.log (`;
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
║                                                                  ║;
║  🌐 When internet is available: ║;
║     1. Run: chmod +x setup.sh                                    ║;
║     2. Run: ./setup.sh npm                                       ║;
║     3. Run: npm run dev                                          ║;
║                                                                  ║;
╚══════════════════════════════════════════════════════════════════╝;
`);
}),
;

}),

