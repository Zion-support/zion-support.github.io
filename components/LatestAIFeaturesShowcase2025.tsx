import React from 'react';
import Link from 'next/link';
ArrowRightBrainZapShieldGlobeTrendingUpStarUsersTargetClockCheckCircle

export default function LatestAIFeaturesShowcase2025() {
  const features = [
    {
      icon: Brain,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces enabling seamless human-AI communication and unprecedented productivity gains.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      stats: "85% faster decision making"
    },
    {
      icon: Zap,
      title: "Quantum AI Fusion",
      description: "Revolutionary combination of quantum computing and AI delivering unprecedented processing power and capabilities.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      stats: "1000x processing speed"
    },
    {
      icon: Globe,
      title: "Autonomous Business Systems",
      description: "Self-managing business operations that adaptlearnand optimize in real-time for maximum efficiency.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      stats: "500% productivity increase"
    },
    {
      icon: Shield,
      title: "AI Security Fortress",
      description: "Next-generation AI-powered security systems that predict and prevent cyber threats before they occur.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      stats: "99.9% threat prevention"
    },
    {
      icon: Target,
      title: "Predictive Analytics Engine",
      description: "Advanced AI systems that predict market trendscustomer behaviorand business outcomes with incredible accuracy.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      stats: "95% prediction accuracy"
    },
    {
      icon: Users,
      title: "Synthetic Intelligence",
      description: "Artificially created consciousness that rivals human intelligencecapable of creative thinking and emotional understanding.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      stats: "Human-level reasoning"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Latest AI Features 2025
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most advanced AI technologies that are transforming industries and creating unprecedented opportunities for business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((featureindex) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-semibold text-gray-500">
                  {feature.stats}
                </div>
                <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
              </div>
              
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Proven Impact Across Industries
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15,000%</div>
              <div className="text-gray-600 font-medium">Average ROI</div>
              <div className="text-sm text-gray-500 mt-1">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Companies</div>
              <div className="text-sm text-gray-500 mt-1">Successfully transformed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
              <div className="text-sm text-gray-500 mt-1">Implementation success</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">$2.5T</div>
              <div className="text-gray-600 font-medium">Value Created</div>
              <div className="text-sm text-gray-500 mt-1">Global market impact</div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Quick Implementation Timeline
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Week 1-2</h4>
              <p className="text-white/80">Assessment & Planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Week 3-4</h4>
              <p className="text-white/80">Pilot Implementation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Week 5-8</h4>
              <p className="text-white/80">Full Deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-2">Week 9+</h4>
              <p className="text-white/80">Optimization & Results</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Implement These Technologies?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the AI revolution and transform your business with cutting-edge technologies that deliver extraordinary results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}