export const metadata = {
  title: 'ContactForm | Zion Tech Group',
  description: 'Professional contactform solutions for your business needs.',
  keywords: 'ContactForm, services, business, technology',
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

export default function ServicePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">ContactForm</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional contactform solutions for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Professional Solutions"
          details={[
            'Expert implementation',
            'Custom development',
            'Quality assurance',
            'Ongoing support',
            'Scalable architecture',
          ]}
        />
        <FeatureCard
          title="Advanced Technology"
          details={[
            'Cutting-edge tools',
            'Modern frameworks',
            'Best practices',
            'Performance optimization',
            'Security compliance',
          ]}
        />
        <FeatureCard
          title="Business Value"
          details={[
            'ROI optimization',
            'Process improvement',
            'Cost reduction',
            'Efficiency gains',
            'Competitive advantage',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your business with our professional contactform solutions.
          Contact us today to discuss your requirements.
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