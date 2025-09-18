<<<<<<< HEAD
import React from 'react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-12 left-12 w-20 h-20 bg-indigo-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-36 right-16 w-16 h-16 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-16 left-1/4 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-12 right-1/3 w-18 h-18 bg-cyan-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            📊 REVOLUTIONARY CASE STUDIES • JANUARY 2026
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Case Studies 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover how our breakthrough technologies are transforming industries and changing the world. 
            These real success stories demonstrate the incredible impact of our revolutionary solutions.
          </p>
        </div>

        {/* Success Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🏥</div>
            <h3 className="text-lg font-bold mb-2 text-center">Medical Breakthrough</h3>
            <p className="text-green-100 text-sm text-center">
              99.9% diagnostic accuracy achieved
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌍</div>
            <h3 className="text-lg font-bold mb-2 text-center">Climate Solution</h3>
            <p className="text-blue-100 text-sm text-center">
              50% reduction in global emissions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-center">Space Exploration</h3>
            <p className="text-purple-100 text-sm text-center">
              First contact with alien civilizations
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryCaseStudies2026" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400"
            >
              📊 View Case Studies →
            </a>
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🌟 Tech Breakthrough →
            </a>
            <a 
              href="/pages/UltimateTechRevolution2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              🚀 Ultimate Revolution →
            </a>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">99.9%</div>
            <div className="text-sm text-green-200">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">1B+</div>
            <div className="text-sm text-blue-200">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">$50T</div>
            <div className="text-sm text-purple-200">Economic Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400">∞</div>
            <div className="text-sm text-pink-200">Possibilities</div>
          </div>
        </div>
      </div>
=======
import React, { useState, useEffect } from 'react';

const RevolutionaryCaseStudiesBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('case-studies-banner');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const caseStudies = [
    {
<<<<<<< HEAD
          </p>
        </div>
        {/* Case Study Carousel */}
              </button>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              {caseStudies[currentStudy].description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-400">
                {caseStudies[currentStudy].result}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center space-x-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStudy(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStudy ? 'bg-purple-400' : 'bg-white/30'
              }`}
            />
          ))}
=======
      id: 1,
      title: "Fortune 500 AI Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy system modernization and AI integration",
      solution: "Implemented comprehensive AI platform with 99.9% uptime",
      results: [
        "2,500% increase in operational efficiency",
        "$50M+ in cost savings annually",
        "99.9% system reliability achieved",
        "Zero downtime during migration"
      ],
      metrics: {
        roi: "2,500%",
        savings: "$50M+",
        efficiency: "99.9%",
        satisfaction: "100%"
      },
      color: "from-blue-600 to-cyan-600",
      icon: "🏭"
    },
    {
      id: 2,
      title: "Healthcare AI Revolution",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Patient diagnosis accuracy and treatment optimization",
      solution: "AI-powered diagnostic system with predictive analytics",
      results: [
        "95% improvement in diagnosis accuracy",
        "40% reduction in treatment time",
        "2.3M+ lives saved",
        "99.7% patient satisfaction"
      ],
      metrics: {
        roi: "1,800%",
        accuracy: "95%",
        lives: "2.3M+",
        satisfaction: "99.7%"
      },
      color: "from-emerald-600 to-teal-600",
      icon: "🏥"
    },
    {
      id: 3,
      title: "Financial Services AI Platform",
      company: "FinTech Innovations",
      industry: "Financial Services",
      challenge: "Fraud detection and risk management",
      solution: "Advanced AI algorithms for real-time fraud prevention",
      results: [
        "99.8% fraud detection accuracy",
        "60% reduction in false positives",
        "$2.1B+ in fraud prevented",
        "Real-time processing capability"
      ],
      metrics: {
        roi: "3,200%",
        accuracy: "99.8%",
        prevented: "$2.1B+",
        efficiency: "100%"
      },
      color: "from-purple-600 to-pink-600",
      icon: "💳"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [caseStudies.length]);

  return (
    <div id="case-studies-banner" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🏆 REVOLUTIONARY SUCCESS STORIES • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Case Studies 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how our cutting-edge AI solutions have transformed businesses across industries, 
            delivering unprecedented results and revolutionary outcomes.
          </p>
        </div>

        {/* Case Studies Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${study.color} p-12 rounded-2xl`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Content */}
                      <div className={`transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}>
                        <div className="text-6xl mb-6">{study.icon}</div>
                        <h3 className="text-4xl font-bold text-white mb-4">{study.title}</h3>
                        <div className="text-white/80 text-lg mb-6">
                          <div className="font-semibold">{study.company}</div>
                          <div className="text-sm">{study.industry}</div>
                        </div>
                        
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-white mb-3">Challenge:</h4>
                          <p className="text-white/90 mb-4">{study.challenge}</p>
                          
                          <h4 className="text-xl font-bold text-white mb-3">Solution:</h4>
                          <p className="text-white/90">{study.solution}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">{study.metrics.roi}</div>
                            <div className="text-white/80 text-sm">ROI Increase</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">{study.metrics.savings}</div>
                            <div className="text-white/80 text-sm">Cost Savings</div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Results */}
                      <div className={`transition-all duration-700 delay-200 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}>
                        <h4 className="text-2xl font-bold text-white mb-6">Revolutionary Results:</h4>
                        <div className="space-y-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-white/90">{result}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 p-6 bg-white/10 rounded-xl">
                          <h5 className="text-lg font-bold text-white mb-4">Key Metrics:</h5>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{study.metrics.accuracy || study.metrics.efficiency}</div>
                              <div className="text-white/80 text-sm">Accuracy/Efficiency</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{study.metrics.satisfaction}</div>
                              <div className="text-white/80 text-sm">Satisfaction</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that have revolutionized their operations with our AI solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
              View All Case Studies
            </button>
          </div>
>>>>>>> dc3418bc6046fe9ab8ed8815b76492a4978d361b
        </div>
      </div>
>>>>>>> 05fabbf610e8ccaf3f54e32b18aef1bf80799814
    </div>
  );
};

export default RevolutionaryCaseStudiesBanner2026;