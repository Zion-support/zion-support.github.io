import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Globe, Users, Award, TrendingUp } from 'lucide-react';

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
      title: "Zion Tech Group Recognized as Top AI Solutions Provider",
      date: "2024-01-05",
      summary: "Industry recognition for excellence in AI innovation and customer satisfaction across multiple sectors.",
      category: "Award"
    }
  ];

  const mediaCoverage = [
    {
      title: "TechCrunch: Zion Tech Group's AI Revolution",
      date: "2024-01-12",
      summary: "How Zion Tech Group is transforming enterprise AI with cutting-edge solutions.",
      source: "TechCrunch",
      url: "#"
    },
    {
      title: "Forbes: The Future of AI in Business",
      date: "2024-01-08",
      summary: "Zion Tech Group featured in Forbes' comprehensive look at AI's impact on modern business.",
      source: "Forbes",
      url: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Press & Media - Zion Tech Group | Latest News & Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest news, press releases, and media coverage from Zion Tech Group. Discover our innovations in AI and technology."
        />
        <meta
          name="keywords"
          content="press releases, media coverage, news, AI technology, Zion Tech Group, announcements"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Press & Media
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and media coverage from Zion Tech Group.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">{release.date}</span>
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{release.title}</h3>
                    <p className="text-gray-300 mb-4">{release.summary}</p>
                    <Link
                      to="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Media Coverage</h2>
              <div className="space-y-6">
                {mediaCoverage.map((article, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-gray-400">{article.date}</span>
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">
                        {article.source}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{article.title}</h3>
                    <p className="text-gray-300 mb-4">{article.summary}</p>
                    <Link
                      to={article.url}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-cyan-400">Media Kit</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Download our media kit for logos, images, and company information for press use.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Download Media Kit
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                Contact Media Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
