import React from 'react'
import {MessageCircle, Users} from 'lucide-react'
import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'

export default function AIChatbotBuilderPage() {
  const features = [
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Customer Support',
      description: 'Provide round-the-clock customer support with intelligent chatbots'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Lead Qualification',
      description: 'Automatically qualify leads and route them to the right team'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'FAQ Automation',
      description: 'Answer common questions instantly with automated responses'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: 'Multi-language Support',
      description: 'Support customers in multiple languages with translation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"></div>
      </Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Create intelligent chatbots for customer support, lead generation, and automated assistance." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Chatbot Builder;
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create intelligent chatbots for customer support, lead generation, and automated assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started;
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link;
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                All AI Services;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12 sm:mb-16"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Chatbot Features;
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build intelligent chatbots with advanced AI capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"></div>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Chatbot?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Start creating intelligent chatbots that can transform your customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link;
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial;
            </Link>
            <Link;
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
