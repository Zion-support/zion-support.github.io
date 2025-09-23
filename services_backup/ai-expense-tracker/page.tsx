import Link from "next/link";

export const metadata = {
  title: "AI Expense Tracker | Zion Tech Group",
  description:
    "Smart expense tracking and financial management powered by AI. Automate receipt processing, categorization, and expense reporting."};

export default function AIExpenseTrackerPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Expense Tracker
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Smart expense tracking and financial management powered by AI.
          Automate receipt processing, categorization, and expense reporting for
          individuals and businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-4">
            <FeatureItem
              icon="📸"
              title="Smart Receipt Scanning"
              description="Take a photo of any receipt and our AI automatically extracts merchant, amount, date, and category information."
            />
            <FeatureItem
              icon="🏷️"
              title="Auto-Categorization"
              description="AI-powered expense categorization that learns from your patterns and automatically sorts expenses by type."
            />
            <FeatureItem
              icon="📊"
              title="Real-time Analytics"
              description="Comprehensive dashboards showing spending patterns, budget tracking, and financial insights."
            />
            <FeatureItem
              icon="💼"
              title="Business Integration"
              description="Seamlessly integrate with accounting software like QuickBooks, Xero, and SAP for streamlined workflows."
            />
            <FeatureItem
              icon="🔍"
              title="Expense Search & Filter"
              description="Powerful search capabilities to find any expense instantly, with advanced filtering by date, category, or amount."
            />
            <FeatureItem
              icon="📱"
              title="Mobile App"
              description="Full-featured mobile app for iOS and Android with offline capability and receipt scanning on the go."
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Personal"
              price="$9"
              period="per month"
              description="Perfect for individuals and freelancers"
              features={[
                "Up to 100 receipts per month",
                "Basic categorization",
                "Expense reports",
                "Mobile app access",
                "Email support"]}
              popular={false}
            />
            <PricingCard
              plan="Business"
              price="$29"
              period="per month"
              description="Ideal for small to medium businesses"
              features={[
                "Up to 500 receipts per month",
                "Advanced AI categorization",
                "Team collaboration",
                "Accounting integrations",
                "Priority support",
                "Custom reporting"]}
              popular={true}
            />
            <PricingCard
              plan="Enterprise"
              price="$99"
              period="per month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited receipts",
                "Custom AI training",
                "Advanced analytics",
                "Dedicated support",
                "Custom integrations",
                "On-premise deployment"]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step="1"
            title="Capture Receipts"
            description="Take photos of receipts or upload PDFs. Our AI instantly extracts all relevant information."
          />
          <StepCard
            step="2"
            title="AI Processing"
            description="Advanced AI categorizes expenses, detects duplicates, and flags potential issues or policy violations."
          />
          <StepCard
            step="3"
            title="Track & Report"
            description="View real-time analytics, generate reports, and export data to your accounting system."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Save 5+ hours per week on expense management
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                99.5% accuracy in receipt data extraction
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Reduce expense processing time by 80%
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Real-time budget monitoring and alerts
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">
                Compliance with tax and accounting standards
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Small business expense management
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">
                Employee expense reimbursement
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Freelancer tax preparation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Travel expense tracking</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span className="text-gray-600">Project cost management</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our AI Expense Tracker?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-semibold text-gray-900 mb-2">Accuracy</h3>
            <p className="text-gray-600">
              99.5% accuracy in data extraction and categorization
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Speed</h3>
            <p className="text-gray-600">
              Process receipts in seconds, not minutes
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
            <p className="text-gray-600">
              Bank-level encryption and compliance with financial standards
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Ready to Simplify Your Expense Management?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses and individuals who trust our AI expense
          tracker to streamline their financial management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  price,
  period,
  description,
  features,
  popular}: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-1">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({
  step,
  title,
  description}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
