import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { latestInsights } from '../content/insights';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Product': 'text-blue-600 bg-blue-50',
      'Security': 'text-red-600 bg-red-50',
      'Cloud': 'text-cyan-600 bg-cyan-50',
      'Data': 'text-green-600 bg-green-50',
      'AI/ML': 'text-purple-600 bg-purple-50',
      'Product Analytics': 'text-orange-600 bg-orange-50',
      'Data Engineering': 'text-indigo-600 bg-indigo-50',
      'Architecture': 'text-pink-600 bg-pink-50',
    };
    return colors[category] || 'text-gray-600 bg-gray-50';
  };

  return (
    <>
      <Helmet>
        <title>Zion Insights – Latest Articles & Case Studies</title>
        <meta name="description" content="Read the latest insights, guides, and case studies from Zion Tech Group on AI, cloud, and cybersecurity." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 border border-zion-cyan/30">
              <Tag className="w-4 h-4 mr-2" />
              Latest Insights & Research
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Zion Insights
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Fresh perspectives on AI, cloud infrastructure, cybersecurity, and digital transformation from our expert team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestInsights.map((article) => {
              const categoryColors = getCategoryColor(article.category);
              return (
                <article key={article.id} className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                  <div className="p-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors}`}>
                      {article.category}
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm text-zion-slate mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readMinutes} min read
                      </div>
                    </div>
                    <Link 
                      to={`/insights/${article.id}`} 
                      className="text-zion-cyan hover:text-zion-blue-light font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read more 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Get insights in your inbox</h3>
              <p className="text-white/90 mb-6">Monthly, no spam. Trends, playbooks, and case studies from our expert team.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  aria-label="Email address"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 rounded-lg bg-white text-zion-blue font-semibold hover:bg-zion-slate-light transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Featured Content Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Content</h2>
              <p className="text-zion-slate-light">Hand-picked resources and deep dives into cutting-edge technology</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-8">
                  <div className="text-zion-cyan text-sm font-medium mb-3">CASE STUDY</div>
                  <h3 className="text-2xl font-bold text-white mb-4">How We Reduced Cloud Costs by 40% for a Fortune 500 Company</h3>
                  <p className="text-zion-slate-light mb-6">
                    A detailed walkthrough of our cloud optimization strategy that saved our client $2.3M annually while improving performance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate text-sm">15 min read</span>
                    <Link to="/case-studies/cloud-optimization" className="text-zion-cyan hover:text-zion-blue-light font-medium">
                      Read case study →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="p-8">
                  <div className="text-zion-cyan text-sm font-medium mb-3">WHITEPAPER</div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Future of AI in Enterprise: 2025 Trends Report</h3>
                  <p className="text-zion-slate-light mb-6">
                    Our comprehensive analysis of emerging AI technologies and their impact on business operations across industries.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate text-sm">Download PDF</span>
                    <Link to="/resources/ai-trends-2025" className="text-zion-cyan hover:text-zion-blue-light font-medium">
                      Download →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog;

