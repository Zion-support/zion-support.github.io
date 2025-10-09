import { React } from 'react';
const BlogPage: React.FC = () => {
  // Redirect to the main blog page
  return <Navigate href="/blog" replace />;
};
export default BlogPage;
