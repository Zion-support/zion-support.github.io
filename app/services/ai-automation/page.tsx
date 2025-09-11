import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered Business Automation Services | Zion Tech Group',
  description: 'Transform your business with intelligent automation. Reduce costs by 40%, increase efficiency, and scale operations with our AI automation solutions.',
  keywords: 'AI automation, business automation, process automation, AI tools, workflow automation',
};

export default function AIAutomationServices() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Business Automation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your business operations with intelligent automation that works 24/7. 
          Reduce costs by up to 40% while improving efficiency and customer satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Get Free Assessment
          </Link>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 mb-16 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-gray-600">Average Cost Reduction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Automated Operations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">3-6</div>
            <div className="text-gray-600">Months to ROI</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Process Accuracy</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our AI Automation Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="🤖"
            title="Customer Service Automation"
            description="Deploy AI chatbots that handle 80% of customer inquiries, schedule appointments, and escalate complex issues to human agents."
            features={[
              "24/7 customer support",
              "Multi-language support",
              "Seamless human handoff",
              "Real-time analytics"
            ]}
            savings="60-80% reduction in support costs"
          />
          
          <ServiceCard
            icon="📊"
            title="Data Processing & Analytics"
            description="Automate data collection, processing, and analysis to generate actionable insights and reports."
            features={[
              "Automated data extraction",
              "Real-time dashboards",
              "Predictive analytics",
              "Custom reporting"
            ]}
            savings="70-90% reduction in manual data entry"
          />
          
          <ServiceCard
            icon="📧"
            title="Marketing Automation"
            description="Streamline lead generation, email campaigns, social media posting, and customer nurturing processes."
            features={[
              "Lead scoring & qualification",
              "Automated email sequences",
              "Social media scheduling",
              "Performance tracking"
            ]}
            savings="40-60% time reduction in marketing tasks"
          />
          
          <ServiceCard
            icon="💰"
            title="Financial Process Automation"
            description="Automate invoice processing, expense management, financial reporting, and compliance monitoring."
            features={[
              "Invoice processing",
              "Expense categorization",
              "Financial reporting",
              "Compliance monitoring"
            ]}
            savings="80-95% reduction in manual financial tasks"
          />
          
          <ServiceCard
            icon="👥"
            title="HR & Recruitment Automation"
            description="Streamline resume screening, interview scheduling, onboarding, and employee management processes."
            features={[
              "Resume screening",
              "Interview scheduling",
              "Automated onboarding",
              "Performance tracking"
            ]}
            savings="50-70% faster hiring process"
          />
          
          <ServiceCard
            icon="🛠️"
            title="IT Operations Automation"
            description="Automate system monitoring, security scanning, backup processes, and incident response."
            features={[
              "System monitoring",
              "Security scanning",
              "Automated backups",
              "Incident response"
            ]}
            savings="90% reduction in manual IT tasks"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Implementation Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Analysis"
            description="We analyze your current processes to identify automation opportunities with the highest ROI potential."
          />
          <ProcessStep
            step="2"
            title="Strategy & Planning"
            description="Develop a comprehensive automation strategy with clear milestones, timelines, and success metrics."
          />
          <ProcessStep
            step="3"
            title="Implementation"
            description="Build and deploy automation solutions using cutting-edge AI tools and platforms."
          />
          <ProcessStep
            step="4"
            title="Optimization"
            description="Monitor performance, gather feedback, and continuously optimize for maximum efficiency."
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudy
            company="E-commerce Retailer"
            industry="Online Retail"
            challenge="High customer service volume with 4-hour average response time"
            solution="Deployed AI chatbot with human escalation for complex issues"
            results={[
              "Response time reduced to 2 minutes",
              "75% reduction in support costs",
              "300% increase in customer satisfaction",
              "$50K monthly savings"
            ]}
          />
          
          <CaseStudy
            company="Professional Services Firm"
            industry="Consulting"
            challenge="Manual proposal generation taking 8 hours per proposal"
            solution="Automated proposal generation with AI-powered content creation"
            results={[
              "90% reduction in proposal creation time",
              "40% increase in proposal win rate",
              "Consistent branding across all proposals",
              "Freed up 20 hours per week for client work"
            ]}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Technology Stack
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <TechItem name="OpenAI GPT" description="Natural language processing" />
            <TechItem name="Microsoft Power Automate" description="Workflow automation" />
            <TechItem name="Zapier" description="App integrations" />
            <TechItem name="Custom AI Models" description="Specialized solutions" />
            <TechItem name="RPA Tools" description="Robotic process automation" />
            <TechItem name="Cloud Platforms" description="Scalable infrastructure" />
            <TechItem name="Analytics Tools" description="Performance monitoring" />
            <TechItem name="Security Tools" description="Data protection" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Investment & ROI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter Package"
            price="$5,000"
            description="Perfect for small businesses looking to automate 1-2 processes"
            features={[
              "Process analysis & strategy",
              "1 automation implementation",
              "Basic training & support",
              "30-day optimization period"
            ]}
            roi="3-6 months"
          />
          
          <PricingCard
            title="Growth Package"
            price="$15,000"
            description="Ideal for growing companies with multiple automation needs"
            features={[
              "Comprehensive process audit",
              "3-5 automation implementations",
              "Advanced training & support",
              "90-day optimization period",
              "Monthly performance reviews"
            ]}
            roi="2-4 months"
            popular={true}
          />
          
          <PricingCard
            title="Enterprise Package"
            price="Custom"
            description="Complete automation transformation for large organizations"
            features={[
              "Full business process analysis",
              "Unlimited automation implementations",
              "Dedicated project manager",
              "Ongoing optimization & support",
              "Custom AI model development"
            ]}
            roi="1-3 months"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get a free automation assessment and discover how AI can revolutionize 
          your business operations. Most clients see ROI within 3-6 months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get Free Assessment
          </Link>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <p className="text-sm mt-4 opacity-90">
          No commitment required • Free consultation • Custom solution design
        </p>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, features, savings }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-700 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm font-semibold text-green-600">
        {savings}
      </div>
    </div>
  );
}

function ProcessStep({ step, title, description }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function CaseStudy({ company, industry, challenge, solution, results }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
        <p className="text-gray-600 text-sm">{industry}</p>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
        <p className="text-gray-700 text-sm">{challenge}</p>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
        <p className="text-gray-700 text-sm">{solution}</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          {results.map((result, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TechItem({ name, description }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, description, features, roi, popular = false }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border ${popular ? 'ring-2 ring-blue-500' : ''}`}>
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-700 space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm font-semibold text-green-600">
        Typical ROI: {roi}
      </div>
    </div>
  );
}