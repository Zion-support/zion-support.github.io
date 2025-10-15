import { useState } from "react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const posts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 Trends",
      excerpt: "Explore the latest AI trends that are transforming businesses in 2025.",
      category: "ai",
      author: "Dr. Sarah Johnson",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/images/blog/ai-trends-2025.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Learn essential cybersecurity strategies to protect your business.",
      category: "technology",
      author: "Mike Chen",
      date: "2025-01-12",
      readTime: "7 min read",
      image: "/images/blog/cybersecurity-best-practices.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide",
      excerpt: "Everything you need to know about migrating to the cloud successfully.",
      category: "technology",
      author: "Lisa Rodriguez",
      date: "2025-01-10",
      readTime: "8 min read",
      image: "/images/blog/cloud-migration-guide.jpg"
    },
    {
      id: 4,
      title: "Digital Transformation Strategies for SMBs",
      excerpt: "How small and medium businesses can leverage digital transformation.",
      category: "business",
      author: "David Kim",
      date: "2025-01-08",
      readTime: "6 min read",
      image: "/images/blog/digital-transformation-smb.jpg"
    },
    {
      id: 5,
      title: "Machine Learning in Healthcare: Real-World Applications",
      excerpt: "Discover how ML is revolutionizing healthcare delivery.",
      category: "ai",
      author: "Dr. Emily Watson",
      date: "2025-01-05",
      readTime: "9 min read",
      image: "/images/blog/ml-healthcare-applications.jpg"
    },
    {
      id: 6,
      title: "5G Technology: Transforming Industries",
      excerpt: "How 5G is reshaping various industries and creating new opportunities.",
      category: "technology",
      author: "Alex Thompson",
      date: "2025-01-03",
      readTime: "6 min read",
      image: "/images/blog/5g-transforming-industries.jpg"
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Page</h1>
          <p className="text-gray-300 text-center">Coming soon...</p>
        </div>
      </div>    </>
  );
}
