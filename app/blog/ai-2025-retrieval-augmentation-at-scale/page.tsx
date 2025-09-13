import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Retrieval Augmentation at Scale in 2025 | Zion Tech Group',
  description: 'Patterns for high-recall, low-latency RAG systems: indexing, routing, hybrid search, chunking, caching, and evals.',
  keywords: 'RAG, retrieval augmentation, vector search, hybrid search, indexing, caching, evals, AI 2025',
  openGraph: {
    title: 'Retrieval Augmentation at Scale in 2025',
    description: 'Technical playbook for large-scale RAG: sharding, routing, hybrid ranking, context budgeting, and observability.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'RAG', 'Search', 'Scaling']
  }
};

export default function RetrievalAugmentationAtScale2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Retrieval Augmentation at Scale in 2025
            </h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div>Zion Tech Group</div>
              <div>September 12, 2025</div>
              <div>20 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            RAG systems must deliver high recall and relevance at low latency. This playbook covers
            indexing, routing, chunking, hybrid ranking, and caching patterns that scale to billions of
            documents while staying cost-efficient and observable.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Architecture Choices</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Hybrid search: dense + sparse with reciprocal rank fusion</li>
            <li>Hierarchical indexing: topic -> document -> section -> chunk</li>
            <li>Routing: query classification to pick index, ranker, and budget</li>
            <li>Caching: query fingerprinting, response caching, and prefetch</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Indexing & Chunking</h3>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Semantic chunking with overlap tuned by task granularity</li>
              <li>Source attribution and de-duplication during ingestion</li>
              <li>Cold vs hot storage tiers with TTL and freshness gates</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Observability & Evals</h3>
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Coverage metrics: recall@k by topic and document type</li>
              <li>Relevance: graded labels, nDCG, and human-in-the-loop review</li>
              <li>Latency and cost budgets with autoscaling and routing</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a Scalable RAG?</h3>
            <p className="text-gray-700 mb-6">
              We design and operate large-scale retrieval systems with hybrid search, guardrails,
              and continuous evaluation—optimized for your latency and cost targets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">
                Get a Free Assessment
              </Link>
              <Link href="/resources" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}