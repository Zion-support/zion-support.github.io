import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Zion Tech Group Launches Revolutionary AI Platform",
    excerpt: "Our new AI platform revolutionizes how businesses approach artificial intelligence, offering unprecedented capabilities and ease of use.",
    author: "Dr. Sarah Chen",
    date: "2024-01-20",
    category: "Product Launch",
    readTime: "3 min read",
    image: "/api/placeholder/600/300",
    featured: true
  },
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className="text-4xl font-bold text-white mb-4" > Media Inquiries </h2> <p className="text-xl text-gray-300 mb-8" > For press inquiries, media interviews, or additional information;
please contact our communications team. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105" > Contact Media Team <Mic className="ml-2 w-5 h-5" /> </Link> <a href="/press" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300" > Press Kit </Link> </div> </motion.div> </div> </section> </div> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
    id: 6,
    title: "IT Infrastructure Modernization Guide",
    excerpt: "A comprehensive guide to modernizing your IT infrastructure for better performance and security.",
    author: "David Kim",
    date: "2024-01-08",
    category: "IT Services",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    featured: false
  }
];

const categories = [
  { name: "All", count: newsArticles.length },
  { name: "Product Launch", count: newsArticles.filter(article => article.category === "Product Launch").length },
  { name: "Partnership", count: newsArticles.filter(article => article.category === "Partnership").length },
  { name: "Awards", count: newsArticles.filter(article => article.category === "Awards").length },
  { name: "Security", count: newsArticles.filter(article => article.category === "Security").length },
  { name: "IT Services", count: newsArticles.filter(article => article.category === "IT Services").length }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>News | Zion Tech Group</title>
        <meta name="description" content="Professional news solutions for your business." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional news solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300">
              Professional solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300">
              Advanced technology solutions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300">
              Scalable and reliable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}