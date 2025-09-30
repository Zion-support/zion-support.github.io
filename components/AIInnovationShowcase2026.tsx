import React from 'react';
import Link from 'next/link';

const AIInnovationShowcase2026 = () => {
<<<<<<< HEAD
  const innovations = [
    {
      title: "Multimodal AI Integration",
      description: "Seamlessly process text, voice, images, and video with unified AI models",
      icon: "🎯",
      metrics: "250% efficiency gains",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Autonomous DevOps",
      description: "Self-healing infrastructure with intelligent monitoring and auto-scaling",
      icon: "⚙️",
      metrics: "99.9% uptime achieved",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum AI Processing",
      description: "Quantum-enhanced machine learning for complex optimization problems",
      icon: "🔮",
      metrics: "1000x faster processing",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Edge AI Computing",
      description: "Real-time AI processing at the edge with sub-10ms latency",
      icon: "⚡",
      metrics: "Sub-10ms response time",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "AI Governance Platform",
      description: "Comprehensive AI risk management and compliance automation",
      icon: "🛡️",
      metrics: "100% compliance rate",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cognitive Automation",
      description: "Intelligent process automation with human-like decision making",
      icon: "🤖",
      metrics: "90% process automation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">2026 AI Innovation Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Transforming Industries
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the cutting-edge AI innovations that are reshaping how businesses operate, 
            compete, and thrive in the digital age. Experience the future of artificial intelligence today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${innovation.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {innovation.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {innovation.title}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600">
                    {innovation.metrics}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {innovation.description}
              </p>
              
              <div className="flex items-center justify-between">
                <Link
                  href={`/services/${innovation.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline"
                >
                  Learn More →
                </Link>
                <div className="text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of enterprises already leveraging our revolutionary AI technologies 
            to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free AI Consultation
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </Link>
=======
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg">AI Innovation Showcase 2026</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Revolutionary AI Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of AI innovations that are transforming industries, 
            enhancing human capabilities, and creating unprecedented opportunities for growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Autonomous AI Agents</h3>
                  <p className="text-gray-400">Self-managing intelligent systems</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Discover how autonomous AI agents are revolutionizing business operations with 
                self-learning capabilities, decision-making autonomy, and seamless integration.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>• 95% Automation Rate</span>
                  <span>• 300% ROI</span>
                </div>
                <Link 
                  href="/services/autonomous-ai-agents"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🧬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Neural Architecture Search</h3>
                  <p className="text-gray-400">AI that designs AI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Explore how AI systems are now designing themselves, creating optimized neural 
                networks that outperform human-designed architectures.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>• 40% Better Performance</span>
                  <span>• 60% Faster Development</span>
                </div>
                <Link 
                  href="/blog/neural-architecture-search-2026"
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Predictive Analytics 2.0</h3>
                  <p className="text-gray-400">Crystal ball for business</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Advanced predictive models that forecast market trends, customer behavior, 
                and business outcomes with unprecedented accuracy.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>• 99.7% Accuracy</span>
                  <span>• Real-time Insights</span>
                </div>
                <Link 
                  href="/services/predictive-analytics-2"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Get Started →
                </Link>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Edge AI Computing</h3>
                  <p className="text-gray-400">Lightning-fast processing</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Ultra-fast AI processing at the edge with sub-10ms response times, 
                enabling real-time decision making and instant user experiences.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>• Sub-10ms Latency</span>
                  <span>• 99.9% Uptime</span>
                </div>
                <Link 
                  href="/services/edge-ai-computing"
                  className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging these revolutionary AI technologies 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore All Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-a640
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2026;