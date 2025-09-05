import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const AiChatbotDevelopment: NextPage = () => {
  const features = [
    "Natural Language Understanding",
    "Multi-language Support",
    "Voice Integration",
    "Sentiment Analysis",
    "Context Awareness",
    "Integration with CRM/ERP",
    "Analytics & Reporting",
    "24/7 Availability"
  ];

  const chatbotTypes = [
    {
      type: "Customer Support",
      description: "Handle customer inquiries, provide instant responses, and escalate complex issues",
      benefits: ["Reduce response time by 80%", "Handle 24/7 inquiries", "Improve customer satisfaction"],
      price: "Starting at $1,200/month"
    },
    {
      type: "Sales Assistant",
      description: "Qualify leads, provide product information, and guide customers through the sales process",
      benefits: ["Increase conversion rates", "Qualify leads automatically", "Provide instant product info"],
      price: "Starting at $1,500/month"
    },
    {
      type: "Internal Support",
      description: "Assist employees with HR questions, IT support, and internal processes",
      benefits: ["Reduce HR workload", "Instant IT support", "Streamline internal processes"],
      price: "Starting at $1,000/month"
    },
    {
      type: "E-commerce Assistant",
      description: "Help customers find products, process orders, and handle returns",
      benefits: ["Increase sales", "Reduce cart abandonment", "Improve shopping experience"],
      price: "Starting at $1,800/month"
    }
  ];

  const integrations = [
    "Slack", "Microsoft Teams", "WhatsApp", "Facebook Messenger", "Telegram", 
    "Salesforce", "HubSpot", "Zendesk", "Shopify", "WooCommerce", "API Integration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>AI Chatbot Development Services - Zion Tech Group | Intelligent Conversational AI</title>
        <meta name="description" content="Expert AI chatbot development services for customer support, sales, and internal processes. Custom conversational AI solutions starting at $1,200/month. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI chatbot development, conversational AI, customer support bot, sales assistant, chatbot integration, NLP chatbot" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            AI Chatbot Development Services
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Transform customer interactions with intelligent AI chatbots that understand, respond, 
            and learn from every conversation. Boost efficiency and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Call: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Demo
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Chatbots?</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-4"></span>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Development Process</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Requirements Analysis</h3>
                  <p className="text-gray-300">Understanding your business needs and conversation flows</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Design & Training</h3>
                  <p className="text-gray-300">Creating conversation flows and training the AI model</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Integration & Testing</h3>
                  <p className="text-gray-300">Connecting to your systems and thorough testing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deployment & Monitoring</h3>
                  <p className="text-gray-300">Going live with continuous monitoring and improvements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Chatbot Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {chatbotTypes.map((chatbot, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{chatbot.type}</h3>
                <p className="text-gray-300 mb-4">{chatbot.description}</p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {chatbot.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-green-400 font-semibold text-lg mb-4">{chatbot.price}</div>
                <a 
                  href="tel:+13024640950" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Platform Integrations</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <p className="text-center text-gray-300 mb-8 text-lg">
              Our chatbots integrate seamlessly with your existing tools and platforms
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-white font-semibold">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Deploy Your AI Chatbot?</h2>
          <p className="text-xl mb-6">Let's create a custom chatbot solution that transforms your customer interactions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Send Email
            </a>
          </div>
          <p className="mt-4 text-sm">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </main>
    </div>
  );
};

export default AiChatbotDevelopment;