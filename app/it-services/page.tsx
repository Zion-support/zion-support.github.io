import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Users, Clock, DollarSign, Wifi, Cpu, HardDrive, Monitor, Smartphone as Phone, Zap, Lock, BarChart3, Target, Mail, Camera, FileText, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from '../components/FuturisticBackground';
import ParticleBackground from '../components/ParticleBackground';
import ServiceCard from '../components/ServiceCard';
import AnimatedCard from '../components/AnimatedCard';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud transformation with AWS, Azure, and GCP expertise, including zero-downtime migration and cost optimization.',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Cloud architecture design', 'Disaster recovery', 'Auto-scaling setup', 'Security hardening', '24/7 monitoring'],
      pricing: '$2,999/month',
      originalPrice: '$4,999/month',
      link: '/cloud-migration',
      popular: true,
      category: 'Cloud Services'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management for enterprise protection.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security training', 'Penetration testing', 'Compliance auditing', 'Incident response', 'Dark web monitoring', 'Security awareness training'],
      pricing: '$1,999/month',
      originalPrice: '$3,499/month',
      link: '/cybersecurity',
      popular: true,
      category: 'Security'
    },
    {
      icon: <Server className="w-8 h-8 text-green-400" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure management with proactive monitoring, maintenance, and optimization for maximum uptime and performance.',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Hardware management', 'Software updates', 'Backup solutions', 'Disaster recovery', 'Capacity planning'],
      pricing: '$1,499/month',
      originalPrice: '$2,499/month',
      link: '/infrastructure',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable business insights with advanced analytics, visualization, and predictive modeling capabilities.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'ETL processes', 'Data warehousing', 'Machine learning integration', 'Real-time reporting', 'API development'],
      pricing: '$2,499/month',
      originalPrice: '$3,999/month',
      link: '/data-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: 'Custom Software Development',
      description: 'Full-stack development services including web applications, mobile apps, and API integration tailored to your business requirements.',
      features: ['Full-stack development', 'API integration', 'Mobile apps', 'Web applications', 'Database design', 'UI/UX design', 'Testing & QA', 'Deployment & maintenance'],
      pricing: '$4,999/month',
      originalPrice: '$7,999/month',
      link: '/custom-development',
      popular: true,
      category: 'Development'
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-400" />,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management including security, performance monitoring, and optimization.',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Wireless solutions', 'VPN setup', 'Load balancing', 'Traffic analysis', 'Network optimization'],
      pricing: '$1,999/month',
      originalPrice: '$3,299/month',
      link: '/network-solutions',
      popular: false,
      category: 'Networking'
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-400" />,
      title: '5G Implementation',
      description: 'Cutting-edge 5G network solutions with ultra-fast connectivity, IoT integration, and edge computing capabilities.',
      features: ['5G network design', 'IoT integration', 'Edge computing', 'Performance optimization', 'Security implementation', 'Device management', 'Real-time monitoring', 'Scalability planning'],
      pricing: '$3,999/month',
      originalPrice: '$6,499/month',
      link: '/5g-implementation',
      popular: true,
      category: '5G Solutions'
    },
    {
      icon: <HardDrive className="w-8 h-8 text-yellow-400" />,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection with automated backups, disaster recovery, and business continuity planning.',
      features: ['Automated backups', 'Disaster recovery', 'Business continuity', 'Data encryption', 'Offsite storage', 'Recovery testing', 'Compliance management', 'RTO/RPO optimization'],
      pricing: '$999/month',
      originalPrice: '$1,699/month',
      link: '/data-backup',
      popular: false,
      category: 'Data Protection'
    },
    {
      icon: <Monitor className="w-8 h-8 text-pink-400" />,
      title: 'IT Support & Helpdesk',
      description: '24/7 IT support services with remote assistance, ticketing system, and proactive issue resolution.',
      features: ['24/7 support', 'Remote assistance', 'Ticketing system', 'Proactive monitoring', 'User training', 'Software installation', 'Hardware support', 'Performance optimization'],
      pricing: '$1,299/month',
      originalPrice: '$2,199/month',
      link: '/it-support',
      popular: true,
      category: 'Support'
    },
    {
      icon: <Phone className="w-8 h-8 text-emerald-400" />,
      title: 'Mobile Device Management',
      description: 'Complete mobile device management including security, app deployment, and device monitoring for enterprise mobility.',
      features: ['Device enrollment', 'Security policies', 'App deployment', 'Remote wipe', 'Compliance monitoring', 'Usage analytics', 'Cost management', 'Integration support'],
      pricing: '$799/month',
      originalPrice: '$1,299/month',
      link: '/mobile-management',
      popular: false,
      category: 'Mobile Solutions'
    },
    {
      icon: <Zap className="w-8 h-8 text-violet-400" />,
      title: 'IT Automation',
      description: 'Intelligent IT automation with workflow optimization, process automation, and AI-powered operations management.',
      features: ['Workflow automation', 'Process optimization', 'AI-powered operations', 'Script automation', 'Task scheduling', 'Error handling', 'Performance monitoring', 'Cost reduction'],
      pricing: '$2,299/month',
      originalPrice: '$3,799/month',
      link: '/it-automation',
      popular: true,
      category: 'Automation'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-teal-400" />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting with technology roadmaps, digital transformation planning, and technology assessment services.',
      features: ['Technology roadmaps', 'Digital transformation', 'Technology assessment', 'Vendor evaluation', 'Cost optimization', 'Risk analysis', 'Compliance planning', 'Implementation guidance'],
      pricing: '$1,799/month',
      originalPrice: '$2,999/month',
      link: '/it-consulting',
      popular: false,
      category: 'Consulting'
    }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Optimize your IT spending with our cost-effective solutions and strategies',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to changing needs',
      icon: <Settings className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Enterprise Corp',
      content: 'Zion Tech transformed our IT infrastructure. The cloud migration was seamless and our costs reduced by 40%.',
      rating: 5
    },
    {
      name: 'Lisa Johnson',
      company: 'DataFlow Inc',
      content: 'Outstanding cybersecurity services. Our security posture improved dramatically after implementing their solutions.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'TechStart',
      content: 'The custom development team delivered exactly what we needed. Highly professional and efficient.',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your current IT infrastructure and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Develop a comprehensive strategy tailored to your business objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with minimal disruption to your business operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Provide ongoing support and optimization to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, custom development, network solutions" />
      </Helmet>
      
      {/* Futuristic Backgrounds */}
      <FuturisticBackground />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Information Technology Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Professional IT Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, 
            and drive digital transformation across your organization.
            <span className="text-cyan-400 font-semibold">12 comprehensive IT services</span> to power your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link
              to="/about"
              className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions for all your IT needs with enterprise-grade features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                pricing={service.pricing}
                originalPrice={service.originalPrice}
                link={service.link}
                popular={service.popular}
                category={service.category}
                delay={index * 0.1}
                neon={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IT Services</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Proven expertise and commitment to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 hover:bg-white/5">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-cyan-500/25">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              How we deliver exceptional IT solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 hover:bg-white/5">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 text-white font-bold text-2xl shadow-lg shadow-cyan-500/25">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real results from real businesses that trust our IT expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Infrastructure</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let our experts help you modernize your technology stack and drive business growth. 
            Start your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center text-lg">
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link 
              to="/ai-services" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-lg"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;