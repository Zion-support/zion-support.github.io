'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  CheckCircleIcon
  ArrowRightIcon,
  StarIcon
  GlobeAltIcon,
  DocumentTextIcon
  ChartBarIcon,
  ShieldCheckIcon
  ClockIcon,
  UserGroupIcon
  CurrencyDollarIcon,
  PhoneIcon
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
  EyeIcon,
  CogIcon
  RocketLaunchIcon,
  AcademicCapIcon
  BeakerIcon
} from '@heroicons/react/24/outline';
const AIServices: React.FC = () => {
  const aiServices = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Chatbot Enterprise',
      description: 'Advanced conversational AI platform with natural language processing, multi-channel support, and custom training.',
      price: 'From $199/month',
      features: ['Natural Language Processing', 'Multi-channel Support', 'Custom Training', 'Analytics Dashboard', 'API Access'],
      href: '/ai-chatbot-enterprise'
    }
    {
      icon: ChartBarIcon,
      title: 'AI Analytics Dashboard Pro',
      description: 'Comprehensive AI-powered analytics platform with predictive insights, automated reporting, and real-time monitoring.',
      price: 'From $299/month',
      features: ['Predictive Analytics', 'Automated Reports', 'Real-time Monitoring', 'Custom Models', 'Data Integration'],
      href: '/ai-analytics-dashboard-pro'
    }
    {
      icon: ShieldCheckIcon,
      title: 'AI Cybersecurity Suite Pro',
      description: 'Next-generation AI-powered security platform with threat detection, behavioral analysis, and automated response.',
      price: 'From $399/month',
      features: ['AI Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Compliance Monitoring', 'Incident Management'],
      href: '/ai-cybersecurity-suite-pro'
    }
    {
      icon: GlobeAltIcon,
      title: 'AI Cloud Automation',
      description: 'Intelligent cloud management platform with AI-driven optimization, cost management, and performance tuning.',
      price: 'From $249/month',
      features: ['AI Optimization', 'Cost Management', 'Performance Tuning', 'Auto-scaling', 'Multi-cloud Support'],
      href: '/ai-cloud-automation'
    }
    {
      icon: DocumentTextIcon,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform with 50+ templates, multi-language support, and brand voice customization.',
      price: 'From $29/month',
      features: ['50+ Content Templates', 'Multi-language Support', 'Brand Voice Training', 'SEO Optimization', 'API Access'],
      href: '/ai-content-generator-pro'
    }
    {
      icon: EyeIcon,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
      price: 'From $179/month',
      features: ['Image Recognition', 'Object Detection', 'Visual Analytics', 'Real-time Processing', 'Custom Models'],
      href: '/ai-computer-vision'
    }
  ]
  const aiSolutions = [
    {
      icon: CpuChipIcon,
      title: 'Machine Learning Models',
      description: 'Custom machine learning models tailored to your specific business needs and data requirements.',
      price: 'From $5,000/project',
      features: ['Custom Model Development', 'Data Preprocessing', 'Model Training', 'Performance Optimization', 'Deployment Support']
    }
    {
      icon: BeakerIcon,
      title: 'AI Research & Development',
      description: 'Cutting-edge AI research and development services for innovative solutions and breakthrough technologies.',
      price: 'From $10,000/project',
      features: ['Research & Development', 'Proof of Concept', 'Technology Innovation', 'Patent Support', 'Academic Collaboration']
    }
    {
      icon: CogIcon,
      title: 'AI Integration Services',
      description: 'Seamless integration of AI capabilities into your existing systems and workflows.',
      price: 'From $3,000/project',
      features: ['System Integration', 'API Development', 'Workflow Automation', 'Data Migration', 'Training & Support']
    }
    {
      icon: AcademicCapIcon,
      title: 'AI Training & Consulting',
      description: 'Comprehensive AI training programs and strategic consulting to accelerate your AI adoption.',
      price: 'From $2,000/project',
      features: ['Team Training', 'Strategic Consulting', 'AI Roadmap Planning', 'Best Practices', 'Ongoing Support']
    }
  ]
  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'AI-powered diagnostics, patient care, and medical research' }
    { name: 'Finance', icon: '💰', description: 'Fraud detection, algorithmic trading, and risk assessment' }
    { name: 'E-commerce', icon: '🛒', description: 'Personalized recommendations, inventory optimization, and customer service' }
    { name: 'Manufacturing', icon: '🏭', description: 'Predictive maintenance, quality control, and process optimization' }
    { name: 'Education', icon: '🎓', description: 'Personalized learning, automated grading, and educational analytics' }
    { name: 'Transportation', icon: '🚗', description: 'Autonomous vehicles, route optimization, and traffic management' }
  ]
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'MedTech Innovations',
      role: 'CTO',
      content: 'Zion Tech Group\'s AI solutions have transformed our diagnostic capabilities. We\'ve improved accuracy by 40% and reduced processing time by 60%.',
      rating: 5
    }
    {
      name: 'Michael Rodriguez',
      company: 'FinTech Solutions',
      role: 'Head of AI',
      content: 'The AI chatbot they developed for us handles 80% of customer inquiries automatically. Customer satisfaction is up 35% and response time is down 90%.',
      rating: 5
    }
    {
      name: 'Lisa Thompson',
      company: 'Retail Analytics',
      role: 'Data Science Director',
      content: 'Their predictive analytics platform has revolutionized our inventory management. We\'ve reduced waste by 25% and increased sales by 15%.',
      rating: 5
    }
  ]
  return (
    <>
      <Helmet>
        <title>AI Services & Solutions - Advanced Artificial Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, AI development, AI solutions" />
        <meta property="og:title" content="AI Services & Solutions - Advanced Artificial Intelligence Platform" />
        <meta property="og:description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <CpuChipIcon className="w-4 h-4 mr-2" />
                Advanced Artificial Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                AI Services & Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that drives real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Watch Demo
                </Link>
              </div>

              {/* AI Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300">AI Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                  <div className="text-gray-300">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all glow-effect"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Solutions Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Custom <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored AI solutions designed specifically for your unique business requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiSolutions.map((solution, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/80 to-purple-800/80 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{solution.price}</div>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all glow-effect"
                  >
                    Get Quote <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Solutions for <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to address the unique challenges and opportunities across different industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are transforming their operations with our AI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI solutions can accelerate your growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link,
  to ="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Start Your AI Journey
                </Link>
                <Link,
  to ="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <CurrencyDollarIcon className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">Starting at $29/month</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default AIServices