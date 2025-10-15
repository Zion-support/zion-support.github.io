import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Code, 
  Image, 
  FileText, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Cpu,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
      price: 'From $299/month',
      description: 'Advanced AI-powered analytics platform with real-time insights and predictive capabilities',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Automated reporting',
        'Advanced machine learning models',
        'API integration',
        'Mobile app support'
      ],
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting time by 80%',
        'Improve forecast accuracy by 45%',
        'Real-time business insights'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-600',
      popular: true
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      price: 'From $199/month',
      description: 'Comprehensive AI content creation platform for all your marketing and communication needs',
      features: [
        'Multi-language content generation',
        'SEO-optimized content',
        'Brand voice customization',
        'Content templates library',
        'Plagiarism detection',
        'Content scheduling',
        'Social media integration',
        'Performance analytics'
      ],
      benefits: [
        'Reduce content creation time by 70%',
        'Improve SEO rankings by 60%',
        'Increase engagement rates by 40%',
        'Consistent brand voice across all content'
      ],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-600',
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      price: 'From $149/month',
      description: 'Intelligent customer support system with 24/7 availability and multilingual capabilities',
      features: [
        '24/7 automated support',
        'Multi-language support',
        'Sentiment analysis',
        'Ticket routing and prioritization',
        'Knowledge base integration',
        'Live chat handoff',
        'Customer satisfaction tracking',
        'Custom response templates'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Increase customer satisfaction by 50%',
        'Handle 10x more inquiries',
        '24/7 availability'
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-green-500 to-teal-600',
      popular: true
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      price: 'From $199/month',
      description: 'Advanced AI-powered coding assistant for developers and development teams',
      features: [
        'Code generation and completion',
        'Bug detection and fixing',
        'Code review and optimization',
        'Documentation generation',
        'Multiple programming languages',
        'IDE integration',
        'Team collaboration features',
        'Security vulnerability scanning'
      ],
      benefits: [
        'Increase coding speed by 200%',
        'Reduce bugs by 60%',
        'Improve code quality',
        'Faster time to market'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600',
      popular: false
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      price: 'From $399/month',
      description: 'Comprehensive AI-powered business intelligence platform for strategic decision making',
      features: [
        'Advanced data analytics',
        'ROI tracking and optimization',
        'Strategic insights and recommendations',
        'Custom KPI dashboards',
        'Data visualization tools',
        'Automated insights generation',
        'Competitive analysis',
        'Market trend analysis'
      ],
      benefits: [
        'Improve strategic decision making',
        'Increase ROI by 35%',
        'Identify new opportunities',
        'Reduce analysis time by 75%'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      popular: true
    },
    {
      id: 'ai-content-moderation-pro',
      name: 'AI Content Moderation Pro',
      price: 'From $79/month',
      description: 'Advanced AI-powered content moderation system for platforms and communities',
      features: [
        'Real-time content filtering',
        'Multi-language detection',
        'Custom moderation rules',
        'Image and video analysis',
        'Spam detection',
        'Toxicity analysis',
        'User behavior tracking',
        'Automated actions'
      ],
      benefits: [
        'Reduce moderation costs by 80%',
        'Improve platform safety',
        'Handle large volumes of content',
        'Consistent moderation standards'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-600',
      popular: false
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: <Users className="w-6 h-6" />, description: 'AI-powered diagnostics and patient care' },
    { name: 'Finance', icon: <TrendingUp className="w-6 h-6" />, description: 'Fraud detection and risk analysis' },
    { name: 'E-commerce', icon: <Globe className="w-6 h-6" />, description: 'Personalized shopping experiences' },
    { name: 'Manufacturing', icon: <Cpu className="w-6 h-6" />, description: 'Predictive maintenance and optimization' },
    { name: 'Education', icon: <Brain className="w-6 h-6" />, description: 'Personalized learning and assessment' },
    { name: 'Retail', icon: <Smartphone className="w-6 h-6" />, description: 'Inventory management and customer insights' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Revolutionary AI Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From analytics to automation, 
              we provide intelligent tools that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                <Brain className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our AI Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${service.popular ? 'border-cyan-500/40 ring-2 ring-cyan-500/20' : 'border-cyan-500/20'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-6">
                    {service.price}
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-cyan-400 text-sm">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are tailored for various industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group text-center p-6 bg-slate-800/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">{industry.icon}</div>
                </div>
                <h3 className="text-white font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI solutions to drive growth and innovation. 
                Start your AI transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;