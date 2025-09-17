import React from 'react';

type BlogPost = {
	id: number;
	title: string;
	excerpt: string;
	publishDate?: string;
	readTime?: string;
	slug: string;
	category?: string;
	new?: boolean;
};

const NewBlogPromoBanner: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const { blogPosts } = require('../data/blog-posts.js');

	const latestPosts: BlogPost[] = [...blogPosts]
		.sort((a: BlogPost, b: BlogPost) => (b.publishDate || '').localeCompare(a.publishDate || ''))
		.slice(0, 3);

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-8">
				<div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
				<div className="absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

				<div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					<div className="text-white">
						<p className="text-sm uppercase tracking-widest text-white/80">New on the blog</p>
						<h2 className="mt-1 text-2xl font-bold sm:text-3xl">Fresh insights you can ship this week</h2>
						<p className="mt-2 max-w-xl text-white/90">Exec-ready playbooks and case studies on eval gates, grounded RAG, and cost-aware routing.</p>
					</div>

					<div className="grid w-full gap-4 sm:w-auto sm:grid-cols-3">
						{latestPosts.map((post) => (
							<a
								key={post.id}
								href={`/blog/${post.slug}`}
								className="group block rounded-xl bg-white/95 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
							>
								<div className="flex items-start justify-between gap-3">
									<div>
										<p className="text-xs font-semibold text-indigo-600">{post.category || 'Insights'}</p>
										<h3 className="mt-1 line-clamp-2 text-sm font-bold text-gray-900">{post.title}</h3>
										<p className="mt-1 line-clamp-2 text-xs text-gray-600">{post.excerpt}</p>
										<p className="mt-2 text-xs text-gray-500">{post.publishDate} • {post.readTime}</p>
									</div>
									{post.new ? (
										<span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 ring-1 ring-green-600/20">New</span>
									) : null}
								</div>
							</a>
						))}
					</div>
				</div>

				<div className="relative mt-4 flex items-center justify-between">
					<a
						href="/blog"
						className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
					>
						Read all posts
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewBlogPromoBanner;

