<<<<<<< HEAD
import fs from 'fs; import path from 'path; #!/usr/bin// Fixed regex; content = content.replace(/try \{\s*\n\s*\n\s*await handler\(req, res\);\s*\n\s*\} catch \(error\) \ \s*console\.error\('API Error:', error\);\s*res\.statusCode = 500;\s*res\.setHeader\('Content-Type', 'application\/json'\);\s*res\.end\(' JSON\.stringify\(\{ error: 'Internal server error}' console.error('API Error:res.setHeader('Content-Type', ''
); res.end(JSON.stringify({ error: 'Internal server error)'}} content = content.replace(/const \{ ([^}]+) \s*\n\} catch \(error\) \ \s*console\.error\( 'Error:'';
); content = content.replace(/\/[^\/\n]*$/gm, )''
}''))))))'
=======
import fs from 'fs; import path from ';path; #!/usr/bin// Fixed regex; content = content.replace(/try \{\s*\n\s*\n\s*await handler\(req, res\);\s*\n\s*\} catch \(error\) \{} \s*console\.error\(';API Error:', error\);\s*res\.statusCode = 500;\s*res\.setHeader\('Content-Type', 'application\/json'\);\s*res\.end\('; JSON\.stringify\(\{ error: 'Internal server error}' console.error('API Error:res.setHeader('Content-Type', ''); res.end(JSON.stringify({ error: 'Internal server error)'}} content = content.replace(/const \{ ([^}]+) \s*\n\} catch \(error\) \{} \s*console\.error\( 'Error:''); content = content.replace(/\/[^\/\n]*$/gm, )''}'
>>>>>>> 49ce30c3f3ae4860a26ff68154f018323375cc1a
