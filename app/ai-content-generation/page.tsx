import React from 'react';
import { CheckCircle, Star, Zap, Users, Clock, Shield } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality blog posts, articles, social media content, and marketing copy in seconds using advanced AI models.',
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Multiple content formats', 'Brand voice consistency']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['Global reach', 'Cultural sensitivity', 'Local market adaptation', 'Translation accuracy']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Collaboration',
      description: 'Work with your team in real-time, with version control and collaborative editing features.',
      benefits: ['Team collaboration', 'Version control', 'Comment system', 'Approval workflows']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with GDPR, CCPA, and SOC 2.',
      benefits: ['Data encryption', 'Compliance ready', 'Access controls', 'Audit trails']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        '10,000 words/month',
        '5 content templates',
        'Basic AI models',
        'Email support',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        '50,000 words/month',
        '20 content templates',
        'Advanced AI models',
        'Priority support',
        'High quality output',
        'Team collaboration (5 users)',
        'Brand voice training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited words',
        'All content templates',
        'Premium AI models',
        '24/7 phone support',
        'Highest quality',
        'Unlimited team members',
        'Custom integrations',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s AI content generation has revolutionized our content strategy. We\'ve increased our content output by 500% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The ROI is incredible. We\'re saving $15,000/month on content creation while producing better quality content than our previous agency.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GlobalBrand',
      content: 'The multi-language support is game-changing. We can now create localized content for all our markets without hiring translators.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              AI Content Generation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Create high-quality content 10x faster with our advanced AI platform
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Transform your content strategy with our AI-powered platform that generates blog posts, 
              social media content, marketing copy, and more in seconds. Trusted by 10,000+ businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center justify-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500%</div>
                <div className="text-gray-300">Faster Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your content at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their content strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start creating high-quality content 10x faster with our AI platform. 
            Join thousands of businesses already using our solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free 14-day trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGenerationPage;
