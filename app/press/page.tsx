import React from 'react';
import { ExternalLink, Calendar, Download } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const PressPage = () => {
  const pressReleases = [
    {
      title: 'Zion Tech Group Announces $50M Series B Funding Round',
      date: '2023-12-20',
      summary: 'Funding will accelerate product development and global expansion',
      download: '/press/zion-series-b-funding.pdf'
    },
    {
      title: 'New AI Analytics Platform Launches with Advanced Predictive Capabilities',
      date: '2024-01-15',
      summary: 'Revolutionary platform transforms business intelligence with real-time AI insights',
      download: '/press/ai-analytics-platform-launch.pdf'
    },
    {
      title: 'Zion Tech Group Expands to European Markets',
      date: '2024-01-10',
      summary: 'London office opens to serve growing European client base',
      download: '/press/european-expansion.pdf'
    }
  ];

  const mediaKit = {
    logo: '/press/zion-tech-group-logo.zip',
    images: '/press/zion-tech-group-images.zip',
    factSheet: '/press/zion-tech-group-fact-sheet.pdf'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Press - Zion Tech Group | Media Resources"
        description="Access press releases, media kit, and company information for journalists and media professionals covering Zion Tech Group."
        keywords="press, media, press releases, media kit, company information, journalists"
        canonical="https://ziontechgroup.com/press"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Press Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Media resources, press releases, and company information for journalists and media professionals.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Press Releases
          </h2>
          
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                    <p className="text-gray-300 mb-3">{release.summary}</p>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(release.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <FuturisticButton
                      variant="outline"
                      size="md"
                      href={release.download}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </FuturisticButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Media Kit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Company Logo</h3>
              <p className="text-gray-300 mb-6">High-resolution logos in various formats</p>
              <FuturisticButton
                variant="outline"
                size="md"
                href={mediaKit.logo}
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </FuturisticButton>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Images</h3>
              <p className="text-gray-300 mb-6">Product screenshots and team photos</p>
              <FuturisticButton
                variant="outline"
                size="md"
                href={mediaKit.images}
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </FuturisticButton>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Fact Sheet</h3>
              <p className="text-gray-300 mb-6">Company overview and key statistics</p>
              <FuturisticButton
                variant="outline"
                size="md"
                href={mediaKit.factSheet}
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </FuturisticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Media Contact
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            For media inquiries, interview requests, or additional information, please contact our press team.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Press Contact</h3>
            <p className="text-gray-300 mb-2">Email: press@ziontechgroup.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 302 464 0950</p>
            <p className="text-gray-300">Response time: Within 24 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;