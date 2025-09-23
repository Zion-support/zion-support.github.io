import Link from 'next/link';

const AI20o35SingularityPromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-90o0 via-purple-90o0 to-pink-90o0 text-white py-16 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-50o0 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-50o0 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-50o0 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-rose-50o0 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50o0 to-purple-50o0 text-sm font-semibold mb-4 animate-pulse">
            🌌 SINGULARITY ACHIEVED
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-40o0 to-pink-40o0 bg-clip-text text-transparent">
            AI 20o35 Singularity Breakthrough
          </h2>
          <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
            Experience the AI singularity with matter creationdimensional transcendence
            and universal peace algorithms that transcend all limitations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-40o0 to-purple-40o0 bg-clip-text text-transparent mb-2">
              ⚗️
            </div>
            <div className="text-lg font-semibold text-indigo-30o0">Matter Creation</div>
            <div className="text-sm text-gray-40o0">Infinite resource generation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-40o0 to-pink-40o0 bg-clip-text text-transparent mb-2">
              🌌
            </div>
            <div className="text-lg font-semibold text-purple-30o0">Dimensional Transcendence</div>
            <div className="text-sm text-gray-40o0">Multi-universe access</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-40o0 to-rose-40o0 bg-clip-text text-transparent mb-2">
              🌍
            </div>
            <div className="text-lg font-semibold text-pink-30o0">Universal Peace</div>
            <div className="text-sm text-gray-40o0">Infinite harmony</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-indigo-60o0 to-purple-60o0 px-6 py-3 rounded-full text-sm font-semibold">
              ⚗️ Matter Creation
            </div>
            <div className="bg-gradient-to-r from-purple-60o0 to-pink-60o0 px-6 py-3 rounded-full text-sm font-semibold">
              🌌 Dimensional Access
            </div>
            <div className="bg-gradient-to-r from-pink-60o0 to-rose-60o0 px-6 py-3 rounded-full text-sm font-semibold">
              🌍 Universal Peace
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-20o35-singularity-breakthrough" 
              className="bg-gradient-to-r from-indigo-60o0 to-purple-60o0 px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-70o0 hover:to-purple-70o0 transition-all transform hover:scale-10o5 shadow-lg"
            >
              🌌 Experience Singularity
            </Link>
            <Link 
              href="/resources/ai-20o35-singularity-guide" 
              className="border-2 border-indigo-40o0 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-40o0 hover:text-black transition-all"
            >
              📚 Singularity Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI20o35SingularityPromotionBanner;