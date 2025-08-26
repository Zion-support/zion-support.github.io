<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GradientHeading } from "@/components/GradientHeading";
import { SEO } from "@/components/SEO";
<<<<<<< HEAD
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
=======
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { generateRandomBlogPost } from "@/utils/generateRandomBlogPost";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Search } from "lucide-react";
// Categories for filtering
const CATEGORIES = [
    "All Categories",
    "Trends",
    "Marketing",
    "Sustainability",
    "Ethics",
    "Recruitment",
    "Infrastructure"
];
export default function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [posts, setPosts] = useState([...BLOG_POSTS]);
    useEffect(() => {
        const interval = setInterval(() => {
            setPosts(prev => [...prev, generateRandomBlogPost()]);
        }, 120000); // every 2 minutes
        return () => clearInterval(interval);
    }, []);
    // Filter blog posts based on search and category
    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    // Get featured posts
    const featuredPosts = posts.filter(post => post.isFeatured);
<<<<<<< HEAD
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Blog - AI & Tech Insights", description: "Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation.", keywords: "AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT", canonical: "https://ziontechgroup.com/blog" }), _jsx("div", { className: "min-h-screen bg-zion-blue pt-12 pb-20 px-4", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx(GradientHeading, { children: "AI & Tech Insights" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Expert perspectives on artificial intelligence, tech innovation, and digital transformation" })] }), featuredPosts.length > 0 && (_jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Featured Article" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsx("div", { className: "aspect-video overflow-hidden rounded-lg", children: _jsx("img", { src: featuredPosts[0].featuredImage, alt: featuredPosts[0].title, className: "object-cover w-full h-full hover:scale-105 transition-transform duration-300", onError: (e) => {
                                                    const target = e.currentTarget;
                                                    target.src = "/images/blog-placeholder.svg";
                                                } }) }), _jsxs("div", { className: "flex flex-col justify-center", children: [_jsx("span", { className: "text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2", children: featuredPosts[0].category }), _jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: featuredPosts[0].title }), _jsx("p", { className: "text-zion-slate-light mb-6", children: featuredPosts[0].excerpt }), _jsxs("div", { className: "flex items-center mb-6", children: [_jsx("img", { src: featuredPosts[0].author.avatarUrl, alt: featuredPosts[0].author.name, className: "w-10 h-10 rounded-full mr-3", onError: (e) => {
                                                                const target = e.currentTarget;
                                                                target.src = "/images/blog-placeholder.svg";
                                                            } }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-medium", children: featuredPosts[0].author.name }), _jsxs("p", { className: "text-sm text-zion-slate-light", children: [featuredPosts[0].publishedDate, " \u2022 ", featuredPosts[0].readTime] })] })] }), _jsx(Button, { asChild: true, className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit", children: _jsx(Link, { to: `/blog/${featuredPosts[0].slug}`, children: "Read Article" }) })] })] })] })), _jsx("div", { className: "bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate" }), _jsx(Input, { type: "text", placeholder: "Search articles...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "pl-10 bg-zion-blue border border-zion-blue-light text-white" })] }), _jsxs(Select, { value: selectedCategory, onValueChange: setSelectedCategory, children: [_jsx(SelectTrigger, { className: "bg-zion-blue border border-zion-blue-light text-white", children: _jsx(SelectValue, { placeholder: "Select Category" }) }), _jsx(SelectContent, { className: "bg-zion-blue-dark border border-zion-blue-light", children: CATEGORIES.map((category) => (_jsx(SelectItem, { value: category, className: "text-white", children: category }, category))) })] })] }) }), filteredPosts.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredPosts.map((post) => (_jsxs(Card, { className: "bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300", children: [_jsx("div", { className: "aspect-[16/9] relative overflow-hidden", children: _jsx("img", { src: post.featuredImage, alt: post.title, className: "object-cover w-full h-full hover:scale-105 transition-transform duration-300", onError: (e) => {
                                                const target = e.currentTarget;
                                                target.src = "/images/blog-placeholder.svg";
                                            } }) }), _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("span", { className: "text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full", children: post.category }), _jsxs("div", { className: "text-xs text-zion-slate-light", children: [post.publishedDate, " \u2022 ", post.readTime] })] }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: post.title }), _jsx("p", { className: "text-zion-slate-light mb-4 line-clamp-3", children: post.excerpt }), _jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: post.author.avatarUrl, alt: post.author.name, className: "w-8 h-8 rounded-full mr-2", onError: (e) => {
                                                            const target = e.currentTarget;
                                                            target.src = "/images/blog-placeholder.svg";
                                                        } }), _jsx("span", { className: "text-sm text-white", children: post.author.name })] })] }), _jsx(CardFooter, { className: "p-6 pt-0", children: _jsx(Button, { variant: "link", className: "text-zion-cyan p-0 hover:text-zion-purple", asChild: true, children: _jsx(Link, { to: `/blog/${post.slug}`, children: "Read More \u2192" }) }) })] }, post.id))) })) : (_jsxs("div", { className: "text-center py-16", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "No articles found" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Try adjusting your search or filter criteria" }), _jsx(Button, { variant: "outline", onClick: () => {
                                        setSearchQuery("");
                                        setSelectedCategory("All Categories");
                                    }, className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: "Clear all filters" })] }))] }) })] }));
=======
    return (<>
      <SEO title="Blog - AI & Tech Insights" description="Stay updated with the latest trends in AI technology, marketplace strategies, and IT services. Expert articles on innovation, sustainability, and digital transformation." keywords="AI blog, tech trends, IT services blog, artificial intelligence news, technology innovation, digital transformation, sustainable IT" canonical="https://ziontechgroup.com/blog"/>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GradientHeading>AI & Tech Insights</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Expert perspectives on artificial intelligence, tech innovation, and digital transformation
            </p>
          </div>
          
          {/* Featured Post Section - Only show if there are featured posts */}
          {featuredPosts.length > 0 && (<div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src={featuredPosts[0].featuredImage} alt={featuredPosts[0].title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" onError={(e) => {
                const target = e.currentTarget;
                target.src = "/images/blog-placeholder.svg";
            }}/>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-2">
                    {featuredPosts[0].category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center mb-6">
                    <img src={featuredPosts[0].author.avatarUrl} alt={featuredPosts[0].author.name} className="w-10 h-10 rounded-full mr-3" onError={(e) => {
                const target = e.currentTarget;
                target.src = "/images/blog-placeholder.svg";
            }}/>
                    <div>
                      <p className="text-white font-medium">{featuredPosts[0].author.name}</p>
                      <p className="text-sm text-zion-slate-light">
                        {featuredPosts[0].publishedDate} • {featuredPosts[0].readTime}
                      </p>
                    </div>
                  </div>
                  <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit">
                    <Link to={`/blog/${featuredPosts[0].slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>)}
        
          {/* Filters and Search */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 border border-zion-blue-light">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate"/>
                <Input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-zion-blue border border-zion-blue-light text-white"/>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border border-zion-blue-light text-white">
                  <SelectValue placeholder="Select Category"/>
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border border-zion-blue-light">
                  {CATEGORIES.map((category) => (<SelectItem key={category} value={category} className="text-white">
                      {category}
                    </SelectItem>))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (<Card key={post.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-all duration-300">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img src={post.featuredImage} alt={post.title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "/images/blog-placeholder.svg";
                }}/>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="text-xs text-zion-slate-light">
                        {post.publishedDate} • {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <img src={post.author.avatarUrl} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "/images/blog-placeholder.svg";
                }}/>
                      <span className="text-sm text-white">{post.author.name}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="link" className="text-zion-cyan p-0 hover:text-zion-purple" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Read More →
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>))}
            </div>) : (<div className="text-center py-16">
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
            }} className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                Clear all filters
              </Button>
            </div>)}
        </div>
      </div>
    </>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
