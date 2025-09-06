export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-grade solutions.'
}; export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Cloud, DevOps, SRE, and security services engineered for uptime, efficiency, and scalability. 
          We help modernize your infrastructure and optimize your IT operations.
        </p>
      </section>

export const metadata = { title: 'IT Services | Zion Tech Group' }; export default function ITServicesPage() { return ( <section> <h1 style={{fontSize: 26,fontWeight: 800}}>IT Services</h1> <p style={{marginTop: 8,color: '#374151'}}>Cloud,DevOps,SRE and security services engineered for uptime and efficiency.</p> <div style={{display: 'grid',gap: 12,marginTop: 16}}> <Item title="Cloud & Infra" details={["AWS/GCP/Azure","Kubernetes","Serverless","IaC (Terraform)"]} /> <Item title="DevOps & SRE" details={["CI/CD","Observability","Autoscaling","Chaos testing"]} /> <Item title="Security" details={["Hardening","Zero Trust","Vuln mgmt","Compliance"]} /> </div> <Pricing /> </section> )} function Item(): any ({ title,details }: { title: string; details: string[] }) { return ( <div style={{border: '1px solid #e5e7eb',borderRadius: 12,padding: 16}}> <h3 style={{fontWeight: 700}}>{title}</h3> <ul style={{paddingLeft: 18,color: '#4b5563'}}>{details && details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul> </div> )} function Pricing() { return ( <div style={{marginTop: 20,display: 'grid',gap: 12,gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))'}}> <Plan name="Assessment" price="$4k–$10k" features={["2 weeks","Cloud review","Security audit","Roadmap"]} /> <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks","Infra as code","CI/CD","Monitoring"]} /> <Plan name="Managed" price="$5k+/mo" features={["24/7 on-call","SLO mgmt","Cost optimization","Reports"]} /> </div> )} function Plan(): any ({ name,price,features }: { name: string; price: string; features: string[] }) { return ( <div style={{border: '1px solid #e5e7eb',borderRadius: 12,padding: 16}}> <h4 style={{fontWeight: 700}}>{name}</h4> <div style={{color: '#111827',fontWeight: 800,marginTop: 4}}>{price}</div> <ul style={{paddingLeft: 18,color: '#4b5563',marginTop: 8}}>{features && features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}

      {/* Core IT Services */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Core IT Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITServiceItem 
            title="Cloud & Infrastructure" 
            details={[
              "AWS/GCP/Azure migration",
              "Kubernetes orchestration",
              "Serverless architecture",
              "Infrastructure as Code (Terraform)",
              "Multi-cloud strategies",
              "Cost optimization"
            ]} 
          />
          <ITServiceItem 
            title="DevOps & SRE" 
            details={[
              "CI/CD pipeline automation",
              "Observability & monitoring",
              "Auto-scaling & load balancing",
              "Chaos engineering",
              "Incident response",
              "Performance optimization"
            ]} 
          />
          <ITServiceItem 
            title="Security & Compliance" 
            details={[
              "Security hardening",
              "Zero Trust architecture",
              "Vulnerability management",
              "Compliance frameworks (SOC2, ISO27001)",
              "Penetration testing",
              "Security training"
            ]} 
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          IT Service Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITPricingPlan 
            name="IT Assessment & Strategy" 
            price="$4,000 - $10,000" 
            duration="2-3 weeks"
            features={[
              "Infrastructure audit",
              "Security assessment",
              "Cloud readiness evaluation",
              "Technology roadmap",
              "Cost analysis",
              "Risk assessment"
            ]}
            popular={false}
          />
          <ITPricingPlan 
            name="Implementation & Migration" 
            price="$15,000 - $50,000" 
            duration="4-8 weeks"
            features={[
              "Infrastructure setup",
              "Cloud migration",
              "CI/CD implementation",
              "Security hardening",
              "Monitoring setup",
              "Documentation"
            ]}
            popular={true}
          />
          <ITPricingPlan 
            name="Managed IT Services" 
            price="$5,000+/month" 
            duration="Ongoing"
            features={[
              "24/7 monitoring",
              "Proactive maintenance",
              "Incident response",
              "Performance optimization",
              "Security updates",
              "Monthly reporting"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}

function ITSolutionCard({ title, description, features, pricing, category, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-4">
        <div className="text-2xl font-bold text-gray-900 mb-2">{pricing}</div>
        <a 
          href="tel:+13024640950"
          className="w-full bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

function ITServiceItem({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 ${popular ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-green-600 text-white text-center py-1 px-3 rounded-full text-sm font-medium mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors block ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
        }`}
      >
        Contact Us
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your IT needs and create a custom solution that improves efficiency, 
        security, and scalability. Our team has modernized 200+ IT infrastructures.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}