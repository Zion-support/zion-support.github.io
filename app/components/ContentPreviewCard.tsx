'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ContentPreviewCardProps {
  title: string
  excerpt: string
  href: string
  image?: string
  category?: string
  date?: string
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  title,
  excerpt,
  href,
  image,
  category,
  date
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-video bg-gray-200">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
            {category}
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          <Link href={href} className="hover:text-blue-600">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          {date && (
            <time className="text-sm text-gray-500">
              {new Date(date).toLocaleDateString()}
            </time>
          )}
          <Link
            href={href}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ContentPreviewCard
