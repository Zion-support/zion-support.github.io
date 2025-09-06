export const metadata = { 
  title: 'Business Process Automation | Zion Tech Group',
  description: 'Comprehensive business process automation services including RPA, workflow automation, AI-powered automation, and digital transformation solutions.'
};

export default function BusinessAutomationPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Business Process Automation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Streamline your business operations with intelligent automation solutions. 
          From RPA to AI-powered workflows, we help you work smarter, not harder.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Automation Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive automation services that transform your business processes and boost efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AutomationServiceCard
            title="Robotic Process Automation (RPA)"
            description="Automate repetitive tasks with software robots that work 24/7 without breaks"
            features={["Data entry automation", "Document processing", "Email automation", "Report generation", "System integration"]}
            pricing="$2,500/month"
            icon="🤖"
          />
          <AutomationServiceCard
            title="Workflow Automation"
            description="Streamline business processes with intelligent workflow management systems"
            features={["Process mapping", "Approval workflows", "Task routing", "Deadline management", "Progress tracking"]}
            pricing="$1,800/month"
            icon="⚡"
          />
          <AutomationServiceCard
            title="AI-Powered Automation"
            description="Leverage artificial intelligence to automate complex decision-making processes"
            features={["Intelligent document processing", "Predictive analytics", "Natural language processing", "Machine learning", "Cognitive automation"]}
            pricing="$4,200/month"
            icon="🧠"
          />
          <AutomationServiceCard
            title="Data Integration & ETL"
            description="Automate data collection, transformation, and loading across multiple systems"
            features={["Data extraction", "Data transformation", "Data validation", "Real-time sync", "Error handling"]}
            pricing="$2,200/month"
            icon="📊"
          />
          <AutomationServiceCard
            title="Customer Service Automation"
            description="Automate customer interactions with chatbots, ticketing systems, and self-service portals"
            features={["Chatbot development", "Ticket routing", "Knowledge base", "Customer analytics", "Multi-channel support"]}
            pricing="$3,000/month"
            icon="💬"
          />
          <AutomationServiceCard
            title="Financial Process Automation"
            description="Automate accounting, invoicing, and financial reporting processes"
            features={["Invoice processing", "Payment automation", "Financial reporting", "Compliance monitoring", "Audit trails"]}
            pricing="$2,800/month"
            icon="💰"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Automation Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge automation technologies to deliver powerful business solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AutomationTech
            title="RPA Platforms"
            technologies={["UiPath", "Automation Anywhere", "Blue Prism", "Microsoft Power Automate", "Zapier"]}
          />
          <AutomationTech
            title="Workflow Engines"
            technologies={["Camunda", "Activiti", "jBPM", "Apache Airflow", "Temporal"]}
          />
          <AutomationTech
            title="AI & ML"
            technologies={["OpenAI", "Azure AI", "AWS ML", "Google AI", "Custom Models"]}
          />
          <AutomationTech
            title="Integration Tools"
            technologies={["MuleSoft", "Zapier", "Microsoft Logic Apps", "AWS Step Functions", "Apache Kafka"]}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Automation Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures successful automation implementation and maximum ROI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AutomationProcessStep
            step="1"
            title="Process Analysis"
            description="Analyze current processes, identify automation opportunities, and measure potential ROI."
          />
          <AutomationProcessStep
            step="2"
            title="Solution Design"
            description="Design custom automation solutions tailored to your specific business requirements."
          />
          <AutomationProcessStep
            step="3"
            title="Implementation"
            description="Deploy automation solutions with minimal disruption to existing operations."
          />
          <AutomationProcessStep
            step="4"
            title="Optimization"
            description="Monitor performance, optimize processes, and continuously improve automation efficiency."
          />
        </div>
      </section>

      <Pricing />
    </div>
  );
}

        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
function AutomationServiceCard({ title, description, features, pricing, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-orange-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-orange-600 mb-4">{pricing}</div>
      <a
        href="tel:+13024640950"
        className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function AutomationTech({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function AutomationProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Automation Services Pricing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Flexible pricing options for business process automation. Choose the plan that fits your automation needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AutomationPlan 
          name="Process Assessment" 
          price="$3k–$8k" 
          duration="2–4 weeks"
          features={[
            "Process analysis",
            "Automation opportunity identification",
            "ROI calculation",
            "Implementation roadmap",
            "Technology recommendations",
            "Detailed report"
          ]}
          popular={false}
        />
        <AutomationPlan 
          name="Automation Implementation" 
          price="$10k–$40k" 
          duration="4–12 weeks"
          features={[
            "Custom automation development",
            "System integration",
            "Testing & validation",
            "User training",
            "Documentation",
            "3 months support"
          ]}
          popular={true}
        />
        <AutomationPlan 
          name="Managed Automation" 
          price="$2k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 monitoring",
            "Performance optimization",
            "Process improvements",
            "Regular reporting",
            "Maintenance & updates",
            "Dedicated support"
          ]}
          popular={false}
        />
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          All plans include: Detailed documentation, 30-day money-back guarantee, training included
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors"
          >
            Get Automation Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function AutomationPlan({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-orange-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-orange-600 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-orange-600 text-white hover:bg-orange-700' 
            : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}