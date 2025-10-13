<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

export default function cybersecuritySolutions() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Cybersecurity Solutions solutions by Zion Tech Group" />
=======
        <meta name="description" content="Advanced cybersecurity solutions solutions by Zion Tech Group" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
<<<<<<< HEAD
          <h1 className="text-4xl font-bold mb-8">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
          </p>
<<<<<<< HEAD
=======

export default function CybersecuritysolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
        </div>
      </div>
    </div>
=======
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { Shield, ArrowRight, CheckCircle, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

const CybersecuritySolutionsPage = () => {
  const securitySolutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to protect your business",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Identity Management",
      description: "Secure identity and access management solutions for your organization",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Data Protection",
      description: "Comprehensive data protection and encryption solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Network Security",
      description: "Robust network security solutions to protect your infrastructure",
      color: "from-orange-500 to-red-500"
    }
  ];

  const securityProcess = [
    {
      step: "1",
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture and vulnerabilities"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Custom security solution design tailored to your specific needs"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Professional implementation and configuration of security solutions"
    },
    {
      step: "4",
      title: "Monitoring & Support",
      description: "Ongoing monitoring, maintenance, and support for your security infrastructure"
    }
  ];

  const securityBenefits = [
    "Protect against cyber threats and attacks",
    "Ensure compliance with security standards",
    "Safeguard sensitive data and information",
    "Reduce security risks and vulnerabilities",
    "Improve security awareness and training",
    "24/7 monitoring and support"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Standard security tools",
        "Email support",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Advanced threat detection",
        "Identity management",
        "Priority support",
        "Advanced monitoring",
        "Data protection",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Comprehensive security suite",
        "Dedicated security team",
        "White-label solution",
        "SLA guarantee",
        "Advanced analytics",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CISO",
      company: "TechCorp",
      content: "The cybersecurity solutions have significantly improved our security posture. We feel much more protected now.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "DataFlow Inc",
      content: "Excellent security solutions. The implementation was smooth and the ongoing support is outstanding.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Security Manager",
      company: "SecureCorp",
      content: "The threat detection capabilities are impressive. We've prevented several potential attacks.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Cybersecurity Solutions - Zion Tech Group | Advanced Security Solutions"
            description="Get comprehensive cybersecurity solutions from Zion Tech Group. Advanced threat detection, identity management, and data protection to secure your business."
            keywords="cybersecurity solutions, threat detection, identity management, data protection, network security, security solutions"
            canonical="https://ziontechgroup.com/cybersecurity-solutions"
          />
          
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Cybersecurity Solutions</span>
                </div>
                
                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Cybersecurity Solutions
                </FuturisticTextEnhanced>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Protect your business with advanced cybersecurity solutions. 
                  From threat detection to data protection, we've got you covered.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#contact"
                    variant="primary"
                    size="lg"
                    icon={Shield}
                    iconPosition="left">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#solutions"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Learn More
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Security Solutions Section */}
            <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Our Security Solutions
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive cybersecurity solutions to protect your business
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {securitySolutions.map((solution, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {solution.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {solution.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Security Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Security Process
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A proven 4-step process to ensure comprehensive security implementation
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {securityProcess.map((step, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Our Solutions?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get the most out of your security investment with our expert solutions
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {securityBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your security needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    What Our Clients Say
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Hear from our satisfied clients about their security experience
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Let's implement comprehensive cybersecurity solutions to protect your business 
                  from threats and ensure your data is secure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="mailto:security@ziontechgroup.com"
                    variant="outline"
                    size="lg"
                    icon={Mail}
                    iconPosition="right">
                    Email Us
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
};

export default CybersecuritySolutionsPage;