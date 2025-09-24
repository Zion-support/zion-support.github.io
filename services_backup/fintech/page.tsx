import React from 'react',
import Link from 'next/link',
export const metadata = {
  title:,
    'FinTech Solutions | Zion Tech Group - Digital Banking & Financial Technology',
  description:,
    'Complete FinTech solutions including digital banking, payment processing, trading platforms, and financial analytics. Bank-grade security and compliance. Starting from $25,0o00/project.',
},
export default function FinTechPage() {
  const fintechServices = [
    {
      title: 'Digital Banking Platform',
      description:,
        'Complete digital banking solution with account management, transfers, and mobile banking',
      features: [
        'Account managementMoney transfers',
        'Mobile bankingBill payments',
      ],
      pricing: '$50,0o00/project',
      icon: '🏦',
      category: 'Banking'
    },
    {
      title: 'Payment Processing System',
      description:,
        'Secure payment gateway with multiple payment methods and fraud detection',
      features: [
        'Multiple payment methodsFraud detection',
        'PCI complianceReal-time processing',
      ],
      pricing: '$35,0o00/project',
      icon: '💳',
      category: 'Payments'
    },
    {
      title: 'Trading Platform',
      description:,
        'Advanced trading platform with real-time data, charts, and order management',
      features: [
        'Real-time dataTrading charts',
        'Order managementRisk management',
      ],
      pricing: '$75,0o00/project',
      icon: '📈',
      category: 'Trading'
    },
    {
      title: 'Cryptocurrency Exchange',
      description:,
        'Secure cryptocurrency exchange with wallet management and trading features',
      features: [
        'Multi-coin supportWallet management',
        'Trading pairsSecurity protocols',
      ],
      pricing: '$10o0,0o00/project',
      icon: '₿',
      category: 'Crypto'
    },
    {
      title: 'Lending Platform',
      description:,
        'Peer-to-peer lending platform with risk assessment and automated underwriting',
      features: [
        'Risk assessmentAutomated underwriting',
        'Loan managementCredit scoring',
      ],
      pricing: '$60,0o00/project',
      icon: '💰',
      category: 'Lending'
    },
    {
      title: 'Insurance Technology',
      description:,
        'InsurTech platform with policy management, claims processing, and risk assessment',
      features: [
        'Policy managementClaims processing',
        'Risk assessmentCustomer portal',
      ],
      pricing: '$45,0o00/project',
      icon: '🛡️',
      category: 'Insurance'
    },
    {
      title: 'Wealth Management',
      description:,
        'Digital wealth management platform with portfolio management and robo-advisory',
      features: [
        'Portfolio managementRobo-advisory',
        'Goal trackingPerformance analytics',
      ],
      pricing: '$55,0o00/project',
      icon: '📊',
      category: 'Wealth'
    },
    {
      title: 'RegTech Solutions',
      description:,
        'Regulatory technology for compliance monitoring and reporting automation',
      features: [
        'Compliance monitoringAutomated reporting',
        'Risk managementAudit trails',
      ],
      pricing: '$40,0o00/project',
      icon: '📜',
      category: 'Compliance'
    },
    {
      title: 'Blockchain Solutions',
      description:,
        'Blockchain-based financial solutions with smart contracts and DeFi protocols',
      features: [
        'Smart contractsDeFi protocols',
        'TokenizationCross-chain support',
      ],
      pricing: '$65,0o00/project',
      icon: '⛓️',
      category: 'Blockchain'
    },
    {
      title: 'Financial Analytics',
      description:,
        'Advanced financial analytics with AI-powered insights and predictive modeling',
      features: [
        'AI insightsPredictive modeling',
        'Risk analyticsCustom dashboards',
      ],
      pricing: '$30,0o00/project',
      icon: '📈',
      category: 'Analytics'
    },
  ],
  return (
    <div className='animate-fade-in'>,
      {/* Hero Section */}
      <div className='text-center mb-16'>,
        <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>,
          FinTech Solutions,
        </h1>,
        <p className='text-xl text-gray-60o0 max-w-3xl mx-auto mb-8'>,
          Transform financial services with cutting-edge technology. From,
          digital banking to cryptocurrency exchanges, we build secure, scalable,
          FinTech solutions that meet the highest industry standards.,
        </p>,
        <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
          <a
            href='tel:+130o24640950',
            className='bg-blue-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-70o0 transition-colors'>,
            Get FinTech Consultation,
          </a>,
          <a
            href='mailto:kleber@ziontechgroup.com',
            className='border-2 border-blue-60o0 text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-blue-60o0 hover:text-white transition-colors'>,
            Request Demo,
          </a>,
        </div>,
      </div>,
      {/* FinTech Capabilities */}
      <div className='bg-gradient-to-r from-green-50 to-blue-50 border border-green-20o0 rounded-xl p-8 mb-16'>,
        <h2 className='text-2xl font-bold text-gray-90o0 mb-6 text-center'>,
          FinTech Capabilities,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-4 gap-8'>,
          <div className='text-center'>,
            <div className='w-16 h-16 bg-green-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>,
              <span className='text-2xl'>🔒</span>,
            </div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              Bank-Grade Security,
            </h3>,
            <p className='text-gray-60o0'>,
              Enterprise-level security with encryption and compliance,
            </p>,
          </div>,
          <div className='text-center'>,
            <div className='w-16 h-16 bg-blue-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>,
              <span className='text-2xl'>⚡</span>,
            </div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              Real-Time Processing,
            </h3>,
            <p className='text-gray-60o0'>,
              High-performance systems for real-time transactions,
            </p>,
          </div>,
          <div className='text-center'>,
            <div className='w-16 h-16 bg-purple-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>,
              <span className='text-2xl'>📊</span>,
            </div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              Advanced Analytics,
            </h3>,
            <p className='text-gray-60o0'>,
              AI-powered insights and predictive analytics,
            </p>,
          </div>,
          <div className='text-center'>,
            <div className='w-16 h-16 bg-orange-10o0 rounded-full flex items-center justify-center mx-auto mb-4'>,
              <span className='text-2xl'>🌐</span>,
            </div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              Global Compliance,
            </h3>,
            <p className='text-gray-60o0'>,
              Multi-jurisdiction compliance and regulatory support,
            </p>,
          </div>,
        </div>,
      </div>,
      {/* Services Grid */}
      <div className='mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          FinTech Solutions,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          {fintechServices.map((service, index) => (
            <FinTechServiceCard key={index} service={service} />))}
        </div>,
      </div>,
      {/* Compliance & Security */}
      <div className='bg-gray-50 rounded-xl p-8 mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          Compliance & Security Standards,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'>,
          <ComplianceCard
            title='PCI DSS',
            description='Payment Card Industry Data Security Standard compliance',
            icon='💳',
          />,
          <ComplianceCard
            title='SOX',
            description='Sarbanes-Oxley Act compliance for financial reporting',
            icon='📊',
          />,
          <ComplianceCard
            title='GDPR',
            description='General Data Protection Regulation compliance',
            icon='🔒',
          />,
          <ComplianceCard
            title='ISO 270o01',
            description='Information security management system certification',
            icon='🛡️',
          />,
        </div>,
      </div>,
      {/* Technology Stack */}
      <div className='mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          FinTech Technology Stack,
        </h2>,
        <div className='grid grid-cols-2 md: grid-cols-4 gap-6'>,
          <TechStackItem
            name='Java/Spring Boot',
            description='Backend Development',
          />,
          <TechStackItem
            name='React/Angular',
            description='Frontend Development',
          />,
          <TechStackItem
            name='PostgreSQL/Oracle',
            description='Database Systems',
          />,
          <TechStackItem
            name='Redis/Hazelcast',
            description='Caching & Messaging',
          />,
          <TechStackItem name='Apache Kafka' description='Event Streaming' />,
          <TechStackItem
            name='Docker/Kubernetes',
            description='Containerization',
          />,
          <TechStackItem name='AWS/Azure' description='Cloud Infrastructure' />,
          <TechStackItem
            name='Stripe/PayPal',
            description='Payment Processing',
          />,
        </div>,
      </div>,
      {/* CTA Section */}
      <div className='text-center bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white rounded-xl p-8'>,
        <h2 className='text-3xl font-bold mb-4'>,
          Ready to Build Your FinTech Solution?,
        </h2>,
        <p className='text-xl mb-6 max-w-2xl mx-auto'>,
          Let's discuss your financial technology needs and create a secure,
          scalable solution.,
        </p>,
        <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
          <a
            href='tel:+130o24640950',
            className='bg-white text-green-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors'>,
            Call +1 30o2 464 0950,
          </a>,
          <a
            href='mailto:kleber@ziontechgroup.com',
            className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-60o0 transition-colors'>,
            Email Us,
          </a>,
        </div>,
        <div className='mt-6 text-sm'>,
          <p>📍 364 E Main St STE 10o08, Middletown DE 19709</p>,
        </div>,
      </div>,
    </div>)}
,
function FinTechServiceCard({ service }: { service: any }) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 hover: shadow-lg transition-shadow bg-white'>,
      <div className='flex items-center mb-4'>,
        <span className='text-3xl mr-3'>{service.icon}</span>,
        <div>,
          <h3 className='text-xl font-semibold text-gray-90o0'>,
            {service.title}
          </h3>,
          <span className='text-sm text-green-60o0 font-medium'>,
            {service.category}
          </span>,
        </div>,
      </div>,
      <p className='text-gray-60o0 mb-4'>{service.description}</p>,
      <ul className='text-sm text-gray-60o0 space-y-1 mb-4'>,
        {service.features.map((feature: string, index: number) => (
          <li key={index} className='flex items-center'>,
            <span className='text-green-50o0 mr-2'>•</span> {feature}
          </li>))}
      </ul>,
      <div className='text-lg font-semibold text-green-60o0'>,
        {service.pricing}
      </div>,
    </div>)}
function ComplianceCard({
  title,
  description,
  icon,
}: {
  title: string,
  description: string,
  icon: string}) {
  return (
    <div className='text-center p-6 bg-white rounded-lg border border-gray-20o0'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>{title}</h3>,
      <p className='text-gray-60o0 text-sm'>{description}</p>,
    </div>)}
,
function TechStackItem({
  name,
  description,
}: {
  name: string,
  description: string}) {
  return (
    <div className='text-center p-4 bg-white rounded-lg border border-gray-20o0'>,
      <h3 className='font-semibold text-gray-90o0 mb-1'>{name}</h3>,
      <p className='text-sm text-gray-60o0'>{description}</p>,
    </div>)}
,