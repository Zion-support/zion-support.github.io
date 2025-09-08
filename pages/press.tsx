import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  ExternalLink, 
  FileText, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import Layout from '../components/Layout';

export default function Press() {
  const pressReleases = [

      readTime: '3 min read'
    }, {
      title: 'Zion Tech Group Secures $10M Series A Funding for Global Expansion',
      date: '2023-11-20', summary: 'Funding round led by leading venture capital firms to accelerate product development and international market expansion.',
      category: 'Funding', readTime: '4 min read'
    }, {
      title: 'Zion Tech Group Partners with Microsoft to Deliver Advanced Cloud Solutions', date: '2023-09-10',
      summary: 'Strategic partnership enables customers to leverage Microsoft Azure with Zion\'s AI and automation capabilities.',
      category: 'Partnership',
      readTime: '2 min read'
    }, {
      title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
      date: '2023-08-05', summary: 'Company named in TechCrunch\'s "Top 50 AI Companies to Watch" list for innovative approach to business automation.',
      category: 'Award', readTime: '2 min read'
    }
  ];

  const mediaCoverage = [

      url: '#'
    }, {
      outlet: 'Forbes',
      title: 'The Future of AI in Enterprise: Insights from Zion Tech Group', date: '2023-12-15',
      type: 'Interview', url: '#'
    }, {
      outlet: 'VentureBeat', title: 'Zion Tech Group Raises $10M to Scale AI Automation Platform',
      date: '2023-11-20', type: 'News',
      url: '#'
    }, {
      outlet: 'ZDNet',
      title: 'Microsoft Partnership Brings AI to Enterprise Cloud', date: '2023-09-10',
      type: 'News', url: '#'
    }
  ];

  const awards = [

    }, {
      title: 'Best Cloud Innovation', organization: 'Cloud Computing Awards',
      date: '2023-12-01', description: 'Awarded for breakthrough cloud automation platform'
    }, {
      title: 'Startup of the Year', organization: 'Delaware Business Times',
      date: '2023-10-15', description: 'Honored for rapid growth and market disruption'
    }
  ];

  const teamQuotes = [

    }, {
      name: 'Sarah Johnson', title: 'CTO',
      quote: 'The intersection of AI and business automation represents the next frontier in enterprise technology. We\'re proud to be at the forefront of this transformation.',
      image: '/api/placeholder/100/100'
    }
  ];

const mediaKit = {
  logo: "/images/logo.png",
  pressPhotos: [
    { title: "CEO Headshot", url: "/images/ceo-headshot.jpg" },
    { title: "Team Photo", url: "/images/team-photo.jpg" },
    { title: "Office Building", url: "/images/office-building.jpg" }
  ],
  companyFacts: [
    "Founded in 2006",
    "235+ Services & Solutions",
    "3,200+ Projects Completed",
    "180+ Expert Team Members",
    "18+ Years Experience"
  ]
};

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export default function PressPage() {
  return (
    <Layout
      title="Press & Media - Zion Tech Group"
      description="Latest news, press releases, and media resources from Zion Tech Group. Stay updated with our latest announcements and achievements."
      keywords="press, media, news, announcements, Zion Tech Group, AI services, technology solutions"
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
                Stay updated with our latest news, announcements, and achievements in AI and technology solutions.
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
                Discover our latest announcements, product launches, and company milestones.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(release.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  
                  <Link
                    href={release.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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
                Download our media resources including logos, photos, and company information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Company Facts */}
              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-600" />
                  Company Facts
                </h3>
                <ul className="space-y-2">
                  {mediaKit.companyFacts.map((fact, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Press Photos */}
              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Press Photos
                </h3>
                <ul className="space-y-2">
                  {mediaKit.pressPhotos.map((photo, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ExternalLink className="w-4 h-4 mr-2 text-blue-500" />
                      <a href={photo.url} className="hover:text-blue-600 transition-colors">
                        {photo.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  Media Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
</>
  )}