import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const articles = [
  {
    id: 1,
    title: 'Zion Tech Group Launches New AI Platform',
    excerpt: 'Our latest AI platform revolutionizes business automation with advanced machine learning capabilities.',
    date: '2024-01-15',
    readTime: '5 min',
    category: 'Product Updates'
  },
  {
    id: 2,
    title: 'Partnership with Leading Cloud Provider',
    excerpt: 'We announce a strategic partnership to enhance our cloud solutions and expand our service offerings.',
    date: '2024-01-10',
    readTime: '3 min',
    category: 'Partnerships'
  },
  {
    id: 3,
    title: 'Industry Recognition for Innovation',
    excerpt: 'Zion Tech Group receives prestigious award for innovation in digital transformation solutions.',
    date: '2024-01-05',
    readTime: '4 min',
    category: 'Awards'
  }
];

export default function News() {
  return (
    <Layout>
      <Head>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group." />
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
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Stay updated with the latest news, announcements, and insights from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {articles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h2>
                    <p className="text-gray-600 mb-6">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} read
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}