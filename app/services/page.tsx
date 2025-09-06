import Link from "next/link";
export const metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description:
<<<<<<< HEAD
    "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-7da4
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
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.{" "}
        </p>{" "}
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from concept to scale with proven revenue models"
          bullets={[
            "AI-powered tools",
            "Billing & subscriptions", 
            "Growth analytics",
            "Market validation"
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI & Machine Learning"
          description="Cutting-edge AI solutions including LLMs, computer vision, and automation"
          bullets={["LLM applications", "Computer vision", "RAG systems", "MLOps pipelines"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Infrastructure"
          description="Cloud migration, DevOps, cybersecurity, and managed IT services"
          bullets={["Cloud migration", "DevOps & SRE", "Cybersecurity", "24/7 support"]}
          icon="⚙️"
        />
        <ServiceCard
          href="/services/blockchain"
          title="Blockchain & Web3"
          description="Smart contracts, DeFi protocols, and Web3 applications"
          bullets={["Smart contracts", "DeFi protocols", "NFT platforms", "Web3 integration"]}
          icon="⛓️"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics & BI"
          description="Business intelligence, predictive modeling, and real-time analytics"
          bullets={["BI dashboards", "Predictive analytics", "Real-time insights", "Data visualization"]}
          icon="📊"
        />
        <ServiceCard
          href="/services/fintech"
          title="FinTech Solutions"
          description="Digital banking, payment processing, cryptocurrency, and financial analytics"
          bullets={["Digital banking", "Payment gateways", "Cryptocurrency", "Financial AI"]}
          icon="💰"
        />
        <ServiceCard
          href="/services/healthtech"
          title="HealthTech Solutions"
          description="Telemedicine, EHR systems, medical AI, and healthcare analytics"
          bullets={["Telemedicine", "EHR systems", "Medical AI", "Healthcare analytics"]}
          icon="🏥"
        />
        <ServiceCard
          href="/services/edtech"
          title="EdTech Solutions"
          description="Learning management systems, virtual classrooms, and educational AI"
          bullets={["LMS platforms", "Virtual classrooms", "Educational AI", "Student analytics"]}
          icon="🎓"
        />
        <ServiceCard
          href="/contact"
          title="Custom Solutions"
          description="Tailored technology solutions for unique business challenges"
          bullets={["Custom development", "System integration", "Digital transformation", "Consulting"]}
          icon="💡"
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
      
      <CTA />{" "}
    </div>;
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
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
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
  );
}
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
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      {" "}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your Business?
      </h3>{" "}
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        {" "}
        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.{" "}
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