import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting to transform your business.',
  keywords: 'AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence'
};

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureItem = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function AiServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI services to transform your business with cutting-edge artificial intelligence solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Machine Learning"
            description="Build intelligent systems that learn and adapt to your business needs."
            icon="🤖"
          />
          <ServiceCard
            title="Natural Language Processing"
            description="Process and understand human language for better customer interactions."
            icon="💬"
          />
          <ServiceCard
            title="Computer Vision"
            description="Extract insights from images and videos using advanced AI algorithms."
            icon="👁️"
          />
        </div>

        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}