#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// Fix accessibility.tsx
const accessibilityPath = '/workspace/pages/accessibility.tsx';
let accessibilityContent = fs.readFileSync(accessibilityPath, 'utf8');

// Fix the broken structure around line 254
accessibilityContent = accessibilityContent.replace(
  /}\s*\)\s*;\s*}\s*\)\s*}\s*We adhere to internationally recognized accessibility standards and guidelines\.\s*<\/p>\s*<\/motion\.div>/g,
  `}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Compliance & Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We adhere to internationally recognized accessibility standards and guidelines.
              </p>
            </motion.div>
`
);

fs.writeFileSync(accessibilityPath, accessibilityContent);
console.log('✅ Fixed accessibility.tsx');

// Fix cookies.tsx
const cookiesPath = '/workspace/pages/cookies.tsx';
let cookiesContent = fs.readFileSync(cookiesPath, 'utf8');

// Fix the broken structure
cookiesContent = cookiesContent.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,
  `</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
`
);

fs.writeFileSync(cookiesPath, cookiesContent);
console.log('✅ Fixed cookies.tsx');

// Fix digital-transformation.tsx
const digitalPath = '/workspace/pages/digital-transformation.tsx';
let digitalContent = fs.readFileSync(digitalPath, 'utf8');

// Fix the broken structure
digitalContent = digitalContent.replace(
  /<\/motion\.div>\s*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">/g,
  `</motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
`
);

fs.writeFileSync(digitalPath, digitalContent);
console.log('✅ Fixed digital-transformation.tsx');

// Fix guides.tsx
const guidesPath = '/workspace/pages/guides.tsx';
let guidesContent = fs.readFileSync(guidesPath, 'utf8');

// Fix the import issue
guidesContent = guidesContent.replace(
  /import Link from 'next\/link';';/g,
  `import Link from 'next/link';`
);

// Fix the broken structure
guidesContent = guidesContent.replace(
  /}\s*<div className="container mx-auto px-4 relative z-10">/g,
  `}

export default function Guides() {
  return (
    <Layout>
      <Head>
        <title>Guides & Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive guides and resources for technology implementation and best practices." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 relative z-10">
`
);

fs.writeFileSync(guidesPath, guidesContent);
console.log('✅ Fixed guides.tsx');

// Fix faq.tsx
const faqPath = '/workspace/pages/faq.tsx';
let faqContent = fs.readFileSync(faqPath, 'utf8');

// Add missing closing tags
faqContent = faqContent.replace(
  /<\/>\s*$/g,
  `      </main>
    </Layout>
  );
}`
);

fs.writeFileSync(faqPath, faqContent);
console.log('✅ Fixed faq.tsx');

console.log('🎉 All syntax errors fixed!');