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
