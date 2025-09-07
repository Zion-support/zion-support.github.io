
export const metadata = {
  title: "AI Automation Suite | Zion Tech Group",
  description: "Intelligent automation solutions including RPA, workflow automation, and process optimization for maximum efficiency and productivity.",
};

export default function AIAutomationSuitePage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Automation Suite
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your operations, reduce manual effort, and boost productivity with our advanced AI Automation Suite. From Robotic Process Automation (RPA) to intelligent workflow orchestration, we deliver solutions that transform your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🤖"
              title="Robotic Process Automation (RPA)"
              description="Automate repetitive, rule-based tasks across various applications and systems without human intervention."
              benefits={["80% task reduction", "24/7 operation", "Error-free execution", "Rapid deployment"]}
            />
            <FeatureItem
              icon="⚡"
              title="Intelligent Workflow Orchestration"
              description="Design, manage, and optimize complex business workflows with AI-driven decision-making and adaptive processes."
              benefits={["300% productivity increase", "Dynamic routing", "Real-time monitoring", "Seamless integration"]}
            />
            <FeatureItem
              icon="📊"
              title="Process Mining & Optimization"
              description="Analyze existing business processes to identify bottlenecks, inefficiencies, and opportunities for automation."
              benefits={["Data-driven insights", "Cost reduction", "Improved compliance", "Enhanced efficiency"]}
            />
            <FeatureItem
              icon="🧠"
              title="Cognitive Automation"
              description="Automate tasks requiring human-like perception and judgment, such as data extraction from unstructured documents and sentiment analysis."
              benefits={["Advanced data processing", "Intelligent decision-making", "Scalable operations", "Reduced human error"]}
            />
            <FeatureItem
              icon="🔗"
              title="Seamless Integrations"
              description="Connect with your existing enterprise systems (CRM, ERP, HRIS) to create a unified automation ecosystem."
              benefits={["Unified data flow", "Reduced silos", "Faster data exchange", "Custom API support"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of AI Automation</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="📈"
              title="Boost Productivity"
              description="Free up your workforce from mundane tasks, allowing them to focus on strategic initiatives and innovation."
            />
            <BenefitCard
              icon="💰"
              title="Reduce Operational Costs"
              description="Significantly lower labor costs and operational expenses by automating high-volume, repetitive processes."
            />
            <BenefitCard
              icon="🎯"
              title="Improve Accuracy & Compliance"
              description="Eliminate human error and ensure consistent adherence to regulatory requirements and internal policies."
            />
            <BenefitCard
              icon="🚀"
              title="Accelerate Business Growth"
              description="Scale your operations rapidly and respond to market demands faster with agile and efficient automated processes."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Automation Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a proven methodology to implement successful automation solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Assessment & Strategy"
            description="Analyze current processes, identify automation opportunities, and define ROI."
          />
          <ProcessStep
            step="2"
            title="Development & Implementation"
            description="Design, build, and integrate automation bots and workflows."
          />
          <ProcessStep
            step="3"
            title="Monitoring & Optimization"
            description="Continuously monitor performance, refine processes, and scale automation."
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-purple-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Automate Your Business?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free consultation and discover how AI automation can revolutionize your operations.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}