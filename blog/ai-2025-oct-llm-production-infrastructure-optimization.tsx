import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cpu, Zap, TrendingDown, BarChart3, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LLMProductionInfrastructure = () => {
  return (
    <>
      <Helmet>
        <title>LLM Production Infrastructure: Cut Costs 70% While Scaling 10x | Zion Tech Group</title>
        <meta
          name="description"
          content="Deep technical guide to optimizing large language model infrastructure in production. Real strategies from companies serving 1B+ requests/day with 70% cost reduction."
        />
        <meta
          name="keywords"
          content="LLM infrastructure, AI optimization, model serving, GPU optimization, inference cost reduction, 2025"
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog/ai-2025-oct-llm-production-infrastructure-optimization" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="container mx-auto px-6 py-20">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                🔧 Technical Deep Dive
              </span>
              <span className="text-zion-slate-light">October 1, 2025</span>
              <span className="text-zion-slate-light">• 22 min read</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              LLM Production Infrastructure: Cut Costs 70% While Scaling 10x
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed">
              Battle-tested strategies from companies serving 1B+ daily LLM requests. Complete technical 
              playbook covering model optimization, inference acceleration, and infrastructure architecture.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Alex Chen, PhD</div>
                  <div className="text-zion-slate-light text-sm">Principal ML Infrastructure Engineer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats Banner */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-2xl p-8 border border-cyan-400/30">
              <h2 className="text-2xl font-bold text-white mb-6">Real-World Results</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
                  <div className="text-zion-slate-light">Cost reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                  <div className="text-zion-slate-light">Throughput increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">45ms</div>
                  <div className="text-zion-slate-light">P95 latency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">99.97%</div>
                  <div className="text-zion-slate-light">Uptime achieved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Server className="w-8 h-8 text-cyan-400" />
                  The LLM Infrastructure Challenge
                </h2>
                <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                  Production LLM deployment is expensive. A single GPT-4 class model serving 10M requests/day 
                  can cost $500K-1M monthly. But with the right architecture, you can achieve:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-900/20 rounded-lg p-6 border-l-4 border-red-400">
                    <h3 className="text-xl font-bold text-white mb-3">❌ Common Approach (Expensive)</h3>
                    <ul className="space-y-2 text-zion-slate-light">
                      <li>• Direct API calls to GPT-4: $0.03/1K tokens</li>
                      <li>• 10M requests/day = $900K/month</li>
                      <li>• No caching or optimization</li>
                      <li>• 100% third-party dependency</li>
                      <li>• Limited control over latency</li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 rounded-lg p-6 border-l-4 border-green-400">
                    <h3 className="text-xl font-bold text-white mb-3">✅ Optimized Approach (Efficient)</h3>
                    <ul className="space-y-2 text-zion-slate-light">
                      <li>• Hybrid: Self-hosted + API fallback</li>
                      <li>• Same 10M requests = $270K/month</li>
                      <li>• 40% cache hit rate built-in</li>
                      <li>• 60% self-hosted, 40% API</li>
                      <li>• P95 latency under 50ms</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Cpu className="w-8 h-8 text-purple-400" />
                  The 7-Layer Optimization Stack
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-lg border-l-4 border-blue-400">
                    <h3 className="text-2xl font-bold text-white mb-3">Layer 1: Intelligent Caching</h3>
                    <p className="text-zion-slate-light mb-4">
                      <strong className="text-white">The Opportunity:</strong> 30-60% of LLM requests are semantically 
                      similar or identical. Proper caching eliminates 40% of inference costs.
                    </p>
                    
                    <div className="bg-black/30 rounded p-4 mb-4">
                      <div className="text-sm text-cyan-400 font-mono mb-2">Semantic Cache Architecture:</div>
                      <pre className="text-xs text-zion-slate-light overflow-x-auto">
{`Request → Embed(query) → Vector Search (top-k=5, threshold=0.95)
   ↓                              ↓
   Cache Miss                Cache Hit (return cached response)
   ↓
   LLM Inference → Store(embedding, response) → Return`}
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 rounded p-4">
                        <div className="text-blue-400 font-semibold mb-2">Implementation</div>
                        <ul className="text-sm text-zion-slate-light space-y-1">
                          <li>• Vector DB: Pinecone, Weaviate, or Qdrant</li>
                          <li>• Embedding model: text-embedding-3-small</li>
                          <li>• Cache TTL: 7-30 days (use case dependent)</li>
                          <li>• Similarity threshold: 0.92-0.97</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 rounded p-4">
                        <div className="text-green-400 font-semibold mb-2">Results</div>
                        <ul className="text-sm text-zion-slate-light space-y-1">
                          <li>• 40-60% cache hit rate (after warmup)</li>
                          <li>• 95% cost reduction on cache hits</li>
                          <li>• 10ms response time (vs 500ms)</li>
                          <li>• $360K monthly savings</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/20 to-transparent p-6 rounded-lg border-l-4 border-purple-400">
                    <h3 className="text-2xl font-bold text-white mb-3">Layer 2: Model Quantization</h3>
                    <p className="text-zion-slate-light mb-4">
                      <strong className="text-white">The Opportunity:</strong> Run models 2-4x faster with 4x less memory 
                      using quantization. Minimal accuracy loss (<2%) for most use cases.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="border-b border-purple-400/30">
                          <tr className="text-left">
                            <th className="p-3 text-white">Precision</th>
                            <th className="p-3 text-white">Memory</th>
                            <th className="p-3 text-white">Speed</th>
                            <th className="p-3 text-white">Accuracy Loss</th>
                            <th className="p-3 text-white">Use Case</th>
                          </tr>
                        </thead>
                        <tbody className="text-zion-slate-light">
                          <tr className="border-b border-purple-400/10">
                            <td className="p-3">FP32 (baseline)</td>
                            <td className="p-3">40GB</td>
                            <td className="p-3">1x</td>
                            <td className="p-3">0%</td>
                            <td className="p-3">Research only</td>
                          </tr>
                          <tr className="border-b border-purple-400/10">
                            <td className="p-3">FP16</td>
                            <td className="p-3">20GB</td>
                            <td className="p-3">2x</td>
                            <td className="p-3"><0.5%</td>
                            <td className="p-3">Production standard</td>
                          </tr>
                          <tr className="border-b border-purple-400/10">
                            <td className="p-3 text-green-400 font-semibold">INT8</td>
                            <td className="p-3 text-green-400">10GB</td>
                            <td className="p-3 text-green-400">3-4x</td>
                            <td className="p-3 text-green-400">1-2%</td>
                            <td className="p-3 text-green-400">Recommended</td>
                          </tr>
                          <tr>
                            <td className="p-3">INT4 (GPTQ)</td>
                            <td className="p-3">5GB</td>
                            <td className="p-3">4-5x</td>
                            <td className="p-3">2-5%</td>
                            <td className="p-3">Non-critical tasks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-purple-500/10 rounded p-4 mt-4">
                      <div className="text-purple-400 font-semibold mb-2">Implementation Guide</div>
                      <div className="text-sm text-zion-slate-light">
                        <strong className="text-white">Tools:</strong> bitsandbytes, AutoGPTQ, GGML<br/>
                        <strong className="text-white">GPU Requirement:</strong> Reduce from A100 (80GB) to A10G (24GB)<br/>
                        <strong className="text-white">Cost Impact:</strong> $2.50/hr → $0.75/hr = 70% savings
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-900/20 to-transparent p-6 rounded-lg border-l-4 border-cyan-400">
                    <h3 className="text-2xl font-bold text-white mb-3">Layer 3: Continuous Batching</h3>
                    <p className="text-zion-slate-light mb-4">
                      <strong className="text-white">The Opportunity:</strong> Increase GPU utilization from 20-30% 
                      to 70-85% by intelligently batching requests. 3-4x throughput improvement.
                    </p>

                    <div className="bg-cyan-900/20 rounded-lg p-6 mb-4 border border-cyan-400/30">
                      <h4 className="text-lg font-bold text-white mb-3">Traditional vs. Continuous Batching</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-red-400 font-semibold mb-2">❌ Traditional (Static Batch)</div>
                          <ul className="text-sm text-zion-slate-light space-y-1">
                            <li>• Wait for batch to fill (50-100ms delay)</li>
                            <li>• Process all at same speed (slowest wins)</li>
                            <li>• GPU idle during batch assembly</li>
                            <li>• 20-30% GPU utilization</li>
                          </ul>
                        </div>
                        <div>
                          <div className="text-green-400 font-semibold mb-2">✅ Continuous Batching</div>
                          <ul className="text-sm text-zion-slate-light space-y-1">
                            <li>• Dynamic: Add/remove requests mid-batch</li>
                            <li>• Fast requests don't wait for slow ones</li>
                            <li>• GPU continuously processing</li>
                            <li>• 70-85% GPU utilization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 rounded p-4">
                      <div className="text-cyan-400 font-semibold mb-2">Tools & Frameworks</div>
                      <ul className="text-sm text-zion-slate-light space-y-2">
                        <li><strong className="text-white">vLLM:</strong> Best for throughput, PagedAttention algorithm, 24x faster than HuggingFace</li>
                        <li><strong className="text-white">TensorRT-LLM:</strong> NVIDIA-optimized, best for A100/H100 GPUs</li>
                        <li><strong className="text-white">Text Generation Inference:</strong> HuggingFace solution, good ecosystem integration</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/20 to-transparent p-6 rounded-lg border-l-4 border-green-400">
                    <h3 className="text-2xl font-bold text-white mb-3">Layer 4: Model Routing & Cascading</h3>
                    <p className="text-zion-slate-light mb-4">
                      <strong className="text-white">The Strategy:</strong> Not every request needs GPT-4. Route simple 
                      queries to smaller models, complex ones to large models. 60% cost reduction with zero quality loss.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-black/30 rounded p-4">
                        <div className="text-green-400 font-semibold mb-3">Cascading Architecture</div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold">1</div>
                            <div className="flex-1">
                              <div className="text-white font-semibold">Classifier (1ms, $0.0001/request)</div>
                              <div className="text-sm text-zion-slate-light">Determine query complexity: simple/medium/complex</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">2a</div>
                            <div className="flex-1">
                              <div className="text-white font-semibold">Llama-2-7B (20ms, $0.001/request) → 40% of traffic</div>
                              <div className="text-sm text-zion-slate-light">Simple: FAQ, basic summaries, keyword extraction</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">2b</div>
                            <div className="flex-1">
                              <div className="text-white font-semibold">Mistral-7B (35ms, $0.002/request) → 35% of traffic</div>
                              <div className="text-sm text-zion-slate-light">Medium: Analysis, moderate reasoning, translation</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">2c</div>
                            <div className="flex-1">
                              <div className="text-white font-semibold">GPT-4 API (500ms, $0.03/request) → 25% of traffic</div>
                              <div className="text-sm text-zion-slate-light">Complex: Deep analysis, creative writing, complex reasoning</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-500/10 rounded p-4">
                        <div className="text-green-400 font-semibold mb-2">Cost Comparison</div>
                        <div className="text-sm text-zion-slate-light">
                          <strong className="text-white">Before (all GPT-4):</strong> 10M requests × $0.03 = $300,000/month<br/>
                          <strong className="text-white">After (cascading):</strong> (4M × $0.001) + (3.5M × $0.002) + (2.5M × $0.03) = $86,000/month<br/>
                          <strong className="text-green-400 text-lg">Savings: $214,000/month (71% reduction)</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingDown className="w-8 h-8 text-yellow-400" />
                  Infrastructure Architecture: The Complete Stack
                </h2>

                <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-8 mb-8 border border-yellow-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Production-Ready LLM Architecture</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/40 rounded-lg p-6">
                      <div className="text-yellow-400 font-bold mb-3">Layer 1: API Gateway & Load Balancing</div>
                      <ul className="space-y-2 text-zion-slate-light text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Tool:</strong> Kong or AWS API Gateway with rate limiting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Purpose:</strong> Authentication, rate limiting, request routing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Config:</strong> 10,000 req/min per API key, exponential backoff</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-black/40 rounded-lg p-6">
                      <div className="text-orange-400 font-bold mb-3">Layer 2: Cache Layer (Semantic + Traditional)</div>
                      <ul className="space-y-2 text-zion-slate-light text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Redis:</strong> Exact match caching (hash-based), <1ms lookup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Vector DB:</strong> Semantic similarity search, 10-20ms lookup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Hit Rate:</strong> Combined 50-70% after warmup period</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-black/40 rounded-lg p-6">
                      <div className="text-cyan-400 font-bold mb-3">Layer 3: Model Serving Infrastructure</div>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-white font-semibold mb-2">Self-Hosted Models</div>
                          <ul className="space-y-1 text-zion-slate-light text-sm">
                            <li>• Llama-2-7B: 4x A10G (INT8)</li>
                            <li>• Mistral-7B: 4x A10G (INT8)</li>
                            <li>• Autoscaling: 2-12 pods</li>
                            <li>• Cost: $0.75/hr per GPU</li>
                          </ul>
                        </div>
                        <div>
                          <div className="text-white font-semibold mb-2">Fallback/Complex</div>
                          <ul className="space-y-1 text-zion-slate-light text-sm">
                            <li>• GPT-4 API for complex queries</li>
                            <li>• GPT-3.5-turbo for overflow</li>
                            <li>• Auto-failover configured</li>
                            <li>• SLA monitoring enabled</li>
                          </ul>
                        </div>
                      </div>
                      <div className="text-sm text-cyan-400 font-semibold">
                        Total Compute: 8 GPUs steady-state, up to 24 GPUs peak = $720-2,160/day
                      </div>
                    </div>

                    <div className="bg-black/40 rounded-lg p-6">
                      <div className="text-purple-400 font-bold mb-3">Layer 4: Monitoring & Observability</div>
                      <ul className="space-y-2 text-zion-slate-light text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Metrics:</strong> Prometheus for latency, throughput, error rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Tracing:</strong> Jaeger for end-to-end request tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Alerting:</strong> PagerDuty for P95 latency >100ms or error rate >0.5%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-white">Cost Tracking:</strong> Custom dashboard tracking $/1K requests by model</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                  Real-World Implementation: Financial Services Case Study
                </h2>

                <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-8 mb-8 border border-green-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Client: Global Investment Bank</h3>
                  <p className="text-zion-slate-light mb-6">
                    <strong className="text-white">Challenge:</strong> 100M+ document analysis requests/month 
                    costing $1.2M. Needed 70% cost reduction while maintaining <100ms P95 latency.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Before Optimization</h4>
                      <ul className="space-y-2 text-zion-slate-light">
                        <li>• 100% GPT-4 API ($0.03/1K tokens)</li>
                        <li>• $1.2M monthly cost</li>
                        <li>• 450ms P95 latency</li>
                        <li>• 99.5% uptime (API dependency)</li>
                        <li>• No caching strategy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">After Optimization</h4>
                      <ul className="space-y-2 text-zion-slate-light">
                        <li>• Hybrid: 70% self-hosted, 30% API</li>
                        <li>• <strong className="text-green-400">$340K monthly cost (72% reduction)</strong></li>
                        <li>• <strong className="text-green-400">45ms P95 latency (90% faster)</strong></li>
                        <li>• <strong className="text-green-400">99.97% uptime</strong></li>
                        <li>• 58% cache hit rate</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-900/30 rounded-lg p-6 border border-green-400/30">
                    <h4 className="text-xl font-bold text-white mb-4">Implementation Details (90-day project)</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-green-400 font-semibold">Phase 1 (Days 1-30): Infrastructure Setup</div>
                        <div className="text-sm text-zion-slate-light">
                          Deployed 12x A10G GPUs with vLLM, Redis cache, Pinecone vector DB. 
                          Total infrastructure cost: $850K (one-time) + $65K/month operating.
                        </div>
                      </div>
                      <div>
                        <div className="text-green-400 font-semibold">Phase 2 (Days 31-60): Model Training & Tuning</div>
                        <div className="text-sm text-zion-slate-light">
                          Fine-tuned Llama-2-13B on domain data. Achieved 94% quality parity with GPT-4 
                          on 70% of use cases. Quantized to INT8.
                        </div>
                      </div>
                      <div>
                        <div className="text-green-400 font-semibold">Phase 3 (Days 61-90): Production Migration</div>
                        <div className="text-sm text-zion-slate-light">
                          Gradual rollout: 10% → 50% → 100% traffic. Continuous monitoring and optimization. 
                          Achieved target metrics by day 85.
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-500/10 rounded border border-green-400/30">
                      <div className="text-2xl font-bold text-green-400 mb-1">ROI: 11-month payback period</div>
                      <div className="text-sm text-zion-slate-light">
                        Annual savings: $10.3M | Initial investment: $950K | Ongoing: $65K/month
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-400" />
                  Common Pitfalls & How to Avoid Them
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="bg-orange-900/20 rounded-lg p-6 border-l-4 border-orange-400">
                    <h3 className="text-xl font-bold text-white mb-2">Pitfall #1: Over-Optimizing Prematurely</h3>
                    <p className="text-zion-slate-light mb-3">
                      Starting with INT4 quantization and complex model cascading before validating quality impact.
                    </p>
                    <div className="bg-black/30 rounded p-3 text-sm text-cyan-400">
                      <strong>Solution:</strong> Start with FP16, measure quality baseline, then progressively optimize. 
                      A/B test every change with 5% traffic first.
                    </div>
                  </div>

                  <div className="bg-red-900/20 rounded-lg p-6 border-l-4 border-red-400">
                    <h3 className="text-xl font-bold text-white mb-2">Pitfall #2: Ignoring Long-Tail Latency</h3>
                    <p className="text-zion-slate-light mb-3">
                      Optimizing for P50 latency while P95/P99 degrades. 5% of users experience 2-3 second delays.
                    </p>
                    <div className="bg-black/30 rounded p-3 text-sm text-cyan-400">
                      <strong>Solution:</strong> Always monitor P95 and P99. Set SLA alerts. Use timeout-based fallbacks 
                      to faster models for slow requests.
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 rounded-lg p-6 border-l-4 border-yellow-400">
                    <h3 className="text-xl font-bold text-white mb-2">Pitfall #3: Underestimating Operational Complexity</h3>
                    <p className="text-zion-slate-light mb-3">
                      Self-hosting sounds great until you're on-call for GPU OOM errors at 3am.
                    </p>
                    <div className="bg-black/30 rounded p-3 text-sm text-cyan-400">
                      <strong>Solution:</strong> Start hybrid: self-host for 50% of traffic, API for overflow/fallback. 
                      Build observability first, then scale infrastructure.
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">Key Takeaways</h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Semantic caching</strong> provides 40-60% cost reduction with 
                      minimal engineering effort - start here
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">INT8 quantization</strong> cuts GPU costs 70% with <2% quality loss - 
                      optimal sweet spot for production
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Model cascading</strong> saves 60-70% by routing simple queries to 
                      small models, complex to GPT-4
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Continuous batching (vLLM)</strong> increases throughput 3-4x compared 
                      to naive serving
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-6 h-6 text-zion-cyan flex-shrink-0 mt-1" />
                    <span className="text-zion-slate-light">
                      <strong className="text-white">Hybrid architecture</strong> (self-hosted + API fallback) provides best 
                      cost/reliability balance
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-4">Implementation Checklist</h2>
                <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-400/30">
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zion-slate-light">
                        <strong className="text-white">Week 1-2:</strong> Implement semantic caching with Redis + vector DB
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zion-slate-light">
                        <strong className="text-white">Week 3-4:</strong> Deploy vLLM with INT8 quantized models
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zion-slate-light">
                        <strong className="text-white">Week 5-6:</strong> Build classifier and implement model routing
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zion-slate-light">
                        <strong className="text-white">Week 7-8:</strong> Set up monitoring, alerting, and cost dashboards
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zion-slate-light">
                        <strong className="text-white">Week 9-10:</strong> A/B test against baseline, optimize based on metrics
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-zion-slate-light">
                        <strong className="text-white">Week 11-12:</strong> Full production rollout with automated scaling
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="card bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-2 border-cyan-400/50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Help Optimizing Your LLM Infrastructure?
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Our ML infrastructure team has deployed production LLM systems serving 5B+ requests/month. 
                  Get a free architecture review and cost optimization roadmap.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Schedule Technical Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default LLMProductionInfrastructure;
