import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Tag, Search, Clock, BookOpen, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping the business landscape and discover what to expect in 2024.",
      content: "Artificial Intelligence continues to revolutionize how businesses operate, from automating routine tasks to providing deep insights into customer behavior. In 2024, we're seeing unprecedented adoption of AI technologies across industries...",
      author: "Dr. Sarah Chen",
      authorRole: "AI Research Director",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      tags: ["AI", "Business", "Technology", "Future"],
      image: "/images/blog/ai-business-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Micro SAAS Solutions: The New Era of Business Software",
      excerpt: "Discover how micro SAAS solutions are changing the way businesses approach software and automation.",
      content: "The software industry is experiencing a paradigm shift with the rise of micro SAAS solutions. These focused, specialized tools are replacing monolithic software suites...",
      author: "Michael Rodriguez",
      authorRole: "Product Manager",
      publishDate: "2024-01-12",
      readTime: "6 min read",
      category: "Business",
      tags: ["SAAS", "Business", "Software", "Automation"],
      image: "/images/blog/micro-saas-solutions.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Businesses",
      excerpt: "Essential cybersecurity strategies to protect your business in an increasingly digital world.",
      content: "With cyber threats becoming more sophisticated, businesses must adopt comprehensive security strategies. Here are the essential practices every organization should implement...",
      author: "Alex Thompson",
      authorRole: "Security Expert",
      publishDate: "2024-01-10",
      readTime: "10 min read",
      category: "Security",
      tags: ["Cybersecurity", "Security", "Business", "Protection"],
      image: "/images/blog/cybersecurity-best-practices.jpg",
      featured: false
    },
    {
      id: 4,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "How 5G technology is revolutionizing industries and creating unprecedented opportunities for innovation.",
      content: "5G technology represents more than just faster internet speeds. It's a foundational technology that enables new applications and business models...",
      author: "Dr. Lisa Wang",
      authorRole: "5G Technology Specialist",
      publishDate: "2024-01-08",
      readTime: "7 min read",
      category: "Technology",
      tags: ["5G", "Technology", "Innovation", "Connectivity"],
      image: "/images/blog/5g-technology.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth.",
      content: "In today's data-driven world, the ability to analyze and interpret data is crucial for business success. This comprehensive guide covers everything you need to know...",
      author: "David Kim",
      authorRole: "Data Analytics Lead",
      publishDate: "2024-01-05",
      readTime: "9 min read",
      category: "Analytics",
      tags: ["Data Analytics", "Business Intelligence", "Data", "Growth"],
      image: "/images/blog/data-analytics.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Cloud Migration: A Step-by-Step Guide for Businesses",
      excerpt: "Everything you need to know about migrating your business to the cloud safely and efficiently.",
      content: "Cloud migration is a critical decision that can transform your business operations. This guide provides a comprehensive roadmap for successful cloud adoption...",
      author: "Jennifer Martinez",
      authorRole: "Cloud Solutions Architect",
      publishDate: "2024-01-03",
      readTime: "12 min read",
      category: "Cloud",
      tags: ["Cloud Migration", "Cloud", "Business", "Technology"],
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    }
  ];

  const categories = ["all", "AI & Technology", "Business", "Security", "Technology", "Analytics", "Cloud"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Professional blog services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
          <p className="text-lg text-gray-300 mb-8">Professional blog services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
            </button>
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
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
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
