import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, FileText, Users, Award, TrendingUp } from 'lucide-react';

const pressReleases = [
  {
    title: "Zion Tech Group Announces $50M Series B Funding Round",
    date: "2024-01-15",
    summary: "Leading AI and IT services company secures funding to expand global operations and accelerate product development.",
    category: "Funding",
    readTime: "3 min read"
  },
  {
    title: "Zion Tech Group Launches Revolutionary AI-Powered Micro SaaS Platform",
    date: "2024-01-10",
    summary: "New platform offers 25+ innovative micro SaaS solutions with real-time deployment and competitive pricing.",
    category: "Product Launch",
    readTime: "4 min read"
  },
  {
    title: "Zion Tech Group Expands to European Markets",
    date: "2023-12-20",
    summary: "Company opens new offices in London and Berlin to serve growing European client base.",
    category: "Expansion",
    readTime: "2 min read"
  },
  {
    title: "Zion Tech Group Recognized as Top AI Services Provider",
    date: "2023-12-15",
    summary: "Industry recognition for excellence in AI development and implementation services.",
    category: "Awards",
    readTime: "3 min read"
  },
  {
    title: "Zion Tech Group Partners with Leading Cloud Providers",
    date: "2023-12-01",
    summary: "Strategic partnerships with AWS, Azure, and Google Cloud to enhance service offerings.",
    category: "Partnerships",
    readTime: "2 min read"
  }
];

const mediaKit = {
  logo: "/images/logo.png",
  pressPhotos: [
    "/images/team-photo.jpg",
    "/images/office-interior.jpg",
    "/images/technology-lab.jpg"
  ],
  brandGuidelines: "/downloads/brand-guidelines.pdf",
  factSheet: "/downloads/company-fact-sheet.pdf"
};

const stats = [
  { number: "2,500+", label: "Projects Completed" },
  { number: "150+", label: "Team Members" },
  { number: "18+", label: "Years Experience" },
  { number: "65+", label: "Services Offered" }
];

export default function PressPage() {
  return (
    <Layout
      title="Press & Media - Zion Tech Group"
      description="Latest news, press releases, and media resources from Zion Tech Group. Stay updated with our company announcements and achievements."
      keywords="press releases, media kit, company news, Zion Tech Group announcements, technology news"
      canonical="https://ziontechgroup.com/press"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Press & Media
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay updated with the latest news, announcements, and achievements from Zion Tech Group. 
                Access our media resources and press materials.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Press Releases
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay informed about our latest company announcements, product launches, and industry achievements.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {pressReleases.map((release, index) => (
                <motion.article
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {release.category}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{release.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <FileText className="w-4 h-4 mr-1" />
                      <span className="text-sm">{release.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Download our media kit, brand guidelines, and high-resolution assets for your coverage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Brand Guidelines</h3>
                <p className="text-gray-600 mb-4">Complete brand guidelines and logo usage instructions.</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF
                </button>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Company Fact Sheet</h3>
                <p className="text-gray-600 mb-4">Key facts, statistics, and company information.</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF
                </button>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Press Photos</h3>
                <p className="text-gray-600 mb-4">High-resolution photos of our team and facilities.</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View Gallery
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Press */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Press Inquiries</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              For media inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:press@ziontechgroup.com" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Contact Press Team
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}