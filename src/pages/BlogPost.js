import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { blogPosts } from '@/data/posts';
export default function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
        return (_jsxs("div", { className: "mx-auto max-w-3xl px-4 py-16", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "Article not found" }), _jsx(Link, { className: "text-primary underline", to: "/blog", children: "Back to Blog" })] }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: `${post.title} - Zion Tech Group`, description: post.excerpt, canonical: `https://ziontechgroup.com/blog/${post.slug}` }), _jsxs("article", { className: "mx-auto max-w-3xl px-4 py-16 prose dark:prose-invert", children: [_jsx("h1", { children: post.title }), _jsxs("p", { className: "text-sm text-muted-foreground", children: [new Date(post.publishedAt).toLocaleDateString(), " \u2022 ", post.tags.join(' • ')] }), _jsx("p", { children: post.content })] })] }));
}
