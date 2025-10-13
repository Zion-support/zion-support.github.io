const fs = require('fs');
const path = require('path');

// List of missing pages based on App.tsx imports
const missingPages = [
  'software-development',
  'system-integration',
  'web-development',
  'it-consulting',
  'network-security',
  'cloud-migration',
  'micro-saas-services',
  'project-management-tool',
  'customer-relationship-manager',
  'inventory-management-system',
  'financial-reporting-tool',
  'employee-time-tracker',
  'social-media-scheduler',
  'email-marketing-platform',
  'website-analytics-tool',
  'task-automation-workflow',
  'ai-powered-email-analyzer',
  'smart-inventory-optimizer',
  'ai-customer-sentiment-tracker',
  'smart-expense-categorizer',
  'cloud-consulting',
  'data-center-solutions',
  'disaster-recovery',
  'it-support',
  'managed-services',
  'security-audit',
  'technology-consulting'
];

// Template for page components
const pageTemplate = (pageName, title, description, keywords) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3 } from 'lucide-react';

const ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>${title} - Zion Tech Group | Professional Technology Solutions</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              ${title}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Service",
                description: "Expert ${title.toLowerCase()} solutions tailored to your business needs.",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes to ensure excellence.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance for your peace of mind.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={\`w-12 h-12 rounded-lg bg-gradient-to-r \${service.color} flex items-center justify-center mb-4 text-white\`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team to discuss your ${title.toLowerCase()} requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page;
`;

// Generate pages
missingPages.forEach(pageName => {
  const dirPath = path.join(__dirname, 'app', pageName);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Generate title and description
  const title = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Professional ${title.toLowerCase()} services and solutions. Expert implementation and support for your business needs.`;
  const keywords = `${title.toLowerCase()}, professional services, business solutions, technology consulting`;
  
  // Write the page file
  fs.writeFileSync(filePath, pageTemplate(pageName, title, description, keywords));
  console.log(`Generated: ${filePath}`);
});

console.log('All missing pages generated successfully!');