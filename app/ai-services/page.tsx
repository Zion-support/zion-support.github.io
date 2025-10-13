      featured: false
    },
    {
      id: "ai-predictive-maintenance",
      name: "AI Predictive Maintenance",
      description: "Intelligent equipment monitoring with failure prediction, maintenance scheduling, and cost optimization",
      features: [
        "Equipment failure prediction",
        "Maintenance scheduling optimization",
        "Sensor data analysis",
      link: "/ai-predictive-maintenance",
      featured: false
    },
    {
      link: "/ai-sentiment-analysis-pro",
      featured: false
    },
    {
      id: "ai-recommendation-engine",
      name: "AI Recommendation Engine",
      rating: 4.8,
      reviews: 1456,
      link: "/ai-recommendation-engine",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: aiServices.length, active: true },
    { name: "Analytics", count: aiServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "Security", count: aiServices.filter(s => s.category === "Security").length, active: false },
    { name: "Content", count: aiServices.filter(s => s.category === "Content").length, active: false },
    { name: "Customer Service", count: aiServices.filter(s => s.category === "Customer Service").length, active: false },
    { name: "Development", count: aiServices.filter(s => s.category === "Development").length, active: false },
    { name: "Business Intelligence", count: aiServices.filter(s => s.category === "Business Intelligence").length, active: false },
    { name: "Automation", count: aiServices.filter(s => s.category === "Automation").length, active: false },
    { name: "Data Analytics", count: aiServices.filter(s => s.category === "Data Analytics").length, active: false },
    { name: "Marketing", count: aiServices.filter(s => s.category === "Marketing").length, active: false },
    { name: "HR & Recruitment", count: aiServices.filter(s => s.category === "HR & Recruitment").length, active: false },
    { name: "Finance", count: aiServices.filter(s => s.category === "Finance").length, active: false },
    { name: "Supply Chain", count: aiServices.filter(s => s.category === "Supply Chain").length, active: false },
    { number: "99.9%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Tech Innovations Inc",
      role: "Chief Data Officer",
      content: "The AI Analytics Dashboard Pro has revolutionized our data insights. We've increased revenue by 40% and reduced analysis time by 80% in just 6 months.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Finance Corp",
      role: "CTO",
      content: "The AI Cybersecurity Suite Pro is incredibly sophisticated. We've had zero security breaches since implementation, and our compliance scores are perfect.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      company: "Digital Marketing Agency",
      role: "CEO",
      content: "AI Content Generation Pro has transformed our content strategy. We're producing 20x more content with better quality and higher engagement rates.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive analytics, pattern recognition, and intelligent decision making",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Natural Language Processing",
      description: "Sophisticated NLP for content generation, sentiment analysis, and conversational AI",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Computer Vision",
      description: "Advanced image and video analysis for automation, quality control, and visual insights",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Analytics",
      description: "Intelligent forecasting and trend analysis for strategic business planning",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Automated Decision Making",
      description: "AI-powered decision engines for process optimization and intelligent automation",
      icon: <Settings className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Deep Learning",
      description: "Neural networks for complex pattern recognition and advanced AI capabilities",
      icon: <Layers className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];
import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics."
        keywords="AI services, machine learning, artificial intelligence, predictive analytics, computer vision"
        canonical="/ai-services"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Analytics</h3>
            <p className="text-gray-300 mb-4">Advanced analytics powered by machine learning algorithms.</p>
            <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% accuracy rate</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 AI monitoring</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  See AI in Action
                </Link>
              </div>
            </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Automation</h3>
            <p className="text-gray-300 mb-4">Automate repetitive tasks with intelligent AI solutions.</p>
            <a href="/ai-automation" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Content Generation</h3>
            <p className="text-gray-300 mb-4">Generate high-quality content using AI technology.</p>
            <a href="/ai-content-generation" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;