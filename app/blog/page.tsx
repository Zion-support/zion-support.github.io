
import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "AI & Machine Learning", count: 5 },
    { id: "cybersecurity", name: "Cybersecurity", count: 3 },
    { id: "cloud", name: "Cloud Computing", count: 2 },
    { id: "development", name: "Development", count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends and how they're transforming business operations across industries.",
      content: "Artificial Intelligence continues to revolutionize the business landscape, with 2024 bringing unprecedented advancements in machine learning, automation, and intelligent systems...",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "ai",
      tags: ["AI", "Machine Learning", "Business", "Technology"],
      image: "/images/blog/ai-future.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work Environments",
      excerpt: "Essential security measures to protect your remote workforce and sensitive business data.",
      content: "With remote work becoming the new norm, organizations must implement robust cybersecurity measures to protect their digital assets and maintain business continuity...",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "cybersecurity",
      tags: ["Cybersecurity", "Remote Work", "Data Protection", "Best Practices"],
      image: "/images/blog/cybersecurity-remote.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide for Enterprises",
      excerpt: "Learn how to successfully migrate your infrastructure to the cloud with minimal disruption.",
      content: "Cloud migration is a complex process that requires careful planning, execution, and ongoing management. This comprehensive guide covers everything you need to know...",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "cloud",
      tags: ["Cloud Computing", "Migration", "Enterprise", "Infrastructure"],
      image: "/images/blog/cloud-migration.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Discover the latest technologies and frameworks for creating high-performance web applications.",
      content: "Modern web development requires a deep understanding of scalable architectures, performance optimization, and user experience design...",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "development",
      tags: ["Web Development", "Scalability", "Performance", "Modern Tech"],
      image: "/images/blog/web-development.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: Benefits and Implementation",
      excerpt: "Understanding edge computing and how it's reshaping the future of data processing.",
      content: "Edge computing is transforming how we process and analyze data, bringing computation closer to the source and reducing latency...",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "cloud",
      tags: ["Edge Computing", "Data Processing", "IoT", "Performance"],
      image: "/images/blog/edge-computing.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      excerpt: "How AI and machine learning are revolutionizing healthcare and improving patient outcomes.",
      content: "Healthcare is experiencing a digital transformation powered by artificial intelligence and machine learning technologies...",
      author: "Dr. James Wilson",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "ai",
      tags: ["AI", "Healthcare", "Machine Learning", "Patient Care"],
      image: "/images/blog/ai-healthcare.jpg",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

