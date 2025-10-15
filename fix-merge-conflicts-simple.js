const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up common syntax issues
    content = content.replace(/;\s*;\s*/g, ';');
    content = content.replace(/\{\s*;\s*/g, '{');
    content = content.replace(/\}\s*;\s*/g, '}');
    content = content.replace(/\}\s*;\s*\}\s*;\s*/g, '}');
    
    // Fix broken function declarations
    content = content.replace(/export default async function handler\(req, res\) \{\s*if \(req\.method !== 'POST'\) \{\s*return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \}\);\s*\}\s*\}\s*try \{\s*\}\s*catch \(error\) \{\s*console\.error\(error\);\s*\};\s*\};\s*res\.status\(500\)\.json\(\{\s*error: 'Internal server error",\s*message: error\.message \s*\}\);\s*\};\s*\}\s*export default withErrorLogging\(async \(req, res\) => \{\s*if \(req\.method !== 'POST'\) \{\s*return res\.status\(405\)\.json\(\{ error: 'Method not allowed' \}\);\s*\}\s*try \{\s*const \{ amount, currency = 'usd' \} = req\.body;\s*\/\/ Mock checkout session creation\s*const session = \{\s*id: `cs_\$\{Date\.now\(\)\}`,\s*amount,\s*currency,\s*status: 'open',\s*url: `https:\/\/checkout\.stripe\.com\/pay\/cs_\$\{Date\.now\(\)\}`\s*\};\s*res\.status\(200\)\.json\(\{ session \}\);\s*\} catch \(error\) \{\s*console\.error\('Checkout session creation failed:', error\);\s*res\.status\(500\)\.json\(\{ error: 'Failed to create checkout session' \}\);\s*\}\s*\}\);/g, 
      `const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({
        error: 'Internal server error',
        message: error.message
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    // Mock checkout session creation
    const session = {
      id: \`cs_\${Date.now()}\`,
      amount,
      currency,
      status: 'open',
      url: \`https://checkout.stripe.com/pay/cs_\${Date.now()}\`
    };
    
    res.status(200).json({ session });
  } catch (error) {
    console.error('Checkout session creation failed:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});`);

    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixFilesInDirectory(filePath);
      }
    } else if (file.match(/\.(js|ts|tsx|jsx)$/)) {
      cleanMergeConflicts(filePath);
    }
  });
}

// Start fixing from the current directory
console.log('Starting merge conflict cleanup...');
fixFilesInDirectory('.');
console.log('Merge conflict cleanup completed!');