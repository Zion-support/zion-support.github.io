import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const AIVoiceAssistantPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Voice Assistant Development - Zion Tech Group"
        description="Custom voice assistants and conversational AI solutions with natural language understanding and speech synthesis. Build intelligent voice interfaces for your business."
        keywords="AI voice assistant, conversational AI, speech recognition, text-to-speech, voice interface, natural language processing"
        canonicalUrl="https://ziontechgroup.com/ai-voice-assistant"
      />
      
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="futuristic-heading gradient-text mb-6">
              AI Voice Assistant Development
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Build intelligent voice interfaces that understand and respond to natural language, 
              providing seamless user experiences across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="futuristic-btn">
                Get Started
              </Link>
              <Link to="/pricing" className="futuristic-btn glass-morphism border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Key Features</h2>
            <div className="futuristic-grid">
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Natural Language Understanding</h3>
                <p className="futuristic-text">
                  Advanced NLP capabilities that understand context, intent, and sentiment in human speech.
                </p>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Speech Recognition</h3>
                <p className="futuristic-text">
                  High-accuracy speech-to-text conversion supporting multiple languages and accents.
                </p>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Text-to-Speech Synthesis</h3>
                <p className="futuristic-text">
                  Natural-sounding voice synthesis with customizable voices and emotional tones.
                </p>
              </div>
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-green mb-4">Multi-language Support</h3>
                <p className="futuristic-text">
                  Support for 50+ languages with automatic language detection and switching.
                </p>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-cyan mb-4">Custom Wake Words</h3>
                <p className="futuristic-text">
                  Branded wake words and custom activation phrases for personalized experiences.
                </p>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-orange mb-4">Integration APIs</h3>
                <p className="futuristic-text">
                  Easy integration with existing systems through comprehensive APIs and SDKs.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Use Cases</h2>
            <div className="futuristic-grid-2">
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Customer Service Automation</h3>
                <p className="futuristic-text">
                  Provide 24/7 voice support with intelligent routing and automated responses.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Smart Home Integration</h3>
                <p className="futuristic-text">
                  Control IoT devices and smart home systems through natural voice commands.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Healthcare Assistance</h3>
                <p className="futuristic-text">
                  Voice-enabled health monitoring and patient interaction systems.
                </p>
              </div>
              <div className="futuristic-card">
                <h3 className="futuristic-subheading text-neon-green mb-4">Educational Tools</h3>
                <p className="futuristic-text">
                  Interactive learning experiences with voice-based tutoring and assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="futuristic-heading text-center mb-12">Pricing</h2>
            <div className="futuristic-grid-3">
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-blue mb-4">Basic</h3>
                <div className="text-3xl font-bold text-white mb-4">$8,000</div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• Basic voice recognition</li>
                  <li>• 5 supported languages</li>
                  <li>• Standard TTS voices</li>
                  <li>• API integration</li>
                  <li>• Email support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Pro</h3>
                <div className="text-3xl font-bold text-white mb-4">$25,000</div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• Advanced NLP</li>
                  <li>• 20 supported languages</li>
                  <li>• Custom voice synthesis</li>
                  <li>• Wake word customization</li>
                  <li>• Priority support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-white mb-4">$75,000</div>
                <ul className="futuristic-text space-y-2 mb-6">
                  <li>• Full customization</li>
                  <li>• Unlimited languages</li>
                  <li>• Branded voices</li>
                  <li>• On-premise deployment</li>
                  <li>• 24/7 support</li>
                </ul>
                <Link to="/contact" className="futuristic-btn w-full text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="futuristic-heading mb-8">Ready to Build Your Voice Assistant?</h2>
            <p className="futuristic-text text-xl mb-8">
              Contact us today to discuss your voice AI requirements and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="futuristic-btn">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="futuristic-btn glass-morphism border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;