import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Blog() {
  const posts = []
  return (
    <Layout title="Blog">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        {posts.length === 0 ? (
          <p className="text-gray-600">No posts yet. Check back soon.</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((p) => (
              <li key={p.id}>
                <Link href={`/blog/${p.id}`} className="text-blue-600 hover:underline">{p.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  )
}

