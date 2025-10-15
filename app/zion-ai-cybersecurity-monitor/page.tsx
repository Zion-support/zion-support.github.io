import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const ZionAICybersecurityMonitorPage: React.FC = () => {
  const features = [
    'Real-time threat detection',
    'AI-powered anomaly detection',
    'Automated incident response',
    'Advanced malware analysis',
    'Network traffic monitoring',
    'Vulnerability assessment',
    'Compliance reporting',
    'Threat intelligence integration',
    'Custom security policies',
    '24/7 security monitoring'
  ];

  const benefits = [
    'Reduce security incidents by 80%',
    'Detect threats 10x faster',
    'Minimize false positives by 90%',
    'Ensure compliance with regulations',
    'Protect against zero-day attacks',
    'Lower security costs by 60%'
  ];

  const pricing = {
    essential: { price: 199, features: ['Up to 50 devices', 'Basic threat detection', 'Email alerts'] },
    professional: { price: 499, features: ['Up to 500 devices', 'Advanced AI detection', 'Phone support', 'Custom policies'] },
    enterprise: { price: 1299, features: ['Unlimited devices', 'Full AI suite', 'Dedicated SOC', 'White-label options'] }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Cybersecurity Monitor - Advanced Threat Detection Platform"
        description="Protect your business with AI-powered cybersecurity monitoring. Real-time threat detection, automated response, and advanced security analytics to keep your data safe."
        keywords="cybersecurity, threat detection, AI security, network monitoring, malware protection, security compliance"
        canonicalUrl="https://ziontechgroup.com/zion-ai-cybersecurity-monitor"
      />
      
      <div className="min-h-screen futuristic-bg cyber-grid">
        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6 animated-icon">🛡️</div>
              <h1 className="text-5xl md:text-7xl font-bold holographic-text mb-6">
                Zion AI Cybersecurity Monitor
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                Advanced AI-powered cybersecurity monitoring that protects your business 24/7. 
                Detect threats before they become breaches with intelligent security analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <a href="#demo" className="neon-button text-lg px-10 py-4">
                  Security Assessment
                </a>
                <a href="#pricing" className="neon-button-purple text-lg px-10 py-4">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Advanced Security Features</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Comprehensive cybersecurity protection powered by cutting-edge AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card glow-effect p-6 group">
                  <div className="text-3xl mb-4 animated-icon">🔒</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text transition-all duration-300">
                    {feature}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    AI-driven security algorithms continuously monitor and protect your digital infrastructure.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-6">Proven Security Results</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="futuristic-card glow-effect p-8 text-center">
                  <div className="text-4xl font-bold neon-text-pink mb-4">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Dashboard Preview */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Real-Time Security Dashboard</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Monitor your security posture with our intuitive AI-powered dashboard
              </p>
            </div>
            
            <div className="futuristic-card glow-effect p-8">
              <div className="cyber-terminal">
                <div className="text-neon-green mb-4">
                  <div className="flex items-center mb-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    <span className="text-sm">ZION AI CYBERSECURITY MONITOR v2.1</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-4">
                    Last updated: {new Date().toLocaleString()}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black/50 p-4 rounded border border-neon-green/30">
                    <div className="text-neon-cyan text-sm font-bold mb-2">THREAT LEVEL</div>
                    <div className="text-2xl text-neon-green font-bold">LOW</div>
                    <div className="text-xs text-gray-400">No active threats detected</div>
                  </div>
                  
                  <div className="bg-black/50 p-4 rounded border border-neon-green/30">
                    <div className="text-neon-cyan text-sm font-bold mb-2">DEVICES MONITORED</div>
                    <div className="text-2xl text-neon-purple font-bold">247</div>
                    <div className="text-xs text-gray-400">All systems operational</div>
                  </div>
                  
                  <div className="bg-black/50 p-4 rounded border border-neon-green/30">
                    <div className="text-neon-cyan text-sm font-bold mb-2">INCIDENTS TODAY</div>
                    <div className="text-2xl text-neon-pink font-bold">0</div>
                    <div className="text-xs text-gray-400">No security incidents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Security Plans</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Choose the security plan that fits your organization's needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([plan, details], index) => (
                <div key={plan} className={`futuristic-card glow-effect p-8 ${
                  plan === 'professional' ? 'ring-2 ring-neon-cyan' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                    <div className="text-4xl font-bold neon-text mb-2">${details.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white">
                        <span className="text-neon-cyan mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan === 'professional' 
                        ? 'neon-button' 
                        : 'neon-button-purple'
                    }`}
                  >
                    Get Protected
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="futuristic-card glow-effect p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-6">
                Secure Your Business Today
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Don't wait for a security breach. Protect your business with AI-powered cybersecurity monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="/contact" className="neon-button text-lg px-10 py-4">
                  Start Security Assessment
                </a>
                <a href="tel:+13024640950" className="neon-button-purple text-lg px-10 py-4">
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAICybersecurityMonitorPage;