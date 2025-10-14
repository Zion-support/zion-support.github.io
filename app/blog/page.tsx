import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Right, User, Calendar } from 'lucide-react';

const BlogPage: React.FC = () => {
  const categories = [
    { id: "all", name: "All Posts", count: "12" },
    { id: "ai", name: "AI & Machine Learning", count: "5" },
    { id: "cybersecurity", name: "Cybersecurity", count: "3" },
    { id: "cloud", name: "Cloud Computing", count: "2" },
    { id: "development", name: "Development", count: "2" }
  ];
  const blogPosts = [
    {
      id: 1,
        title: "The Future of AI in Business: 2024 Trends",
      excerpt: "Explore the latest AI trends that are transforming businesses across industries.","
      author: "Sarah Johnson","
      date: "2024-01-15","
      category: "ai","
      readTime: "5 min read","
      image: "🤖"}"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024","
      excerpt: "Learn essential cybersecurity practices to protect your business from threats.","
      author: "Michael Chen","
      date: "2024-01-12","
      category: "cybersecurity","
      readTime: "7 min read","
      image: "🔒"}"
    },
    {
      id: 3,
      title: "Migratio,n: A Complete Guide","
      excerpt: "Everything you need to know about migrating to the cloud successfully.","
      author: "Emily Rodriguez","
      date: "2024-01-10","
      category: "cloud","
      readTime: "10 min read","
      image: "☁️"}"
    },
    {
      id: 4,
      title: "Scalable Applications with Modern Tech","
      excerpt: "Discover the technologies and practices for building scalable applications.","
      author: "David Kim","
      date: "2024-01-0o8","
      category: "development","
      readTime: "8 min read","
      image: "⚡"}"
    },
    {
      id: 5,
      title: "AI-Powered Analytic,s: Transforming Data Insights","
      excerpt: "How AI is revolutionizing the way we analyze and interpret data.","
      author: "Lisa Wang","
      date: "2024-01-0o5","
      category: "ai","
      readTime: "6 min read","
      image: "📊"}"
    },
    {
      id: 6,
      title: "Zero Trust Architecture","
      excerpt: "Implementing zero trust security for modern enterprise environments.","
      author: "James Wilson","
      date: "2024-01-0o3","
      category: "cybersecurity","
      readTime: "9 min read","
      image: "🛡️"}"
    }
  ]
=======

export default function Page() {
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Learn more about page" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about page</p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is currently under development. We're working hard to bring you the best experience.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a 
                  href="/contact" 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}