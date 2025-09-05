import Head from 'next/head';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Phone, Mail, Search, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    description: "Learn the basics and get up and running quickly",
    articles: [
      "Welcome to Zion Tech Group",
      "Setting up your account",
      "First steps with our platform"
    ]
  },
  {
    title: "Account & Billing",
    icon: MessageCircle,
    description: "Manage your account, billing, and subscription",
    articles: [
      "Managing your subscription",
      "Billing and payments",
      "Account settings"
    ]
  },
  {
    title: "Technical Support",
    icon: Phone,
    description: "Get help with technical issues and troubleshooting",
    articles: [
      "Common troubleshooting",
      "API documentation",
      "Integration guides"
    ]
  }
];

const popularArticles = [
  {
    title: "How to get started with our AI solutions",
    category: "Getting Started",
    readTime: "5 min"
  },
  {
    title: "Setting up cloud migration",
    category: "Technical Support",
    readTime: "10 min"
  },
  {
    title: "Understanding your billing",
    category: "Account & Billing",
    readTime: "3 min"
  }
];

export default function Help() {
  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Find answers to your questions and get help with our services." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to your questions and get the support you need.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    className="w-full px-6 py-4 pr-12 rounded-lg text-gray-900"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Browse by Category
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {helpCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      <ul className="space-y-2">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex} className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            {article}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Popular Articles
              </h2>
              
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-4">{article.category}</span>
                          <span>{article.readTime} read</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support
                </a>
                <a
                  href="tel:+15551234567"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}