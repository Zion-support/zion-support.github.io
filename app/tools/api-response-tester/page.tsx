"use client";

import { useState } from 'react';

interface TestResult {
  url: string;
  status: number;
  responseTime: number;
  timestamp: string;
}

export default function APIResponseTester() {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runTest = async () => {
    setLoading(true);
    setError(null);
    
    const startTime = performance.now();
    
    try {
      const response = await fetch(url, { method });
      const endTime = performance.now();
      const responseTime = Math.round(endTime - startTime);
      
      const result: TestResult = {
        url,
        status: response.status,
        responseTime,
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setResults(prev => [result, ...prev].slice(0, 10));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to test endpoint');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return 'text-green-400';
    if (status >= 300 && status < 400) return 'text-yellow-400';
    if (status >= 400 && status < 500) return 'text-orange-400';
    return 'text-red-400';
  };

  const getResponseTimeColor = (time: number) => {
    if (time < 200) return 'text-green-400';
    if (time < 500) return 'text-yellow-400';
    if (time < 1000) return 'text-orange-400';
    return 'text-red-400';
  };

  const getAverageResponseTime = () => {
    if (results.length === 0) return 0;
    return Math.round(results.reduce((sum, r) => sum + r.responseTime, 0) / results.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">⚡ API Response Time Tester</h1>
          <p className="text-slate-400">Test API endpoint response times and analyze performance</p>
        </div>

        {/* Test Input */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as 'GET' | 'POST' | 'PUT' | 'DELETE')}
              className="bg-slate-900 text-white px-4 py-3 rounded-xl border border-slate-700 focus:border-violet-500 outline-none"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://api.example.com/endpoint"
              className="flex-1 bg-slate-900 text-white px-4 py-3 rounded-xl border border-slate-700 focus:border-violet-500 outline-none"
            />
            
            <button
              onClick={runTest}
              disabled={loading || !url}
              className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              {loading ? 'Testing...' : 'Test'}
            </button>
          </div>
          
          {error && (
            <div className="mt-4 p-4 bg-red-900/30 border border-red-700 rounded-xl text-red-400">
              {error}
            </div>
          )}
        </div>

        {/* Stats Overview */}
        {results.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-2xl font-bold text-white">{results.length}</div>
              <div className="text-sm text-slate-400">Total Tests</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className={`text-2xl font-bold ${getResponseTimeColor(getAverageResponseTime())}`}>
                {getAverageResponseTime()}ms
              </div>
              <div className="text-sm text-slate-400">Avg Response Time</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-2xl font-bold text-green-400">
                {results.filter(r => r.status >= 200 && r.status < 300).length}
              </div>
              <div className="text-sm text-slate-400">Successful</div>
            </div>
          </div>
        )}

        {/* Results Table */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-white">📊 Test Results</h2>
          </div>
          
          {results.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              No tests yet. Enter an API endpoint above to get started.
            </div>
          ) : (
            <div className="divide-y divide-slate-700">
              {results.map((result, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-700/30">
                  <div className="flex-1 min-w-0 mr-4">
                    <div className="text-sm text-slate-400 truncate">{result.timestamp}</div>
                    <div className="text-white truncate text-sm">{result.url}</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getStatusColor(result.status)}`}>
                        {result.status || 'Error'}
                      </div>
                      <div className="text-xs text-slate-500">Status</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getResponseTimeColor(result.responseTime)}`}>
                        {result.responseTime}ms
                      </div>
                      <div className="text-xs text-slate-500">Response</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-6 bg-slate-800/30 rounded-xl p-4 border border-slate-700">
          <h3 className="text-sm font-semibold text-white mb-2">💡 Performance Guidelines</h3>
          <div className="text-sm text-slate-400 space-y-1">
            <p><span className="text-green-400">• &lt; 200ms:</span> Excellent - User experience is optimal</p>
            <p><span className="text-yellow-400">• 200-500ms:</span> Good - Acceptable for most applications</p>
            <p><span className="text-orange-400">• 500ms-1s:</span> Fair - Consider optimization</p>
            <p><span className="text-red-400">• &gt; 1s:</span> Poor - Needs immediate attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}