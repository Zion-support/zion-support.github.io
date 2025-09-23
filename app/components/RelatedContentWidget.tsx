import React from 'react';

interface RelatedPost {
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
}

export default function RelatedContentWidget({ title, posts }: { title: string; posts: RelatedPost[] }): JSX.Element {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {posts?.map((post) => (
          <li key={post.slug} className="bg-white rounded-lg p-4 border border-gray-200">
            <a href={post.slug} className="text-purple-700 font-semibold hover:underline">
              {post.title}
            </a>
            {post.excerpt && <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}