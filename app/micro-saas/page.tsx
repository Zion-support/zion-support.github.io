'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MicroSAASPage: React.FC = () => {
  const microSaasApps = [
    {
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI-driven insights and automation.',
      features: [
        'Smart lead scoring and qualification',
        'Automated follow-up sequences',
        'Customer behavior analysis',
        'Sales forecasting and predictions',
        'Integration with email and social media',
        'Customizable dashboards and reports'
      ],
      price: '$29/month',
      icon: '👥'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and analytics with AI-powered insights.',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Custom KPI tracking',
        'Automated report generation',
        'Data source integration',
        'Mobile-responsive design'
      ],
      price: '$49/month',
      icon: '📊'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots without coding knowledge using our drag-and-drop interface.',
      features: [
        'No-code chatbot creation',
        'Multi-channel deployment',
        'Natural language processing',
        'Integration with popular platforms',
        'Analytics and performance tracking',
        'Custom branding and styling'
      ],
      price: '$19/month',
      icon: '🤖'
    },
    {
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI-powered personalization and optimization.',
      features: [
        'AI-generated email content',
        'Automated segmentation',
        'A/B testing and optimization',
        'Send time optimization',
        'Advanced analytics and reporting',
        'Integration with CRM systems'
      ],
      price: '$39/month',
      icon: '📧'
    },
    {
      title: 'AI SEO Optimizer',
      description: 'Improve your search rankings with AI-driven SEO analysis and recommendations.',
      features: [
        'Keyword research and analysis',
        'Content optimization suggestions',
        'Technical SEO auditing',
        'Competitor analysis',
        'Rank tracking and monitoring',
        'Automated reporting'
      ],
      price: '$25/month',
      icon: '🔍'
    },
    {
      title: 'AI Document Processor',
      description: 'Intelligent document processing and analysis for improved productivity.',
      features: [
        'Document text extraction',
        'Automated data entry',
        'Document classification',
        'OCR and image processing',
        'Workflow automation',
        'Integration with business systems'
      ],
      price: '$35/month',
      icon: '📄'
    }
  ];

  const benefits = [
    {
      title: 'Quick Deployment',
      description: 'Get up and running in minutes with our pre-built, ready-to-use applications.',
      icon: '⚡'
    },
    {
      title: 'No Technical Expertise Required',
      description: 'User-friendly interfaces that anyone can use, regardless of technical background.',
      icon: '👨‍💼'
    },
    {
      title: 'Cost-Effective',
      description: 'Affordable monthly subscriptions that scale with your business needs.',
      icon: '💰'
    },
    {
      title: 'Regular Updates',
      description: 'Continuous improvements and new features added automatically.',
      icon: '🔄'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to help you get the most out of your applications.',
      icon: '🆘'
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows.',
      icon: '🔗'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Micro SAAS - AI-Powered Business Applications | Zion Tech Group"
        description="Ready-to-use AI-powered applications for immediate business impact. Choose from 50+ Micro SAAS solutions designed to solve specific business challenges."
        keywords={['Micro SAAS', 'AI applications', 'business tools', 'productivity apps', 'AI software', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Ready-to-use AI-powered applications that solve specific business challenges. 
                  Deploy in minutes, see results immediately, and scale as you grow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Try Free Demo
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Micro SAAS Apps Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Popular Micro SAAS Applications</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose from our collection of AI-powered applications designed to solve specific business challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasApps.map((app, index) => (
                  <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{app.icon}</div>
                      <div className="text-2xl font-bold text-cyan-400">{app.price}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
                    <p className="text-gray-300 mb-6">{app.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href="/contact"
                        className="flex-1 cyber-button text-center py-3"
                      >
                        Get Started
                      </a>
                      <a
                        href="/contact"
                        className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-colors"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Micro SAAS?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Get the benefits of enterprise-grade AI applications without the complexity or high costs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-6">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your needs. All plans include 24/7 support and regular updates.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="cyber-card p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Up to 3 applications</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Basic support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Standard integrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Monthly updates</span>
                    </li>
                  </ul>
                  <a href="/contact" className="w-full cyber-button text-center py-3 block">
                    Get Started
                  </a>
                </div>
                
                <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Up to 10 applications</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Advanced integrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Weekly updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Custom branding</span>
                    </li>
                  </ul>
                  <a href="/contact" className="w-full cyber-button text-center py-3 block">
                    Get Started
                  </a>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400"> pricing</span></div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Unlimited applications</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Dedicated support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Custom integrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Daily updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">White-label solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">On-premise deployment</span>
                    </li>
                  </ul>
                  <a href="/contact" className="w-full cyber-button text-center py-3 block">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Success Stories</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how businesses are using our Micro SAAS applications to drive growth and efficiency.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="cyber-card p-8">
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6">
                    "The AI CRM helped us increase our lead conversion rate by 40% in just 3 months. 
                    The automated follow-ups are a game-changer."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">John Smith</div>
                      <div className="text-gray-400 text-sm">CEO, TechStart Inc.</div>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-8">
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6">
                    "Our analytics dashboard gives us insights we never had before. 
                    We can now make data-driven decisions in real-time."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">MJ</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Maria Johnson</div>
                      <div className="text-gray-400 text-sm">CTO, DataFlow Solutions</div>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-8">
                  <div className="text-cyan-400 text-4xl mb-4">"</div>
                  <p className="text-gray-300 mb-6">
                    "The AI chatbot handles 80% of our customer inquiries automatically. 
                    Our support team can now focus on complex issues."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">RB</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Robert Brown</div>
                      <div className="text-gray-400 text-sm">Head of Support, ServicePro</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start with a free demo and see how our Micro SAAS applications can solve your specific business challenges. 
                No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Try Free Demo
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MicroSAASPage;