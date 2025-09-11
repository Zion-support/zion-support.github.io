export const metadata = {
  title: 'Cybersecurity Suite | Zion Tech Group',
  description:
    'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and 24/7 security monitoring to protect your business.',
};

export default function CybersecuritySuitePage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>Cybersecurity Suite</h1>
      <p style={{ marginTop: 8, color: '#374151' }}>
        Protect your business with enterprise-grade cybersecurity solutions that
        detect, prevent, and respond to threats in real-time.
      </p>

      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <Item
          title='Threat Detection & Response'
          details={[
            'AI-powered threat detection with 99.9% accuracy',
            'Real-time security monitoring and alerting',
            'Automated incident response and containment',
            'Advanced persistent threat (APT) detection',
          ]}
        />
        <Item
          title='Vulnerability Management'
          details={[
            'Automated vulnerability scanning and assessment',
            'Penetration testing and security audits',
            'Patch management and security updates',
            'Compliance monitoring (SOC2, ISO27001, HIPAA)',
          ]}
        />
        <Item
          title='Network Security'
          details={[
            'Next-generation firewall configuration and management',
            'Intrusion detection and prevention systems',
            'Secure remote access and VPN solutions',
            'Network segmentation and micro-segmentation',
          ]}
        />
        <Item
          title='Security Operations Center (SOC)'
          details={[
            '24/7 security monitoring and analysis',
            'Security incident response and forensics',
            'Threat intelligence and threat hunting',
            'Security awareness training and phishing simulation',
          ]}
        />
      </div>

      <Pricing />

      <div
        style={{
          marginTop: 24,
          padding: 16,
          backgroundColor: '#fef2f2',
          borderRadius: 12,
          border: '1px solid #ef4444',
        }}
      >
        <h3 style={{ fontWeight: 700, color: '#991b1b', marginBottom: 8 }}>
          Security Guarantee
        </h3>
        <ul style={{ color: '#991b1b', paddingLeft: 18 }}>
          <li>
            • <strong>99.9% uptime</strong> security monitoring
          </li>
          <li>
            • <strong>15-minute</strong> average response time
          </li>
          <li>
            • <strong>Zero data breaches</strong> guarantee
          </li>
          <li>
            • <strong>24/7 expert</strong> security support
          </li>
        </ul>
      </div>
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      <h3 style={{ fontWeight: 700 }}>{title}</h3>
      <ul style={{ paddingLeft: 18, color: '#4b5563' }}>
        {details.map(d => (
          <li key={d} style={{ listStyle: 'disc' }}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div
      style={{
        marginTop: 20,
        display: 'grid',
        gap: 12,
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}
    >
      <Plan
        name='Essential Security'
        price='$1,800/month'
        features={[
          'Up to 50 endpoints',
          'Basic threat detection',
          'Vulnerability scanning',
          'Email security',
          'Standard support',
        ]}
      />
      <Plan
        name='Advanced Security'
        price='$4,200/month'
        features={[
          'Up to 200 endpoints',
          'Advanced threat detection',
          'Penetration testing',
          '24/7 monitoring',
          'Priority support',
          'Compliance reporting',
        ]}
      />
      <Plan
        name='Enterprise Security'
        price='$12,000/month'
        features={[
          'Unlimited endpoints',
          'Full SOC services',
          'Custom security solutions',
          'Dedicated security team',
          'White-label options',
          'SLA guarantee',
        ]}
      />
    </div>
  );
}

function Plan({
  name,
  price,
  features,
}: {
  name: string;
  price: string;
  features: string[];
}) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      <h4 style={{ fontWeight: 700 }}>{name}</h4>
      <div
        style={{
          color: '#111827',
          fontWeight: 800,
          marginTop: 4,
          fontSize: 18,
        }}
      >
        {price}
      </div>
      <ul style={{ paddingLeft: 18, color: '#4b5563', marginTop: 8 }}>
        {features.map(f => (
          <li key={f} style={{ listStyle: 'disc' }}>
            {f}
          </li>
        ))}
      </ul>
      <a
        href='tel:+13024640950'
        style={{
          display: 'inline-block',
          marginTop: 12,
          padding: '8px 16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 6,
        }}
      >
        Call +1 302 464 0950
      </a>
    </div>
  );
}

function SecurityServicesSection() {
  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture',
      duration: '2-4 weeks',
      price: 'Starting at $15,000',
    },
    {
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify vulnerabilities',
      duration: '1-2 weeks',
      price: 'Starting at $8,000',
    },
    {
      title: 'Compliance Audit',
      description: 'Ensure compliance with industry regulations and standards',
      duration: '3-6 weeks',
      price: 'Starting at $25,000',
    },
    {
      title: 'Security Training',
      description: 'Employee cybersecurity awareness and training programs',
      duration: 'Ongoing',
      price: 'Starting at $5,000/month',
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      duration: '24/7',
      price: 'Starting at $10,000/month',
    },
    {
      title: 'Managed Security',
      description: 'Complete outsourced security operations and monitoring',
      duration: 'Ongoing',
      price: 'Starting at $15,000/month',
    },
  ];

  return (
    <div className='bg-white rounded-2xl p-8 mb-16'>
      <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
        Security Services
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow'
          >
            <h3 className='text-xl font-bold text-gray-900 mb-2'>
              {service.title}
            </h3>
            <p className='text-gray-600 mb-4'>{service.description}</p>
            <div className='flex justify-between items-center text-sm text-gray-500 mb-4'>
              <span>Duration: {service.duration}</span>
            </div>
            <div className='text-lg font-semibold text-red-600'>
              {service.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <div className='bg-white rounded-2xl p-8 mb-16'>
      <h2 className='text-3xl font-bold text-gray-900 text-center mb-8'>
        Security Packages
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <PricingCard
          name='Essential'
          price='$2,500'
          period='month'
          description='Basic security monitoring for small businesses'
          features={[
            '24/7 monitoring',
            'Basic threat detection',
            'Monthly reports',
            'Email support',
            'Up to 50 users',
          ]}
          popular={false}
        />
        <PricingCard
          name='Professional'
          price='$7,500'
          period='month'
          description='Advanced security for growing businesses'
          features={[
            'Advanced threat detection',
            'Vulnerability scanning',
            'Compliance monitoring',
            'Priority support',
            'Up to 200 users',
            'Incident response',
          ]}
          popular={true}
        />
        <PricingCard
          name='Enterprise'
          price='Custom'
          period=''
          description='Complete security solution for large organizations'
          features={[
            'Full SOC services',
            'Custom security policies',
            'Dedicated team',
            '24/7 phone support',
            'Unlimited users',
            'Custom integrations',
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative border-2 rounded-xl p-8 ${popular ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
    >
      {popular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
          <span className='bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
            Most Popular
          </span>
        </div>
      )}
      <h3 className='text-2xl font-bold text-gray-900 mb-2'>{name}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <div className='mb-6'>
        <span className='text-4xl font-bold text-gray-900'>{price}</span>
        {period && <span className='text-gray-600'>/{period}</span>}
      </div>
      <ul className='space-y-3 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <svg
              className='w-5 h-5 text-green-500 mr-3 flex-shrink-0'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-gray-700'>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href='tel:+13024640950'
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-red-600 text-white hover:bg-red-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className='bg-gradient-to-r from-red-600 to-pink-600 p-8 rounded-2xl text-center'>
      <h2 className='text-3xl font-bold text-white mb-4'>
        Ready to Secure Your Business?
      </h2>
      <p className='text-xl text-red-100 mb-8 max-w-3xl mx-auto'>
        Contact our cybersecurity experts to discuss your security needs and get
        a custom solution.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='tel:+13024640950'
          className='bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg'
        >
          Call +1 302 464 0950
        </a>
        <a
          href='mailto:kleber@ziontechgroup.com'
          className='border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg'
        >
          Email Us
        </a>
      </div>
      <div className='mt-6 text-sm text-red-100'>
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
