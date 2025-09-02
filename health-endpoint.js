const http = require(,
  http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
ursor/automate-test-fix-improve-and-merge-code-99d1
  } else {
    res.writeHead(404, {,
  Content-Type': 'text/plain });
    res.end(
  'Not Found');
  }
});

server.listen(port, () => {
  console.log(`Health endpoint server running on port ${port}`);
});
