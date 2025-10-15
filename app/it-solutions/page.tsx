import React from 'react';
import {  } from "lucide-react";

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      price: 'From $2,500/mo',
      originalPrice: 'From $4,000/mo',
      description: 'Comprehensive cloud infrastructure solutions for modern businesses',
      longDescription: 'Build, deploy, and manage scalable cloud infrastructure with our expert team. From AWS to Azure, we provide end-to-end cloud solutions.',
      features: [
        'Multi-cloud architecture design',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & load balancing',
        'Disaster recovery planning',
        'Security & compliance',
        'Cost optimization',
        '24/7 monitoring & support',
        'Migration services',
        'Performance optimization',
        'Backup & recovery solutions'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Increase system reliability'
      ],
      category: 'Infrastructure',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: true
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      price: 'From $1,500/mo',
      originalPrice: 'From $2,500/mo',
      description: 'Advanced security solutions to protect your digital assets',
      longDescription: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and security monitoring.',
      features: [
        'Threat detection & response',
        'Security assessment & auditing',
        'Penetration testing',
        'Vulnerability management',
        'Security awareness training',
        'Compliance management',
        'Firewall & network security',
        'Endpoint protection',
        'Data encryption & backup',
        '24/7 security monitoring'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure compliance with regulations',
        'Reduce security risks',
        'Maintain business continuity'
      ],
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      popular: true
    },
    {
      id: 'web-development',
      name: 'Web Development',
      price: 'From $5,000',
      originalPrice: 'From $8,000',
      description: 'Custom web applications and e-commerce solutions',
      longDescription: 'Build modern, responsive web applications with cutting-edge technologies and best practices.',
      features: [
        'Custom web applications',
        'E-commerce platforms',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'API development & integration',
        'Mobile-responsive design',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Maintenance & support'
      ],
      benefits: [
        'Modern, responsive design',
        'Improved user experience',
        'Better search engine ranking',
        'Scalable and maintainable code'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      popular: false
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      price: 'From $10,000',
      originalPrice: 'From $15,000',
      description: 'Native and cross-platform mobile applications',
      longDescription: 'Create powerful mobile applications for iOS and Android with our expert development team.',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'API integration',
        'Performance optimization',
        'Security implementation',
        'App maintenance & updates'
      ],
      benefits: [
        'Reach mobile users effectively',
        'Improve user engagement',
        'Increase business visibility',
        'Streamline business processes'
      ],
      category: 'Mobile',
      icon: <Mobile className="w-8 h-8 text-orange-400" />,
      popular: false
    },
    {
      id: 'database-management',
      name: 'Database Management',
      price: 'From $2,000/mo',
      originalPrice: 'From $3,500/mo',
      description: 'Comprehensive database solutions and management services',
      longDescription: 'Optimize, secure, and maintain your databases with our expert database management services.',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Security & access control',
        'Data migration',
        'Monitoring & maintenance',
        'Cloud database solutions',
        'Data warehousing',
        'Business intelligence',
        '24/7 support'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data security',
        'Reduce maintenance costs',
        'Scale with business growth'
      ],
      category: 'Database',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      popular: false
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      price: 'From $3,000/mo',
      originalPrice: 'From $5,000/mo',
      description: 'Robust network infrastructure design and implementation',
      longDescription: 'Design, implement, and maintain secure and scalable network infrastructure for your business.',
      features: [
        'Network design & planning',
        'Router & switch configuration',
        'Wireless network setup',
        'VPN implementation',
        'Network security',
        'Performance monitoring',
        'Disaster recovery',
        'Remote access solutions',
        'Network optimization',
        '24/7 monitoring'
      ],
      benefits: [
        'Improve network performance',
        'Enhance security',
        'Reduce downtime',
        'Support business growth'
      ],
      category: 'Networking',
      icon: <Network className="w-8 h-8 text-red-400" />,
      popular: false
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'Mobile', 'Database', 'Networking'];

  const useCases = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud',
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      benefits: ['Cost Reduction', 'Scalability', 'Reliability', 'Security']
    },
    {
      title: 'Security Hardening',
      description: 'Strengthen your security posture with comprehensive solutions',
      icon: <Shield className="w-6 h-6 text-green-400" />,
      benefits: ['Threat Protection', 'Compliance', 'Risk Mitigation', 'Monitoring']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your technology stack and processes',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      benefits: ['Efficiency', 'Innovation', 'Competitive Edge', 'Growth']
    },
    {
      title: 'System Integration',
      description: 'Connect and integrate your existing systems',
      icon: <Settings className="w-6 h-6 text-orange-400" />,
      benefits: ['Automation', 'Efficiency', 'Data Flow', 'Productivity']
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$2,000/mo',
      description: 'Perfect for small businesses',
      features: [
        'Basic IT support',
        'Email & phone support',
        'Standard monitoring',
        'Basic security',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced IT services',
        'Priority support',
        '24/7 monitoring',
        'Advanced security',
        'Custom solutions',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Full IT suite',
        'Dedicated support team',
        'Custom development',
        'White-label solutions',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];
const Component = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Comprehensive Technology Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, web development, mobile apps, and database management. Expert technology services for your business." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure" />
        <meta property="og:title" content="IT Solutions - Comprehensive Technology Services" />
        <meta property="og:description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, web development, mobile apps, and database management." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Solutions
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation 
              and drive business growth with cutting-edge IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Solutions for Every Business Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to security hardening, our IT solutions are designed to solve real business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group relative ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-blue-400 font-medium">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <Link
                    to={`/${service.id}`}
                    className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Solutions Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect IT solution plan for your business. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-blue-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge IT solutions. Start your free trial today and see the difference our technology can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
}

export default ItSolutionsPage;
