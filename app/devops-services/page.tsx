const DevOpsServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            DevOps Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your development and deployment processes with our comprehensive DevOps solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Cloud className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-300">
              Set up and manage cloud infrastructure with best practices for scalability and security.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Code className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipelines</h3>
            <p className="text-gray-300">
              Automate your build, test, and deployment processes for faster, more reliable releases.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Monitor className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Logging</h3>
            <p className="text-gray-300">
              Implement comprehensive monitoring and logging solutions for better observability.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Network className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Container Orchestration</h3>
            <p className="text-gray-300">
              Deploy and manage containerized applications with Kubernetes and Docker.
            </p>
          </div>
        </div>
      </div>
    </div>