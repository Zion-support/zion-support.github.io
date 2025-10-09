'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, Users, BarChart, Mail, Phone, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      name: 'Lead Scoring & Qualification',
      description: 'AI-powered lead scoring that automatically identifies and prioritizes high-value prospects.',
      capabilities: ['Behavioral analysis', 'Lead scoring', 'Qualification criteria', 'Priority ranking'],
      price: '$299/month',
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      popular: true
    },
    {
      name: 'Sales Pipeline Management',
      description: 'Intelligent pipeline management with automated follow-ups and opportunity tracking.',
      capabilities: ['Pipeline automation', 'Follow-up scheduling', 'Opportunity tracking', 'Deal forecasting'],
      price: '$399/month',
      icon: BarChart,
      color: 'text-green-400',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Email Campaign Automation',
      description: 'AI-driven email campaigns with personalized content and optimal send times.',
      capabilities: ['Personalized content', 'Send time optimization', 'A/B testing', 'Performance tracking'],
      price: '$199/month',
      icon: Mail,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Call Intelligence',
      description: 'AI-powered call analysis and coaching to improve sales performance and conversion rates.',
      capabilities: ['Call transcription', 'Sentiment analysis', 'Coaching insights', 'Performance metrics'],
      price: '$249/month',
      icon: Phone,
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
            AI Sales Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your sales process with AI-powered automation. Increase conversion rates, 
            reduce manual work, and close more deals with intelligent sales tools and insights.
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our AI Sales Features</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose AI Sales Automation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Higher Conversion Rates</h3>
              <p className="text-gray-300">Increase conversion rates by up to 300% with AI-powered lead scoring and personalized outreach.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Workflows</h3>
              <p className="text-gray-300">Automate repetitive sales tasks and focus on high-value activities that drive revenue.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data-Driven Insights</h3>
              <p className="text-gray-300">Get actionable insights from your sales data to optimize performance and identify opportunities.</p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <h3 className="text-xl font-bold text-white mb-3">Conversion Increase</h3>
              <p className="text-gray-300 text-sm">Average increase in conversion rates for our clients using AI sales automation.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
              <h3 className="text-xl font-bold text-white mb-3">Time Savings</h3>
              <p className="text-gray-300 text-sm">Time saved on manual sales tasks with our AI-powered automation tools.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <h3 className="text-xl font-bold text-white mb-3">Lead Quality</h3>
              <p className="text-gray-300 text-sm">Improvement in lead quality with AI-powered scoring and qualification.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">40%</div>
              <h3 className="text-xl font-bold text-white mb-3">Revenue Growth</h3>
              <p className="text-gray-300 text-sm">Average revenue growth achieved by our clients using AI sales automation.</p>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Seamless Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Microsoft Dynamics', 'Slack'].map((platform, index) => (
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic lead scoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email automation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
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
              <div className="text-4xl font-bold text-cyan-400 mb-6">$599<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced lead scoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full automation suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Call intelligence
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
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited automation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Sales Process?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of sales teams that have already transformed their performance with our AI automation tools.
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

export default AISalesAutomationPage;