import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Bot, Workflow, Settings, BarChart3, Shield, Users, Clock, CheckCircle, Star, Play, Headphones, Camera, Layers } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const AIAutomationPlatformPage = () => {
  const features = [
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-powered decision making and adaptive learning capabilities",
      icon: <Workflow className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Workflow Management",
      description: "Create, manage, and optimize workflows with AI-driven insights and predictive analytics",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Robotic Process Automation",
      description: "Deploy software robots to handle repetitive tasks with 99.9% accuracy and 24/7 availability",
      icon: <Bot className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI-Powered Analytics",
      description: "Gain deep insights into your automation performance with advanced analytics and reporting",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    {
      title: "Document Processing",
      description: "Automatically extract, classify, and process documents with 98% accuracy",
      features: ["OCR & ICR", "Data extraction", "Document classification", "Quality validation"]
    },
    {
      title: "Email Automation",
      description: "Intelligent email processing, routing, and response generation",
      features: ["Smart routing", "Auto-responses", "Sentiment analysis", "Priority scoring"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and synchronize data across multiple systems",
      features: ["API integration", "Real-time sync", "Data validation", "Error handling"]
    },
    {
      title: "Customer Service",
      description: "Automate customer interactions with AI-powered chatbots and virtual assistants",
      features: ["Natural language processing", "Context awareness", "Escalation handling", "Multi-channel support"]
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 70% through intelligent automation",
      icon: <Zap className="w-6 h-6" />,
      stat: "70%"
    },
    {
      title: "Efficiency Gain",
      description: "Increase productivity and efficiency across all business processes",
      icon: <Clock className="w-6 h-6" />,
      stat: "300%"
    },
    {
      title: "Error Reduction",
      description: "Minimize human errors with AI-powered validation and quality checks",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9%"
    },
    {
      title: "Scalability",
      description: "Scale your automation efforts without proportional increase in resources",
      icon: <Users className="w-6 h-6" />,
      stat: "Unlimited"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Financial Services Inc",
      role: "COO",
      content: "The AI automation platform has transformed our operations. We've reduced processing time by 80% and eliminated manual errors completely.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Manufacturing Corp",
      role: "Operations Director",
      content: "Zion Tech Group's automation platform is incredibly powerful. The ROI was evident within the first month of implementation.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Healthcare Systems",
      role: "IT Director",
      content: "The platform seamlessly integrated with our existing systems and has dramatically improved our workflow efficiency.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Automation Platform | Intelligent Process Automation | Zion Tech Group"
        description="Transform your business with our AI-powered automation platform. Automate processes, reduce costs, and increase efficiency with intelligent automation solutions."
        keywords="AI automation, process automation, RPA, workflow automation, intelligent automation, business process automation, AI platform"
        canonical="https://ziontechgroup.com/ai-automation-platform"
        author="Zion Tech Group"
        section="AI Services"
        tags={["AI Automation", "Process Automation", "RPA", "Workflow", "AI Platform"]}
        readingTime={7}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Intelligent Automation Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Automation Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business operations with our comprehensive AI automation platform. 
            Automate complex processes, reduce costs, and increase efficiency with intelligent automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI automation platform provides comprehensive tools and capabilities to automate 
              any business process with intelligence and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automation Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation capabilities designed to handle any business process or workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI automation platform can have on your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI automation platform has transformed businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover how our AI automation platform can transform your business operations and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Automation
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPlatformPage;