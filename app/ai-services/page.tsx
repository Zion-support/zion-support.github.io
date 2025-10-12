import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, MessageSquare, BarChart3, Clock, TrendingUp, Eye, Cpu, FileText, Mail, Camera, Lock, Target, Users, Database, Settings, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from '../components/FuturisticBackground';
import ParticleBackground from '../components/ParticleBackground';
import ServiceCard from '../components/ServiceCard';
import AnimatedCard from '../components/AnimatedCard';

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Studio Pro',
      description: 'Advanced AI content generation platform with multi-language support, SEO optimization, and brand voice customization for all your content needs.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates', 'Plagiarism detection', 'Social media scheduling', 'Video script generation', 'Email marketing content'],
      pricing: '$199/month',
      originalPrice: '$299/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content Creation'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbot Enterprise',
      description: 'Enterprise-grade conversational AI with natural language processing, multi-channel support, and advanced analytics for customer engagement.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics dashboard', 'Voice integration', 'Sentiment analysis', 'Lead qualification', '24/7 availability'],
      pricing: '$299/month',
      originalPrice: '$499/month',
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Customer Service'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive AI-powered analytics platform with predictive insights, real-time monitoring, and custom dashboards for data-driven decisions.',
      features: ['Predictive analytics', 'Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Automated reports', 'Anomaly detection', 'Trend forecasting', 'API integrations'],
      pricing: '$249/month',
      originalPrice: '$399/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: 'AI Automation Platform',
      description: 'Intelligent workflow automation with AI-powered process optimization, custom integrations, and real-time monitoring for maximum efficiency.',
      features: ['Workflow automation', 'Process optimization', 'Custom integrations', 'Real-time monitoring', 'RPA capabilities', 'API automation', 'Document processing', 'Email automation'],
      pricing: '$399/month',
      originalPrice: '$599/month',
      link: '/ai-automation',
      popular: true,
      category: 'Automation'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solutions with threat detection, anomaly monitoring, and automated response to protect your digital assets.',
      features: ['Threat detection', 'Anomaly monitoring', 'Automated response', 'Compliance reporting', 'Dark web monitoring', 'Vulnerability scanning', 'Incident response', 'Security training'],
      pricing: '$499/month',
      originalPrice: '$799/month',
      link: '/ai-cybersecurity',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis with real-time processing capabilities.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'OCR capabilities', 'Quality inspection', 'Real-time processing', 'Custom model training', 'API access'],
      pricing: '$349/month',
      originalPrice: '$549/month',
      link: '/ai-computer-vision',
      popular: false,
      category: 'Computer Vision'
    },
    {
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      title: 'AI Email Assistant',
      description: 'Intelligent email management with smart categorization, automated responses, and productivity optimization for professional communication.',
      features: ['Smart categorization', 'Automated responses', 'Email scheduling', 'Priority detection', 'Template suggestions', 'Sentiment analysis', 'Follow-up reminders', 'Integration support'],
      pricing: '$149/month',
      originalPrice: '$249/month',
      link: '/ai-email-assistant',
      popular: true,
      category: 'Productivity'
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-400" />,
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflow management for document-heavy operations.',
      features: ['OCR capabilities', 'Data extraction', 'Document classification', 'Automated workflows', 'Version control', 'Search functionality', 'Compliance checking', 'Batch processing'],
      pricing: '$199/month',
      originalPrice: '$329/month',
      link: '/ai-document-processing',
      popular: false,
      category: 'Document Management'
    },
    {
      icon: <Camera className="w-8 h-8 text-yellow-400" />,
      title: 'AI Video Analytics',
      description: 'Advanced video analysis platform with real-time monitoring, object tracking, and behavioral analysis for security and business intelligence.',
      features: ['Real-time monitoring', 'Object tracking', 'Behavioral analysis', 'Facial recognition', 'Motion detection', 'Crowd analysis', 'Custom alerts', 'Cloud storage'],
      pricing: '$449/month',
      originalPrice: '$699/month',
      link: '/ai-video-analytics',
      popular: false,
      category: 'Video Analytics'
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      title: 'AI Sales Assistant',
      description: 'Intelligent sales automation with lead scoring, predictive analytics, and personalized customer engagement for increased conversion rates.',
      features: ['Lead scoring', 'Predictive analytics', 'Personalized engagement', 'Sales forecasting', 'Pipeline management', 'Customer insights', 'Automated follow-ups', 'Performance tracking'],
      pricing: '$299/month',
      originalPrice: '$499/month',
      link: '/ai-sales-assistant',
      popular: true,
      category: 'Sales'
    },
    {
      icon: <Users className="w-8 h-8 text-teal-400" />,
      title: 'AI HR Solutions',
      description: 'Comprehensive HR automation with resume screening, candidate matching, and employee analytics for streamlined human resource management.',
      features: ['Resume screening', 'Candidate matching', 'Employee analytics', 'Performance tracking', 'Skill assessment', 'Retention analysis', 'Recruitment automation', 'Compliance monitoring'],
      pricing: '$249/month',
      originalPrice: '$399/month',
      link: '/ai-hr-solutions',
      popular: false,
      category: 'Human Resources'
    },
    {
      icon: <Cpu className="w-8 h-8 text-violet-400" />,
      title: 'AI Voice Assistant',
      description: 'Advanced voice AI with natural language understanding, multi-language support, and custom voice training for seamless voice interactions.',
      features: ['Natural language understanding', 'Multi-language support', 'Custom voice training', 'Voice commands', 'Conversation management', 'Integration APIs', 'Real-time processing', 'Custom wake words'],
      pricing: '$199/month',
      originalPrice: '$329/month',
      link: '/ai-voice-assistant',
      popular: true,
      category: 'Voice AI'
    }
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60% through intelligent automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Increased Efficiency',
      description: 'Streamline processes and boost productivity with AI-powered solutions',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock AI assistance and monitoring for your business',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your AI capabilities as your business expands',
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion\'s AI services transformed our content creation process. We\'ve seen a 300% increase in productivity.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'The AI analytics platform provided insights we never knew existed. Game-changing technology.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      content: 'Outstanding support and implementation. Our automation workflows are now running flawlessly.',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Custom Solution',
      description: 'We design and develop tailored AI solutions for your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless deployment and integration with your existing systems.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for maximum performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbot, analytics, automation" />
      </Helmet>
      
      {/* Futuristic Backgrounds */}
      <FuturisticBackground />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Artificial Intelligence Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Advanced AI Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
            <span className="text-cyan-400 font-semibold">12 comprehensive AI services</span> to revolutionize your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link
              to="/about"
              className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI solutions tailored to your business needs with enterprise-grade features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                pricing={service.pricing}
                originalPrice={service.originalPrice}
                link={service.link}
                popular={service.popular}
                category={service.category}
                delay={index * 0.1}
                neon={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the power of artificial intelligence with our proven solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 hover:bg-white/5">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-cyan-500/25">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real results from real businesses that trust our AI expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              How we deliver exceptional AI solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 hover:bg-white/5">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 text-white font-bold text-2xl shadow-lg shadow-cyan-500/25">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your Business with <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using our AI solutions to drive growth and innovation. 
            Start your artificial intelligence journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center text-lg">
                Start Your AI Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link 
              to="/it-services" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-lg"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}