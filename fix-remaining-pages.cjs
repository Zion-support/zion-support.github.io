const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if it's an AI page that needs the standard template
    const isAiPage = filePath.includes('/ai-') && filePath.endsWith('/page.tsx');
    
    if (isAiPage) {
      // Check if it already has the proper structure
      if (!content.includes("'use client'") || !content.includes('const serviceType')) {
        // Extract the service name from the path
        const pathParts = filePath.split('/');
        const serviceName = pathParts[pathParts.length - 2].replace('ai-', '').replace(/-/g, '');
        const componentName = pathParts[pathParts.length - 2].split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        
        // Create the standard AI page template
        const template = `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react'

const ${componentName}Page: React.FC = () => {
  const serviceType = 'ai' // Define serviceType variable
  
  const features = [
    {
      icon: Brain,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and AI.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ]

  const benefits = [
    'Increased efficiency by up to 300%',
    'Reduced operational costs',
    'Enhanced decision-making capabilities',
    '24/7 monitoring and support',
    'Easy integration with existing systems',
    'Proven ROI within 90 days'
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This ${serviceName} solution transformed our operations completely. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\\'ve seen are remarkable. Excellent service!',
      rating: 5
    }
  ]

  const getGradientColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-400 to-purple-400'
      case 'it': return 'from-purple-400 to-pink-400'
      case 'microsaas': return 'from-green-400 to-emerald-400'
      default: return 'from-cyan-400 to-purple-400'
    }
  }

  const getButtonColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
      case 'it': return 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
      case 'microsaas': return 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
      default: return 'from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600'
    }
  }

  const getIconColors = () => {
    switch(serviceType) {
      case 'ai': return 'from-cyan-500 to-blue-600'
      case 'it': return 'from-purple-500 to-pink-600'
      case 'microsaas': return 'from-green-500 to-emerald-600'
      default: return 'from-cyan-500 to-blue-600'
    }
  }

  return (
    <>
      <Helmet>
        <title>${componentName} - Zion Tech Group | AI Solutions</title>
        <meta name="description" content="Professional ${serviceName} services by Zion Tech Group. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="${serviceName}, ai solutions, business automation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                ${componentName} <span className={"bg-gradient-to-r " + getGradientColors() + " bg-clip-text text-transparent"}>Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our advanced ${serviceName} services.
                Leverage cutting-edge technology to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={"bg-gradient-to-r " + getButtonColors() + " text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"}>
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-bold hover:bg-cyan-500/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className={"w-16 h-16 bg-gradient-to-r " + getIconColors() + " rounded-2xl flex items-center justify-center mx-auto mb-4"}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
            {/* Benefits Section */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our ${componentName} Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-900 to-purple-900 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our experts today and discover how our ${serviceName} solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className={"bg-gradient-to-r " + getButtonColors() + " text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"}>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ${componentName}Page`;

        content = template;
        modified = true;
      }
    } else {
      // For non-AI pages, just fix common syntax issues
      const originalContent = content;
      
      // Fix common syntax errors
      content = content
        // Remove extra semicolons after import statements
        .replace(/from 'lucide-react'\s*;\s*$/, "from 'lucide-react'")
        // Fix object literals with extra semicolons
        .replace(/\{\s*;\s*icon:/g, '{\n      icon:')
        .replace(/\{\s*;\s*name:/g, '{\n      name:')
        // Fix switch statements with extra semicolons
        .replace(/switch\(serviceType\)\s*\{\s*;/g, 'switch(serviceType) {')
        // Fix return statements with extra semicolons
        .replace(/return\s*\(\s*;\s*<>/g, 'return (\n    <>')
        // Fix JSX syntax issues
        .replace(/md:\s*text-/g, 'md:text-')
        .replace(/sm:\s*flex-row/g, 'sm:flex-row')
        .replace(/md:\s*grid-cols-/g, 'md:grid-cols-')
        .replace(/hover:\s*bg-/g, 'hover:bg-')
        .replace(/hover:\s*from-/g, 'hover:from-')
        // Clean up extra semicolons and spaces
        .replace(/\s*;\s*$/gm, '')
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/\s+$/gm, '');
      
      if (content !== originalContent) {
        modified = true;
      }
    }
    
    if (modified) {
      // Write the fixed content back to the file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  }
}

// Find all page files
findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to check`);

// Fix all page files
let fixedCount = 0;
for (const page of pageFiles) {
  if (fixPage(page)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${pageFiles.length} page files`);