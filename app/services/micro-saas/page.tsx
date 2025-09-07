import Link from 'next/link';

export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
};

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete micro SaaS development services to help you build and launch successful software products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI-Powered Tools"
            description="Build intelligent tools that automate tasks and enhance productivity."
            icon="🤖"
          />
          <ServiceCard
            title="Productivity Apps"
            description="Create apps that help users manage their work and personal tasks efficiently."
            icon="📱"
          />
          <ServiceCard
            title="Marketing Automation"
            description="Develop tools that streamline marketing processes and improve customer engagement."
            icon="📈"
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