import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, Smartphone, Monitor, ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      id: "responsive-web-design",
      name: "Responsive Web Design",
      description: "Mobile-first, responsive websites that look perfect on all devices",
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Fast loading times",
        "SEO optimized",
        "Modern UI/UX design"
      ],
      icon: <Smartphone className="w-8 h-8" />,
      href: "/contact"
    },
    {
      id: "e-commerce-solutions",
      name: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management",
      features: [
        "Payment gateway integration",
        "Inventory management",
        "Order tracking system",
        "Customer accounts",
        "Analytics dashboard"
      ],
      icon: <Globe className="w-8 h-8" />,
      href: "/contact"
    },
    {
      id: "web-applications",
      name: "Web Applications",
      description: "Custom web applications built with modern frameworks and technologies",
      features: [
        "React/Vue.js development",
        "Node.js backend",
        "Database integration",
        "API development",
        "Cloud deployment"
      ],
      icon: <Code className="w-8 h-8" />,
      href: "/contact"
    },
    {
      id: "cms-development",
      name: "CMS Development",
      description: "Content management systems for easy website maintenance and updates",
      features: [
        "WordPress customization",
        "Headless CMS solutions",
        "Content editing interface",
        "Multi-user management",
        "Plugin development"
      ],
      icon: <Monitor className="w-8 h-8" />,
      href: "/contact"
    }
  ];

  const technologies = [
    { name: "React", description: "Modern JavaScript library for building user interfaces" },
    { name: "Vue.js", description: "Progressive JavaScript framework for building web applications" },
    { name: "Node.js", description: "JavaScript runtime for server-side development" },
    { name: "TypeScript", description: "Typed superset of JavaScript for better development experience" },
    { name: "Next.js", description: "React framework for production-ready applications" },
    { name: "Express.js", description: "Fast, unopinionated web framework for Node.js" },
    { name: "MongoDB", description: "NoSQL database for modern applications" },
    { name: "PostgreSQL", description: "Powerful, open source object-relational database" }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: <Code className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Average Load Time", value: "<2s", icon: <Zap className="w-6 h-6" /> },
    { label: "Mobile Responsive", value: "100%", icon: <Smartphone className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      content: "Zion Tech Group delivered an exceptional e-commerce platform that increased our online sales by 250%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Digital Agency",
      role: "Creative Director",
      content: "Their web application development expertise helped us create a custom solution that perfectly fits our needs.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Store",
      role: "Owner",
      content: "The responsive design and fast loading times have significantly improved our user experience and conversions.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Custom Websites & Applications"
        description="Professional web development services including responsive design, e-commerce solutions, web applications, and CMS development. Transform your digital presence with our expert team."
        keywords="web development, responsive design, e-commerce, web applications, CMS, React, Vue.js, Node.js, custom websites"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Web Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your digital presence with custom web solutions that drive results. 
              From responsive websites to complex web applications, we build it all.
            </p>
            <FuturisticButton
              href="#services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center p-6">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
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

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <FuturisticCard key={service.id} className="p-6 hover:scale-105 transition-transform">
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
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
                <FuturisticButton
                  href={service.href}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
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
              We work with the latest technologies and frameworks to deliver cutting-edge solutions
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <FuturisticCard key={index} className="p-6 text-center hover:scale-105 transition-transform">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {tech.description}
                </p>
              </FuturisticCard>
            ))}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
              Ready to Build Your Next Web Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your web development needs and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                View Our Portfolio
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;