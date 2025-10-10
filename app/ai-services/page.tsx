'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Bot, 
  Zap, 
  Eye, 
  BarChart, 
  Users, 
  Shield, 
  Code, 
  FileText, 
  Mail, 
  Calendar, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Clock,
  Sparkles,
  Award,
  Globe,
  Database,
  Cpu,
  Lock,
  Palette,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Compass,
  Navigation,
  PieChart,
  Activity
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-automation',
      name: 'AI Business Automation',
      description: 'Transform your business processes with intelligent automation that learns and adapts to your specific needs.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Data integration',
        'Predictive analytics',
        'Custom AI models',
        'ROI tracking'
      ],
      pricing: {
        consultation: { price: 200, period: 'hour', features: ['Process analysis', 'Automation strategy', 'ROI projection'] },
        implementation: { price: 15000, period: 'project', features: ['Custom automation', 'Integration', 'Training'] },
        managed: { price: 3000, period: 'month', features: ['24/7 monitoring', 'Optimization', 'Support'] }
      },
      icon: Bot,
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      id: 'ai-analytics',
      name: 'AI-Powered Analytics',
      description: 'Unlock hidden insights from your data with advanced machine learning algorithms and predictive analytics.',
      features: [
        'Predictive modeling',
        'Real-time insights',
        'Custom dashboards',
        'Anomaly detection',
        'Trend analysis',
        'Automated reporting'
      ],
      pricing: {
        setup: { price: 8000, period: 'project', features: ['Data analysis', 'Model development', 'Dashboard creation'] },
        monthly: { price: 2500, period: 'month', features: ['Model maintenance', 'Insights delivery', 'Support'] },
        enterprise: { price: 5000, period: 'month', features: ['Advanced models', 'Custom features', 'Dedicated support'] }
      },
      icon: BarChart,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent chatbots, sentiment analysis, and automated support solutions.',
      features: [
        'Intelligent chatbots',
        'Sentiment analysis',
        'Multi-language support',
        '24/7 availability',
        'Human handoff',
        'Performance analytics'
      ],
      pricing: {
        basic: { price: 500, period: 'month', features: ['Basic chatbot', 'Email support', 'Analytics'] },
        advanced: { price: 1500, period: 'month', features: ['Advanced AI', 'Multi-channel', 'Customization'] },
        enterprise: { price: 3500, period: 'month', features: ['Full suite', 'Custom training', 'Priority support'] }
      },
      icon: Users,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Create high-quality, engaging content at scale with AI-powered writing, design, and multimedia generation.',
      features: [
        'Text generation',
        'Image creation',
        'Video production',
        'Voice synthesis',
        'Brand consistency',
        'Multi-language support'
      ],
      pricing: {
        starter: { price: 200, period: 'month', features: ['10,000 words', 'Basic templates', 'Email support'] },
        pro: { price: 500, period: 'month', features: ['50,000 words', 'Advanced features', 'Priority support'] },
        enterprise: { price: 1200, period: 'month', features: ['Unlimited content', 'Custom models', 'Dedicated support'] }
      },
      icon: FileText,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection, behavioral analysis, and automated security responses.',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Automated response',
        'Risk assessment',
        'Compliance monitoring',
        'Incident investigation'
      ],
      pricing: {
        monitoring: { price: 1000, period: 'month', features: ['Threat monitoring', 'Basic alerts', 'Reports'] },
        protection: { price: 2500, period: 'month', features: ['Full protection', 'Automated response', 'Analysis'] },
        enterprise: { price: 5000, period: 'month', features: ['Advanced AI', 'Custom rules', 'Dedicated team'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'ai-marketing',
      name: 'AI Marketing Solutions',
      description: 'Optimize your marketing campaigns with AI-powered targeting, personalization, and performance optimization.',
      features: [
        'Audience targeting',
        'Content personalization',
        'Campaign optimization',
        'Predictive analytics',
        'A/B testing',
        'ROI optimization'
      ],
      pricing: {
        basic: { price: 800, period: 'month', features: ['Basic targeting', 'Analytics', 'Email support'] },
        advanced: { price: 2000, period: 'month', features: ['Advanced AI', 'Personalization', 'Priority support'] },
        enterprise: { price: 4000, period: 'month', features: ['Full suite', 'Custom models', 'Dedicated support'] }
      },
      icon: Target,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Revolutionize healthcare with AI-powered diagnostics, treatment recommendations, and patient monitoring systems.',
      features: [
        'Medical imaging analysis',
        'Diagnostic assistance',
        'Treatment recommendations',
        'Patient monitoring',
        'Drug discovery',
        'Clinical trials'
      ],
      pricing: {
        consultation: { price: 300, period: 'hour', features: ['Needs assessment', 'Strategy planning', 'Compliance review'] },
        implementation: { price: 25000, period: 'project', features: ['Custom solution', 'Integration', 'Training'] },
        managed: { price: 5000, period: 'month', features: ['24/7 support', 'Updates', 'Compliance'] }
      },
      icon: Stethoscope,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'ai-fintech',
      name: 'AI FinTech Solutions',
      description: 'Transform financial services with AI-powered fraud detection, risk assessment, and automated trading systems.',
      features: [
        'Fraud detection',
        'Risk assessment',
        'Algorithmic trading',
        'Credit scoring',
        'Regulatory compliance',
        'Real-time monitoring'
      ],
      pricing: {
        basic: { price: 1500, period: 'month', features: ['Basic fraud detection', 'Reports', 'Email support'] },
        advanced: { price: 4000, period: 'month', features: ['Advanced AI', 'Real-time monitoring', 'Priority support'] },
        enterprise: { price: 8000, period: 'month', features: ['Full suite', 'Custom models', 'Dedicated support'] }
      },
      icon: CreditCard,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Stethoscope, description: 'Medical diagnostics, patient care, drug discovery' },
    { name: 'Finance', icon: CreditCard, description: 'Fraud detection, risk assessment, trading algorithms' },
    { name: 'Manufacturing', icon: Factory, description: 'Predictive maintenance, quality control, optimization' },
    { name: 'Retail', icon: ShoppingCart, description: 'Personalization, inventory management, customer service' },
    { name: 'Education', icon: GraduationCap, description: 'Personalized learning, assessment, content generation' },
    { name: 'Transportation', icon: Car, description: 'Autonomous vehicles, route optimization, logistics' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'MedTech Innovations',
      content: 'AI-powered diagnostics increased our accuracy by 35% and reduced diagnosis time by 60%. Game-changing technology.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'FinSecure Corp',
      content: 'Their AI fraud detection system prevented $2M in fraudulent transactions in the first month. Incredible ROI.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'RetailMax Inc.',
      content: 'AI personalization increased our conversion rates by 45% and customer satisfaction by 30%. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including automation, analytics, customer service, content generation, cybersecurity, and industry-specific solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, AI consulting" />
        <meta property="og:title" content="AI Services & Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions. From automation to analytics, we deliver intelligent technology that drives results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text-enhanced">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Harness the power of AI to automate processes, gain insights, and drive innovation. 
              Our comprehensive AI solutions are designed to deliver measurable results and competitive advantages.
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

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={service.id}
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
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
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
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{plan}:</span>
                          <span className="text-white font-semibold">
                            ${details.price}/{details.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`https://ziontechgroup.com/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Learn More <ArrowRight className="inline-block ml-2" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <industry.icon className="w-12 h-12 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  </div>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Success Stories
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
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our AI experts help you identify opportunities, implement solutions, and achieve measurable results.
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

export default AIServicesPage;