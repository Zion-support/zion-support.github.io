
const _http = require('http');
const _fs = require('fs');
const _path = require('path');

const _server = http.createServer(_(req, _res) => {_if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, _'offline.html'), _(_err, _data) => {
      if (err) {
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
