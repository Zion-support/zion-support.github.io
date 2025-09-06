export const metadata = { 
  title: 'AI Document Processor | Zion Tech Group',
  description: 'Intelligent document processing with OCR, data extraction, and automated workflows. Process invoices, contracts, and forms with 99% accuracy.'
};

export default function AIDocumentProcessorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Document Processor
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent document processing with OCR, data extraction, and automated workflows. 
            Process invoices, contracts, and forms with 99% accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon="📄"
            title="Smart OCR Engine"
            description="Advanced optical character recognition with 99%+ accuracy"
            features={["Multi-language support", "Handwriting recognition", "Table extraction", "Image enhancement"]}
          />
          <FeatureCard
            icon="🧠"
            title="AI Data Extraction"
            description="Intelligent extraction of structured data from unstructured documents"
            features={["Invoice processing", "Contract analysis", "Form data extraction", "Custom field mapping"]}
          />
          <FeatureCard
            icon="⚡"
            title="Automated Workflows"
            description="Set up automated document processing pipelines"
            features={["Batch processing", "Auto-routing", "Approval workflows", "Integration APIs"]}
          />
          <FeatureCard
            icon="🔍"
            title="Document Classification"
            description="Automatically categorize and organize documents"
            features={["Document type detection", "Content categorization", "Duplicate detection", "Version control"]}
          />
          <FeatureCard
            icon="📊"
            title="Analytics & Reporting"
            description="Comprehensive insights into document processing performance"
            features={["Processing metrics", "Error tracking", "Cost analysis", "Custom reports"]}
          />
          <FeatureCard
            icon="🔒"
            title="Enterprise Security"
            description="Bank-level security for sensitive document processing"
            features={["End-to-end encryption", "Access controls", "Audit trails", "Compliance tools"]}
          />
        </div>

        <DocumentTypesSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, features }: { icon: string; title: string; description: string; features: string[] }) {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-orange-100 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-orange-100">
            <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DocumentTypesSection() {
  const documentTypes = [
    {
      title: "Invoices & Receipts",
      description: "Extract vendor, amount, date, and line items automatically",
      icon: "🧾",
      accuracy: "99.2%"
    },
    {
      title: "Contracts & Agreements",
      description: "Identify key terms, dates, parties, and obligations",
      icon: "📋",
      accuracy: "98.7%"
    },
    {
      title: "Forms & Applications",
      description: "Process structured forms with high accuracy",
      icon: "📝",
      accuracy: "99.5%"
    },
    {
      title: "Medical Records",
      description: "HIPAA-compliant processing of medical documents",
      icon: "🏥",
      accuracy: "97.8%"
    },
    {
      title: "Legal Documents",
      description: "Extract case numbers, dates, and legal entities",
      icon: "⚖️",
      accuracy: "98.9%"
    },
    {
      title: "Financial Statements",
      description: "Process balance sheets, P&L, and financial reports",
      icon: "💰",
      accuracy: "99.1%"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Supported Document Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentTypes.map((docType, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{docType.icon}</div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                {docType.accuracy} accuracy
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{docType.title}</h3>
            <p className="text-gray-600">{docType.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter"
          price="$199"
          period="month"
          description="Perfect for small businesses processing documents"
          features={["Up to 1,000 pages/month", "Basic OCR", "5 document types", "Email support", "API access"]}
          popular={false}
        />
        <PricingCard
          name="Professional"
          price="$499"
          period="month"
          description="Advanced features for growing businesses"
          features={["Up to 10,000 pages/month", "AI extraction", "All document types", "Priority support", "Custom workflows", "Advanced analytics"]}
          popular={true}
        />
        <PricingCard
          name="Enterprise"
          price="Custom"
          period=""
          description="Full-scale solution for large organizations"
          features={["Unlimited pages", "Custom AI models", "White-label solution", "24/7 support", "Dedicated account manager", "On-premise option"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({ name, price, period, description, features, popular }: { 
  name: string; price: string; period: string; description: string; features: string[]; popular: boolean 
}) {
  return (
    <div className={`relative border-2 rounded-xl p-8 ${popular ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-600">/{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-orange-600 text-white hover:bg-orange-700' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-2xl text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Document Processing?</h2>
      <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
        Contact our document processing experts to discuss your specific needs and get a custom solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-orange-100">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}