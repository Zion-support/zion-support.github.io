<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from "next/link";
<<<<<<< HEAD
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description:

};
export default function ServicesOverviewPage() {
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
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.{" "}
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
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description:
    "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

export const metadata = {
<<<<<<< HEAD
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.',
=======
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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

<<<<<<< HEAD
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
<<<<<<< HEAD
          Product engineering and AI-first consulting to deliver measurable outcomes for your business.
        </p>
      </div>

=======
          {" "}
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.{" "}
        </p>{" "}
      </div>{" "}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[
<<<<<<< HEAD
            'Foundational architecture',
            'Billing + subscriptions',
            'Growth analytics'
          ]}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
            "Foundational architecture",
            "Billing + subscriptions", 
            "Growth analytics"
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling"
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
          ]}
          icon="🚀"
          pricing="From $2,999/month"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
<<<<<<< HEAD
          description="LLM applications, RAG systems, and AI automation"
=======
<<<<<<< HEAD
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
=======
          description="Advanced AI solutions including LLM applications, RAG systems, and enterprise AI platforms"
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          bullets={[
            "15+ AI service categories",
            "Custom LLM development",
            "Enterprise AI integration"
          ]}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          icon="🤖"
          pricing="From $5,000/project"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
<<<<<<< HEAD
          description="Cloud migration, DevOps, and infrastructure management"
          bullets={[
            'Cloud migration & strategy',
            'DevOps & CI/CD',
            'Infrastructure management'
          ]}
          icon="⚙️"
        />
        <ServiceCard
          href="/services/blockchain"
          title="Blockchain Services"
          description="Smart contracts, DeFi protocols, and Web3 solutions"
          bullets={[
            'Smart contracts',
            'DeFi development',
            'NFT platforms'
          ]}
          icon="⛓️"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
          description="Penetration testing, security audits, and compliance"
          bullets={[
            'Security audits',
            'Penetration testing',
            'Compliance management'
          ]}
          icon="🔒"
=======
<<<<<<< HEAD
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️"
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
        />
        <ServiceCard
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
=======
          pricing="From $2,500/month"
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
<<<<<<< HEAD
          description="Business intelligence, predictive analytics, and data science"
          bullets={[
            'BI dashboards',
            'Predictive analytics',
            'Data warehousing'
          ]}
          icon="📊"
        />
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      <CTA />
          description="Business intelligence, predictive analytics, and data engineering"
          bullets={["BI dashboards", "Predictive analytics", "Data engineering"]}
          icon="📊"
        />
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
          description="Business intelligence, predictive analytics, and data engineering for data-driven decisions"
          bullets={["BI dashboards", "Predictive analytics", "Data engineering"]}
          icon="📊"
          pricing="From $4,000/month"
        />
      </div>
      
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
      
      <CTA />
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
<<<<<<< HEAD
  icon
=======
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
      <CTA />{" "}
=======
  icon,
  pricing
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
}: {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
<<<<<<< HEAD
}) {;
    </div>);
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
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
=======
  pricing: string;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}) {
  return (
    <Link
      href={href}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-gray-500 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
<<<<<<< HEAD
}
=======
=======
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
<<<<<<< HEAD
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-134f

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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
<<<<<<< HEAD
        {" "}
        Talk to our experts about your project. We&apos;ll help you choose the right
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        service and create a custom solution for your business needs.{" "}
      </p>{" "}
=======
        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.
      </p>
>>>>>>> cursor/expand-services-advertise-and-build-project-134f
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
<<<<<<< HEAD
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
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
=======
}
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
=======
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
