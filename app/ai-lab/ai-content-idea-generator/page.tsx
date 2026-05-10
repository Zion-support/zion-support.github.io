'use client';

import { useState } from 'react';

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Page services and solutions from Zion Tech Group.',
  canonical: 'https://ziontechgroup.com/page',
};

export default function AIContentIdeaGenerator() {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateIdeas = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real implementation, this would call an AI API
    const generatedIdeas = [
      `How to leverage ${topic} for business growth in 2026`,
      `5 innovative ways to use ${topic} in your industry`,
      `The future of ${topic}: Trends and predictions`,
      `Case study: Successful implementation of ${topic}`,
      `Common challenges with ${topic} and how to overcome them`,
      `Expert interview: Best practices for ${topic}`,
      `Comparative analysis: ${topic} vs traditional methods`,
      `Step-by-step guide to implementing ${topic}`,
      `ROI analysis: Investing in ${topic} for your business`,
      `Ethical considerations and best practices for ${topic}`
    ];
    setIdeas(generatedIdeas);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          AI Content Idea Generator
        </h1>
        <p className="text-slate-600 mb-6">
          Enter a topic or industry to get AI-powered content ideas for blogs, videos, social media, and more.
        </p>
        <div className="mb-4">
          <label htmlFor="topic-input" className="block text-sm font-medium text-slate-700 mb-2">
            Topic or Industry
          </label>
          <input
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., artificial intelligence, renewable energy)"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 text-sm"
          />
        </div>
        <button
          onClick={generateIdeas}
          disabled={loading || !topic.trim()}
          className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-4 rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              <span>Generating ideas...</span>
            </>
          ) : (
            <>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.504-.253-2.928-.698-4.188A11.976 11.976 0 0012 7.94a11.976 11.976 0 01-4.116-1.694z"></path>
              </svg>
              <span>Generate Ideas</span>
            </>
          )}
        </button>

        {ideas.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Generated Content Ideas
            </h2>
            <div className="space-y-3">
              {ideas.map((idea, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-slate-800">{idea}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}