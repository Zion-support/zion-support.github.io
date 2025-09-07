<<<<<<< HEAD

import React from 'react';
  const featuredNews = null;

  return (
    <>
      <Head>
        <title>News | Zion Tech Group - Latest Updates & Insights</title>
        <meta name="description" content="Stay informed with the latest news, company updates, and industry insights from Zion Tech Group." />
        <meta property="og:title" content="News - Zion Tech Group" />
        <meta property="og:description" content="Latest company news, partnerships, and technology insights." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Latest News
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay updated with company news, partnerships, innovations, and industry insights
            </p>
          </section>

          <section className="mx-auto max-w-6xl">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                    category === "All"
                      ? "bg-cyan-400 text-white border-cyan-400"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-cyan-400/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Article */}
            {newsArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-cyan-400/30">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-400/30 text-cyan-300 text-sm rounded-full border border-cyan-400/50">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/20 text-white/80 text-sm rounded-full border border-white/30">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-white/80 mb-4 text-lg leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4 text-center">{article.image}</div>
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-white/20 text-white/80 text-xs rounded-full border border-white/30">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="text-xs text-white/60 mb-4">
                    By {article.author}
                  </div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Read More
                  </button>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Stay in the Loop</h2>
                <p className="text-white/70 mb-6">
                  Get the latest news and updates delivered directly to your inbox. Never miss an important announcement.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  ),
}
;
=======
};
import React from 'react';
  const featuredNews = null;
origin/cursor/automate-test-improve-and-merge-code-2533
{
 featured: true ;
};
{;
  title: 'Cybersecurity Partnership with Global Tech Leaders';
excerpt: 'Strategic collaboration to advance AI - powered threat detection and response systems.';
author: 'Partnerships Team';
date: '2025 - 01 - 10';
const [search_query, setSearchQuery] = useState ('');
const [selected_category, setSelectedCategory] = useState ('all');
const [selected_year, setSelectedYear] = useState ('all');
const categories = [ {
  id: 'all';, name: 'All News';, icon: Newspaper;, count: 45;
}
{
  id: 'ai';, name: 'AI & Technology';, icon: Brain;, count: 18;
}
{
  id: 'quantum';, name: 'Quantum Computing';, icon: Atom;, count: 12;
}
{
  id: 'space';, name: 'Space Technology';, icon: Rocket;, count: 8;
}
{
  id: 'security';, name: 'Cybersecurity';, icon: Shield;, count: 7;
}];
const years = [ {
  id: 'all';, name: 'All Years';
}
{
  id: '2025';, name: '2025';
}
{
  id: '2024';, name: '2024';
}
{
  id: '2023';, name: '2023';
}];
TrendingUp, Lightbulb, Rocket, Globe, Shield, Zap;
Clock, BookOpen, Video, Podcast, FileText, Search;
}from 'lucide-react';
return (<UltraFuturisticBackground> <div className="min-h-screen" > <Head> <title > News & Updates - Zion Tech Group | Latest Technology Insights & Company Updates</title> <meta name="description" content="Stay updated with Zion Tech Group's latest news, product launches, partnerships, and industry insights. Read about our breakthroughs in AI, quantum computing, and emerging technologies." /> </Head> id: 1;
title: "Zion Tech Group Launches Revolutionary Quantum AI Platform";
excerpt: "Our latest quantum AI platform combines quantum computing with artificial intelligence to deliver unprecedented performance and capabilities for enterprise applications.";
category: "Product Launch";
author: "Zion Tech Group Team";
date: "2025-01-15";
readTime: "5 min read";
image: "/images/news/quantum-ai-launch.jpg";
tags: ["Quantum Computing";, "AI", "Product Launch" ]
}
export default function News () {
  const featuredNews = [ {
  
>>>>>>> origin/main
