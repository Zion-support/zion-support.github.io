import Link from 'next/link';

export default function AIInnovationLabPage() {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        <div className='mb-12'>
          <Link
            href='/<services'
            className='text-blue-400 hover:text-blue-300 mb-4 inline-block'
          >
            ← Back to Services
          </Link>
          <div className='flex items-center gap-2 mb-6'>
            <span className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold'>
              AI INNOVATION
            </span>
            <span className='bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold'>
              500x SPEED
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            AI Innovation Lab
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-4xl'>
            Revolutionary Neural Architecture Search (NAS) technology delivering
            500x faster AI model development with 99.7% accuracy. Transform your
            AI development from months to days with autonomous architecture
            discovery.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-16'>
          <div>
            <h2 className='text-3xl font-bold mb-6'>
              Autonomous AI Development
            </h2>
            <p className='text-lg text-gray-300 mb-6'>
              Our AI Innovation Lab leverages breakthrough NAS technology to
              autonomously discover optimal neural architectures. Experience
              500x faster model development with unprecedented accuracy and
              performance improvements.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='text-gray-300'>
                  500x faster model development
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='text-gray-300'>99.7% model accuracy</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='text-gray-300'>
                  Autonomous architecture discovery
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>✓</span>
                </div>
                <span className='text-gray-300'>90% cost reduction</span>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-bold mb-4'>Development Metrics</h3>
            <div className='grid grid-cols-2 gap-4'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-300 mb-2'>
                  500x
                </div>
                <div className='text-sm text-gray-300'>Faster Development</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-green-300 mb-2'>
                  99.7%
                </div>
                <div className='text-sm text-gray-300'>Accuracy</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-purple-300 mb-2'>
                  90%
                </div>
                <div className='text-sm text-gray-300'>Cost Reduction</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-orange-300 mb-2'>
                  10K+
                </div>
                <div className='text-sm text-gray-300'>Architectures/Week</div>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-center'>
            NAS Innovation Services
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all'>
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6'>
                <span className='text-2xl'>🔍</span>
              </div>
              <h3 className='text-2xl font-bold mb-4'>
                Autonomous Architecture Discovery
              </h3>
              <p className='text-gray-300 mb-6'>
                Our NAS system autonomously explores thousands of architectural
                variations to discover optimal designs for your specific AI
                tasks and requirements.
              </p>
              <ul className='text-sm text-gray-400 space-y-2'>
                <li>• Quantum-enhanced search algorithms</li>
                <li>• Unlimited architecture exploration</li>
                <li>• Self-improving discovery</li>
                <li>• Novel pattern identification</li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all'>
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6'>
                <span className='text-2xl'>⚡</span>
              </div>
              <h3 className='text-2xl font-bold mb-4'>
                Real-Time Performance Prediction
              </h3>
              <p className='text-gray-300 mb-6'>
                Advanced performance prediction models accurately estimate model
                performance before full training, enabling rapid evaluation of
                promising architectures.
              </p>
              <ul className='text-sm text-gray-400 space-y-2'>
                <li>• Instant performance estimation</li>
                <li>• 99.7% prediction accuracy</li>
                <li>• Multi-objective optimization</li>
                <li>• Resource-aware selection</li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all'>
              <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6'>
                <span className='text-2xl'>🚀</span>
              </div>
              <h3 className='text-2xl font-bold mb-4'>
                Multi-Domain Optimization
              </h3>
              <p className='text-gray-300 mb-6'>
                Simultaneous optimization across multiple AI domains and tasks,
                discovering architectures that excel across different
                applications and use cases.
              </p>
              <ul className='text-sm text-gray-400 space-y-2'>
                <li>• Cross-domain architecture transfer</li>
                <li>• Multi-task optimization</li>
                <li>• General-purpose designs</li>
                <li>• Scalable solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-center'>
            Implementation Process
          </h2>
          <div className='space-y-6'>
            <div className='flex items-start gap-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <span className='text-white font-bold'>1</span>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>
                  Requirements Analysis
                </h3>
                <p className='text-gray-300'>
                  Comprehensive analysis of your AI requirements, performance
                  targets, and constraints. We define clear objectives for the
                  NAS search process.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <span className='text-white font-bold'>2</span>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>
                  NAS System Deployment
                </h3>
                <p className='text-gray-300'>
                  Deploy our autonomous NAS system with quantum-enhanced search
                  algorithms. The system begins exploring architectural
                  variations immediately.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <span className='text-white font-bold'>3</span>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>
                  Architecture Discovery
                </h3>
                <p className='text-gray-300'>
                  Autonomous discovery of optimal architectures through
                  continuous exploration and evaluation. The system learns and
                  improves with each iteration.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <span className='text-white font-bold'>4</span>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>
                  Model Training & Validation
                </h3>
                <p className='text-gray-300'>
                  Training and validation of discovered architectures on your
                  specific datasets. We ensure optimal performance and validate
                  results.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-6'>
              <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                <span className='text-white font-bold'>5</span>
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>
                  Deployment & Optimization
                </h3>
                <p className='text-gray-300'>
                  Deployment of optimized models with continuous monitoring and
                  improvement. The system continues to learn and optimize
                  post-deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-center'>
            Success Stories
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-8 border border-green-500/20'>
              <h3 className='text-2xl font-bold mb-4'>
                AI Startup Breakthrough
              </h3>
              <p className='text-gray-300 mb-4'>
                Achieved 500x faster model development with 99.7% accuracy on
                computer vision tasks.
              </p>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Development Speed:</span>
                  <span className='text-green-300 font-bold'>500x faster</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Model Accuracy:</span>
                  <span className='text-green-300 font-bold'>99.7%</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Time to Market:</span>
                  <span className='text-green-300 font-bold'>
                    3 days vs 4 months
                  </span>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-8 border border-blue-500/20'>
              <h3 className='text-2xl font-bold mb-4'>
                Enterprise AI Acceleration
              </h3>
              <p className='text-gray-300 mb-4'>
                Reduced AI model development time from 6 months to 5 days across
                multiple domains.
              </p>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Speed Improvement:</span>
                  <span className='text-blue-300 font-bold'>500x</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Cost Savings:</span>
                  <span className='text-blue-300 font-bold'>
                    $1.8M annually
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Architectures Explored:</span>
                  <span className='text-blue-300 font-bold'>10K+ weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-green-900/20 rounded-xl p-12 border border-blue-500/20 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Ready to Accelerate Your AI Development?
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Transform your AI development process with autonomous architecture
            discovery. Our NAS technology can help you achieve breakthrough
            performance in days instead of months.
          </p>
          <div className='flex flex-wrap justify-center gap-6'>
            <Link
              href='/<contact'
              className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl'
            >
              Schedule Demo
            </Link>
            <Link
              href='/case-studies/ai-2026-neural-architecture-search-500x-<success'
              className='border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all'
            >
              View Success Story
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
