'use client'

import React from 'react'

export default function SocialShareButtons({ url, title }: { url: string; title: string; description?: string }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.origin + url : url
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex gap-3">
      <a className="px-4 py-2 rounded bg-blue-600 text-white text-sm" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">Share on X</a>
      <a className="px-4 py-2 rounded bg-blue-700 text-white text-sm" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
      <a className="px-4 py-2 rounded bg-blue-500 text-white text-sm" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
    </div>
  )
}

