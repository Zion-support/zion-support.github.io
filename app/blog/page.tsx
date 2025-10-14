import React from "react";"
import { Helmet} from "react-helmet-async";"
import { Right, User} from "lucide-react";"
import React from "react";"
import { Helmet , Right,  User,  Calendar} from "lucide-react";"
import React from "react""
import { Helmet} from "react-helmet-async""
import { Right, User, Calendar} from "lucide-react""
const BlogPage: React.FC = () => {
  const categories = [}
    { id: "all", name: "All Posts", count: 12},""
    { id: "ai", name: "AI & Machine Learning", count: 5},""
    { id: "cybersecurity", name: "Cybersecurity", count: 3},""
    { id: "cloud", name: "Computing", count: 2},""
    { id: "development", name: "Development", count: 2}"]"
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends",""
      excerpt: "Explore the latest AI trends that are transforming businesses across industries.",""
      author: "Sarah Johnson",""
      date: "2024-01-15",""
      category: "ai",""
      readTime: "5 min read",""
      image: "🤖"}"},"
    {
      id: 2,
      title: "Cybersecurity Best Practices for 2024",""
      excerpt: "Learn essential cybersecurity practices to protect your business from threats.",""
      author: "Michael Chen",""
      date: "2024-01-12",""
      category: "cybersecurity",""
      readTime: "7 min read",""
      image: "🔒"}"},"
    {
      id: 3,
      title: "Migration: A Complete Guide",""
      excerpt: "Everything you need to know about migrating to the cloud successfully.",""
      author: "Emily Rodriguez",""
      date: "2024-01-10",""
      category: "cloud",""
      readTime: "10 min read",""
      image: "☁️"}"},"
    {
      id: 4,
      title: "Scalable Applications with Modern Tech",""
      excerpt: "Discover the technologies and practices for building scalable applications.",""
      author: "David Kim",""
      date: "2024-01-08",""
      category: "development",""
      readTime: "8 min read",""
      image: "⚡"}"},"
    {
      id: 5,
      title: "AI-Powered Analytics: Transforming Data Insights",""
      excerpt: "How AI is revolutionizing the way we analyze and interpret data.",""
      author: "Lisa Wang",""
      date: "2024-01-05",""
      category: "ai",""
      readTime: "6 min read",""
      image: "📊"}"},"
    {
      id: 6,
      title: "Zero Trust Architecture",""
      excerpt: "Implementing zero trust security for modern enterprise environments.",""
      author: "James Wilson",""
      date: "2024-01-03",""
      category: "cybersecurity",""
      readTime: "9 min read",""
      image: "🛡️"}""
import { Helmet} from "react-helmet-async";"
import { Right, User} from "lucide-react";"
import React from "react";""
import { Helmet , Right,  User,  Calendar} from "lucide-react";"
import React from "react""
import { Helmet} from "react-helmet-async""
import { Right, User, Calendar} from "lucide-react""
const BlogPage: React.FC = () => { const categories = [}
    { id: "all", name: "All Posts", count: 12},"
    { id: "ai", name: "AI & Machine Learning", count: 5},"
    { id: "cybersecurity", name: "Cybersecurity", count: 3},"
    { id: "cloud", name: "Computing", count: 2},"
    { id: "development", name: "Development", count: 2}]"
  const blogPosts = [
    { id: 1,
      title: "The Future of AI in Business: 2024 Trends","
      excerpt: "Explore the latest AI trends that are transforming businesses across industries.","
      author: "Sarah Johnson","
      date: "2024-01-15","
      category: "ai","
      readTime: "5 min read","
      image: "🤖"}},"
    { id: 2,
      title: "Cybersecurity Best Practices for 2024","
      excerpt: "Learn essential cybersecurity practices to protect your business from threats.","
      author: "Michael Chen","
      date: "2024-01-12","
      category: "cybersecurity","
      readTime: "7 min read","
      image: "🔒"}},"
    { id: 3,
      title: "Migration: A Complete Guide","
      excerpt: "Everything you need to know about migrating to the cloud successfully.","
      author: "Emily Rodriguez","
      date: "2024-01-10","
      category: "cloud","
      readTime: "10 min read","
      image: "☁️"}},"
    { id: 4,
      title: "Scalable Applications with Modern Tech","
      excerpt: "Discover the technologies and practices for building scalable applications.","
      author: "David Kim","
      date: "2024-01-08","
      category: "development","
      readTime: "8 min read","
      image: "⚡"}},"
    { id: 5,
      title: "AI-Powered Analytics: Transforming Data Insights","
      excerpt: "How AI is revolutionizing the way we analyze and interpret data.","
      author: "Lisa Wang","
      date: "2024-01-05","
      category: "ai","
      readTime: "6 min read","
      image: "📊"}},"
    { id: 6,
      title: "Zero Trust Architecture","
      excerpt: "Implementing zero trust security for modern enterprise environments.","
      author: "James Wilson","
      date: "2024-01-03","
      category: "cybersecurity","
      readTime: "9 min read","
      image: "🛡️"}"
import { Link} from "react-router-dom";"
import { Calendar, User, ArrowRight, Tag, Clock} from "lucide-react";"
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions","
      excerpt: "Explore the latest trends in artificial intelligence and how they\"re transforming modern businesses.","
      author: "Zion Tech Team","
      date: "2024-01-15","
      category: "AI & Machine Learning","
      readTime: "5 min read","
      image: "/api/placeholder/400/250"},"
    {
      id: 2,
      title: "Cybersecurity Best Practices for Small Businesses","
      excerpt: "Learn essential cybersecurity measures to protect your business from digital threats.","
      author: "Security Team","
      date: "2024-01-10","
      category: "Cybersecurity","
      readTime: "7 min read","
      image: "/api/placeholder/400/250"},"
    {
      id: 3,
      title: "Cloud Migration: A Complete Guide for Enterprises","
      excerpt: "Everything you need to know about migrating your infrastructure to the cloud.","
      author: "Cloud Solutions Team","
      date: "2024-01-05","
      category: "Cloud Computing","
      readTime: "10 min read","
      image: "/api/placeholder/400/250"},"
    {
      id: 4,
      title: "5G Technology: Revolutionizing Mobile Connectivity","
      excerpt: "Discover how 5G is changing the landscape of mobile technology and IoT.","
      author: "5G Solutions Team","
      date: "2024-01-01","
      category: "5G Technology","
      readTime: "6 min read","
      image: "/api/placeholder/400/250"},"
    {
      id: 5,
      title: "Micro SaaS: Building Scalable Software Solutions","
      excerpt: "Learn how to build and scale micro SaaS applications for maximum impact.","
      author: "SaaS Development Team","
      date: "2023-12-28","
      category: "Micro SaaS","
      readTime: "8 min read","
      image: "/api/placeholder/400/250"},"
    {
      id: 6,
      title: "Data Analytics: Turning Information into Insights","
      excerpt: "Master the art of data analysis and transform raw data into actionable business insights.","
      author: "Data Analytics Team","
      date: "2023-12-25","
      category: "Data Analytics","
      readTime: "9 min read","
      image: "/api/placeholder/400/250"}];"
  const categories = [
    "All Posts","
    "AI & Machine Learning","
    "Cybersecurity","
    "Cloud Computing","
    "5G Technology","
    "Micro SaaS","
    "Data Analytics"];"
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet></Helmet></</Helmet>
        <title>Blog - AI & IT Insights | Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and technology trends from Zion Tech Group experts." />""
        <meta name="keywords" content="blog, AI insights, IT trends, cybersecurity, cloud computing, technology news" />""
      </Helmet><//Helmet></<//Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">""
        <title>Blog - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from our expert team." />"
      </Helmet><//Helmet></<//Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        { /* Hero Section */}
        <section className="relative py-20 px-4">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">"
              Tech
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">""
                Blog
              </span></h1><//h1></<//h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
              Stay updated with the latest insights on AI, IT solutions, cybersecurity,
              and technology trends from our experts.
            </p></div><//div></section><//section></<//section>
        {/* Categories */}
        <section className="py-10 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="flex flex-wrap justify-center gap-4">""
              {categories.map((category) => (
                <button}
                  key={category.id}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300""></button}
                  key={category.id}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300""></</button}
                  key={category.id}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"">
                  {category.name} ({category.count}
                </button><//button></<//button>
              ))
        { /* Categories */}
        <section className="py-10 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="flex flex-wrap justify-center gap-4">"
              { categories.map((category) => (
                <button}
                  key={ category.id}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-white hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300""
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
            Our Blog
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
            Stay informed with the latest insights, trends, and best practices in technology,
            AI, and digital transformation from our expert team.
          </p></div><//div></<//div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">"
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0
                  ? "bg-blue-600 text-white" "
                  : "bg-white/10 text-gray-300 hover:bg-white/20"}`}"></button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0
                  ? "bg-blue-600 text-white" "
                  : "bg-white/10 text-gray-300 hover:bg-white/20"}`}"></</button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0
                  ? "bg-blue-600 text-white" "
                  : "bg-white/10 text-gray-300 hover:bg-white/20"}`}">
              {category}
            </button><//button></<//button>
          ))}
        </div><//div></<//div>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">"
              <div className="h-48 bg-gray-700 flex items-center justify-center">"
                <span className="text-gray-400">Blog Image</span>"
              </div><//div></<//div>
              <div className="p-6">"
                <div className="flex items-center mb-3">"
                  <Tag className="w-4 h-4 text-blue-400 mr-2" />"
                  <span className="text-sm text-blue-400">{post.category}</span>"
                </div><//div></<//div>
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">"
                  {post.title}
                </h2><//h2></<//h2>
                <p className="text-gray-300 mb-4 line-clamp-3">"
                  {post.excerpt}
                </p><//p></<//p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">"
                  <div className="flex items-center">"
                    <User className="w-4 h-4 mr-1" />"
                    {post.author}
                  </div><//div></<//div>
                  <div className="flex items-center">"
                    <Clock className="w-4 h-4 mr-1" />"
                    {post.readTime}
                  </div></div><//div></<//div>
                <div className="flex items-center justify-between">"
                  <div className="flex items-center text-sm text-gray-400">"
                    <Calendar className="w-4 h-4 mr-1" />"
                    {new Date(post.date).toLocaleDateString()}
                  </div><//div></<//div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-blue-400 hover:text-blue-300 font-medium""></Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-blue-400 hover:text-blue-300 font-medium""></</Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-blue-400 hover:text-blue-300 font-medium"">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />"
                  </Link></div><//div></div></article><//article></<//article>
          ))}
        </div><//div></<//div>
        {/* Newsletter Signup */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">"
          <h2 className="text-2xl font-bold text-white mb-4">"
            Stay Updated with Our Latest Posts
          </h2><//h2></<//h2>
          <p className="text-gray-300 mb-6">"
            Subscribe to our newsletter and never miss an update on the latest technology trends and insights.
          </p><//p></<//p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">"
            <input
              type="email""
              placeholder="Enter your email""
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500""
            /></input
              type="email""
              placeholder="Enter your email""
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500""
            /></</input
              type="email""
              placeholder="Enter your email""
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500""
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">"
              Subscribe
            </button></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )};

        <title>Page - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Learn more about page" />"
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>"
          <p className="text-gray-300 text-xl mb-8">Learn more about page</p>"
          <div className="max-w-4xl mx-auto">"
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">"
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>"
              <p className="text-gray-300 mb-6">"
                This page is currently under development. We"re working hard to bring you the best experience."
              </p><//p></<//p>
              <div className="flex justify-center space-x-4">"
                <a
                  href="/" "
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300""></a
                  href="/" "
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300""></</a
                  href="/" "
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"">
                  Go Home
                </a><//a></<//a>
                <a
                  href="/contact" "
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300""></a
                  href="/contact" "
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300""></</a
                  href="/contact" "
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"">
                  Contact Us
                </a></div><//div></div></div><//div></<//div>
        </section><//section></<//section>
        { /* Blog Posts */}
        {/* Blog Posts */}
        <section className="py-20 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">""
              {blogPosts.map((post) => (}
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">""
                  <div className="text-4xl mb-4">{post.image}</div>""
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">""
                    <span className="flex items-center">""
                      <div className="w-4 h-4 mr-1" />""
                      {new Date(post.date).toLocaleDateString()
                    </span><//span></<//span>
                    <span className="flex items-center">""
                      <User className="w-4 h-4 mr-1" />""
                      {post.author}
                    </span></div><//div></<//div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">""
                    {post.title}
        <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              { blogPosts.map((post) => (}
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">"
                  <div className="text-4xl mb-4">{post.image}</div>"
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">"
                    <span className="flex items-center">"
                      <div className="w-4 h-4 mr-1" />"
                      { new Date(post.date).toLocaleDateString()}
                    </span><//span></<//span>
                    <span className="flex items-center">"
                      <User className="w-4 h-4 mr-1" />"
                      { post.author}
                    </span></div><//div></<//div>
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">"
                    { post.title}
                  </h2><//h2></<//h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>""
                  <div className="flex items-center justify-between">""
                    <span className="text-cyan-400 text-sm font-medium">{post.readTime}</span>""
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">""
                      Read More
                      <Right className="w-4 h-4 ml-1" />""
                    </button></div><//div></article><//article></<//article>
              ))
            </div></div><//div></section><//section></<//section>
        { /* Newsletter Signup */}
        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-4xl font-bold text-white mb-6">""
        <section className="py-20 px-4 bg-slate-800/30">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-4xl font-bold text-white mb-6">"
              Stay Updated
            </h2><//h2></<//h2>
            <p className="text-xl text-gray-300 mb-8">""
              Subscribe to our newsletter for the latest tech insights and updates.
            </p><//p></<//p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">""
              <input
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
              /></input
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
              /></</input
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">""
                Subscribe
              </button></div><//div></div></section><//section></<//section>
        </div></div><//div></><//></<//>
  )

  )
export default BlogPage}
export default BlogPage";"
    </div><//div></<//div>
  )}
export default FiveGSolutionsPage}