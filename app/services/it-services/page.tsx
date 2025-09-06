<<<<<<< HEAD
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'
};
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help you build, secure, and scale your IT infrastructure for the modern digital world.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Strategy"
            description="Complete cloud transformation with AWS, Azure, and GCP expertise"
            features={["Multi-cloud strategy", "Lift & shift migration", "Cloud-native architecture", "Cost optimization", "Security compliance"]}
            price="$15,000-75,000"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD"
            description="Automated deployment pipelines and infrastructure as code"
            features={["CI/CD pipelines", "Infrastructure as Code", "Container orchestration", "Monitoring & alerting", "Automated testing"]}
            price="$10,000-40,000"
            icon="🔄"
          />
          <ITServiceCard
            title="Cybersecurity Solutions"
            description="Comprehensive security services to protect your digital assets"
            features={["Security assessment", "Penetration testing", "Zero Trust architecture", "Compliance management", "Incident response"]}
            price="$8,000-35,000"
            icon="🔒"
          />
          <ITServiceCard
            title="Infrastructure Management"
            description="24/7 monitoring and management of your IT infrastructure"
            features={["Server management", "Database administration", "Backup & recovery", "Performance tuning", "Capacity planning"]}
            price="$5,000-25,000"
            icon="🖥️"
          />
          <ITServiceCard
            title="Network & Connectivity"
            description="Secure and reliable network infrastructure design and implementation"
            features={["Network design", "VPN solutions", "Load balancing", "CDN setup", "Bandwidth optimization"]}
            price="$6,000-20,000"
            icon="🌐"
          />
          <ITServiceCard
<<<<<<< HEAD
            title="Data Management & Analytics"
            description="Data pipeline design and business intelligence solutions"
            features={["Data warehousing", "ETL pipelines", "Real-time analytics", "Data visualization", "Machine learning ops"]}
            price="$12,000-45,000"
            icon="📊"
=======
<<<<<<< HEAD
            title="API Development & Management"
            description="RESTful and GraphQL API development with comprehensive management"
            features={["API design", "Documentation", "Rate limiting", "Authentication", "Monitoring", "Version control"]}
            price="$12k–$35k"
            icon="🔌"
          />
          <ITServiceCard
            title="Microservices Architecture"
            description="Modern microservices implementation with container orchestration"
            features={["Service design", "Container orchestration", "Service mesh", "API gateway", "Monitoring", "Scaling"]}
            price="$25k–$70k"
            icon="🏗️"
          />
          <ITServiceCard
            title="Data Center & Colocation"
            description="Physical infrastructure management and data center optimization"
            features={["Hardware management", "Power optimization", "Cooling systems", "Physical security", "Uptime monitoring", "Disaster recovery"]}
            price="$15k–$45k"
            icon="🏢"
          />
          <ITServiceCard
            title="IT Service Management (ITSM)"
            description="Complete IT service delivery and support management"
            features={["Service desk", "Incident management", "Change management", "Asset management", "Knowledge base", "SLA management"]}
            price="$18k–$50k"
            icon="🎯"
          />
          <ITServiceCard
            title="Cloud Cost Optimization"
            description="Intelligent cloud spending optimization and cost management"
            features={["Cost analysis", "Resource optimization", "Reserved instances", "Auto-scaling", "Budget alerts", "Cost forecasting"]}
            price="$8k–$25k"
            icon="💰"
          />
          <ITServiceCard
            title="Disaster Recovery & Business Continuity"
            description="Comprehensive disaster recovery planning and implementation"
            features={["Backup strategies", "Recovery testing", "RTO/RPO planning", "Failover systems", "Documentation", "Training"]}
            price="$20k–$60k"
            icon="🔄"
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ITProcessStep
            step="1"
            title="Assessment & Planning"
            description="Comprehensive analysis of your current IT infrastructure and requirements"
          />
          <ITProcessStep
            step="2"
            title="Design & Architecture"
            description="Create scalable, secure, and cost-effective IT solutions"
          />
          <ITProcessStep
            step="3"
            title="Implementation"
            description="Deploy solutions with minimal downtime and maximum efficiency"
          />
          <ITProcessStep
            step="4"
            title="Support & Optimization"
            description="Ongoing maintenance, monitoring, and continuous improvement"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITTechStack
            title="Cloud Platforms"
            technologies={["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Vultr"]}
          />
          <ITTechStack
            title="DevOps Tools"
            technologies={["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform"]}
          />
          <ITTechStack
            title="Security & Monitoring"
            technologies={["Splunk", "ELK Stack", "Prometheus", "Grafana", "Wazuh"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustrySolution
            title="Healthcare IT"
            description="HIPAA-compliant infrastructure and secure patient data management"
            solutions={["HIPAA compliance", "Patient data security", "Telemedicine platforms", "Medical imaging systems"]}
            icon="🏥"
          />
          <IndustrySolution
            title="Financial Services"
            description="Secure, compliant infrastructure for financial institutions"
            solutions={["PCI DSS compliance", "Fraud detection systems", "High-frequency trading", "Risk management"]}
            icon="💰"
          />
          <IndustrySolution
            title="E-commerce"
            description="Scalable infrastructure for high-traffic online stores"
            solutions={["Auto-scaling", "CDN optimization", "Payment processing", "Inventory management"]}
            icon="🛒"
          />
          <IndustrySolution
            title="Manufacturing"
            description="IoT and industrial automation infrastructure"
            solutions={["IoT platforms", "Predictive maintenance", "Supply chain optimization", "Quality control"]}
            icon="🏭"
          />
          <IndustrySolution
            title="Education"
            description="Learning management systems and educational technology"
            solutions={["LMS platforms", "Virtual classrooms", "Student data management", "Online assessments"]}
            icon="🎓"
          />
          <IndustrySolution
            title="Government"
            description="Secure, compliant infrastructure for government agencies"
            solutions={["FedRAMP compliance", "Secure communications", "Data sovereignty", "Disaster recovery"]}
            icon="🏛️"
          />
        </div>
      </section>

      <Pricing />
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our IT Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITBenefitCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your critical systems"
            icon="🛡️"
          />
          <ITBenefitCard
            title="Cost Optimization"
            description="Reduce IT costs by up to 40% through efficient resource management"
            icon="💰"
          />
          <ITBenefitCard
            title="Security First"
            description="Enterprise-grade security measures to protect your data and systems"
            icon="🔐"
          />
          <ITBenefitCard
            title="Scalable Solutions"
            description="Infrastructure that grows with your business needs"
            icon="📈"
          />
          <ITBenefitCard
            title="Expert Team"
            description="Certified professionals with deep industry experience"
            icon="👨‍💻"
          />
          <ITBenefitCard
            title="Proactive Monitoring"
            description="Prevent issues before they impact your business"
            icon="📊"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ITServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function ITProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ITTechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustrySolution({ title, description, solutions, icon }: { 
  title: string; 
  description: string; 
  solutions: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
=======
export const metadata = { title: 'IT Services | Zion Tech Group' };

export default function ITServicesPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>IT Services</h1>
      <p style={{marginTop: 8, color: '#374151'}}>Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p>
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item title="Cloud & Infra" details={["AWS/GCP/Azure", "Kubernetes", "Serverless", "IaC (Terraform)"]} />
        <Item title="DevOps & SRE" details={["CI/CD", "Observability", "Autoscaling", "Chaos testing"]} />
        <Item title="Security" details={["Hardening", "Zero Trust", "Vuln mgmt", "Compliance"]} />
      </div>
      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
    </div>
  );
}

function Pricing() {
  return (
<<<<<<< HEAD
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Assessment" 
          price="$4k–$10k" 
          features={["2 weeks", "Cloud review", "Security audit", "Roadmap", "Recommendations"]} 
          popular={false}
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring", "Security hardening"]} 
          popular={true}
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports", "Proactive maintenance"]} 
          popular={false}
        />
      </div>
    </section>
  );
<<<<<<< HEAD
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
=======
    <div style={{marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
      <Plan name="Assessment" price="$4k–$10k" features={["2 weeks", "Cloud review", "Security audit", "Roadmap"]} />
      <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring"]} />
      <Plan name="Managed" price="$5k+/mo" features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports"]} />
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
    </div>
  );
}

<<<<<<< HEAD
function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your IT needs and create a comprehensive solution that improves efficiency, 
        security, and scalability. Our team of IT experts is ready to help you transform your infrastructure.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
    </div>
  );
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
=======
function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h4 style={{fontWeight: 700}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, marginTop: 4}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginTop: 8}}>{features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul>
      <a href="https://ziontechgroup.com" style={{display: 'inline-block', marginTop: 12, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: 6}}>Get Started</a>
    </div>
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-2140
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
