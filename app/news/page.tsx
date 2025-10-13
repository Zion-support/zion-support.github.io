import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>News - Zion Tech Group | Latest AI Technology News & Updates</title>
        <meta name="description" content="Stay updated with the latest news and announcements from Zion Tech Group. AI technology updates, company news, and industry insights." />
        <meta name="keywords" content="news, AI news, technology updates, company announcements, industry insights" />
      </Helmet>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              News & Updates
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest news and announcements from Zion Tech Group.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20">
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white mb-4">News Coming Soon</h2>
            <p className="text-gray-300 mb-8">
              We're preparing exciting news and updates about our AI solutions and company developments.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Notified
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;