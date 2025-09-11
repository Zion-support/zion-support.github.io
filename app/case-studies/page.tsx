import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'fortune-500-ai-transformation',
      title: 'Fortune 500 Manufacturing: AI-Powered Supply Chain Transformation',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge:
        'Manual supply chain processes across 15 countries causing delays, errors, and $500K annual losses',
      solution:
        'Comprehensive AI automation platform with demand forecasting, inventory optimization, and supplier communication',
      results: [
        '40% reduction in supply chain costs',
        '60% faster order processing',
        '$2.3M annual savings',
        '95% accuracy in demand forecasting',
      ],
      technologies: ['Python', 'TensorFlow', 'AWS SageMaker', 'React', 'Kubernetes'],
      duration: '8 months',
      team: '12 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'fintech-ai-platform',
      title: 'AI-Powered Financial Analytics Platform',
      client: 'Fortune 500 Fintech Company',
      industry: 'Financial Services',
      challenge:
        'Manual data analysis processes were taking 40+ hours per week and prone to human error',
      solution:
        'Developed custom AI platform with machine learning models for real-time financial data analysis',
      results: [
        '85% reduction in analysis time',
        '99.7% accuracy in fraud detection',
        '$2.3M annual cost savings',
        '40% improvement in decision speed',
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
      duration: '6 months',
      team: '8 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'healthcare-automation',
      title: 'Healthcare Process Automation Suite',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge:
        'Manual patient scheduling and billing processes causing delays and errors',
      solution:
        'Comprehensive automation platform with AI-powered scheduling and billing optimization',
      results: [
        '60% reduction in scheduling errors',
        '45% faster patient check-in process',
        '30% improvement in billing accuracy',
        '50% reduction in administrative workload',
      ],
      technologies: ['Node.js', 'MongoDB', 'Vue.js', 'Docker', 'Kubernetes'],
      duration: '4 months',
      team: '6 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'ecommerce-micro-saas',
      title: 'E-commerce Analytics Micro SaaS',
      client: 'E-commerce Startup',
      industry: 'Retail Technology',
      challenge:
        'Need for affordable, scalable analytics solution for small to medium e-commerce businesses',
      solution:
        'Built comprehensive micro SaaS platform with real-time analytics, inventory management, and customer insights',
      results: [
        '500+ active customers in first year',
        '$150K ARR within 12 months',
        '95% customer satisfaction rate',
        '40% month-over-month growth',
      ],
      technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'Vercel'],
      duration: '3 months',
      team: '4 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing IoT Platform',
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge:
        'Lack of real-time visibility into production processes and equipment performance',
      solution:
        'IoT platform with sensors, real-time monitoring, and predictive maintenance capabilities',
      results: [
        '35% reduction in equipment downtime',
        '25% improvement in production efficiency',
        '20% decrease in maintenance costs',
        '90% reduction in unplanned outages',
      ],
      technologies: [
        'Python',
        'IoT Sensors',
        'AWS IoT',
        'React',
        'Time Series DB',
      ],
      duration: '8 months',
      team: '10 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'blockchain-supply-chain',
      title: 'Blockchain Supply Chain Transparency',
      client: 'Global Logistics Company',
      industry: 'Logistics & Supply Chain',
      challenge:
        'Need for transparent, tamper-proof supply chain tracking across multiple countries',
      solution:
        'Blockchain-based supply chain platform with smart contracts and real-time tracking',
      results: [
        '100% supply chain transparency',
        '60% reduction in disputes',
        '30% faster customs clearance',
        '25% improvement in customer trust',
      ],
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'IPFS'],
      duration: '7 months',
      team: '7 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'cybersecurity-platform',
      title: 'Advanced Cybersecurity Monitoring Platform',
      client: 'Enterprise Software Company',
      industry: 'Cybersecurity',
      challenge:
        'Increasing cyber threats requiring 24/7 monitoring and rapid response capabilities',
      solution:
        'AI-powered cybersecurity platform with threat detection, automated response, and compliance reporting',
      results: [
        '99.9% threat detection accuracy',
        '80% reduction in response time',
        'Zero successful breaches in 18 months',
        '50% reduction in security team workload',
      ],
      technologies: [
        'Python',
        'Machine Learning',
        'Elasticsearch',
        'Kibana',
        'Docker',
      ],
      duration: '5 months',
      team: '9 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
    {
      id: 'quantum-financial-optimization',
      title: 'Quantum-Powered Financial Portfolio Optimization',
      client: 'Global Investment Bank',
      industry: 'Financial Services',
      challenge:
        'Complex portfolio optimization requiring processing of millions of variables in real-time for maximum returns',
      solution:
        'Quantum computing platform with hybrid classical-quantum algorithms for portfolio optimization and risk management',
      results: [
        '35% improvement in portfolio performance',
        '60% faster optimization calculations',
        '$2.8B additional returns generated',
        '99.7% accuracy in risk prediction',
      ],
      technologies: [
        'Quantum Computing',
        'Python',
        'Qiskit',
        'TensorFlow',
        'AWS Quantum',
      ],
      duration: '8 months',
      team: '12 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'smart-city-iot-platform',
      title: 'Smart City IoT Infrastructure Platform',
      client: 'Metropolitan City Government',
      industry: 'Smart Cities',
      challenge:
        'Need for comprehensive city-wide IoT monitoring and management system for traffic, utilities, and public safety',
      solution:
        'Integrated IoT platform with edge computing, real-time analytics, and citizen engagement features',
      results: [
        '40% reduction in traffic congestion',
        '25% improvement in emergency response times',
        '30% decrease in energy consumption',
        '85% citizen satisfaction with city services',
      ],
      technologies: [
        'IoT Sensors',
        'Edge Computing',
        'React',
        'Node.js',
        'Kubernetes',
      ],
      duration: '12 months',
      team: '15 developers',
      image: '/api/placeholder/600/400',
      featured: true,
    },
    {
      id: 'ai-drug-discovery-platform',
      title: 'AI-Powered Drug Discovery Platform',
      client: 'Pharmaceutical Research Company',
      industry: 'Healthcare & Pharmaceuticals',
      challenge:
        'Accelerating drug discovery process while reducing costs and improving success rates for new treatments',
      solution:
        'Machine learning platform with molecular simulation, predictive modeling, and automated compound screening',
      results: [
        '70% reduction in drug discovery time',
        '45% improvement in success rates',
        '$1.2B saved in R&D costs',
        '12 new drug candidates identified',
      ],
      technologies: [
        'Machine Learning',
        'Python',
        'TensorFlow',
        'Molecular Simulation',
        'AWS',
      ],
      duration: '10 months',
      team: '11 developers',
      image: '/api/placeholder/600/400',
      featured: false,
    },
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const regularStudies = caseStudies.filter(study => !study.featured);

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Success Stories
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Real results from real clients. Discover how we've helped
              businesses across industries transform their operations and
              achieve remarkable outcomes.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
              >
                Start Your Project
              </Link>
              <Link
                href='/services'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>1000+</div>
              <div className='text-gray-600'>Projects Delivered</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>98%</div>
              <div className='text-gray-600'>Client Satisfaction</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>$50M+</div>
              <div className='text-gray-600'>Cost Savings Generated</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>24/7</div>
              <div className='text-gray-600'>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Featured Case Studies
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Our most impactful projects that showcase the power of technology
              transformation
            </p>
          </div>
          <div className='space-y-16'>
            {featuredStudies.map(study => (
              <FeaturedCaseStudy key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              All Case Studies
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Explore our complete portfolio of successful technology
              implementations
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {regularStudies.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-gradient-to-r from-blue-50 to-indigo-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-xl p-8 text-center shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Ready to Write Your Success Story?
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Join the ranks of successful businesses that have transformed
              their operations with our technology solutions. Let's discuss how
              we can help you achieve similar results.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Get Started Today
              </Link>
              <a
                href='tel:+13024640950'
                className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedCaseStudy({ study }: { study: any }) {
  const href = study.id === 'fortune-500-ai-transformation' 
    ? `/case-studies/${study.id}` 
    : '/case-studies';
    
  return (
    <Link href={href} className='group'>
      <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
        <div className='md:flex'>
          <div className='md:w-1/2'>
            <div className='aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center'>
              <div className='text-6xl'>📊</div>
            </div>
          </div>
          <div className='md:w-1/2 p-8'>
            <div className='mb-4'>
              <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
                {study.industry}
              </span>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
              {study.title}
            </h3>
            <p className='text-gray-600 mb-4'>
              <strong>Client:</strong> {study.client}
            </p>

            <div className='mb-6'>
              <h4 className='font-semibold text-gray-900 mb-2'>Challenge:</h4>
              <p className='text-gray-600 text-sm mb-4'>{study.challenge}</p>

              <h4 className='font-semibold text-gray-900 mb-2'>Solution:</h4>
              <p className='text-gray-600 text-sm mb-4'>{study.solution}</p>
            </div>

            <div className='mb-6'>
              <h4 className='font-semibold text-gray-900 mb-3'>Key Results:</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {study.results.map((result: string, index: number) => (
                  <div key={index} className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                    <span className='text-sm text-gray-700'>{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap gap-2 mb-4'>
              {study.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className='bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm text-gray-500'>
                <span>
                  {study.duration} • {study.team}
                </span>
              </div>
              <span className='text-blue-600 font-medium group-hover:underline'>
                Read Full Case Study →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CaseStudyCard({ study }: { study: any }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
      <div className='aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
        <div className='text-4xl'>💼</div>
      </div>
      <div className='p-6'>
        <div className='mb-3'>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full'>
            {study.industry}
          </span>
        </div>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
          {study.title}
        </h3>
        <p className='text-gray-600 text-sm mb-3'>
          <strong>Client:</strong> {study.client}
        </p>

        <div className='mb-4'>
          <h4 className='font-medium text-gray-900 text-sm mb-1'>
            Key Results:
          </h4>
          <ul className='text-xs text-gray-600 space-y-1'>
            {study.results.slice(0, 2).map((result: string, index: number) => (
              <li key={index} className='flex items-center gap-1'>
                <div className='w-1 h-1 bg-green-500 rounded-full'></div>
                {result}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-wrap gap-1 mb-3'>
          {study.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className='bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded'
            >
              {tech}
            </span>
          ))}
          {study.technologies.length > 3 && (
            <span className='text-gray-500 text-xs'>
              +{study.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className='text-xs text-gray-500'>
          {study.duration} • {study.team}
        </div>
      </div>
    </div>
  );
}
