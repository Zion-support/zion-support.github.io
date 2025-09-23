'use client'

import React from 'react'
import Link from 'next/link'

type Post = { title: string; slug: string; excerpt?: string }

export default function RelatedContentWidget({ title, posts }: { title: string; posts: Post[] }) {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((p) => (
            <Link key={p.slug} href={p.slug} className="block bg-white rounded-lg p-4 border hover:shadow">
              <div className="font-semibold text-gray-900">{p.title}</div>
              {p.excerpt && <div className="text-sm text-gray-600 mt-1">{p.excerpt}</div>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

