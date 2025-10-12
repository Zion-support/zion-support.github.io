import React from 'react';
import { CheckCircle, ArrowRight, Atom, Zap, Shield, Cpu, Star, Users, Clock, DollarSign, Brain, Target, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function QuantumComputingSolutionsPage() {
  const features = [
    {
      title: "Feature 1",
      description: "Description of feature 1"
    },
    {
      title: "Feature 2",
      description: "Description of feature 2"
    }
  ];

  const services = [
    {
      icon: <Atom className="w-8 h-8 text-blue-500" />,
      title: 'Quantum Algorithm Development',
      description: 'Develop custom quantum algorithms for optimization, machine learning, and cryptography applications.',
      features: ['Custom algorithm design', 'Quantum machine learning', 'Optimization algorithms', 'Cryptographic protocols', 'Quantum simulation', 'Performance optimization'],
      price: 'Starting at $15,000/month',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Quantum Cloud Access',
      description: 'Access to leading quantum computing platforms including IBM, Google, and Rigetti quantum computers.',
      features: ['Multi-cloud quantum access', 'Real-time quantum execution', 'Quantum circuit optimization', 'Error mitigation', 'Quantum state preparation', 'Measurement and analysis'],
      price: 'Starting at $5,000/month',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Quantum Security Solutions',
      description: 'Implement quantum-resistant cryptography and quantum key distribution for enhanced security.',
      features: ['Post-quantum cryptography', 'Quantum key distribution', 'Security assessment', 'Migration planning', 'Quantum random number generation', 'Secure communication protocols'],
      price: 'Starting at $12,000/month',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Exponential Speedup',
      description: 'Achieve quantum advantage for specific problems with exponential computational speedup.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Future-Proof Security',
      description: 'Prepare for the quantum era with quantum-resistant security solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with cutting-edge quantum computing capabilities.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Guidance',
      description: 'Work with quantum computing experts and researchers from leading institutions.'
    }
  ];

  const applications = [
    {
      title: 'Financial Services',
      description: 'Portfolio optimization, risk analysis, and fraud detection using quantum algorithms',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Pharmaceuticals',
      description: 'Drug discovery, molecular simulation, and protein folding with quantum computing',
      icon: <Atom className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'Route optimization, inventory management, and supply chain optimization',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant cryptography and quantum key distribution systems',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const stats = [
    { number: '100+', label: 'Quantum Algorithms' },
    { number: '10^18', label: 'Speedup Potential' },
    { number: '99.9%', label: 'Reliability' },
    { number: '24/7', label: 'Expert Support' }
  ];

  const pricing = [
    {
      plan: 'Explorer',
      price: '$5,000',
      period: '/month',
      description: 'For organizations exploring quantum computing',
      features: ['Basic quantum access', 'Standard algorithms', 'Email support', 'Monthly reports'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$15,000',
      period: '/month',
      description: 'For companies implementing quantum solutions',
      features: ['Full quantum suite', 'Custom algorithms', 'Priority support', 'Dedicated expert'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$50,000',
      period: '/month',
      description: 'For large-scale quantum implementations',
      features: ['Complete quantum platform', 'On-premise deployment', '24/7 support', 'Custom development'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Quantum Computing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary quantum computing solutions for enterprises. Access quantum algorithms, cloud platforms, and security solutions to solve complex problems." />
        <meta name="keywords" content="quantum computing, quantum algorithms, quantum security, quantum cloud, quantum machine learning" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum Computing Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of quantum computing to solve complex problems that are impossible for classical computers. 
              Access cutting-edge quantum algorithms, cloud platforms, and security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Quantum
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/it-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All IT Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              {features.map((feature, index) => (

                <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive quantum computing solutions for enterprise applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              {features.map((feature, index) => (

                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your industry with quantum computing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {applications.map((application, index) => (
              {features.map((feature, index) => (

                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">{application.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock unprecedented computational power for your most challenging problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              {features.map((feature, index) => (

                <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the quantum computing solution that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              {features.map((feature, index) => (

                <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Contact Sales
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Enter the Quantum Era?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Join the quantum revolution and solve problems that were previously impossible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Atom className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <Link
              to="/it-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}