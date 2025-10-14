import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, User } from 'lucide-react'
const BlogPage: React.FC = () => {
  const categories = [}
    { id: "all", name: "All Posts", count: 12 },""
    { id: "ai", name: "AI & Machine Learning", count: 5 },""
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },""
    { id: "cloud", name: "Computing", count: 2 },""
    { id: "development", name: "Development", count: 2 }
  ]
  const blogPosts = [
    {

"
      id: 1,""
      title: "The Future of AI in Business: 2024 Trends",""
      excerpt: "Explore the latest AI trends that are transforming businesses across industries.",""
      author: "Sarah Johnson",""
      date: "2024-01-15",""}
}
      category: "ai",""}
}
      readTime: "5 min read",""}
      image: "🤖"}
    },
    {

"
      id: 2,""
      title: "Cybersecurity Best Practices for 2024",""
      excerpt: "Learn essential cybersecurity practices to protect your business from threats.",""
      author: "Michael Chen",""
      date: "2024-01-12",""}
}
      category: "cybersecurity",""}
}
      readTime: "7 min read",""}
      image: "🔒"}
    },
    {

"
      id: 3,""
      title: "Migration: A Complete Guide",""
      excerpt: "Everything you need to know about migrating to the cloud successfully.",""
      author: "Emily Rodriguez",""
      date: "2024-01-10",""}
}
      category: "cloud",""}
}
      readTime: "10 min read",""}
      image: "☁️"}
    },
    {

"
      id: 4,""
      title: "Scalable Applications with Modern Tech",""
      excerpt: "Discover the technologies and practices for building scalable applications.",""
      author: "David Kim",""
      date: "2024-01-08",""}
}
      category: "development",""}
}
      readTime: "8 min read",""}
      image: "⚡"}
    },
    {

"
      id: 5,""
      title: "AI-Powered Analytics: Transforming Data Insights",""
      excerpt: "How AI is revolutionizing the way we analyze and interpret data.",""
      author: "Lisa Wang",""
      date: "2024-01-05",""}
}
      category: "ai",""}
}
      readTime: "6 min read",""}
      image: "📊"}
    },
    {

"
      id: 6,""
      title: "Zero Trust Architecture",""
      excerpt: "Implementing zero trust security for modern enterprise environments.",""
      author: "James Wilson",""
      date: "2024-01-03",""}
}
      category: "cybersecurity",""}
}
      readTime: "9 min read",""}
      image: "🛡️"}
    }
  ]
  return (
    <>
      <Helmet>"
        <title>Blog - AI & IT Insights | Zion Tech Group</title>""
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and technology trends from Zion Tech Group experts." />""
        <meta name="keywords" content="blog, AI insights, IT trends, cybersecurity, cloud computing, technology news" />
      </Helmet>"
""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        {/* Hero Section */}""
        <section className="relative py-20 px-4">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">"
              Tech""
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></span>
                Blog,
              </span>"
            </h1>""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, cybersecurity, 
              and technology trends from our experts.
            </p>
          </div>
        </section>
"
        {/* Categories */}""
        <section className="py-10 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (}
                <button>}"
                  key={category.id}""
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>
"
        {/* Blog Posts */}""
        <section className="py-20 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {blogPosts.map((post) => ("}"
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">""
                  <div className="text-4xl mb-4">{post.image}</div>""
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">""
                    <span className="flex items-center"></span>"
""
<div className="w-4 h-4 mr-1" />""