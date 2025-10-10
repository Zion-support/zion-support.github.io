<<<<<<< HEAD
const fs="require('fs');"
const path="require('path');"
;
const dir = "path.join(process.cwd(), 'data');"
const file = "path.join(dir, 'wallets.json');"
export default function handler(req, res) {}
  if (req.method !== 'POST') {}
    res.statusCode="405;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
=======
const fs = require(fs);;

const path = require(path);;

;

const dir = path.join(process.cwd(), data);;

const file = path.join(dir, wallets.json);;

export default function handler(req, res) {
  if (req.method !== 'POST) {
    res.statusCode = 405;

    res.setHeader('Content-Type', application/json);

    res.end(JSON.stringify({ error: Method not allowed }));

>>>>>>> origin/main
    return}

;

const { address, type, name, userId } = req.body || {};
<<<<<<< HEAD
  if (!address || !type) {}
    res.statusCode="400;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Address and type are required' }));
=======

  if (!address || !type) {
    res.statusCode = 400;

    res.setHeader('Content-Type', application/json);

    res.end(JSON.stringify({ error: Address and type are required }));

>>>>>>> origin/main
    return}

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
  // Check if wallet address already exists;
const existingWallet = existing.find(wallet => wallet.address === address);
  if (existingWallet) {}
    res.statusCode="400;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Wallet address already exists' }));
=======

let existing = [];;

  try {
    if (fs.existsSync(file)) {;

const data = fs.readFileSync(file, utf8);;

      existing = JSON.parse(data);

      if (!Array.isArray(existing)) existing = []}

  } catch (error) {
    // console.error removed for production
existing = []}

  // Check if wallet address already exists;

const existingWallet = existing.find(wallet => wallet.address === address);;

  if (existingWallet) {
    res.statusCode = 400;

    res.setHeader('Content-Type', application/json);

    res.end(JSON.stringify({ error: Wallet address already exists }));

>>>>>>> origin/main
    return}

;
<<<<<<< HEAD
const newWallet = {}
=======

const newWallet = {;;

>>>>>>> origin/main
    id: Date.now().toString(),
    address,
    type,
    name: name || ',
    userId: userId || ',
    timestamp: new Date().toISOString(),
    status: active
  };
  existing.push(newWallet);
  try {}
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
<<<<<<< HEAD
    res.statusCode="200;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({}
      success: true, 
      message: 'Wallet added successfully',
      id: newWallet.id;
    }))} catch (error) {}
    // console.error removed for production;
res.statusCode="500;"
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save wallet' }))}
}
=======

    res.statusCode = 200;

    res.setHeader('Content-Type', application/json);

    res.end(JSON.stringify({ 
      success: true, 
      message: 'Wallet added successfully,
      id: newWallet.id
    }))} catch (error) {
    // console.error removed for production
res.statusCode = 500;

    res.setHeader('Content-Type', application/json);

    res.end(JSON.stringify({ error: 'Failed to save wallet }))}

}
>>>>>>> origin/main
