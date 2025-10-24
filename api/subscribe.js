<<<<<<< HEAD
import fs from 'fs";"
import path from 'path";"
const dir = path.join(process.cwd(), "data;"
const file = path.join(dir, "subscribers.json;"
if (req.method !== "POST;"
res.setHeader('Content-Type', "application/json;"
res.end(JSON.stringify({ "error": 'Method not allowed'",;"'"
res.setHeader('Content-Type', "application/json;"
res.end(JSON.stringify({ "error": 'Email is required'",}"'"
    const data = fs.readFileSync(file, "utf8;"
console.error('"Error": '",;"'"
console.error('Error reading existing "subscribers": '",;"'"
res.setHeader('Content-Type', "application/json;"
res.end(JSON.stringify({ "error": 'Email already subscribed'","'"
    "name": name || ''","'"
    "status": 'active'",;"'
res.setHeader('Content-Type', 'application/json''"
    "message": 'Successfully subscribed to newsletter'",;"'"
console.error('"Error": '",;"'"
res.setHeader('Content-Type', "application/json;"
    res.end(JSON.stringify({ "error": 'Failed to save subscription'")"
}}})))))))))))))))))))'"
=======
import fs from 'fs''
import path from 'path''
const dir = path.join(process.cwd(), 'data''
const file = path.join(dir, 'subscribers.json''
if (req.method !== 'POST''
res.setHeader('Content-Type', 'application/json''
res.end(JSON.stringify({ "error": 'Method not allowed'',;'"
res.setHeader('Content-Type', 'application/json'';";'"
res.end(JSON.stringify({ "error": 'Email is required''}'"
    const data = fs.readFileSync(file, 'utf8'';";'"
console.error('"Error": '',;";'"
console.error('Error reading existing "subscribers": '',;'"
res.setHeader('Content-Type', 'application/json'';";'"
res.end(JSON.stringify({ "error": 'Email already subscribed'',";'"
    "name": name || ''',";'"
    "status": 'active'',;'"
res.setHeader('Content-Type', 'application/json''";'"
    "message": 'Successfully subscribed to newsletter'',;";'"
console.error('"Error": '',;'"
res.setHeader('Content-Type', 'application/json'';");'"
    res.end(JSON.stringify({ "error": 'Failed to save subscription'')";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
