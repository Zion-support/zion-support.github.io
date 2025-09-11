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
