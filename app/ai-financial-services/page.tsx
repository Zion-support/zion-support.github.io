import ErrorBoundary from '../components/ErrorBoundary';

function AiFinancialServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Ai Financial Services</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-white">
            <p className="text-lg mb-6">
              Discover our comprehensive ai financial services solutions designed to help your business 
              achieve unprecedented growth and efficiency.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced AI-powered solutions</li>
                  <li>• Real-time analytics and insights</li>
                  <li>• Scalable cloud infrastructure</li>
                  <li>• 24/7 expert support</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Increased productivity</li>
                  <li>• Cost optimization</li>
                  <li>• Enhanced security</li>
                  <li>• Future-proof technology</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <ErrorBoundary>
      <AiFinancialServicesPage />
    </ErrorBoundary>
  );
}