import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Cloud, Shield, Zap, CheckCircle } from 'lucide-react';
=======
import { Cloud, Shield, Zap, Database, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
import Layout from '../layout';

export default function CloudMigrationProPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration across AWS, Azure, and Google Cloud platforms'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance throughout the migration process'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Data Migration',
      description: 'Safe and secure data migration with zero data loss guarantee'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize applications for cloud-native performance and scalability'
    }
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and applications'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Detailed migration strategy and timeline development'
    },
    {
      step: '3',
      title: 'Migration',
      description: 'Execute migration with minimal downtime and maximum security'
    },
    {
<<<<<<< HEAD
      step: '04',
      title: 'Testing & Validation',
      description: 'Thorough testing to ensure all systems function correctly in the cloud'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Fine-tune performance and optimize costs for maximum efficiency'
    },
    {
      step: '06',
      title: 'Support & Monitoring',
      description: 'Ongoing support and monitoring to ensure continued success'
=======
      step: '4',
      title: 'Optimization',
      description: 'Post-migration optimization and performance tuning'
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
<<<<<<< HEAD
      price: '$2,999',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic cloud setup',
        'Data migration',
=======
      price: '$5,000',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 servers',
        'Basic security setup',
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
        'Email support',
        '30-day warranty'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
<<<<<<< HEAD
      price: '$7,999',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 50 servers',
        'Advanced cloud architecture',
        'Zero-downtime migration',
        'Priority support',
        'Performance optimization',
=======
      price: '$15,000',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 25 servers',
        'Advanced security',
        'Priority support',
        'Custom integrations',
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
        '90-day warranty'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited servers',
<<<<<<< HEAD
        'Custom cloud solutions',
        'Dedicated team',
        '24/7 support',
        'Custom integrations',
=======
        'Full security audit',
        '24/7 dedicated support',
        'White-label solution',
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
        '1-year warranty'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
<<<<<<< HEAD
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The migration was flawless. We achieved 40% cost savings and improved performance significantly.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'Global Enterprises',
      role: 'IT Director',
      content: 'Professional service with zero downtime. Our business continued seamlessly throughout the process.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Startup Inc',
      role: 'Founder',
      content: 'The team made our cloud migration stress-free. Highly recommend their expertise.',
      rating: 5
=======
      role: 'CTO',
      company: 'TechCorp',
      content: 'The migration was seamless and our applications are now running 40% faster in the cloud.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'Global Solutions',
      content: 'Professional service with excellent support. Our cloud infrastructure is now more secure and cost-effective.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'VP Engineering',
      company: 'StartupXYZ',
      content: 'The team delivered exactly what they promised. Our migration was completed on time and under budget.',
      rating: 5
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
    }
  ];

  return (
    <Layout>
      <Helmet>
<<<<<<< HEAD
        <title>Cloud Migration Pro | Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services. Seamless, secure, and cost-effective migration to cloud platforms with zero downtime." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, cloud consulting, infrastructure migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
=======
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services by Zion Tech Group. Seamless, secure, and optimized cloud transitions." />
      </Helmet>
      
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Cloud Migration Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional cloud migration services by Zion Tech Group. 
                Seamless, secure, and optimized cloud transitions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
            </div>
          </div>
<<<<<<< HEAD

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Migration Features
                </h2>
                <p className="text-gray-300 text-lg">
                  Comprehensive cloud migration solutions
                </p>
              </div>
<<<<<<< HEAD
            ))}
          </div>

          {/* Migration Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Migration Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
=======
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-9c1a
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Migration Service?
              </h2>
              <p className="text-gray-300 text-lg">
                Professional expertise and proven methodologies for successful cloud migration
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
=======
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                  </div>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-gray-300 text-lg">
                A proven 6-step methodology for successful cloud migration
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Migration Packages
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the migration package that fits your needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'border-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-gray-300 text-lg">
                See how we've helped businesses migrate to the cloud
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get a free assessment and discover how cloud migration can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
=======
          </section>

          {/* Migration Steps */}
          <section className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Our Migration Process
                </h2>
                <p className="text-gray-300 text-lg">
                  A proven 4-step process for successful cloud migration
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {migrationSteps.map((step, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Migration Packages
                </h2>
                <p className="text-gray-300 text-lg">
                  Choose the right package for your migration needs
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''} relative`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact"
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Client Success Stories
                </h2>
                <p className="text-gray-300 text-lg">
                  See what our clients say about our migration services
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our experts handle your cloud migration with zero downtime and maximum security. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Migration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
  );
}