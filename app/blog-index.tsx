import React from 'react';
import { Navigate } from 'react-router-dom';

const BlogPage: React.FC = () => {
  // Redirect to the main blog page
  return <Navigate to="/blog" replace />;
};

export default BlogPage;
