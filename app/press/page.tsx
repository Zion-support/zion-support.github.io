import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ExternalLink, FileText, Award, Users, TrendingUp, Globe, Star, Download } from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Analytics Platform",
      date: "2024-01-15",
      summary: "New AI-powered analytics solution helps businesses make data-driven decisions with 40% faster insights and 60% cost reduction.",
      category: "Product Launch",
      featured: true
    },
    {
      id: 2,
      title: "Zion Tech Group Secures $10M Series A Funding Round",
      date: "2024-01-10",
      summary: "Funding will accelerate development of AI and cybersecurity solutions, expand team, and enhance customer support capabilities.",
      category: "Funding",
      featured: true
    },
    {
      id: 3,
      title: "Partnership with Microsoft Azure Expands Cloud AI Capabilities",
      date: "2024-01-05",
      summary: "Strategic partnership brings advanced AI services to enterprise customers through Microsoft's cloud platform.",
      category: "Partnership",
      featured: false
    },
    {
      id: 4,
      title: "Zion Tech Group Named Top AI Company by TechCrunch",
      date: "2023-12-20",
      summary: "Recognition highlights company's innovation in artificial intelligence and commitment to customer success.",
      category: "Award",
      featured: false
    },
    {
      id: 5,
      title: "New Cybersecurity Suite Protects Against 99.9% of Threats",
      date: "2023-12-15",
      summary: "Advanced security solution provides comprehensive protection for businesses of all sizes with real-time threat detection.",
      category: "Product Launch",
      featured: false
    },
    {
      id: 6,
      title: "Zion Tech Group Expands to European Markets",
      date: "2023-12-01",
      summary: "International expansion brings AI and IT solutions to European businesses with local support and compliance.",
      category: "Expansion",
      featured: false
    }
  ];

  const mediaKit = {
    logo: {
      primary: "Zion Tech Group Primary Logo",
      secondary: "Zion Tech Group Secondary Logo",
      icon: "Zion Tech Group Icon"
    },
    images: [
      "Team photos",
      "Office locations",
      "Product screenshots",
      "Technology infrastructure"
    ],
    documents: [
      "Company fact sheet",
      "Executive biographies",
      "Product specifications",
      "Case studies"
    ]
  };

  const awards = [
    {
      title: "Best AI Company 2024",
      organization: "TechCrunch",
      date: "2024-01-15",
      description: "Recognized for innovation in artificial intelligence and machine learning solutions"
    },
    {
      title: "Top Cybersecurity Solution",
      organization: "Cybersecurity Excellence Awards",
      date: "2023-12-10",
      description: "Awarded for outstanding cybersecurity innovation and customer protection"
    },
    {
      title: "Fastest Growing Tech Company",
      organization: "Inc. 5000",
      date: "2023-11-20",
      description: "Ranked #47 on the Inc. 5000 list of fastest-growing private companies"
    },
    {
      title: "Best Workplace for Innovation",
      organization: "Great Place to Work",
      date: "2023-10-15",
      description: "Recognized for fostering innovation and employee creativity"
    }
  ];

  const stats = [
    { number: "50+", label: "Press Mentions", icon: <FileText className="w-6 h-6" /> },
    { number: "10M+", label: "Media Reach", icon: <Globe className="w-6 h-6" /> },
    { number: "95%", label: "Positive Coverage", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Press Support", icon: <Users className="w-6 h-6" /> }
  ];

  const categories = ["All", "Product Launch", "Funding", "Partnership", "Award", "Expansion"];

  return (
    <>
      <Helmet>
        <title>Press - Zion Tech Group | News & Media</title>
        <meta
          name="description"
          content="Stay updated with the latest news, press releases, and media coverage about Zion Tech Group. Download our media kit and connect with our press team."
        />
        <meta
          name="keywords"
          content="press, news, media, press releases, Zion Tech Group news, AI company news, technology press"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Press &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Media
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and media coverage about 
              Zion Tech Group and our innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#press-releases"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                View Press Releases
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#media-kit"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Download Media Kit
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section id="press-releases" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Press Releases
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Latest news and announcements from Zion Tech Group
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === "All"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {pressReleases.map((release) => (
                <div
                  key={release.id}
                  className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                    release.featured ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  {release.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {release.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(release.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {release.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/press/${release.id}`}
                      className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Awards & Recognition
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry recognition for our innovation and excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <Award className="w-8 h-8 text-yellow-400 mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {award.title}
                        </h3>
                        <p className="text-sm text-cyan-400">{award.organization}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{award.description}</p>
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3 h-3 mr-2" />
                      {new Date(award.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section id="media-kit" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Media Kit
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download our media resources for press coverage and publications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-4">Logos & Branding</h3>
                <ul className="space-y-2 mb-6">
                  {Object.entries(mediaKit.logo).map(([key, value]) => (
                    <li key={key} className="flex items-center text-sm text-gray-300">
                      <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                      {value}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-4">Images</h3>
                <ul className="space-y-2 mb-6">
                  {mediaKit.images.map((image, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                      {image}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-4">Documents</h3>
                <ul className="space-y-2 mb-6">
                  {mediaKit.documents.map((doc, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Press Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact Our Press Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                For media inquiries, interview requests, or press materials, 
                please contact our press team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Press Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:press@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  press@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}