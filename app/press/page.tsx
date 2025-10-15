import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: "Zion Tech Group Launches Advanced AI Analytics Platform",
      date: "2024-01-15",
      summary: "Revolutionary AI-powered analytics platform transforms business intelligence with real-time insights and predictive modeling.",
      category: "Product Launch"
    },
    {
      title: "Zion Tech Group Partners with Leading Cloud Providers",
      date: "2024-01-10",
      summary: "Strategic partnerships with AWS, Microsoft Azure, and Google Cloud expand our global reach and capabilities.",
      category: "Partnership"
    },
    {
      title: "Zion Tech Group Recognized as Top AI Company 2024",
      date: "2024-01-05",
      summary: "Industry recognition for innovation in artificial intelligence and machine learning solutions.",
      category: "Award"
    },
    {
      title: "Zion Tech Group Expands to European Markets",
      date: "2023-12-20",
      summary: "European expansion brings advanced AI solutions to new markets with localized support and compliance.",
      category: "Expansion"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo",
      description: "High-resolution logos in various formats",
      download: "Download Logo Pack"
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      download: "Download Photos"
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of our AI solutions",
      download: "Download Screenshots"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand guidelines and style guide",
      download: "Download Guidelines"
    }
  ];

  const stats = [
    { number: "50+", label: "Press Mentions", icon: <div className="w-6 h-6 bg-indigo-500 rounded" /> },
    { number: "25+", label: "Awards Won", icon: <Award className="w-6 h-6" /> },
    { number: "100+", label: "Media Contacts", icon: <Users className="w-6 h-6" /> },
    { number: "99%", label: "Positive Coverage", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (<>
      <Helmet>
        <title>Press - Zion Tech Group | Media Center & News</title>
        <meta name="description" content="Latest press releases, media kit, and news from Zion Tech Group. Stay updated with our latest announcements and achievements." />
        <meta name="keywords" content="press, _media, _news, _press releases, _Zion Tech Group, _AI company, technology news" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Press Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Latest news, _press releases, and media resources from Zion Tech Group. 
              Stay updated with our latest announcements and achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Media Inquiry
                <div className="w-6 h-6 bg-blue-500 rounded" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Press Releases */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Latest Press Releases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Stay informed with our latest announcements and company news
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                      {release.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {release.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                  <p className="text-gray-300 mb-4">{release.summary}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Read More
                    <div className="w-6 h-6 bg-blue-500 rounded" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Kit */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Media Kit
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Download our media resources for press coverage and publications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaKit.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    {item.download}
                    <div className="w-6 h-6 bg-blue-500 rounded" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Media Contact
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              For media inquiries, press releases, or interview requests, please contact our media team.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-white font-semibold mb-2">Press Inquiries</h3>
                  <p className="text-cyan-400">press@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold mb-2">General Media</h3>
                  <p className="text-cyan-400">media@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Media Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
