'use client' 

import React from 'react' 
import { ArrowLeft } from 'lucide-react' 
import Link from 'next/link' 

interface BlogPostPageProps {
  params: {
    slug: string 
  } 
}

export default function BlogPost({ params }: BlogPostPageProps) {
  return (
    <>
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto'>
          {/* Back to blog button */}
          <div className='mb-8'>
            <Link 
              href='/blog'
              className="inline-flex items-center px-4 py-2 border border-blue-300 rounded-md text-blue-300 hover:bg-blue-300 hover:text-white"
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Blog Post</h1>
            <p className="text-zion-slate-light">
              This is a placeholder blog post. Content would be loaded here based on the slug: {params?.slug || 'default'}
            </p>
          </div>
        </div>
      </div>
    </>
  ) 
}