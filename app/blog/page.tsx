import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Calendar, User } from "lucide-react"

const BlogPage = () => {
  const posts = [
    {
      title: "The Future of AI in Business",
      excerpt: "Exploring how artificial intelligence is transforming modern business operations",
      author: "John Doe",
      date: "2024-01-15",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "5G Technology Revolution",
      excerpt: "Understanding the impact of 5G on connectivity and digital transformation",
      author: "Jane Smith",
      date: "2024-01-10",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity Best Practices",
      excerpt: "Essential security measures for protecting your digital assets",
      author: "Mike Johnson",
      date: "2024-01-05",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI and IT technology." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI and IT technology from our expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {posts.map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-full h-2 bg-gradient-to-r ${post.color} rounded mb-6`}></div>
                <h3 className="text-xl font-semibold text-white mb-4">{post.title}</h3>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <Link
                  to="/contact"
                  className={`w-full bg-gradient-to-r ${post.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage
