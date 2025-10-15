import React from 'react';
import SEOHead from '../components/SEOHead';

const AIFraudDetectionPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Fraud Detection System - Zion Tech Group"
        description="Advanced AI-powered fraud detection and prevention system with real-time monitoring and machine learning algorithms. Protect your business from fraudulent activities."
        keywords="AI fraud detection, fraud prevention, machine learning, real-time monitoring, security, risk management, fraud analytics"
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
      />
      
      <div className="min-h-screen animated-bg matrix-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="responsive-heading font-bold gradient-text mb-6 hologram">
              AI Fraud Detection System
            </h1>
            <p className="responsive-text text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered fraud detection and prevention system. 
              Real-time monitoring, machine learning algorithms, and behavioral analysis to keep you secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?service=ai-fraud-detection" className="btn-futuristic energy">
                Get Started
              </a>
              <a href="tel:+13024640950" className="btn-futuristic glitch">
                Call +1 302 464 0950
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-cyan text-center mb-12 cyber-scan">Key Features</h2>
            <div className="responsive-grid">
              <div className="card-futuristic hologram">
                <div className="text-4xl mb-4 neon-text-purple">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Detection</h3>
                <p className="text-gray-300">
                  Instant fraud detection with millisecond response times to prevent fraudulent transactions before they complete.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl mb-4 neon-text-pink">🧠</div>
                <h3 className="text-xl font-semibold text-white mb-4">Machine Learning</h3>
                <p className="text-gray-300">
                  Advanced ML algorithms that continuously learn and adapt to new fraud patterns and techniques.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl mb-4 neon-text-green">📊</div>
                <h3 className="text-xl font-semibold text-white mb-4">Behavioral Analysis</h3>
                <p className="text-gray-300">
                  Analyze user behavior patterns to identify suspicious activities and potential fraud attempts.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.6s'}}>
                <div className="text-4xl mb-4 neon-text-cyan">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-4">Pattern Recognition</h3>
                <p className="text-gray-300">
                  Identify complex fraud patterns across multiple data points and transaction types.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '0.8s'}}>
                <div className="text-4xl mb-4 neon-text-orange">🛡️</div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-channel Protection</h3>
                <p className="text-gray-300">
                  Comprehensive protection across web, mobile, API, and offline channels.
                </p>
              </div>
              <div className="card-futuristic hologram" style={{animationDelay: '1s'}}>
                <div className="text-4xl mb-4 neon-text-purple">📈</div>
                <h3 className="text-xl font-semibold text-white mb-4">Risk Scoring</h3>
                <p className="text-gray-300">
                  Advanced risk scoring system that provides clear fraud probability indicators.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-pink text-center mb-12 cyber-scan">Pricing Plans</h2>
            <div className="responsive-grid">
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text-cyan mb-4">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Up to 10,000 transactions/month</li>
                  <li>✓ Real-time fraud detection</li>
                  <li>✓ Basic ML models</li>
                  <li>✓ Email alerts</li>
                  <li>✓ API integration</li>
                </ul>
                <a href="/contact?service=ai-fraud-detection&plan=basic" className="btn-futuristic w-full text-center">
                  Get Started
                </a>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold neon-text-purple mb-4">$799<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Up to 100,000 transactions/month</li>
                  <li>✓ Advanced ML models</li>
                  <li>✓ Behavioral analysis</li>
                  <li>✓ Custom rules engine</li>
                  <li>✓ Real-time dashboard</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="/contact?service=ai-fraud-detection&plan=pro" className="btn-futuristic w-full text-center">
                  Get Started
                </a>
              </div>
              <div className="card-futuristic energy-pulse">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text-pink mb-4">$2,499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Unlimited transactions</li>
                  <li>✓ Custom ML models</li>
                  <li>✓ Multi-channel protection</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <a href="/contact?service=ai-fraud-detection&plan=enterprise" className="btn-futuristic w-full text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text-green mb-8">Ready to Protect Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our fraud detection experts to discuss your specific needs and see how our AI system can protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-futuristic energy">
                Get Free Consultation
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-futuristic glitch">
                Email Us
              </a>
            </div>
            <div className="mt-8 text-gray-300">
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFraudDetectionPage;