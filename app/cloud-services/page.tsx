import React from 'react'
import { Cloud } from 'lucide-react'
import ServicePageTemplate from '../service-template'

export default function CloudServicesPage() {
  return (
    <ServicePageTemplate
      title="Cloud Services"
      description="Migrate to the cloud with confidence. Our comprehensive cloud services ensure seamless transition, optimal performance, and enhanced security."
      icon={<Cloud className="w-10 h-10 text-blue-400" />}
      benefits={[
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        '24/7 monitoring and support',
        'Faster deployment and updates'
      ]}
      features={[
        'Cloud migration planning',
        'Multi-cloud strategy',
        'Security and compliance',
        'Cost optimization',
        'Performance monitoring',
        'Disaster recovery solutions'
      ]}
      pricing="Starting at $1,200/month"
      seoTitle="Cloud Services - Zion Tech Group"
      seoDescription="Professional cloud migration and management services. Optimize your infrastructure with our comprehensive cloud solutions."
      seoKeywords="cloud services, cloud migration, AWS, Azure, Google Cloud, cloud consulting"
    />
  )
}
