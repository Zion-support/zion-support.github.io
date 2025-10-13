import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cloud, BarChart3, Users, Award, ArrowRight, CheckCircle, Star, Globe, Smartphone, Monitor } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage: React.FC = () => {
  const services = [
    {
      id: 'project-management-tool',
      name: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task allocation, deadline prediction, and resource optimization.',
      price: '$299/month',
      features: ['AI Task Assignment', 'Deadline Prediction', 'Resource Optimization', 'Team Collaboration'],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/zion-ai-project-manager-pro'
    },
    {
      id: 'analytics-dashboard',
      name: 'Zion Analytics Pro',
      description: 'Comprehensive business intelligence platform with real-time dashboards and predictive analytics.',
      price: '$199/month',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/zion-analytics-pro'
    },
    {
      id: 'security-suite',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      price: '$499/month',
      features: ['AI Threat Detection', 'Automated Response', '24/7 Monitoring', 'Compliance Reporting'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      link: '/zion-security-shield'
    },
    {
      id: 'cloud-storage',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with advanced encryption and seamless collaboration features.',
      price: '$99/month',
      features: ['Advanced Encryption', 'File Sharing', 'Version Control', 'Team Collaboration'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      link: '/zion-cloud-vault'
    },
    {
      id: 'crm-system',
      name: 'Zion AI CRM Pro',
      description: 'Intelligent customer relationship management with AI-powered insights and automation.',
      price: '$399/month',
      features: ['AI Customer Insights', 'Automated Follow-ups', 'Sales Forecasting', 'Lead Scoring'],
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      link: '/zion-ai-crm-pro'
    },
    {
      id: 'content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      price: '$149/month',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'Brand Voice Training', 'Performance Analytics'],
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      link: '/zion-content-studio'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Project Manager Pro has revolutionized how we manage projects. We're completing tasks 40% faster with better quality.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "CTO",
      content: "The analytics insights from Zion Analytics Pro have helped us make data-driven decisions that increased our revenue by 25%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Project Manager",
      content: "Zion Security Shield gives us peace of mind. The AI threat detection has prevented several potential security breaches.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our suite of micro SAAS solutions designed to streamline your business operations. From analytics to security, we have the tools you need to succeed."
        keywords="micro SAAS, business tools, analytics, security, cloud storage, CRM, project management, AI-powered solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful, AI-driven business tools designed to streamline your operations and boost productivity. 
              Choose from our suite of specialized micro SAAS solutions.
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
                  
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
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
              See what our clients say about our micro SAAS solutions
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your journey with our micro SAAS solutions today. Choose the tools that fit your needs and scale as you grow.
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
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Award className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default MicroSaasPage;
