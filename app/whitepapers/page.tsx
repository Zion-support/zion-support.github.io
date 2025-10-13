import React from 'react';
import { Download, FileText, Calendar, User } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const WhitepapersPage = () => {
  const whitepapers = [
    {
      title: 'The Future of AI in Business: A Comprehensive Guide',
      description: 'Explore how artificial intelligence is transforming business operations and what it means for your organization.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      pages: '24',
      download: '/whitepapers/ai-business-future.pdf',
      featured: true
    },
    {
      title: 'Cloud Security Best Practices for Enterprise',
      description: 'Learn essential security measures for protecting your cloud infrastructure and data.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      pages: '18',
      download: '/whitepapers/cloud-security-best-practices.pdf',
      featured: false
    },
    {
      title: '5G Technology and Its Impact on IoT',
      description: 'Understanding how 5G networks will revolutionize Internet of Things applications.',
      author: 'Michael Chen',
      date: '2024-01-05',
      pages: '22',
      download: '/whitepapers/5g-iot-impact.pdf',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="White Papers - Zion Tech Group | Industry Insights"
        description="Download our comprehensive white papers on AI, cloud computing, cybersecurity, and emerging technologies. Get expert insights and industry analysis."
        keywords="white papers, research papers, AI insights, cloud computing, cybersecurity, technology trends, industry analysis"
        canonical="https://ziontechgroup.com/whitepapers"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              White Papers
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access our comprehensive research and insights on the latest trends in AI, cloud computing, and emerging technologies.
          </p>
        </div>
      </section>

      {/* Featured White Paper */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {whitepapers.filter(paper => paper.featured).map((paper, index) => (
            <div key={index} className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      Featured
                    </span>
                    <span className="text-cyan-400 font-medium">Latest Research</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{paper.title}</h2>
                  <p className="text-xl text-gray-300 mb-6">{paper.description}</p>
                  <div className="flex items-center text-gray-400 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-6">{paper.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-6">{new Date(paper.date).toLocaleDateString()}</span>
                    <FileText className="w-4 h-4 mr-2" />
                    <span>{paper.pages} pages</span>
                  </div>
                  <FuturisticButton
                    variant="primary"
                    size="lg"
                    href={paper.download}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </FuturisticButton>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Featured Research</h4>
                    <p className="text-gray-300">Click "Download PDF" to access this comprehensive white paper.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse through our complete collection of research papers and industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {paper.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{paper.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{paper.author}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(paper.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FileText className="w-4 h-4 mr-2" />
                    <span>{paper.pages} pages</span>
                  </div>
                </div>
                
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  href={paper.download}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to get notified about new white papers and research insights.
          </p>
          <FuturisticButton
            variant="primary"
            size="lg"
            to="/contact"
          >
            Subscribe to Updates
          </FuturisticButton>
        </div>
      </section>
    </div>
  );
};

export default WhitepapersPage;