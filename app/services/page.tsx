'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Code, 
  Shield, 
  BarChart, 
  Users, 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Award,
  Sparkles,
  Globe,
  Database,
  Cpu,
  Lock,
  FileText,
  Mail as EmailIcon,
  Calendar,
  CreditCard,
  Smartphone,
  Monitor,
  Network,
  Settings
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('ai');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceTabs = [
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'it', name: 'IT Services', icon: Cloud, color: 'from-blue-500 to-cyan-600' },
    { id: 'saas', name: 'Micro SAAS', icon: Code, color: 'from-green-500 to-emerald-600' }
  ];

  const aiServices = [
    {
      name: 'AI Business Automation',
      description: 'Transform your business processes with intelligent automation that learns and adapts.',
      features: ['Process automation', 'Workflow optimization', 'Predictive analytics', 'Custom AI models'],
      pricing: 'From $200/hour consultation',
      icon: Zap,
      popular: true
    },
    {
      name: 'AI-Powered Analytics',
      description: 'Unlock hidden insights from your data with advanced machine learning algorithms.',
      features: ['Predictive modeling', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      pricing: 'From $8,000/project',
      icon: BarChart
    },
    {
      name: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent chatbots and automated support.',
      features: ['Intelligent chatbots', 'Sentiment analysis', 'Multi-language support', '24/7 availability'],
      pricing: 'From $500/month',
      icon: Users
    },
    {
      name: 'AI Content Generation',
      description: 'Create high-quality, engaging content at scale with AI-powered generation.',
      features: ['Text generation', 'Image creation', 'Video production', 'Brand consistency'],
      pricing: 'From $200/month',
      icon: FileText
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure',
      description: 'Comprehensive cloud migration, management, and optimization services.',
      features: ['AWS, Azure, GCP expertise', 'Cloud migration strategy', 'Cost optimization', '24/7 monitoring'],
      pricing: 'From $150/hour consultation',
      icon: Cloud,
      popular: true
    },
    {
      name: 'Cybersecurity Services',
      description: 'Advanced security solutions to protect your business from cyber threats.',
      features: ['Security assessment', 'Penetration testing', 'Incident response', 'Compliance support'],
      pricing: 'From $3,000/project',
      icon: Shield
    },
    {
      name: 'DevOps & Automation',
      description: 'Streamline development workflows with CI/CD pipelines and automation.',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Container orchestration', 'Performance optimization'],
      pricing: 'From $4,000/project',
      icon: Settings
    },
    {
      name: 'Database Management',
      description: 'Expert database design, optimization, and management services.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening'],
      pricing: 'From $2,000/project',
      icon: Database
    }
  ];

  const saasServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality blog posts, articles, and marketing content in seconds.',
      features: ['50+ content templates', 'SEO optimization', 'Multi-language support', 'Brand voice customization'],
      pricing: 'From $29/month',
      icon: FileText,
      popular: true
    },
    {
      name: 'AI Social Media Scheduler',
      description: 'Automate your social media presence with AI-powered content scheduling.',
      features: ['Multi-platform posting', 'AI-optimized timing', 'Content calendar', 'Analytics dashboard'],
      pricing: 'From $19/month',
      icon: Globe
    },
    {
      name: 'AI Invoice Generator',
      description: 'Create professional invoices automatically with AI-powered templates.',
      features: ['Smart templates', 'Auto-calculation', 'Payment tracking', 'Tax compliance'],
      pricing: 'From $15/month',
      icon: CreditCard
    },
    {
      name: 'AI Expense Tracker',
      description: 'Track and categorize expenses automatically with AI-powered receipt scanning.',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Tax preparation'],
      pricing: 'From $12/month',
      icon: BarChart
    }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'saas': return saasServices;
      default: return aiServices;
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Zion Tech Group increased our productivity by 300% with their AI automation solutions. Exceptional service and results.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Digital Marketing Co.',
      content: 'Their cloud infrastructure migration saved us 40% in costs while improving performance. Highly recommended.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Freelance Designer',
      content: 'The AI content generator has revolutionized my workflow. Professional content in seconds, not hours.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and Micro SAAS services. From automation to cloud infrastructure, we provide end-to-end technology solutions." />
        <meta name="keywords" content="AI services, IT services, micro saas, cloud computing, cybersecurity, automation, digital transformation" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive suite of AI, IT, and Micro SAAS services. Achieve 300% ROI with cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text-enhanced">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              From AI automation to cloud infrastructure, we provide end-to-end technology solutions 
              that drive innovation, enhance security, and optimize performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Mail className="inline-block mr-2" size={20} />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Service Tabs */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <div 
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-lg font-semibold text-cyan-400 mb-2">Pricing:</div>
                    <div className="text-white font-medium">{service.pricing}</div>
                  </div>

                  <a 
                    href={`https://ziontechgroup.com/${activeTab}-services`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Learn More <ArrowRight className="inline-block ml-2" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our experts help you choose the right services and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Mail className="inline-block mr-2" size={20} />
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
        .cyber-text-enhanced {
          background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .neon-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ServicesPage;