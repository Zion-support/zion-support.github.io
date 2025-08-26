import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple placeholder components
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
    {/* Navigation */}
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h1>
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
          <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
          <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="/about" className="text-white hover:text-cyan-400 transition-colors">About</a>
          <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <div className="p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Zion Tech Group
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/services" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </a>
          <a 
            href="/contact" 
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>

    {/* Services Preview */}
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI Solutions</h3>
            <p className="text-gray-300 mb-4">Cutting-edge artificial intelligence services including machine learning, natural language processing, and computer vision.</p>
            <a href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Cloud Services</h3>
            <p className="text-gray-300 mb-4">Scalable cloud infrastructure solutions with AWS, Azure, and Google Cloud expertise.</p>
            <a href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">Advanced security and compliance solutions for enterprise-grade protection.</p>
            <a href="/services" className="text-purple-400 hover:text-purple-300 transition-colors">Learn More →</a>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="p-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Services</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-gray-300">Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
    {/* Navigation */}
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h1>
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
          <a href="/services" className="text-cyan-400">Services</a>
          <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="/about" className="text-white hover:text-cyan-400 transition-colors">About</a>
          <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    {/* Services Header */}
    <div className="p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Discover our comprehensive portfolio of innovative AI, IT, and business solutions
        </p>
      </div>
    </div>

    {/* Services Grid */}
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* AI & Machine Learning Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">AI & Machine Learning Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI Chatbot Builder Pro</h3>
              <p className="text-gray-300 mb-4">No-code AI chatbot creation platform with advanced NLP and multi-language support.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $99/month</div>
              <a href="https://ziontechgroup.com/ai-chatbot-builder" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI Content Generator Suite</h3>
              <p className="text-gray-300 mb-4">Advanced AI-powered content creation for blogs, social media, and marketing copy.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $79/month</div>
              <a href="https://ziontechgroup.com/ai-content-generator" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI Video Generation Platform</h3>
              <p className="text-gray-300 mb-4">Create professional videos from text descriptions using advanced AI algorithms.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $149/month</div>
              <a href="https://ziontechgroup.com/ai-video-generator" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
            </div>
          </div>
        </div>

        {/* Business Automation Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Business Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">HR Automation Suite</h3>
              <p className="text-gray-300 mb-4">Complete HR management automation including recruitment, onboarding, and performance tracking.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $199/month</div>
              <a href="https://ziontechgroup.com/hr-automation" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Financial Analytics Platform</h3>
              <p className="text-gray-300 mb-4">Real-time financial reporting and analytics with AI-powered insights and forecasting.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $299/month</div>
              <a href="https://ziontechgroup.com/financial-analytics" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Project Management AI</h3>
              <p className="text-gray-300 mb-4">Intelligent project management with automated task allocation and progress tracking.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $129/month</div>
              <a href="https://ziontechgroup.com/project-management-ai" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
            </div>
          </div>
        </div>

        {/* Cybersecurity Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Cybersecurity Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">SOC2 Compliance Automation</h3>
              <p className="text-gray-300 mb-4">Automated SOC2 compliance monitoring and reporting for enterprise security.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $499/month</div>
              <a href="https://ziontechgroup.com/soc2-compliance" className="text-purple-400 hover:text-purple-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">API Security & Monitoring</h3>
              <p className="text-gray-300 mb-4">Comprehensive API security with real-time threat detection and response.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $199/month</div>
              <a href="https://ziontechgroup.com/api-security" className="text-purple-400 hover:text-purple-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">AI-Powered Cybersecurity</h3>
              <p className="text-gray-300 mb-4">Next-generation cybersecurity using AI for threat detection and prevention.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $399/month</div>
              <a href="https://ziontechgroup.com/ai-cybersecurity" className="text-purple-400 hover:text-purple-300 transition-colors">Learn More →</a>
            </div>
          </div>
        </div>

        {/* Emerging Technology Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Emerging Technology Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Quantum Neural Network Platform</h3>
              <p className="text-gray-300 mb-4">Quantum computing-powered neural networks for advanced AI applications.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $999/month</div>
              <a href="https://ziontechgroup.com/quantum-neural-network" className="text-green-400 hover:text-green-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-green-400">5G Enterprise Solutions</h3>
              <p className="text-gray-300 mb-4">Enterprise-grade 5G infrastructure and application development services.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $799/month</div>
              <a href="https://ziontechgroup.com/5g-enterprise" className="text-green-400 hover:text-green-300 transition-colors">Learn More →</a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-green-400">Space Tech Solutions</h3>
              <p className="text-gray-300 mb-4">Satellite technology and space-based data analytics services.</p>
              <div className="text-sm text-gray-400 mb-3">Starting at $1,499/month</div>
              <a href="https://ziontechgroup.com/space-tech" className="text-green-400 hover:text-green-300 transition-colors">Learn More →</a>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6">Contact us to discuss your specific needs and get a customized solution.</p>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Pricing = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
    {/* Navigation */}
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h1>
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
          <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
          <a href="/pricing" className="text-cyan-400">Pricing</a>
          <a href="/about" className="text-white hover:text-cyan-400 transition-colors">About</a>
          <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    {/* Pricing Header */}
    <div className="p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs with flexible pricing options
        </p>
      </div>
    </div>

    {/* Pricing Tiers */}
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Starter</h3>
              <div className="text-4xl font-bold text-white mb-2">$99</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-cyan-400 mr-3">✓</span>
                Access to 50+ Core Services
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-cyan-400 mr-3">✓</span>
                Basic AI Solutions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-cyan-400 mr-3">✓</span>
                Email Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-cyan-400 mr-3">✓</span>
                Standard Security
              </li>
            </ul>
            <a 
              href="/contact" 
              className="w-full block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Professional Plan */}
          <div className="bg-white/15 backdrop-blur-lg rounded-xl p-8 border-2 border-cyan-400/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Professional</h3>
              <div className="text-4xl font-bold text-white mb-2">$299</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-3">✓</span>
                Access to 200+ Services
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-3">✓</span>
                Advanced AI & ML Solutions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-3">✓</span>
                Priority Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-3">✓</span>
                Enhanced Security
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-3">✓</span>
                Custom Integrations
              </li>
            </ul>
            <a 
              href="/contact" 
              className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-2">$999</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-3">✓</span>
                Access to ALL Services
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-3">✓</span>
                Quantum & Emerging Tech
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-3">✓</span>
                24/7 Dedicated Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-3">✓</span>
                Enterprise Security
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-3">✓</span>
                Custom Development
              </li>
            </ul>
            <a 
              href="/contact" 
              className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="mt-16 text-center p-8 bg-white/5 rounded-xl border border-white/10">
          <h3 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
          <p className="text-gray-300 mb-6">We offer tailored solutions for enterprise clients with specific requirements.</p>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
    {/* Navigation */}
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h1>
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
          <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
          <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="/about" className="text-cyan-400">About</a>
          <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Zion Tech Group</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
          <p className="text-lg text-gray-300 mb-6">
            Zion Tech Group is a leading technology solutions provider specializing in AI, cloud computing, and digital transformation. 
            We help businesses leverage cutting-edge technology to achieve their goals and stay ahead of the competition.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Our team of experts brings years of experience in developing innovative solutions that drive business growth and efficiency. 
            We pride ourselves on delivering high-quality, scalable solutions that meet the unique needs of each client.
          </p>
          <p className="text-lg text-gray-300">
            With a focus on emerging technologies and industry best practices, we ensure our clients receive the most advanced and 
            reliable solutions available in the market today.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
    {/* Navigation */}
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h1>
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
          <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
          <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="/about" className="text-white hover:text-cyan-400 transition-colors">About</a>
          <a href="/contact" className="text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>

    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 mb-2"><strong>Mobile:</strong></p>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2"><strong>Email:</strong></p>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-gray-300 mb-2"><strong>Address:</strong></p>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM EST</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-300 mb-2"><strong>24/7 Support:</strong></p>
              <p className="text-white">Available for enterprise clients</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Send us an Email
          </a>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;