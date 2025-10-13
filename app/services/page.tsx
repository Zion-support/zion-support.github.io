import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Network, 
  Smartphone, 
  Monitor, 
  Server,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Zap,
  Lock,
  Settings,
  BarChart3,
  Users,
  Clock,
  Award,
  Brain,
  Target,
  TrendingUp
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ServicesPage = () => {
  const itServices = [
    {
      name: "Cloud Infrastructure & Migration",
      description: "Seamless cloud migration and infrastructure optimization for maximum performance and scalability",
      price: "From $2,999/month",
      features: ["AWS/Azure/GCP Migration", "Infrastructure as Code", "Auto-scaling", "Disaster Recovery"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/cloud-migration",
      popular: true
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your business from evolving cyber threats",
      price: "From $1,999/month",
      features: ["Security Audits", "Penetration Testing", "Incident Response", "Compliance Management"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/cybersecurity-solutions",
      popular: true
    },
    {
      name: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies and best practices",
      price: "From $3,999/month",
      features: ["Web Applications", "Mobile Apps", "API Development", "Legacy Modernization"],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/custom-software",
      popular: false
    },
    {
      name: "DevOps & CI/CD",
      description: "Streamline development workflows with automated deployment and monitoring solutions",
      price: "From $2,499/month",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Infrastructure Automation"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/devops-services",
      popular: false
    },
    {
      name: "Database Management",
      description: "Optimize database performance, security, and scalability for your applications",
      price: "From $1,499/month",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Data Migration"],
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/database-management",
      popular: false
    },
    {
      name: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure for your business",
      price: "From $1,799/month",
      features: ["Network Design", "Security Implementation", "Performance Optimization", "24/7 Monitoring"],
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      link: "/network-infrastructure",
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: "Infrastructure Services",
      description: "Cloud migration, network design, and infrastructure optimization",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      services: ["Cloud Migration", "Network Infrastructure", "Server Management", "Disaster Recovery"]
    },
    {
      title: "Security Solutions",
      description: "Comprehensive cybersecurity and data protection services",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      services: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
    },
    {
      title: "Development Services",
      description: "Custom software development and application modernization",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      services: ["Web Development", "Mobile Apps", "API Development", "Legacy Modernization"]
    },
    {
      title: "Data & Analytics",
      description: "Database management, data analytics, and business intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      services: ["Database Design", "Data Analytics", "Business Intelligence", "Data Migration"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current infrastructure, identify pain points, and understand your business requirements",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive strategy and roadmap tailored to your specific needs and goals",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the solution with minimal disruption to your business operations",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and continuous optimization for maximum performance",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Tech Startup",
      role: "CTO",
      content: "Zion Tech Group transformed our entire infrastructure. The cloud migration was seamless and our performance improved by 300%.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      company: "Financial Services",
      role: "IT Director",
      content: "Their cybersecurity solutions are top-notch. We feel confident knowing our data is protected by industry-leading security measures.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Platform",
      role: "VP of Engineering",
      content: "The custom software development exceeded our expectations. The team delivered on time and within budget.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Expert Engineers", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Transform your business with our comprehensive IT services. Cloud migration, cybersecurity, custom development, and infrastructure solutions for modern enterprises."
        keywords="it services, cloud migration, cybersecurity, custom software development, devops, database management, network infrastructure, technology consulting"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Shield className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Comprehensive IT Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              IT Services & Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, 
            we provide end-to-end technology solutions for modern enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Our Work
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive IT services across all major technology domains to meet your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {category.description}
                </p>
                <div className="space-y-1">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to solve specific business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-blue-400 font-medium">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery and maximum value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{step.step}</div>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our IT services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our expert team help you build a robust, scalable, and secure technology foundation for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Case Studies
              <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;