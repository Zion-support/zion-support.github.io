import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';
import ContactForm from './ContactForm';

const EnhancedHomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate statistics
    const animateStats = () => {
      const targets = { projects: 500, clients: 200, years: 10, satisfaction: 99 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStats({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };
    
    setTimeout(animateStats, 500);
  }, []);

  const services = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence systems that transform your business operations with cutting-edge machine learning and automation.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      pricing: "Starting at $5,000/month",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Tech Innovation",
      description: "Next-generation technology solutions for the modern enterprise, including cloud computing and digital transformation.",
      features: ["Cloud Migration", "DevOps Automation", "Microservices", "API Development"],
      pricing: "Custom pricing",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
      features: ["Data Visualization", "Real-time Analytics", "Business Intelligence", "Data Mining"],
      pricing: "Starting at $3,000/month",
      icon: "📊",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with enterprise-grade security solutions and comprehensive threat management.",
      features: ["Threat Detection", "Security Audits", "Compliance", "Incident Response"],
      pricing: "Starting at $2,500/month",
      icon: "🔒",
      gradient: "from-red-500 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "SJ",
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "Outstanding service and incredible results. The team delivered beyond our expectations.",
      rating: 5,
      avatar: "MC",
      company: "InnovateLab"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.",
      rating: 5,
      avatar: "ER",
      company: "DataFlow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4 py-20 relative">
          <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h1 className="text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto"></p>
                Your trusted partner in AI and technology solutions. We&apos;re revolutionizing the future with </p>
                cutting-edge innovations that drive business transformation and accelerate growth.</p>
              </p>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                to="/services"
              >
                Explore Our Technology
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                className="group bg-white text-gray-900 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
                to="/contact"
              >
                Get in Touch
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.projects}+
              <div className="text-gray-600 text-lg font-medium">Projects Completed
            <div className="group">
              <div className="text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.clients}+
              <div className="text-gray-600 text-lg font-medium">Happy Clients
            <div className="group">
              <div className="text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.years}+
              <div className="text-gray-600 text-lg font-medium">Years Experience
            <div className="group">
              <div className="text-5xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stats.satisfaction}%
              <div className="text-gray-600 text-lg font-medium">Client Satisfaction
      </section>
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Comprehensive technology solutions designed to accelerate your business growth and innovation.</p>
            </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                pricing={service.pricing}
                icon={service.icon}
                gradient={service.gradient}
              />
            ))}
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.</p>
            </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
                company={testimonial.company}
              />
            ))}
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100"></p>
                Let&apos;s discuss how we can help transform your business with cutting-edge technology solutions.</p>
              </p>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm />
      </section>
  );
};

export default EnhancedHomePage;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>