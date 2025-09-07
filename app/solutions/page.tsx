};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI-Powered Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      icon: '🤖',
      features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business with comprehensive digital solutions.',
      icon: '🔄',
      features: ['Legacy System Migration', 'Cloud Adoption', 'Process Optimization']
    },
    {
      title: 'Enterprise Security',
      description: 'Protect your business with advanced cybersecurity solutions.',
      icon: '🔒',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management']
    },
    {
      title: 'Data Intelligence',
      description: 'Transform data into actionable business insights.',
      icon: '📊',
      features: ['Data Analytics', 'Business Intelligence', 'Real-time Dashboards']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions for your business.',
      icon: '☁️',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure Management']
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific needs.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Apps', 'API Development']
    }
  ];

  return (
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your business needs and create intelligent solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}