import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AiAutomationPlatformPage = () => {
  const features = [
    {
      title: 'Advanced AI Technology',
      description: 'Cutting-edge artificial intelligence algorithms powering our ai automation platform solution.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights and analytics with our real-time processing capabilities.',
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Built to scale with your business needs and growing demands.',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success with our platform.',
      icon: <Users className="w-8 h-8" />
    }
  ];

  const benefits = [
    'Increase efficiency by up to 300%',
    'Reduce operational costs by 50%',
    'Improve accuracy by 95%',
    'Scale seamlessly with your business',
    '24/7 monitoring and support',
    'Easy integration with existing systems'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI features',
        'Up to 1,000 operations/month',
        'Email support',
        'Standard analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI features',
        'Up to 10,000 operations/month',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI capabilities',
        'Unlimited operations',
        '24/7 dedicated support',
        'Custom analytics',
        'White-label options',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Ai Automation Platform - Zion Tech Group | Advanced AI Solutions"
        description="Advanced Ai Automation Platform solution powered by artificial intelligence. Transform your business with cutting-edge technology and expert support."
        keywords="ai automation platform, AI solutions, artificial intelligence, business automation, technology consulting"
        canonical="https://ziontechgroup.com/ai-automation-platform"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Ai Automation Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced Ai Automation Platform solution powered by artificial intelligence. Transform your business with cutting-edge technology and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Ai Automation Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our ai automation platform solution is designed to deliver exceptional results and drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our ai automation platform solution delivers measurable results that drive growth and efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to experience the power of our ai automation platform solution? 
                Contact our experts for a personalized consultation.
              </p>
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Contact Us
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the perfect plan for your business needs. All plans include our core features and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our ai automation platform solution to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Contact Us Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AiAutomationPlatformPage;