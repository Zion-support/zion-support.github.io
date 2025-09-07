export const metadata = {
  title: 'AI Healthcare Analytics | Zion Tech Group',
  description: 'Advanced AI-powered healthcare analytics solutions for data-driven insights, patient outcomes, and operational efficiency.',
  keywords: 'AI healthcare analytics, healthcare data, medical AI, healthcare insights, patient analytics',
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

export default function AIHealthcareAnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Healthcare Analytics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced AI-powered healthcare analytics solutions for data-driven insights, patient outcomes,
          and operational efficiency. Transform healthcare delivery with intelligent analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Patient Analytics"
          details={[
            'Patient outcome prediction',
            'Risk stratification',
            'Treatment optimization',
            'Readmission prevention',
            'Personalized care plans',
          ]}
        />
        <FeatureCard
          title="Operational Analytics"
          details={[
            'Resource optimization',
            'Workflow analysis',
            'Capacity planning',
            'Cost reduction',
            'Efficiency metrics',
          ]}
        />
        <FeatureCard
          title="Clinical Insights"
          details={[
            'Disease pattern recognition',
            'Drug effectiveness analysis',
            'Clinical trial optimization',
            'Diagnostic accuracy',
            'Treatment protocols',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Healthcare Analytics?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Leverage AI to unlock insights from healthcare data, improve patient outcomes,
          and optimize operational efficiency with our advanced analytics solutions.
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