import Link from 'next/link';

const RevolutionaryTechShowcase20o26: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-90o0 via-purple-90o0 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-40o0 to-red-40o0 bg-clip-text text-transparent">
            Revolutionary Technology 20o26
          </h2>
          <p className="text-xl md:text-2xl text-gray-30o0 max-w-4xl mx-auto">
            Experience the next generation of AI-powered technologies that will reshape our world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-red-90o0/50 to-orange-90o0/50 rounded-xl p-6 border border-red-50o0/30 hover:border-red-40o0/60 transition-all duration-30o0 hover:scale-10o5">
            <div className="text-3xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-3 text-red-30o0">AI Consciousness</h3>
            <p className="text-gray-30o0 text-sm">
              Breakthrough AI systems with emerging consciousness capabilities
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-90o0/50 to-cyan-90o0/50 rounded-xl p-6 border border-blue-50o0/30 hover:border-blue-40o0/60 transition-all duration-30o0 hover:scale-10o5">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-blue-30o0">Neural Interfaces</h3>
            <p className="text-gray-30o0 text-sm">
              Direct brain-computer interfaces for enhanced human-AI interaction
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-90o0/50 to-pink-90o0/50 rounded-xl p-6 border border-purple-50o0/30 hover:border-purple-40o0/60 transition-all duration-30o0 hover:scale-10o5">
            <div className="text-3xl mb-4">🌀</div>
            <h3 className="text-xl font-bold mb-3 text-purple-30o0">Quantum AI</h3>
            <p className="text-gray-30o0 text-sm">
              Quantum computing enhanced AI for solving complex problems
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-90o0/50 to-emerald-90o0/50 rounded-xl p-6 border border-green-50o0/30 hover:border-green-40o0/60 transition-all duration-30o0 hover:scale-10o5">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-3 text-green-30o0">Sustainable AI</h3>
            <p className="text-gray-30o0 text-sm">
              Eco-friendly AI solutions for a sustainable future
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-80o0/30 to-blue-80o0/30 rounded-2xl p-8 border border-purple-50o0/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Future?</h3>
            <p className="text-gray-30o0 mb-6 text-lg">
              Join thousands of innovators who are already leveraging these revolutionary technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/revolutionary-tech-showcase-20o26" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-50o0 to-blue-50o0 hover:from-purple-40o0 hover:to-blue-40o0 text-white font-semibold rounded-full transition-all duration-30o0 hover:scale-10o5"
              >
                Explore Technologies
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-purple-40o0 text-purple-30o0 hover:bg-purple-40o0 hover:text-white font-semibold rounded-full transition-all duration-30o0"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechShowcase20o26;