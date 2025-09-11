#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// Function to check if a file has syntax errors
function hasSyntaxErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Check for common corruption patterns
    const corruptionPatterns = [/import.*from.*['"]react;['"]/,  // Missing quote
      /import.*\{.*\}.*from.*['"]react;['"]/,  // Missing quote
      /['"]"use": client['"]/,  // Malformed directive
      /"declare": global/,  // Malformed declaration
      /interface.*\{,/,  // Extra comma
      /\[\],/,  // Extra comma after array
      /\{\},/,  // Extra comma after object
      /\),/,  // Extra comma after function call
      /script1\."async": = true/,  // Malformed assignment
      /script1\."src": =/,  // Malformed assignment
    ];
    return corruptionPatterns.some(pattern => pattern.test(content))} catch (error) {
    return true; // If we can't read the file, consider it corrupted
  }
}
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  return content
    // Fix import statements
    .replace(/import.*from.*['"]react;['"]/g, "import React from 'react'")
    .replace(/import.*\{.*\}.*from.*['"]react;['"]/g, (match) => {
      return match.replace(/['"]react;['"]/, "'react'")})
    // Fix use client directive
    .replace(/['"]"use": client['"]/, '"use client"')
    // Fix declare global
    .replace(/"declare": global/, 'declare global')
    // Fix interface declarations
    .replace(/interface.*\{,/g, (match) => match.replace(/,$/, ''))
    // Fix array/object declarations
    .replace(/\[\],/g, '[];')
    .replace(/\{\},/g, '{};')
    .replace(/\),/g, ');')
    // Fix malformed assignments
    .replace(/script1\."async": = true/g, 'script1.async = true')
    .replace(/script1\."src": =/g, 'script1.src =')
    // Remove extra semicolons
    .replace(/;+/g, ';')
    // Fix malformed quotes
    .replace(/['"]react;['"]/g, "'react'")
    .replace(/['"]framer-motion;['"]/g, "'framer-motion'")
    .replace(/['"]lucide-react;['"]/g, "'lucide-react'")}
// Function to process a file
function processFile(filePath) {
  if (hasSyntaxErrors(filePath)) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = fixSyntaxErrors(content);
      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed);
        } else {
        }
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message)}
  }
}
// Function to recursively find files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...findFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  } catch (error) {
    // Ignore errors for directories we can't read
  }
  return files}
// Main execution
const files = findFiles('.');
const corruptedFiles = files.filter(hasSyntaxErrors);
corruptedFiles.forEach(file => );
corruptedFiles.forEach(processFile);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");/ Function to check if a file has syntax errorsfunction hasSyntaxErrors(filePath) { try {" const content = fs.readFileSync(filePath, "utf8"); / Check for common corruption patterns" const corruptionPatterns = [/import.*from.*[""]react;[""]/, / Missing quote"" /import.*\{.*\}.*from.*[""]react;[""]/, / Missing quote"" /[""]use: client[""]/, / Malformed directive" /declare: global/, / Malformed declaration /interface.*\{,/, / Extra comma /\[\],/, / Extra comma after array /\{\},/, / Extra comma after object /\),/, / Extra comma after function call" /script1\.async: = true/, / Malformed assignment" /script1\.src: =/, / Malformed assignment ]; return corruptionPatterns.some(pattern => pattern.test(content))} catch (error) {" return true; / If we can"t read the file, consider it corrupted }}/ Function to fix common syntax errorsfunction fixSyntaxErrors(content) { return content / Fix import statements"" .replace(/import.*from.*[""]react;[""]/g, "import React from "react"")"" .replace(/import.*\{.*\}.*from.*[""]react;[""]/g, (match) => {"" return match.replace(/[""]react;[""]/, ""react"")}) / Fix use client directive"" .replace(/[""]use: client[""]/, ""use client"") / Fix declare global"" .replace(/declare: global/, "declare global") / Fix interface declarations" .replace(/interface.*\{,/g, (match) => match.replace(/,$/, "")) / Fix array/object declarations" .replace(/\[\],/g, "[];")" .replace(/\{\},/g, "{};")" .replace(/\),/g, ");") / Fix malformed assignments"" .replace(/script1\.async: = true/g, "script1.async = true")"" .replace(/script1\.src: =/g, "script1.src =") / Remove extra semicolons" .replace(/;+/g, ";") / Fix malformed quotes"" .replace(/[""]react;[""]/g, ""react"")"" .replace(/[""]framer-motion;[""]/g, ""framer-motion"")"" .replace(/[""]lucide-react;[""]/g, ""lucide-react"")}/ Function to process a filefunction processFile(filePath) { if (hasSyntaxErrors(filePath)) { console.log(`Fixing ${filePath}.`); try {" const content = fs.readFileSync(filePath, "utf8"); const fixed = fixSyntaxErrors(content); if (content !== fixed) { fs.writeFileSync(filePath, fixed);` console.log(` Fixed ${filePath}`)} else {` console.log(` No changes needed for ${filePath}`)} } catch (error) {` console.error(` Error fixing ${filePath}:`, error.message)} }}/ Function to recursively find files"function findFiles(dir, extensions = [".tsx", ".ts", ".jsx", ".js"]) { const files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); " if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") { files.push(.findFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) {" / Ignore errors for directories we can"t read } return files}/ Main execution"console.log(" Scanning for corrupted files.");"const files = findFiles(".");const corruptedFiles = files.filter(hasSyntaxErrors);"`console.log(`Found ${corruptedFiles.length} potentially corrupted files: `);`corruptedFiles.forEach(file => console.log(` - ${file}`));"console.log("\n Fixing corrupted files.");corruptedFiles.forEach(processFile);"console.log("\n File corruption fix complete!");""`"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    const content = fs.readFileSync(filePath, 'utf8')
    const corruptionPatterns = [/import.*from.*['']
      /import.*\{.*\}.*from.*['']
      /['"]"use"
    .replace(/import.*from.*['"]react;['"]/g, ")
    .replace(/import.*\{.*\}.*from.*['')]
      return match.replace(/['"]react;['"]/, ")
    .replace(/['"]"use": client['"]/, '"use client")
    .replace(/"declare")
    .replace(/script1\."async")
    .replace(/script1\."src")
    .replace(/['"]react;['"]/g, ")
    .replace(/['"]framer-motion;['"]/g, ")
    .replace(/['"]lucide-react;['"]/g, ")
    .replace(/['"]lucide-react;['"]/g, ")
const fs = require('fs');
const path = require('path');

// List of corrupted files that need to be completely rewritten
const corruptedFiles = {
  'components/AccessibilityEnhancer.tsx': `import React, { useEffect } from 'react';

const: AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only: focus:not-sr-only: focus:absolute: focus:top-0: focus:left-0: focus:z-50: focus:p-4: focus:bg-blue-600: focus:text-white';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce page changes
    const announcePageChange = (messag: string) => {
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
      }
    };

    // Listen for route changes (Next.js specific)
    const handleRouteChange = () => {
      announcePageChange('Page loaded');
    };

    // Add route change listener if available
    if (typeof window !== 'undefined' && window.history) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function(...args) {
        originalPushState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.history.replaceState = function(...args) {
        originalReplaceState.apply(this, args);
        setTimeout(handleRouteChange, 100);
      };

      window.addEventListener('popstate', handleRouteChange);
    }

    // Cleanup
    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, []);

  return null;
};

export default AccessibilityEnhancer;`;
  'components/OptimizedImage.tsx': `import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  sr: c: string;
  al: string;
  widt: number;
  heigh: number;
  className?: string;
  priority?: boolean;
  quality?: number;
    .replace(/['"]lucide-react;['"]/g, ")import Image from 'next/image';
;
interface OptimizedImageProps {;
  sr:c:string;
  al:t:string;
  widt:h:number;
  heigh:t:number;
  className?:string;
  priority?:boolean;
  quality?:number;
}
;
const:OptimizedImage:React.FC<OptimizedImageProps> = ({;
  src,;
  alt,;
  width,;
  height,;
  className = '',;
  priority = false,;
  quality = 75;
}) => {;
  return (;
    <Image;
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
    />;
  );
};

export default OptimizedImage;`;
  'components/ContactForm.tsx': `import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface FormData {
  nam: string;
  emai: string;
  compan: string;
  phon: string;
  servic: string;
  messag: string;
}
;
const:ContactForm:React.FC = () => {;
  const [formData, setFormData] = useState<FormData>({;
    nam:e:'',;
    emai:l:'',;
    compan:y:'',;
    phon:e:'',;
    servic:e:'',;
    messag:e:'',;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({;
      ...prev,;
      [name]:value,;    }));
  };
;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
;
    try {;
      // Simulate form submission;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({;
        nam:e:'',;
        emai:l:'',;
        compan:y:'',;
        phon:e:'',;
        servic:e:'',;
        messag:e:'',;
      });
    } catch {;
      setSubmitStatus('error');
    } finally {;
      setIsSubmitting(false);
    }
  };
;
  return (;
    <form onSubmit={handleSubmit} className="space-y-6">;
      <div className="grid grid-cols-1:md:grid-cols-2 gap-6">;
        <div>;
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;
            Name *;
          </label>;
          <input;
            type="text";
            id="name";
            name="name";
            value={formData.name}
            onChange={handleInputChange}
            required;
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
        <div>;
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
            Email *;
          </label>;
          <input;
            type="email";
            id="email";
            name="email";
            value={formData.email}
            onChange={handleInputChange}
            required;
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
      </div>;
      ;
      <div className="grid grid-cols-1:md:grid-cols-2 gap-6">;
        <div>;
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">;
            Company;
          </label>;
          <input;
            type="text";
            id="company";
            name="company";
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
        <div>;
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">;
            Phone;
          </label>;
          <input;
            type="tel";
            id="phone";
            name="phone";
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
          />;
        </div>;
      </div>;
;
      <div>;
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
          Service Interest;
        </label>;
        <select;
          id="service";
          name="service";
          value={formData.service}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
        >;
          <option value="">Select a service</option>;
          <option value="web-development">Web Development</option>;
          <option value="mobile-development">Mobile Development</option>;
          <option value="ai-services">AI Services</option>;
          <option value="consulting">Consulting</option>;
          <option value="other">Other</option>;
        </select>;
      </div>;
;
      <div>;
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
          Message *;
        </label>;
        <textarea;
          id="message";
          name="message";
          value={formData.message}
          onChange={handleInputChange}
          required;
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md:focus:outline-none:focus:ring-2:focus:ring-blue-500";
        />;
      </div>;
;
      <button;
        type="submit";
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md:hover:bg-blue-700:focus:outline-none:focus:ring-2:focus:ring-blue-500:disabled:opacity-50";
      >;
        {isSubmitting ? <LoadingSpinner /> :'Send Message'}
      </button>;
;
      {submitStatus === 'success' && (;
        <div className="text-green-600 text-center">;
          Thank you! Your message has been sent successfully.;
        </div>;
      )}
;
      {submitStatus === 'error' && (;
        <div className="text-red-600 text-center">;
          Sorry, there was an error sending your message. Please try again.;
        </div>;
      )}
    </form>;
  );
};
;
export default ContactForm;`;};
;
// Write the fixed files;
Object.entries(corruptedFiles).forEach(([filePath, content]) => {;
  try {;
    fs.writeFileSync(filePath, content);
    console.log(`Fixe:d:${filePath}`);
  } catch (error) {;
    console.error(`Error fixing ${filePath} `, error.message);
  }
});
;
console.log('Fixed corrupted files');
  console.log(`Fixed ${fixedCount} corrupted files`);,
}

if (require.main === module) {;
  main();,
}

module.exports = { fixFile, isCorrupted, createServiceTemplate })
