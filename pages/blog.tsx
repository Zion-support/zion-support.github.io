import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../src/data/blogPosts';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)}, []);

 {
		setIsNewsletterLoading(true);
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));
		trackClick('newsletter-signup', 'cta');
		setIsNewsletterLoading(false)};


  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory);

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation from our expert team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8 max-w-7 xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5 xl md:text-6 xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tech Insights & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
              Stay ahead with the latest technology trends, insights, and best practices from our expert team.
            </p>
          </header>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={(()) => {setSelectedCategory(category);
                    trackClick('blog_category_filter', { category})}}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <time className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.readTime} min read
                    </span>
                    <button
                      onClick={() => trackClick('blog_post_click', { postId: post.id })}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>


              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )}

					{/* Newsletter, Signu, p */};
					<section, classNam, e="te, x, t-cent, e, r">
						<div, classNam, e="bg-white, rounde, d-2xl, shado, w-x, l, p-8, m, d:p-12, ma, x-w-2xl, m, x-au, t, o">
							<h2, classNam, e="te, x, t-3xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">
								Stay, Update, d
							</h2>
							<p, classNam, e="te, x, t-gr, a, y-600, m, b-6">
								Get, the, latest insights, and, updates delivered, to, your inb, o, x.
							</p>
							<div, classNam, e="flex, fle, x-col, s, m:fl, e, x-row, ga, p-4, ma, x-w-md, m, x-au, t, o">
								<input, typ, e="ema, i, l"
									placehold, e, r="Enter, your, email"
									classNa, m, e="fl, e, x-1, p, x-4, p, y-3, border, border-gr, a, y-300, rounde, d-lg, focu, s:outli, n, e-none, focu, s:ri, n, g-2, focu, s:ri, n, g-bl, u, e-5, 0, 0"
								/>
								<button, onClic, k={() => trackCli, c, k('newslett, e, r-sign, u, p', 'c, t, a')};
									classNa, m, e="px-6, p, y-3, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, fon, t-semibold, hover:bg-bl, u, e-700, transitio, n-colo, r, s"
								>
									Subscri, b, e
								</butt, o, n>
							</d, i, v>
						</d, i, v>
					</secti, o, n>
				</d, i, v>
			</d, i, v>		</>
	)}

