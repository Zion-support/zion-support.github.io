import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Clock, DollarSign, Star, Zap, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CybersecuritySolutionsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const securityServices = [
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Threat Detection',
      description: 'Advanced AI-powered threat detection and prevention systems that identify and neutralize cyber threats in real-time.',
      features: ['Real-time threat monitoring', 'AI-powered analysis', 'Automated response', '24/7 surveillance'],
      pricing: 'Starting at $2,000/month',
      link: '/ai-threat-detection',
      popular: true,
      duration: 'Ongoing'
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      title: 'Security Audit',
      description: 'Comprehensive security assessment of your IT infrastructure to identify vulnerabilities and security gaps.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Compliance check', 'Security report'],
      pricing: 'Starting at $1,500',
      link: '/security-audit',
      popular: true,
      duration: '1-2 weeks'
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to test your security defenses and identify potential entry points.',
      features: ['Black box testing', 'White box testing', 'Social engineering', 'Report & recommendations'],
      pricing: 'Starting at $2,500',
      link: '/penetration-testing',
      popular: false,
      duration: '2-4 weeks'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Compliance Management',
      description: 'Ensure your organization meets industry standards and regulatory requirements for data protection.',
      features: ['GDPR compliance', 'HIPAA compliance', 'SOX compliance', 'ISO 27001'],
      pricing: 'Starting at $1,800/month',
      link: '/compliance-management',
      popular: true,
      duration: 'Ongoing'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Security Training',
      description: 'Comprehensive cybersecurity training for your team to prevent human error and social engineering attacks.',
      features: ['Phishing simulation', 'Security awareness', 'Incident response', 'Regular updates'],
      pricing: 'Starting at $500/month',
      link: '/security-training',
      popular: false,
      duration: 'Ongoing'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: '24/7 Security Monitoring',
      description: 'Round-the-clock monitoring of your systems with immediate response to security incidents.',
      features: ['24/7 SOC monitoring', 'Incident response', 'Threat intelligence', 'Real-time alerts'],
      pricing: 'Starting at $3,000/month',
      link: '/security-monitoring',
      popular: true,
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      title: 'Advanced AI Protection',
      description: 'Leverage cutting-edge AI technology to detect and prevent sophisticated cyber threats',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: '24/7 Monitoring',
      description: 'Continuous surveillance of your systems with immediate response to security incidents',
      icon: <Clock className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Compliance Ready',
      description: 'Ensure your organization meets all regulatory requirements and industry standards',
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Cost Effective',
      description: 'Prevent costly data breaches and security incidents with proactive protection',
      icon: <DollarSign className="w-6 h-6 text-green-400" />
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: <Shield className="w-6 h-6 text-red-400" /> },
    { number: '< 1min', label: 'Response Time', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '500+', label: 'Threats Blocked Daily', icon: <AlertTriangle className="w-6 h-6 text-orange-400" /> },
    { number: '100%', label: 'Compliance Rate', icon: <CheckCircle className="w-6 h-6 text-green-400" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CTO, TechCorp Inc.',
      content: 'Zion Tech Group\'s cybersecurity solutions have protected our infrastructure from multiple sophisticated attacks. Their AI threat detection is incredibly effective.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Security Director, FinanceFirst',
      content: 'The compliance management service helped us achieve GDPR compliance quickly and efficiently. Highly recommended for any organization.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'IT Manager, HealthTech Solutions',
      content: 'Their 24/7 monitoring service gives us peace of mind. The response time is incredible and their team is always available.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced cybersecurity solutions including AI threat detection, security audits, penetration testing, and compliance management. Protect your business with cutting-edge security technology." />
        <meta name="keywords" content="cybersecurity, threat detection, security audit, penetration testing, compliance, data protection, AI security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with advanced AI-powered cybersecurity solutions. From threat detection to compliance management, we provide comprehensive security services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105 transform"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Why Choose Our Security Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of advanced cybersecurity with our proven solutions
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Our Security Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {securityServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 group relative overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 group-hover:text-red-300 transition-colors" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <span className="text-sm text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group-hover:translate-y-[-2px] transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from satisfied customers
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 delay-1700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-red-600 via-orange-600 to-cyan-600 rounded-3xl p-12 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-cyan-500/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-orange-400 to-cyan-400 animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our cybersecurity solutions can protect your organization from evolving threats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-white/25"
                  >
                    Get Security Assessment
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 transform"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecuritySolutionsPage;