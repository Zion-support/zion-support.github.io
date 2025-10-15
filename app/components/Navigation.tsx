import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold gradient-text group-hover:neon-text transition-all duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              About
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
                Services
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 glass-effect rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-cyan-500/20">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">AI Services</div>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">🤖 AI Development</Link>
                  <Link to="/ai-voice-assistant" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">🎤 Voice Assistant</Link>
                  <Link to="/ai-image-recognition" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">👁️ Image Recognition</Link>
                  <Link to="/ai-predictive-analytics" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">📈 Predictive Analytics</Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-2">IT Services</div>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">💻 IT Solutions</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">☁️ Cloud Infrastructure</Link>
                  <Link to="/devops-automation" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">⚙️ DevOps Automation</Link>
                  <Link to="/api-development" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">🔌 API Development</Link>
                  <Link to="/blockchain-development" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">⛓️ Blockchain Development</Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-2">Development</div>
                  <Link to="/web-development" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">🌐 Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">📱 Mobile Development</Link>
                  <Link to="/ar-vr-development" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">🥽 AR/VR Development</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
                AI Tools
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 glass-effect rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-cyan-500/20">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">AI Business Tools</div>
                  <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">🛡️ Content Moderator</Link>
                  <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">📊 Churn Predictor</Link>
                  <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">💰 Sales Predictor</Link>
                  <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">⚡ Workflow Automator</Link>
                  <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">📈 Financial Forecaster</Link>
                  
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-2">Micro SAAS</div>
                  <Link to="/ai-project-manager" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">📋 AI Project Manager</Link>
                  <Link to="/ai-hr-recruiter" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">👥 AI HR Recruiter</Link>
                  <Link to="/ai-crm-suite" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">🤝 AI CRM Suite</Link>
                  <Link to="/ai-marketing-automation" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200">📢 Marketing Automation</Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:neon-glow">
              Contact
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:neon-glow hover:scale-105">
              Get Started
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-effect border-t border-cyan-500/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              🏠 Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              ℹ️ About
            </Link>
            
            <div className="px-4 py-2 text-sm font-semibold text-cyan-400 uppercase tracking-wider">Services</div>
            <div className="pl-4 space-y-1">
              <Link to="/ai-services" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">🤖 AI Services</Link>
              <Link to="/it-services" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">💻 IT Services</Link>
              <Link to="/cloud-infrastructure" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">☁️ Cloud Infrastructure</Link>
              <Link to="/web-development" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">🌐 Web Development</Link>
              <Link to="/mobile-development" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">📱 Mobile Development</Link>
            </div>
            
            <div className="px-4 py-2 text-sm font-semibold text-cyan-400 uppercase tracking-wider">AI Tools</div>
            <div className="pl-4 space-y-1">
              <Link to="/zion-ai-content-moderator" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">🛡️ Content Moderator</Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">📊 Churn Predictor</Link>
              <Link to="/zion-ai-sales-predictor" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">💰 Sales Predictor</Link>
              <Link to="/zion-ai-workflow-automator" className="text-white hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">⚡ Workflow Automator</Link>
            </div>
            
            <Link to="/pricing" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              💰 Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              📞 Contact
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 text-center block">
              🚀 Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;