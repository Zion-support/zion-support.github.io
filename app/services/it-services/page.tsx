<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, system administration, network management, and technical support for businesses of all sizes.'
=======
export const metadata = {
<<<<<<< HEAD
  title: 'Comprehensive IT Services | Zion Tech Group',
  description: 'Full-stack IT services including cloud migration, cybersecurity, DevOps, system administration, and 24/7 support. Trusted by 500+ businesses.',
  keywords: 'it-services, cloud-migration, cybersecurity, devops, system-administration, managed-services, it-support'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
  title: 'It Services | Zion Tech Group',
  description: 'Professional it services services for your business needs.',
  keywords: 'it-services, services, business, technology',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
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

function ITService({ title, description, price, features, benefits, icon, href }: ITServiceProps) {
  return (
<<<<<<< HEAD
    <Link
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
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, security, and infrastructure management. Engineered for uptime, efficiency, and scalability.'
=======
import Link from "next/link";
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

export const metadata = {
  title: "IT Services | Zion Tech Group",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-scale solutions.",
<<<<<<< HEAD
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
};

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function ITServicesPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help you build, secure, and scale your infrastructure for maximum performance.
        </p>
      </section>

<<<<<<< HEAD
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            End-to-end IT solutions that keep your business running smoothly and securely. 
            From cloud migration to cybersecurity, we provide the expertise and support you need to succeed.
=======
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            It Services
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional it services services for your business needs.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free IT Assessment
            </a>
          </div>
        </div>
<<<<<<< HEAD
        
        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration & Management</h3>
            <p className="text-gray-300 mb-6">Seamless migration to AWS, Azure, or GCP with ongoing optimization and management.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• AWS/Azure/GCP migration</li>
              <li>• Cloud cost optimization</li>
              <li>• Multi-cloud strategies</li>
              <li>• Disaster recovery planning</li>
              <li>• Cloud security implementation</li>
            </ul>
            <div className="mt-6 text-blue-400 font-semibold">Starting at $2,500/month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Solutions</h3>
            <p className="text-gray-300 mb-6">Comprehensive security services to protect your business from evolving threats.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Security assessments & audits</li>
              <li>• Penetration testing</li>
              <li>• Compliance management (SOC2, HIPAA)</li>
              <li>• Incident response planning</li>
              <li>• Security awareness training</li>
            </ul>
            <div className="mt-6 text-blue-400 font-semibold">Starting at $1,800/month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">DevOps & Automation</h3>
            <p className="text-gray-300 mb-6">Streamline development and deployment with modern DevOps practices and automation.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• CI/CD pipeline setup</li>
              <li>• Infrastructure as Code</li>
              <li>• Container orchestration</li>
              <li>• Monitoring & alerting</li>
              <li>• Performance optimization</li>
            </ul>
            <div className="mt-6 text-blue-400 font-semibold">Starting at $3,200/month</div>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Cloud & Infrastructure" 
            details={[
              "AWS, GCP, Azure multi-cloud strategies",
              "Kubernetes orchestration and management",
              "Serverless architecture implementation",
              "Infrastructure as Code (Terraform, CloudFormation)",
              "Auto-scaling and load balancing",
              "Disaster recovery and backup solutions"
            ]} 
          />
          <Item 
            title="DevOps & SRE" 
            details={[
              "CI/CD pipeline design and implementation",
              "Comprehensive observability and monitoring",
              "Automated testing and quality gates",
              "Chaos engineering and resilience testing",
              "Incident response and post-mortem processes",
              "Performance optimization and capacity planning"
            ]} 
          />
          <Item 
            title="Security & Compliance" 
            details={[
              "Security hardening and vulnerability management",
              "Zero Trust network architecture",
              "Compliance auditing (SOC2, ISO27001, GDPR)",
              "Security monitoring and threat detection",
              "Identity and access management (IAM)",
              "Data protection and encryption"
            ]} 
          />
=======
        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Additional IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold text-white mb-3">System Administration</h3>
              <p className="text-gray-300 text-sm mb-4">24/7 monitoring and management of your IT infrastructure</p>
              <div className="text-blue-400 font-semibold">$1,200/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Network Management</h3>
              <p className="text-gray-300 text-sm mb-4">Design, implement, and maintain secure network infrastructure</p>
              <div className="text-blue-400 font-semibold">$1,500/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">💾</div>
              <h3 className="text-xl font-bold text-white mb-3">Data Backup & Recovery</h3>
              <p className="text-gray-300 text-sm mb-4">Automated backup solutions and disaster recovery planning</p>
              <div className="text-blue-400 font-semibold">$800/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-3">Help Desk Support</h3>
              <p className="text-gray-300 text-sm mb-4">24/7 technical support for your team and end users</p>
              <div className="text-blue-400 font-semibold">$2,000/month</div>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Managed IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$3,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• 24/7 system monitoring</li>
                <li>• Basic security management</li>
                <li>• Email support (8am-6pm EST)</li>
                <li>• Monthly security updates</li>
                <li>• Basic backup & recovery</li>
                <li>• Up to 25 users</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Essential IT Package"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-400">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$7,500<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Everything in Essential</li>
                <li>• Advanced security monitoring</li>
                <li>• Priority phone support</li>
                <li>• Weekly security reports</li>
                <li>• Cloud migration assistance</li>
                <li>• Up to 100 users</li>
                <li>• Monthly strategy calls</li>
                <li>• Disaster recovery planning</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Professional IT Package"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300"> pricing</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Everything in Professional</li>
                <li>• Dedicated account manager</li>
                <li>• 24/7 phone support</li>
                <li>• Custom security solutions</li>
                <li>• On-site support available</li>
                <li>• Unlimited users</li>
                <li>• SLA guarantees</li>
                <li>• Custom integrations</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise IT Package"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Businesses served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert support</div>
            </div>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        </div>
      </section>

<<<<<<< HEAD
      <Pricing />
      <ContactSection />
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
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
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
    </div>
  );
}

function Pricing() {
  return (
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
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Infrastructure as Code setup",
            "CI/CD pipeline implementation",
            "Monitoring & observability",
            "Security hardening",
            "Performance optimization",
            "Documentation & training"
          ]} 
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
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
            <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
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
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Quote Request - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
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
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete IT infrastructure, cloud solutions, and digital transformation services to modernize your business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>
=======
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive operational efficiency. From cloud migration to DevOps automation, we deliver enterprise-grade IT services.
        </p>
      </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

      {/* IT Services Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITService
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization"
            price="Starting at $5,000"
            features={[
              "Infrastructure assessment",
              "Migration planning & execution",
              "Data migration & validation",
              "Application modernization",
              "Cost optimization analysis"
            ]}
            benefits={["Reduced Costs", "Better Scalability", "Enhanced Security", "Improved Performance"]}
            icon="☁️"
            href="/services/cloud-migration"
          />
          <ITService
            title="DevOps & CI/CD"
            description="Automated deployment pipelines, infrastructure as code, and continuous integration"
            price="Starting at $3,000"
            features={[
              "CI/CD pipeline setup",
              "Infrastructure as code",
              "Container orchestration",
              "Automated testing",
              "Monitoring & alerting"
            ]}
            benefits={["Faster Deployments", "Reduced Errors", "Better Collaboration", "Automated Testing"]}
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
              "Security training & awareness"
            ]}
            benefits={["Enhanced Security", "Compliance", "Risk Reduction", "Peace of Mind"]}
            icon="🔒"
            href="/services/cybersecurity-suite"
          />
          <ITService
            title="Mobile Development"
            description="Native and cross-platform mobile app development for iOS and Android"
            price="Starting at $5,000"
            features={[
              "iOS & Android development",
              "Cross-platform solutions",
              "App store optimization",
              "Push notifications",
              "Analytics integration"
            ]}
            benefits={["Mobile Presence", "User Engagement", "Revenue Growth", "Brand Visibility"]}
            icon="📱"
            href="/services/mobile-development"
          />
          <ITService
            title="API Development"
            description="RESTful APIs, GraphQL, and microservices architecture for modern applications"
            price="Starting at $2,000"
            features={[
              "RESTful API design",
              "GraphQL implementation",
              "Microservices architecture",
              "API documentation",
              "Performance optimization"
            ]}
            benefits={["Better Integration", "Scalability", "Developer Experience", "Future-Proof"]}
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
              "Monitoring & maintenance"
            ]}
            benefits={["Better Performance", "Data Security", "Scalability", "Reliability"]}
            icon="🗄️"
            href="/services/data-analytics"
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies and frameworks to deliver cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Azure", icon: "🔵", description: "Microsoft cloud" },
            { name: "Google Cloud", icon: "🌐", description: "Google platform" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Terraform", icon: "🏗️", description: "Infrastructure" },
            { name: "Jenkins", icon: "🔧", description: "CI/CD" },
            { name: "GitLab", icon: "🦊", description: "DevOps platform" },
            { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
            { name: "PostgreSQL", icon: "🐘", description: "SQL database" },
            { name: "Redis", icon: "🔴", description: "Caching" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all IT services. Choose the plan that fits your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Basic"
            price="$2,000"
            period="month"
            description="Essential IT services for small businesses"
            features={[
              "Basic cloud setup",
              "Email & office solutions",
              "Basic security measures",
              "Monthly maintenance",
              "Email support"
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Professional"
            price="$8,000"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Advanced cloud solutions",
              "DevOps implementation",
              "Security monitoring",
              "24/7 support",
              "Performance optimization",
              "Backup & recovery"
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$25,000"
            period="month"
            description="Complete IT transformation for large organizations"
            features={[
              "Custom infrastructure design",
              "Dedicated IT team",
              "Advanced security suite",
              "SLA guarantee",
              "Custom integrations",
              "White-label solutions"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure your IT infrastructure is robust, secure, and scalable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment & Planning",
              description: "We analyze your current IT infrastructure and create a comprehensive improvement plan."
            },
            {
              step: "02",
              title: "Design & Architecture",
              description: "Our experts design a scalable and secure IT architecture tailored to your needs."
            },
            {
              step: "03",
              title: "Implementation",
              description: "We implement the solution with minimal disruption to your business operations."
            },
            {
              step: "04",
              title: "Monitoring & Support",
              description: "Ongoing monitoring, maintenance, and support to ensure optimal performance."
            }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your IT infrastructure and drive business growth.
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
        </div>
      </section>
    </div>
  );
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
}

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
            Get IT Assessment - Free
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      {/* IT Service Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Management"
            description="Seamless cloud migration and ongoing management across AWS, Azure, and Google Cloud."
            icon="☁️"
            pricing="From $3,000/month"
            features={["Cloud strategy", "Migration planning", "Cost optimization", "24/7 monitoring"]
          />
          <ITServiceCard
            title="DevOps & CI/CD"
            description="Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code."
            icon="🔄"
            pricing="From $2,500/month"
            features={["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Automated testing"]
          />
          <ITServiceCard
            title="Cybersecurity Solutions"
            description="Comprehensive security services including threat detection, compliance, and incident response."
            icon="🔒"
            pricing="From $4,000/month"
            features={["Threat detection", "Security audits", "Compliance management", "Incident response"]
          />
          <ITServiceCard
            title="Infrastructure Management"
            description="Complete infrastructure management including servers, networks, and data centers."
            icon="🖥️"
            pricing="From $2,000/month"
            features={["Server management", "Network optimization", "Backup solutions", "Disaster recovery"]
          />
          <ITServiceCard
            title="Database Administration"
            description="Expert database management, optimization, and migration services for all major platforms."
            icon="🗄️"
            pricing="From $1,500/month"
            features={["Database optimization", "Migration services", "Performance tuning", "Backup & recovery"]
          />
          <ITServiceCard
            title="24/7 IT Support"
            description="Round-the-clock technical support and monitoring for your critical systems."
            icon="🛠️"
            pricing="From $1,200/month"
            features={["24/7 monitoring", "Help desk support", "Remote assistance", "On-site support"]
          />
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cloud Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CloudServiceCard
            provider="AWS"
            description="Amazon Web Services migration, optimization, and management"
            features={["EC2 management", "S3 optimization", "RDS administration", "Lambda functions"]
            pricing="From $2,500/month"
          />
          <CloudServiceCard
            provider="Microsoft Azure"
            description="Azure cloud services, migration, and hybrid cloud solutions"
            features={["VM management", "Azure SQL", "App Services", "Azure DevOps"]
            pricing="From $2,800/month"
          />
          <CloudServiceCard
            provider="Google Cloud"
            description="Google Cloud Platform services and multi-cloud management"
            features={["GKE management", "BigQuery", "Cloud Functions", "AI/ML services"]
            pricing="From $2,200/month"
          />
        </div>
      </section>

      {/* Security Services */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cybersecurity Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SecurityServiceCard
            title="Security Assessment"
            description="Comprehensive security evaluation and vulnerability assessment"
            icon="🔍"
            pricing="$5,000/assessment"
          />
          <SecurityServiceCard
            title="Penetration Testing"
            description="Ethical hacking and security testing to identify vulnerabilities"
            icon="🎯"
            pricing="$8,000/test"
          />
          <SecurityServiceCard
            title="Compliance Management"
            description="SOC2, GDPR, HIPAA, and other compliance requirements"
            icon="📋"
            pricing="$3,000/month"
          />
          <SecurityServiceCard
            title="Incident Response"
            description="24/7 security monitoring and incident response services"
            icon="🚨"
            pricing="$2,000/month"
          />
        </div>
      </section>

      {/* IT Solutions by Industry */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Solutions by Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            icon="🏦"
            title="Financial Services"
            description="Bank-grade security and compliance for financial institutions"
            solutions={["PCI DSS compliance", "Fraud detection", "High availability", "Disaster recovery"]
          />
          <IndustryCard
            icon="🏥"
            title="Healthcare"
            description="HIPAA-compliant IT solutions for healthcare providers"
            solutions={["HIPAA compliance", "EHR systems", "Telemedicine", "Data encryption"]
          />
          <IndustryCard
            icon="🛒"
            title="E-commerce"
            description="Scalable infrastructure for online retail and marketplaces"
            solutions={["Auto-scaling", "CDN optimization", "Payment security", "Inventory systems"]
          />
          <IndustryCard
            icon="🏭"
            title="Manufacturing"
            description="IoT and industrial automation IT solutions"
            solutions={["IoT integration", "SCADA systems", "Predictive maintenance", "Supply chain"]
          />
          <IndustryCard
            icon="🎓"
            title="Education"
            description="IT infrastructure for educational institutions and e-learning"
            solutions={["LMS systems", "Student portals", "Virtual classrooms", "Campus networks"]
          />
          <IndustryCard
            icon="🏠"
            title="Real Estate"
            description="Property management and CRM IT solutions"
            solutions={["CRM systems", "Property databases", "Virtual tours", "Document management"]
          />
        </div>
      </section>

      {/* IT Support Tiers */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Support Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SupportTierCard
            name="Basic Support"
            price="$1,200"
            period="month"
            description="Essential IT support for small businesses"
            features={[
              "Email support (8x5)",
              "Remote assistance",
              "Basic monitoring",
              "Software updates",
              "Backup management"
            ]}
            popular={false}
          />
          <SupportTierCard
            name="Professional Support"
            price="$2,500"
            period="month"
            description="Comprehensive support for growing businesses"
            features={[
              "Phone & email support (24x7)",
              "Priority response",
              "Advanced monitoring",
              "Proactive maintenance",
              "Security management",
              "Cloud optimization"
            ]}
            popular={true}
          />
          <SupportTierCard
            name="Enterprise Support"
            price="$5,000"
            period="month"
            description="Full-service IT management for large organizations"
            features={[
              "Dedicated account manager",
              "24x7x365 support",
              "On-site technicians",
              "Custom solutions",
              "Strategic planning",
              "Compliance management"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven IT Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            number="99.9%"
            label="Uptime Guarantee"
            description="System availability and reliability"
          />
          <MetricCard
            number="500+"
            label="IT Projects Completed"
            description="Successfully delivered implementations"
          />
          <MetricCard
            number="50%"
            label="Cost Reduction"
            description="Average IT cost savings for clients"
          />
          <MetricCard
            number="24/7"
            label="Support Available"
            description="Round-the-clock technical assistance"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 2,000+ businesses that trust Zion Tech Group for their IT needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-blue-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
=======
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a free IT assessment and discover how we can improve your technology operations, 
            reduce costs, and enhance security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        </div>
      </div>
    </div>
  );
}
=======
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our IT Solutions</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="☁️"
              title="Cloud Migration & Management"
              description="Seamlessly migrate your infrastructure to AWS, Azure, or GCP with zero downtime and optimized performance."
              benefits={["Zero-downtime migration", "Cost optimization", "Multi-cloud support", "24/7 monitoring"]}
            />
            <FeatureItem
              icon="⚙️"
              title="DevOps & SRE"
              description="Implement CI/CD pipelines, infrastructure as code, and site reliability engineering practices."
              benefits={["Automated deployments", "Infrastructure as Code", "Performance monitoring", "Incident response"]}
            />
            <FeatureItem
              icon="🔒"
              title="Cybersecurity & Compliance"
              description="Comprehensive security solutions including threat detection, vulnerability management, and compliance."
              benefits={["Threat detection", "Security audits", "Compliance management", "Incident response"]}
            />
            <FeatureItem
              icon="🖥️"
              title="Infrastructure Management"
              description="End-to-end infrastructure management including servers, networks, and data centers."
              benefits={["Server management", "Network optimization", "Data center operations", "Capacity planning"]}
            />
            <FeatureItem
              icon="📊"
              title="IT Consulting & Strategy"
              description="Strategic IT consulting to align technology with business objectives and drive digital transformation."
              benefits={["Technology strategy", "Digital transformation", "IT governance", "Change management"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for IT?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🚀"
              title="Proven Track Record"
              description="Successfully delivered 500+ IT projects with 99.9% uptime and 300% average ROI for our clients."
            />
            <BenefitCard
              icon="🔧"
              title="Expert Team"
              description="Certified professionals with deep expertise in cloud platforms, DevOps, and enterprise technologies."
            />
            <BenefitCard
              icon="⚡"
              title="Rapid Implementation"
              description="Fast deployment and implementation with minimal disruption to your business operations."
            />
            <BenefitCard
              icon="🛡️"
              title="Enterprise Security"
              description="Bank-grade security measures and compliance with industry standards and regulations."
            />
<<<<<<< HEAD
=======

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored it services solutions designed for your specific business
              requirements.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Advanced Technology
            </h3>
            <p className='text-gray-300'>
              Cutting-edge technology and best practices to deliver exceptional
              results.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>24/7 Support</h3>
            <p className='text-gray-300'>
              Round-the-clock support to ensure your it services solutions run
              smoothly.
            </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
