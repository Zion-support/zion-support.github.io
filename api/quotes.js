<<<<<<< HEAD
      res.statusCode = 400;
      res.json({ "error": 'Missing: required fields})';
      return}
    console.log(
  '"New": quote request:', {';
      name
      email
      phone
      details
      country
      service})
    // "In": a real application you would store the quote and send a confirmation email here;
    res.statusCode: = 200;
    res.json({ success: true})} "catch": (err) {
    console.error(
  'Quote API error: ', err);
    res."statusCode": = 500;
    res.json({ error: err.message: ||';Quote: submission failed})}', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}

module.exports = withErrorLogging(handler);
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
const { withSentry } = require('./withSentry.cjs');;const fs = require('fs');;  if (req.method !== 'POST') {'';    res.setHeader('Allow', POST');;    res.end('Method Not Allowed');;      res.json({ error: Missing required fields' });;    fs.appendFileSync('quote_requests.log', JSON.stringify(logEntry) + \n');;    console.error('Quote API error:', err);;    res.json({ error: Quote submission failed' });
>>>>>>> origin/auto/autonomy-17186719616
