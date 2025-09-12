import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getLatestPosts } from '@/data/posts';
export function LatestArticles() {
    const latest = getLatestPosts(3);
    return (_jsxs("section", { className: "mx-auto max-w-6xl px-4 py-12", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "From the Blog" }), _jsx("a", { href: "/blog", className: "text-primary underline", children: "View all" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: latest.map((post) => (_jsxs("a", { href: `/blog/${post.slug}`, className: "rounded-lg border border-border p-4 hover:bg-muted transition-colors", children: [_jsx("div", { className: "text-sm text-muted-foreground mb-1", children: new Date(post.publishedAt).toLocaleDateString() }), _jsx("div", { className: "font-medium mb-2", children: post.title }), _jsx("div", { className: "text-sm text-muted-foreground", children: post.excerpt })] }, post.slug))) })] }));
}
