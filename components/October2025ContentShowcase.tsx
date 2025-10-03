import { Link } from 'react-router-dom';

export default function October2025ContentShowcase() {
  const articles = [
    {
      title: 'AI Agent Orchestration: Enterprise Multi-Agent Systems',
      description: '89% automation, $45M savings with coordinated AI agents',
      link: '/blog/ai-agents-enterprise-orchestration-oct-2025',
      icon: '🤖',
      gradient: 'from-blue-500 to-purple-600',
      stats: ['89% Automation', '$45M Savings', '94% Accuracy']
    },
    {
      title: 'Real-Time AI Streaming Inference',
      description: 'Sub-10ms latency, 1M+ requests/second at scale',
      link: '/blog/real-time-ai-streaming-inference-2025',
      icon: '⚡',
      gradient: 'from-cyan-500 to-blue-600',
      stats: ['Sub-10ms Latency', '1M+ Req/Sec', '99.99% Uptime']
    },
    {
      title: 'AI Safety & Alignment Framework',
      description: '87% incident reduction, $34M in avoided costs',
      link: '/blog/ai-safety-alignment-enterprise-2025',
      icon: '🛡️',
      gradient: 'from-red-500 to-purple-600',
      stats: ['87% Fewer Incidents', '$34M Saved', '99.2% Compliance']
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 my-12 rounded-3xl">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              New Content • October 2025
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            🚀 Latest AI Breakthroughs
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Three game-changing articles on Enterprise AI, Real-Time Inference, and AI Safety
          </p>
        </div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
            >
              {/* Icon */}
              <div className={`text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {article.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {article.description}
              </p>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                {article.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${article.gradient}`}></div>
                    <span className="text-xs text-gray-200 font-medium">{stat}</span>
                  </div>
                ))}
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                <span>Read Article</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Explore All Articles</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              <span>Implement These Solutions</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
            Join leading enterprises leveraging these cutting-edge AI solutions. Schedule a consultation to discuss your AI transformation roadmap.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}