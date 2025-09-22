import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  const featuredPosts = [
    {
      title: "Multimodal Agents in the Enterprise",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-2025.jpg"
    }
  ];

  return (
    <div>
      <h1>Blog</h1>
      <div className="featured-posts">
        {featuredPosts.map((post, index) => (
          <div key={index} className="post-card">
            <h2>{post.title}</h2>
            <p>Category: {post.category}</p>
            <p>Date: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;