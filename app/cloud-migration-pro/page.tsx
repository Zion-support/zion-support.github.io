import { Cloud, Shield, Zap, ArrowRight, Star } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import { ArrowRight, Shield, Star, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Zero Downtime Migration',
      description: 'Seamless migration with zero business disruption using advanced orchestration'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimized cloud infrastructure for maximum performance and cost efficiency'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small to medium applications',
      features: [
        'Up to 5 servers',
        'Basic migration planning',
        'Standard security',
        'Email support',
        '30-day warranty'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$9,999',
      period: '/project',
      description: 'Ideal for complex enterprise systems',
      features: [
        'Up to 25 servers',
        'Advanced migration planning',
        'Enhanced security',
        'Priority support',
        'Custom optimization',
        '90-day warranty',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large-scale migrations',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Dedicated team',
        '24/7 support',
        'White-label options',
        'Extended warranty',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The migration was flawless. Zero downtime and 40% cost reduction in the first month.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Enterprises',
      role: 'IT Director',
      content: 'Professional service with exceptional results. Our cloud infrastructure is now 3x faster.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Innovation Labs',
      role: 'VP Engineering',
      content: 'Outstanding expertise and support. The migration exceeded all our expectations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services. Seamless, secure, and optimized migration to cloud infrastructure." />
      </Helmet>

      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {' '}Cloud Migration
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with our expert team. 
                Zero downtime, maximum security, and optimized performance guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Get Free Consultation
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  View Our Work
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Our Migration Service
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Expert cloud migration with proven methodologies and cutting-edge tools
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
                  Migration Packages
                </h2>
                <p className="text-gray-300 text-lg">
                  Choose the package that fits your migration needs
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
                  Client Success Stories
                </h2>
                <p className="text-gray-300 text-lg">
                  See how we've helped companies transform their infrastructure
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
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Get a free consultation and migration plan tailored to your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Get Free Consultation
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Download Migration Guide
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>
    </div>
  );
};

export default CloudMigrationProPage;