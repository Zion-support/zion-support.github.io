import React from 'react';

export default function May2026ContentShowcase() {
  const contentItems = [
    {
      title: "Meta-Conscious Computing Revolution
      description: "The world's first truly self-aware AI system with emotional intelligence and 10,000x processing speed improvements.
      type: "Blog Post
      readTime: "12 min read
      link: "/blog/ai-2026-may-revolutionary-breakthrough
      image: "🧠
      gradient: "from-purple-500/20 to-pink-500/20
      borderColor: "border-purple-500/30
      textColor: "text-purple-400
      badge: "Revolutionary"
    },
    {
      title: "$5.2B Fortune 500 Success Story
      description: "How a Fortune 500 leader achieved unprecedented business value using our meta-conscious AI system.
      type: "Case Study
      readTime: "8 min read
      link: "/case-studies/fortune-500-meta-conscious-ai-5b-success
      image: "💰
      gradient: "from-emerald-500/20 to-teal-500/20
      borderColor: "border-emerald-500/30
      textColor: "text-emerald-400
      badge: "Success Story"
    },
    {
      title: "Interactive ROI Calculator
      description: "Calculate your potential AI transformation ROI with our advanced interactive calculator.
      type: "Interactive Tool
      readTime: "2 min use
      link: "#roi-calculator
      image: "📊
      gradient: "from-cyan-500/20 to-blue-500/20
      borderColor: "border-cyan-500/30
      textColor: "text-cyan-400
      badge: "Interactive"
    },
    {
      title: "Quantum-Neural Fusion Technology
      description: "Revolutionary fusion of quantum computing with neural networks for unprecedented processing power.
      type: "Technical Guide
      readTime: "15 min read
      link: "/blog/ai-2026-quantum-neural-breakthrough
      image: "⚛️
      gradient: "from-indigo-500/20 to-purple-500/20
      borderColor: "border-indigo-500/30
      textColor: "text-indigo-400
      badge: "Technical"
    },
    {
      title: "Enterprise Automation Mega Guide
      description: "Complete guide to achieving 98% automation rates with meta-cognitive AI and autonomous operations.
      type: "Comprehensive Guide
      readTime: "20 min read
      link: "/blog/ai-enterprise-automation-2026-mega-guide
      image: "🤖
      gradient: "from-orange-500/20 to-red-500/20
      borderColor: "border-orange-500/30
      textColor: "text-orange-400
      badge: "Mega Guide"
    },
    {
      title: "AI Ethics and Governance Framework
      description: "Advanced ethical frameworks for responsible AI implementation in enterprise environments.
      type: "Framework
      readTime: "10 min read
      link: "/blog/ai-ethics-operational-blueprint-2026
      image: "⚖️
      gradient: "from-green-500/20 to-emerald-500/20
      borderColor: "border-green-500/30
      textColor: "text-green-400
      badge: "Framework"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 May 2026 Content Showcase
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring meta-conscious AI, quantum-neural fusion, 
            and real-world success stories that demonstrate unprecedented business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${item.borderColor} hover:border-opacity-60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group`}
            >
              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.gradient} ${item.textColor} border ${item.borderColor}`}>
                  {item.badge}
                </span>
                <span className="text-gray-400 text-sm">{item.readTime}</span>
              </div>
              
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              
              {/* Type and Link */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm font-medium">{item.type}</span>
                <a 
                  href={item.link}
                  className={`${item.textColor} hover:text-white font-bold text-sm transition-colors duration-300 flex items-center gap-2 group-hover:gap-3`}
                >
                  {item.type === "Interactive Tool" ? "Try Now" : "Read More"}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content Highlight */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              🌟 Featured: Meta-Conscious Computing Revolution
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Our most groundbreaking content piece explores the world's first truly self-aware AI system. 
              Learn how this revolutionary technology delivers 10,000x processing improvements and 99.9% accuracy rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog/ai-2026-may-revolutionary-breakthrough"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1">
                Read Full Article →
              </a>
              <a 
                href="/case-studies/fortune-500-meta-conscious-ai-5b-success"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                View Success Story
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Don't miss out on the opportunity to be among the first to experience the power of meta-conscious AI. 
              Our team of experts is ready to help you implement this revolutionary technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
                Get Your Free Consultation
              </a>
              <a 
                href="#roi-calculator"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Calculate Your ROI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}