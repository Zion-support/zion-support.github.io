<<<<<<< HEAD
const fs="require('fs');"
const path="require('path');"
// Simple wrapper function to replace withSentry;
// withSentry removed;
;
const dir = "path.join(process.cwd(), 'data');"
const file = "path.join(dir, 'onsite-requests.json');"
export default function handler(req, res) {}
  if (req.method !== 'POST') {}
    res.statusCode="405;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
=======
const fs = require('fs);;

const path = require('path);;

// Simple wrapper function to replace withSentry;

// withSentry removed
;

const dir = path.join(process.cwd(), 'data);;

const file = path.join(dir, 'onsite-requests.json);;

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;

    res.setHeader('Content-Type', 'application/json);

    res.end(JSON.stringify({ error: 'Method not allowed }));

>>>>>>> origin/main
    return}

;

const { name, email, company, phone, message, location } = req.body || {};
  if (!fs.existsSync(dir)) {}
    fs.mkdirSync(dir, { recursive: true })}

;
<<<<<<< HEAD
let existing="[];"
  try {}
    if (fs.existsSync(file)) {;
const data = "fs.readFileSync(file, 'utf8');"
      existing="JSON.parse(data);"
      if (!Array.isArray(existing)) existing="[]}"
  } catch (error) {}
    // console.error removed for production;
existing="[]}"
;
const newRequest = {}
=======

let existing = [];;

  try {
    if (fs.existsSync(file)) {;

const data = fs.readFileSync(file, 'utf8);;

      existing = JSON.parse(data);

      if (!Array.isArray(existing)) existing = []}

  } catch (error) {
    // console.error removed for production
existing = []}

;

const newRequest = {;;

>>>>>>> origin/main
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    location,
    timestamp: new Date().toISOString(),
    status: pending
  };
  existing.push(newRequest);
  try {}
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
<<<<<<< HEAD
    res.statusCode="200;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({}
      success: true, 
      message: 'Onsite request submitted successfully',
      id: newRequest.id;
    }))} catch (error) {}
    // console.error removed for production;
res.statusCode="500;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }))}
}
module.exports="handler;"
=======

    res.statusCode = 200;

    res.setHeader('Content-Type', 'application/json);

    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      id: newRequest.id
    }))} catch (error) {
    // console.error removed for production
res.statusCode = 500;

    res.setHeader('Content-Type', 'application/json);

    res.end(JSON.stringify({ error: 'Failed to save request' }))}

}

module.exports = handler;
>>>>>>> origin/main
