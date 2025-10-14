import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  DollarSign,
  Monitor,
  Settings,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Vue, and Angular',
      icon: <Code className="w-8 h-8" />,
      price: 'Starting at $2,500',
      features: ['React Applications', 'Vue.js Development', 'Angular Solutions', 'Progressive Web Apps'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions with Node.js, Python, and cloud platforms',
      icon: <Database className="w-8 h-8" />,
      price: 'Starting at $3,000',
      features: ['API Development', 'Database Design', 'Cloud Integration', 'Microservices'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Full-Stack Solutions',
      description: 'Complete web applications from frontend to backend with seamless integration',
      icon: <Globe className="w-8 h-8" />,
      price: 'Starting at $5,000',
      features: ['End-to-End Development', 'Database Integration', 'User Authentication', 'Deployment'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Custom online stores with payment processing and inventory management',
      icon: <Smartphone className="w-8 h-8" />,
      price: 'Starting at $4,500',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Admin Dashboard'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Nuxt.js', 'Tailwind CSS', 'Sass']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Django', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring']
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'Ionic', 'Progressive Web Apps', 'Responsive Design', 'Cross-platform']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap',
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes for user validation',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your application with rigorous testing and quality assurance',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Deploy to production with monitoring and ongoing support',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Website',
      price: '$2,500',
      period: '/project',
      description: 'Perfect for small businesses and portfolios',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form',
        '3 months support'
      ],
      popular: false
    },
    {
      name: 'Business Website',
      price: '$5,000',
      period: '/project',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        'CMS integration',
        'Analytics setup',
        '6 months support'
      ],
      popular: true
    },
    {
      name: 'E-commerce Platform',
      price: '$8,000',
      period: '/project',
      description: 'Complete online store solution',
      features: [
        'Unlimited pages',
        'Product catalog',
        'Payment integration',
        'Order management',
        'Admin dashboard',
        '12 months support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group | Custom Web Applications</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack solutions, and e-commerce platforms. Modern technologies and custom solutions." />
        <meta name="keywords" content="web development, custom websites, React development, Node.js, e-commerce, full-stack development, web applications" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Code className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Web Development Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Web Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Build modern, scalable web applications that drive business growth. 
            From simple websites to complex e-commerce platforms, we deliver exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="#services"
              variant="primary"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              View Services
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Quote
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive web development solutions for every business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
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
                  <span className="text-purple-400 font-semibold text-lg">{service.price}</span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern, proven technologies for robust and scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6 text-center group-hover:text-purple-400 transition-colors">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for web development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 -right-2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and create something amazing together. 
              Get a free consultation and project estimate.
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
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;