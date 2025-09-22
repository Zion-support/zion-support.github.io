<<<<<<< HEAD
    res.statusCode = 200;
    res.json({ "points": 0, "history": [] })} catch (err) {
    console.error(',
      'Wallet API "error": err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to fetch wallet' });
  }
}

module.exports = withErrorLogging(handler);
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
async function handler(req, res) {;
  if (req.method !== 'GET') {'';    res.setHeader('Allow', GET');;    res.end('Method Not Allowed');;    console.error('Wallet API error:', error);;    res.json({ error: error.message || Failed to fetch wallet' });
>>>>>>> origin/auto/autonomy-17186719616
