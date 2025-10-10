const fs = require('fs');

// Read the Footer component
let content = fs.readFileSync('app/components/Footer.tsx', 'utf8');

// Fix all map functions that are missing proper closing tags
const fixes = [
  // Fix AI Services map
  {
    from: /(\s+{aiServices\.slice\(0, 8\)\.map\(\(service, index\) => \(\s+<li key={index}>\s+<Link\s+href={service\.url}\s+className="[^"]*">\s+{service\.name}\s+}\)\)\s+<li>)/g,
    to: `$1
                  </Link>
                </li>
              ))}
              <li>`
  },
  // Fix IT Services map
  {
    from: /(\s+{itServices\.slice\(0, 6\)\.map\(\(service, index\) => \(\s+<li key={index}>\s+<Link\s+href={service\.url}\s+className="[^"]*">\s+{service\.name}\s+}\)\)\s+<li>)/g,
    to: `$1
                  </Link>
                </li>
              ))}
              <li>`
  },
  // Fix Micro SAAS map
  {
    from: /(\s+{microSaasServices\.slice\(0, 8\)\.map\(\(service, index\) => \(\s+<li key={index}>\s+<Link\s+href={service\.url}\s+className="[^"]*">\s+{service\.name}\s+}\)\)\s+<li>)/g,
    to: `$1
                  </Link>
                </li>
              ))}
              <li>`
  },
  // Fix Emerging Tech map
  {
    from: /(\s+{emergingTech\.slice\(0, 6\)\.map\(\(service, index\) => \(\s+<li key={index}>\s+<Link\s+href={service\.url}\s+className="[^"]*">\s+{service\.name}\s+}\)\)\s+<li>)/g,
    to: `$1
                  </Link>
                </li>
              ))}
              <li>`
  },
  // Fix Company links map
  {
    from: /(\s+{companyLinks\.map\(\(link, index\) => \(\s+<li key={index}>\s+<Link\s+href={link\.url}\s+className="[^"]*">\s+{link\.name}\s+}\)\)\s+<li>)/g,
    to: `$1
                  </Link>
                </li>
              ))}
              <li>`
  },
  // Fix Support links map
  {
    from: /(\s+{supportLinks\.map\(\(link, index\) => \(\s+<li key={index}>\s+<Link\s+href={link\.url}\s+className="[^"]*">\s+{link\.name}\s+}\)\)\s+<li>)/g,
    to: `$1
                  </Link>
                </li>
              ))}
              <li>`
  }
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.from, fix.to);
});

// Write the fixed content back
fs.writeFileSync('app/components/Footer.tsx', content);
console.log('Footer component fixed!');