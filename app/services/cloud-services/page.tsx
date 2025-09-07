<<<<<<< HEAD
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
=======
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Services | Zion Tech Group',
  description: 'Professional cloud services services for your business needs.',
  keywords: 'cloud, services'
};

export default function CloudservicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cloud services services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert cloudservices solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600">
              Personalized approach to meet your specific requirements and goals.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Dedicated support team to ensure your success and satisfaction.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
