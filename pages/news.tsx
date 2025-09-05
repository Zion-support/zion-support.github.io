import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import Link from 'next/link',
import Layout from '../components/Layout',
import { Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react',
,
const newsCategories = [,
  { name: 'Company News', count: 12, color: 'bg-blue-100 text-blue-800' ,},;
  { name: 'Product Updates', count: 8, color: 'bg-green-100 text-green-800' ,},;
  { name: 'Industry Insights', count: 15, color: 'bg-purple-100 text-purple-800' ,},;
  { name: 'Partnerships', count: 5, color: 'bg-orange-100 text-orange-800' ,};
],
,
const featuredNews = [,
  {,
    id: 1,;
    title: 'Zion Tech Group Launches Revolutionary AI-Powered Analytics Platform',;
    excerpt: 'Our new AI analytics platform transforms how businesses process and understand their data, delivering insights 10x faster than traditional methods.',;
    category: 'Product Updates',;
    author: 'Sarah Chen',;
    date: '2024-01-15',;
    readTime: '5 min read',;
    image: '/api/placeholder/600/300',;
    featured: true,
  ,},;
  {,
    id: 2,;
    title: 'Partnership with Leading Cloud Provider Announced',;
    excerpt: 'We\'re excited to announce our strategic partnership with a major cloud provider to enhance our service offerings.',;
    author: 'Michael Rodriguez',;
    date: '2024-01-12',;
    readTime: '3 min read',;
    image: '/api/placeholder/600/300',;
    featured: true,
  ,},;
  {,
    id: 3,;
    title: 'Industry Report: AI Adoption Trends in 2024',;
    excerpt: 'Our latest research reveals key trends in AI adoption across various industries and what it means for businesses.',;
    category: 'Industry Insights',;
    author: 'Dr. Emily Johnson',;
    date: '2024-01-10',;
    readTime: '7 min read',;
    image: '/api/placeholder/600/300',;
    featured: false,
  ,};
],
,
const recentNews = [,
  {,
    id: 4,;
    title: 'New Office Opening in Silicon Valley',;
    excerpt: 'Expanding our presence on the West Coast to better serve our growing client base.',;
    category: 'Company News',;
    author: 'David Kim',;
    date: '2024-01-08',;
    readTime: '2 min read',
  ,},;
  {,
    id: 5,;
    title: 'Cybersecurity Best Practices for 2024',;
    excerpt: 'Essential security measures every business should implement to protect against evolving threats.',;
    category: 'Industry Insights',;
    author: 'Alex Thompson',;
    date: '2024-01-05',;
    readTime: '6 min read',
  ,},;
  {,
    id: 6,;
    title: 'Client Success Story: 50% Efficiency Improvement',;
    excerpt: 'How we helped a manufacturing company streamline their operations with our AI solutions.',;
    category: 'Company News',;
    author: 'Lisa Wang',;
    date: '2024-01-03',;
    readTime: '4 min read',
  ,};
],
,
export default function News() {,
  return (,
    <Layout,
      title="News & Updates - Zion Tech Group",
      description="Stay updated with the latest news, product updates, and industry insights from Zion Tech Group.",
      keywords="news, updates, company news, product updates, industry insights, partnerships, Zion Tech Group",
    >,
      <Head>,
        <title>News & Updates - Zion Tech Group</title>,
        <meta name="description" content="Stay updated with the latest news, product updates, and industry insights from Zion Tech Group." />,
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold mb-6">,
                News & Updates,
              </h1>,
              <p className="text-xl md:text-2xl mb-8 text-blue-100">,
                Stay informed with the latest news, product updates,;
                and insights from Zion Tech Group.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Categories */};
        <section className="py-12 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="flex flex-wrap justify-center gap-4">,
              {newsCategories.map((category) => (,
                <span,
                  key={category.name};
                  className={`px-4 py-2 rounded-full text-sm font-medium ${category.color}`};
                >,
                  {category.name} ({category.count}),
                </span>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Featured News */};
        <section className="py-16 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Featured Stories,
              </h2>,
              <p className="text-lg text-gray-600">,
                Our most important updates and announcements,
              </p>,
            </motion.div>,
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">,
              {featuredNews.map((article, index) => (,
                <motion.article,
                  key={article.id};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover: shadow-xl transition-shadow",
                >,
                  <div className="h-48 bg-gray-200 flex items-center justify-center">,
                    <span className="text-gray-400">Article Image</span>,
                  </div>,
                  <div className="p-6">,
                    <div className="flex items-center mb-3">,
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">,
                        {article.category,};
                      </span>,
                      <span className="ml-2 text-sm text-gray-500">{article.readTime}</span>,
                    </div>,
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>,
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>,
                    <div className="flex items-center justify-between">,
                      <div className="flex items-center text-sm text-gray-500">,
                        <User className="w-4 h-4 mr-1" />,
                        {article.author};
                        <Calendar className="w-4 h-4 ml-3 mr-1" />,
                        {new Date(article.date).toLocaleDateString()};
                      </div>,
                      <Link href="#" className="text-blue-600 hover: text-blue-800 font-medium flex items-center">,
                        Read More <ArrowRight className="w-4 h-4 ml-1" />,
                      </Link>,
                    </div>,
                  </div>,
                </motion.article>,
              )),};
            </div>,
          </div>,
        </section>,
        {/* Recent News */};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Recent Updates,
              </h2>,
              <p className="text-lg text-gray-600">,
                Latest news and announcements,
              </p>,
            </motion.div>,
            <div className="max-w-4xl mx-auto space-y-6">,
              {recentNews.map((article, index) => (,
                <motion.article,
                  key={article.id};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="bg-white rounded-lg shadow-md p-6 hover: shadow-lg transition-shadow",
                >,
                  <div className="flex items-start justify-between">,
                    <div className="flex-1">,
                      <div className="flex items-center mb-2">,
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">,
                          {article.category,};
                        </span>,
                        <span className="ml-2 text-sm text-gray-500">{article.readTime}</span>,
                      </div>,
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>,
                      <p className="text-gray-600 mb-3">{article.excerpt}</p>,
                      <div className="flex items-center text-sm text-gray-500">,
                        <User className="w-4 h-4 mr-1" />,
                        {article.author};
                        <Calendar className="w-4 h-4 ml-3 mr-1" />,
                        {new Date(article.date).toLocaleDateString()};
                      </div>,
                    </div>,
                    <Link href="#" className="ml-4 text-blue-600 hover: text-blue-800">,
                      <ArrowRight className="w-5 h-5" />,
                    </Link>,
                  </div>,
                </motion.article>,
              )),};
            </div>,
          </div>,
        </section>,
        {/* Newsletter Signup */};
        <section className="py-16 bg-blue-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>,
            <p className="text-xl mb-8 text-blue-100">,
              Subscribe to our newsletter for the latest news and updates.,
            </p>,
            <div className="max-w-md mx-auto flex gap-4">,
              <input,
                type="email",
                placeholder="Enter your email",
                className="flex-1 px-4 py-3 rounded-lg text-gray-900",
              />,
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover: bg-blue-50 transition-colors">,
                Subscribe,
              </button>,
            </div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};