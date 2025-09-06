import Link from 'next/link';

export const metadata = { 
  title: 'AI Document Processor | Zion Tech Group',
  description: 'Intelligent document processing with AI. Extract data, classify documents, and automate workflows with advanced OCR and NLP.',
};

export default function AIDocumentProcessorPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Document Processor</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent document processing platform that extracts data, classifies documents, 
          and automates workflows using advanced OCR and natural language processing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Document Processing" 
          details={[
            "OCR for scanned documents",
            "PDF text extraction",
            "Image text recognition",
            "Handwriting recognition",
            "Multi-language support"
          ]} 
        />
        <FeatureCard 
          title="AI Classification" 
          details={[
            "Automatic document classification",
            "Content categorization",
            "Sentiment analysis",
            "Key information extraction",
            "Smart data validation"
          ]} 
        />
        <FeatureCard 
          title="Workflow Automation" 
          details={[
            "Automated data entry",
            "Document routing",
            "Approval workflows",
            "Integration with business systems",
            "Custom processing rules"
          ]} 
        />
      </div>

      <PricingSection />
      
      <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Automate Document Processing?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Transform your document workflows with AI-powered processing. 
          Perfect for legal firms, healthcare, finance, and any document-heavy business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+13024640950" 
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-emerald-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan 
          name="Basic" 
          price="$59/mo" 
          features={[
            "1,000 documents/month",
            "Basic OCR processing",
            "Standard data extraction",
            "Email support",
            "Basic integrations"
          ]} 
        />
        <PricingPlan 
          name="Professional" 
          price="$199/mo" 
          features={[
            "10,000 documents/month",
            "Advanced AI classification",
            "Custom data extraction rules",
            "Priority support",
            "Advanced workflow automation"
          ]} 
          featured={true}
        />
        <PricingPlan 
          name="Enterprise" 
          price="$599/mo" 
          features={[
            "Unlimited documents",
            "Custom AI model training",
            "White-label solution",
            "Dedicated support",
            "API access & custom integrations"
          ]} 
        />
      </div>
    </div>
  );
}

function PricingPlan({ 
  name, 
  price, 
  features, 
  featured = false 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  featured?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${
      featured 
        ? 'border-emerald-500 bg-emerald-50 shadow-lg' 
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-emerald-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}