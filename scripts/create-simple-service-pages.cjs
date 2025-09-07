#!/usr/bin/env node
/**
 * Create Simple Service Pages
 * Creates simple, working service pages
 */
const fs = require("fs");
const path = require("path");

function createServicePage(serviceName, serviceTitle, description) {
  return `export const metadata = {
  title: '${serviceTitle} | Zion Tech Group',
  description: '${description}',
  keywords: '${serviceName}, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${serviceTitle}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ${serviceName} solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ${serviceName} solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

function fixServicePages() {
  console.log("🔧 Creating simple service pages...");
  
  const servicesDir = path.join(process.cwd(), "app", "services");
  
  if (!fs.existsSync(servicesDir)) {
    console.log("Services directory not found");
    return;
  }
  
  const services = [
    { name: 'ai-code-reviewer', title: 'AI Code Reviewer', description: 'Professional AI code reviewer solutions for your business needs.' },
    { name: 'ai-content-generator', title: 'AI Content Generator', description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.' },
    { name: 'ai-content-writer', title: 'AI Content Writer', description: 'Professional AI content writer services for your business needs.' },
    { name: 'ai-customer-support-automation', title: 'AI Customer Support Automation', description: 'Automated customer support solutions powered by AI technology.' }
  ];
  
  for (const service of services) {
    const serviceDir = path.join(servicesDir, service.name);
    const pagePath = path.join(serviceDir, 'page.tsx');
    
    if (fs.existsSync(pagePath)) {
      console.log(`Creating ${service.name}...`);
      const content = createServicePage(service.name, service.title, service.description);
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`✅ Created ${service.name}`);
    }
  }
  
  console.log("✅ Simple service pages created!");
}

fixServicePages();