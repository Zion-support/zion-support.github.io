import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  BarChart, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Shield, 
  Cloud, 
  Code, 
  Rocket, 
  Sparkles, 
  Award, 
  Clock, 
  MessageSquare,
  Cpu,
  Database,
  Lock,
  FileText,
  Calendar,
  Settings,
  Globe,
  Eye,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
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
  PieChart,
  TrendingDown,
  Activity
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI workflows that learn and adapt',
      features: ['Process Optimization', 'Smart Automation', 'ROI Tracking', 'Custom Integration'],
      href: '/ai-workflow-automation',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: '24/7 intelligent customer support powered by advanced natural language processing',
      features: ['Multi-channel Support', 'Sentiment Analysis', 'Escalation Management', 'Performance Analytics'],
      href: '/ai-customer-support',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Unlock insights from your data with AI-powered analytics and predictive modeling',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      href: '/ai-data-analytics',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI assistance and brand consistency',
      features: ['Content Creation', 'SEO Optimization', 'Brand Voice', 'Multi-format Support'],
      href: '/ai-content-generation',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Revolutionary healthcare AI solutions for diagnosis, treatment, and patient care',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'],
      href: '/ai-healthcare',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: CreditCard,
      title: 'AI Fintech Platform',
      description: 'Advanced financial AI solutions for risk assessment, fraud detection, and trading',
      features: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading', 'Compliance Monitoring'],
      href: '/ai-fintech',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
    {
      icon: Cpu,
      title: 'AI Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
      href: '/ai-quantum-computing',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: Bot,
      title: 'AI Autonomous Systems',
      description: 'Intelligent autonomous systems for robotics, vehicles, and smart infrastructure',
      features: ['Autonomous Vehicles', 'Robotic Systems', 'Smart Infrastructure', 'Decision Making'],
      href: '/ai-autonomous-systems',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10'
    }
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate' },
    { number: '300%', label: 'Efficiency Gain' },
    { number: '70%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Availability' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      company: 'MedTech Solutions',
      role: 'Chief Medical Officer',
      content: 'The AI healthcare solutions from Zion Tech Group have revolutionized our diagnostic capabilities. We\'ve seen a 95% improvement in accuracy.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'FinanceFlow Inc.',
      role: 'CTO',
      content: 'Their AI fintech platform has transformed our risk assessment processes. The fraud detection accuracy is unmatched in the industry.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataDriven Corp',
      role: 'VP of Analytics',
      content: 'The AI data analytics solutions provided incredible insights we never knew existed. Our decision-making process is now data-driven.',
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business processes and identify AI opportunities',
      icon: Eye
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom AI solution architecture tailored to your specific needs',
      icon: Target
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'AI model development and training with your data',
      icon: Code
    },
    {
      step: '04',
      title: 'Deployment & Optimization',
      description: 'Seamless deployment and continuous optimization',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From machine learning to quantum computing, 
              we deliver intelligent automation that drives real results.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Free AI Consultation
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Our AI Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-gray-300 text-lg">Comprehensive AI solutions for every business need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Implementation Process</h2>
            <p className="text-gray-300 text-lg">A proven methodology for successful AI deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our AI Clients Say</h2>
            <p className="text-gray-300 text-lg">Success stories from businesses transformed by AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how AI can transform your business. Get a free consultation 
            and discover the possibilities of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Free AI Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact AI Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;