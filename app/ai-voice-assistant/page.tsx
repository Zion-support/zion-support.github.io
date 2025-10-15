import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';

const AIVoiceAssistantPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Voice Assistant Pro",
    "description": "Advanced voice AI assistant with natural language processing, multi-language support, and enterprise integration capabilities",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Solutions"
        description="Intelligent voice assistant for business automation with natural language processing, multi-language support, and enterprise integration capabilities."
        keywords="AI voice assistant, voice AI, natural language processing, voice automation, business AI, voice technology"
        canonicalUrl="https://ziontechgroup.com/ai-voice-assistant"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen futuristic-bg relative">
        <FuturisticBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6">
              Zion AI Voice Assistant Pro
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Intelligent voice assistant for business automation with natural language processing, 
              multi-language support, and enterprise integration capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Start Free Trial
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold text-white mb-4">Natural Language Processing</h3>
                <p className="text-white/80">
                  Advanced NLP capabilities that understand context, intent, and complex commands for seamless interaction.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-language Support</h3>
                <p className="text-white/80">
                  Support for 50+ languages with real-time translation and localization capabilities.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Integration</h3>
                <p className="text-white/80">
                  Seamless integration with existing business systems, CRMs, and productivity tools.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-4">Voice Command Recognition</h3>
                <p className="text-white/80">
                  Accurate voice recognition with custom wake words and command training capabilities.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-4">Mobile & Desktop Support</h3>
                <p className="text-white/80">
                  Cross-platform compatibility with native apps for iOS, Android, and desktop systems.
                </p>
              </div>
              <div className="card-futuristic hover-lift">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-white mb-4">Voice Analytics</h3>
                <p className="text-white/80">
                  Comprehensive analytics and insights into voice interactions and user behavior patterns.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold neon-text mb-4">$199<span className="text-lg text-white/60">/month</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Up to 1,000 voice interactions</li>
                  <li>✓ 5 languages supported</li>
                  <li>✓ Basic integrations</li>
                  <li>✓ Email support</li>
                  <li>✓ Standard analytics</li>
                </ul>
                <button className="neon-button w-full">Get Started</button>
              </div>
              <div className="card-futuristic hover-lift border-2 border-cyan-400">
                <div className="text-cyan-400 text-sm font-semibold mb-2">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold neon-text mb-4">$599<span className="text-lg text-white/60">/month</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Up to 10,000 voice interactions</li>
                  <li>✓ 25 languages supported</li>
                  <li>✓ Advanced integrations</li>
                  <li>✓ Priority support</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Custom voice training</li>
                </ul>
                <button className="neon-button w-full">Get Started</button>
              </div>
              <div className="card-futuristic hover-lift">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text mb-4">$1,999<span className="text-lg text-white/60">/month</span></div>
                <ul className="text-white/80 space-y-2 mb-8">
                  <li>✓ Unlimited voice interactions</li>
                  <li>✓ 50+ languages supported</li>
                  <li>✓ Full enterprise integrations</li>
                  <li>✓ 24/7 dedicated support</li>
                  <li>✓ Custom analytics dashboard</li>
                  <li>✓ White-label options</li>
                  <li>✓ On-premise deployment</li>
                </ul>
                <button className="neon-button w-full">Contact Sales</button>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Customer Service Automation</h3>
                <p className="text-white/80 mb-4">
                  Automate customer support with intelligent voice assistants that can handle common queries, 
                  route calls, and provide instant responses 24/7.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Automated call routing</li>
                  <li>• FAQ responses</li>
                  <li>• Appointment scheduling</li>
                  <li>• Order status inquiries</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Meeting Transcription</h3>
                <p className="text-white/80 mb-4">
                  Convert voice meetings into accurate transcripts with speaker identification, 
                  action items extraction, and real-time collaboration features.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Real-time transcription</li>
                  <li>• Speaker identification</li>
                  <li>• Action item extraction</li>
                  <li>• Meeting summaries</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Voice-Controlled Workflows</h3>
                <p className="text-white/80 mb-4">
                  Create hands-free workflows for productivity tasks, system controls, 
                  and business process automation using voice commands.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Hands-free operation</li>
                  <li>• System integration</li>
                  <li>• Workflow automation</li>
                  <li>• Productivity enhancement</li>
                </ul>
              </div>
              <div className="card-futuristic">
                <h3 className="text-xl font-semibold text-white mb-4">Accessibility Solutions</h3>
                <p className="text-white/80 mb-4">
                  Provide accessible interfaces for users with disabilities through voice navigation, 
                  screen reading, and voice-controlled applications.
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>• Voice navigation</li>
                  <li>• Screen reading support</li>
                  <li>• Accessibility compliance</li>
                  <li>• Inclusive design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Zion AI Voice Assistant Pro to automate 
              their operations and improve customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover-lift">
                Start Free Trial
              </button>
              <Link to="/contact" className="neon-button hover-lift" style={{borderColor: '#bf00ff', color: '#bf00ff'}}>
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 text-white/60">
              <p>Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | <span className="text-cyan-400">kleber@ziontechgroup.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

AIVoiceAssistantPage.displayName = 'AIVoiceAssistantPage';

export default AIVoiceAssistantPage;