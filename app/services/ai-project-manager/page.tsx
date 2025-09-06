export const metadata = {
  title: 'AI Project Manager | Zion Tech Group',
  description: 'AI-powered project management solutions with intelligent planning, resource optimization, and automated workflow management.',
};

export default function AIProjectManagerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Project Manager
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              AI-powered project management solutions for intelligent planning and execution
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Planning</h3>
              <p className="text-gray-600 mb-4">AI-driven project planning and resource allocation.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Workflows</h3>
              <p className="text-gray-600 mb-4">Streamlined project workflows with intelligent automation.</p>
            </div>

<<<<<<< HEAD
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Analytics</h3>
              <p className="text-gray-600 mb-4">Comprehensive project analytics and performance insights.</p>
            </div>
          </div>
=======
      {/* Success Metrics */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="40%"
            label="Faster Project Completion"
            description="Average time reduction across all projects"
          />
          <MetricCard
            number="99%"
            label="Accuracy Rate"
            description="AI prediction accuracy for project outcomes"
          />
          <MetricCard
            number="60%"
            label="Resource Optimization"
            description="Improvement in resource utilization efficiency"
          />
          <MetricCard
            number="85%"
            label="Team Satisfaction"
            description="Increase in team productivity and satisfaction"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Perfect For Every Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            icon="💻"
            title="Software Development"
            description="Agile project management with AI-powered sprint planning and code review automation."
            benefits={["Sprint optimization", "Bug prediction", "Code quality analysis", "Release planning"]}
          />
          <UseCaseCard
            icon="🏗️"
            title="Construction"
            description="Complex construction project management with resource optimization and safety monitoring."
            benefits={["Resource scheduling", "Safety compliance", "Timeline tracking", "Cost optimization"]}
          />
          <UseCaseCard
            icon="🎨"
            title="Creative Agencies"
            description="Creative project management with client collaboration and creative workflow optimization."
            benefits={["Client management", "Creative briefs", "Asset tracking", "Approval workflows"]}
          />
          <UseCaseCard
            icon="🏥"
            title="Healthcare"
            description="Healthcare project management with compliance tracking and patient care optimization."
            benefits={["Compliance monitoring", "Patient tracking", "Resource allocation", "Quality assurance"]}
          />
          <UseCaseCard
            icon="🎓"
            title="Education"
            description="Educational project management with curriculum planning and student progress tracking."
            benefits={["Curriculum planning", "Student tracking", "Resource management", "Assessment planning"]}
          />
          <UseCaseCard
            icon="🏪"
            title="Retail"
            description="Retail project management with inventory optimization and customer experience enhancement."
            benefits={["Inventory management", "Customer analytics", "Store operations", "Marketing campaigns"]}
          />
>>>>>>> bfa374f2346b9b099cf6d7b959fd7dc047e316cc
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Projects?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your project management.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}