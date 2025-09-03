import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { 
  Newspaper, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Download, 
  Share2, 
  ExternalLink,
  Award,
  TrendingUp,
  Users
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Automation Platform',
      date: '2024-01-15',
      summary: 'New platform combines machine learning with business process automation to help enterprises achieve unprecedented efficiency gains.',
      category: 'Product Launch',
      readTime: '5 min read'
    },
    {
      title: 'Zion Tech Group Expands Global Operations with New European Headquarters',
      date: '2024-01-10',
      summary: 'Company opens new office in London to better serve European clients and accelerate international growth.',
      category: 'Company News',
      readTime: '3 min read'
    },
    {
      title: 'Zion Tech Group Recognized as Top AI Solutions Provider by Industry Analysts',
      date: '2024-01-05',
      summary: 'Leading technology research firm names Zion Tech Group as a top performer in AI and machine learning solutions.',
      category: 'Awards',
      readTime: '4 min read'
    },
    {
      title: 'Zion Tech Group Partners with Major Cloud Providers for Enhanced Service Delivery',
      date: '2023-12-20',
      summary: 'Strategic partnerships with AWS, Azure, and Google Cloud enable expanded service offerings and improved customer support.',
      category: 'Partnerships',
      readTime: '6 min read'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats',
      format: 'ZIP',
      size: '2.3 MB'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of leadership team',
      format: 'ZIP',
      size: '15.2 MB'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      format: 'PDF',
      size: '8.7 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality images of our products and services',
      format: 'ZIP',
      size: '12.1 MB'
    }
  ];

  const awards = [
    {
      title: 'Best AI Solutions Provider 2024',
      organization: 'Tech Industry Awards',
      date: '2024-01-15',
      description: 'Recognized for innovation in artificial intelligence and machine learning solutions'
    },
    {
      title: 'Top Cloud Services Company',
      organization: 'Cloud Computing Magazine',
      date: '2023-12-10',
      description: 'Awarded for excellence in cloud infrastructure and managed services'
    },
    {
      title: 'Fastest Growing Tech Company',
      organization: 'Business Growth Awards',
      date: '2023-11-20',
      description: 'Recognized for exceptional growth and market expansion'
    }
  ];

  return (
    <>
      <Head>
        <title>Press & Media - Zion Tech Group</title>
        <meta name="description" content="Latest news, press releases, and media resources from Zion Tech Group. Stay updated with our company announcements and achievements." />
        <meta name="keywords" content="press, media, news, press releases, company news, awards, media kit" />
      </Head>

      <ModernHeader />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Press & Media
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest news, announcements, and achievements from Zion Tech Group
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Official announcements and company news
              </p>
            </div>

            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {release.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {release.date}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>{release.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{release.title}</h3>
                  <p className="text-gray-600 mb-6">{release.summary}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Read Full Release
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Awards & Recognition
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry recognition for our innovation and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-yellow-100 rounded-lg mx-auto mb-4 w-fit">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{award.organization}</p>
                  <p className="text-gray-500 text-sm mb-4">{award.date}</p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Kit
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download our media resources for press coverage and marketing materials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mediaKit.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Download className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-500">{item.format}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.size}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Media */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Media Inquiries
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              For press inquiries, interview requests, or media partnerships, please contact our media team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Contact Media Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="mailto:press@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Email Press Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}