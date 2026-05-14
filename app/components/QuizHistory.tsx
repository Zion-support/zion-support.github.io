'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Trash2, Calendar, Clock, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { QuizResult } from '../lib/portal-storage';

interface QuizHistoryProps {
  results: QuizResult[];
  onDelete: (id: string) => void;
}

export function QuizHistory({ results, onDelete }: QuizHistoryProps) {
  const getIndustry = (answers: Record<string, string | string[]>): string => {
    const ind = answers.industry as string | undefined;
    if (ind) return ind.charAt(0).toUpperCase() + ind.slice(1);
    return 'General';
  };

  const getRecommendationSummary = (recs: string[]) => {
    if (recs.length === 0) return 'No specific recommendations';
    if (recs.length === 1) return recs[0];
    return `${recs[0]} +${recs.length - 1} more`;
  };

  return (
    <div className="space-y-4">
      {results.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No quiz history yet.</p>
          <a href="/tools/service-recommender" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">
            Take the service quiz →
          </a>
        </div>
      ) : (
        results.map((result) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {getIndustry(result.answers)}
                  {result.email && (
                    <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                      Contact captured
                    </span>
                  )}
                </h3>
                <p className="text-gray-500 text-sm">
                  {new Date(result.createdAt).toLocaleDateString()} · {getRecommendationSummary(result.recommendations)}
                </p>
              </div>
              <button
                onClick={() => onDelete(result.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                title="Delete result"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600 mb-1">Pain Points</div>
                <div className="flex flex-wrap gap-1">
                  {(result.answers.painPoints as string[] || []).map((pp, i) => (
                    <span key={i} className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">
                      {pp}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Budget</div>
                <div className="text-gray-900 font-medium">{(result.answers.budget as string) || 'Not specified'}</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Maturity</div>
                <div className="text-gray-900 font-medium">{(result.answers.maturity as string) || 'Not specified'}</div>
              </div>
              {result.email && (
                <div>
                  <div className="text-gray-600 mb-1">Email</div>
                  <div className="text-gray-900 font-medium">{result.email}</div>
                </div>
              )}
            </div>

            {result.recommendations.length > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="text-sm text-gray-600 mb-2">Top Recommendations</div>
                <div className="flex flex-wrap gap-2">
                  {result.recommendations.slice(0, 4).map((rec, i) => (
                    <Link
                      key={i}
                      href={`/services/ai/${rec}`}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs hover:bg-indigo-100"
                    >
                      <Sparkles className="w-3 h-3" />
                      {rec.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
}
