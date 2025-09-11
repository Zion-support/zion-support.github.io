export const metadata = {
  title: 'DevOps Services | Zion Tech Group',
  description:
    'Comprehensive DevOps solutions including CI/CD, infrastructure automation, monitoring, and site reliability engineering services.',
};

export default function DevOpsPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            DevOps & Automation Services
          </h1>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
            Streamline your development workflow with our comprehensive DevOps
            solutions. We help teams deliver software faster, more reliably, and
            with higher quality.
          </p>
        </div>

        {/* CI/CD & Pipeline Services */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            CI/CD & Pipeline Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              title='GitLab CI/CD Setup'
              description='Complete GitLab CI/CD pipeline configuration with automated testing and deployment'
              features={[
                'Pipeline design',
                'Automated testing',
                'Docker integration',
                'Security scanning',
              ]}
              price='$8k - $25k'
              icon='🦊'
            />
            <ServiceCard
              title='Jenkins Automation'
              description='Jenkins server setup and pipeline configuration for enterprise environments'
              features={[
                'Master/slave setup',
                'Pipeline as code',
                'Plugin management',
                'Security hardening',
              ]}
              price='$10k - $30k'
              icon='🔧'
            />
            <ServiceCard
              title='GitHub Actions'
              description='GitHub Actions workflow setup for automated builds, tests, and deployments'
              features={[
                'Workflow design',
                'Matrix builds',
                'Secret management',
                'Custom actions',
              ]}
              price='$5k - $15k'
              icon='🐙'
            />
            <ServiceCard
              title='Azure DevOps Pipelines'
              description='Microsoft Azure DevOps pipeline setup with multi-stage deployments'
              features={[
                'YAML pipelines',
                'Release management',
                'Artifact management',
                'Approval gates',
              ]}
              price='$8k - $20k'
              icon='☁️'
            />
            <ServiceCard
              title='CircleCI Configuration'
              description='CircleCI setup for fast, reliable builds with advanced caching and parallelism'
              features={[
                'Orb management',
                'Parallel execution',
                'Docker layer caching',
                'SSH debugging',
              ]}
              price='$6k - $18k'
              icon='⭕'
            />
            <ServiceCard
              title='Custom CI/CD Solutions'
              description='Bespoke CI/CD solutions tailored to your specific technology stack'
              features={[
                'Custom tooling',
                'Integration design',
                'Performance optimization',
                'Documentation',
              ]}
              price='$15k - $50k'
              icon='🛠️'
            />
          </div>
        </div>

        {/* Infrastructure Automation */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Infrastructure Automation
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              title='Terraform Infrastructure'
              description='Infrastructure as Code using Terraform for consistent, repeatable deployments'
              features={[
                'Module development',
                'State management',
                'Multi-environment',
                'Validation',
              ]}
              price='$12k - $35k'
              icon='🏗️'
            />
            <ServiceCard
              title='Ansible Automation'
              description='Configuration management and application deployment with Ansible'
              features={[
                'Playbook development',
                'Inventory management',
                'Role creation',
                'Testing',
              ]}
              price='$8k - $25k'
              icon='🔧'
            />
            <ServiceCard
              title='Kubernetes Management'
              description='Kubernetes cluster setup, configuration, and management'
              features={[
                'Cluster provisioning',
                'Helm charts',
                'Service mesh',
                'Monitoring',
              ]}
              price='$20k - $60k'
              icon='☸️'
            />
            <ServiceCard
              title='Docker Containerization'
              description='Application containerization and Docker orchestration'
              features={[
                'Dockerfile optimization',
                'Multi-stage builds',
                'Registry setup',
                'Security scanning',
              ]}
              price='$5k - $20k'
              icon='🐳'
            />
            <ServiceCard
              title='AWS CloudFormation'
              description='AWS infrastructure automation using CloudFormation templates'
              features={[
                'Template development',
                'Stack management',
                'Drift detection',
                'Cross-stack references',
              ]}
              price='$10k - $30k'
              icon='☁️'
            />
            <ServiceCard
              title='Pulumi Infrastructure'
              description='Modern infrastructure as code using Pulumi with your preferred language'
              features={[
                'Multi-language support',
                'State management',
                'Testing framework',
                'CI/CD integration',
              ]}
              price='$15k - $40k'
              icon='🚀'
            />
          </div>
        </div>

        {/* Monitoring & Observability */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Monitoring & Observability
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              title='Prometheus & Grafana'
              description='Complete monitoring stack with Prometheus metrics and Grafana dashboards'
              features={[
                'Metrics collection',
                'Custom dashboards',
                'Alerting rules',
                'Service discovery',
              ]}
              price='$10k - $30k'
              icon='📊'
            />
            <ServiceCard
              title='ELK Stack Setup'
              description='Elasticsearch, Logstash, and Kibana for centralized logging and analysis'
              features={[
                'Log aggregation',
                'Search optimization',
                'Index management',
                'Visualization',
              ]}
              price='$15k - $40k'
              icon='🔍'
            />
            <ServiceCard
              title='Datadog Implementation'
              description='Comprehensive monitoring with Datadog for applications and infrastructure'
              features={[
                'APM setup',
                'Infrastructure monitoring',
                'Log management',
                'Synthetic testing',
              ]}
              price='$8k - $25k'
              icon='🐕'
            />
            <ServiceCard
              title='New Relic Configuration'
              description='Application performance monitoring and infrastructure monitoring with New Relic'
              features={[
                'APM setup',
                'Infrastructure monitoring',
                'Synthetic monitoring',
                'Alert policies',
              ]}
              price='$6k - $20k'
              icon='📈'
            />
            <ServiceCard
              title='Splunk Implementation'
              description='Enterprise-grade log management and security information with Splunk'
              features={[
                'Data ingestion',
                'Search optimization',
                'Dashboards',
                'Security monitoring',
              ]}
              price='$20k - $60k'
              icon='🔍'
            />
            <ServiceCard
              title='Custom Monitoring Solutions'
              description='Bespoke monitoring solutions tailored to your specific requirements'
              features={[
                'Custom metrics',
                'Integration design',
                'Alerting logic',
                'Dashboard creation',
              ]}
              price='$25k - $70k'
              icon='⚙️'
            />
          </div>
        </div>

        {/* Site Reliability Engineering */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Site Reliability Engineering
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              title='SLO & SLI Definition'
              description='Service Level Objectives and Indicators setup for reliability measurement'
              features={[
                'SLO design',
                'SLI implementation',
                'Error budget tracking',
                'Reporting',
              ]}
              price='$8k - $20k'
              icon='🎯'
            />
            <ServiceCard
              title='Chaos Engineering'
              description='Resilience testing through controlled failures to improve system reliability'
              features={[
                'Failure injection',
                'Resilience testing',
                'Recovery procedures',
                'Documentation',
              ]}
              price='$12k - $35k'
              icon='💥'
            />
            <ServiceCard
              title='Incident Response Setup'
              description='Incident management processes and tools for effective response'
              features={[
                'Process design',
                'Tool configuration',
                'Runbook creation',
                'Training',
              ]}
              price='$10k - $25k'
              icon='🚨'
            />
            <ServiceCard
              title='Performance Optimization'
              description='Application and infrastructure performance tuning for maximum efficiency'
              features={[
                'Code profiling',
                'Database optimization',
                'Caching strategies',
                'Load testing',
              ]}
              price='$15k - $45k'
              icon='⚡'
            />
            <ServiceCard
              title='Disaster Recovery Planning'
              description='Comprehensive disaster recovery strategies and implementation'
              features={[
                'Strategy design',
                'Backup implementation',
                'Recovery testing',
                'Documentation',
              ]}
              price='$20k - $60k'
              icon='🛡️'
            />
            <ServiceCard
              title='Capacity Planning'
              description='Resource planning and scaling strategies for future growth'
              features={[
                'Growth analysis',
                'Resource modeling',
                'Scaling strategies',
                'Cost optimization',
              ]}
              price='$12k - $35k'
              icon='📈'
            />
          </div>
        </div>

        {/* Security & Compliance */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Security & Compliance
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              title='DevSecOps Implementation'
              description='Security integration throughout the development lifecycle'
              features={[
                'Security scanning',
                'Policy enforcement',
                'Vulnerability management',
                'Compliance',
              ]}
              price='$15k - $45k'
              icon='🔒'
            />
            <ServiceCard
              title='Secrets Management'
              description='Secure storage and management of application secrets and credentials'
              features={[
                'Vault setup',
                'Secret rotation',
                'Access control',
                'Audit logging',
              ]}
              price='$8k - $25k'
              icon='🗝️'
            />
            <ServiceCard
              title='Container Security'
              description='Security hardening and scanning for containerized applications'
              features={[
                'Image scanning',
                'Runtime security',
                'Policy enforcement',
                'Vulnerability management',
              ]}
              price='$10k - $30k'
              icon='🐳'
            />
            <ServiceCard
              title='Infrastructure Security'
              description='Security hardening and compliance for cloud infrastructure'
              features={[
                'Security groups',
                'Network policies',
                'Compliance scanning',
                'Audit trails',
              ]}
              price='$12k - $35k'
              icon='🏗️'
            />
            <ServiceCard
              title='Compliance Automation'
              description='Automated compliance checking and reporting for various standards'
              features={[
                'Policy as code',
                'Automated scanning',
                'Compliance reporting',
                'Remediation',
              ]}
              price='$20k - $50k'
              icon='📋'
            />
            <ServiceCard
              title='Security Monitoring'
              description='Security event monitoring and threat detection systems'
              features={[
                'SIEM setup',
                'Threat detection',
                'Incident response',
                'Forensics',
              ]}
              price='$25k - $70k'
              icon='👁️'
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className='bg-white rounded-2xl shadow-xl p-8 mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            DevOps Service Packages
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <PricingCard
              name='DevOps Assessment'
              price='$5k - $12k'
              duration='1-2 weeks'
              features={[
                'Current state analysis',
                'Gap identification',
                'Tool evaluation',
                'Implementation roadmap',
                'ROI analysis',
              ]}
              popular={false}
            />
            <PricingCard
              name='DevOps Implementation'
              price='$25k - $75k'
              duration='4-12 weeks'
              features={[
                'CI/CD pipeline setup',
                'Infrastructure automation',
                'Monitoring implementation',
                'Security integration',
                'Team training',
                '3 months support',
              ]}
              popular={true}
            />
            <PricingCard
              name='DevOps Managed Services'
              price='$8k+/month'
              duration='Ongoing'
              features={[
                '24/7 monitoring',
                'Pipeline maintenance',
                'Security updates',
                'Performance optimization',
                'Incident response',
                'Regular reporting',
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  features,
  price,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
    <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-bold text-gray-900 mb-3'>{title}</h3>
      <p className='text-gray-600 mb-4 leading-relaxed'>{description}</p>
      <div className='mb-4'>
        <h4 className='font-semibold text-gray-900 mb-2'>Key Features:</h4>
        <ul className='text-gray-600 space-y-1'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center'>
              <span className='text-blue-500 mr-2'>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className='text-lg font-bold text-blue-600 mb-4'>{price}</div>
      <a
        href='tel:+13024640950'
        className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
      >
        Get Quote
      </a>
    </div>
  );
}

function PricingCard({
  name,
  price,
  duration,
  features,
  popular,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${popular ? 'border-blue-500' : 'border-gray-200'}`}
    >
      {popular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
          <span className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
            Most Popular
          </span>
        </div>
      )}
      <h3 className='text-2xl font-bold text-gray-900 mb-2'>{name}</h3>
      <div className='text-3xl font-bold text-blue-600 mb-2'>{price}</div>
      <div className='text-gray-600 mb-6'>{duration}</div>
      <ul className='space-y-3 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <span className='text-green-500 mr-3'>✓</span>
            <span className='text-gray-700'>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href='tel:+13024640950'
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactCTA() {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white'>
      <h2 className='text-4xl font-bold mb-6'>
        Ready to Accelerate Your Development?
      </h2>
      <p className='text-xl mb-8 max-w-3xl mx-auto'>
        Let's discuss how DevOps can transform your development workflow and
        improve your team's productivity. Our DevOps experts are ready to help
        you build a world-class engineering culture.
      </p>
      <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
        <a
          href='tel:+13024640950'
          className='bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors'
        >
          📞 Call +1 302 464 0950
        </a>
        <a
          href='mailto:kleber@ziontechgroup.com'
          className='border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors'
        >
          ✉️ Email Us
        </a>
        <div className='text-center'>
          <div className='text-sm opacity-90'>Visit us at:</div>
          <div className='font-semibold'>364 E Main St STE 1008</div>
          <div className='font-semibold'>Middletown, DE 19709</div>
        </div>
      </div>
    </div>
  );
}
