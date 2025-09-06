};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            'Foundational architecture',
            'Billing + subscriptions',
            'Growth analytics'
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          icon="⚙️"
        />
        <ServiceCard
          href="/services/blockchain"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
        <ServiceCard
          href="/services/digital-transformation"
          title="Digital Transformation"
          description="Complete digital transformation solutions and legacy modernization"
          bullets={["Process automation", "Legacy modernization", "Digital strategy"]}
          icon="🔄"
        />
        <ServiceCard
          href="/services/cloud-services"
          title="Cloud Services"
          description="Cloud migration, architecture, and optimization solutions"
          bullets={["Cloud migration", "Multi-cloud", "Cost optimization"]}
          icon="☁️"
        />
        <ServiceCard
          href="/services/industry-solutions/healthcare"
          title="Healthcare Solutions"
          description="HIPAA-compliant healthcare technology and telemedicine platforms"
          bullets={["Telemedicine", "EHR systems", "Medical AI", "HIPAA compliance"]}
          icon="🏥"
        />
        <ServiceCard
        />
        <ServiceCard
          href="/services/ai-code-reviewer"
          title="AI Code Reviewer"
          description="Automated code review with AI-powered analysis, security scanning, and performance optimization"
          bullets={["Intelligent analysis", "Security scanning", "Performance optimization", "Multi-language support"]}
          icon="🔍"
        />
        <ServiceCard
          href="/services/ai-testing-automation"
          title="AI Testing Automation"
          description="Intelligent test automation with AI-powered test generation, execution, and maintenance"
          bullets={["AI test generation", "Self-healing tests", "Visual testing", "Cross-platform support"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/ci-cd-pipeline-builder"
          title="CI/CD Pipeline Builder"
          description="Automated CI/CD pipeline creation with intelligent deployment strategies and monitoring"
          bullets={["Visual pipeline designer", "Smart deployments", "Multi-cloud support", "Real-time monitoring"]}
          icon="⚙️"
        />
        <ServiceCard
          href="/services/invoice-automation"
          title="Invoice Automation"
          description="AI-powered invoice processing, automated billing, and financial workflow automation"
          bullets={["AI processing", "Automated workflows", "Payment processing", "Financial reporting"]}
          icon="📄"
        />
        <ServiceCard
          href="/services/real-time-data-processing"
          title="Real-time Data Processing"
          description="High-performance real-time data processing with stream analytics and instant insights"
          bullets={["Stream processing", "Real-time analytics", "ML integration", "Infinite scalability"]}
          icon="⚡"
        />
        <ServiceCard
          href="/services/vulnerability-scanner"
          title="Vulnerability Scanner"
          description="Advanced vulnerability scanning with AI-powered threat detection and automated remediation"
          bullets={["AI threat detection", "Compliance management", "Automated remediation", "Threat intelligence"]}
          icon="🛡️"
        />
        <ServiceCard
          href="/services/seo-analyzer"
          title="SEO Analyzer"
          description="Advanced SEO analysis with AI-powered optimization recommendations and competitor analysis"
          bullets={["AI analysis", "Competitor intelligence", "Technical audits", "Content optimization"]}
          icon="📈"
        />
        <ServiceCard
          href="/services/team-collaboration-hub"
          title="Team Collaboration Hub"
          description="AI-powered team collaboration platform with intelligent project management and productivity analytics"
          bullets={["AI project management", "Smart communication", "Productivity analytics", "Virtual workspaces"]}
          icon="👥"
        />
        <ServiceCard
          href="/services/ai-documentation-generator"
          title="AI Documentation Generator"
          description="Automated documentation generation with AI-powered analysis and multi-format output"
          bullets={["Intelligent analysis", "Multi-format output", "Interactive docs", "Version control"]}
          icon="📚"
        />
        <ServiceCard
          href="/services/customer-support-automation"
          title="Customer Support Automation"
          description="AI-powered customer support with intelligent chatbots, ticket routing, and sentiment analysis"
          bullets={["Intelligent chatbots", "Smart routing", "Sentiment analysis", "Multi-channel support"]}
          icon="🎧"
        />
      </div>
}

function ServiceCard({ 
  href, 
  title, 
  description, 
  bullets, 
  icon 
}: { 
  href: string; 
  title: string; 
  description: string; 
  bullets: string[]; 
  icon: string; 
}) {
  return (
    <Link
      href={href}
}
        service and create a custom solution for your business needs.{" "}
      </p>{" "}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">;
        {" "}
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">;
          {" "}
          Call +1 302 464 0950{" "}
        </a>{" "}
        <a
          href="mailto:kleber@ziontechgroup && ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">;
      className="group border border - gray - 200 rounded - xl p - 8 block hover:border - blue - 300 hover:shadow - lg transition - all duration - 200 bg - white";
    >;
      {" "}
      <div className="text - 4xl mb - 4">{icon}</div>{" "}
      <h3 className="text - 2xl font - bold text - gray - 900 mb - 3 group - hover:text - blue - 600 transition - colors">;
        {title}
      </h3>{" "}
      <p className="text - gray - 600 mb - 4 leading - relaxed">{description}</p>{" "}
      <ul className="text - gray - 600 space - y-2">;
        {" "}
        {bullets.map ((bullet) => (
          <li key={bullet} className="flex items - center">;
            {" "}
            <span className="text - blue - 500 mr - 2">•</span> {bullet}{" "}
          </li>))}{" "}
      </ul>{" "}
    </Link>);
}
/**
 * CTA - Function description
 */
function CTA() {
  return (
    <div className="bg - gradient - to - r from - blue - 50 to - indigo - 50 border border - blue - 200 rounded - xl p - 8 text - center">;
      {" "}
      <h3 className="text - 2xl font - bold text - gray - 900 mb - 4">;
        Ready to Get Started?;
      </h3>{" "}
      <p className="text - gray - 600 mb - 6 max - w-2xl mx - auto">;
        {" "}
        Talk to our experts about your project. We'll help you choose the right;
        service and create a custom solution for your business needs.{" "}
      </p>{" "}
      <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
        {" "}
        <a;
          href="tel:+13024640950";
          className="bg - blue - 600 text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - blue - 700 transition - colors";
        >;
          {" "}
          Call +1 302 464 0950{" "}
        </a>{" "}
        <a;
          href="mailto:kleber@ziontechgroup.com";
          className="border - 2 border - blue - 600 text - blue - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - blue - 600 hover:text - white transition - colors";
        >;
          {" "}
          Email Us{" "}
        </a>{" "}
      </div>{" "}
}
