import React from 'react';
import { Calendar, ExternalLink, Download, Newspaper } from 'lucide-react';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Solutions",
      date: "2024-01-15",
      summary: "Company introduces cutting-edge AI services for enterprise clients, revolutionizing how businesses approach automation and data analytics.",
      link: "#"
    },
    {
      title: "Zion Tech Group Expands Micro SAAS Portfolio with 15 New Applications",
      date: "2024-01-10",
      summary: "The company announces significant expansion of its micro SAAS offerings, providing more specialized tools for small and medium businesses.",
      link: "#"
    },
    {
      title: "Zion Tech Group Partners with Leading Cloud Providers for Enhanced Infrastructure Services",
      date: "2024-01-05",
      summary: "Strategic partnerships established to deliver more robust and scalable cloud infrastructure solutions to clients worldwide.",
      link: "#"
    }
  ];

  const mediaKit = {
    logo: "Zion Tech Group Logo Package",
    images: "High-resolution company images",
    factSheet: "Company overview and key statistics",
    teamPhotos: "Executive team and key personnel photos"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and media resources from Zion Tech Group.
          </p>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Newspaper className="w-8 h-8 mr-3 text-cyan-400" />
            Latest Press Releases
          </h2>
          
          <div className="grid gap-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                    {release.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(release.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  {release.summary}
                </p>
                <a
                  href={release.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Download className="w-8 h-8 mr-3 text-green-400" />
            Media Kit
          </h2>
          
          <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Available Resources</h3>
                <ul className="space-y-3">
                  {Object.entries(mediaKit).map(([key, value]) => (
                    <li key={key} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="font-medium text-white">{key}:</span>
                      <span className="ml-2">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Download Media Kit</h3>
                <p className="text-gray-300 mb-4">
                  Get access to our complete media kit including logos, images, and company information.
                </p>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 font-semibold">
                  <Download className="w-5 h-5" />
                  <span>Download ZIP</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Media Contact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Press Inquiries</h3>
              <p className="text-gray-300 mb-2">
                For press inquiries, interviews, and media requests:
              </p>
              <a 
                href="mailto:press@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                press@ziontechgroup.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">General Contact</h3>
              <p className="text-gray-300 mb-2">
                For general business inquiries:
              </p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;