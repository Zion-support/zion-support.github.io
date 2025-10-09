'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Headphones, Bot, BarChart, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      name: 'AI Chatbot',
      description: 'Intelligent chatbot that can handle 80% of customer inquiries automatically with natural language processing.',
      capabilities: ['24/7 availability', 'Multi-language support', 'Context awareness', 'Escalation to humans'],
      price: '$199/month',
      icon: Bot,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      name: 'Voice AI Assistant',
      description: 'Advanced voice AI that can handle phone calls, provide support, and route calls intelligently.',
      capabilities: ['Natural voice processing', 'Call routing', 'Sentiment analysis', 'Call recording'],
      price: '$299/month',
      icon: Headphones,
      color: 'text-green-400',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Email Automation',
      description: 'AI-powered email support that can understand, categorize, and respond to customer emails automatically.',
      capabilities: ['Email classification', 'Auto responses', 'Sentiment analysis', 'Priority routing'],
      price: '$149/month',
      icon: MessageCircle,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights into customer support performance and satisfaction metrics.',
      capabilities: ['Real-time metrics', 'Customer satisfaction', 'Response times', 'Trend analysis'],
      price: '$99/month',
      icon: BarChart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI-Powered Customer Support
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize your customer support with our advanced AI solutions. Provide instant, intelligent, 
            and personalized support 24/7 while reducing costs and improving customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#features" className="cyber-button">
              Explore Features
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Get Free Demo
            </a>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI Support Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${feature.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{feature.price}</div>
                  <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block">
                    Start Free Trial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose AI Customer Support?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Response</h3>
              <p className="text-gray-300">Provide instant responses to customer inquiries 24/7, improving customer satisfaction and reducing wait times.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cost Reduction</h3>
              <p className="text-gray-300">Reduce support costs by up to 60% while maintaining high-quality customer service with AI automation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personalized Experience</h3>
              <p className="text-gray-300">Deliver personalized support experiences based on customer history, preferences, and behavior patterns.</p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
              <h3 className="text-xl font-bold text-white mb-3">Automation Rate</h3>
              <p className="text-gray-300 text-sm">Average percentage of inquiries handled automatically by our AI systems.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <h3 className="text-xl font-bold text-white mb-3">Cost Reduction</h3>
              <p className="text-gray-300 text-sm">Average cost savings achieved by our clients using AI customer support.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <h3 className="text-xl font-bold text-white mb-3">Satisfaction Rate</h3>
              <p className="text-gray-300 text-sm">Customer satisfaction rate with AI-powered support interactions.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <h3 className="text-xl font-bold text-white mb-3">Availability</h3>
              <p className="text-gray-300 text-sm">Round-the-clock customer support with instant response capabilities.</p>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Easy Integration</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Slack', 'Microsoft Teams', 'Zendesk', 'Salesforce', 'HubSpot', 'Intercom'].map((platform, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{platform.charAt(0)}</span>
                </div>
                <h3 className="text-white font-medium text-sm">{platform}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Flexible Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI chatbot
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 1,000 conversations/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center ring-2 ring-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$399<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10,000 conversations/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Voice AI assistant
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited conversations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI training
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA guarantee
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already revolutionized their customer support with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📞 Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICustomerSupportPage;