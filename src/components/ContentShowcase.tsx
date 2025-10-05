import React from 'react';
import { Link } from 'react-router-dom';

const ContentShowcase: React.FC = () => {
  return (
    <div className="content-showcase">
      <h2>Content Showcase</h2>
      <p>Discover our featured content and resources.</p>
      <div className="showcase-grid">
        <div className="showcase-item">
          <h3>Featured Article</h3>
          <p>Read about our latest insights and innovations.</p>
          <Link to="/blog/featured-article">
            Read More →
          </Link>
        </div>
interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface ContentShowcaseProps {
  items?: ContentItem[];
  className?: string;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  items = [],
  className = ''
}) => {
  const defaultItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Innovation',
      description: 'Latest developments in artificial intelligence technology.',
      link: '/blog/ai-innovation'
    },
    {
      id: '2',
      title: 'Tech Solutions',
      description: 'Comprehensive technology solutions for modern businesses.',
      link: '/blog/tech-solutions'
    <div className={`content-showcase ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a
              href={item.link}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More →
            </a>
          </div>