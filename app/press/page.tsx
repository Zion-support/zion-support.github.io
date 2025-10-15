import React from 'react';
import SEOHead from '../components/SEOHead';
const Component = () => {
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
                <ArrowRight className="w-5 h-5 ml-2" />
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
                    <ArrowRight className="w-4 h-4 ml-1" />
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
                    <ArrowRight className="w-4 h-4 ml-1" />
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
};

export default PressPage;
