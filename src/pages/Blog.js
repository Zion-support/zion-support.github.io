import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
import { blogPosts } from '@/data/posts';
export default function Blog() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Blog - Zion Tech Group", description: "Insights on AI, Green IT, and Micro\u2011SaaS from Zion Tech Group.", canonical: "https://ziontechgroup.com/blog" }), _jsxs("div", { className: "mx-auto max-w-5xl px-4 py-16", children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight mb-8", children: "Latest Articles" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: blogPosts.map((post) => (_jsxs("a", { href: `/blog/${post.slug}`, className: "rounded-lg border border-border p-6 hover:bg-muted transition-colors", children: [_jsx("h2", { className: "text-xl font-semibold mb-2", children: post.title }), _jsx("p", { className: "text-sm text-muted-foreground mb-3", children: new Date(post.publishedAt).toLocaleDateString() }), _jsx("p", { className: "text-muted-foreground", children: post.excerpt })] }, post.slug))) })] })] }));
}
