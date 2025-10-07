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
          </div>