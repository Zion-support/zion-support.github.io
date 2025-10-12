import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Download, Calendar, FileText, Image, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PressPage() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Advanced AI Solutions Platform',
      date: '2024-01-15',
      summary: 'New platform offers comprehensive AI services for businesses of all sizes.',
      category: 'Product Launch'
    },
    {
      title: 'Zion Tech Group Expands Cloud Services Portfolio',
      date: '2024-01-10',
      summary: 'Enhanced cloud migration and management services now available.',
      category: 'Service Expansion'
    },
    {
      title: 'Zion Tech Group Partners with Leading Technology Companies',
      date: '2024-01-05',
      summary: 'Strategic partnerships to enhance service delivery and innovation.',
      category: 'Partnership'
    }
  ];

  const mediaAssets = [
    {
      title: 'Company Logo Package',
      description: 'High-resolution logos in various formats',
      type: 'Images',
      icon: <Image className="w-6 h-6" />
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of leadership team',
      type: 'Images',
      icon: <Image className="w-6 h-6" />
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our platforms',
      type: 'Images',
      icon: <Image className="w-6 h-6" />
    },
    {
      title: 'Company Overview Video',
      description: '3-minute overview of our services and capabilities',
      type: 'Video',
      icon: <Video className="w-6 h-6" />
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand style guide and usage guidelines',
      type: 'Document',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Fact Sheet',
      description: 'Key company information and statistics',
      type: 'Document',
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const contactInfo = {
    email: 'press@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Press Kit - Zion Tech Group</title>
        <meta name="description" content="Press releases, media assets, and company information for journalists and media professionals." />
        <meta name="keywords" content="press kit, media assets, press releases, company information, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Press Kit
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Media resources, press releases, and company information for journalists and media professionals.
          </p>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest news and announcements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {release.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(release.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{release.title}</h3>
                <p className="text-gray-300 mb-4">{release.summary}</p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Media Assets
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download high-quality media assets for your coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAssets.map((asset, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    {asset.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{asset.title}</h3>
                    <p className="text-sm text-gray-400">{asset.type}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{asset.description}</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Media Contact
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            For media inquiries, interview requests, or additional information
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
              >
                Contact Media Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}