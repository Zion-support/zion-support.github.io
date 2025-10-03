// import React from 'react';

const AIMultimodalAgents2025: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Multimodal AI Agents 2025: Vision + Voice + Action Under One SLA
        </h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
          <time dateTime="2025-09-30">September 30, 2025</time>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span className="text-blue-600 dark:text-blue-400">AI Engineering</span>
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Build agents that process images, audio, and text with unified safety budgets, cross-modal evals, and SLO-backed reliability.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">The Multimodal Challenge</h2>
          <p className="mb-4">
            Single-modality agents are table stakes. Today's users expect AI assistants that can:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Analyze images and answer questions about visual content</li>
            <li>Process voice commands and respond with natural speech</li>
            <li>Take actions across systems based on multimodal context</li>
            <li>Maintain safety and privacy across all modalities</li>
          </ul>
          <p className="mb-4">
            The hard part? Unified SLAs, cross-modal evals, and safety budgets that work across vision, voice, and text.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Architecture Blueprint</h2>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">1. Modal Preprocessors</h3>
            <p className="mb-2">Each modality gets a dedicated preprocessor:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vision:</strong> Image resizing, format normalization, EXIF stripping</li>
              <li><strong>Audio:</strong> Noise reduction, format conversion, speaker diarization</li>
              <li><strong>Text:</strong> PII detection, prompt sanitization, token counting</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Each preprocessor emits telemetry for quality monitoring and cost attribution.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">2. Unified Safety Layer</h3>
            <p className="mb-2">Apply consistent guardrails across modalities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content moderation for images (NSFW, violence, hate symbols)</li>
              <li>Voice biometrics and speaker verification</li>
              <li>PII detection and redaction in transcripts</li>
              <li>Cross-modal consistency checks (does voice match text context?)</li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">3. SLA-Backed Routing</h3>
            <p className="mb-2">Route requests based on latency budget and quality tier:</p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`// Pseudo-code routing logic
if (latency_budget < 200ms) {
  route_to_edge_model(input, quality='standard')
} else if (quality_tier == 'premium') {
  route_to_cloud_large_model(input)
} else {
  route_to_regional_model(input)
}`}
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Cross-Modal Evaluation</h2>
          <p className="mb-4">
            Traditional evals measure single-modality accuracy. Multimodal agents need cross-modal tests:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold mb-2">Vision-Text Alignment</h4>
              <p>Does the agent's text description accurately reflect the image content?</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Metric: CLIP score, human-eval on sample sets
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold mb-2">Audio-Text Consistency</h4>
              <p>Does transcribed text match the semantic intent of the audio?</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Metric: WER (Word Error Rate), intent match rate
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold mb-2">Action Safety</h4>
              <p>Are actions taken appropriate given multimodal context?</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Metric: Policy violation rate, rollback frequency
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Production Checklist</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span><strong>Modal Preprocessing:</strong> Normalize inputs, strip metadata, emit telemetry</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span><strong>Unified Safety Layer:</strong> Content moderation, PII detection, consistency checks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span><strong>SLA-Backed Routing:</strong> Latency budgets, quality tiers, fallback paths</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span><strong>Cross-Modal Evals:</strong> Offline test suites, pre-merge checks, online canaries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                <span><strong>Observability:</strong> Modal-specific traces, cost attribution, quality dashboards</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Real-World Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Visual product search + voice ordering + action fulfillment
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Result:</strong> 45% increase in mobile conversions, 30% reduction in support tickets
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Medical image analysis + voice notes + automated charting
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Result:</strong> 60% faster diagnosis, 99.8% accuracy with human oversight
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Start with two modalities</strong> (e.g., text + vision) to validate architecture</li>
              <li><strong>Build cross-modal eval suite</strong> with offline tests and online canaries</li>
              <li><strong>Add unified safety layer</strong> with content moderation and PII detection</li>
              <li><strong>Implement SLA-backed routing</strong> with latency budgets and quality tiers</li>
              <li><strong>Expand to voice</strong> with consistent safety and eval patterns</li>
            </ol>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            Want to build production-ready multimodal agents? 
            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
              Let's talk about your use case
            </a>.
          </p>
        </footer>
      </div>
    </article>
  );
};

export default AIMultimodalAgents2025;