export const metadata = { 
<<<<<<< HEAD
  title: 'Business Automation Tools | Zion Tech Group',
  description: 'Powerful business automation micro SAAS tools to streamline workflows, reduce manual tasks, and boost productivity. Automate your business processes with intelligent solutions.'
}; 

export default function BusinessAutomationPage() { 
  return ( 
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Business Automation Tools</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful business automation micro SAAS tools to streamline workflows, reduce manual tasks, 
            and boost productivity. Automate your business processes with intelligent solutions.
          </p>
        </div>

        {/* Automation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AutomationCategory
            title="Workflow Automation"
            icon="⚡"
            description="Automate complex business workflows and processes"
            tools={[
              "Zapier Alternative Pro",
              "Workflow Designer Studio",
              "Process Automation Engine",
              "Task Scheduler Pro",
              "Approval Workflow Manager",
              "Multi-step Automation Builder"
            ]}
          />
          <AutomationCategory
            title="Data Processing"
            icon="📊"
            description="Automate data collection, processing, and reporting"
            tools={[
              "Data Pipeline Builder",
              "Automated Report Generator",
              "Data Validation Engine",
              "ETL Automation Tool",
              "Real-time Data Sync",
              "Database Automation Suite"
            ]}
          />
          <AutomationCategory
            title="Communication Automation"
            icon="💬"
            description="Streamline communication and customer interactions"
            tools={[
              "Smart Email Automation",
              "SMS Campaign Manager",
              "Chatbot Builder Pro",
              "Meeting Scheduler AI",
              "Follow-up Automation",
              "Multi-channel Messaging"
            ]}
          />
        </div>

        {/* Featured Automation Tools */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Automation Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AutomationTool
              title="Workflow Studio Pro"
              description="Visual workflow builder with 500+ integrations and advanced logic"
              features={[
                "Drag-and-drop interface",
                "500+ app integrations",
                "Conditional logic builder",
                "Multi-user collaboration",
                "Real-time monitoring",
                "Custom triggers & actions"
              ]}
              price="$39-199/month"
              category="Workflow Automation"
              useCase="Small to enterprise businesses"
              integrations={["Slack", "Salesforce", "Google Workspace", "Microsoft 365", "Zapier"]}
            />
            <AutomationTool
              title="Smart Invoice Processor"
              description="Automated invoice processing with OCR and approval workflows"
              features={[
                "OCR with 99.5% accuracy",
                "Automated data extraction",
                "Approval workflow engine",
                "Multi-currency support",
                "AP/AR integration",
                "Fraud detection"
              ]}
              price="$25-99/month"
              category="Financial Automation"
              useCase="Accounting firms, finance departments, small businesses"
              integrations={["QuickBooks", "Xero", "Sage", "NetSuite", "Bank APIs"]}
            />
            <AutomationTool
              title="Lead Nurturing Engine"
              description="Intelligent lead scoring and automated nurturing campaigns"
              features={[
                "Behavioral scoring",
                "Automated email sequences",
                "Lead qualification",
                "CRM synchronization",
                "A/B testing",
                "ROI tracking"
              ]}
              price="$49-149/month"
              category="Sales Automation"
              useCase="Sales teams, marketing agencies, B2B companies"
              integrations={["HubSpot", "Salesforce", "Pipedrive", "Mailchimp", "ActiveCampaign"]}
            />
            <AutomationTool
              title="Inventory Automation Pro"
              description="Smart inventory management with automated reordering and forecasting"
              features={[
                "Demand forecasting",
                "Automated reordering",
                "Multi-location sync",
                "Supplier management",
                "Price optimization",
                "Waste reduction analytics"
              ]}
              price="$35-129/month"
              category="Inventory Management"
              useCase="Retail, e-commerce, manufacturing, distribution"
              integrations={["Shopify", "WooCommerce", "Amazon", "eBay", "QuickBooks"]}
            />
            <AutomationTool
              title="Customer Support Bot"
              description="AI-powered customer support with ticket routing and escalation"
              features={[
                "Natural language processing",
                "Ticket auto-routing",
                "Knowledge base integration",
                "Escalation rules",
                "Multi-language support",
                "Performance analytics"
              ]}
              price="$29-89/month"
              category="Customer Support"
              useCase="E-commerce, SaaS, service businesses, agencies"
              integrations={["Zendesk", "Freshdesk", "Intercom", "Slack", "Microsoft Teams"]}
            />
            <AutomationTool
              title="Social Media Scheduler"
              description="Advanced social media automation with content optimization"
              features={[
                "Multi-platform posting",
                "Content calendar",
                "Optimal timing analysis",
                "Hashtag optimization",
                "Engagement tracking",
                "Content recycling"
              ]}
              price="$19-79/month"
              category="Social Media"
              useCase="Marketing agencies, influencers, small businesses, brands"
              integrations={["Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok"]}
            />
          </div>
        </div>

        {/* Automation Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Automation Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon="⏱️"
              title="Time Savings"
              description="Save 20-40 hours per week on repetitive tasks"
              metric="40+ hours/week"
            />
            <BenefitCard
              icon="💰"
              title="Cost Reduction"
              description="Reduce operational costs by up to 60%"
              metric="60% cost savings"
            />
            <BenefitCard
              icon="📈"
              title="Productivity Boost"
              description="Increase team productivity by 3x"
              metric="300% productivity"
            />
            <BenefitCard
              icon="🎯"
              title="Error Reduction"
              description="Eliminate human errors in data processing"
              metric="99.9% accuracy"
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry-Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustrySolution
              title="E-commerce Automation"
              description="Complete automation suite for online stores"
              features={[
                "Order processing automation",
                "Inventory synchronization",
                "Customer service automation",
                "Marketing campaign automation",
                "Returns processing",
                "Review management"
              ]}
              price="$49-199/month"
              industries={["E-commerce", "Retail", "Dropshipping"]}
            />
            <IndustrySolution
              title="Real Estate Automation"
              description="Property management and lead generation automation"
              features={[
                "Lead capture automation",
                "Property listing management",
                "Client communication automation",
                "Document processing",
                "Market analysis automation",
                "Commission tracking"
              ]}
              price="$39-149/month"
              industries={["Real Estate", "Property Management", "Brokerages"]}
            />
            <IndustrySolution
              title="Healthcare Automation"
              description="Patient management and administrative automation"
              features={[
                "Appointment scheduling",
                "Patient intake automation",
                "Insurance verification",
                "Billing automation",
                "Prescription management",
                "Compliance reporting"
              ]}
              price="$59-249/month"
              industries={["Healthcare", "Medical Practices", "Clinics"]}
            />
          </div>
        </div>

        {/* Integration Ecosystem */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Integration Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IntegrationCategory
              title="CRM & Sales"
              description="Connect with popular CRM platforms"
              platforms={["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Freshworks"]}
              icon="📞"
            />
            <IntegrationCategory
              title="Marketing Tools"
              description="Integrate with marketing automation platforms"
              platforms={["Mailchimp", "Constant Contact", "ActiveCampaign", "Marketo", "Pardot"]}
              icon="📧"
            />
            <IntegrationCategory
              title="E-commerce Platforms"
              description="Connect with online store platforms"
              platforms={["Shopify", "WooCommerce", "Magento", "BigCommerce", "Amazon"]}
              icon="🛒"
            />
            <IntegrationCategory
              title="Communication"
              description="Integrate with team communication tools"
              platforms={["Slack", "Microsoft Teams", "Discord", "Telegram", "WhatsApp"]}
              icon="💬"
            />
            <IntegrationCategory
              title="Productivity"
              description="Connect with productivity and project management tools"
              platforms={["Asana", "Trello", "Monday.com", "Notion", "Airtable"]}
              icon="📋"
            />
            <IntegrationCategory
              title="Financial"
              description="Integrate with accounting and financial tools"
              platforms={["QuickBooks", "Xero", "Sage", "NetSuite", "Stripe"]}
              icon="💰"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Automation Tool Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AutomationPricingPlan
              name="Starter"
              price="$29/month"
              description="Perfect for small businesses getting started"
              features={[
                "5 automation workflows",
                "Basic integrations",
                "Email support",
                "Standard templates",
                "Monthly usage limits",
                "Basic analytics"
              ]}
              popular={false}
            />
            <AutomationPricingPlan
              name="Professional"
              price="$99/month"
              description="Ideal for growing businesses"
              features={[
                "25 automation workflows",
                "Advanced integrations",
                "Priority support",
                "Custom templates",
                "Higher usage limits",
                "Advanced analytics",
                "Team collaboration"
              ]}
              popular={true}
            />
            <AutomationPricingPlan
              name="Enterprise"
              price="$299/month"
              description="For large organizations with complex needs"
              features={[
                "Unlimited workflows",
                "All integrations",
                "24/7 dedicated support",
                "Custom development",
                "Unlimited usage",
                "Custom analytics",
                "White-label options",
                "SLA guarantee"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessMetric
              company="TechCorp Solutions"
              industry="Software"
              automation="Lead Processing"
              result="85% reduction in lead response time"
              description="Automated lead qualification and routing reduced response time from 4 hours to 15 minutes."
            />
            <SuccessMetric
              company="RetailMax Store"
              industry="E-commerce"
              automation="Inventory Management"
              result="60% reduction in stockouts"
              description="Smart reordering and demand forecasting eliminated stockouts and reduced carrying costs."
            />
            <SuccessMetric
              company="ServicePro Agency"
              industry="Professional Services"
              automation="Client Onboarding"
              result="70% faster client onboarding"
              description="Automated client intake and document processing reduced onboarding time from 2 weeks to 3 days."
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent automation. Start with a free consultation and discover how automation can revolutionize your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    </div>
  );
}

<<<<<<< HEAD
function AutomationCategory({ title, icon, description, tools }: {
  title: string;
  icon: string;
  description: string;
  tools: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {tools.map((tool, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-2">•</span>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AutomationTool({ title, description, features, price, category, useCase, integrations }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  useCase: string;
  integrations: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Integrations:</p>
        <div className="flex flex-wrap gap-1">
          {integrations.map((integration, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
              {integration}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="font-bold text-green-600">{price}</div>
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description, metric }: {
  icon: string;
  title: string;
  description: string;
  metric: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-green-600 mb-2">{metric}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function IndustrySolution({ title, description, features, price, industries }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  industries: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Industries:</p>
        <div className="flex flex-wrap gap-1">
          {industries.map((industry, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
              {industry}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="font-bold text-green-600">{price}</div>
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

function IntegrationCategory({ title, description, platforms, icon }: {
  title: string;
  description: string;
  platforms: string[];
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform, index) => (
          <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
}

function AutomationPricingPlan({ name, price, description, features, popular }: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-green-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{description}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
      >
        Get Started
      </a>
    </div>
  );
}

<<<<<<< HEAD
function SuccessMetric({ company, industry, automation, result, description }: {
  company: string;
  industry: string;
  automation: string;
  result: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-green-600 font-bold text-lg">{company.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{company}</h4>
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>
      <h5 className="font-semibold text-gray-900 mb-2">{automation}</h5>
      <div className="text-2xl font-bold text-green-600 mb-2">{result}</div>
      <p className="text-gray-600 text-sm">{description}</p>
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    </div>
  );
}