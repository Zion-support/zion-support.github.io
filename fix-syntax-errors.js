#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to clean up corrupted TSX files
function cleanTSXFile(filePath) {
  console.log(`Cleaning ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove any content before the first import or React statement
  const importMatch = content.match(/(import.*?from.*?;|import React.*?;)/);
  if (importMatch) {
    const importIndex = content.indexOf(importMatch[0]);
    content = content.substring(importIndex);
  }
  
  // Remove any content after the last export statement
  const exportMatch = content.match(/export default \w+;?\s*$/m);
  if (exportMatch) {
    const exportIndex = content.lastIndexOf(exportMatch[0]);
    content = content.substring(0, exportIndex + exportMatch[0].length);
  }
  
  // Fix common JSX syntax issues
  content = content
    // Fix unclosed JSX tags
    .replace(/<(\w+)([^>]*?)(?<!\s)>/g, (match, tagName, attributes) => {
      if (attributes.includes('=') && !attributes.includes('>')) {
        return match;
      }
      return `<${tagName}${attributes}>`;
    })
    // Fix malformed className attributes
    .replace(/className="([^"]*?)(?<!\s)"/g, (match, className) => {
      return `className="${className.trim()}"`;
    })
    // Fix missing closing tags
    .replace(/<(\w+)([^>]*?)>(?!.*<\/\1>)/g, (match, tagName, attributes) => {
      // Only fix if it's not a self-closing tag
      if (!attributes.includes('/>') && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
        return match;
      }
      return match;
    })
    // Fix broken string literals
    .replace(/"([^"]*?)(?<!\s)"/g, (match, str) => {
      return `"${str.trim()}"`;
    })
    // Remove extra semicolons and fix syntax
    .replace(/;+/g, ';')
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    // Fix broken template literals
    .replace(/`([^`]*?)(?<!\s)`/g, (match, str) => {
      return `\`${str.trim()}\``;
    })
    // Remove duplicate content and malformed sections
    .replace(/\s*export default \w+;\s*export default \w+;?\s*/g, 'export default AiServicesPage;')
    .replace(/\s*}\s*export default \w+;\s*}/g, '};\n\nexport default AiServicesPage;')
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
  
  // Ensure proper React component structure
  if (!content.includes('import React')) {
    content = 'import React from "react";\n' + content;
  }
  
  // Ensure proper export
  if (!content.includes('export default')) {
    content += '\n\nexport default AiServicesPage;';
  }
  
  // Write the cleaned content back
  fs.writeFileSync(filePath, content);
  console.log(`✓ Cleaned ${filePath}`);
}

// Function to create a proper AI Services page
function createProperAIServicesPage(filePath) {
  const content = `import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";

const AiServicesPage = () => {
  const aiServices = [
    {
      title: "AI Video Generation",
      description: "Create professional videos using AI technology",
      icon: "🎥",
      features: ["Automated video creation", "Custom templates", "High-quality output"],
      price: "$500/month",
      color: "from-blue-500 to-purple-600",
      href: "/ai-video-generation"
    },
    {
      title: "AI Content Creation",
      description: "Generate engaging content with AI assistance",
      icon: "✍️",
      features: ["Blog posts", "Social media content", "Marketing copy"],
      price: "$300/month",
      color: "from-green-500 to-teal-600",
      href: "/ai-content-creation"
    },
    {
      title: "AI Analytics",
      description: "Advanced analytics powered by artificial intelligence",
      icon: "📊",
      features: ["Predictive analytics", "Data visualization", "Insights generation"],
      price: "$800/month",
      color: "from-orange-500 to-red-600",
      href: "/ai-analytics"
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered security",
      icon: "🔒",
      features: ["Threat detection", "Automated response", "24/7 monitoring"],
      price: "$1200/month",
      color: "from-red-500 to-pink-600",
      href: "/ai-cybersecurity"
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline processes with intelligent automation",
      icon: "⚙️",
      features: ["Process automation", "Task optimization", "Efficiency gains"],
      price: "$600/month",
      color: "from-purple-500 to-indigo-600",
      href: "/ai-workflow-automation"
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document analysis and data extraction",
      icon: "📄",
      features: ["OCR Processing", "Data Extraction", "Document Classification"],
      price: "$400/month",
      color: "from-gray-500 to-slate-600",
      href: "/ai-document-processing"
    }
  ];

  const features = [
    {
      title: "Expert AI Solutions",
      description: "Cutting-edge AI technology tailored to your business needs",
      icon: "🧠"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance from our AI specialists",
      icon: "🕒"
    },
    {
      title: "Proven Results",
      description: "Track record of successful AI implementations",
      icon: "✅"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group's AI services transformed our business operations completely.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content: "The AI analytics platform provided insights we never knew existed.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "AI content creation saved us hours of work every week.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions for Business</title>
        <meta name="description" content="Discover our comprehensive AI services including video generation, content creation, analytics, cybersecurity, and workflow automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI cybersecurity, business AI solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI services. 
            From content generation to cybersecurity, we provide intelligent solutions 
            that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-4">
                    {service.price}
                  </div>
                  <Link 
                    to={service.href}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your AI journey today and discover the power of intelligent automation and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;
`;

  fs.writeFileSync(filePath, content);
  console.log(`✓ Created proper AI Services page at ${filePath}`);
}

// Function to create a proper AI Analytics page
function createProperAIAnalyticsPage(filePath) {
  const content = `import React from "react";
import { Helmet } from "react-helmet-async";

const AiAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics solutions by Zion Tech Group." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Analytics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced analytics powered by artificial intelligence to drive your business forward.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
            <p className="text-gray-300">
              Forecast future trends and make data-driven decisions with AI-powered predictions.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Insights</h3>
            <p className="text-gray-300">
              Get instant insights from your data with real-time AI analysis and reporting.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Custom Dashboards</h3>
            <p className="text-gray-300">
              Personalized dashboards that adapt to your business needs and KPIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAnalyticsPage;
`;

  fs.writeFileSync(filePath, content);
  console.log(`✓ Created proper AI Analytics page at ${filePath}`);
}

// Function to create a proper AI Healthcare Diagnostics page
function createProperAIHealthcarePage(filePath) {
  const content = `import React from "react";
import { Helmet } from "react-helmet-async";

const AiHealthcareDiagnosticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI healthcare diagnostics solutions by Zion Tech Group." />
        <meta name="keywords" content="AI healthcare, medical diagnostics, healthcare AI" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Diagnostics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI-powered healthcare diagnostics to improve patient outcomes and medical accuracy.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Medical Imaging Analysis</h3>
            <p className="text-gray-300">
              Advanced AI algorithms for accurate analysis of medical images and scans.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Diagnostic Assistance</h3>
            <p className="text-gray-300">
              AI-powered diagnostic tools to support healthcare professionals in decision-making.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Patient Monitoring</h3>
            <p className="text-gray-300">
              Continuous monitoring and early warning systems for better patient care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiHealthcareDiagnosticsPage;
`;

  fs.writeFileSync(filePath, content);
  console.log(`✓ Created proper AI Healthcare Diagnostics page at ${filePath}`);
}

// Main execution
async function main() {
  console.log("Starting syntax error fixes...");

  // Find all TSX files in the app directory
  const tsxFiles = await glob("app/**/*.tsx");

  // Process each file
  tsxFiles.forEach(filePath => {
    try {
      if (filePath.includes('ai-services/page.tsx')) {
        createProperAIServicesPage(filePath);
      } else if (filePath.includes('ai-analytics/page.tsx')) {
        createProperAIAnalyticsPage(filePath);
      } else if (filePath.includes('ai-healthcare-diagnostics/page.tsx')) {
        createProperAIHealthcarePage(filePath);
      } else {
        cleanTSXFile(filePath);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  console.log("Syntax error fixes completed!");
}

main().catch(console.error);
