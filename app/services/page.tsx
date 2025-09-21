export default function ServicesPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Cloud Solutions</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Comprehensive cloud infrastructure and migration services including AWS, Azure, and Google Cloud.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Cloud Migration & Strategy</li>
              <li>• Infrastructure as Code</li>
              <li>• DevOps & CI/CD</li>
              <li>• Cloud Security & Compliance</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Cybersecurity</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced security solutions to protect your digital assets with threat detection and compliance.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Security Assessment & Auditing</li>
              <li>• Threat Detection & Response</li>
              <li>• Compliance & Governance</li>
              <li>• Security Training & Awareness</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                <svg className="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Intelligent solutions powered by artificial intelligence to automate processes and gain insights.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Custom AI Model Development</li>
              <li>• Data Analytics & Insights</li>
              <li>• Process Automation</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Digital Transformation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Complete digital overhaul for modern businesses with end-to-end transformation services.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Digital Strategy & Planning</li>
              <li>• Legacy System Modernization</li>
              <li>• Process Optimization</li>
              <li>• Change Management</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Modern, responsive web applications using the latest technologies and frameworks.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Custom Web Applications</li>
              <li>• E-commerce Solutions</li>
              <li>• Mobile-Responsive Design</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                <svg className="h-8 w-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Data Analytics</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced analytics and business intelligence solutions to drive data-driven decisions.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Business Intelligence Dashboards</li>
              <li>• Data Warehousing</li>
              <li>• Real-time Analytics</li>
              <li>• Data Visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}