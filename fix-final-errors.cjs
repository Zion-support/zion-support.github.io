#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix final syntax errors in TSX files
function fixFinalErrors(content) {
  let fixed = content;
  
  // Fix malformed JSX structures - common pattern
  fixed = fixed.replace(/<SEOHead\s*>\s*title="([^"]*)"\s*description="([^"]*)"\s*>\s*\/>/g, 
    '<SEOHead\n        title="$1"\n        description="$2"\n      />');
  
  // Fix malformed JSX structures with keywords
  fixed = fixed.replace(/<SEOHead\s*>\s*title="([^"]*)"\s*description="([^"]*)"\s*keywords="([^"]*)"\s*>\s*\/>/g, 
    '<SEOHead\n        title="$1"\n        description="$2"\n        keywords="$3"\n      />');
  
  // Fix incomplete JSX structures
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*\}\s*;\s*\{\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  // Fix about page specific issues - handle the complex structure
  if (fixed.includes('import { Helmet } from "react-helmet-async"')) {
    // Fix the about page completely
    fixed = `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "AI Solutions" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Your data and systems are protected with enterprise-grade security measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and challenges."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality deliverables."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions, 
              IT services, and innovative digital transformations that drive business success.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-slate-800 rounded-lg">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}`;
  }
  
  // Fix other common patterns
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*\}\s*;\s*\{\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  // Fix incomplete function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\(\)\s*\{\s*const\s+stats/g, 'export default function $1() {\n  const stats');
  
  // Fix incomplete component declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*return\s*\(\s*<>\s*<SEOHead/g, 'const $1: React.FC = () => {\n  return (\n    <>\n      <SEOHead');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<SEOHead\s*>\s*title="([^"]*)"\s*description="([^"]*)"\s*>\s*\/>/g, 
    '<>\n      <SEOHead\n        title="$1"\n        description="$2"\n      />');
  
  // Fix malformed JSX fragments with keywords
  fixed = fixed.replace(/<>\s*<SEOHead\s*>\s*title="([^"]*)"\s*description="([^"]*)"\s*keywords="([^"]*)"\s*>\s*\/>/g, 
    '<>\n      <SEOHead\n        title="$1"\n        description="$2"\n        keywords="$3"\n      />');
  
  // Fix incomplete JSX structures
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*\}\s*;\s*\{\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  // Fix ad-management specific issues
  fixed = fixed.replace(/<div\s+className="([^"]*)"\s*>\s*<div\s+className="([^"]*)"\s*>\s*<h1\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/h1>\s*<p\s+className="([^"]*)"\s*>\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\)\s*\}\s*;\s*\{\s*export\s+default\s+(\w+);/g,
    '<div className="$1">\n        <div className="$2">\n          <h1 className="$3">$4</h1>\n          <p className="$5">$6</p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default $7;');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixFinalErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main();