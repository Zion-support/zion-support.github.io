import { Home, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
export default function AISmartHomeAutomationPlatform() {
  const features = [
    {
      icon: Home,
      title: 'Intelligent Device Control',
      description: 'AI-powered control of all your smart devices with voice commands and predictive automation'
    },
    {
      icon: Zap,
      title: 'Energy Optimization',
      description: 'Smart energy management that reduces costs by up to 30% through intelligent scheduling'
    },
    {
      icon: Brain,
      title: 'Predictive Automation',
      description: 'AI learns your habits and automatically adjusts settings for optimal comfort and efficiency'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'AI-powered security monitoring with facial recognition and anomaly detection'
    },
    {
      icon: Smartphone,
      title: 'Unified Control',
      description: 'Control your entire home from one intuitive mobile app with remote access'
    },
    {
      icon: BarChart3,
      title: 'Usage Analytics',
      description: 'Detailed insights into energy usage, device performance, and cost optimization'
    }
  ];

  const benefits = [
    '30% reduction in energy costs',
    '50% improvement in home security',
    '90% automation of daily routines',
    'Seamless device integration'
  ];

  const smartHomeCategories = [
    {
      title: 'Climate Control',
      description: 'Intelligent heating, cooling, and air quality management',
      icon: Zap,
      features: ['Smart thermostats', 'Air quality monitoring', 'Humidity control', 'Energy optimization']
    },
    {
      title: 'Security & Safety',
      description: 'AI-powered security systems and safety monitoring',
      icon: Shield,
      features: ['Smart cameras', 'Motion sensors', 'Door locks', 'Fire detection']
    },
    {
      title: 'Lighting & Entertainment',
      description: 'Smart lighting control and home entertainment systems',
      icon: Home,
      features: ['Smart bulbs', 'Entertainment systems', 'Ambient lighting', 'Music control']
    },
    {
      title: 'Kitchen & Appliances',
      description: 'Smart kitchen appliances and automated cooking assistance',
      icon: CheckCircle,
      features: ['Smart refrigerators', 'Oven control', 'Coffee makers', 'Inventory tracking']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29.99',
      period: '/month',
      description: 'Perfect for apartments and small homes',
      features: [
        'Up to 20 smart devices',
        'Basic automation rules',
        'Mobile app control',
        'Energy monitoring',
        'Email support',
        'Cloud storage (7 days)'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59.99',
      period: '/month',
      description: 'Ideal for medium to large homes',
      features: [
        'Up to 100 smart devices',
        'Advanced AI automation',
        'Voice control integration',
        'Security monitoring',
        'Priority support',
        'Cloud storage (30 days)'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'For smart buildings and complexes',
      features: [
        'Unlimited devices',
        'Custom AI training',
        'Multi-location management',
        'Advanced analytics',
        '24/7 phone support',
        'Unlimited cloud storage'
      ],
      popular: false
    }
  ];

  const compatibleDevices = [
    'Amazon Alexa', 'Google Home', 'Apple HomeKit', 'Philips Hue', 'Nest Thermostat',
    'Ring Doorbell', 'Samsung SmartThings', 'August Locks', 'Ecobee', 'Lutron Caseta',
    'TP-Link Kasa', 'Wyze Cameras', 'Sonos Speakers', 'iRobot Roomba', 'Arlo Security'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Smart Home Automation Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Transform your home into an intelligent living space with AI-powered automation, 
              energy optimization, and seamless device control
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Home Assessment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Smart Home Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create the ultimate intelligent home experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Home Categories */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Smart Home Control
            </h2>
            <p className="text-xl text-gray-600">
              Manage every aspect of your home with specialized AI-powered automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartHomeCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <category.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Smart Home Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of homeowners who have transformed their living experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compatible Devices */}
      <div className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works with Your Existing Devices
            </h2>
            <p className="text-xl text-gray-600">
              Compatible with over 500+ smart home devices and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {compatibleDevices.map((device, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-100 text-center">
                <p className="text-sm font-semibold text-gray-700">{device}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Smart Home Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your home size and automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular ? 'border-blue-500 scale-105' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+13024640950" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation & Support */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Installation & Support
            </h2>
            <p className="text-xl text-gray-600">
              We handle everything from setup to ongoing maintenance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-gray-600">Certified technicians handle all device setup and configuration</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty & Updates</h3>
              <p className="text-gray-600">Comprehensive warranty coverage and automatic software updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Home Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of homeowners who have created their dream smart home with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Visit our website for more information:</p>
            <a 
              href="https://ziontechgroup.com" 
              className="text-white underline hover:text-blue-200 transition-colors"
            >
              https://ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-blue-100">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}