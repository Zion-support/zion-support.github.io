import { Navigation } from 'lucide-react';
import React from 'react';
import { redirect } from 'next/navigation';

const BlogPage: React.FC = () => {
  // Redirect to the main blog page
  redirect('/blog');
};

export default BlogPage;
