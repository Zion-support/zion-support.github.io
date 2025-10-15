import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Brain, Server, Layers } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const microSaasPricing = [
    {
      name: 'AI Accounting Assistant',
      monthlyPrice: '$29',
      yearlyPrice: '$290',
      description: 'Automated bookkeeping and financial analysis',
      features: [
        'Up to 1,000 transactions/month',
        'Automated invoice processing',
        'Real-time expense tracking',
        'Tax preparation & filing',
        'Financial report generation',
        'Bank reconciliation',
        'Multi-currency support',
        'Mobile app access',
        'Email support',
        'Basic integrations'
      ],
      popular: true,
      category: 'micro-saas'
    },
    {
      name: 'AI Content Moderation Pro',
      monthlyPrice: '$49',
      yearlyPrice: '$490',
      description: 'Advanced content filtering and moderation',
      features: [
        'Up to 10,000 posts/month',
        'Real-time content monitoring',
        'Multi-language support (50+ languages)',
        'Image & video analysis',
        'Custom moderation rules',
        'Analytics dashboard',
        'API integration',
        'Bulk content processing',
        'Priority support',
        'Custom integrations'
      ],
      popular: false,
      category: 'micro-saas'
    },
    {
      name: 'AI Climate Solutions Pro',
      monthlyPrice: '$79',
      yearlyPrice: '$790',
      description: 'Environmental monitoring and sustainability tracking',
      features: [
        'Carbon footprint analysis',
        'Sustainability reporting',
        'Compliance monitoring',
        'Green initiative tracking',
        'Energy usage optimization',
        'Waste management analytics',
        'Supply chain sustainability',
        'ESG reporting tools',
        'Environmental risk assessment',
        'Green certification support'
      ],
      popular: true,
      category: 'micro-saas'
    },
    {
      name: 'AI Agricultural Intelligence',
      monthlyPrice: '$99',
      yearlyPrice: '$990',
      description: 'Smart farming and crop optimization',
      features: [
        'Crop health monitoring',
        'Weather pattern analysis',
        'Yield prediction models',
        'Resource optimization',
        'Pest & disease detection',
        'Soil analysis',
        'Irrigation management',
        'Harvest planning',
        'Market price tracking',
        'Farm equipment integration'
      ],
      popular: false,
      category: 'micro-saas'
    }
  ];

  const aiServicesPricing = [
    {
      name: 'AI Chatbot Enterprise',
      monthlyPrice: '$299',
      yearlyPrice: '$2,990',
      description: 'Advanced conversational AI for customer service',
      features: [
        'Up to 100,000 conversations/month',
        'Natural language processing',
        'Multi-channel support',
        'Custom training & learning',
        'Advanced analytics dashboard',
        'CRM integration',
        'Voice & text support',
        'Multi-language support',
        'Sentiment analysis',
        'Escalation to human agents'
      ],
      popular: true,
      category: 'ai-services'
    },
    {
      name: 'AI Computer Vision',
      monthlyPrice: '$399',
      yearlyPrice: '$3,990',
      description: 'Advanced image and video analysis solutions',
      features: [
        'Up to 50,000 images/month',
        'Object detection & recognition',
        'Facial recognition & analysis',
        'Quality control & inspection',
        'Real-time video processing',
        'Image classification',
        'OCR capabilities',
        'Medical image analysis',
        'Security & surveillance',
        'Custom model training'
      ],
      popular: false,
      category: 'ai-services'
    },
    {
      name: 'AI Analytics Dashboard Pro',
      monthlyPrice: '$349',
      yearlyPrice: '$3,490',
      description: 'Advanced business intelligence and predictive analytics',
      features: [
        'Up to 1M data points/month',
        'Predictive analytics & forecasting',
        'Custom dashboard builder',
        'Real-time data visualization',
        'Automated report generation',
        'KPI tracking & alerts',
        'Data integration (100+ sources)',
        'Machine learning models',
        'Collaborative workspaces',
        'Mobile analytics app'
      ],
      popular: true,
      category: 'ai-services'
    },
    {
      name: 'AI Automation Platform',
      monthlyPrice: '$499',
      yearlyPrice: '$4,990',
      description: 'End-to-end business process automation',
      features: [
        'Unlimited workflows',
        'RPA integration',
        'Custom bot development',
        'Document processing',
        'Email automation',
        'Data extraction & processing',
        'API integration',
        'Performance monitoring',
        'Error handling & recovery',
        'Scalable infrastructure'
      ],
      popular: false,
      category: 'ai-services'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Cloud Infrastructure',
      monthlyPrice: '$2,500',
      yearlyPrice: '$25,000',
      description: 'Comprehensive cloud infrastructure solutions',
      features: [
        'Multi-cloud architecture design',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & load balancing',
        'Disaster recovery planning',
        'Security & compliance',
        'Cost optimization',
        '24/7 monitoring & support',
        'Migration services',
        'Performance optimization',
        'Backup & recovery solutions'
      ],
      popular: true,
      category: 'it-services'
    },
    {
      name: 'Cybersecurity Solutions',
      monthlyPrice: '$1,500',
      yearlyPrice: '$15,000',
      description: 'Comprehensive security solutions',
      features: [
        'Threat detection & response',
        'Security assessment & auditing',
        'Penetration testing',
        'Vulnerability management',
        'Security awareness training',
        'Compliance management',
        'Firewall & network security',
        'Endpoint protection',
        'Data encryption & backup',
        '24/7 security monitoring'
      ],
      popular: true,
      category: 'it-services'
    },
    {
      name: 'Web Development',
      monthlyPrice: 'From $5,000',
      yearlyPrice: 'From $50,000',
      description: 'Custom web applications and e-commerce solutions',
      features: [
        'Custom web applications',
        'E-commerce platforms',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'API development & integration',
        'Mobile-responsive design',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Maintenance & support'
      ],
      popular: false,
      category: 'it-services'
    },
    {
      name: 'Mobile App Development',
      monthlyPrice: 'From $10,000',
      yearlyPrice: 'From $100,000',
      description: 'Native and cross-platform mobile applications',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'API integration',
        'Performance optimization',
        'Security implementation',
        'App maintenance & updates'
      ],
      popular: false,
      category: 'it-services'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Layers className="w-5 h-5" /> },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Zap className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" /> },
    { id: 'it-services', name: 'IT Services', icon: <Server className="w-5 h-5" /> }
  ];

  const allPricing = [...microSaasPricing, ...aiServicesPricing, ...itServicesPricing];
  const filteredPricing = selectedCategory === 'all' 
    ? allPricing 
    : allPricing.filter(item => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Pricing - Transparent Pricing for AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our comprehensive AI and IT solutions. Choose from micro SAAS, AI services, and IT solutions with flexible pricing options." />
        <meta name="keywords" content="pricing, micro SAAS pricing, AI services pricing, IT services pricing, cloud infrastructure pricing, cybersecurity pricing" />
        <meta property="og:title" content="Pricing - Transparent Pricing for AI & IT Solutions" />
        <meta property="og:description" content="Transparent pricing for our comprehensive AI and IT solutions. Choose from micro SAAS, AI services, and IT solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transparent
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPricing.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group relative ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-baseline mb-3">
                    <span className="text-4xl font-bold text-purple-400">
                      {billingCycle === 'monthly' ? service.monthlyPrice : service.yearlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 6).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 6 && (
                    <li className="text-sm text-purple-400 font-medium">
                      +{service.features.length - 6} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    to={`/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              For large enterprises with specific requirements, we offer custom solutions tailored to your needs.
            </p>
            
            <div className="bg-slate-700/50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Custom development and integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      24/7 priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      On-premise deployment options
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Scalable to any size
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      White-label solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Custom training and onboarding
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Flexible payment terms
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Do you offer a free trial?
              </h3>
              <p className="text-gray-300">
                Yes! All our services come with a 14-day free trial. No credit card required to get started.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-300">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-gray-300">
                No setup fees! We believe in transparent pricing with no hidden costs.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Do you offer discounts for annual billing?
              </h3>
              <p className="text-gray-300">
                Yes! Save 20% when you choose annual billing instead of monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose your plan and start transforming your business today. 
            All plans include 14-day free trial and no setup fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;