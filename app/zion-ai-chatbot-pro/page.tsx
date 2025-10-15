import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIChatbotProPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Chatbot Pro",
    "description": "Advanced conversational AI chatbot with natural language understanding, multi-language support, and seamless integration capabilities",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Mobile",
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
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Pro - Advanced Conversational AI | Zion Tech Group</title>
        <meta name="description" content="Intelligent chatbot solution with natural language understanding, multi-language support, and seamless integration. Transform customer engagement with AI." />
        <meta name="keywords" content="AI chatbot, conversational AI, customer support, natural language processing, chatbot automation" />
        <meta property="og:title" content="Zion AI Chatbot Pro - Advanced Conversational AI" />
        <meta property="og:description" content="Intelligent chatbot solution with natural language understanding, multi-language support, and seamless integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-chatbot-pro" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen futuristic-bg animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 floating">
              Zion AI Chatbot Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto floating-delayed">
              Advanced conversational AI chatbot with natural language understanding, multi-language support, and seamless integration capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 floating-slow">
              <a href="/contact" className="neon-button">
                Get Started
              </a>
              <a href="/pricing" className="glow-border text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                View Pricing
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text-purple mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="futuristic-card p-6 pulse-neon">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Natural Language Understanding</h3>
                <p className="text-gray-300">Advanced NLP capabilities that understand context, intent, and sentiment in conversations.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon-slow">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">Multi-language Support</h3>
                <p className="text-gray-300">Communicate with customers in over 50 languages with accurate translations.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon">
                <h3 className="text-xl font-semibold neon-text mb-4">Context Awareness</h3>
                <p className="text-gray-300">Maintain conversation context across multiple interactions for seamless experiences.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon-slow">
                <h3 className="text-xl font-semibold neon-text-purple mb-4">Sentiment Analysis</h3>
                <p className="text-gray-300">Detect customer emotions and adjust responses accordingly for better engagement.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Integration APIs</h3>
                <p className="text-gray-300">Easy integration with your existing systems, CRM, and third-party applications.</p>
              </div>
              <div className="futuristic-card p-6 pulse-neon-slow">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">24/7 Availability</h3>
                <p className="text-gray-300">Always-on customer support that never sleeps, ensuring constant availability.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-2xl font-bold neon-text-green mb-4">Basic</h3>
                <div className="text-4xl font-bold text-white mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>Up to 1,000 conversations/month</li>
                  <li>5 languages supported</li>
                  <li>Basic integrations</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="neon-button w-full text-center">Get Started</a>
              </div>
              <div className="futuristic-card p-8 text-center glow-border">
                <h3 className="text-2xl font-bold neon-text-purple mb-4">Pro</h3>
                <div className="text-4xl font-bold text-white mb-4">$499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>Up to 10,000 conversations/month</li>
                  <li>25 languages supported</li>
                  <li>Advanced integrations</li>
                  <li>Priority support</li>
                  <li>Analytics dashboard</li>
                </ul>
                <a href="/contact" className="neon-button w-full text-center">Get Started</a>
              </div>
              <div className="futuristic-card p-8 text-center">
                <h3 className="text-2xl font-bold neon-text-pink mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-4">$1,299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>Unlimited conversations</li>
                  <li>50+ languages supported</li>
                  <li>Custom integrations</li>
                  <li>24/7 dedicated support</li>
                  <li>Advanced analytics</li>
                  <li>Custom training</li>
                </ul>
                <a href="/contact" className="neon-button w-full text-center">Contact Sales</a>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold neon-text mb-8 text-center">Why Choose Zion AI Chatbot Pro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Instant Customer Support</h3>
                <p className="text-gray-300">Provide immediate responses to customer queries, reducing wait times and improving satisfaction.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-purple mb-4">Reduced Support Costs</h3>
                <p className="text-gray-300">Automate routine inquiries and reduce the need for human agents, saving on operational costs.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text-pink mb-4">Improved Customer Satisfaction</h3>
                <p className="text-gray-300">Deliver consistent, accurate, and helpful responses that enhance the customer experience.</p>
              </div>
              <div className="futuristic-card p-6">
                <h3 className="text-xl font-semibold neon-text mb-4">Scalable Operations</h3>
                <p className="text-gray-300">Handle unlimited conversations simultaneously without additional infrastructure costs.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold neon-text mb-8">Ready to Transform Your Customer Support?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about Zion AI Chatbot Pro and how it can revolutionize your customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="neon-button">
                Contact Us
              </a>
              <a href="tel:+13024640950" className="glow-border text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                Call: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIChatbotProPage;