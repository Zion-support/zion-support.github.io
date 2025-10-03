import { Leaf, Recycle, Zap, ArrowRight } from 'lucide-react';

export default function April2026SustainableAITransformationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M70 0c38.66 0 70 31.34 70 70s-31.34 70-70 70S0 108.66 0 70 31.34 0 70 0zm0 20c-27.615 0-50 22.385-50 50s22.385 50 50 50 50-22.385 50-50-22.385-50-50-50zm0 10c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 10c-16.569 0-30 13.431-30 30s13.431 30 30 30 30-13.431 30-30-13.431-30-30-30zm0 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-400/30 mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">🌱 BREAKING: APRIL 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
            Sustainable AI Transformation
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Carbon-Neutral Intelligence Revolution with 3.5x Better Performance
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Leaf className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">94%</div>
              <div className="text-sm text-gray-300">Carbon Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">3.5x</div>
              <div className="text-sm text-gray-300">Better Performance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Recycle className="w-8 h-8 text-teal-400" />
              </div>
              <div className="text-3xl font-bold text-teal-400 mb-2">$67M</div>
              <div className="text-sm text-gray-300">Annual Savings</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <p className="text-lg text-gray-200 mb-6">
              The Sustainable AI Transformation represents a paradigm shift toward environmentally conscious artificial intelligence. 
              By optimizing energy consumption, utilizing renewable resources, and implementing carbon-negative technologies, 
              organizations achieve superior AI performance while contributing to global sustainability efforts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Green Neural Networks</h3>
                  <p className="text-sm text-gray-300">Energy-efficient AI models with 90% lower power consumption</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Carbon-Negative Computing</h3>
                  <p className="text-sm text-gray-300">AI systems that remove more CO2 than they produce</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Renewable Energy Integration</h3>
                  <p className="text-sm text-gray-300">AI processing powered entirely by clean energy sources</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Circular AI Economy</h3>
                  <p className="text-sm text-gray-300">Reusable and recyclable AI infrastructure components</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2026-april-sustainable-ai-transformation"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Read Full Guide
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              Sustainability Assessment
            </a>
          </div>

          {/* Success Story */}
          <div className="mt-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-400/30">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Technology Company Success</h3>
            <p className="text-gray-300">
              Achieved <span className="text-emerald-400 font-semibold">carbon-neutral AI operations</span> and 
              <span className="text-green-400 font-semibold"> eliminated 2.4 million tons of CO2 emissions</span> annually 
              while saving $127M in energy costs and increasing AI capabilities.
            </p>
          </div>

          {/* Environmental Impact */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-600/20 rounded-xl p-6 border border-emerald-400/30">
              <h3 className="text-lg font-semibold text-white mb-3">Environmental Benefits</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• 94% reduction in carbon emissions</li>
                <li>• 87% reduction in energy consumption</li>
                <li>• 2.4M tons CO2 eliminated annually</li>
                <li>• Carbon-negative operations achieved</li>
              </ul>
            </div>
            <div className="bg-blue-600/20 rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-lg font-semibold text-white mb-3">Business Benefits</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• $67M annual cost savings</li>
                <li>• 3.5x performance improvement</li>
                <li>• Enhanced brand reputation</li>
                <li>• Regulatory compliance achieved</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}