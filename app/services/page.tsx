export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to drive your business forward.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions for modern businesses, from AI-powered tools to complete IT infrastructure.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SaaS Solutions</h3>
          <p className="text-gray-600 mb-4">
            End-to-end product development with billing, auth, analytics and growth optimization
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Custom SaaS development</li>
            <li>• Payment integration</li>
            <li>• User authentication</li>
            <li>• Analytics dashboard</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3>
          <p className="text-gray-600 mb-4">
            Cutting-edge AI solutions for automation, analytics, and intelligent decision making
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• AI chatbots & assistants</li>
            <li>• Machine learning models</li>
            <li>• Natural language processing</li>
            <li>• Computer vision</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">💻</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Services</h3>
          <p className="text-gray-600 mb-4">
            Complete IT infrastructure, cloud migration, and digital transformation solutions
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Cloud migration</li>
            <li>• DevOps & CI/CD</li>
            <li>• Infrastructure management</li>
            <li>• Security solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}