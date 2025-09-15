import { SEO } from "@/components/SEO";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Blog() {
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState("All");

	const categories = useMemo(() => {
		const cats = Array.from(new Set(["All", ...BLOG_POSTS.map(p => p.category)]));
		return cats;
	}, []);

	const posts = useMemo(() => {
		const q = query.trim().toLowerCase();
		return BLOG_POSTS.filter(p => {
			const matchesCategory = category === "All" || p.category === category;
			if (!q) return matchesCategory;
			return (
				matchesCategory && (
					p.title.toLowerCase().includes(q) ||
					p.excerpt.toLowerCase().includes(q) ||
					p.content.toLowerCase().includes(q) ||
					p.tags.some(t => t.toLowerCase().includes(q))
				)
			);
		});
	}, [query, category]);

	return (
		<>
			<SEO
				title="Blog - Latest Insights"
				description="Read expert insights on AI, security, cloud, and digital transformation."
			/>
			<div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-10">
						<h1 className="text-4xl font-bold text-white">Blog</h1>
						<p className="text-zion-slate-light mt-2">Insights that help you ship better, faster, safer.</p>
					</div>

					<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="relative col-span-2">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zion-slate" />
							<input
								type="text"
								placeholder="Search articles..."
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								className="w-full pl-10 pr-3 py-2 rounded-md bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate"
							/>
						</div>
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className="w-full md:w-auto px-3 py-2 rounded-md bg-zion-blue border border-zion-blue-light text-white"
						>
							{categories.map((c) => (
								<option key={c} value={c}>{c}</option>
							))}
						</select>
					</div>

					{posts.length === 0 ? (
						<div className="text-center text-white py-16">No articles found</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{posts.map((post) => (
								<article key={post.slug} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition">
									<div className="h-40 w-full bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center text-zion-slate">
										<span>Image</span>
									</div>
									<div className="p-5">
										<div className="flex items-center justify-between mb-2">
											<span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded-full">{post.category}</span>
											<span className="text-xs text-zion-slate-light">{new Date(post.publishDate).toLocaleDateString()} • {post.readTime}</span>
										</div>
										<h3 className="text-white font-semibold text-lg mb-2">{post.title}</h3>
										<p className="text-zion-slate-light text-sm line-clamp-3 mb-4">{post.excerpt}</p>
										<Link href={`/blog/${post.slug}`} className="text-zion-cyan hover:text-zion-purple">Read more →</Link>
									</div>
								</article>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
}