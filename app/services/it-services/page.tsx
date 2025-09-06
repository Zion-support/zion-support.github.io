<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation. Enterprise-grade solutions for modern businesses.'
=======
export const metadata = {
  title: 'Service Name | Zion Tech Group',
  description: 'Service description for the Zion Tech Group service page.',
  keywords: 'service keywords, relevant terms',
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
};

export default function ServicePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services including cloud migration, DevOps, cybersecurity, 
            infrastructure management, and digital transformation. Enterprise-grade solutions for modern businesses.
          </p>
        </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
import { Metadata } from 'next';
import Link from 'next/link';
=======
import Link from "next/link";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

export const metadata = {
  title: "IT Services | Zion Tech Group - Complete IT Solutions & Support",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support. Enterprise-grade solutions from $3,000/month with 99.9% uptime guarantee.",
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function ITServicesPage() {}
  return (
<<<<<<< HEAD
    <div className="animate-fade-in">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete IT infrastructure management, cloud migration, cybersecurity, and 24/7 support. 
            Keep your systems running smoothly while you focus on growing your business.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
<<<<<<< HEAD
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
=======
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help you build, secure, and scale your infrastructure for maximum performance.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Architecture"
            description="Complete cloud migration with modern architecture patterns"
            features={["Multi-cloud strategy", "Container orchestration", "Serverless architecture", "Cost optimization", "Disaster recovery"]}
            price="$15k–$50k"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD Automation"
            description="End-to-end DevOps implementation with automated pipelines"
            features={["CI/CD pipelines", "Infrastructure as Code", "Automated testing", "Deployment automation", "Environment management"]}
            price="$10k–$35k"
            icon="🔄"
          />
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Proactive monitoring and reliability engineering"
            features={["SLO/SLI definition", "Error budget management", "Incident response", "Capacity planning", "Performance optimization"]}
            price="$20k–$60k"
            icon="📊"
          />
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security hardening and compliance management"
            features={["Security assessment", "Zero Trust architecture", "Vulnerability management", "Compliance auditing", "Security monitoring"]}
            price="$12k–$40k"
            icon="🔒"
          />
          <ITServiceCard
            title="Database & Data Management"
            description="Database optimization and data pipeline management"
            features={["Database migration", "Performance tuning", "Data backup & recovery", "Data pipeline automation", "Data governance"]}
            price="$8k–$25k"
            icon="🗄️"
          />
          <ITServiceCard
            title="Network & Infrastructure"
            description="Network design, optimization, and infrastructure management"
            features={["Network architecture", "Load balancing", "CDN implementation", "VPN & connectivity", "Infrastructure monitoring"]}
            price="$10k–$30k"
            icon="🌐"
          />
          <ITServiceCard
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
          />
          <ITServiceCard
            title="IT Consulting & Strategy"
            description="Strategic IT planning and digital transformation consulting"
            features={["Technology roadmap", "Digital transformation", "IT governance", "Vendor evaluation", "Budget planning", "Risk assessment"]}
            price="$8k–$25k"
            icon="💡"
          />
          <ITServiceCard
            title="Cloud Security & Compliance"
            description="Advanced cloud security implementation and compliance management"
            features={["Cloud security architecture", "Compliance frameworks", "Identity management", "Data encryption", "Audit preparation", "Security monitoring"]}
            price="$15k–$45k"
            icon="🔐"
          />
          <ITServiceCard
            title="Application Performance Monitoring"
            description="Comprehensive APM solutions with real-time monitoring and optimization"
            features={["Real-time monitoring", "Performance analytics", "Error tracking", "User experience monitoring", "Alerting systems", "Performance optimization"]}
            price="$10k–$30k"
            icon="📈"
          />
          <ITServiceCard
            title="IT Asset Management"
            description="Complete IT asset lifecycle management and optimization"
            features={["Asset inventory", "License management", "Lifecycle tracking", "Cost optimization", "Compliance reporting", "Automated discovery"]}
            price="$12k–$35k"
            icon="📋"
          />
          <ITServiceCard
            title="Cloud Cost Management"
            description="Intelligent cloud spending optimization and budget management"
            features={["Cost analysis", "Budget forecasting", "Resource optimization", "Reserved instances", "Auto-scaling", "Cost alerts"]}
            price="$8k–$25k"
            icon="💰"
          />
          <ITServiceCard
            title="IT Support & Help Desk"
            description="24/7 IT support and help desk services for your organization"
            features={["24/7 support", "Remote assistance", "Ticket management", "Knowledge base", "User training", "SLA management"]}
            price="$3k–$15k/mo"
            icon="🎧"
          />
          <ITServiceCard
            title="Data Backup & Recovery"
            description="Comprehensive data protection and recovery solutions"
            features={["Automated backups", "Point-in-time recovery", "Cross-region replication", "Backup testing", "Recovery planning", "Compliance reporting"]}
            price="$10k–$30k"
            icon="💾"
          />
          <ITServiceCard
            title="IT Training & Documentation"
            description="Comprehensive IT training programs and technical documentation"
            features={["Technical training", "Process documentation", "User manuals", "Video tutorials", "Certification programs", "Knowledge transfer"]}
            price="$5k–$20k"
            icon="📚"
          />
          <ITServiceCard
            title="Mobile Device Management"
            description="Enterprise mobile device security and management solutions"
            features={["Device enrollment", "Policy enforcement", "App management", "Security controls", "Remote wipe", "Compliance monitoring"]}
            price="$8k–$25k"
            icon="📱"
          />
          <ITServiceCard
            title="IT Governance & Risk Management"
            description="IT governance framework and risk management implementation"
            features={["Governance framework", "Risk assessment", "Policy development", "Compliance monitoring", "Audit support", "Risk mitigation"]}
            price="$15k–$40k"
            icon="⚖️"
          />
          <ITServiceCard
            title="Cloud Migration Services"
            description="Complete cloud migration planning and execution services"
            features={["Migration planning", "Data migration", "Application migration", "Testing & validation", "Go-live support", "Post-migration optimization"]}
            price="$20k–$80k"
            icon="🚀"
          />
          <ITServiceCard
            title="IT Infrastructure Monitoring"
            description="Comprehensive infrastructure monitoring and alerting solutions"
            features={["Server monitoring", "Network monitoring", "Application monitoring", "Log analysis", "Alerting systems", "Performance dashboards"]}
            price="$8k–$25k"
            icon="📊"
          />
          <ITServiceCard
            title="IT Security Assessment"
            description="Comprehensive security assessment and penetration testing"
            features={["Vulnerability scanning", "Penetration testing", "Security audit", "Compliance assessment", "Risk analysis", "Remediation planning"]}
            price="$10k–$35k"
            icon="🔍"
          />
          <ITServiceCard
            title="IT Project Management"
            description="Professional IT project management and delivery services"
            features={["Project planning", "Resource management", "Timeline management", "Risk management", "Quality assurance", "Stakeholder communication"]}
            price="$12k–$40k"
            icon="📅"
          />
          <ITServiceCard
            title="Cloud Architecture Design"
            description="Custom cloud architecture design and implementation"
            features={["Architecture design", "Scalability planning", "Security design", "Cost optimization", "Performance tuning", "Documentation"]}
            price="$15k–$50k"
            icon="🏗️"
          />
          <ITServiceCard
            title="IT Compliance & Auditing"
            description="Compliance management and audit preparation services"
            features={["Compliance assessment", "Audit preparation", "Policy development", "Control implementation", "Documentation", "Training"]}
            price="$12k–$35k"
            icon="📋"
          />
          <ITServiceCard
            title="IT Vendor Management"
            description="IT vendor evaluation, selection, and relationship management"
            features={["Vendor evaluation", "Contract negotiation", "Performance monitoring", "Cost optimization", "Relationship management", "Risk assessment"]}
            price="$8k–$25k"
            icon="🤝"
          />
          <ITServiceCard
            title="IT Change Management"
            description="IT change management and release management services"
            features={["Change planning", "Impact analysis", "Risk assessment", "Testing coordination", "Deployment management", "Rollback planning"]}
            price="$10k–$30k"
            icon="🔄"
          />
          <ITServiceCard
            title="IT Capacity Planning"
            description="IT capacity planning and resource optimization services"
            features={["Capacity analysis", "Growth planning", "Resource optimization", "Performance modeling", "Cost forecasting", "Scaling strategies"]}
            price="$8k–$25k"
            icon="📈"
          />
=======
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get IT Consultation
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Discuss Your IT Needs
            </a>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Name
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Service description goes here.
          </p>
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {/* Cloud Services */}
            <ITServiceCard
              title="Cloud Services"
              description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP"
              features={[
                "Cloud migration planning",
                "Multi-cloud architecture",
                "Cost optimization",
                "Auto-scaling setup",
                "Disaster recovery",
                "Cloud security"
              ]}
              pricing="From $3,500/month"
              icon="☁️"
              href="/services/cloud-services"
            />

            {/* DevOps & CI/CD */}
            <ITServiceCard
              title="DevOps & CI/CD"
              description="Automated deployment pipelines, infrastructure as code, and continuous integration"
              features={[
                "CI/CD pipeline setup",
                "Infrastructure as Code",
                "Container orchestration",
                "Monitoring & alerting",
                "Automated testing",
                "Deployment automation"
              ]}
              pricing="From $4,200/month"
              icon="🔄"
              href="/services/devops-automation"
            />

            {/* Cybersecurity */}
            <ITServiceCard
              title="Cybersecurity"
              description="Comprehensive security solutions and compliance management"
              features={[
                "Security assessment",
                "Penetration testing",
                "Threat detection",
                "Compliance management",
                "Security training",
                "Incident response"
              ]}
              pricing="From $5,000/month"
              icon="🔒"
              href="/services/cybersecurity"
            />

            {/* Network Management */}
            <ITServiceCard
              title="Network Management"
              description="Network design, implementation, and ongoing management"
              features={[
                "Network design & planning",
                "Router & switch configuration",
                "VPN setup",
                "Network monitoring",
                "Performance optimization",
                "Troubleshooting"
              ]}
              pricing="From $2,800/month"
              icon="🌐"
              href="/services/network-management"
            />

            {/* System Administration */}
            <ITServiceCard
              title="System Administration"
              description="Server management, maintenance, and optimization"
              features={[
                "Server setup & configuration",
                "User account management",
                "Backup & recovery",
                "Performance monitoring",
                "Security updates",
                "System maintenance"
              ]}
              pricing="From $3,200/month"
              icon="🖥️"
              href="/services/system-administration"
            />

            {/* Database Management */}
            <ITServiceCard
              title="Database Management"
              description="Database design, optimization, and maintenance"
              features={[
                "Database design",
                "Performance optimization",
                "Backup & recovery",
                "Security hardening",
                "Query optimization",
                "Monitoring & tuning"
              ]}
              pricing="From $2,500/month"
              icon="🗄️"
              href="/services/database-management"
            />
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <Pricing />
      <ContactSection />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      {/* Managed IT Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Managed IT Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete IT management solutions that keep your systems running 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ManagedServiceCard
              title="24/7 Monitoring"
              description="Round-the-clock system monitoring and alerting"
              features={["Real-time monitoring", "Automated alerts", "Performance tracking", "Uptime reporting"]
              icon="📊"
            />
            <ManagedServiceCard
              title="Help Desk Support"
              description="Dedicated technical support for your team"
              features={["Phone & email support", "Remote assistance", "Ticket management", "Knowledge base"]
              icon="🎧"
            />
            <ManagedServiceCard
              title="Security Management"
              description="Comprehensive security monitoring and management"
              features={["Threat detection", "Vulnerability scanning", "Security updates", "Compliance monitoring"]
              icon="🛡️"
            />
            <ManagedServiceCard
              title="Backup & Recovery"
              description="Automated backup and disaster recovery solutions"
              features={["Automated backups", "Disaster recovery", "Data retention", "Recovery testing"]
              icon="💾"
            />
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise across the latest technologies and platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechExpertiseCard
              category="Cloud Platforms"
              technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean"]}
            />
            <TechExpertiseCard
              category="Operating Systems"
              technologies={["Windows Server", "Linux", "macOS", "Unix"]}
            />
            <TechExpertiseCard
              category="Databases"
              technologies={["PostgreSQL", "MySQL", "MongoDB", "Redis"]}
            />
            <TechExpertiseCard
              category="Monitoring"
              technologies={["Nagios", "Zabbix", "Prometheus", "Grafana"]}
            />
          </div>
        </div>
      </section>

      {/* Service Level Agreements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Level Agreements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guaranteed performance and response times for all our IT services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SLACard
              title="Response Time"
              description="How quickly we respond to your requests"
              metrics={[
                "Critical: 15 minutes",
                "High: 1 hour",
                "Medium: 4 hours",
                "Low: 24 hours"
              ]}
              icon="⏱️"
            />
            <SLACard
              title="Uptime Guarantee"
              description="System availability and reliability"
              metrics={[
                "99.9% uptime SLA",
                "24/7 monitoring",
                "Proactive maintenance",
                "Disaster recovery"
              ]}
              icon="📈"
            />
            <SLACard
              title="Resolution Time"
              description="How quickly we resolve issues"
              metrics={[
                "Critical: 2 hours",
                "High: 8 hours",
                "Medium: 24 hours",
                "Low: 72 hours"
              ]}
              icon="🔧"
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Service Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for all our IT services and support packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingCard
              title="Basic IT Support"
              price="$3,000"
              period="month"
              description="Essential IT support for small businesses"
              features={[
                "5 hours/month support",
                "Email & phone support",
                "Basic monitoring",
                "Security updates",
                "Backup management"
              ]}
              popular={false}
            />
            <ITPricingCard
              title="Professional IT"
              price="$5,000"
              period="month"
              description="Comprehensive IT management for growing businesses"
              features={[
                "15 hours/month support",
                "24/7 monitoring",
                "Priority support",
                "Advanced security",
                "Cloud management",
                "Monthly reporting"
              ]}
              popular={true}
            />
            <ITPricingCard
              title="Enterprise IT"
              price="Custom"
              period=""
              description="Full IT management for large organizations"
              features={[
                "Unlimited support",
                "Dedicated team",
                "Custom solutions",
                "Enterprise security",
                "Multi-cloud management",
                "Quarterly reviews"
              ]}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored IT solutions for specific industries and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustrySolutionCard
              title="Healthcare IT"
              description="HIPAA-compliant IT solutions"
              features={["HIPAA compliance", "Secure data handling", "Medical device integration"]
              icon="🏥"
            />
            <IndustrySolutionCard
              title="Financial Services"
              description="Bank-grade security and compliance"
              features={["PCI DSS compliance", "Fraud detection", "Audit trails"]
              icon="🏦"
            />
            <IndustrySolutionCard
              title="E-commerce"
              description="High-availability e-commerce infrastructure"
              features={["High availability", "Payment processing", "Inventory management"]
              icon="🛒"
            />
            <IndustrySolutionCard
              title="Manufacturing"
              description="Industrial IT and IoT solutions"
              features={["IoT integration", "Production monitoring", "Supply chain management"]
              icon="🏭"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our IT experts help you build a robust, secure, and scalable technology foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-purple-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
function ITServiceCard({ title, description, features, pricing, timeline, icon }: {
=======
function ITServiceCard({
  title,
  description,
  features,
  pricing,
  icon,
  href
}: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  title: string;
  description: string;
  features: string[];
  pricing: string;
<<<<<<< HEAD
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
=======
function ITServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
=======
  icon: string;
  href: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </li>
        ))}
      </ul>
    </div>
<<<<<<< HEAD
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
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840

        {/* IT Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ITServiceCategory
            title="Cloud & Infrastructure"
            icon="☁️"
            description="Scalable cloud solutions and infrastructure management"
            services={[
              "Cloud migration & strategy",
              "Multi-cloud architecture",
              "Container orchestration",
              "Infrastructure as Code",
              "Disaster recovery",
              "Cost optimization"
            ]}
          />
          <ITServiceCategory
            title="DevOps & SRE"
            icon="⚙️"
            description="Automation and reliability engineering"
            services={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Incident response",
              "Performance optimization",
              "Chaos engineering",
              "SLA management"
            ]}
          />
          <ITServiceCategory
            title="Cybersecurity"
            icon="🔒"
            description="Comprehensive security solutions and compliance"
            services={[
              "Security assessment",
              "Penetration testing",
              "Zero Trust architecture",
              "Compliance management",
              "Incident response",
              "Security training"
            ]}
          />
        </div>

        {/* Real IT Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ITSolution
              title="Cloud Migration & Modernization"
              description="Complete cloud transformation and application modernization"
              features={[
                "Legacy system migration",
                "Application refactoring",
                "Database migration",
                "Performance optimization",
                "Cost reduction analysis",
                "Security compliance"
              ]}
              price="$25k - $100k"
              timeline="8-20 weeks"
              useCase="Enterprise, mid-market, startups"
              marketSize="$50B"
            />
            <ITSolution
              title="DevOps Transformation"
              description="End-to-end DevOps implementation and culture change"
              features={[
                "CI/CD pipeline automation",
                "Infrastructure automation",
                "Monitoring & alerting",
                "Team training & coaching",
                "Process optimization",
                "Tool integration"
              ]}
              price="$15k - $60k"
              timeline="6-16 weeks"
              useCase="Development teams, engineering organizations"
              marketSize="$8.2B"
            />
            <ITSolution
              title="Cybersecurity Assessment"
              description="Comprehensive security evaluation and hardening"
              features={[
                "Vulnerability assessment",
                "Penetration testing",
                "Security architecture review",
                "Compliance audit",
                "Incident response planning",
                "Security training"
              ]}
              price="$10k - $40k"
              timeline="4-12 weeks"
              useCase="All industries, compliance requirements"
              marketSize="$12.5B"
            />
            <ITSolution
              title="Infrastructure Monitoring"
              description="24/7 infrastructure monitoring and management"
              features={[
                "Real-time monitoring",
                "Automated alerting",
                "Performance optimization",
                "Capacity planning",
                "Incident response",
                "Monthly reporting"
              ]}
              price="$5k - $20k/month"
              timeline="Ongoing"
              useCase="SaaS companies, e-commerce, enterprises"
              marketSize="$4.8B"
            />
            <ITSolution
              title="Disaster Recovery & Backup"
              description="Comprehensive backup and disaster recovery solutions"
              features={[
                "Automated backup systems",
                "Disaster recovery planning",
                "RTO/RPO optimization",
                "Testing & validation",
                "Documentation & training",
                "Ongoing maintenance"
              ]}
              price="$8k - $35k"
              timeline="4-10 weeks"
              useCase="Critical systems, compliance requirements"
              marketSize="$3.2B"
            />
            <ITSolution
              title="Network Security & Firewall"
              description="Advanced network security and firewall management"
              features={[
                "Firewall configuration",
                "Network segmentation",
                "Intrusion detection",
                "VPN setup",
                "Security policies",
                "Ongoing management"
              ]}
              price="$12k - $45k"
              timeline="6-14 weeks"
              useCase="Remote work, multi-location businesses"
              marketSize="$6.1B"
            />
            <ITSolution
              title="IT Support & Helpdesk"
              description="Professional IT support and helpdesk services"
              features={[
                "24/7 technical support",
                "Remote assistance",
                "Hardware & software support",
                "User training",
                "Ticket management",
                "SLA guarantees"
              ]}
              price="$3k - $15k/month"
              timeline="Ongoing"
              useCase="Small businesses, remote teams"
              marketSize="$7.3B"
            />
            <ITSolution
              title="Data Center Services"
              description="Data center design, migration, and management"
              features={[
                "Data center design",
                "Hardware procurement",
                "Migration planning",
                "Power & cooling optimization",
                "Security implementation",
                "Ongoing management"
              ]}
              price="$50k - $200k"
              timeline="12-24 weeks"
              useCase="Large enterprises, government"
              marketSize="$9.7B"
            />
            <ITSolution
              title="IT Consulting & Strategy"
              description="Strategic IT planning and digital transformation"
              features={[
                "IT strategy development",
                "Technology roadmap",
                "Digital transformation",
                "Vendor evaluation",
                "Budget planning",
                "Implementation guidance"
              ]}
              price="$5k - $25k"
              timeline="2-8 weeks"
              useCase="C-level executives, IT leadership"
              marketSize="$5.4B"
=======
import Link from 'next/link';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure optimization, and enterprise solutions.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions for modern enterprises. From cloud migration to cybersecurity, 
            we help you build, secure, and optimize your technology infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceCard 
            title="Cloud Migration & Architecture" 
            details={[
              "AWS, Azure, GCP migration",
              "Multi-cloud strategy & implementation", 
              "Container orchestration (Kubernetes)",
              "Serverless architecture design",
              "Cost optimization & monitoring",
              "Disaster recovery planning"
            ]} 
            icon="☁️"
          />
          <ServiceCard 
            title="DevOps & SRE" 
            details={[
              "CI/CD pipeline automation",
              "Infrastructure as Code (IaC)", 
              "Monitoring & observability",
              "Incident response & on-call",
              "Performance optimization",
              "Security automation"
            ]} 
            icon="🔧"
          />
          <ServiceCard 
            title="Cybersecurity & Compliance" 
            details={[
              "Security assessment & auditing",
              "Penetration testing", 
              "Compliance (SOC2, GDPR, HIPAA)",
              "Identity & access management",
              "Threat detection & response",
              "Security training & awareness"
            ]} 
            icon="🔒"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              title="Enterprise Cloud Infrastructure"
              description="Complete cloud transformation with high availability, scalability, and security"
              price="$50k - $150k"
              features={["Multi-cloud setup", "Auto-scaling", "Load balancing", "Backup & recovery"]}
            />
            <SolutionCard
              title="DevSecOps Implementation"
              description="Secure DevOps practices with automated security testing and compliance"
              price="$30k - $80k"
              features={["Security automation", "Compliance monitoring", "Vulnerability scanning", "Policy enforcement"]}
            />
            <SolutionCard
              title="Network Security Hardening"
              description="Comprehensive network security assessment and hardening services"
              price="$25k - $60k"
              features={["Firewall configuration", "Intrusion detection", "VPN setup", "Network monitoring"]}
            />
            <SolutionCard
              title="Data Center Modernization"
              description="Legacy system modernization with cloud-native architecture"
              price="$75k - $200k"
              features={["Legacy migration", "Microservices architecture", "API development", "Performance optimization"]}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
            />
          </div>
        </div>

<<<<<<< HEAD
        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies & Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ITTechnology
              category="Cloud Platforms"
              technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"]}
            />
            <ITTechnology
              category="DevOps Tools"
              technologies={["Docker", "Kubernetes", "Jenkins", "GitLab", "Terraform"]}
            />
            <ITTechnology
              category="Monitoring"
              technologies={["Prometheus", "Grafana", "Datadog", "New Relic", "Splunk"]}
            />
            <ITTechnology
              category="Security"
              technologies={["CrowdStrike", "SentinelOne", "Okta", "Palo Alto", "Fortinet"]}
            />
          </div>
        </div>

        {/* IT Certifications & Compliance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComplianceCard
              title="SOC 2 Type II"
              description="Security and availability controls"
              icon="🛡️"
            />
            <ComplianceCard
              title="ISO 27001"
              description="Information security management"
              icon="📋"
            />
            <ComplianceCard
              title="HIPAA"
              description="Healthcare data protection"
              icon="🏥"
            />
            <ComplianceCard
              title="PCI DSS"
              description="Payment card industry compliance"
              icon="💳"
            />
            <ComplianceCard
              title="GDPR"
              description="European data protection"
              icon="🇪🇺"
            />
            <ComplianceCard
              title="AWS/Azure Certified"
              description="Cloud platform expertise"
              icon="☁️"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingPlan
              name="IT Assessment"
              price="$4k - $10k"
              duration="2-4 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Recommendations",
                "Implementation roadmap",
                "Cost optimization"
              ]}
              popular={false}
            />
            <ITPricingPlan
              name="IT Implementation"
              price="$15k - $50k"
              duration="4-12 weeks"
              features={[
                "Cloud migration",
                "DevOps setup",
                "Security implementation",
                "Monitoring setup",
                "Team training",
                "Documentation"
              ]}
              popular={true}
            />
            <ITPricingPlan
              name="Managed IT Services"
              price="$5k+/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring",
                "Proactive maintenance",
                "Incident response",
                "Security management",
                "Performance optimization",
                "Regular reporting"
              ]}
              popular={false}
=======
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard title="Cloud Platforms" tech={["AWS", "Azure", "Google Cloud", "DigitalOcean"]} />
            <TechCard title="Containerization" tech={["Docker", "Kubernetes", "OpenShift", "Rancher"]} />
            <TechCard title="Monitoring" tech={["Prometheus", "Grafana", "ELK Stack", "Datadog"]} />
            <TechCard title="Security" tech={["Terraform", "Ansible", "Jenkins", "GitLab CI"]} />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Managed Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ManagedServiceCard
              title="24/7 Infrastructure Monitoring"
              description="Round-the-clock monitoring and alerting for your critical systems"
              price="$2k - $8k/month"
              features={["Real-time monitoring", "Automated alerting", "Incident response", "Performance optimization"]}
            />
            <ManagedServiceCard
              title="Security Operations Center (SOC)"
              description="Comprehensive security monitoring and threat response services"
              price="$3k - $12k/month"
              features={["Threat detection", "Incident response", "Vulnerability management", "Compliance reporting"]}
            />
            <ManagedServiceCard
              title="Cloud Cost Optimization"
              description="Continuous optimization of cloud resources and costs"
              price="$1k - $5k/month"
              features={["Cost analysis", "Resource optimization", "Right-sizing", "Reserved instance management"]}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
            />
          </div>
        </div>

<<<<<<< HEAD
        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can optimize your IT infrastructure, enhance security, and drive digital transformation.
=======
        <Pricing />
        
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your IT?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your IT challenges and create a comprehensive solution that improves efficiency, 
            security, and scalability. Contact us for a free IT assessment and consultation.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
<<<<<<< HEAD
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
=======
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
<<<<<<< HEAD
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
=======
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
            >
              Email Us
            </a>
          </div>
<<<<<<< HEAD
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
}

<<<<<<< HEAD
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
function Item({ title, details }: { title: string; details: string[] }) {
  return (
<<<<<<< HEAD
=======
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>
  );
}

<<<<<<< HEAD
function ITServiceCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
  return (
=======
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="IT Assessment" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Comprehensive cloud review",
            "Security audit & assessment",
            "Performance analysis",
            "Cost optimization review",
            "Technology roadmap",
            "Implementation recommendations"
          ]} 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
<<<<<<< HEAD
          features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring", "Security hardening"]} 
          popular={true}
=======
          duration="4–8 weeks"
          features={[
            "Infrastructure as Code setup",
            "CI/CD pipeline implementation",
            "Monitoring & observability",
            "Security hardening",
            "Performance optimization",
            "Documentation & training"
          ]} 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
<<<<<<< HEAD
          features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports", "Proactive maintenance"]} 
          popular={false}
        />
=======
=======
import React from "react";

export const metadata = {
  title: "IT Services & Solutions | Zion Tech Group",
  description:
    "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions. 24/7 support with 99.9% uptime guarantee.",
  keywords:
    "IT services, cloud migration, DevOps, cybersecurity, infrastructure management, enterprise IT, cloud consulting, SRE",
};

interface ITServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

function ITService({
  title,
  description,
  price,
  features,
  benefits,
  icon,
  href,
}: ITServiceProps) {
  return (
    <a
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Key Features:
        </h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
        <div className="flex flex-wrap gap-1">
          {benefits.map((benefit, index) => (
            <span
              key={index}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
            >
              {benefit}
            </span>
          ))}
        </div>
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
      </div>
<<<<<<< HEAD
=======
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-purple-600">{pricing}</div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    </Link>
=======
    </a>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  );
}

function ManagedServiceCard({
  title,
  description,
  features,
  icon
}: {
  title: string;
  description: string;
  features: string[];
<<<<<<< HEAD
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {cta}
<<<<<<< HEAD
=======
          duration="Ongoing"
          features={[
            "24/7 monitoring & on-call",
            "SLO management & reporting",
            "Cost optimization",
            "Security updates & patches",
            "Performance tuning",
            "Monthly health reports"
          ]} 
        />
      </div>
<<<<<<< HEAD
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
=======
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
=======
  icon: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <a 
        href="tel:+13024640950" 
<<<<<<< HEAD
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
      </a>
function ContactSection() {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
=======
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
=======
    </div>
  );
}

function TechExpertiseCard({
  category,
  technologies
}: {
  category: string;
  technologies: string[];
}) {
=======
import React from 'react';
import Link from 'next/link';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'
};

export default function ITServicesPage() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return (
<<<<<<< HEAD
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
      <div className="space-y-2">
        {technologies.map((tech, index) => (
          <div key={index} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-1">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

function SLACard({
  title,
  description,
  metrics,
  icon
}: {
  title: string;
  description: string;
  metrics: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {metrics.map((metric, index) => (
          <li key={index} className="text-sm text-gray-600">
            {metric}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITPricingCard({
  title,
  price,
  period,
  description,
  features,
  popular
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-8 ${popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {price}
        {period && <span className="text-lg text-gray-600">/{period}</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      >
        Get Started
      </a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>
  );
}

function IndustrySolutionCard({
  title,
  description,
  features,
  icon
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}

function IndustrySolution({ title, description, solutions, icon }: { 
  title: string; 
  description: string; 
  solutions: string[]; 
=======
=======
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
          Complete IT infrastructure, cloud solutions, and digital
          transformation services to modernize your business operations. 24/7
          support with 99.9% uptime guarantee.
=======
          Comprehensive IT solutions for modern businesses. 
          From cloud migration to cybersecurity, we keep your technology infrastructure running smoothly.
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Consultation
=======

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-100 rounded-lg mb-16">"
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">;
          IT Services;
        </h1>"
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">

        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a"
            href="tel:+13024640950""
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Assessment - Free;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com""
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Consultation;
          </a>
        </div>
      </section>
<<<<<<< HEAD

<<<<<<< HEAD
      {/* IT Services Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our IT Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly
            and securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITService
            title="Cloud Migration & Optimization"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization"
            price="Starting at $5,000"
            features={[
              "Infrastructure assessment",
              "Migration planning & execution",
              "Data migration & validation",
              "Application modernization",
              "Cost optimization analysis",
            ]}
            benefits={[
              "Reduced Costs",
              "Better Scalability",
              "Enhanced Security",
              "Improved Performance",
            ]}
            icon="☁️"
            href="/services/cloud-migration"
          />
          <ITService
            title="DevOps & CI/CD Implementation"
            description="Automated deployment pipelines, infrastructure as code, and continuous integration"
            price="Starting at $3,000"
            features={[
              "CI/CD pipeline setup",
              "Infrastructure as code",
              "Container orchestration",
              "Automated testing",
              "Monitoring & alerting",
            ]}
            benefits={[
              "Faster Deployments",
              "Reduced Errors",
              "Better Collaboration",
              "Automated Testing",
            ]}
            icon="⚙️"
            href="/services/ci-cd-pipeline-builder"
          />
          <ITService
            title="Cybersecurity Suite"
            description="Comprehensive security assessment, implementation, and ongoing monitoring"
            price="Starting at $2,000"
            features={[
              "Security assessment & audit",
              "Penetration testing",
              "Vulnerability scanning",
              "Compliance management",
              "Security training & awareness",
            ]}
            benefits={[
              "Enhanced Security",
              "Compliance",
              "Risk Reduction",
              "Peace of Mind",
            ]}
            icon="🔒"
            href="/services/cybersecurity-suite"
          />
          <ITService
            title="Mobile App Development"
            description="Native and cross-platform mobile app development for iOS and Android"
            price="Starting at $5,000"
            features={[
              "iOS & Android development",
              "Cross-platform solutions",
              "App store optimization",
              "Push notifications",
              "Analytics integration",
            ]}
            benefits={[
              "Mobile Presence",
              "User Engagement",
              "Revenue Growth",
              "Brand Visibility",
            ]}
            icon="📱"
            href="/services/mobile-development"
          />
          <ITService
            title="API Development & Integration"
            description="RESTful APIs, GraphQL, and microservices architecture for modern applications"
            price="Starting at $2,000"
            features={[
              "RESTful API design",
              "GraphQL implementation",
              "Microservices architecture",
              "API documentation",
              "Performance optimization",
            ]}
            benefits={[
              "Better Integration",
              "Scalability",
              "Developer Experience",
              "Future-Proof",
            ]}
            icon="🔗"
            href="/services/api-testing-suite"
          />
          <ITService
            title="Database Solutions"
            description="Database design, optimization, migration, and management services"
            price="Starting at $1,500"
            features={[
              "Database design & architecture",
              "Performance optimization",
              "Data migration",
              "Backup & recovery",
              "Monitoring & maintenance",
            ]}
            benefits={[
              "Better Performance",
              "Data Security",
              "Scalability",
              "Reliability",
            ]}
            icon="🗄️"
            href="/services/data-analytics"
          />
          <ITService
            title="Network Infrastructure"
            description="Network design, implementation, and management for optimal connectivity and security"
            price="Starting at $3,500"
            features={[
              "Network design & planning",
              "Firewall configuration",
              "VPN setup",
              "Network monitoring",
              "Security hardening",
            ]}
            benefits={[
              "Better Connectivity",
              "Enhanced Security",
              "Improved Performance",
              "Reliability",
            ]}
            icon="🌐"
            href="/services/network-infrastructure"
          />
          <ITService
            title="IT Support & Helpdesk"
            description="24/7 technical support and helpdesk services for your business operations"
            price="Starting at $1,200"
            features={[
              "24/7 technical support",
              "Remote assistance",
              "Issue tracking & resolution",
              "User training",
              "Knowledge base management",
            ]}
            benefits={[
              "24/7 Support",
              "Quick Resolution",
              "User Satisfaction",
              "Reduced Downtime",
            ]}
            icon="🎧"
            href="/services/helpdesk-platform"
          />
          <ITService
            title="Disaster Recovery & Backup"
            description="Comprehensive backup solutions and disaster recovery planning to protect your data"
            price="Starting at $2,500"
            features={[
              "Backup strategy design",
              "Automated backup systems",
              "Disaster recovery planning",
              "Data replication",
              "Recovery testing",
            ]}
            benefits={[
              "Data Protection",
              "Business Continuity",
              "Risk Mitigation",
              "Peace of Mind",
            ]}
            icon="💾"
            href="/services/disaster-recovery"
=======
      {/* IT Service Categories */}"
      <section className="py-16">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Service Categories</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard"
            title="Cloud Migration & Management""
            description="Seamless cloud migration and ongoing management across AWS, Azure, and Google Cloud.""
            icon="☁️""
            pricing="From $3,000/month""
            features={["Cloud strategy", "Migration planning", "Cost optimization", "24/7 monitoring"]
          />
          <ITServiceCard"
            title="DevOps & CI/CD""
            description="Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code.""
            icon="🔄""
            pricing="From $2,500/month""
            features={["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Automated testing"]
          />
          <ITServiceCard"
            title="Cybersecurity Solutions""
            description="Comprehensive security services including threat detection, compliance, and incident response.""
            icon="🔒""
            pricing="From $4,000/month""
            features={["Threat detection", "Security audits", "Compliance management", "Incident response"]
          />
          <ITServiceCard"
            title="Infrastructure Management""
            description="Complete infrastructure management including servers, networks, and data centers.""
            icon="🖥️""
            pricing="From $2,000/month""
            features={["Server management", "Network optimization", "Backup solutions", "Disaster recovery"]
          />
          <ITServiceCard"
            title="Database Administration""
            description="Expert database management, optimization, and migration services for all major platforms.""
            icon="🗄️""
            pricing="From $1,500/month""
            features={["Database optimization", "Migration services", "Performance tuning", "Backup & recovery"]
          />
          <ITServiceCard"
            title="24/7 IT Support""
            description="Round-the-clock technical support and monitoring for your critical systems.""
            icon="🛠️""
            pricing="From $1,200/month""
            features={["24/7 monitoring", "Help desk support", "Remote assistance", "On-site support"]
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          />
        </div>
      </section>

<<<<<<< HEAD
      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Technology Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies and frameworks to deliver
            cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Azure", icon: "🔵", description: "Microsoft cloud" },
            {
              name: "Google Cloud",
              icon: "🌐",
              description: "Google platform",
            },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Terraform", icon: "🏗️", description: "Infrastructure" },
            { name: "Jenkins", icon: "🔧", description: "CI/CD" },
            { name: "GitLab", icon: "🦊", description: "DevOps platform" },
            { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
            { name: "PostgreSQL", icon: "🐘", description: "SQL database" },
            { name: "Redis", icon: "🔴", description: "Caching" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" },
          ].map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our IT Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure your IT infrastructure is
            robust, secure, and scalable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment & Planning",
              description:
                "We analyze your current IT infrastructure and create a comprehensive improvement plan.",
            },
            {
              step: "02",
              title: "Design & Architecture",
              description:
                "Our experts design a scalable and secure IT architecture tailored to your needs.",
            },
            {
              step: "03",
              title: "Implementation",
              description:
                "We implement the solution with minimal disruption to your business operations.",
            },
            {
              step: "04",
              title: "Monitoring & Support",
              description:
                "Ongoing monitoring, maintenance, and support to ensure optimal performance.",
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
=======
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3</p>
            </div>
<<<<<<< HEAD
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Modernize Your IT Infrastructure?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your IT infrastructure and
          drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Project Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your IT Transformation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        </div>
      </section>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </div>
  );
<<<<<<< HEAD
}

function ServiceCard({ title, details, icon }: { 
  title: string; 
  details: string[]; 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
<<<<<<< HEAD
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}
=======
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="text-gray-600 space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span> {detail}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
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
function SolutionCard({ title, description, price, features }: {
  title: string;
  description: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-green-600 mb-4">{price}</div>
      <ul className="text-gray-600 space-y-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManagedServiceCard({ title, description, price, features }: {
  title: string;
  description: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="text-gray-600 space-y-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ title, tech }: {
  title: string;
  tech: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white">
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
            {item}
          </span>
        ))}
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
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
=======
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="IT Assessment" 
          price="$5k–$15k" 
          duration="1–2 weeks"
          features={[
            "Infrastructure audit & analysis",
            "Security vulnerability assessment", 
            "Performance evaluation",
            "Cost optimization analysis",
            "Technology roadmap",
            "Recommendations report"
          ]} 
        />
        <Plan 
          name="Implementation" 
          price="$25k–$75k" 
          duration="4–12 weeks"
          features={[
            "Cloud migration & setup",
            "DevOps pipeline implementation", 
            "Security hardening",
            "Monitoring & alerting setup",
            "Documentation & training",
            "Go-live support"
          ]} 
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
          popular={true}
        />
        <Plan 
          name="Managed Services" 
<<<<<<< HEAD
          price="$5k+/mo" 
          features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports", "Proactive maintenance"]} 
          popular={false}
        />
      </div>
    </section>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
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
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
=======
}
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
>>>>>>> 85f2cf8c8c24056eae9f08c57d2439681dc591f1
=======

function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Optimize Your IT Infrastructure?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can improve your infrastructure's reliability, security, and performance. 
          Our IT experts have managed 200+ enterprise systems.
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
=======
      {/* Cloud Services */}"
      <section className="py-16 bg-gray-50 rounded-lg">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cloud Services</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CloudServiceCard"
            provider="AWS""
            description="Amazon Web Services migration, optimization, and management""
            features={["EC2 management", "S3 optimization", "RDS administration", "Lambda functions"]"
            pricing="From $2,500/month"
          />
          <CloudServiceCard"
            provider="Microsoft Azure""
            description="Azure cloud services, migration, and hybrid cloud solutions""
            features={["VM management", "Azure SQL", "App Services", "Azure DevOps"]"
            pricing="From $2,800/month"
          />
          <CloudServiceCard"
            provider="Google Cloud""
            description="Google Cloud Platform services and multi-cloud management""
            features={["GKE management", "BigQuery", "Cloud Functions", "AI/ML services"]"
            pricing="From $2,200/month"
          />
        </div>
      </section>

      {/* Security Services */}"
      <section className="py-16">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cybersecurity Services</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SecurityServiceCard"
            title="Security Assessment""
            description="Comprehensive security evaluation and vulnerability assessment""
            icon="🔍""
            pricing="$5,000/assessment"
          />
          <SecurityServiceCard"
            title="Penetration Testing""
            description="Ethical hacking and security testing to identify vulnerabilities""
            icon="🎯""
            pricing="$8,000/test"
          />
          <SecurityServiceCard"
            title="Compliance Management""
            description="SOC2, GDPR, HIPAA, and other compliance requirements""
            icon="📋""
            pricing="$3,000/month"
          />
          <SecurityServiceCard"
            title="Incident Response""
            description="24/7 security monitoring and incident response services""
            icon="🚨""
            pricing="$2,000/month"
          />
        </div>
      </section>

      {/* IT Solutions by Industry */}"
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Solutions by Industry</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard"
            icon="🏦""
            title="Financial Services""
            description="Bank-grade security and compliance for financial institutions""
            solutions={["PCI DSS compliance", "Fraud detection", "High availability", "Disaster recovery"]
          />
          <IndustryCard"
            icon="🏥""
            title="Healthcare""
            description="HIPAA-compliant IT solutions for healthcare providers""
            solutions={["HIPAA compliance", "EHR systems", "Telemedicine", "Data encryption"]
          />
          <IndustryCard"
            icon="🛒""
            title="E-commerce""
            description="Scalable infrastructure for online retail and marketplaces""
            solutions={["Auto-scaling", "CDN optimization", "Payment security", "Inventory systems"]
          />
          <IndustryCard"
            icon="🏭""
            title="Manufacturing""
            description="IoT and industrial automation IT solutions""
            solutions={["IoT integration", "SCADA systems", "Predictive maintenance", "Supply chain"]
          />
          <IndustryCard"
            icon="🎓""
            title="Education""
            description="IT infrastructure for educational institutions and e-learning""
            solutions={["LMS systems", "Student portals", "Virtual classrooms", "Campus networks"]
          />
          <IndustryCard"
            icon="🏠""
            title="Real Estate""
            description="Property management and CRM IT solutions""
            solutions={["CRM systems", "Property databases", "Virtual tours", "Document management"]
          />
        </div>
      </section>

      {/* IT Support Tiers */}"
      <section className="py-16">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Support Tiers</h2>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SupportTierCard"
            name="Basic Support""
            price="$1,200""
            period="month""
            description="Essential IT support for small businesses"
            features={["
              "Email support (8x5)","
              "Remote assistance","
              "Basic monitoring","
              "Software updates","
              "Backup management"
            ]}
            popular={false}
          />
          <SupportTierCard"
            name="Professional Support""
            price="$2,500""
            period="month""
            description="Comprehensive support for growing businesses"
            features={["
              "Phone & email support (24x7)","
              "Priority response","
              "Advanced monitoring","
              "Proactive maintenance","
              "Security management","
              "Cloud optimization"
            ]}
            popular={true}
          />
          <SupportTierCard"
            name="Enterprise Support""
            price="$5,000""
            period="month""
            description="Full-service IT management for large organizations"
            features={["
              "Dedicated account manager","
              "24x7x365 support","
              "On-site technicians","
              "Custom solutions","
              "Strategic planning","
              "Compliance management"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}"
      <section className="py-16 bg-gray-50 rounded-lg">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven IT Results</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard"
            number="99.9%""
            label="Uptime Guarantee""
            description="System availability and reliability"
          />
          <MetricCard"
            number="500+""
            label="IT Projects Completed""
            description="Successfully delivered implementations"
          />
          <MetricCard"
            number="50%""
            label="Cost Reduction""
            description="Average IT cost savings for clients"
          />
          <MetricCard"
            number="24/7""
            label="Support Available""
            description="Round-the-clock technical assistance"
          />
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-16 bg-blue-600 rounded-lg text-white text-center">"
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>"
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 2,000+ businesses that trust Zion Tech Group for their IT needs.
        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a"
            href="tel:+13024640950""
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com""
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Email Us;
          </a>
        </div>"
        <div className="mt-6 text-sm text-blue-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
          price="$2k–$15k/month" 
          duration="Ongoing"
          features={[
            "24/7 monitoring & support",
            "Security operations center", 
            "Performance optimization",
            "Cost management",
            "Regular health checks",
            "Dedicated account manager"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, duration, features, popular = false }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 bg-white relative ${popular ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span> 
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry - {name}"
        className={`mt-6 block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
