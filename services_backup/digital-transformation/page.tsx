export const metadata = {
  title: "Digital Transformation Services | Zion Tech Group",
  description:
    "Complete digital transformation solutions including process automation, legacy modernization, and digital strategy consulting. Transform your business for the digital age."};

export default function DigitalTransformationPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Digital Transformation Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Complete digital transformation solutions to modernize your business
          processes, systems, and culture. We help you adapt, compete, and
          thrive in the digital economy.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Digital Transformation Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DTServiceCard
            title="Legacy System Modernization"
            description="Transform outdated systems into modern, scalable, and efficient platforms"
            features={[
              "System assessment",
              "Migration planning",
              "Data transformation",
              "API integration",
              "User training",
              "Performance optimization"]}
            price="$25k–$100k"
            icon="🔄"
          />
          <DTServiceCard
            title="Process Automation & Workflow"
            description="Automate business processes with intelligent workflow management"
            features={[
              "Process mapping",
              "Automation design",
              "RPA implementation",
              "Workflow optimization",
              "Integration",
              "Monitoring"]}
            price="$15k–$60k"
            icon="⚡"
          />
          <DTServiceCard
            title="Digital Strategy Consulting"
            description="Comprehensive digital strategy development and implementation roadmap"
            features={[
              "Digital assessment",
              "Strategy development",
              "Technology roadmap",
              "Change management",
              "ROI analysis",
              "Implementation planning"]}
            price="$20k–$80k"
            icon="📋"
          />
          <DTServiceCard
            title="Customer Experience Transformation"
            description="Enhance customer experience through digital channels and touchpoints"
            features={[
              "CX mapping",
              "Digital channels",
              "Personalization",
              "Omnichannel integration",
              "Analytics",
              "Feedback systems"]}
            price="$18k–$70k"
            icon="👥"
          />
          <DTServiceCard
            title="Data-Driven Decision Making"
            description="Implement data analytics and business intelligence for informed decisions"
            features={[
              "Data strategy",
              "Analytics platform",
              "Dashboard development",
              "KPI tracking",
              "Predictive analytics",
              "Data governance"]}
            price="$22k–$85k"
            icon="📊"
          />
          <DTServiceCard
            title="Cloud-First Architecture"
            description="Design and implement cloud-native solutions for scalability and efficiency"
            features={[
              "Cloud strategy",
              "Architecture design",
              "Migration planning",
              "Security implementation",
              "Cost optimization",
              "Monitoring"]}
            price="$30k–$120k"
            icon="☁️"
          />
          <DTServiceCard
            title="Mobile-First Solutions"
            description="Develop mobile applications and responsive web solutions"
            features={[
              "Mobile strategy",
              "App development",
              "Responsive design",
              "Cross-platform",
              "Performance optimization",
              "App store deployment"]}
            price="$20k–$75k"
            icon="📱"
          />
          <DTServiceCard
            title="Digital Security & Compliance"
            description="Implement comprehensive security and compliance frameworks"
            features={[
              "Security assessment",
              "Compliance framework",
              "Risk management",
              "Security monitoring",
              "Training",
              "Audit support"]}
            price="$25k–$90k"
            icon="🔒"
          />
          <DTServiceCard
            title="Change Management & Training"
            description="Support organizational change and digital adoption"
            features={[
              "Change strategy",
              "Training programs",
              "User adoption",
              "Communication",
              "Support systems",
              "Success metrics"]}
            price="$15k–$50k"
            icon="🎓"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Digital Transformation Framework
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item
            title="Assessment & Strategy"
            details={[
              "Current state analysis and digital maturity assessment",
              "Competitive landscape analysis and market positioning",
              "Technology stack evaluation and gap analysis",
              "Digital strategy development and roadmap creation",
              "Stakeholder alignment and change management planning",
              "ROI modeling and business case development"]}
          />
          <Item
            title="Implementation & Execution"
            details={[
              "Phased implementation approach with agile methodology",
              "Technology selection and vendor management",
              "Custom development and system integration",
              "Data migration and system modernization",
              "Testing, quality assurance, and performance optimization",
              "Deployment and go-live support"]}
          />
          <Item
            title="Optimization & Growth"
            details={[
              "Performance monitoring and continuous improvement",
              "User adoption tracking and training optimization",
              "Business process refinement and automation",
              "Advanced analytics and AI implementation",
              "Scalability planning and future roadmap",
              "Ongoing support and maintenance"]}
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function DTServiceCard({
  title,
  description,
  features,
  price,
  icon}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Digital Transformation Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="Digital Assessment"
          price="$10k–$25k"
          duration="4–6 weeks"
          features={[
            "Current state analysis",
            "Digital maturity assessment",
            "Technology gap analysis",
            "Competitive benchmarking",
            "Strategy recommendations",
            "Implementation roadmap"]}
        />
        <Plan
          name="Transformation Pilot"
          price="$50k–$150k"
          duration="12–20 weeks"
          features={[
            "Pilot project implementation",
            "Process automation",
            "System integration",
            "User training",
            "Performance monitoring",
            "Success metrics tracking"]}
        />
        <Plan
          name="Full Transformation"
          price="$150k+"
          duration="6+ months"
          features={[
            "Complete digital overhaul",
            "Legacy system modernization",
            "Advanced analytics implementation",
            "Change management",
            "Ongoing optimization",
            "Dedicated success manager"]}
        />
      </div>
    </section>
  );
}

function Plan({
  name,
  price,
  duration,
  features}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business Digitally?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how digital transformation can modernize your business
          and drive growth. Our experts have successfully transformed 100+
          organizations across industries.
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}
