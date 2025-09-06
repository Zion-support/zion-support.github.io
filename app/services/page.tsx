import Link from "next/link";
<<<<<<< HEAD

export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: "Services | Zion Tech Group",
  description:;
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
}
export default /**
 * ServicesOverviewPage - Function description
 */
function ServicesOverviewPage() {
=======
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description:
<<<<<<< HEAD
    "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
};
export default function ServicesOverviewPage() {
>>>>>>> origin/fix-website-loading-errors-final
  return (
    <div className="animate - fade - in">;
      {" "}
      <div className="text - center mb - 16">;
        {" "}
        <h1 className="text - 4xl font - bold text - gray - 900 mb - 6">;
          Our Services;
        </h1>{" "}
        <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
          {" "}
<<<<<<< HEAD
          Product engineering and AI - first consulting to deliver measurable;
          outcomes for your business.{" "}
=======
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.{" "}
>>>>>>> origin/fix-website-loading-errors-final
        </p>{" "}
      </div>{" "}
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 mb - 16">;
        {" "}
        <ServiceCard;
          href="/services / micro - saas";
          title="Micro SaaS";
          description="End - to - end product development with billing, auth, and analytics";
          bullets={[;
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
          ]}
<<<<<<< HEAD
          icon="🚀";
        />{" "}
        <ServiceCard;
          href="/services / ai - services";
          title="AI Services";
          description="LLM applications, RAG systems, and MLOps pipelines";
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
          icon="🤖";
        />{" "}
        <ServiceCard;
          href="/services / it - services";
          title="IT Services";
          description="Cloud migration, DevOps, and security solutions";
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️";
        />{" "}
      </div>{" "}
=======
=======
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description:
    "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard 
            number="500+" 
            label="Successful Projects" 
            description="Delivered worldwide" 
          />
          <StatCard 
            number="$2B+" 
            label="Combined Market Value" 
            description="Generated for clients" 
          />
          <StatCard 
            number="99.9%" 
            label="Uptime Guarantee" 
            description="Enterprise reliability" 
          />
          <StatCard 
            number="300%" 
            label="Average ROI" 
            description="Client return on investment" 
          />
        </div>
      </div>

=======
export const metadata = {
  title: "Services | Zion Tech Group",
  description:
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};
export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      {" "}
      <div className="text-center mb-16">
        {" "}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>{" "}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {" "}
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.{" "}
        </p>{" "}
      </div>{" "}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[
<<<<<<< HEAD
            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling"
=======
            "Foundational architecture",
            "Billing + subscriptions", 
            "Growth analytics"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          ]}
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
          icon="🚀"
          pricing="From $2,999/month"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
<<<<<<< HEAD
          description="Advanced AI solutions including LLM applications, RAG systems, and enterprise AI platforms"
          bullets={[
            "15+ AI service categories",
            "Custom LLM development",
            "Enterprise AI integration"
          ]}
=======
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          icon="🤖"
          pricing="From $5,000/project"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
<<<<<<< HEAD
          description="Comprehensive IT solutions including cloud migration, DevOps, security, and infrastructure management"
          bullets={[
            "15+ IT service categories",
            "Cloud migration & optimization",
            "24/7 monitoring & support"
          ]}
          icon="⚙️"
          pricing="From $3,000/month"
        />
        <ServiceCard
          href="/services/fintech"
          title="FinTech Solutions"
          description="Complete financial technology solutions including digital banking, payment processing, and trading platforms"
          bullets={[
            "15+ FinTech service categories",
            "Bank-grade security & compliance",
            "Real-time payment processing"
          ]}
          icon="💳"
          pricing="From $25,000/project"
        />
        <ServiceCard
          href="/services/healthtech"
          title="HealthTech Solutions"
          description="Healthcare technology solutions including EHR systems, telemedicine platforms, and medical AI"
          bullets={[
            "15+ HealthTech service categories",
            "HIPAA-compliant solutions",
            "Medical AI & diagnostics"
          ]}
          icon="🏥"
          pricing="From $40,000/project"
        />
        <ServiceCard
          href="/services/edtech"
          title="EdTech Solutions"
          description="Educational technology platforms including LMS systems, virtual classrooms, and AI-powered learning"
          bullets={[
            "15+ EdTech service categories",
            "Personalized learning AI",
            "Multi-platform compatibility"
          ]}
          icon="🎓"
          pricing="From $30,000/project"
        />
        <ServiceCard
=======
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️"
        />
        <ServiceCard
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security"
          bullets={["Smart contracts", "DeFi protocols", "Web3 apps"]}
          icon="⛓️"
          pricing="From $15,000/project"
        />
        <ServiceCard
          href="/services/automation-solutions"
          title="Automation Solutions"
          description="RPA, workflow automation, and AI-powered automation for maximum efficiency"
          bullets={["Process automation", "Workflow optimization", "AI automation"]}
          icon="⚡"
<<<<<<< HEAD
          pricing="From $2,500/month"
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
<<<<<<< HEAD
          description="Business intelligence, predictive analytics, and data engineering for data-driven decisions"
          bullets={["BI dashboards", "Predictive analytics", "Data engineering"]}
          icon="📊"
          pricing="From $4,000/month"
        />
      </div>
<<<<<<< HEAD
      
      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 rounded-xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results for businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              number="500+"
              label="Successful Projects"
              description="Delivered across 15+ industries"
            />
            <StatCard
              number="$2B+"
              label="Combined Market Value"
              description="Generated for our clients"
            />
            <StatCard
              number="99.9%"
              label="Uptime Guarantee"
              description="With 24/7 monitoring & support"
            />
            <StatCard
              number="300%"
              label="Average ROI"
              description="For our technology solutions"
            />
          </div>
        </div>
      </section>
      
>>>>>>> origin/fix-website-loading-errors-final
      <CTA />{" "}
=======
      <CTA />
=======
          description="Business intelligence, predictive analytics, and data engineering"
          bullets={["BI dashboards", "Predictive analytics", "Data engineering"]}
          icon="📊"
        />
        <ServiceCard
          href="/services/digital-transformation"
          title="Digital Transformation"
          description="Complete digital transformation solutions and legacy modernization"
          bullets={["Process automation", "Legacy modernization", "Digital strategy"]}
          icon="🔄"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
          description="Comprehensive security solutions and compliance management"
          bullets={["Security assessment", "Threat detection", "Compliance"]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/cloud-services"
          title="Cloud Services"
          description="Cloud migration, architecture, and optimization solutions"
          bullets={["Cloud migration", "Multi-cloud", "Cost optimization"]}
          icon="☁️"
        />
      </div>
      <CTA />{" "}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    </div>
  );
}
function ServiceCard({
  href,
  title,
  description,
  bullets,
<<<<<<< HEAD
  icon,
  pricing
=======
  icon
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}: {
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  pricing: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
<<<<<<< HEAD
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
/**
 * ServiceCard - Function description
 */
function ServiceCard() {
  return (
    <Link;
      href={href}
        service and create a custom solution for your business needs.{" "}
=======
=======

>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
function StatCard({ 
  number, 
  label, 
  description 
}: { 
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
=======
      {" "}
      <div className="text-4xl mb-4">{icon}</div>{" "}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>{" "}
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>{" "}
      <ul className="text-gray-600 space-y-2">
        {" "}
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            {" "}
            <span className="text-blue-500 mr-2">•</span> {bullet}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  );
}
function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      {" "}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>{" "}
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        {" "}
<<<<<<< HEAD
        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.{" "}
>>>>>>> origin/fix-website-loading-errors-final
=======
        Talk to our experts about your project. We&apos;ll help you choose the right
        service and create a custom solution for your business needs.{" "}
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
      </p>{" "}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {" "}
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {" "}
          Call +1 302 464 0950{" "}
        </a>{" "}
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          {" "}
          Email Us{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}