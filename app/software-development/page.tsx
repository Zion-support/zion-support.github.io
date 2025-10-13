const SoftwareDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Software Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom software solutions built with modern technologies and best practices
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Web Applications</h3>
            <p className="text-gray-300">
              Modern, responsive web applications built with React, Next.js, and TypeScript.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Monitor className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Mobile Apps</h3>
            <p className="text-gray-300">
              Cross-platform mobile applications for iOS and Android using React Native.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Solutions</h3>
            <p className="text-gray-300">
              Scalable cloud-based applications and microservices architecture.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Network className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">API Development</h3>
            <p className="text-gray-300">
              RESTful APIs and GraphQL endpoints for seamless data integration.
            </p>
          </div>
        </div>
      </div>
    </div>