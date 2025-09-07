export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Automation Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our cutting-edge automation technologies. 
            From intelligent process automation to advanced AI systems, we help you 
            streamline operations and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AutomationSolution
            title="Process Automation"
            description="Automate repetitive tasks and workflows with intelligent bots"
            features={["Workflow automation", "Data processing", "Task scheduling", "Error handling"]}
            pricing="Starting at $2,999/month"
            icon="🤖"
          />
          <AutomationSolution
            title="AI Integration"
            description="Integrate AI capabilities into your existing systems"
            features={["Machine learning", "Natural language processing", "Predictive analytics", "Custom models"]}
            pricing="Starting at $4,999/month"
            icon="🧠"
          />
          <AutomationSolution
            title="Cloud Automation"
            description="Automate cloud infrastructure and deployment processes"
            features={["Auto-scaling", "Deployment automation", "Monitoring", "Cost optimization"]}
            pricing="Starting at $3,999/month"
            icon="☁️"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Automation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AutomationServiceItem
              title="Business Process Automation"
              details={[
                "Document processing and management",
                "Customer service automation",
                "Financial reporting automation",
                "HR process automation"
              ]}
            />
            <AutomationServiceItem
              title="IT Infrastructure Automation"
              details={[
                "Server provisioning and management",
                "Database automation",
                "Security monitoring",
                "Backup and recovery automation"
              ]}
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              title="Healthcare"
              description="Patient data management, appointment scheduling, and medical record automation"
              icon="🏥"
            />
            <IndustryCard
              title="Finance"
              description="Transaction processing, compliance reporting, and risk management automation"
              icon="💰"
            />
            <IndustryCard
              title="Manufacturing"
              description="Production line automation, quality control, and supply chain management"
              icon="🏭"
            />
            <IndustryCard
              title="Retail"
              description="Inventory management, customer service, and e-commerce automation"
              icon="🛍️"
            />
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Automation Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              title="Cost Reduction"
              description="Reduce operational costs by up to 60% through intelligent automation"
              icon="💸"
            />
            <BenefitCard
              title="Increased Efficiency"
              description="Boost productivity by automating time-consuming manual tasks"
              icon="⚡"
            />
            <BenefitCard
              title="Scalability"
              description="Scale your automation solutions as your business grows"
              icon="📈"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AutomationPricingPlan
              name="Starter"
              price="$2,999"
              duration="per month"
              features={[
                "Basic process automation",
                "Up to 5 workflows",
                "Email support",
                "Monthly reporting"
              ]}
              popular={false}
            />
            <AutomationPricingPlan
              name="Professional"
              price="$4,999"
              duration="per month"
              features={[
                "Advanced automation features",
                "Up to 20 workflows",
                "Priority support",
                "Custom integrations",
                "Real-time monitoring"
              ]}
              popular={true}
            />
            <AutomationPricingPlan
              name="Enterprise"
              price="$9,999"
              duration="per month"
              features={[
                "Full automation suite",
                "Unlimited workflows",
                "24/7 support",
                "Custom development",
                "Dedicated account manager"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationSolution({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
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
}

function AutomationServiceItem({ title, details }: {
  title: string;
  details: string[];
}) {
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
}

function IndustryCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function BenefitCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function AutomationPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
          Most Popular
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
    </div>
  );
}