import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import MainLayout from '../components/layout/MainLayout'
const blogPosts = [{
    id: 1,
    title: "The Future of AI in Business: 2025 Trends",
    excerpt: "Explore the latest AI trends that are transforming businesses across industries.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "AI & Technology",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Micro SaaS: Building Scalable Solutions",
    excerpt: "Learn how to build and scale micro SaaS applications for modern businesses.",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    category: "Development",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Cloud Security Best Practices",
    excerpt: "Essential security measures for protecting your cloud infrastructure and data.",
    author: "Jennifer Liu",
    date: "2024-01-10",
    category: "Security",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Digital Transformation Strategies",
    excerpt: "How to successfully navigate your organization's digital transformation journey.",
    author: "David Park",
    date: "2024-01-08",
    category: "Strategy",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "Machine Learning in Production",
    excerpt: "Best practices for deploying and maintaining ML models in production environments.",
    author: "Dr. Sarah Chen",
    date: "2024-01-05",
    category: "AI & Technology",
    readTime: "9 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "API Design Principles",
    excerpt: "Creating robust, scalable APIs that developers love to use and maintain.",
    author: "Michael Rodriguez",
    date: "2024-01-03",
    category: "Development",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  }]
export default function BlogPage() {
  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Latest insights on AI, technology, and business innovation from Zion Tech Group experts."
      keywords="blog, AI insights, technology news, business innovation, tech trends">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <h1
                Tech Insights & Innovation></h1>
              <p
                Stay ahead with the latest insights on AI, technology trends, and business innovation></p>
            </motion.div>>
        {/* Blog Posts Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, tagIndex) => (
                            <span
                          ))}></span>
                        <h2
                          {post.title}></h2>
                        <p
                          {post.excerpt}></p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}>
                        <div className="flex items-center justify-between">
                          <span{post.readTime}></span>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />>>
  )
}