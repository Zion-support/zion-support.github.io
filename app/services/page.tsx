import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Target,
  Calendar,
  Cpu,
  Database,
  FileText,
  Heart,
  Receipt,
  TrendingUp,
  Network,
  Code,
  Lock,
  Upload,
  Download,
  Share2,
  Folder,
  Archive
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ServicesPage = () => {
  const serviceCategories = [
    {
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'AI Analytics',
          description: 'Transform data into actionable insights with AI-powered analytics',
          price: 'From $299/month',
          link: '/ai-analytics',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'AI Content Generation',
          description: 'Create engaging content at scale with AI-powered content tools',
          price: 'From $199/month',
          link: '/ai-content-generation',
          icon: <FileText className="w-6 h-6" />
        },
        {
          name: 'AI Customer Support',
          description: 'Enhance customer experience with intelligent support solutions',
          price: 'From $149/month',
          link: '/ai-customer-support',
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'AI Cybersecurity',
          description: 'Protect your business with AI-powered security solutions',
          price: 'From $499/month',
          link: '/ai-cybersecurity',
          icon: <Shield className="w-6 h-6" />
        }
      ]
    },
    {
      name: 'IT Services',
      description: 'Comprehensive technology solutions for modern businesses',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamlessly migrate your infrastructure to the cloud',
          price: 'From $999/project',
          link: '/cloud-migration',
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: 'DevOps Services',
          description: 'Streamline development and deployment with DevOps practices',
          price: 'From $299/month',
          link: '/devops-services',
          icon: <Code className="w-6 h-6" />
        },
        {
          name: 'IT Consulting',
          description: 'Strategic technology consulting for digital transformation',
          price: 'From $150/hour',
          link: '/it-consulting',
          icon: <Users className="w-6 h-6" />
        },
        {
          name: 'Network Security',
          description: 'Comprehensive network security solutions and monitoring',
          price: 'From $399/month',
          link: '/network-security',
          icon: <Shield className="w-6 h-6" />
        }
      ]
    },
    {
      name: 'Micro SAAS',
      description: 'Ready-to-use software solutions for immediate deployment',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'Zion Analytics Pro',
          description: 'AI-powered business intelligence platform with real-time dashboards',
          price: 'From $299/month',
          link: '/zion-analytics-pro',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'Zion Security Shield',
          description: 'Advanced cybersecurity protection with AI-powered threat detection',
          price: 'From $499/month',
          link: '/zion-security-shield',
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Zion Cloud Vault',
          description: 'Secure cloud storage solution with end-to-end encryption',
          price: 'From $99/month',
          link: '/zion-cloud-vault',
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: 'Zion AI CRM Pro',
          description: 'AI-powered customer relationship management with intelligent insights',
          price: 'From $199/month',
          link: '/zion-ai-crm-pro',
          icon: <Users className="w-6 h-6" />
        }
      ]
    },
    {
      name: '5G Solutions',
      description: 'Next-generation connectivity and infrastructure services',
      icon: <Network className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: '5G Network Infrastructure',
          description: 'Deploy and manage 5G network infrastructure for your business',
          price: 'From $1999/month',
          link: '/5g-network-infrastructure',
          icon: <Network className="w-6 h-6" />
        },
        {
          name: '5G Edge Computing',
          description: 'Leverage edge computing capabilities for faster processing',
          price: 'From $799/month',
          link: '/5g-edge-computing',
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: '5G IoT Solutions',
          description: 'Connect and manage IoT devices with 5G technology',
          price: 'From $599/month',
          link: '/5g-iot-solutions',
          icon: <Smartphone className="w-6 h-6" />
        },
        {
          name: '5G Smart City Solutions',
          description: 'Transform cities with smart infrastructure and 5G connectivity',
          price: 'From $2999/month',
          link: '/5g-smart-city-solutions',
          icon: <Globe className="w-6 h-6" />
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '10,000+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'CTO',
      content: 'The micro SAAS solutions are incredibly powerful and easy to implement. We\'ve saved thousands of hours with their automation tools.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Marketing Agency',
      role: 'Operations Director',
      content: 'Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Our Services - Zion Tech Group | AI, IT, Micro SAAS & 5G Solutions"
        description="Discover our comprehensive range of technology services including AI solutions, IT services, micro SAAS, and 5G solutions. Transform your business with cutting-edge technology."
        keywords="AI services, IT services, micro SAAS, 5G solutions, cloud migration, cybersecurity, business intelligence, digital transformation"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Comprehensive Technology Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text text-4xl md:text-6xl lg:text-7xl font-bold">
              Our Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            From AI-powered solutions to 5G infrastructure, we provide comprehensive technology services 
            designed to accelerate your business growth and digital transformation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card quantum-card rounded-xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-6`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.link}
                      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                      <p className="text-cyan-400 text-sm font-medium">{service.price}</p>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link
                    to={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    View All {category.name}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our services are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group glass-card quantum-card rounded-xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;