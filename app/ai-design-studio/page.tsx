import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Palette, Image, Zap, Users, BarChart } from 'lucide-react';

const AIDesignStudioPage: React.FC = () => {
  const designFeatures = [
    {
      title: 'AI Logo Generation',
      description: 'Create professional logos using AI-powered design generation and customization.',
      icon: '🎨',
      benefits: [
        'Instant logo generation',
        'Multiple style options',
        'Custom color schemes',
        'Vector format export'
      ]
    },
    {
      title: 'Image Enhancement',
      description: 'AI-powered image editing and enhancement for professional results.',
      icon: '🖼️',
      benefits: [
        'Auto-enhancement',
        'Background removal',
        'Color correction',
        'Resolution upscaling'
      ]
    },
    {
      title: 'Template Library',
      description: 'Extensive library of AI-generated templates for various design needs.',
      icon: '📋',
      benefits: [
        '1000+ templates',
        'Industry-specific designs',
        'Customizable layouts',
        'Regular updates'
      ]
    },
    {
      title: 'Brand Kit Management',
      description: 'Create and manage brand kits with consistent colors, fonts, and styles.',
      icon: '🎯',
      benefits: [
        'Brand consistency',
        'Color palette management',
        'Font pairing',
        'Style guidelines'
      ]
    },
    {
      title: 'Collaborative Design',
      description: 'Real-time collaboration tools for team design projects.',
      icon: '👥',
      benefits: [
        'Real-time editing',
        'Comment system',
        'Version control',
        'Team management'
      ]
    },
    {
      title: 'Export & Integration',
      description: 'Export designs in multiple formats and integrate with popular tools.',
      icon: '📤',
      benefits: [
        'Multiple formats',
        'High-resolution export',
        'Tool integrations',
        'API access'
      ]
    }
  ];

  const designTypes = [
    {
      type: 'Logo Design',
      description: 'AI-powered logo creation and customization',
      price: '$35/month',
      features: ['Logo generation', 'Style variations', 'Color schemes', 'Vector export']
    },
    {
      type: 'Social Media Graphics',
      description: 'Designs for social media platforms and campaigns',
      price: '$25/month',
      features: ['Platform-specific sizes', 'Trending templates', 'Hashtag integration', 'Bulk creation']
    },
    {
      type: 'Marketing Materials',
      description: 'Brochures, flyers, and promotional materials',
      price: '$45/month',
      features: ['Print-ready designs', 'Professional templates', 'Brand integration', 'Multiple formats']
    },
    {
      type: 'Web Design',
      description: 'Website mockups and UI/UX designs',
      price: '$55/month',
      features: ['Responsive designs', 'UI components', 'User experience', 'Prototyping']
    },
    {
      type: 'Presentation Design',
      description: 'Professional presentations and slides',
      price: '$30/month',
      features: ['Slide templates', 'Data visualization', 'Animation effects', 'Export options']
    },
    {
      type: 'Custom Design',
      description: 'Fully customized design solutions',
      price: '$75/month',
      features: ['Custom requirements', 'Unique designs', 'Brand development', 'Dedicated support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$35/month',
      description: 'Perfect for individual designers and freelancers',
      features: [
        'Up to 100 designs/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$99/month',
      description: 'Advanced features for design teams',
      features: [
        'Up to 500 designs/month',
        'Advanced AI features',
        'Premium templates',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Complete design solution for large organizations',
      features: [
        'Unlimited designs',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Design Studio - Zion Tech Group</title>
        <meta name="description" content="AI-powered design studio with logo generation, image enhancement, and template library. Create professional designs effortlessly." />
        <meta name="keywords" content="ai design studio, logo generation, image enhancement, design templates, graphic design, brand design" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Design Studio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered design studio with logo generation, image enhancement, and template library. Create professional designs effortlessly.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-gray-300">Templates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Professional</div>
              <div className="text-gray-300">Quality</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Assistance</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Design Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Design Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designTypes.map((design, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{design.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{design.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{design.price}</div>
                </div>
                <ul className="space-y-2">
                  {design.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Design Studio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Creative AI</h3>
              <p className="text-gray-300">AI understands design principles and creates visually appealing, professional designs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">Generate professional designs in minutes, not hours. Scale your design production instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Quality</h3>
              <p className="text-gray-300">AI-generated designs meet professional standards and can be used for any business purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Design Studio Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Amazing Designs?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI help you create professional designs that stand out. Start designing with AI assistance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDesignStudioPage;