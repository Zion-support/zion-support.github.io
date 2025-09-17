import { getRecentBlogPosts } from '../data/blog-posts';
const NewContentPromoBanner: React.FC = () => {
	const recent = getRecentBlogPosts(3);
	return (
		<div className="px-4 md:px-8 lg:px-12 py-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-fuchsia-900 rounded-xl border border-purple-500/30">
			<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Latest from the blog</h2>
			<p className="text-purple-200/90 mb-6">Fresh insights on reliable autonomy, trusted RAG, and cost-aware routing.</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{recent.map(post => (
					<a key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-lg bg-black/20 hover:bg-black/30 transition-colors border border-white/10 overflow-hidden">
						{post.imageUrl ? (
							<div className="h-40 w-full overflow-hidden">
								<img src={post.imageUrl} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
							</div>
						) : null}
						<div className="p-4">
							<div className="text-xs text-purple-300/80 mb-1">{post.category} • {post.readTime}</div>
							<h3 className="text-white font-medium leading-snug line-clamp-2">{post.title}</h3>
							<p className="mt-2 text-purple-200/80 text-sm line-clamp-2">{post.excerpt}</p>
							<div className="mt-3 text-fuchsia-300 group-hover:text-fuchsia-200 text-sm">Read more →</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};


export default NewContentPromoBanner;
