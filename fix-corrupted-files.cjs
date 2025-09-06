<<<<<<< HEAD
#!/usr/bin/env node;
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
const fs = require("fs");
const path = require("path");
// Function to check if a file is corrupted;
function isCorrupted(content) {;
  // Check for common corruption patterns;
  const corruptionPatterns = [;
  /import.*from.*import/,  // Double imports;
    /export.*function.*export/,  // Double exports;
    /<=.*import/,  // Malformed imports;
    /return.*\(.*<=/,  // Malformed returns;
    /";.*";/,  // Multiple semicolons;
    /"";.*"";/,  // Multiple quotes and semicolons;
    /Error: Parsing error/,  // Parsing errors;
    /Unterminated string literal/,  // Unterminated strings;
    /Expression expected/,  // Expression errors;
    /Declaration or statement expected/,  // Declaration errors;
  ];
  return corruptionPatterns.some(pattern => pattern.test(content));,
}

// Function to create a basic service template;
function createServiceTemplate(filename) {;
  const serviceName = path.basename(filename, path.extname(filename));
    .replace(/[^a-zA-Z0-9]/g, " ");
    .replace(/\s+/g, " ");
    .trim();
  return `import React from "react";
import { motion  } from "framer-motion";
import { SEO  } from "../../components/SEO";
export default function ${serviceName.replace(/\s+/g, "")}() {;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="${serviceName} - Zion Tech Group";
        description="Professional ${serviceName.toLowerCase()} services by Zion Tech Group";
      />;
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              ${serviceName}
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Professional ${serviceName.toLowerCase()} services designed to meet your business needs.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300";
              >;
                Get Started;
              </motion.button>;
              <motion.button;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300";
              >;
                Learn More;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Our Services;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We provide comprehensive ${serviceName.toLowerCase()} solutions tailored to your requirements.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50">;
              <h3 className="text-xl font-semibold text-white mb-3">Service 1</h3>;
              <p className="text-gray-300">Professional service description</p>;
            </div>;
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50">;
              <h3 className="text-xl font-semibold text-white mb-3">Service 2</h3>;
              <p className="text-gray-300">Professional service description</p>;
            </div>;
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50">;
              <h3 className="text-xl font-semibold text-white mb-3">Service 3</h3>;
              <p className="text-gray-300">Professional service description</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );,
}
`;,
}

// Function to fix a single file;
function fixFile(filePath) {;
  try {;
  const content = fs.readFileSync(filePath, "utf8");
    if (isCorrupted(content)) {;
  console.log(`Fixing corrupted file: ${filePath}`);
      const newContent = createServiceTemplate(filePath);
      fs.writeFileSync(filePath, newContent, "utf8");
      return true;,
}

    return false;,
} catch (error) {;
  console.error(`Error processing ${filePath}:`, error.message);
    return false;,
}
}

// Main function;
function $1() {;
  const servicesDir = path.join(__dirname, "src", "pages", "services");
  if (!fs.existsSync(servicesDir)) {;
  console.error("Services directory not found");
    return;,
}

  const files = fs.readdirSync(servicesDir);
    .filter(file => file.endsWith(".tsx") || file.endsWith(".jsx"));
    .map(file => path.join(servicesDir, file));
  console.log(`Found ${files.length} service files`);
  let fixedCount = 0;
  files.forEach(file => {;
  if (fixFile(file)) {;
  fixedCount++;,
>>>>>>> origin/automation-fixes
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
<<<<<<< HEAD

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
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
  console.log(`Fixed ${fixedCount} corrupted files`);,
}

if (require.main === module) {;
  main();,
}

module.exports = { fixFile, isCorrupted, createServiceTemplate })
>>>>>>> origin/automation-fixes
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
