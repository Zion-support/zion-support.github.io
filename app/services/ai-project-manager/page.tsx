export const metadata = {
  title: 'AI Project Manager | Zion Tech Group',
  description: 'AI-powered project management solutions for intelligent task allocation, resource optimization, and automated project tracking.',
  keywords: 'AI project manager, project management, task automation, resource optimization, project tracking',
};

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AIProjectManagerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Project Manager</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered project management solutions for intelligent task allocation, resource optimization,
          and automated project tracking. Streamline your projects with intelligent automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Intelligent Planning"
          details={[
            'Automated task allocation',
            'Resource optimization',
            'Timeline prediction',
            'Risk assessment',
            'Dependency management',
          ]}
        />
        <FeatureCard
          title="Smart Monitoring"
          details={[
            'Real-time progress tracking',
            'Performance analytics',
            'Bottleneck identification',
            'Quality assurance',
            'Automated reporting',
          ]}
        />
        <FeatureCard
          title="Team Collaboration"
          details={[
            'Team coordination',
            'Communication automation',
            'Meeting optimization',
            'Knowledge sharing',
            'Conflict resolution',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Your Projects?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your project management with AI-powered solutions that automate planning,
          optimize resources, and ensure successful project delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}