};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
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
          href="/services/industry-solutions/finance"
          title="Financial Technology"
          description="Secure fintech solutions including trading platforms and payment systems"
          bullets={["Trading platforms", "Payment processing", "Fraud detection", "Compliance"]}
          icon="💰"
        />
      </div>
  icon: string;
}) {
  return (
    <Link
      href={href}
}