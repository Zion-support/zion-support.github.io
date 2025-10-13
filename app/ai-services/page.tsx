import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIServicesPage = () => {
  const services = [
    {
      id: "ai-analytics",
      name: "AI Analytics",
      description: "Advanced data analytics powered by artificial intelligence for deeper insights and better decision making",
      features: [
        "Predictive analytics",
        "Real-time data processing",
        "Automated reporting",
        "Custom dashboards"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics"
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      description: "Intelligent automation solutions to streamline your business processes and increase efficiency",
      features: [
        "Process automation",
        "Workflow optimization",
        "Smart scheduling",
        "Resource allocation"
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-automation"
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "Create high-quality content at scale using advanced AI language models and creative tools",
      features: [
        "Content creation",
        "Multi-language support",
        "Brand voice training",
        "SEO optimization"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation"
    },
    {
      id: "ai-customer-service",
      name: "AI Customer Service",
      description: "Revolutionary customer service solutions with AI-powered chatbots and intelligent support systems",
      features: [
        "24/7 chatbot support",
        "Sentiment analysis",
        "Automated ticket routing",
        "Customer insights"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/ai-customer-service"
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity",
      description: "Advanced security solutions powered by AI to protect your digital assets and detect threats",
      features: [
        "Threat detection",
        "Behavioral analysis",
        "Automated response",
        "Security monitoring"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/ai-cybersecurity"
    },
    {
      id: "ai-healthcare",
      name: "AI Healthcare",
      description: "Transform healthcare with AI-powered diagnostic tools and patient care solutions",
      features: [
        "Medical imaging analysis",
        "Diagnostic assistance",
        "Patient monitoring",
        "Treatment optimization"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/ai-healthcare"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI analytics platform has revolutionized our data processing capabilities. We're making decisions 3x faster with 95% accuracy.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have streamlined our operations significantly. We've reduced manual work by 70% while improving quality.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Creative Agency",
      role: "Creative Director",
      content: "AI content generation has been a game-changer for our agency. We're producing 5x more content with consistent quality.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our cutting-edge AI services. From analytics to automation, we provide comprehensive AI solutions tailored to your needs."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI cybersecurity"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business. Our comprehensive AI services 
              are designed to drive innovation, efficiency, and growth across all industries.
            </p>
          </div>

          {/* Services Grid */}
          <ResponsiveGrid className="gap-8">
            {services.map((service) => (
              <FuturisticCard key={service.id} className="group hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <FuturisticButton
                    href={service.link}
                    variant="primary"
                    size="sm"
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Learn More
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our AI services
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that drive real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Award className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;
