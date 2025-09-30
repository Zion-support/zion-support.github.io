import React from 'react';
import Link from 'next/link';

const AIInnovationShowcase2026 = () => {
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2026;