import React from 'react';
<<<<<<< HEAD
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { Wifi, Shield, Globe, CheckCircle, Star, ArrowRight, Zap, Brain, Phone, Mail, MapPin, Award, TrendingUp, MessageSquare, Cpu, Database, Smartphone, Settings, FileText, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function NetworkingPage() {
  const features = [
    {
      icon: Wifi,
      title: 'Enterprise Network Design',
      description: 'Custom network architecture designed for scalability, security, and performance optimization.'
=======
import { Helmet } from 'react-helmet-async';
import { 
  Network, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  Wifi, 
  Router, 
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award,
  BarChart,
  Settings,
  Cpu,
  Database,
  Cloud
} from 'lucide-react';

const NetworkingPage: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: 'Enterprise Network Design',
      description: 'Custom network architectures designed for scalability, security, and performance.',
      benefits: ['High availability', 'Load balancing', 'Redundancy planning']
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
    },
    {
      icon: Shield,
      title: 'Network Security',
<<<<<<< HEAD
      description: 'Comprehensive security solutions including firewalls, intrusion detection, and threat monitoring.'
    },
    {
      icon: Globe,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud platforms and hybrid network solutions for modern businesses.'
    },
    {
      icon: Cpu,
      title: 'Performance Optimization',
      description: 'Network monitoring and optimization to ensure maximum uptime and optimal performance.'
    },
    {
      icon: Database,
      title: 'Data Center Solutions',
      description: 'Complete data center networking solutions with redundancy and disaster recovery.'
    },
    {
      icon: Settings,
      title: '24/7 Monitoring',
      description: 'Round-the-clock network monitoring and support to prevent downtime and ensure reliability.'
=======
      description: 'Comprehensive security solutions to protect your network infrastructure.',
      benefits: ['Firewall management', 'Intrusion detection', 'VPN solutions']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize network performance for maximum efficiency and speed.',
      benefits: ['Bandwidth optimization', 'Traffic analysis', 'QoS implementation']
    },
    {
      icon: Globe,
      title: 'Wide Area Networks',
      description: 'Connect multiple locations with secure and reliable WAN solutions.',
      benefits: ['Site-to-site connectivity', 'Cloud integration', 'Global reach']
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
    }
  ];

  const services = [
    {
      title: 'Network Assessment',
<<<<<<< HEAD
      description: 'Comprehensive analysis of your current network infrastructure and performance.',
      price: 'Starting at $2,500'
    },
    {
      title: 'Network Design & Implementation',
      description: 'Custom network design and complete implementation for your business needs.',
      price: 'Starting at $15,000'
    },
    {
      title: 'Network Security Audit',
      description: 'Thorough security assessment and recommendations for network protection.',
      price: 'Starting at $5,000'
    },
    {
      title: 'Managed Network Services',
      description: 'Ongoing network management, monitoring, and support services.',
      price: 'Starting at $1,500/month'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'IT Director, Manufacturing Corp',
      content: 'Zion Tech Group transformed our network infrastructure. We now have 99.9% uptime and significantly improved performance.',
      rating: 5,
      avatar: '/images/testimonials/robert-johnson.jpg'
    },
    {
      name: 'Jennifer Lee',
      role: 'CTO, Financial Services Inc',
      content: 'The network security implementation was flawless. Our data is now protected with enterprise-grade security.',
      rating: 5,
      avatar: '/images/testimonials/jennifer-lee.jpg'
    },
    {
      name: 'Mark Thompson',
      role: 'Operations Manager, Retail Chain',
      content: 'The managed network services have been excellent. We can focus on our business while they handle our IT infrastructure.',
      rating: 5,
      avatar: '/images/testimonials/mark-thompson.jpg'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Enterprise Networking Solutions - Network Design & Security | Zion Tech Group"
        description="Professional networking services including network design, security, cloud integration, and managed services. Ensure 99.9% uptime with our enterprise-grade solutions."
        keywords="enterprise networking, network design, network security, managed network services, cloud networking, network infrastructure"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Wifi className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Enterprise Networking</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Enterprise Networking Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional networking services including network design, security, cloud integration, 
              and managed services. Ensure 99.9% uptime with our enterprise-grade solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Wifi className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">500+ Networks Deployed</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99.9% Uptime Guarantee</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Networking Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need for a robust, secure, and scalable network infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Networking Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional networking solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust us with their network infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get a free network assessment and discover how we can improve your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Wifi className="w-5 h-5 mr-2" />
              Get Free Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
=======
      description: 'Comprehensive analysis of your current network infrastructure',
      price: 'Starting at $2,500',
      features: ['Infrastructure audit', 'Performance analysis', 'Security review', 'Recommendations report']
    },
    {
      title: 'Network Design & Implementation',
      description: 'Complete network design and deployment services',
      price: 'Starting at $15,000',
      features: ['Custom architecture', 'Hardware procurement', 'Installation', 'Testing & validation']
    },
    {
      title: 'Network Management',
      description: 'Ongoing monitoring and management of your network',
      price: 'Starting at $1,200/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Security updates']
    },
    {
      title: 'Network Security Services',
      description: 'Advanced security solutions for network protection',
      price: 'Starting at $3,500',
      features: ['Firewall configuration', 'Intrusion prevention', 'Security policies', 'Compliance support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Network Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional network solutions including design, implementation, security, and management services for enterprise environments." />
        <meta name="keywords" content="network solutions, enterprise networking, network security, WAN, LAN, network management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Network className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  {' '}Network Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Design, implement, and manage enterprise-grade network infrastructure 
                with our comprehensive networking services and solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Get Network Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Network Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From design to deployment, we provide end-to-end network solutions 
                tailored to your business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Network Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of professional network services designed 
                to meet your specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full cyber-button py-3">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Networks Deployed</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Network Infrastructure?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Get a free network assessment and discover how we can optimize 
              your network for better performance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NetworkingPage;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-dd48
