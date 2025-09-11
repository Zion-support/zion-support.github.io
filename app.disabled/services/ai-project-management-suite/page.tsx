export const metadata = {
  title: 'AI Project Management Suite | Zion Tech Group',
  description: 'Comprehensive AI project management solutions.',
  keywords: 'ai-project-management-suite, services, business, technology'

export const metadata = {
  title: "AI Project Management Suite | Zion Tech Group",
  description:
    "Intelligent project management with AI-powered task automation, resource optimization, risk prediction, and smart scheduling for enhanced team productivity.",
  keywords:
    "AI project management, task automation, resource optimization, risk prediction, team productivity, project planning AI",
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;

}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Project Management Suite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI project management solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai-project-management-suite solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai-project-management-suite solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

    </div>
  );
}

