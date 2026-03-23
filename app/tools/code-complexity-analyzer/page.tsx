"use client";

import { useState } from 'react';

interface ComplexityMetrics {
  lines: number;
  cyclomatic: number;
  cognitive: number;
  maintainability: number;
}

function calculateComplexity(code: string): ComplexityMetrics {
  const lines = code.split('\n').filter(line => line.trim()).length;
  
  // Simple cyclomatic complexity approximation
  const controlFlowPatterns = /\b(if|else|for|while|switch|case|catch|&&|\|\||\?)\b/g;
  const cyclomatic = (code.match(controlFlowPatterns) || []).length + 1;
  
  // Cognitive complexity approximation (simplified)
  const nestingDepth = Math.max(...code.split('\n').map(line => {
    let depth = 0;
    for (const char of line) {
      if (char === '{') depth++;
      if (char === '}') depth--;
    }
    return depth;
  }));
  const cognitive = cyclomatic + Math.max(0, nestingDepth);
  
  // Maintainability score (0-100)
  const maintainability = Math.max(0, Math.min(100, 
    100 - (cyclomatic * 2) - (lines / 10) + (cognitive / 2)
  ));
  
  return { lines, cyclomatic, cognitive, maintainability };
}

function getComplexityLevel(metrics: ComplexityMetrics): { level: string; color: string; recommendation: string } {
  if (metrics.maintainability >= 80) {
    return { level: 'Low', color: 'text-green-600', recommendation: 'Code is clean and maintainable. Great job!' };
  } else if (metrics.maintainability >= 60) {
    return { level: 'Moderate', color: 'text-yellow-600', recommendation: 'Consider breaking down complex functions for better maintainability.' };
  } else if (metrics.maintainability >= 40) {
    return { level: 'High', color: 'text-orange-600', recommendation: 'High complexity detected. Refactoring recommended before adding new features.' };
  }
  return { level: 'Very High', color: 'text-red-600', recommendation: 'Critical complexity levels. Immediate refactoring strongly recommended.' };
}

function getRefactoringSuggestions(metrics: ComplexityMetrics): string[] {
  const suggestions: string[] = [];
  
  if (metrics.cyclomatic > 10) {
    suggestions.push('Consider extracting logical branches into separate functions');
  }
  if (metrics.cognitive > 15) {
    suggestions.push('Reduce nesting depth by using early returns or guard clauses');
  }
  if (metrics.lines > 100) {
    suggestions.push('Split large functions into smaller, focused units');
  }
  if (metrics.maintainability < 60) {
    suggestions.push('Review and simplify conditional logic');
  }
  
  if (suggestions.length === 0) {
    suggestions.push('Code looks good! Consider adding unit tests to maintain quality.');
  }
  
  return suggestions;
}

export default function CodeComplexityAnalyzer() {
  const [code, setCode] = useState(`function calculateTotal(items, taxRate) {
  let subtotal = 0;
  if (items && items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] && items[i].price) {
        subtotal += items[i].price * (items[i].quantity || 1);
      }
    }
  }
  const tax = subtotal * taxRate;
  return subtotal + tax;
}`);

  const metrics = calculateComplexity(code);
  const { level, color, recommendation } = getComplexityLevel(metrics);
  const suggestions = getRefactoringSuggestions(metrics);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">🤖 AI Code Complexity Analyzer</h1>
          <p className="text-slate-400">Analyze your code for complexity, maintainability, and get refactoring recommendations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Code Input */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-lg font-semibold text-white mb-4">📝 Paste Your Code</h2>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 bg-slate-900 text-slate-300 rounded-xl p-4 font-mono text-sm border border-slate-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none resize-none"
              placeholder="Paste your JavaScript/TypeScript code here..."
            />
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Overall Score */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-lg font-semibold text-white mb-4">📊 Complexity Analysis</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{metrics.lines}</div>
                  <div className="text-sm text-slate-400">Lines of Code</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{metrics.cyclomatic}</div>
                  <div className="text-sm text-slate-400">Cyclomatic Complexity</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{metrics.cognitive}</div>
                  <div className="text-sm text-slate-400">Cognitive Complexity</div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                  <div className={`text-3xl font-bold ${color}`}>{metrics.maintainability}</div>
                  <div className="text-sm text-slate-400">Maintainability Score</div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4">
                <div className={`text-lg font-semibold ${color} mb-2`}>Complexity Level: {level}</div>
                <p className="text-slate-400 text-sm">{recommendation}</p>
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-lg font-semibold text-white mb-4">💡 AI Refactoring Suggestions</h2>
              <ul className="space-y-3">
                {suggestions.map((suggestion, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-violet-400 mt-1">→</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics Guide */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-lg font-semibold text-white mb-4">📖 Metrics Guide</h2>
              <div className="space-y-2 text-sm text-slate-400">
                <p><span className="text-white">Cyclomatic Complexity:</span> Measures the number of linearly independent paths through your code</p>
                <p><span className="text-white">Cognitive Complexity:</span> Measures how hard code is to understand for humans</p>
                <p><span className="text-white">Maintainability:</span> 0-100 score where higher is better</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}