import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import { 
  Brain, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Globe
} from 'lucide-react';

export default function AISolutionsPage() {
  const solutions = [
    {
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation that learns and adapts to your business needs.",
      icon: Brain,
      features: [
        "Process Automation",
        "Predictive Analytics", 
        "Natural Language Processing",
        "Computer Vision",
        "Robotic Process Automation"
      ],
      benefits: [
        "95% Efficiency Increase",
        "50% Cost Reduction",
        "24/7 Operations",
        "Error-Free Processing"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Machine Learning Platforms",
      description: "Build, train, and deploy ML models at scale with our comprehensive platform.",
      icon: Cpu,
      features: [
        "AutoML Capabilities",
        "Model Training & Validation",
        "Real-time Inference",
        "A/B Testing",
        "Model Monitoring"
      ],
      benefits: [
        "10x Faster Deployment",
        "99.9% Model Accuracy",
        "Scalable Infrastructure",
        "Automated Retraining"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "AI-Powered Analytics",
      description: "Unlock deep insights from your data with advanced AI analytics and visualization.",
      icon: TrendingUp,
      features: [
        "Data Visualization",
        "Pattern Recognition",
        "Trend Analysis",
        "Anomaly Detection",
        "Predictive Modeling"
      ],
      benefits: [
        "300% Better Insights",
        "Real-time Analytics",
        "Automated Reporting",
        "Actionable Recommendations"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Natural Language Processing",
      description: "Process and understand human language with state-of-the-art NLP technologies.",
      icon: Database,
      features: [
        "Text Analysis",
        "Sentiment Analysis",
        "Language Translation",
        "Chatbot Development",
        "Document Processing"
      ],
      benefits: [
        "90% Accuracy Rate",
        "Multi-language Support",
        "Real-time Processing",
        "Context Understanding"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Computer Vision",
      description: "Extract meaningful information from images and videos using advanced computer vision.",
      icon: Cloud,
      features: [
        "Image Recognition",
        "Object Detection",
        "Facial Recognition",
        "Video Analysis",
        "Quality Inspection"
      ],
      benefits: [
        "98% Detection Accuracy",
        "Real-time Processing",
        "Quality Assurance",
        "Automated Monitoring"
      ],
      color: "from-indigo-600 to-purple-600"
    },
    {
      title: "AI Security Solutions",
      description: "Protect your AI systems and data with advanced security measures and monitoring.",
      icon: Shield,
      features: [
        "Threat Detection",
        "Data Encryption",
        "Access Control",
        "Audit Logging",
        "Compliance Monitoring"
      ],
      benefits: [
        "100% Security Coverage",
        "Real-time Monitoring",
        "Automated Response",
        "Compliance Ready"
      ],
      color: "from-red-600 to-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Zion Tech Group's AI solutions transformed our operations. We achieved 95% efficiency increase in just 6 months.",
      rating: 5,
      company: "TechCorp",
      industry: "Technology"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, InnovateLabs",
      content: "Their machine learning platform helped us build and deploy models 10x faster than before. Incredible results!",
      rating: 5,
      company: "InnovateLabs",
      industry: "Research"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, NeuroTech",
      content: "The AI analytics platform gave us insights we never had before. It's revolutionizing our research approach.",
      rating: 5,
      company: "NeuroTech",
      industry: "Healthcare"
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "1000+", icon: Brain },
    { label: "Client Satisfaction", value: "99%", icon: Star },
    { label: "Cost Savings", value: "$100M+", icon: TrendingUp },
    { label: "Global Reach", value: "50+ Countries", icon: Globe }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="AI Solutions - Zion Tech Group"
        description="Transform your business with cutting-edge AI solutions including automation, machine learning, analytics, and more. Expert implementation and support."
        keywords="AI solutions, machine learning, automation, analytics, NLP, computer vision, AI consulting"
        url="/ai-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                AI Solutions 2025
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Revolutionary AI
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge AI technologies. From automation to machine learning, 
                we provide comprehensive AI solutions that drive growth and innovation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI technologies designed to solve complex business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-white">Key Features:</h4>
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-white">Benefits:</h4>
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-sm text-purple-300 font-medium">
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Success stories from companies that transformed their business with our AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-purple-400">{testimonial.company}</div>
                    <div className="text-xs text-gray-500">{testimonial.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our AI solutions to achieve 
              unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}