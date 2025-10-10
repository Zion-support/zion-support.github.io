const fs = require('fs');
const path = require('path');

const servicePages = [
  // AI Services
  { path: 'ai-analytics', title: 'AI Analytics', description: 'Advanced data insights and analytics powered by artificial intelligence' },
  { path: 'ai-automation', title: 'AI Automation', description: 'Intelligent process automation solutions for your business' },
  { path: 'ai-customer-support', title: 'AI Customer Support', description: 'AI-powered customer service and support solutions' },
  { path: 'ai-content-generation', title: 'AI Content Generation', description: 'Automated content creation using advanced AI technology' },
  { path: 'ai-cybersecurity', title: 'AI Cybersecurity', description: 'Advanced security solutions powered by artificial intelligence' },
  { path: 'ai-healthcare', title: 'AI Healthcare', description: 'Medical AI solutions for healthcare providers' },
  { path: 'ai-ecommerce-solutions', title: 'AI E-commerce Solutions', description: 'E-commerce AI solutions for online businesses' },
  { path: 'ai-mobile-app-development', title: 'AI Mobile App Development', description: 'Mobile applications enhanced with AI capabilities' },
  
  // IT Services
  { path: 'cloud-services', title: 'Cloud Services', description: 'Comprehensive cloud infrastructure and management solutions' },
  { path: 'devops', title: 'DevOps & CI/CD', description: 'Development operations and continuous integration/deployment' },
  { path: 'cybersecurity', title: 'Cybersecurity', description: 'Advanced security solutions to protect your digital assets' },
  { path: 'it-consulting', title: 'IT Consulting', description: 'Expert IT guidance and strategic technology consulting' },
  { path: 'database-services', title: 'Database Services', description: 'Database management and optimization services' },
  { path: 'network-solutions', title: 'Network Solutions', description: 'Network infrastructure design and implementation' },
  
  // Micro SaaS
  { path: 'micro-saas/analytics-dashboard', title: 'Analytics Dashboard', description: 'Comprehensive business analytics and reporting dashboard' },
  { path: 'micro-saas/content-generator', title: 'Content Generator', description: 'AI-powered content creation and management tool' },
  { path: 'micro-saas/email-marketing', title: 'Email Marketing', description: 'Advanced email marketing automation platform' },
  { path: 'micro-saas/social-manager', title: 'Social Manager', description: 'Social media management and scheduling tool' },
  { path: 'micro-saas/expense-tracker', title: 'Expense Tracker', description: 'Financial tracking and expense management system' },
  { path: 'micro-saas/appointment-scheduler', title: 'Appointment Scheduler', description: 'Smart scheduling and appointment management system' },
  
  // Emerging Technologies
  { path: '5g-implementation', title: '5G Implementation', description: '5G network solutions and implementation services' },
  { path: 'ai-3d-generation', title: 'AI 3D Generation', description: '3D content creation using artificial intelligence' },
  { path: 'ai-blockchain-solutions', title: 'AI Blockchain Solutions', description: 'Blockchain technology enhanced with AI capabilities' },
  { path: 'ai-edge-computing', title: 'AI Edge Computing', description: 'Edge AI solutions for real-time processing' },
  { path: 'quantum-computing', title: 'Quantum Computing', description: 'Quantum computing solutions and consulting' }
];

const pageTemplate = (title, description) => `'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react';

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  const features = [
    { icon: CheckCircle, title: 'Advanced Technology', description: 'Cutting-edge solutions powered by the latest technology' },
    { icon: Users, title: 'Expert Team', description: 'Experienced professionals dedicated to your success' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock support and maintenance' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security and reliability' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              (302) 464-0950
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our ${title}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Increased efficiency and productivity
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Cost-effective solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Scalable and flexible
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Expert implementation and support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What We Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Comprehensive training and support
                </li>
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Ongoing maintenance and updates
                </li>
                <li className="flex items-center text-gray-300">
                  <Star className="w-5 h-5 text-cyan-400 mr-3" />
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss how our ${title} can benefit your business.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}Page;
`;

// Create all service pages
servicePages.forEach(service => {
  const dirPath = path.join('/workspace/app', service.path);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Create the page file
  fs.writeFileSync(filePath, pageTemplate(service.title, service.description));
  console.log(`Created: ${filePath}`);
});

console.log('\\n✅ All service pages created successfully!');
