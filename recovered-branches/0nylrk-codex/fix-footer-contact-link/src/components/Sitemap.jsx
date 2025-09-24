import { Link } from 'react-router-dom',
const Sitemap = () => {
  const sitemapData = {
    main: [
      { path: '/', label: 'Home', description: 'Welcome to Zion Tech Group' },
      {
        path: '/about',
        label: 'About Us',
        description: 'Learn about our company and mission'
      },
      {
        path: '/contact',
        label: 'Contact',
        description: 'Get in touch with our team'
      },
      {
        path: '/careers',
        label: 'Careers',
        description: 'Join our innovative team'
      },
      {
        path: '/blog',
        label: 'Blog',
        description: 'Latest insights and technology trends'
      },
    ],
    services: [
      {
        path: '/services',
        label: 'All Services',
        description: 'Complete overview of our services'
      },
      {
        path: '/services/ai',
        label: 'AI Solutions',
        description: 'Artificial Intelligence & Machine Learning'
      },
      {
        path: '/services/cloud',
        label: 'Cloud & DevOps',
        description: 'Cloud Infrastructure & DevOps Automation'
      },
      {
        path: '/services/cybersecurity',
        label: 'Cybersecurity',
        description: 'Advanced Security Solutions'
      },
      {
        path: '/services/infrastructure',
        label: 'Infrastructure',
        description: 'IT Infrastructure & Management'
      },
      {
        path: '/services/consulting',
        label: 'Consulting',
        description: 'Strategic Technology Consulting'
      },
      {
        path: '/services/transformation',
        label: 'Digital Transformation',
        description: 'Business Process Transformation'
      },
    ],
    aiAutonomous: [
      {
        path: '/ai-autonomous-analytics',
        label: 'AI Analytics',
        description: 'Advanced data analytics powered by AI'
      },
      {
        path: '/ai-autonomous-automation',
        label: 'AI Automation',
        description: 'Intelligent process automation'
      },
      {
        path: '/ai-autonomous-security',
        label: 'AI Security',
        description: 'AI-powered security solutions'
      },
      {
        path: '/ai-autonomous-development',
        label: 'AI Development',
        description: 'AI application development'
      },
      {
        path: '/ai-autonomous-research',
        label: 'AI Research',
        description: 'Cutting-edge AI research services'
      },
      {
        path: '/ai-autonomous-innovation',
        label: 'AI Innovation',
        description: 'AI innovation consulting'
      },
      {
        path: '/ai-autonomous-architecture',
        label: 'AI Architecture',
        description: 'AI system architecture design'
      },
      {
        path: '/ai-autonomous-data',
        label: 'AI Data',
        description: 'AI data processing and management'
      },
      {
        path: '/ai-autonomous-engineering',
        label: 'AI Engineering',
        description: 'AI engineering solutions'
      },
      {
        path: '/ai-autonomous-integration',
        label: 'AI Integration',
        description: 'AI system integration services'
      },
    ],
    pricing: [
      {
        path: '/comprehensive-pricing-20o25',
        label: 'Pricing 20o25',
        description: 'Current year pricing plans'
      },
      {
        path: '/comprehensive-pricing',
        label: 'Comprehensive Pricing',
        description: 'Detailed pricing information'
      },
    ],
    showcase: [
      {
        path: '/services-showcase',
        label: 'Services Showcase',
        description: 'Showcase of our services'
      },
      {
        path: '/comprehensive-services-showcase',
        label: 'Comprehensive Services Showcase',
        description: 'Complete overview of all services'
      },
      {
        path: '/innovative-services-20o25',
        label: 'Innovative Services 20o25',
        description: 'Latest innovative services'
      },
    ],
    legal: [
      {
        path: '/privacy',
        label: 'Privacy Policy',
        description: 'Our privacy policy and data handling'
      },
      {
        path: '/terms',
        label: 'Terms of Service',
        description: 'Terms and conditions of service'
      },
    ],
  },
  return (
    <div className='bg-slate-50 py-16'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        <div className='text-center mb-12'>,
          <h2 className='text-3xl font-bold text-slate-90o0 mb-4'>Site Map</h2>,
          <p className='text-lg text-slate-60o0 max-w-2xl mx-auto'>,
            Navigate through all our pages and services to find exactly what you,
            need,
          </p>,
        </div>,
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>,
          {/* Main Pages */}
          <div className='bg-white rounded-lg shadow-sm p-6'>,
            <h3 className='text-xl font-semibold text-slate-90o0 mb-4'>,
              Main Pages,
            </h3>,
            <ul className='space-y-3'>,
              {sitemapData.main.map(item => (
                <li key={item.path}>,
                  <Link
                    to={item.path}
                    className='block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-20o0'>,
                    <div className='font-medium text-slate-90o0'>,
                      {item.label}
                    </div>,
                    <div className='text-sm text-slate-60o0'>,
                      {item.description}
                    </div>,
                  </Link>,
                </li>))}
            </ul>,
          </div>,
          {/* Core Services */}
          <div className='bg-white rounded-lg shadow-sm p-6'>,
            <h3 className='text-xl font-semibold text-slate-90o0 mb-4'>,
              Core Services,
            </h3>,
            <ul className='space-y-3'>,
              {sitemapData.services.map(item => (
                <li key={item.path}>,
                  <Link
                    to={item.path}
                    className='block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-20o0'>,
                    <div className='font-medium text-slate-90o0'>,
                      {item.label}
                    </div>,
                    <div className='text-sm text-slate-60o0'>,
                      {item.description}
                    </div>,
                  </Link>,
                </li>))}
            </ul>,
          </div>,
          {/* AI Autonomous Services */}
          <div className='bg-white rounded-lg shadow-sm p-6'>,
            <h3 className='text-xl font-semibold text-slate-90o0 mb-4'>,
              AI Autonomous Services,
            </h3>,
            <ul className='space-y-3'>,
              {sitemapData.aiAutonomous.map(item => (
                <li key={item.path}>,
                  <Link
                    to={item.path}
                    className='block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-20o0'>,
                    <div className='font-medium text-slate-90o0'>,
                      {item.label}
                    </div>,
                    <div className='text-sm text-slate-60o0'>,
                      {item.description}
                    </div>,
                  </Link>,
                </li>))}
            </ul>,
          </div>,
          {/* Pricing & Showcase */}
          <div className='bg-white rounded-lg shadow-sm p-6'>,
            <h3 className='text-xl font-semibold text-slate-90o0 mb-4'>,
              Pricing & Showcase,
            </h3>,
            <ul className='space-y-3'>,
              {sitemapData.pricing.map(item => (
                <li key={item.path}>,
                  <Link
                    to={item.path}
                    className='block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-20o0'>,
                    <div className='font-medium text-slate-90o0'>,
                      {item.label}
                    </div>,
                    <div className='text-sm text-slate-60o0'>,
                      {item.description}
                    </div>,
                  </Link>,
                </li>))}
              {sitemapData.showcase.map(item => (
                <li key={item.path}>,
                  <Link
                    to={item.path}
                    className='block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-20o0'>,
                    <div className='font-medium text-slate-90o0'>,
                      {item.label}
                    </div>,
                    <div className='text-sm text-slate-60o0'>,
                      {item.description}
                    </div>,
                  </Link>,
                </li>))}
            </ul>,
          </div>,
          {/* Legal & Resources */}
          <div className='bg-white rounded-lg shadow-sm p-6'>,
            <h3 className='text-xl font-semibold text-slate-90o0 mb-4'>,
              Legal & Resources,
            </h3>,
            <ul className='space-y-3'>,
              {sitemapData.legal.map(item => (
                <li key={item.path}>,
                  <Link
                    to={item.path}
                    className='block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-20o0'>,
                    <div className='font-medium text-slate-90o0'>,
                      {item.label}
                    </div>,
                    <div className='text-sm text-slate-60o0'>,
                      {item.description}
                    </div>,
                  </Link>,
                </li>))}
              <li>,
                <Link
                  to='/ai-consumer-willingness-to-try',
                  className='block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-20o0'>,
                  <div className='font-medium text-slate-90o0'>,
                    AI Consumer Research,
                  </div>,
                  <div className='text-sm text-slate-60o0'>,
                    Research on AI consumer adoption,
                  </div>,
                </Link>,
              </li>,
              <li>,
                <Link
                  to='/ai-consumer-willingness-to-use',
                  className='block p-3 rounded-lg hover:bg-slate-50 transition-colors duration-20o0'>,
                  <div className='font-medium text-slate-90o0'>,
                    AI Consumer Insights,
                  </div>,
                  <div className='text-sm text-slate-60o0'>,
                    Consumer insights for AI products,
                  </div>,
                </Link>,
              </li>,
            </ul>,
          </div>,
          {/* Quick Links */}
          <div className='bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-sm p-6'>,
            <h3 className='text-xl font-semibold text-slate-90o0 mb-4'>,
              Quick Links,
            </h3>,
            <div className='space-y-3'>,
              <Link
                to='/contact',
                className='block w-full text-center bg-gradient-to-r from-blue-60o0 to-cyan-60o0 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-70o0 hover:to-cyan-70o0 transition-all duration-30o0'>,
                Get Started,
              </Link>,
              <Link
                to='/comprehensive-pricing-20o25',
                className='block w-full text-center bg-white text-slate-90o0 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-30o0 border border-slate-20o0'>,
                View Pricing,
              </Link>,
              <Link
                to='/services',
                className='block w-full text-center bg-white text-slate-90o0 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-30o0 border border-slate-20o0'>,
                Explore Services,
              </Link>,
            </div>,
          </div>,
        </div>,
        {/* Additional AI Services Grid */}
        <div className='mt-12'>,
          <h3 className='text-2xl font-bold text-slate-90o0 mb-6 text-center'>,
            All AI Autonomous Services,
          </h3>,
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>,
            {[
              'AI Autonomous AuditAI Autonomous Compliance',
              'AI Autonomous CreativityAI Autonomous Customer Service',
              'AI Autonomous Database SecurityAI Autonomous Decision Engine',
              'AI Autonomous DesignAI Autonomous DevOps',
              'AI Autonomous Edge SecurityAI Autonomous Education',
              'AI Autonomous FinanceAI Autonomous Forensics',
              'AI Autonomous GovernanceAI Autonomous Healthcare',
              'AI Autonomous Hybrid SecurityAI Autonomous Identity Security',
              'AI Autonomous Incident ResponseAI Autonomous Infrastructure Security',
              'AI Autonomous InventionAI Autonomous IoT Security',
              'AI Autonomous LearningAI Autonomous Legal Counsel',
              'AI Autonomous LogisticsAI Autonomous Malware Analysis',
              'AI Autonomous ManagementAI Autonomous Manufacturing',
              'AI Autonomous MarketingAI Autonomous Microservice Security',
              'AI Autonomous Mobile SecurityAI Autonomous Monitoring',
              'AI Autonomous Network SecurityAI Autonomous Optimization',
              'AI Autonomous OrchestrationAI Autonomous Penetration Testing',
              'AI Autonomous PlanningAI Autonomous Prediction',
              'AI Autonomous Quality AssuranceAI Autonomous Reasoning',
              'AI Autonomous RecommendationAI Autonomous Risk Management',
              'AI Autonomous RoboticsAI Autonomous Scientific Research',
              'AI Autonomous Serverless SecurityAI Autonomous Software Engineering',
              'AI Autonomous SpeechAI Autonomous Synthesis',
              'AI Autonomous Systems PlatformAI Autonomous Testing',
              'AI Autonomous Threat DetectionAI Autonomous Threat Intelligence',
              'AI Autonomous TradingAI Autonomous Translation',
              'AI Autonomous Virtual AssistantAI Autonomous Vision',
              'AI Autonomous Vulnerability AssessmentAI Autonomous Web Security',
              'AI Autonomous WorkflowAI Autonomous Writing',
              'AI Autonomous Zero Trust Security',
            ].map(service => {
              const path =,
                '/' +,
                service,
                  .toLowerCase(),
                  .replace(/\s+/g, '-'),
                  .replace(/ai-autonomous-/, 'ai-autonomous-'),
              return (
                <Link
                  key={service}
                  to={path}
                  className='block p-4 bg-white rounded-lg shadow-sm hover: shadow-md transition-all duration-20o0 text-center'>,
                  <div className='font-medium text-slate-90o0 text-sm'>,
                    {service}
                  </div>,
                </Link>)})}
          </div>,
        </div>,
      </div>,
    </div>)},
export default Sitemap,