import { Helmet } from 'react-helmet-async';
import { newContent2027, newServices2027 } from '../data/newContent2027';

const AI2027RevolutionaryBreakthrough: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Helmet>
        <title>AI 2027 Revolutionary Breakthrough - Next-Gen Technology Solutions</title>
        <meta name="description" content="Discover the revolutionary AI breakthroughs of 2027 including synthetic consciousness, quantum-neural fusion, and autonomous business ecosystems." />
        <meta name="keywords" content="AI 2027, synthetic consciousness, quantum computing, autonomous business, holographic reality" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI 2027
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Revolutionary Breakthrough
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Experience the future of artificial intelligence with groundbreaking technologies that are reshaping reality itself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Explore Breakthroughs
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Revolutionary Breakthroughs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {newContent2027.map((content) => (
              <div key={content.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                  <span className="ml-auto text-gray-300 text-sm">
                    {content.publishDate}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {content.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{content.author}</p>
                      <p className="text-gray-400 text-sm">{content.authorRole}</p>
                    </div>
                  </div>
                  <span className="text-gray-300 text-sm">
                    {content.readTime}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.tags.map((tag) => (
                    <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Revolutionary Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newServices2027.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="text-3xl font-bold text-cyan-400 mb-6">
                  {service.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-cyan-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready for the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of forward-thinking organizations already implementing these revolutionary AI technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AI2027RevolutionaryBreakthrough;