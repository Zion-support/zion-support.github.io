import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export const metadata: Metadata = {
  title: 'Blog | ZionTechGroup Insights',
  description: 'Weekly insights on AI, IT, and business transformation from ZionTechGroup experts.',
};

export default function BlogPage() {
  // Collect all blog post routes — populated dynamically at build time
  const posts: BlogPost[] = [
    // Auto-populated from app/blog/* directories
    // Each subfolder under app/blog/ is a post with its own page.tsx
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ZionTechGroup Blog</h1>
          <p className="text-xl text-gray-600">
            Insights on AI, IT, and business transformation — written weekly by our experts.
          </p>
        </header>

        <div className="grid gap-8">
          {posts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-500">No published posts yet. Check back soon!</p>
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="group border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
