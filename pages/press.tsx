import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  FileText, 
  ExternalLink, 
  Newspaper, 
  Award, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import Layout from './components/Layout';

const pressReleases = [
  {
    date: '2024-12-15',
    title: 'Zion Tech Group Launches Revolutionary AI-Powered Micro SaaS Platform',
    summary: 'Company introduces 25+ innovative micro SaaS solutions designed to transform business operations across industries.',
    category: 'Product Launch',
    readTime: '3 min read'
  },
  {
    date: '2024-11-20',
    title: 'Zion Tech Group Expands IT Services Portfolio with 20+ New Solutions',
    summary: 'Enhanced service offerings include cloud infrastructure, cybersecurity, and enterprise digital transformation services.',
    category: 'Service Expansion',
    readTime: '4 min read'
  },
  {
    date: '2024-10-10',
    title: 'Zion Tech Group Achieves 99.9% Uptime Milestone Across All Services',
    summary: 'Company celebrates exceptional service reliability and customer satisfaction achievements.',
    category: 'Achievement',
    readTime: '2 min read'
  },
  {
    date: '2024-09-05',
    title: 'Zion Tech Group Partners with Leading Cloud Providers for Enhanced Solutions',
    summary: 'Strategic partnerships enable expanded cloud services and improved customer offerings.',
    category: 'Partnership',
    readTime: '3 min read'
  }
];

const mediaCoverage = [
  {
    outlet: 'TechCrunch',
    title: 'Zion Tech Group Revolutionizes Business Automation with AI',
    date: '2024-12-01',
    url: '#',
    excerpt: 'Leading technology solutions provider introduces cutting-edge AI services...'
  },
  {
    outlet: 'Forbes',
    title: 'How Zion Tech Group is Transforming Enterprise IT Services',
    date: '2024-11-15',
    url: '#',
    excerpt: 'Comprehensive analysis of Zion Tech Group\'s impact on enterprise technology...'
  },
  {
    outlet: 'Wired',
    title: 'The Future of Micro SaaS: Insights from Zion Tech Group',
    date: '2024-10-30',
    url: '#',
    excerpt: 'Exclusive interview with Zion Tech Group leadership on micro SaaS trends...'
  }
];

const awards = [
  {
    year: '2024',
    title: 'Best AI Solutions Provider',
    organization: 'Tech Innovation Awards',
    description: 'Recognized for excellence in AI service delivery and innovation'
  },
  {
    year: '2024',
    title: 'Top IT Services Company',
    organization: 'Business Excellence Awards',
    description: 'Awarded for outstanding IT services and customer satisfaction'
  },
  {
    year: '2023',
    title: 'Innovation in Technology',
    organization: 'Industry Leaders Summit',
    description: 'Honored for groundbreaking micro SaaS platform development'
  }
];

export default function PressPage() {
  return (
    <Layout
      title="Press & Media - Zion Tech Group | News, Awards & Media Coverage"
      description="Stay updated with the latest news, press releases, awards, and media coverage from Zion Tech Group. Learn about our innovations and achievements."
      keywords="press releases, media coverage, awards, news, Zion Tech Group, technology news"
      canonical="https://ziontechgroup.com/press"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Press & Media
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest news, press releases, awards, and media coverage 
                from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Press Releases
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed about our latest announcements, product launches, and company updates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500">{release.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                    <Link 
                      href="#" 
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See what leading publications are saying about Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mediaCoverage.map((article, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Newspaper className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="font-bold text-gray-900">{article.outlet}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <Link 
                      href={article.url} 
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Awards & Recognition
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Proud to be recognized for our excellence and innovation in technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  
                  <div className="text-2xl font-bold text-yellow-600 mb-2">
                    {award.year}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-3">
                    {award.organization}
                  </p>
                  
                  <p className="text-gray-600 text-sm">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Kit
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Download our media kit for logos, company information, and press materials.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Company Overview</h3>
                <p className="text-gray-600 text-sm mb-4">Download our company fact sheet and overview</p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF
                </Link>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Logos & Branding</h3>
                <p className="text-gray-600 text-sm mb-4">High-resolution logos and brand guidelines</p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Download ZIP
                </Link>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Executive Bios</h3>
                <p className="text-gray-600 text-sm mb-4">Biographies of our leadership team</p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF
                </Link>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Product Images</h3>
                <p className="text-gray-600 text-sm mb-4">High-quality product and service images</p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Download ZIP
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Media Inquiries
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                For media inquiries, interview requests, or additional information, 
                please contact our press team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Contact Press Team
                </Link>
                <Link 
                  href="mailto:press@ziontechgroup.com" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Email Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}