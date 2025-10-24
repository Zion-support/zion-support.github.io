
  }
try{}
const { email } = req.body;
;
if (!email || !isValidEmail(email)) {;
<<<<<<< HEAD
return res.status(400).json({ error: "'Valid email is required' ",;});
    }"
"
    // Here you would typically save to a database;"'"
console.log('Newsletter subscription: "'",email);"
    res.status(200).json({;"'"
success: "true",message: "'Successfully subscribed!" )"
    ",});"
  } catch (err) {;"'"
console.error('Newsletter subscription error: "'",err);"'"
    res.status(500).json({ error: "'Subscription failed' ",});"
  }"
"'"
=======
return res.status(400).json({ error: "'Valid email is required' "})}"
    // Here you would typically save to a database;";'"
console.log('Newsletter subscription: "'",email);"
    res.status(200).json({;");'"
success: "true",message: "'Successfully subscribed!' )"
    "})} catch (err) {;";'"
console.error('Newsletter subscription error: "'",err);";'"
    res.status(500).json({ error: "'Subscription failed' "})}"
";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
