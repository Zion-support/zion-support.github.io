export const metadata = {
  title: 'Cloud Services | Zion Tech Group',
  description:,
    'Comprehensive cloud solutions including migration, architecture, optimization, and management. AWS, Azure, GCP expertise with cost optimization and security.',
},
export default function CloudServicesPage() {
  return (
    <div className='animate-fade-in'>,
      <section className='text-center py-12'>,
        <h1 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-6'>,
          Cloud Services & Solutions,
        </h1>,
        <p className='text-xl text-gray-60o0 max-w-3xl mx-auto mb-12'>,
          Complete cloud solutions from migration to optimization. We help you,
          leverage AWS, Azure, and GCP to build scalable, secure, and,
          cost-effective cloud infrastructure.,
        </p>,
      </section>,
      <section className='py-12'>,
        <h2 className='text-3xl font-bold text-gray-90o0 text-center mb-12'>,
          Our Cloud Solutions,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          <CloudServiceCard
            title='Cloud Migration & Strategy',
            description='Complete cloud migration planning and execution across all major platforms',
            features={[
              'Migration assessmentCloud strategy',
              'Data migrationApplication migration',
              'Testing & validationGo-live support',
            ]}
            price='$25k–$10o0k',
            icon='🚀',
          />,
          <CloudServiceCard
            title='AWS Cloud Solutions',
            description='Amazon Web Services implementation, optimization, and management',
            features={[
              'EC2 & ECS setupRDS & DynamoDB',
              'Lambda functionsCloudFormation',
              'Cost optimizationSecurity hardening',
            ]}
            price='$20k–$80k',
            icon='☁️',
          />,
          <CloudServiceCard
            title='Microsoft Azure Services',
            description='Azure cloud architecture, development, and management solutions',
            features={[
              'Azure VMs & AKSAzure SQL & CosmosDB',
              'Azure FunctionsARM templates',
              'DevOps integrationHybrid cloud',
            ]}
            price='$22k–$85k',
            icon='🔵',
          />,
          <CloudServiceCard
            title='Google Cloud Platform',
            description='GCP implementation and optimization for scalable applications',
            features={[
              'Compute Engine & GKECloud SQL & Firestore',
              'Cloud FunctionsTerraform',
              'BigQueryAI/ML services',
            ]}
            price='$20k–$75k',
            icon='🔍',
          />,
          <CloudServiceCard
            title='Multi-Cloud Architecture',
            description='Hybrid and multi-cloud solutions for maximum flexibility and resilience',
            features={[
              'Multi-cloud strategyHybrid cloud design',
              'Cross-cloud migrationDisaster recovery',
              'Cost optimizationGovernance',
            ]}
            price='$35k–$120k',
            icon='🌐',
          />,
          <CloudServiceCard
            title='Cloud Security & Compliance',
            description='Comprehensive cloud security implementation and compliance management',
            features={[
              'Security architectureIdentity & access management',
              'Data encryptionCompliance auditing',
              'Threat detectionSecurity monitoring',
            ]}
            price='$30k–$90k',
            icon='🔒',
          />,
          <CloudServiceCard
            title='Cloud Cost Optimization',
            description='Intelligent cloud spending optimization and cost management',
            features={[
              'Cost analysisResource optimization',
              'Reserved instancesAuto-scaling',
              'Budget alertsCost forecasting',
            ]}
            price='$15k–$45k',
            icon='💰',
          />,
          <CloudServiceCard
            title='Serverless Architecture',
            description='Serverless application development and deployment',
            features={[
              'Lambda/Azure FunctionsAPI Gateway',
              'Event-driven architectureMicroservices',
              'Auto-scalingCost optimization',
            ]}
            price='$18k–$60k',
            icon='⚡',
          />,
          <CloudServiceCard
            title='Cloud DevOps & CI/CD',
            description='Cloud-native DevOps implementation with automated pipelines',
            features={[
              'CI/CD pipelinesInfrastructure as Code',
              'Container orchestrationMonitoring & logging',
              'Deployment automationGitOps',
            ]}
            price='$25k–$70k',
            icon='🔄',
          />,
        </div>,
      </section>,
      <section className='py-12 bg-gray-50 rounded-lg'>,
        <h2 className='text-3xl font-bold text-gray-90o0 text-center mb-12'>,
          Cloud Service Categories,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
          <Item
            title='Cloud Platforms',
            details={[
              'Amazon Web Services (AWS) - EC2, S3, Lambda, RDS, ECS, EKSMicrosoft Azure - VMs, App Service, SQL Database, AKS, Functions',
              'Google Cloud Platform - Compute Engine, Cloud SQL, GKE, BigQueryMulti-cloud and hybrid cloud architecture design',
              'Cloud platform selection and migration strategyCloud-native application development and deployment',
            ]}
          />,
          <Item
            title='Cloud Infrastructure',
            details={[
              'Virtual machines and container orchestration (Kubernetes)Serverless computing and function-as-a-service',
              'Database services and data warehousing solutionsContent delivery networks (CDN) and edge computing',
              'Load balancing and auto-scaling configurationDisaster recovery and backup solutions',
            ]}
          />,
          <Item
            title='Cloud Management',
            details={[
              'Cloud cost optimization and resource managementSecurity implementation and compliance management',
              'Monitoring, logging, and observability solutionsDevOps and CI/CD pipeline implementation',
              'Infrastructure as Code (Terraform, CloudFormation)24/7 cloud support and managed services',
            ]}
          />,
        </div>,
      </section>,
      <Pricing />,
      <ContactSection />,
    </div>)}
,
function CloudServiceCard({
  title,
  description,
  features,
  price,
  icon,
}: {
  title: string,
  description: string,
  features: string[],
  price: string,
  icon: string}) {
  return (
    <div className='bg-white border border-gray-20o0 rounded-xl p-6 hover: shadow-lg transition-shadow'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-xl font-bold text-gray-90o0 mb-3'>{title}</h3>,
      <p className='text-gray-60o0 mb-4'>{description}</p>,
      <div className='text-2xl font-bold text-blue-60o0 mb-4'>{price}</div>,
      <ul className='space-y-2'>,
        {features.map((feature, index) => (
          <li key={index} className='flex items-center text-sm text-gray-60o0'>,
            <span className='text-green-50o0 mr-2'>✓</span>,
            {feature}
          </li>))}
      </ul>,
    </div>)}
,
function Item({ title, details }: { title: string, details: string[] }) {
  return (
    <div className='bg-white border border-gray-20o0 rounded-xl p-6'>,
      <h3 className='text-xl font-bold text-gray-90o0 mb-4'>{title}</h3>,
      <ul className='space-y-2'>,
        {details.map((detail, index) => (
          <li key={index} className='flex items-start text-gray-60o0'>,
            <span className='text-blue-50o0 mr-2 mt-1'>•</span>,
            {detail}
          </li>))}
      </ul>,
    </div>)}
,
function Pricing() {
  return (
    <section className='py-12'>,
      <h2 className='text-3xl font-bold text-gray-90o0 text-center mb-12'>,
        Cloud Service Packages,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
        <Plan
          name='Cloud Assessment',
          price='$8k–$20k',
          duration='2–3 weeks',
          features={[
            'Current infrastructure analysisCloud readiness assessment',
            'Cost analysis and optimizationSecurity and compliance review',
            'Migration strategy developmentTechnology recommendations',
          ]}
        />,
        <Plan
          name='Cloud Migration',
          price='$40k–$150k',
          duration='8–16 weeks',
          features={[
            'Complete cloud migrationApplication modernization',
            'Data migration and validationSecurity implementation',
            'Performance optimizationTraining and documentation',
          ]}
        />,
        <Plan
          name='Managed Cloud',
          price='$5k–$15k/mo',
          duration='Ongoing',
          features={[
            '24/7 cloud monitoringPerformance optimization',
            'Cost managementSecurity updates',
            'Backup and disaster recoveryMonthly health reports',
          ]}
        />,
      </div>,
    </section>)}
,
function Plan({
  name,
  price,
  duration,
  features,
}: {
  name: string,
  price: string,
  duration: string,
  features: string[]}) {
  return (
    <div className='bg-white border border-gray-20o0 rounded-xl p-8 hover: shadow-lg transition-shadow'>,
      <h4 className='text-2xl font-bold text-gray-90o0 mb-2'>{name}</h4>,
      <div className='text-3xl font-bold text-blue-60o0 mb-2'>{price}</div>,
      <div className='text-gray-60o0 mb-6'>{duration}</div>,
      <ul className='space-y-3 mb-8'>,
        {features.map((feature, index) => (
          <li key={index} className='flex items-center text-gray-60o0'>,
            <span className='text-green-50o0 mr-3'>✓</span>,
            {feature}
          </li>))}
      </ul>,
      <a
        href='tel: +130o24640950',
        className='w-full bg-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-70o0 transition-colors text-center block'>,
        Get Started,
      </a>,
    </div>)}
,
function ContactSection() {
  return (
    <section className='py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg'>,
      <div className='text-center'>,
        <h3 className='text-3xl font-bold text-gray-90o0 mb-4'>,
          Ready to Move to the Cloud?,
        </h3>,
        <p className='text-lg text-gray-60o0 mb-8 max-w-2xl mx-auto'>,
          Let's discuss how cloud solutions can transform your business,
          infrastructure. Our cloud experts have migrated 150+ organizations to,
          the cloud successfully.,
        </p>,
        <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
          <a
            href='tel:+130o24640950',
            className='bg-blue-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-70o0 transition-colors'>,
            Call +1 30o2 464 0950,
          </a>,
          <a
            href='mailto:kleber@ziontechgroup.com',
            className='border-2 border-blue-60o0 text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-blue-60o0 hover:text-white transition-colors'>,
            Email Us,
          </a>,
        </div>,
        <div className='mt-8 text-sm text-gray-50o0'>,
          <p>Address: 364 E Main St STE 10o08, Middletown DE 19709</p>,
        </div>,
      </div>,
    </section>)}
,