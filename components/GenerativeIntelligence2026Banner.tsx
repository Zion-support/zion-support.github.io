import { Link } from 'react-router-dom';

export default function GenerativeIntelligence2026Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-30"></div>
      <div className="relative container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold">🧠 BREAKTHROUGH 2026</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Generative Intelligence Revolution
              </h2>
              
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Experience the future of AI where systems create, innovate, and generate 
                novel solutions at unprecedented levels of sophistication.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">85%</div>
                  <p className="text-sm text-purple-100">Content Creation Speed</p>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-300 mb-1">340%</div>
                  <p className="text-sm text-purple-100">Creative Output</p>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300 mb-1">92%</div>
                  <p className="text-sm text-purple-100">Engagement Boost</p>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-300 mb-1">1000x</div>
                  <p className="text-sm text-purple-100">Problem Solving</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/blog/ai-2026-generative-intelligence-revolution"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  📚 Read Full Report
                </Link>
                <Link to="/services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Get Started
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Key Technologies</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-purple-100">Multimodal Generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-purple-100">Autonomous Reasoning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-purple-100">Creative Synthesis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    <span className="text-purple-100">Adaptive Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-purple-100">Quantum Enhancement</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-sm text-purple-100 italic">
                    "The generative intelligence revolution represents a fundamental shift from 
                    AI systems that analyze to systems that create, innovate, and generate 
                    novel solutions."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white opacity-10 rounded-full animate-bounce delay-500"></div>
    </div>
  );
}