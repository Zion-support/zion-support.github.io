import React from 'react';

export default function AI2025OctoberProductionAIMonitoring() {
  return (
    <article className="min-h-screen bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
            <span className="text-amber-400 font-bold text-sm tracking-wider uppercase">
              October 2025 • AI Observability
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
            Production AI Monitoring & Observability: Complete Enterprise Guide
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl">
            Build comprehensive observability for production AI systems with real-time monitoring, 
            intelligent alerting, and automated incident response that ensures 99.9% uptime and 
            exceptional model performance.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-amber-500/20 px-4 py-2 rounded-full text-amber-300 text-sm">Observability</span>
            <span className="bg-orange-500/20 px-4 py-2 rounded-full text-orange-300 text-sm">Monitoring</span>
            <span className="bg-red-500/20 px-4 py-2 rounded-full text-red-300 text-sm">LLMOps</span>
            <span className="bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 text-sm">Production AI</span>
          </div>
        </header>

        {/* Key Metrics */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">99.95%</div>
              <div className="text-amber-300">AI Uptime SLA</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <div className="text-4xl font-extrabold text-orange-400 mb-2">2.3min</div>
              <div className="text-orange-300">MTTR</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
              <div className="text-4xl font-extrabold text-red-400 mb-2">98.5%</div>
              <div className="text-red-300">Auto-Resolution</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
              <div className="text-4xl font-extrabold text-yellow-400 mb-2">&lt;100ms</div>
              <div className="text-yellow-300">Alert Latency</div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="prose prose-invert prose-lg max-w-none mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">The AI Observability Stack</h2>
          <p className="text-gray-300 text-lg mb-6">
            Production AI systems require specialized observability beyond traditional APM. You need to monitor 
            model performance, data drift, prompt effectiveness, token usage, cost per request, and user 
            satisfaction—all in real-time with intelligent alerting and automated remediation.
          </p>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-amber-500/30 mb-8">
            <h3 className="text-3xl font-bold text-amber-400 mb-4">🔭 Observability Layers</h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-xl font-bold text-amber-400 mb-3">Infrastructure Metrics</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• API response times & latency</li>
                  <li>• GPU utilization & memory</li>
                  <li>• Request rate & throughput</li>
                  <li>• Error rates & status codes</li>
                  <li>• Queue depths & backlogs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-orange-400 mb-3">Model Performance</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Output quality scores</li>
                  <li>• Embedding drift detection</li>
                  <li>• Hallucination rate</li>
                  <li>• Factual accuracy</li>
                  <li>• Semantic coherence</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-400 mb-3">Business Metrics</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Cost per request/user</li>
                  <li>• Token usage & trends</li>
                  <li>• User satisfaction (CSAT)</li>
                  <li>• Conversion rates</li>
                  <li>• Feature adoption</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-400 mb-3">Data Quality</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Input data distribution</li>
                  <li>• Schema validation</li>
                  <li>• Data freshness</li>
                  <li>• Anomaly detection</li>
                  <li>• PII/sensitive data leakage</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Monitoring Implementation</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-amber-500/30 mb-8">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">LLM Observability with OpenTelemetry</h3>
            <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm">
              <code className="text-cyan-300">
{`// Comprehensive LLM observability middleware
import { trace, context, SpanStatusCode } from '@opentelemetry/api';
import { SemanticAttributes } from '@opentelemetry/semantic-conventions';
import Anthropic from '@anthropic-ai/sdk';

const tracer = trace.getTracer('llm-service', '1.0.0');

export class ObservableLLM {
  private anthropic: Anthropic;
  private metrics: MetricsCollector;

  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    this.metrics = new MetricsCollector();
  }

  async generateWithObservability(
    prompt: string,
    metadata: RequestMetadata
  ): Promise<LLMResponse> {
    const startTime = Date.now();
    
    return await tracer.startActiveSpan(
      'llm.generate',
      async (span) => {
        try {
          // Set span attributes
          span.setAttributes({
            [SemanticAttributes.LLM_MODEL]: 'claude-3-5-sonnet-20241022',
            [SemanticAttributes.LLM_TEMPERATURE]: 0.7,
            'llm.user_id': metadata.userId,
            'llm.session_id': metadata.sessionId,
            'llm.prompt_tokens': this.estimateTokens(prompt),
          });

          // Generate response
          const response = await this.anthropic.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            messages: [{
              role: 'user',
              content: prompt
            }],
          });

          const duration = Date.now() - startTime;
          const outputText = response.content[0].text;

          // Capture metrics
          await this.captureMetrics({
            duration,
            inputTokens: response.usage.input_tokens,
            outputTokens: response.usage.output_tokens,
            totalTokens: response.usage.input_tokens + response.usage.output_tokens,
            cost: this.calculateCost(response.usage),
            model: response.model,
            userId: metadata.userId,
          });

          // Quality checks
          const qualityScore = await this.assessQuality(
            prompt,
            outputText,
            metadata
          );

          // Update span with response data
          span.setAttributes({
            'llm.output_tokens': response.usage.output_tokens,
            'llm.total_tokens': response.usage.input_tokens + response.usage.output_tokens,
            'llm.cost': this.calculateCost(response.usage),
            'llm.duration_ms': duration,
            'llm.quality_score': qualityScore,
          });

          span.setStatus({ code: SpanStatusCode.OK });

          return {
            text: outputText,
            usage: response.usage,
            qualityScore,
            duration,
          };
        } catch (error) {
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error.message,
          });
          span.recordException(error);

          // Emit error metric
          await this.metrics.incrementError({
            errorType: error.name,
            userId: metadata.userId,
          });

          throw error;
        } finally {
          span.end();
        }
      }
    );
  }

  private async captureMetrics(data: MetricsData): Promise<void> {
    await Promise.all([
      this.metrics.recordDuration('llm.duration', data.duration),
      this.metrics.recordTokens('llm.tokens.input', data.inputTokens),
      this.metrics.recordTokens('llm.tokens.output', data.outputTokens),
      this.metrics.recordCost('llm.cost', data.cost),
      this.metrics.recordGauge('llm.active_requests', 1),
    ]);
  }

  private async assessQuality(
    prompt: string,
    output: string,
    metadata: RequestMetadata
  ): Promise<number> {
    // Run quality checks in parallel
    const [
      hallucinationScore,
      coherenceScore,
      relevanceScore,
      safetyScore,
    ] = await Promise.all([
      this.checkHallucination(output, metadata.context),
      this.checkCoherence(output),
      this.checkRelevance(prompt, output),
      this.checkSafety(output),
    ]);

    const qualityScore = (
      hallucinationScore * 0.3 +
      coherenceScore * 0.2 +
      relevanceScore * 0.3 +
      safetyScore * 0.2
    );

    // Alert if quality drops below threshold
    if (qualityScore < 0.7) {
      await this.alertLowQuality({
        prompt,
        output,
        qualityScore,
        metadata,
      });
    }

    return qualityScore;
  }
}`}
              </code>
            </pre>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-orange-500/30 mb-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Real-Time Data Drift Detection</h3>
            <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm">
              <code className="text-cyan-300">
{`// Monitor embedding drift and data distribution shifts
import { KolmogorovSmirnovTest } from 'statistics';

export class DriftMonitor {
  private baselineDistribution: EmbeddingStats;
  private currentWindow: Embedding[] = [];
  private windowSize = 1000;

  constructor(baseline: Embedding[]) {
    this.baselineDistribution = this.computeStats(baseline);
  }

  async monitorEmbedding(embedding: number[]): Promise<DriftAlert | null> {
    this.currentWindow.push(embedding);

    if (this.currentWindow.length >= this.windowSize) {
      const currentStats = this.computeStats(this.currentWindow);
      const driftScore = this.calculateDrift(
        this.baselineDistribution,
        currentStats
      );

      // Check for significant drift
      if (driftScore > 0.15) {
        return {
          severity: driftScore > 0.3 ? 'critical' : 'warning',
          driftScore,
          affectedDimensions: this.identifyDriftedDimensions(
            this.baselineDistribution,
            currentStats
          ),
          recommendation: this.generateRecommendation(driftScore),
          timestamp: new Date(),
        };
      }

      // Rotate window
      this.currentWindow = [];
    }

    return null;
  }

  private calculateDrift(
    baseline: EmbeddingStats,
    current: EmbeddingStats
  ): number {
    // Use multiple drift detection methods
    const ksScore = KolmogorovSmirnovTest(
      baseline.values,
      current.values
    );
    const cosineShift = 1 - this.cosineSimilarity(
      baseline.centroid,
      current.centroid
    );
    const varianceRatio = Math.abs(
      current.variance - baseline.variance
    ) / baseline.variance;

    // Weighted combination
    return (
      ksScore * 0.4 +
      cosineShift * 0.4 +
      varianceRatio * 0.2
    );
  }

  private generateRecommendation(score: number): string {
    if (score > 0.3) {
      return 'Critical drift detected. Consider retraining embeddings or adjusting input preprocessing.';
    } else if (score > 0.15) {
      return 'Moderate drift detected. Monitor closely and prepare for model update.';
    }
    return 'Normal variation within acceptable bounds.';
  }
}`}
              </code>
            </pre>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">Intelligent Alerting Strategy</h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30 mb-8">
            <h3 className="text-3xl font-bold text-red-400 mb-4">🚨 Alert Configuration</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20">
                <h4 className="text-xl font-bold text-red-400 mb-3">Critical Alerts (P0)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• API error rate &gt; 5% for 2 minutes</li>
                  <li>• P95 latency &gt; 5000ms for 5 minutes</li>
                  <li>• Model hallucination rate &gt; 15%</li>
                  <li>• Cost spike &gt; 200% of baseline</li>
                  <li>• PII/sensitive data leakage detected</li>
                </ul>
                <div className="mt-4 text-sm text-red-300">
                  <strong>Response:</strong> Page on-call engineer, auto-rollback if available
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-orange-500/20">
                <h4 className="text-xl font-bold text-orange-400 mb-3">Warning Alerts (P1)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Error rate &gt; 2% for 5 minutes</li>
                  <li>• Quality score drops below 0.7</li>
                  <li>• Cache hit rate &lt; 80%</li>
                  <li>• Embedding drift score &gt; 0.15</li>
                  <li>• Token usage increase &gt; 50%</li>
                </ul>
                <div className="mt-4 text-sm text-orange-300">
                  <strong>Response:</strong> Slack notification, create ticket
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl p-6 border border-yellow-500/20">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">Info Alerts (P2)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Daily cost summary</li>
                  <li>• Model performance trends</li>
                  <li>• Usage pattern changes</li>
                  <li>• Optimization opportunities</li>
                  <li>• Weekly health report</li>
                </ul>
                <div className="mt-4 text-sm text-yellow-300">
                  <strong>Response:</strong> Email digest, dashboard update
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">Observability Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-8 border border-amber-500/30">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Real-Time Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Request Rate</span>
                    <span className="text-2xl font-bold text-amber-400">1,247/sec</span>
                  </div>
                  <div className="text-sm text-gray-400">+12% from baseline</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">P95 Latency</span>
                    <span className="text-2xl font-bold text-emerald-400">234ms</span>
                  </div>
                  <div className="text-sm text-gray-400">Within SLA target</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Error Rate</span>
                    <span className="text-2xl font-bold text-emerald-400">0.12%</span>
                  </div>
                  <div className="text-sm text-gray-400">Normal range</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Quality Score</span>
                    <span className="text-2xl font-bold text-amber-400">94.5%</span>
                  </div>
                  <div className="text-sm text-gray-400">Above threshold</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Cost Analytics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Hourly Cost</span>
                    <span className="text-2xl font-bold text-orange-400">$47.32</span>
                  </div>
                  <div className="text-sm text-gray-400">$35.2K monthly projection</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Cost per Request</span>
                    <span className="text-2xl font-bold text-emerald-400">$0.0023</span>
                  </div>
                  <div className="text-sm text-gray-400">-45% vs last month</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Cache Savings</span>
                    <span className="text-2xl font-bold text-emerald-400">$12.8K</span>
                  </div>
                  <div className="text-sm text-gray-400">This month</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">ROI</span>
                    <span className="text-2xl font-bold text-orange-400">847%</span>
                  </div>
                  <div className="text-sm text-gray-400">vs traditional approaches</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">Recommended Tools & Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-amber-500/30">
              <h4 className="text-xl font-bold text-amber-400 mb-3">LangSmith / LangFuse</h4>
              <p className="text-gray-300 mb-4">
                Purpose-built LLM observability with prompt versioning, trace analysis, and evaluation frameworks.
              </p>
              <div className="text-sm text-emerald-400 font-semibold">Best for: LLM-first teams</div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30">
              <h4 className="text-xl font-bold text-orange-400 mb-3">Datadog / New Relic</h4>
              <p className="text-gray-300 mb-4">
                Enterprise APM with AI extensions for unified infrastructure and AI model monitoring.
              </p>
              <div className="text-sm text-emerald-400 font-semibold">Best for: Large enterprises</div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-red-500/30">
              <h4 className="text-xl font-bold text-red-400 mb-3">Prometheus + Grafana</h4>
              <p className="text-gray-300 mb-4">
                Open-source stack with custom metrics for full control and cost efficiency.
              </p>
              <div className="text-sm text-emerald-400 font-semibold">Best for: Cost-conscious teams</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-12 border border-amber-500/30 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Build World-Class AI Observability</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI infrastructure experts can design and implement comprehensive observability 
            solutions that ensure 99.9%+ uptime and exceptional model performance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:scale-105"
          >
            Schedule Observability Assessment
          </a>
        </section>
      </div>
    </article>
  );
}
