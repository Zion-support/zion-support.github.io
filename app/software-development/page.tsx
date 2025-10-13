import FuturisticButton from '../../components/FuturisticButton';
import FuturisticCard from '../../components/FuturisticCard';
import React from 'react';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import { Code, Sparkles, ArrowRight, CheckCircle, Star, Globe, Shield, Server, Monitor, Cloud, Users, Clock, Zap, Settings, User, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SoftwareDevelopmentPage = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const features = [
    {
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements and objectives",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Applications",
      description: "Modern, responsive web applications with cutting-edge technologies and best practices",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Integration",
      description: "Seamless cloud integration and deployment for scalable, reliable applications",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions designed and developed specifically for your business needs",
      icon: <Code className="w-8 h-8" />,
      features: ["Requirements analysis", "System design", "Development", "Testing & QA", "Deployment"],
      price: "From $5,999/project"
    },
    {
      title: "Web Application Development",
      description: "Modern, responsive web applications using the latest technologies and frameworks",
      icon: <Globe className="w-8 h-8" />,
      features: ["Frontend development", "Backend APIs", "Database design", "UI/UX design", "Performance optimization"],
      price: "From $3,999/project"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
      icon: <Settings className="w-8 h-8" />,
      features: ["Native iOS/Android", "Cross-platform", "App store deployment", "Push notifications", "Offline functionality"],
      price: "From $4,999/project"
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data exchange",
      icon: <Server className="w-8 h-8" />,
      features: ["RESTful APIs", "GraphQL", "Authentication", "Rate limiting", "Documentation"],
      price: "From $2,999/project"
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "GraphQL", category: "API" },
    { name: "Kubernetes", category: "DevOps" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/project",
      description: "Basic software development for small projects",
      features: [
        "Simple web application",
        "Basic functionality",
        "Standard design",
        "1 month support",
        "Documentation"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/project",
      description: "Comprehensive software solutions for growing businesses",
      features: [
        "Custom web application",
        "Advanced features",
        "Custom design",
        "3 months support",
        "API integration",
        "Database design",
        "Performance optimization",
        "Testing & QA"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/project",
      description: "Full-scale software solutions for large organizations",
      features: [
        "Complex enterprise application",
        "Advanced integrations",
        "Custom UI/UX design",
        "6 months support",
        "Multiple platforms",
        "Scalable architecture",
        "Security audit",
        "Performance monitoring",
        "Training & documentation"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Software Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional software development services including custom applications, web development, mobile apps, and API development using modern technologies." />
        <meta name="keywords" content="software development, custom software, web development, mobile apps, API development, programming, coding" />
        <link rel="canonical" href="https://ziontechgroup.com/software-development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Code className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Custom Software Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-400">
              Software Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into powerful software solutions. From web applications to mobile apps, 
            we deliver custom software that drives your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive software development services cover every aspect of modern application development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.value}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-green-400 font-semibold text-lg">{service.price}</span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-white font-semibold text-sm">{tech.name}</div>
                <div className="text-gray-400 text-xs mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the development plan that fits your project requirements and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#contact"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Development Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional software development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {benefit.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Software?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's turn your ideas into powerful software solutions. 
              Get started with your custom development project today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Code className="w-5 h-5" />}
              >
                Start Your Project
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View Portfolio
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Free consultation • Custom solutions • 24/7 support</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;