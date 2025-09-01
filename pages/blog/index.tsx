import BlogPage, { BlogProps } from '../../src/pages/Blog';
import { BLOG_POSTS } from '../../src/data/blog-posts';
import type { GetStaticProps } from 'next'; // Changed import

export default function BlogIndex() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p>Articles coming soon.</p>
    </div>
  );
}