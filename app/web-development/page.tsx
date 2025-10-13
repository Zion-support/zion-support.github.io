import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Code, Globe, Smartphone, Monitor, Database, Shield, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const WebDevelopmentPage = () => {
  const services = [
    {
      id: 'responsive-web-design',
      title: 'Responsive Web Design',
      description: 'Modern, mobile-first web design that looks perfect on all devices and screen sizes.',
      icon: Monitor,
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Fast Loading Times', 'SEO Optimized'],
      price: 'Starting at $2,500',
      category: 'Design',
      rating: 4.9,
      reviews: 1247,
      featured: true
    },
    {
      id: 'e-commerce-development',
      title: 'E-Commerce Development',
      description: 'Complete e-commerce solutions with secure payment processing and inventory management.',
      icon: Globe,
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      price: 'Starting at $5,000',
      category: 'E-Commerce',
      rating: 4.8,
      reviews: 892,
      featured: true
    },
    {
      id: 'web-applications',
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies for optimal performance.',
      icon: Code,
      features: ['Custom Development', 'API Integration', 'Real-time Features', 'Scalable Architecture'],
      price: 'Starting at $3,500',
      category: 'Applications',
      rating: 4.9,
      reviews: 1156,
      featured: true
    },
    {
      id: 'mobile-web-apps',
      title: 'Mobile Web Apps',
      description: 'Progressive Web Apps that work seamlessly across all mobile devices.',
      icon: Smartphone,
      features: ['PWA Technology', 'Offline Functionality', 'Push Notifications', 'App-like Experience'],
      price: 'Starting at $2,800',
      category: 'Mobile',
      rating: 4.7,
      reviews: 743,
      featured: false
    },
    {
      id: 'cms-development',
      title: 'CMS Development',
      description: 'Custom content management systems for easy website maintenance and updates.',
      icon: Database,
      features: ['Custom CMS', 'User Management', 'Content Editor', 'Multi-language Support'],
      price: 'Starting at $3,200',
      category: 'CMS',
      rating: 4.8,
      reviews: 567,
      featured: false
    },
    {
      id: 'web-security',
      title: 'Web Security',
      description: 'Comprehensive security solutions to protect your website from threats.',
      icon: Shield,
      features: ['SSL Certificates', 'Security Audits', 'Firewall Protection', 'Regular Updates'],
      price: 'Starting at $1,500',
      category: 'Security',
      rating: 4.9,
      reviews: 1456,
      featured: false
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Modern UI library for dynamic interfaces' },
    { name: 'Next.js', icon: '▲', description: 'Full-stack React framework for production' },
    { name: 'TypeScript', icon: '🔷', description: 'Type-safe JavaScript for better development' },
    { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for flexible data storage' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Reliable relational database system' }
  ];

  const stats = [
    { label: "Websites Built", value: "500+", icon: Globe },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Average Load Time", value: "<2s", icon: Zap },
    { label: "Uptime", value: "99.9%", icon: Shield }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Tech Group delivered an exceptional e-commerce platform that increased our online sales by 300%. The team's expertise and attention to detail were outstanding.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Our new web application has transformed our workflow. The user interface is intuitive, and the performance is outstanding. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Project Manager",
      content: "The responsive design work was flawless. Our website looks perfect on all devices, and the loading speed improvements were remarkable.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Custom Websites & Applications"
        description="Professional web development services including responsive design, e-commerce, web applications, and mobile web apps. Transform your online presence with our expert team."
        keywords="web development, responsive design, e-commerce development, web applications, mobile web apps, custom websites, web design"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your digital presence with our expert web development services. 
              From responsive websites to complex web applications, we deliver solutions that drive results.
            </p>
            <FuturisticButton
              href="#services"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <FuturisticCard key={index} className="text-center p-6">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build modern, scalable web solutions
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {tech.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <FuturisticCard key={service.id} className="p-6 hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {service.featured && (
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>
                  <Link
                    to={`/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </FuturisticCard>
              );
            })}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say about our web development services.
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert web development team bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                View Our Work
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
