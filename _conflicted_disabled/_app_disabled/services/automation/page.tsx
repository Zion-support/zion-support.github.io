export const metadata = {
  title: 'Automation Services | Zion Tech Group',
  description: 'Comprehensive automation services including RPA, workflow automation, AI-powered automation, and business process optimization. Streamline operations and boost efficiency.'
}
export default function AutomationPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Automation Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Comprehensive automation services including RPA, workflow automation, AI-powered automation,
          and business process optimization. Streamline operations, reduce costs, and boost efficiency with intelligent automation.
        </p>
      </section>
      {/* Automation Solutions Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Automation Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AutomationSolution
            title="Robotic Process Automation (RPA)"
            description="Automate repetitive tasks and processes using software robots to improve accuracy and efficiency"
            features={["UI automation", "Data extraction", "Process orchestration", "Exception handling", "Monitoring & reporting"]}
            pricing="$10k-50k"
            icon="🤖"
          />
          <AutomationSolution
            title="Workflow Automation"
            description="Design and implement automated workflows to streamline business processes and reduce manual work"
            features={["Process mapping", "Workflow design", "Integration setup", "Approval workflows", "Notification systems"]}
            pricing="$8k-40k"
            icon="⚡"
          />
          <AutomationSolution
            title="AI-Powered Automation"
            description="Intelligent automation solutions that use AI and machine learning to make decisions and adapt to changes"
            features={["Intelligent document processing", "Predictive automation", "Natural language processing", "Decision automation", "Learning algorithms"]}
            pricing="$20k-100k"
            icon="🧠"
          />
          <AutomationSolution
            title="Data Automation"
            description="Automate data collection, processing, and analysis to provide real-time insights and reporting"
            features={["ETL processes", "Data validation", "Real-time processing", "Automated reporting", "Data quality monitoring"]}
            pricing="$15k-75k"
            icon="📊"
          />
          <AutomationSolution
            title="Customer Service Automation"
            description="Automate customer interactions and support processes to improve response times and satisfaction"
            features={["Chatbot development", "Ticket routing", "Response automation", "Knowledge base integration", "Sentiment analysis"]}
            pricing="$12k-60k"
            icon="🎧"
          />
          <AutomationSolution
            title="Marketing Automation"
            description="Automate marketing campaigns, lead nurturing, and customer engagement processes"
            features={["Email automation", "Lead scoring", "Campaign management", "Social media automation", "Analytics & reporting"]}
            pricing="$10k-50k"
            icon="📧"
          />
        </div>
      </section>
      {/* Core Automation Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Automation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AutomationServiceItem
            title="Process Analysis & Design"
            details={[
              "Current state process mapping",
              "Gap analysis and optimization opportunities",
              "Future state process design",
              "ROI analysis and business case development",
              "Change management planning",
              "Performance metrics definition"
            ]}
          />
          <AutomationServiceItem
            title="Implementation & Integration"
            details={[
              "RPA bot development and deployment",
              "Workflow automation platform setup",
              "System integration and API development",
              "Testing and quality assurance",
              "User training and documentation",
              "Go-live support and monitoring"
            ]}
          />
          <AutomationServiceItem
            title="Management & Optimization"
            details={[
              "24/7 monitoring and maintenance",
              "Performance optimization and tuning",
              "Exception handling and resolution",
              "Continuous improvement initiatives",
              "Scalability planning and execution",
              "Compliance and security management"
            ]}
          />
        </div>
      </section>
      {/* Industry Applications */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IndustryCard
            title="Finance & Banking"
            description="Automate loan processing, compliance reporting, and fraud detection"
            icon="🏦"
          />
          <IndustryCard
            title="Healthcare"
            description="Streamline patient data management, billing, and appointment scheduling"
            icon="🏥"
          />
          <IndustryCard
            title="Manufacturing"
            description="Optimize production processes, inventory management, and quality control"
            icon="🏭"
          />
          <IndustryCard
            title="Retail & E-commerce"
            description="Automate order processing, inventory management, and customer service"
            icon="🛒"
          />
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Automation Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            title="Cost Reduction"
            description="Reduce operational costs by up to 60% through process automation"
            icon="💰"
          />
          <BenefitCard
            title="Improved Accuracy"
            description="Eliminate human errors and ensure consistent, reliable results"
            icon="🎯"
          />
          <BenefitCard
            title="Faster Processing"
            description="Process tasks 10x faster than manual operations"
            icon="⚡"
          />
          <BenefitCard
            title="24/7 Operations"
            description="Run automated processes around the clock without human intervention"
            icon="🕐"
          />
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AutomationPricingPlan
            name="Process Assessment"
            price="$5k–$15k"
            duration="2–4 weeks"
            features={[
              "Current process analysis",
              "Automation opportunity identification",
              "ROI calculation",
              "Implementation roadmap",
              "Technology recommendations"
            ]}
            popular={false}
          />
          <AutomationPricingPlan
            name="Automation Implementation"
            price="$15k–$75k"
            duration="4–12 weeks"
            features={[
              "Process automation development",
              "System integration",
              "Testing and deployment",
              "User training",
              "3 months support"
            ]}
            popular={true}
          />
          <AutomationPricingPlan
            name="Managed Automation"
            price="$3k+/mo"
            duration="Ongoing"
            features={[
              "24/7 monitoring and maintenance",
              "Performance optimization",
              "Exception handling",
              "Continuous improvement",
              "Monthly reporting"
            ]}
            popular={false}
          />
        </div>
      </section>
      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );


function AutomationSolution({ title, description, features, pricing, icon }: {
  title: string
  description: string
  features: string[]
  pricing: string
  icon: string;
}) {;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-bold text-blue-600">{pricing}</div>
    </div>
  );
function AutomationServiceItem({ title, details }: {
  title: string
  details: string[];
}) {;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
function IndustryCard({ title, description, icon }: {
  title: string
  description: string
  icon: string;
}) {;
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
function BenefitCard({ title, description, icon }: {
  title: string
  description: string
  icon: string;
}) {;
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
function AutomationPricingPlan({ name, price, duration, features, popular }: {
  name: string
  price: string
  duration: string
  features: string[]
  popular: boolean;
}) {;
  return (
    <div className={`bg-white border-2 rounded-xl p-6 ${popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}

      </ul>

