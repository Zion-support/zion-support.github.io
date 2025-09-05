import React from 'react';
import Layout from '../components/Layout';
import { Calendar, ExternalLink, FileText, Users, Award } from 'lucide-react';

const pressReleases = [
  {
    title: 'Zion Tech Group Announces Major AI Breakthrough in Healthcare',
    date: '2024-01-15',
    summary: 'Revolutionary AI technology improves patient diagnosis accuracy by 40%',
    category: 'AI Innovation'
  },
  {
    title: 'Company Expands Global Operations with New European Office',
    date: '2024-01-10',
    summary: 'Strategic expansion brings advanced technology solutions to European markets',
    category: 'Company News'
  },
  {
    title: 'Zion Tech Group Recognized as Top Technology Provider',
    date: '2024-01-05',
    summary: 'Industry recognition for excellence in digital transformation services',
    category: 'Awards'
  },
  {
    title: 'New Partnership with Leading Cloud Provider',
    date: '2023-12-20',
    summary: 'Strategic partnership enhances cloud computing capabilities',
    category: 'Partnerships'
  }
];

const mediaKit = [
  {
    title: 'Company Logo Package',
    description: 'High-resolution logos in various formats',
    icon: FileText
  },
  {
    title: 'Executive Photos',
    description: 'Professional headshots of leadership team',
    icon: Users
  },
  {
    title: 'Company Fact Sheet',
    description: 'Key facts and statistics about Zion Tech Group',
    icon: FileText
  },
  {
    title: 'Awards & Recognition',
    description: 'Complete list of industry awards and certifications',
    icon: Award
  }
];

export default function PressPage() {
  return (
    <Layout
      title="Press & Media - Zion Tech Group"
      description="Latest news, press releases, and media resources from Zion Tech Group. Stay updated with our latest developments."
      keywords="press, media, news, press releases, company updates, Zion Tech Group news"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Press & Media
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Stay updated with the latest news, announcements, and developments
                from Zion Tech Group.
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Official announcements and news from Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {release.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(release.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download our media kit and resources for journalists and media professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Media Inquiries
              </h2>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                For media inquiries, interview requests, or additional information,
                please contact our press team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Press Team
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Download Media Kit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}