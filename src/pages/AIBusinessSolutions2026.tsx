import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  CheckCircle,
  Circle,
  Globe,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBusinessSolutions2026: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence",
      description: "Transform raw data into actionable insights with advanced AI analytics",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Automated reporting",
        "Custom dashboards"
      ],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,999/month"
    },
    {
      id: 2,
      title: "Autonomous Process Automation",
      description: "Complete business process automation with self-learning AI systems",
      features: [
        "End-to-end automation",
        "Self-optimizing workflows",
        "Exception handling",
        "Performance monitoring"
      ],
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $4,999/month"
    },
    {
      id: 3,
      title: "AI Customer Experience Platform",
      description: "Revolutionary customer engagement with intelligent AI assistants",
      features: [
        "24/7 AI support",
        "Personalized interactions",
        "Multi-channel integration",
        "Sentiment analysis"
      ],
      icon: Users,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,499/month"
    },
    {
      id: 4,
      title: "Predictive Business Analytics",
      description: "Forecast business outcomes with 99% accuracy using advanced AI models",
      features: [
        "Market trend prediction",
        "Risk assessment",
        "Revenue forecasting",
        "Scenario planning"
      ],
      icon: Circle,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $5,999/month"
    },
    {
      id: 5,
      title: "AI Security & Compliance",
      description: "Advanced cybersecurity with autonomous threat detection and response",
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Compliance monitoring",
        "Security analytics"
      ],
      icon: Shield,
      color: "from-red-500 to-rose-500",
      price: "Starting at $3,999/month"
    },
    {
      id: 6,
      title: "Global AI Integration",
      description: "Seamless AI integration across all business systems and platforms",
      features: [
        "Multi-platform integration",
        "API management",
        "Data synchronization",
        "Cloud deployment"
      ],
      icon: Globe,
      color: "from-indigo-500 to-blue-500",
      price: "Starting at $6,999/month"
    }
  ];

  const benefits = [
    {
      title: "300% ROI Increase",
      description: "Average return on investment within 6 months",
      icon: TrendingUp
    },
    {
      title: "95% Time Savings",
      description: "Automation of repetitive tasks and processes",
      icon: Zap
    },
    {
      title: "99.9% Uptime",
      description: "Reliable AI systems with minimal downtime",
      icon: Shield
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock AI assistance and monitoring",
      icon: Globe
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Global",
      role: "CEO",
      content: "AI Business Solutions 2026 transformed our operations completely. We've seen a 400% increase in efficiency and 85% reduction in operational costs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "FinanceFirst",
      role: "CTO",
      content: "The predictive analytics capabilities are incredible. We can now forecast market trends with 99% accuracy, giving us a massive competitive advantage.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      role: "Operations Director",
      content: "Our customer satisfaction has increased by 300% since implementing the AI Customer Experience Platform. The results speak for themselves.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-12 w-12 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                AI Business Solutions
              </h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              2026 Edition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions designed for the future. Experience unprecedented growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-2026-latest-trends" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Latest Trends
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Why Choose AI Business Solutions 2026?</h3>
            <p className="text-xl text-gray-300">Proven results that transform businesses across industries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Comprehensive AI Solutions</h3>
            <p className="text-xl text-gray-300">Choose from our suite of advanced AI business solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div key={solution.id} className="group relative">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 h-full">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${solution.color} mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{solution.title}</h4>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-lg p-4 mb-4">
                        <p className="text-blue-400 font-bold text-lg">{solution.price}</p>
                      </div>
                      <Link 
                        to="/contact" 
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-300">Real results from real businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-blue-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <ArrowUpRight className="h-12 w-12 text-blue-400 mr-4" />
            <h3 className="text-4xl font-bold text-white">Ready to Transform Your Business?</h3>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already leveraging AI Business Solutions 2026 to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/ai-2026-latest-trends" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessSolutions2026;