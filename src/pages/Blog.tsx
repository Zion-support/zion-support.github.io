import React from 'react';
import { Helmet } from 'react-helmet-async';
import { latestInsights } from '../content/insights';

const Blog: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Insights – Latest Articles & Case Studies</title>
        <meta name="description" content="Read the latest insights, guides, and case studies from Zion Tech Group on AI, cloud, and cybersecurity." />
      </Helmet>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Zion Insights</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh perspectives on AI, cloud infrastructure, cybersecurity, and digital transformation.
          </p>
        </div>

        {/* Featured newest article */}
        <div className="mb-12">
          {latestInsights.slice(0, 1).map((item) => (
            <article key={item.id} className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-8 md:p-12">
              <div className="text-sm uppercase tracking-wider text-white/80 mb-2">{item.category}</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{item.title}</h2>
              <p className="text-white/90 mb-4 max-w-3xl">{item.summary}</p>
              <div className="text-sm text-white/80 mb-6">{new Date(item.date).toLocaleDateString()} • {item.readMinutes} min read</div>
              <a href="/insights" className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold">Read more</a>
            </article>
          ))}
        </div>

        {/* Remaining articles */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestInsights.slice(1, 7).map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="text-sm font-medium mb-2 text-gray-500">{item.category}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <div className="text-sm text-gray-500 mb-4">{new Date(item.date).toLocaleDateString()} • {item.readMinutes} min read</div>
                <a href="/insights" className="text-indigo-600 font-medium hover:text-indigo-700">Read more →</a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Get insights in your inbox</h3>
          <p className="text-white/90 mb-6">Monthly, no spam. Trends, playbooks, and case studies.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              aria-label="Email address"
            />
            <button type="submit" className="px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-indigo-50">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;

