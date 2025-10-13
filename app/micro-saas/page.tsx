import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Code,
  Database,
  Smartphone,
  Monitor,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      name: 'Zion AI Neural Interface',
      description: 'Advanced AI-powered neural interface for seamless human-computer interaction',
      icon: <Brain className="w-8 h-8" />,
      features: ['Neural Pattern Recognition', 'Real-time Processing', 'Adaptive Learning', 'Secure Communication'],
      href: '/zion-ai-neural-interface',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Zion Analytics Pro',
      description: 'Comprehensive business analytics platform with AI-driven insights',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      href: '/zion-analytics-pro',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Zion Security Shield',
      description: 'Enterprise-grade security solution for comprehensive protection',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Security Auditing'],
      href: '/zion-security-shield',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management system',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Encrypted Storage', 'File Synchronization', 'Access Control', 'Backup Solutions'],
      href: '/zion-cloud-vault',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      icon: <FileText className="w-8 h-8" />,
      features: ['Content Generation', 'Multi-format Support', 'Collaboration Tools', 'Publishing Automation'],
      href: '/zion-content-studio',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SAAS up and running in minutes, not months',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for enhanced functionality',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for peace of mind',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Cloud-Native',
      description: 'Built for the cloud with 99.9% uptime guarantee',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard security',
        '1GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'Enhanced security',
        '10GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        '24/7 support',
        'Enterprise security',
        'Unlimited storage',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions | Zion Tech Group"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. AI-powered tools for analytics, security, content management, and more."
        keywords="micro SAAS, business software, AI tools, analytics, security, content management, cloud solutions"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions that solve specific business problems. 
              Our micro SAAS products are designed to integrate seamlessly into your existing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="#services"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Solutions
              </FuturisticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Each solution is designed to address specific business needs with precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built with modern technology and designed for maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-md border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;
