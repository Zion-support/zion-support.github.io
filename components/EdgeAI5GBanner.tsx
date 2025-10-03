import { Link } from 'react-router-dom';

export default function EdgeAI5GBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="text-3xl animate-pulse">⚡</span>
            <span className="font-bold text-xl">NEW: Edge AI + 5G Convergence</span>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/blog/ai-2025-oct-edge-ai-5g-convergence-revolution" 
                className="underline hover:text-yellow-200 font-bold flex items-center gap-2"
              >
                📘 Complete Guide
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold animate-pulse">{'<1ms LATENCY'}</span>
              </Link>
              <Link to="/case-studies/ai-2025-oct-manufacturing-edge-5g-success" 
                className="underline hover:text-yellow-200 font-bold flex items-center gap-2"
              >
                💰 $780M Manufacturing Success
                <span className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-bold animate-pulse">99.8% EFFICIENCY</span>
              </Link>
            </div>
          </div>
          <Link to="/services/october-2025-edge-ai-enterprise-transformation-services"
            className="bg-white text-teal-700 hover:bg-yellow-400 hover:text-teal-900 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all"
          >
            Deploy Edge AI →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EdgeAI5GShowcaseBanner() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⚡ Edge AI + 5G: Ultra-Low Latency Intelligence
          </h2>
          <p className="text-xl text-gray-600">
            Achieve {'<1ms'} latency, 99.999% reliability, and $780M+ value with edge intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl border-2 border-teal-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                📘 Implementation Guide
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Edge AI + 5G Revolution
            </h3>
            <p className="text-gray-600 mb-4">
              Complete guide to Edge AI + 5G convergence: architecture patterns, use cases, and implementation roadmap for real-time intelligence.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                {'<1ms Latency'}
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                99.999% Reliability
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                19 min read
              </span>
            </div>
            <Link to="/blog/ai-2025-oct-edge-ai-5g-convergence-revolution"
              className="text-teal-600 font-bold hover:text-teal-700 text-lg"
            >
              Read Complete Guide →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                💰 $780M Success
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Manufacturer: 99.8% Efficiency
            </h3>
            <p className="text-gray-600 mb-4">
              Fortune 500 manufacturer achieves 99.8% production efficiency, $780M value, and {'<2ms'} decision latency across 47 global facilities.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                99.8% Efficiency
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                97% Defect Reduction
              </span>
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                18 Months
              </span>
            </div>
            <Link to="/case-studies/ai-2025-oct-manufacturing-edge-5g-success"
              className="text-green-600 font-bold hover:text-green-700 text-lg"
            >
              Read Success Story →
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-teal-100 to-blue-100 p-6 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Revolutionary Use Cases
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl mb-2">🚗</div>
              <h4 className="font-bold text-gray-900 mb-1">Autonomous Vehicles</h4>
              <p className="text-sm text-gray-600">3ms response, 99.97% safety</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-bold text-gray-900 mb-1">Smart Manufacturing</h4>
              <p className="text-sm text-gray-600">Real-time quality, 67% productivity</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl mb-2">🏥</div>
              <h4 className="font-bold text-gray-900 mb-1">Remote Surgery</h4>
              <p className="text-sm text-gray-600">99.2% success, 450% access</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl mb-2">🌆</div>
              <h4 className="font-bold text-gray-900 mb-1">Smart Cities</h4>
              <p className="text-sm text-gray-600">47% less congestion, $890M value</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition-colors"
          >
            Get Your Edge AI + 5G Roadmap →
          </Link>
        </div>
      </div>
    </section>
  );
}
