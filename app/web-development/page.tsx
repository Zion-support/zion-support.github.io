import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  Users,
  Award,
  Clock,
  DollarSign,
  Settings,
  Target
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      name: 'Custom Web Applications',
      description: 'Tailored web solutions built with modern technologies and best practices for optimal performance.',
      price: 'From $5,000',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Custom Development', 'Modern Frameworks', 'Responsive Design', 'Performance Optimization'],
      link: '/custom-web-applications',
      featured: true
    },
    {
      name: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
      price: 'From $8,000',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Payment Integration', 'Inventory Management', 'Analytics Dashboard', 'Mobile Responsive'],
      link: '/ecommerce-solutions',
      featured: true
    },
    {
      name: 'Mobile-First Websites',
      description: 'Responsive websites optimized for mobile devices with fast loading and intuitive navigation.',
      price: 'From $3,000',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Mobile Optimization', 'Fast Loading', 'Touch Navigation', 'Cross-Platform'],
      link: '/mobile-first-websites',
      featured: true
    },
    {
      name: 'Progressive Web Apps',
      description: 'Modern web applications that work like native apps with offline capabilities and push notifications.',
      price: 'From $6,000',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'Installable'],
      link: '/progressive-web-apps',
      featured: true
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration with third-party services and applications.',
      price: 'From $2,000',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['RESTful APIs', 'GraphQL', 'Documentation', 'Testing'],
      link: '/api-development',
      featured: true
    },
    {
      name: 'Website Maintenance',
      description: 'Ongoing support and maintenance to keep your website secure, updated, and performing optimally.',
      price: 'From $200/month',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      features: ['Security Updates', 'Performance Monitoring', 'Backup & Recovery', '24/7 Support'],
      link: '/website-maintenance',
      featured: true
    }
  ];

  const stats = [
    { number: '200+', label: 'Websites Built', icon: <Globe className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Award className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  const technologies = [
    {
      name: 'React & Next.js',
      description: 'Modern JavaScript frameworks for dynamic and interactive web applications',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Node.js & Express',
      description: 'Server-side JavaScript for scalable and efficient backend development',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'TypeScript',
      description: 'Type-safe JavaScript for more reliable and maintainable code',
      icon: <Target className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'MongoDB & PostgreSQL',
      description: 'Modern databases for storing and managing your application data',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Custom Web Solutions"
        description="Professional web development services including custom web applications, e-commerce solutions, and mobile-first websites built with modern technologies."
        keywords="web development, custom web applications, e-commerce, mobile-first, progressive web apps, API development"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Modern Web Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into powerful web applications with our expert development team. 
            From concept to deployment, we build modern, scalable, and user-friendly web solutions.
          </p>
          
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
        </div>
      </section>

      {/* Web Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From simple websites to complex web applications, we provide comprehensive web development solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build modern, scalable, and performant web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Web Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and create a custom web solution that drives your business forward. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Portfolio
              <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
