import Link from "next/link";

export const metadata = {
  title: "Services | Zion Tech Group",
  description:
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
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from concept to scale with proven revenue models"
          bullets={[
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
          icon="📊"
        />
        <ServiceCard
          href="/contact"
          title="Custom Solutions"
          description="Tailored technology solutions for unique business challenges"
          bullets={["Custom development", "System integration", "Digital transformation", "Consulting"]}
          icon="💡"
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
    </div>
  );
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