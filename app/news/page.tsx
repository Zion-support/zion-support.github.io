import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: "Zion Tech Group Announces $50M Series B Funding Round",
      date: "January 15, 2025",
      category: "Company News",
      excerpt: "Leading AI solutions provider secures funding to accelerate quantum computing and autonomous systems development.",
      image: "🚀"
    },
    {
      title: "New Quantum Computing Breakthrough Achieved",
      date: "January 10, 2025",
      category: "Technology",
      excerpt: "Our research team achieves 99.9% quantum error correction, advancing practical quantum computing applications.",
      image: "⚛️"
    },
    {
      title: "Partnership with Microsoft Azure AI",
      date: "January 5, 2025",
      category: "Partnerships",
      excerpt: "Strategic partnership announced to deliver enterprise AI solutions on Microsoft Azure platform.",
      image: "🔷"
    },
    {
      title: "AI-Powered Healthcare Solutions Launch",
      date: "December 28, 2024",
      category: "Product Launch",
      excerpt: "Revolutionary AI healthcare platform launched, improving patient outcomes by 40% in pilot programs.",
      image: "🏥"
    },
    {
      title: "Cybersecurity Excellence Award 2024",
      date: "December 20, 2024",
      category: "Awards",
      excerpt: "Zion Tech Group recognized for outstanding cybersecurity innovation and enterprise protection services.",
      image: "🛡️"
    },
    {
      title: "Autonomous Systems Division Expansion",
      date: "December 15, 2024",
      category: "Company News",
      excerpt: "New autonomous systems division launched to meet growing demand for self-managing enterprise solutions.",
      image: "🤖"
    }
  ];

  const categories = ["All", "Company News", "Technology", "Partnerships", "Product Launch", "Awards"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              News & Updates
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stay informed about the latest developments in AI, quantum computing, and technology innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === "All"
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Articles */}
          <div className="space-y-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="cyber-card hologram-card">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-4xl">
                      {article.image}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer">
                      {article.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <section className="mt-16 cyber-card hologram-card text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, insights, and updates on AI and technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-cyan-500"
              />
              <button className="cyber-button">
                Subscribe
              </button>
            </div>
          </section>

          {/* Press Contact */}
          <section className="mt-16 text-center cyber-card">
            <h2 className="text-2xl font-bold text-white mb-4">Press Inquiries</h2>
            <p className="text-gray-300 mb-6">
              For media inquiries, press releases, and interview requests, please contact our press team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:press@ziontechgroup.com"
                className="cyber-button"
              >
                📧 press@ziontechgroup.com
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;