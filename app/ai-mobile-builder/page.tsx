import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Smartphone, Code, Zap, Users, BarChart } from 'lucide-react';

const AIMobileBuilderPage: React.FC = () => {
  const builderFeatures = [
    {
      title: 'Drag & Drop Interface',
      description: 'Build native mobile apps with our intuitive visual builder - no coding required.',
      icon: '🛠️',
      benefits: [
        'Visual app builder',
        'Pre-built components',
        'Real-time preview',
        'Instant deployment'
      ]
    },
    {
      title: 'AI Code Generation',
      description: 'AI automatically generates clean, optimized code for iOS and Android platforms.',
      icon: '🤖',
      benefits: [
        'Auto-generated code',
        'Platform optimization',
        'Best practices',
        'Performance tuning'
      ]
    },
    {
      title: 'Cross-Platform Support',
      description: 'Build once, deploy everywhere - iOS, Android, and web from a single codebase.',
      icon: '📱',
      benefits: [
        'iOS & Android apps',
        'Web app generation',
        'Consistent UI/UX',
        'Single codebase'
      ]
    },
    {
      title: 'AI-Powered Design',
      description: 'AI suggests optimal layouts, colors, and components based on your app type.',
      icon: '🎨',
      benefits: [
        'Design suggestions',
        'UI optimization',
        'Color scheme generation',
        'Layout recommendations'
      ]
    },
    {
      title: 'Smart Backend Integration',
      description: 'Automatically integrate with databases, APIs, and cloud services.',
      icon: '☁️',
      benefits: [
        'Database integration',
        'API connections',
        'Cloud deployment',
        'Real-time sync'
      ]
    },
    {
      title: 'App Store Optimization',
      description: 'AI helps optimize your app for better discoverability and downloads.',
      icon: '📈',
      benefits: [
        'ASO optimization',
        'Keyword research',
        'Performance analytics',
        'Download tracking'
      ]
    }
  ];

  const appTypes = [
    {
      type: 'E-commerce App',
      description: 'Complete online store with shopping cart, payments, and inventory',
      price: '$399/month',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Order management', 'Inventory tracking']
    },
    {
      type: 'Social Media App',
      description: 'Social networking platform with feeds, messaging, and profiles',
      price: '$599/month',
      features: ['User profiles', 'News feeds', 'Messaging', 'Media sharing', 'Push notifications']
    },
    {
      type: 'Business App',
      description: 'Professional business app with CRM, analytics, and team features',
      price: '$499/month',
      features: ['CRM integration', 'Analytics dashboard', 'Team collaboration', 'Document sharing', 'Meeting scheduler']
    },
    {
      type: 'Fitness App',
      description: 'Health and fitness tracking with workouts, nutrition, and progress',
      price: '$349/month',
      features: ['Workout tracking', 'Nutrition logging', 'Progress charts', 'Goal setting', 'Social features']
    },
    {
      type: 'Educational App',
      description: 'Learning platform with courses, quizzes, and progress tracking',
      price: '$449/month',
      features: ['Course management', 'Quiz system', 'Progress tracking', 'Certificates', 'Video integration']
    },
    {
      type: 'Custom App',
      description: 'Fully customized app built to your specific requirements',
      price: 'Custom pricing',
      features: ['Custom features', 'Unique design', 'Special integrations', 'Dedicated support', 'SLA guarantee']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '1 app included',
        'Basic templates',
        'Standard support',
        'App store publishing',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 3 apps',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      description: 'Complete mobile app solution for large organizations',
      features: [
        'Unlimited apps',
        'Custom development',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mobile App Builder - Zion Tech Group</title>
        <meta name="description" content="Build native mobile apps with AI assistance. Drag-and-drop interface, cross-platform support, and instant deployment. No coding required." />
        <meta name="keywords" content="ai mobile app builder, no-code app development, cross-platform apps, mobile app development, app builder" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Mobile App Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build native mobile apps with AI assistance. Drag-and-drop interface, cross-platform support, and instant deployment. No coding required.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">No-Code</div>
              <div className="text-gray-300">Required</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Cross-Platform</div>
              <div className="text-gray-300">Support</div>
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
            Powerful App Building Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builderFeatures.map((feature, index) => (
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

      {/* App Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            App Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{app.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{app.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{app.price}</div>
                </div>
                <ul className="space-y-2">
                  {app.features.map((feature, featureIndex) => (
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
            Why Choose AI Mobile App Builder?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Native Performance</h3>
              <p className="text-gray-300">Build truly native apps with optimal performance and user experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Development</h3>
              <p className="text-gray-300">Build and deploy mobile apps in days, not months, with AI assistance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">No Coding Required</h3>
              <p className="text-gray-300">Create professional mobile apps without any programming knowledge.</p>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Mobile App Builder Plan`}
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Create professional mobile apps without coding. Start building today and launch in days, not months.
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
              Start Building
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMobileBuilderPage;