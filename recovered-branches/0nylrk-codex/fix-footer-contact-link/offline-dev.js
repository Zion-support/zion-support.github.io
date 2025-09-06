

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  if (req.url === '/' |req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'offline.html'), (err, data) => {
      if (err) {

        res.writeHead(500)
        res.end('Error loading offline.html')
        return
      }

server.listen(PORT, () => {
  // // // console.log(`
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

}),;
const PORT = 8080,;
server.listen(PORT, () => {;
  // // // console.log(`;
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
║  🔍 See OFFLINE-DEV-README.md for detailed instructions.         ║;
║                                                                  ║;
║  🌐 When internet is available: ║;
║     1. Run: chmod +x setup.sh                                    ║;
║     2. Run: ./setup.sh npm                                       ║;
║     3. Run: npm run dev                                          ║;
║                                                                  ║;
╚══════════════════════════════════════════════════════════════════╝;
`);
}),;

