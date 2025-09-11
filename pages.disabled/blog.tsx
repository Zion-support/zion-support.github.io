import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [;
import type { NextPage } from 'next' 
import Layout from '../components/Layout' 
import Link from 'next/link' 
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react' 
const "Blog": NextPag e = () => {
  const blogPosts = [{
      id: 1,
      "title": "The Future of AI in Business: Trends and Predictions for 2024",
      "excerpt": "Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.",
      "author": "Kleber Santos",
      "date": "2024-01-15",
      "readTime": "5 min read",
      "category": "AI & Machine Learning",
      "image": "/api/placeholder/600/400",
      "slug": "future-of-ai-in-business-2024"
    },    {
      id: 1,;
      title: 'The Future of AI in Business: Trends for 2025',;
      excerpt: 'Explore the latest AI trends that are transforming businesses and how Zion Tech Group is leading the way in AI implementation.',;
      author: 'Dr. Sarah Johnson',;
      date: '2025-01-25',;
      category: 'AI & Machine Learning',;
      readTime: '5 min read',;
      image: '/blog/ai-trends-2025.jpg',;
      featured: true},;
    {
      id: 2,;
      title: 'Cloud Migration Best Practices: A Complete Guide',;
      excerpt: 'Learn the essential steps and strategies for successful cloud migration with real-world examples and expert insights.',;
      author: 'Michael Chen',;
      date: '2025-01-22',;
      category: 'Cloud Computing',;
      readTime: '8 min read',;
      image: '/blog/cloud-migration-guide.jpg',;
      featured: false},;
    {
      id: 3,;
      title: 'Building Scalable Microservices Architecture',;
      excerpt: 'Discover how to design and implement microservices that can scale with your business growth and technical requirements.',;
      author: 'Alex Rodriguez',;
      date: '2025-01-20',;
      category: 'Software Development',;
      readTime: '6 min read',;
      image: '/blog/microservices-architecture.jpg',;
      featured: false},;
    {
      id: 4,;
      title: 'Cybersecurity in the Age of Remote Work',;
      excerpt: 'Essential security measures and best practices for protecting your organization in today\'s distributed work environment.',;
      author: 'Emily Watson',;
      date: '2025-01-18',;
      category: 'Cybersecurity',;
      readTime: '7 min read',;
      image: '/blog/cybersecurity-remote-work.jpg',;
      featured: false},;
    {
  const categories = [;
    'All Posts',;
    'AI & Machine Learning',;
    'Cloud Computing',;
    'Software Development',;
    'Cybersecurity',;
    'Digital Transformation',;
    'Technology Trends';
  ];

  return (;
    <MainLayout;
      title="Blog - Zion Tech Group";
      description="Stay updated with the latest insights, trends, and best practices in technology from Zion Tech Group's expert team.";
      keywords="technology blog, AI insights, cloud computing, software development, cybersecurity, digital transformation">;
      <div className="min-h-screen bg-gray-50">;