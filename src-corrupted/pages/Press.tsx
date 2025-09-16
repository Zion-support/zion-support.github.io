import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Calendar, Download, Mail, Phone, 
  Globe, Users, TrendingUp, Award, Star, 
  ArrowRight, ExternalLink, Search, Filter
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Press = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [searchQuery, setSearchQuery] = useState<any>('');

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in AI-Powered Healthcare Analytics',
      date: 'March 15, 2024',
      category: 'Product Launch',
      summary: 'Company introduces revolutionary AI platform that transforms healthcare data analysis and patient care optimization.',
      content: 'Zion Tech Group today announced the launch of its groundbreaking AI-powered healthcare analytics platform, designed to revolutionize how healthcare providers analyze patient data and optimize care delivery. The platform leverages advanced machine learning algorithms to provide real-time insights and predictive analytics.',
      featured: true,
      tags: ['AI', 'Healthcare', 'Product Launch', 'Innovation']
    },
    {
      id: 2,
      title: 'Zion Tech Group Secures $50M Series B Funding Round',
      date: 'March 1, 2024',
      category: 'Business',
      summary: 'Investment will accelerate product development and expand market presence in AI and cloud services.',
      content: 'Zion Tech Group has successfully closed a $50 million Series B funding round led by prominent venture capital firms. The investment will be used to accelerate product development, expand the company\'s market presence, and strengthen its position in the AI and cloud services sector.',
      featured: true,
      tags: ['Funding', 'Business', 'Growth', 'Investment']
    },
    {
      id: 3,
      title: 'Zion Tech Group Named to Forbes AI 50 List',
      date: 'February 20, 2024',
      category: 'Awards',
      summary: 'Company recognized as one of the top 50 AI companies to watch in 2024.',
      content: 'Zion Tech Group has been named to the prestigious Forbes AI 50 list, recognizing the company as one of the most promising artificial intelligence companies to watch in 2024. This recognition highlights the company\'s innovative approach to AI solutions and its growing impact in the technology sector.',
      featured: false,
      tags: ['Awards', 'AI', 'Recognition', 'Forbes']
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands European Operations',
      date: 'February 10, 2024',
      category: 'Business',
      summary: 'Company opens new office in Berlin to serve growing European market.',
      content: 'Zion Tech Group has announced the expansion of its European operations with the opening of a new office in Berlin, Germany. This strategic move will enable the company to better serve its growing European customer base and strengthen partnerships in the region.',
      featured: false,
      tags: ['Expansion', 'Europe', 'Business', 'International']
    },
    {
      id: 5,
      title: 'Zion Tech Group Launches Cybersecurity Innovation Lab',
      date: 'January 25, 2024',
      category: 'Innovation',
      summary: 'New lab focuses on developing next-generation cybersecurity solutions.',
      content: 'Zion Tech Group has launched a new Cybersecurity Innovation Lab dedicated to developing cutting-edge security solutions. The lab will bring together leading security researchers and engineers to create innovative products that address emerging cyber threats.',
      featured: false,
      tags: ['Cybersecurity', 'Innovation', 'Research', 'Security']
    },
    {
      id: 6,
      title: 'Zion Tech Group Partners with Leading Universities',
      date: 'January 15, 2024',
      category: 'Partnerships',
      summary: 'Strategic partnerships established with top research institutions.',
      content: 'Zion Tech Group has announced strategic partnerships with several leading universities to advance research in artificial intelligence, machine learning, and cloud computing. These partnerships will foster innovation and provide access to cutting-edge research.',
      featured: false,
      tags: ['Partnerships', 'Research', 'Education', 'Innovation']
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      format: 'PNG, SVG, EPS',
      size: '2.5 MB',
      downloadUrl: '/media/logo-pack.zip'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of company leadership team',
      format: 'JPG, PNG',
      size: '15.2 MB',
      downloadUrl: '/media/executive-photos.zip'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of key products and services',
      format: 'PNG, JPG',
      size: '8.7 MB',
      downloadUrl: '/media/product-screenshots.zip'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Comprehensive overview of company facts and figures',
      format: 'PDF',
      size: '1.2 MB',
      downloadUrl: '/media/fact-sheet.pdf'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      format: 'PDF',
      size: '3.8 MB',
      downloadUrl: '/media/brand-guidelines.pdf'
    },
    {
      title: 'Press Kit Bundle',
      description: 'Complete press kit with all media assets',
      format: 'ZIP',
      size: '31.4 MB',
      downloadUrl: '/media/complete-press-kit.zip'
    }
  ];

  const companyStats = [
    { label: 'Founded', value: '2020', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { label: 'Employees', value: '500+', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Countries', value: '25+', icon: Globe, color: 'from-green-500 to-emerald-500' },
    { label: 'Customers', value: '1000+', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
  ];

  const contactInfo = [
    {
      title: 'Press Inquiries',
      description: 'For media and press-related questions',
      contact: 'press@ziontechgroup.com',
      phone: '+1 (302) 464-0950 ext. 101',
      response: 'Within 4 hours'
    },
    {
      title: 'Media Relations',
      description: 'For interview requests and media opportunities',
      contact: 'media@ziontechgroup.com',
      phone: '+1 (302) 464-0950 ext. 102',
      response: 'Within 24 hours'
    },
    {
      title: 'Investor Relations',
      description: 'For financial and investor inquiries',
      contact: 'investors@ziontechgroup.com',
      phone: '+1 (302) 464-0950 ext. 103',
      response: 'Within 48 hours'
    }
  ];

  const categories = ['all', 'Product Launch', 'Business', 'Awards', 'Innovation', 'Partnerships'];

  const filteredReleases = pressReleases.filter(release => {
    if (selectedCategory !== 'all' && release.category !== selectedCategory) return false;
    if (searchQuery) {
      return release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             release.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
             release.content.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Press Room - Zion Tech Group"
        description="Stay updated with Zion Tech Group's latest news, press releases, and company information. Access media resources and contact our press team."
        keywords="press room, press releases, media kit, company news, Zion Tech Group, AI technology, cloud services"
        canonicalUrl="https://ziontechgroup.com/press"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Press
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Room
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Stay updated with our latest news, press releases, and company information. 
            Access media resources and connect with our press team.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search press releases and news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Latest news and announcements from Zion Tech Group.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  release.featured 
                    ? 'border-blue-400 bg-blue-500/10' 
                    : 'border-gray-700 hover:border-blue-400'
                }`}
              >
                {release.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30 mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Release
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{release.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {release.date}
                      </span>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                        {release.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg mb-4">{release.summary}</p>
                    <p className="text-gray-400 mb-4">{release.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {release.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Read Full Release
                  </button>
                  <button className="text-gray-400 hover:text-gray-300 font-semibold transition-colors">
                    Share
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download high-quality media assets and company resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-300 mb-4 text-sm text-center">{item.description}</p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Format:</span>
                    <span className="text-white">{item.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size:</span>
                    <span className="text-white">{item.size}</span>
                  </div>
                </div>
                
                <a
                  href={item.downloadUrl}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                >
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Contact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with our press team for media inquiries and interviews.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-3">{contact.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{contact.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-blue-400">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{contact.contact}</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{contact.phone}</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Response: {contact.response}
                  </div>
                </div>
                
                <a
                  href={`mailto:${contact.contact}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Contact Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our press distribution list to receive the latest news 
              and announcements directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Press List
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Press Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;

</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</SEO>
</any>
</any>
</div>
</div>
</div>
</div>