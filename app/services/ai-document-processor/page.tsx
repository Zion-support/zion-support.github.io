import Link from "next/link";

export const metadata = {
  title: "AI Document Processor | Zion Tech Group",
  description: "Intelligent document processing with OCR, data extraction, and automated workflows. Transform unstructured documents into actionable data.",
};

export default function AIDocumentProcessorPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Document Processor
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Intelligent document processing with OCR, data extraction, and automated workflows. 
          Transform unstructured documents into actionable data with 99% accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-6">
            <FeatureItem
              icon="📄"
              title="Multi-Format OCR"
              description="Extract text from PDFs, images, scanned documents, and handwritten notes with 99% accuracy"
            />
            <FeatureItem
              icon="🤖"
              title="Intelligent Data Extraction"
              description="AI-powered extraction of structured data from invoices, contracts, forms, and receipts"
            />
            <FeatureItem
              icon="🔄"
              title="Automated Workflows"
              description="Create custom processing pipelines with validation, approval, and integration workflows"
            />
            <FeatureItem
              icon="📊"
              title="Data Validation"
              description="Built-in validation rules and data quality checks to ensure accuracy and completeness"
            />
            <FeatureItem
              icon="🔍"
              title="Smart Classification"
              description="Automatically categorize and tag documents based on content and context"
            />
            <FeatureItem
              icon="🔗"
              title="API Integration"
              description="Seamless integration with existing systems via REST APIs and webhooks"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Starter"
              price="$39"
              period="per month"
              description="Perfect for small businesses and individuals"
              features={[
                "Up to 1,000 pages/month",
                "Basic OCR",
                "Standard data extraction",
                "Email support",
                "Basic integrations"
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$99"
              period="per month"
              description="Ideal for growing businesses and departments"
              features={[
                "Up to 10,000 pages/month",
                "Advanced OCR",
                "Custom data extraction",
                "Priority support",
                "Advanced integrations",
                "Workflow automation"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$299"
              period="per month"
              description="For large organizations with high-volume needs"
              features={[
                "Unlimited pages",
                "Custom AI models",
                "On-premise deployment",
                "24/7 support",
                "Custom integrations",
                "Advanced security"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Document Types We Process</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <DocumentTypeCard icon="🧾" name="Invoices" />
          <DocumentTypeCard icon="📋" name="Contracts" />
          <DocumentTypeCard icon="📝" name="Forms" />
          <DocumentTypeCard icon="🧾" name="Receipts" />
          <DocumentTypeCard icon="📄" name="Legal Docs" />
          <DocumentTypeCard icon="📊" name="Reports" />
          <DocumentTypeCard icon="🆔" name="ID Cards" />
          <DocumentTypeCard icon="📜" name="Certificates" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="Process medical records, insurance claims, and patient forms with HIPAA compliance"
          />
          <IndustryCard
            icon="🏦"
            title="Financial Services"
            description="Extract data from bank statements, loan applications, and financial reports"
          />
          <IndustryCard
            icon="⚖️"
            title="Legal"
            description="Process contracts, case files, and legal documents with high accuracy"
          />
          <IndustryCard
            icon="🏢"
            title="Real Estate"
            description="Handle property documents, lease agreements, and transaction records"
          />
          <IndustryCard
            icon="🚚"
            title="Logistics"
            description="Process shipping documents, delivery receipts, and inventory records"
          />
          <IndustryCard
            icon="🎓"
            title="Education"
            description="Extract data from student records, transcripts, and academic documents"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Document Processor?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">90% Time Savings</h3>
            <p className="text-gray-600">Reduce manual data entry time by 90% with automated document processing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">99% Accuracy</h3>
            <p className="text-gray-600">Industry-leading accuracy with AI-powered validation and quality checks</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
            <p className="text-gray-600">SOC 2 compliant with end-to-end encryption and secure data handling</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Integration Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IntegrationCard name="Salesforce" icon="☁️" />
          <IntegrationCard name="Microsoft 365" icon="📊" />
          <IntegrationCard name="Google Workspace" icon="🔍" />
          <IntegrationCard name="QuickBooks" icon="💰" />
          <IntegrationCard name="Zapier" icon="⚡" />
          <IntegrationCard name="Slack" icon="💬" />
          <IntegrationCard name="HubSpot" icon="🎯" />
          <IntegrationCard name="Custom APIs" icon="🔌" />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({ title, price, period, description, features, popular }: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-purple-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-purple-600 text-white hover:bg-purple-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Start Free Trial
      </button>
    </div>
  );
}

function DocumentTypeCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function IndustryCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function IntegrationCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Automate Your Document Processing?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and see how AI can transform your document workflows. 
        Process your first 100 documents for free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}