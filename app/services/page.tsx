import Link from "next/link";
<<<<<<< HEAD
export const metadata = {
  title: "Services | Zion Tech Group",
  description:

=======

export const metadata = {;
  title: "Services | Zion Tech Group",;
  description:;
    "Comprehensive AI,micro SaaS,and IT services to help your business scale and succeed.",;

=======

    "Comprehensive AI,micro SaaS,and IT services to help your business scale and succeed.",;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
<<<<<<< HEAD
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics"
<<<<<<< HEAD
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️"
        />
        <ServiceCard
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi protocols, NFTs, smart contracts, and Web3 applications"
          bullets={["Smart contracts", "DeFi protocols", "NFT marketplaces"]}
          icon="⛓️"
        />
        <ServiceCard
          href="/services/mobile-development"
          title="Mobile Development"
          description="iOS, Android, and cross-platform mobile applications"
          bullets={["Native development", "Cross-platform", "App store optimization"]}
          icon="📱"
        />
      </div>
      <CTA />{" "}
    </div>
  );
=======
=======
import Link from './next / link';
export const metadata = {
  title: "Services | Zion Tech Group",
  description:;
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
<<<<<<< HEAD
export default /**
 * ServicesOverviewPage - Function description
 */
function ServicesOverviewPage() {
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
          Product engineering and AI - first consulting to deliver measurable;
          outcomes for your business.{" "}
        </p>{" "}
      </div>{" "}
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 mb - 16">;
        {" "}
        <ServiceCard;
          href="/services / micro - saas";
          title="Micro SaaS";
          description="End - to - end product development with billing, auth, and analytics";
          bullets={[;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
            "Multi-tenant architecture"
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
      <CTA />{" "}

function ServiceCard(): any ({;
  href,;
  title,;
  description,;
  bullets,;
  icon,;
}: {;

=======
=======
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines", "Custom AI solutions"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security", "Infrastructure management"]}
          icon="⚙️"
        />
        <ServiceCard
          href="/services/blockchain"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications"
          bullets={["Smart contracts", "DeFi protocols", "NFT marketplaces", "Web3 development"]}
          icon="⛓️"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
          description="Penetration testing, security audits, and incident response"
          bullets={["Security assessment", "Penetration testing", "Compliance", "Incident response"]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
          description="Business intelligence, data visualization, and machine learning"
          bullets={["Data engineering", "BI dashboards", "Predictive analytics", "Data visualization"]}
          icon="📊"
        />
      </div>
      <CTA />
    </div>
  );
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
function ServiceCard({
  href,
  title,
  description,
  bullets,
<<<<<<< HEAD
  icon
}: {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-17cd
=======
  icon,
}: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <Link
      href={href}
<<<<<<< HEAD

        Talk to our experts about your project. We'll help you choose the right;

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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          {" "}
          Email Us{" "}
        </a>{" "}
      </div>{" "}

    </div>);

=======
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Talk to our experts about your project. We'll help you choose the right
        service and create a custom solution for your business needs.
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
    </div>
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}