import React from 'react';

const January2025ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI-Powered Customer Experience
      description: "Transform customer interactions with intelligent automation and personalized experiences that drive engagement and loyalty.
      metrics: { accuracy: "96%", satisfaction: "94%", growth: "67%" },
      category: "Customer Experience
      link: "/blog/ai-customer-experience-2025"
    },
    {
      title: "Autonomous Business Operations
      description: "Streamline operations with self-managing AI systems that optimize processes, reduce costs, and improve efficiency.
      metrics: { automation: "89%", savings: "$2.3M", efficiency: "156%" },
      category: "Business Operations
      link: "/blog/autonomous-business-operations"
    },
    {
      title: "Predictive Analytics Mastery
      description: "Leverage advanced analytics to forecast trends, predict outcomes, and make data-driven decisions with confidence.
      metrics: { accuracy: "92%", roi: "8.5x", insights: "47%" },
      category: "Analytics & Insights
      link: "/blog/predictive-analytics-mastery"
    },
    {
      title: "Intelligent Security Framework
      description: "Protect your enterprise with AI-powered security systems that detect threats, prevent breaches, and ensure compliance.
      metrics: { detection: "99.7%", response: "<2min", compliance: "100%" },
      category: "Security & Compliance
      link: "/blog/intelligent-security-framework"
    },
    {
      title: "Real-Time Decision Intelligence
      description: "Make instant, informed decisions with real-time AI processing that analyzes data streams and provides actionable insights.
      metrics: { speed: "<1ms", accuracy: "99.8%", throughput: "1M+/sec" },
      category: "Decision Intelligence
      link: "/blog/real-time-decision-intelligence"
    },
    {
      title: "Sustainable AI Solutions
      description: "Implement environmentally conscious AI solutions that reduce carbon footprint while delivering exceptional performance.
      metrics: { reduction: "78%", efficiency: "3.2x", savings: "$127M" },
      category: "Sustainability
      link: "/blog/sustainable-ai-solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              📚 January 2025: Content Showcase
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Latest AI Insights & Solutions
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Explore our comprehensive collection of AI resources, case studies, and implementation guides. 
            Stay ahead with cutting-edge insights from industry leaders and successful enterprise deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {index % 6 === 0 ? '🎯' : index % 6 === 1 ? '⚡' : index % 6 === 2 ? '📊' : index % 6 === 3 ? '🛡️' : index % 6 === 4 ? '🚀' : '🌱'}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-6">
                {Object.entries(item.metrics).map(([key, value]) => (
                  <div key={key} className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="text-green-400 font-bold text-sm">{value}</div>
                    <div className="text-gray-400 text-xs capitalize">{key}</div>
                  </div>
                ))}
              </div>
              
              <a 
                href={item.link}
                className="inline-block w-full text-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                Read Article →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">Stay Updated with Latest AI Insights</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our community of AI professionals and get access to exclusive content, early insights, 
              and implementation guides that drive real business results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold text-white mb-2">Weekly Insights</h4>
                <p className="text-gray-300">Fresh AI trends and breakthroughs delivered to your inbox</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold text-white mb-2">Expert Guides</h4>
                <p className="text-gray-300">In-depth tutorials and best practices from industry leaders</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-xl font-bold text-white mb-2">Case Studies</h4>
                <p className="text-gray-300">Real-world success stories and implementation strategies</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/newsletter"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1">
                Subscribe to Newsletter
              </a>
              <a 
                href="/blog"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Browse All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025ContentShowcase;