export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Explore our comprehensive range of AI, micro SaaS, and IT services designed to transform your business.',
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
          <p className="text-gray-300 mb-4">
            Custom AI models, automation, and intelligent systems that transform your business operations.
          </p>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Machine Learning Models</li>
            <li>• Natural Language Processing</li>
            <li>• Computer Vision</li>
            <li>• AI Automation</li>
          </ul>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">Micro SaaS</h3>
          <p className="text-gray-300 mb-4">
            Scalable, secure micro SaaS products that solve specific business challenges.
          </p>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Custom Web Applications</li>
            <li>• API Development</li>
            <li>• Database Design</li>
            <li>• User Management</li>
          </ul>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">IT Services</h3>
          <p className="text-gray-300 mb-4">
            Cloud migration, DevOps, SRE, and infrastructure management for enterprise scale.
          </p>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Cloud Migration</li>
            <li>• DevOps & SRE</li>
            <li>• Infrastructure Management</li>
            <li>• Security Consulting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}