import Link from "next/link";

export const metadata = {
<<<<<<< HEAD:temp_conflicted_files/page.tsx
<<<<<<< HEAD
<<<<<<< HEAD:temp_conflicted_files/page.tsx
<<<<<<< HEAD
  title: "AI Customer Insights | Zion Tech Group",
  description: "Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.",
=======
  title: 'AI Customer Insights | Zion Tech Group',
  description:
    'Unlock customer behavior insights with AI-powered analytics, sentiment analysis, and predictive modeling. Drive growth with data-driven decisions.',
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
  title: 'AI Customer Insights | Zion Tech Group',
  description: 'Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.',
  keywords: 'AI customer insights, customer analytics, behavior analysis, sentiment analysis, predictive analytics',
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:app/services/ai-customer-insights/page.tsx
=======
  title: "AI Customer Insights | Zion Tech Group",
  description: "Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  title: "AI Expense Tracker | Zion Tech Group",
  description:
    "Smart expense tracking and financial management powered by AI. Automate receipt processing, categorization, and expense reporting.",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:app/services/ai-expense-tracker/page.tsx
};

export default function AIExpenseTrackerPage() {
  return (
    <div className="animate-fade-in">
<<<<<<< HEAD
<<<<<<< HEAD:temp_conflicted_files/page.tsx
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Expense Tracker
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD:temp_conflicted_files/page.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          Transform customer data into actionable insights with AI-powered analytics. 
          Understand customer behavior, preferences, and trends to drive business growth.
=======
          Unlock customer behavior insights with AI-powered analytics, sentiment
          analysis, and predictive modeling. Drive growth with data-driven
          decisions and personalized customer experiences.
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🧠"
              title="Behavioral Analysis"
              description="AI-powered analysis of customer interactions, purchase patterns, and engagement metrics across all touchpoints."
            />
            <FeatureItem
              icon="📊"
              title="Predictive Analytics"
              description="Machine learning models to predict customer lifetime value, churn risk, and future purchase behavior."
            />
            <FeatureItem
              icon="🎯"
              title="Segmentation Intelligence"
              description="Automated customer segmentation based on behavior, demographics, and preferences for targeted marketing."
            />
            <FeatureItem
              icon="💬"
              title="Sentiment Analysis"
              description="Real-time analysis of customer feedback, reviews, and social media mentions to understand satisfaction levels."
            />
            <FeatureItem
              icon="📈"
              title="Trend Detection"
              description="Identify emerging trends, seasonal patterns, and market shifts that impact customer behavior."
            />
            <FeatureItem
              icon="🔮"
              title="Recommendation Engine"
              description="Personalized product and content recommendations based on individual customer preferences and behavior."
=======
=======
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Customer Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform customer data into actionable insights with AI-powered analytics. 
            Understand customer behavior, preferences, and trends to drive better 
            business decisions and improve customer experience.
          </p>
        </div>
=======
          Transform customer data into actionable insights with AI-powered analytics. 
          Understand customer behavior, preferences, and trends to drive business growth.
=======
          Smart expense tracking and financial management powered by AI.
          Automate receipt processing, categorization, and expense reporting for
          individuals and businesses.
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:app/services/ai-expense-tracker/page.tsx
        </p>
      </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
                "Email support",
              ]}
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
                "Custom reporting",
              ]}
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
                "On-premise deployment",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <div className="text-center py-16 bg-blue-50 rounded-lg">
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:app/services/ai-customer-insights/page.tsx
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Unlock Customer Insights?
          </h2>
<<<<<<< HEAD:temp_conflicted_files/page.tsx
          <div className="space-y-6">
            <FeatureItem
              icon="🧠"
              title="Predictive Analytics"
              description="AI-powered customer lifetime value prediction, churn risk analysis, and purchase behavior forecasting"
            />
            <FeatureItem
              icon="😊"
              title="Sentiment Analysis"
              description="Real-time sentiment analysis from reviews, social media, and customer feedback across all channels"
            />
            <FeatureItem
              icon="🎯"
              title="Customer Segmentation"
              description="Advanced AI clustering to identify high-value customer segments and personalized targeting strategies"
            />
            <FeatureItem
              icon="📊"
              title="Behavioral Analytics"
              description="Deep insights into customer journey, engagement patterns, and conversion optimization opportunities"
            />
            <FeatureItem
              icon="🔮"
              title="Churn Prediction"
              description="Early warning system to identify at-risk customers and trigger retention campaigns"
            />
            <FeatureItem
              icon="📈"
              title="ROI Optimization"
              description="AI recommendations for marketing spend allocation and customer acquisition strategies"
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
            />
          </div>
        </div>

        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              plan="Starter"
              price="$199"
              period="per month"
              description="Perfect for small businesses getting started with customer analytics"
              features={[
                "Up to 10,000 customer records",
                "Basic behavioral analysis",
                "Standard segmentation",
                "Email support",
                "Monthly reports"
=======
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
          <div className="space-y-6">
            <PricingCard
              title="Starter"
              price="$79"
              period="per month"
              description="Perfect for small businesses and startups"
              features={[
                'Up to 10,000 customers',
                'Basic analytics',
                'Sentiment analysis',
                'Email support',
                'Standard reports',
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
              ]}
              popular={false}
            />
            <PricingCard
<<<<<<< HEAD
              plan="Professional"
              price="$599"
              period="per month"
              description="Ideal for growing businesses with complex customer data"
              features={[
                "Up to 100,000 customer records",
                "Advanced AI analytics",
                "Predictive modeling",
                "Real-time insights",
                "Priority support",
                "Custom dashboards"
=======
              title="Professional"
              price="$199"
              period="per month"
              description="Ideal for growing businesses and marketing teams"
              features={[
                'Up to 100,000 customers',
                'Advanced AI features',
                'Predictive modeling',
                'Priority support',
                'Custom dashboards',
                'API access',
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
              ]}
              popular={true}
            />
            <PricingCard
<<<<<<< HEAD
              plan="Enterprise"
              price="$1,999"
              period="per month"
              description="For large organizations with extensive customer data needs"
              features={[
                "Unlimited customer records",
                "Custom AI models",
                "Advanced predictive analytics",
                "Dedicated support",
                "Custom integrations",
                "On-premise deployment"
=======
              title="Enterprise"
              price="$599"
              period="per month"
              description="For large organizations with complex customer data"
              features={[
                'Unlimited customers',
                'Custom AI models',
                'Real-time processing',
                '24/7 support',
                'Custom integrations',
                'Dedicated analyst',
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD:temp_conflicted_files/page.tsx
            title="Actionable Insights"
            description="Receive detailed reports, recommendations, and real-time dashboards to drive business decisions."
<<<<<<< HEAD
=======
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Insight Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InsightCategory
            icon="💰"
            title="Revenue Insights"
            description="Customer lifetime value, purchase patterns, and revenue optimization opportunities"
          />
          <InsightCategory
            icon="🎯"
            title="Engagement Insights"
            description="Customer engagement levels, content preferences, and interaction patterns"
          />
          <InsightCategory
            icon="😊"
            title="Satisfaction Insights"
            description="Customer satisfaction scores, sentiment trends, and feedback analysis"
          />
          <InsightCategory
            icon="🔄"
            title="Retention Insights"
            description="Churn risk factors, retention strategies, and loyalty program effectiveness"
          />
          <InsightCategory
            icon="📱"
            title="Behavioral Insights"
            description="Customer journey mapping, touchpoint analysis, and conversion optimization"
          />
          <InsightCategory
            icon="🔮"
            title="Predictive Insights"
            description="Future behavior predictions, market trends, and growth opportunities"
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            title="Track & Report"
            description="View real-time analytics, generate reports, and export data to your accounting system."
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:app/services/ai-expense-tracker/page.tsx
          />
        </div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover the power of AI-driven customer analytics.
          </p>
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:app/services/ai-customer-insights/page.tsx
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD:temp_conflicted_files/page.tsx
}

<<<<<<< HEAD
function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
=======
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
}

<<<<<<< HEAD:temp_conflicted_files/page.tsx
function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:app/services/ai-expense-tracker/page.tsx
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
=======
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

<<<<<<< HEAD:temp_conflicted_files/page.tsx
<<<<<<< HEAD
<<<<<<< HEAD
function PricingCard({ plan, price, period, description, features, popular }: {
=======
function PricingCard({
  plan,
  price,
  period,
  description,
  features,
  popular,
}: {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:app/services/ai-expense-tracker/page.tsx
  plan: string;
=======
function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular,
}: {
  title: string;
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
function PricingCard({ plan, price, period, description, features, popular }: {
  plan: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
<<<<<<< HEAD:temp_conflicted_files/page.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <div className={`border rounded-xl p-6 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
=======
    <div
      className={`border rounded-xl p-6 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
    >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:app/services/ai-expense-tracker/page.tsx
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
<<<<<<< HEAD
=======
    <div
      className={`border rounded-xl p-6 ${popular ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white'}`}
    >
      {popular && (
        <div className="bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
            <span className="text-teal-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-teal-600 text-white hover:bg-teal-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Start Free Trial
      </button>
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    </div>
  );
}

<<<<<<< HEAD:temp_conflicted_files/page.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
=======
function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:app/services/ai-expense-tracker/page.tsx
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
<<<<<<< HEAD
=======
function InsightCategory({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DataSourceCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium text-gray-700">{name}</div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:border-teal-300 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock Customer Insights?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your free trial today and discover the power of AI-driven customer
        analytics. Analyze your first 1,000 customers for free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
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
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c:app/services/ai-customer-insights/page.tsx
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
