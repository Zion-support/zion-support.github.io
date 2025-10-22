import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Advanced AI and IT solutions for modern businesses.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI and IT solutions powered by cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300">
              Advanced AI solutions for modern businesses.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
            <p className="text-gray-300">
              Scalable and reliable infrastructure solutions.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
            <p className="text-gray-300">
              AI-powered insights and automation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}