import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Shield, Cloud, Users, Mail, Video, FileText, ArrowRight, Star, CheckCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      title: 'Zion AI Email Assistant',
      description: 'AI-powered email management with smart classification, auto-responses, and security monitoring',
      icon: <Mail className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      price: 'From $29/month',
      link: '/ai-email-assistant',
      featured: true
    },
    {
      title: 'Zion AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered generation, payment tracking, and multi-currency support',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      price: 'From $19/month',
      link: '/ai-invoice-generator',
      featured: true
    },
    {
      title: 'Zion AI Video Generator',
      description: 'Create professional videos from text, images, or audio using advanced AI technology',
      icon: <Video className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      price: 'From $39/month',
      link: '/ai-video-generator',
      featured: true
    },
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced analytics dashboard with real-time insights and customizable reports',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      price: 'From $299/month',
      link: '/zion-analytics-pro',
      featured: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity protection with AI-powered threat detection',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      price: 'From $499/month',
      link: '/zion-security-shield',
      featured: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      price: 'From $99/month',
      link: '/zion-cloud-vault',
      featured: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's micro SAAS solutions have transformed our operations. We've saved thousands of hours with their automation tools.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered tools are incredibly powerful and easy to implement. Our productivity has increased by 70% in just 3 months.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Cloud className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Tools"
        description="Discover our comprehensive collection of micro SAAS solutions including AI tools, analytics, security, and productivity applications for modern businesses."
        keywords="micro SAAS, software solutions, AI tools, business automation, productivity tools, analytics dashboard, cybersecurity, cloud storage"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Software Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready-to-use software solutions that can transform your business operations immediately. 
            From AI-powered tools to analytics dashboards, we have everything you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="#solutions"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Explore Solutions
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

      {/* Featured Solutions */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most popular and innovative micro SAAS solutions designed to boost your productivity and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  service.featured 
                    ? 'border-cyan-500/50 shadow-cyan-500/10 hover:shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30 hover:shadow-cyan-500/10'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our micro SAAS solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Your Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;