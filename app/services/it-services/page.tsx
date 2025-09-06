
import Link from 'next/link';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, security, and infrastructure management.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
            We deliver enterprise-grade infrastructure solutions that scale with your business.
          </p>
        </div>

        {/* Core IT Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ITServiceCard
            title="Cloud Migration & Architecture"
            description="Seamless migration to cloud platforms with optimized architecture design"
            features={[
              "Multi-cloud strategy & planning",
              "AWS/Azure/GCP migration",
              "Container orchestration (Kubernetes)",
              "Serverless architecture design",
              "Infrastructure as Code (Terraform)",
              "Cost optimization & monitoring"
            ]}
            pricing="$25k - $80k"
            timeline="6-16 weeks"
            icon="☁️"
          />
          
          <ITServiceCard
            title="DevOps & CI/CD Implementation"
            description="Automated deployment pipelines and development workflows"
            features={[
              "CI/CD pipeline setup",
              "GitOps workflows",
              "Automated testing integration",
              "Blue-green deployments",
              "Infrastructure automation",
              "Performance monitoring"
            ]}
            pricing="$15k - $50k"
            timeline="4-12 weeks"
            icon="🔄"
          />
          
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Reliability engineering and operational excellence"
            features={[
              "SLO/SLI definition & monitoring",
              "Error budget management",
              "Chaos engineering",
              "Incident response automation",
              "Capacity planning",
              "Performance optimization"
            ]}
            pricing="$20k - $60k"
            timeline="8-20 weeks"
            icon="🛡️"
          />
          
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security hardening and compliance management"
            features={[
              "Security assessment & auditing",
              "Zero Trust architecture",
              "Vulnerability management",
              "Compliance automation (SOC2, GDPR)",
              "Security monitoring & alerting",
              "Incident response planning"
            ]}
            pricing="$30k - $90k"
            timeline="10-24 weeks"
            icon="🔒"
          />
          
          <ITServiceCard
            title="Database & Data Management"
            description="Database optimization, migration, and data pipeline development"
            features={[
              "Database migration & optimization",
              "Data pipeline development",
              "Backup & disaster recovery",
              "Data governance & compliance",
              "Real-time data processing",
              "Data warehouse design"
            ]}
            pricing="$18k - $55k"
            timeline="6-14 weeks"
            icon="🗄️"
          />
          
          <ITServiceCard
            title="Monitoring & Observability"
            description="Comprehensive monitoring, logging, and alerting solutions"
            features={[
              "Application performance monitoring",
              "Infrastructure monitoring",
              "Log aggregation & analysis",
              "Custom dashboards & alerts",
              "Distributed tracing",
              "Capacity planning & forecasting"
            ]}
            pricing="$12k - $40k"
            timeline="4-10 weeks"
            icon="📊"
          />
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechStackItem
              title="Cloud Platforms"
              technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"]}
            />
            <TechStackItem
              title="Containerization"
              technologies={["Docker", "Kubernetes", "Helm", "Istio", "OpenShift"]}
            />
            <TechStackItem
              title="Infrastructure as Code"
              technologies={["Terraform", "Ansible", "Pulumi", "CloudFormation", "ARM Templates"]}
            />
            <TechStackItem
              title="Monitoring & Observability"
              technologies={["Prometheus", "Grafana", "ELK Stack", "Jaeger", "DataDog"]}
            />
            <TechStackItem
              title="CI/CD Tools"
              technologies={["GitLab CI", "Jenkins", "GitHub Actions", "Azure DevOps", "CircleCI"]}
            />
            <TechStackItem
              title="Databases"
              technologies={["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"]}
            />
            <TechStackItem
              title="Security Tools"
              technologies={["Vault", "Falco", "Trivy", "OWASP ZAP", "Nessus"]}
            />
            <TechStackItem
              title="Programming Languages"
              technologies={["Python", "Go", "Node.js", "Bash", "PowerShell"]}
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Specific IT Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              title="Healthcare IT"
              description="HIPAA-compliant infrastructure and data management"
              features={["HIPAA compliance", "Medical data security", "High availability", "Disaster recovery"]
              pricing="$40k - $120k"
              icon="🏥"
            />
            <IndustryCard
              title="Financial Services"
              description="Secure, compliant infrastructure for financial institutions"
              features={["PCI DSS compliance", "Fraud detection systems", "High-frequency trading", "Risk management"]
              pricing="$50k - $150k"
              icon="💳"
            />
            <IndustryCard
              title="E-commerce & Retail"
              description="Scalable infrastructure for online businesses"
              features={["Auto-scaling", "CDN optimization", "Payment processing", "Inventory management"]
              pricing="$25k - $80k"
              icon="🛒"
            />
            <IndustryCard
              title="Manufacturing"
              description="IoT and industrial automation infrastructure"
              features={["IoT data processing", "Edge computing", "Predictive maintenance", "Supply chain optimization"]
              pricing="$35k - $100k"
              icon="🏭"
            />
            <IndustryCard
              title="Education"
              description="Scalable learning management and collaboration platforms"
              features={["LMS integration", "Video streaming", "Collaboration tools", "Student data privacy"]
              pricing="$20k - $70k"
              icon="🎓"
            />
            <IndustryCard
              title="Government"
              description="Secure, compliant infrastructure for government agencies"
              features={["FedRAMP compliance", "Security clearance", "Data sovereignty", "Audit trails"]
              pricing="$60k - $200k"
              icon="🏛️"
            />
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingCard
              name="IT Assessment"
              price="$4k - $10k"
              duration="2-3 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Cost optimization review",
                "Technology roadmap",
                "Compliance evaluation"
              ]}
              recommended={false}
            />
            <ITPricingCard
              name="Implementation"
              price="$15k - $50k"
              duration="4-8 weeks"
              features={[
                "Infrastructure as Code",
                "CI/CD pipeline setup",
                "Monitoring & alerting",
                "Security hardening",
                "Documentation & training",
                "Go-live support"
              ]}
              recommended={true}
            />
            <ITPricingCard
              name="Managed Services"
              price="$5k+/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring & support",
                "SLO management",
                "Cost optimization",
                "Security updates",
                "Performance tuning",
                "Monthly reporting"
              ]}
              recommended={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your IT needs and create a robust, scalable solution that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ITServiceCard({ title, description, features, pricing, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="text-sm font-semibold text-green-600">Pricing: {pricing}</span>
        <span className="text-sm text-gray-500 ml-2">• Timeline: {timeline}</span>
      </div>
      <ul className="text-sm text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStackItem({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1 mb-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryCard({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="text-sm font-semibold text-green-600 mb-3">Pricing: {pricing}</div>
      <ul className="text-xs text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITPricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${recommended ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

=======
export const metadata = { title: 'IT Services | Zion Tech Group' } export default /**
 * ITServicesPage - Function description
 */
function ITServicesPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>IT Services</h1> <p style={{margin_top: 8, color: '#374151'}}>Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Cloud & Infra" details={["AWS / GCP / Azure", "Kubernetes", "Serverless", "IaC (Terraform)"]} /> <Item title="DevOps & SRE" details={["CI / CD", "Observability", "Autoscaling", "Chaos testing"]} /> <Item title="Security" details={["Hardening", "Zero Trust", "Vuln mgmt", "Compliance"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="Assessment" price="$4k–$10k" features={["2 weeks", "Cloud review", "Security audit", "Roadmap"]} /> <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks", "Infra as code", "CI / CD", "Monitoring"]} /> <Plan name="Managed" price="$5k+/mo" features={["24 / 7 on - call", "SLO mgmt", "Cost optimization", "Reports"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
