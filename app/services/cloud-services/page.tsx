export const metadata = {
  title: 'Cloud Services | Zion Tech Group',
  description: 'Scalable cloud services for modern applications.',
  keywords: 'cloud-services, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Scalable cloud services for modern applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored cloud-services solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your cloud-services solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

          <CloudServiceCard
            title="Cloud Migration & Strategy"
            description="Complete cloud migration planning and execution across all major platforms"
            features={[
              'Migration assessment',
              'Cloud strategy',
              'Data migration',
              'Application migration',
              'Testing & validation',
              'Go-live support',
            ]}
            price="$25k–$100k"
            icon="🚀"
          />
          <CloudServiceCard
            title="AWS Cloud Solutions"
            description="Amazon Web Services implementation, optimization, and management"
            features={[
              'EC2 & ECS setup',
              'RDS & DynamoDB',
              'Lambda functions',
              'CloudFormation',
              'Cost optimization',
              'Security hardening',
            ]}
            price="$20k–$80k"
            icon="☁️"
          />
          <CloudServiceCard
            title="Microsoft Azure Services"
            description="Azure cloud architecture, development, and management solutions"
            features={[
              'Azure VMs & AKS',
              'Azure SQL & CosmosDB',
              'Azure Functions',
              'ARM templates',
              'DevOps integration',
              'Hybrid cloud',
            ]}
            price="$22k–$85k"
            icon="🔵"
          />
          <CloudServiceCard
            title="Google Cloud Platform"
            description="GCP implementation and optimization for scalable applications"
            features={[
              'Compute Engine & GKE',
              'Cloud SQL & Firestore',
              'Cloud Functions',
              'Terraform',
              'BigQuery',
              'AI/ML services',
            ]}
            price="$20k–$75k"
            icon="🔍"
          />
          <CloudServiceCard
            title="Multi-Cloud Architecture"
            description="Hybrid and multi-cloud solutions for maximum flexibility and resilience"
            features={[
              'Multi-cloud strategy',
              'Hybrid cloud design',
              'Cross-cloud migration',
              'Disaster recovery',
              'Cost optimization',
              'Governance',
            ]}
            price="$35k–$120k"
            icon="🌐"
          />
          <CloudServiceCard
            title="Cloud Security & Compliance"
            description="Comprehensive cloud security implementation and compliance management"
            features={[
              'Security architecture',
              'Identity & access management',
              'Data encryption',
              'Compliance auditing',
              'Threat detection',
              'Security monitoring',
            ]}
            price="$30k–$90k"
            icon="🔒"
          />
          <CloudServiceCard
            title="Cloud Cost Optimization"
            description="Intelligent cloud spending optimization and cost management"
            features={[
              'Cost analysis',
              'Resource optimization',
              'Reserved instances',
              'Auto-scaling',
              'Budget alerts',
              'Cost forecasting',
            ]}
            price="$15k–$45k"
            icon="💰"
          />
          <CloudServiceCard
            title="Serverless Architecture"
            description="Serverless application development and deployment"
            features={[
              'Lambda/Azure Functions',
              'API Gateway',
              'Event-driven architecture',
              'Microservices',
              'Auto-scaling',
              'Cost optimization',
            ]}
            price="$18k–$60k"
            icon="⚡"
          />
          <CloudServiceCard
            title="Cloud DevOps & CI/CD"
            description="Cloud-native DevOps implementation with automated pipelines"
            features={[
              'CI/CD pipelines',
              'Infrastructure as Code',
              'Container orchestration',
              'Monitoring & logging',
              'Deployment automation',
              'GitOps',
            ]}
            price="$25k–$70k"
            icon="🔄"
          />

        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Cloud Service Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item
            title="Cloud Platforms"
            details={[
              'Amazon Web Services (AWS) - EC2, S3, Lambda, RDS, ECS, EKS',
              'Microsoft Azure - VMs, App Service, SQL Database, AKS, Functions',
              'Google Cloud Platform - Compute Engine, Cloud SQL, GKE, BigQuery',
              'Multi-cloud and hybrid cloud architecture design',
              'Cloud platform selection and migration strategy',
              'Cloud-native application development and deployment',
            ]}
          />
          <Item
            title="Cloud Infrastructure"
            details={[
              'Virtual machines and container orchestration (Kubernetes)',
              'Serverless computing and function-as-a-service',
              'Database services and data warehousing solutions',
              'Content delivery networks (CDN) and edge computing',
              'Load balancing and auto-scaling configuration',
              'Disaster recovery and backup solutions',
            ]}
          />
          <Item
            title="Cloud Management"
            details={[
              'Cloud cost optimization and resource management',
              'Security implementation and compliance management',
              'Monitoring, logging, and observability solutions',
              'DevOps and CI/CD pipeline implementation',
              'Infrastructure as Code (Terraform, CloudFormation)',
              '24/7 cloud support and managed services',
            ]}
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

