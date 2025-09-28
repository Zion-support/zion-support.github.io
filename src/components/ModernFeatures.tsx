import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Clock,
  Heart
} from 'lucide-react';

const ModernFeatures = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Advanced artificial intelligence that learns and adapts to your business needs",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with cutting-edge technology and best practices",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with advanced encryption and compliance standards",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Worldwide infrastructure that scales with your business growth",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, value: "99.9%", label: "Uptime" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "50%", label: "Cost Reduction" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Support"     }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Why Choose Zion Tech Group
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Modern Technology, 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Exceptional Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven methodologies to deliver 
            solutions that drive real business value and competitive advantage.
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Experience the Power of Innovation
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    currentFeature === index
                      ? `${feature.bgColor} ${feature.borderColor} shadow-lg scale-105`
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md'
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                    {currentFeature === index && (
                      <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Display */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${features[currentFeature].color} text-white mb-6`}>
                  {features[currentFeature].icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {features[currentFeature].title}
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {features[currentFeature].description}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already using our solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Journey
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                <Heart className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;