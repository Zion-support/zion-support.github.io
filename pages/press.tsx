import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Calendar, ExternalLink, Download, Mail, Phone, MapPin, Award, Users, Globe, TrendingUp } from 'lucide-react';

const pressReleases = [
  {
    title: "Zion Tech Group Launches Revolutionary AI Platform for Enterprise Solutions",
    date: "January 15, 2024",
    summary: "New AI platform delivers 40% efficiency improvements for enterprise clients",
    category: "Product Launch",
    featured: true
  },
  {
    title: "Zion Tech Group Expands Global Operations with New European Office",
    date: "December 10, 2023",
    summary: "Company opens new headquarters in London to serve European markets",
    category: "Company News",
    featured: false
  },
  {
    title: "Zion Tech Group Recognized as Top AI Solutions Provider by Industry Awards",
    date: "November 22, 2023",
    summary: "Company receives prestigious recognition for innovation in AI technology",
    category: "Awards",
    featured: false
  },
  {
    title: "Zion Tech Group Partners with Leading Cloud Providers for Enhanced Services",
    date: "October 5, 2023",
    summary: "Strategic partnerships with AWS, Azure, and GCP to expand cloud offerings",
    category: "Partnerships",
    featured: false
  }
];

const mediaKit = {
  logo: "/images/logo.png",
  pressPhotos: [
    "/images/team-photo-1.jpg",
    "/images/office-exterior.jpg",
    "/images/technology-lab.jpg"
  ],
  companyFactSheet: "/downloads/company-fact-sheet.pdf",
  executiveBios: "/downloads/executive-bios.pdf"
};

const contactInfo = [
  {
    icon: Mail,
    title: "Press Inquiries",
    value: "press@ziontechgroup.com",
    description: "For media and press inquiries"
  },
  {
    icon: Phone,
    title: "Media Contact",
    value: "+1 302 464 0950",
    description: "Direct line for urgent press matters"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "364 E Main St STE 1008\nMiddletown DE 19709",
    description: "Our main office location"
  }
];

export default function PressPage() {
  return (
    <>
      <Head>
        <title>Press & Media - Zion Tech Group | News & Press Releases</title>
        <meta name="description" content="Stay updated with the latest news, press releases, and media resources from Zion Tech Group." />
        <meta name="keywords" content="press, media, news, press releases, Zion Tech Group, AI technology, enterprise solutions" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FileText className="w-16 h-16 mx-auto mb-6" />
                <h1 className="text-5xl font-bold mb-6">
                  Press & Media
                </h1>
                <p className="text-xl text-blue-100 mb-4">
                  Stay updated with the latest news and announcements from Zion Tech Group
                </p>
                <p className="text-sm text-blue-200">
                  Your source for company news, press releases, and media resources
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Press Release */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Latest News
                </h2>
                
                {pressReleases.filter(release => release.featured).map((release, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-blue-600">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {release.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {release.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {release.summary}
                    </p>
                    <div className="flex space-x-4">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Read More
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* All Press Releases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  All Press Releases
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {pressReleases.map((release, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {release.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {release.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {release.summary}
                      </p>
                      <div className="flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                          Read More
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Media Resources
                </h2>
                <p className="text-xl text-gray-600">
                  Download our media kit and resources for journalists and media professionals
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Company Assets</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Company Fact Sheet</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Executive Bios</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">Company Logo Pack</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Press Photos</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Photo {i}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Download All Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-blue-50 rounded-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Media Contact
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  For press inquiries, media requests, or interview opportunities, 
                  please contact our media relations team.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="text-center">
                      <contact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                      <p className="text-gray-600 mb-1">{contact.value}</p>
                      <p className="text-sm text-gray-500">{contact.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <TrendingUp className="w-12 h-12 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Subscribe to our press releases and company updates
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Media Team
                  </a>
                  <a
                    href="/about"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    Learn More About Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}