
import React from 'react'
import SEO from '@/components/SEO'

const BlogPost: React.FC = () => {
	return (
		<div className="min-h-screen bg-slate-950 text-white py-16">
			<SEO title="Blog Post" description="Read our latest insights and articles from Zion Tech Group." />
			<div className="container mx-auto max-w-3xl px-6">
				<h1 className="text-3xl font-bold mb-4">Blog Post</h1>
				<p className="text-slate-300">Coming soon.</p>
			</div>
		</div>
	)
}

export default BlogPost
