import { Globe, Zap, Shield, Star, ArrowRight } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import { ArrowRight, Shield, Star, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const AITranslationServicePage = () => {
  const features = [
    {
      icon: Globe,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy'
    },
    {
      icon: Zap,
      title: 'Real-time Translation',
      description: 'Instant translation with advanced AI neural networks'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 10,000 words/month',
        '50+ languages',
        'Basic document translation',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 words/month',
        '100+ languages',
        'Advanced document translation',
        'Priority support',
        'Custom terminology',
        'Quality assurance',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Maria Garcia',
      company: 'Global Marketing Inc.',
      role: 'Marketing Director',
      content: 'The AI translation service has revolutionized our global marketing campaigns. The quality is outstanding.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'Tech Solutions Ltd.',
      role: 'Product Manager',
      content: 'We can now communicate with our international clients seamlessly. The accuracy is incredible.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Plus',
      role: 'Operations Manager',
      content: 'Our product descriptions are now available in 20+ languages. Sales have increased by 40%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
        <meta name="description" content="Professional AI-powered translation service supporting 100+ languages with enterprise-grade security and accuracy." />
      </Helmet>

      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {' '}Translation Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Break language barriers with our advanced AI translation service. 
                Professional-grade translations in 100+ languages with enterprise security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  View Pricing
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Advanced Translation Features
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Powered by cutting-edge AI technology for accurate, context-aware translations
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Choose Your Plan
                </h2>
                <p className="text-gray-300 text-lg">
                  Flexible pricing for individuals, teams, and enterprises
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"} 
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Trusted by Global Companies
                </h2>
                <p className="text-gray-300 text-lg">
                  See how businesses worldwide are breaking language barriers
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Break Language Barriers?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Start translating your content with AI-powered accuracy today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>
    </div>
  );
};

export default AITranslationServicePage;