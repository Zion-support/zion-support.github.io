export const metadata = {
  title: 'Cybersecurity Services | Zion Tech Group',
  description:,
    'Comprehensive cybersecurity services including penetration testing, security audits, compliance management, and incident response for enterprise protection.',
  keywords:,
    'cybersecurity, penetration testing, security audit, compliance, incident response, vulnerability assessment, security consulting',
},
export default function CybersecurityPage() {
  return (
    <div className='animate-fade-in'>,
      <section className='text-center py-12'>,
        <h1 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-6'>,
          Cybersecurity Services,
        </h1>,
        <p className='text-xl text-gray-60o0 max-w-3xl mx-auto mb-12'>,
          Comprehensive cybersecurity solutions to protect your business from,
          evolving threats. We provide end-to-end security services from,
          assessment to incident response.,
        </p>,
      </section>,
      <section className='py-12'>,
        <h2 className='text-3xl font-bold text-gray-90o0 text-center mb-12'>,
          Our Cybersecurity Solutions,
        </h2>,
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>,
          <CyberServiceCard
            title='Security Assessment & Auditing',
            description='Comprehensive security evaluation and vulnerability assessment',
            features={[
              'Penetration testingVulnerability scanning',
              'Security auditRisk assessment',
              'Compliance reviewRemediation planning',
            ]}
            price='$15k–$50k',
            icon='🔍',
          />,
          <CyberServiceCard
            title='Threat Detection & Response',
            description='Advanced threat detection and incident response capabilities',
            features={[
              'SIEM implementationThreat hunting',
              'Incident responseForensic analysis',
              'Malware analysisThreat intelligence',
            ]}
            price='$25k–$80k',
            icon='🛡️',
          />,
          <CyberServiceCard
            title='Identity & Access Management',
            description='Secure identity management and access control solutions',
            features={[
              'IAM implementationMulti-factor authentication',
              'Single sign-onPrivileged access',
              'Identity governanceCompliance reporting',
            ]}
            price='$20k–$60k',
            icon='🔐',
          />,
          <CyberServiceCard
            title='Network Security & Firewall',
            description='Network protection and firewall management services',
            features={[
              'Firewall configurationNetwork segmentation',
              'Intrusion detectionVPN setup',
              'Traffic monitoringSecurity policies',
            ]}
            price='$18k–$55k',
            icon='🌐',
          />,
          <CyberServiceCard
            title='Data Protection & Encryption',
            description='Data security and encryption implementation',
            features={[
              'Data classificationEncryption at rest',
              'Encryption in transitKey management',
              'Data loss preventionBackup security',
            ]}
            price='$22k–$70k',
            icon='🔒',
          />,
          <CyberServiceCard
            title='Compliance & Governance',
            description='Regulatory compliance and security governance frameworks',
            features={[
              'SOC 2 complianceGDPR compliance',
              'HIPAA complianceISO 270o01',
              'Policy developmentAudit support',
            ]}
            price='$30k–$10o0k',
            icon='📋',
          />,
          <CyberServiceCard
            title='Security Awareness Training',
            description='Employee security training and phishing simulation',
            features={[
              'Security trainingPhishing simulation',
              'Awareness campaignsPolicy training',
              'Incident reportingCompliance tracking',
            ]}
            price='$8k–$25k',
            icon='🎓',
          />,
          <CyberServiceCard
            title='Cloud Security & DevSecOps',
            description='Cloud security implementation and secure development practices',
            features={[
              'Cloud security assessmentDevSecOps integration',
              'Container securityAPI security',
              'Infrastructure securityCompliance automation',
            ]}
            price='$25k–$75k',
            icon='☁️',
          />,
          <CyberServiceCard
            title='Managed Security Services',
            description='24/7 security monitoring and management',
            features={[
              '24/7 monitoringThreat detection',
              'Incident responseSecurity updates',
              'Vulnerability managementMonthly reports',
            ]}
            price='$5k–$15k/mo',
            icon='📊',
          />,
        </div>,
      </section>,
      <section className='py-12 bg-gray-50 rounded-lg'>,
        <h2 className='text-3xl font-bold text-gray-90o0 text-center mb-12'>,
          Cybersecurity Framework,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
          <Item
            title='Assessment & Planning',
            details={[
              'Comprehensive security assessment and risk analysisCurrent security posture evaluation and gap identification',
              'Regulatory compliance requirements analysisSecurity strategy development and roadmap creation',
              'Budget planning and resource allocationStakeholder alignment and security awareness',
            ]}
          />,
          <Item
            title='Implementation & Deployment',
            details={[
              'Security technology selection and implementationPolicy development and procedure establishment',
              'Security controls deployment and configurationIntegration with existing systems and processes',
              'Testing and validation of security measuresDocumentation and knowledge transfer',
            ]}
          />,
          <Item
            title='Monitoring & Optimization',
            details={[
              'Continuous security monitoring and threat detectionRegular security assessments and vulnerability management',
              'Incident response and forensic analysisSecurity awareness training and education',
              'Compliance monitoring and reportingOngoing optimization and improvement',
            ]}
          />,
        </div>,
      </section>,
      <Pricing />,
      <section className='mt-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          Why Choose Our Cybersecurity Services?,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          <CybersecurityBenefitCard
            title='Certified Experts',
            description='CISSP, CISM, and CEH certified security professionals with deep expertise',
            icon='🎓',
          />,
          <CybersecurityBenefitCard
            title='24/7 Monitoring',
            description='Round-the-clock security monitoring and incident response capabilities',
            icon='🛡️',
          />,
          <CybersecurityBenefitCard
            title='Compliance Focus',
            description='Deep understanding of regulatory requirements and industry standards',
            icon='📋',
          />,
          <CybersecurityBenefitCard
            title='Proactive Approach',
            description='Prevent security incidents before they occur with proactive measures',
            icon='🔮',
          />,
          <CybersecurityBenefitCard
            title='Custom Solutions',
            description='Tailored security solutions that fit your specific business needs',
            icon='🎯',
          />,
          <CybersecurityBenefitCard
            title='Rapid Response',
            description='Quick incident response and recovery to minimize business impact',
            icon='⚡',
          />,
        </div>,
      </section>,
      <CTASection />,
    </div>)}
,
function CyberServiceCard({
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
    <div className='border border-gray-20o0 rounded-xl p-6 hover: border-blue-30o0 hover:shadow-lg transition-all duration-20o0 bg-white'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-xl font-bold text-gray-90o0 mb-3'>{title}</h3>,
      <p className='text-gray-60o0 mb-4 leading-relaxed'>{description}</p>,
      <div className='mb-4'>,
        <div className='text-2xl font-bold text-blue-60o0 mb-2'>{price}</div>,
        <div className='text-sm text-gray-50o0'>Starting price</div>,
      </div>,
      <ul className='text-gray-60o0 space-y-2'>,
        {features.map(feature => (
          <li key={feature} className='flex items-center'>,
            <span className='text-blue-50o0 mr-2'>•</span> {feature}
          </li>))}
      </ul>,
      <a
        href='tel: +130o24640950',
        className='mt-4 inline-block bg-blue-60o0 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-70o0 transition-colors'>,
        Get Started,
      </a>,
    </div>)}
,
function CybersecurityProcessStep({
  step,
  title,
  description,
}: {
  step: string,
  title: string,
  description: string}) {
  return (
    <div className='text-center p-6'>,
      <div className='w-12 h-12 bg-blue-60o0 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4'>,
        {step}
      </div>,
      <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>{title}</h3>,
      <p className='text-gray-60o0'>{description}</p>,
    </div>)}
,
function CybersecurityTechStack({
  title,
  technologies,
}: {
  title: string,
  technologies: string[]}) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white'>,
      <h3 className='text-xl font-bold text-gray-90o0 mb-4'>{title}</h3>,
      <div className='flex flex-wrap gap-2'>,
        {technologies.map(tech => (
          <span
            key={tech}
            className='bg-blue-10o0 text-blue-80o0 px-3 py-1 rounded-full text-sm font-medium'>,
            {tech}
          </span>))}
      </div>,
    </div>)}
,
function IndustrySecurity({
  title,
  description,
  solutions,
  icon,
}: {
  title: string,
  description: string,
  solutions: string[],
  icon: string}) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white hover: shadow-lg transition-shadow'>,
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
        Cybersecurity Packages,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
        <Plan
          name='Security Assessment',
          price='$10k–$30k',
          duration='2–4 weeks',
          features={[
            'Security audit and assessmentVulnerability scanning',
            'Penetration testingRisk analysis report',
            'Remediation recommendationsCompliance review',
          ]}
        />,
        <Plan
          name='Security Implementation',
          price='$50k–$150k',
          duration='8–16 weeks',
          features={[
            'Security technology implementationPolicy and procedure development',
            'Security controls deploymentIntegration and testing',
            'Staff trainingDocumentation and handover',
          ]}
        />,
        <Plan
          name='Managed Security',
          price='$8k–$20k/mo',
          duration='Ongoing',
          features={[
            '24/7 security monitoringThreat detection and response',
            'Vulnerability managementSecurity updates and patches',
            'Incident responseMonthly security reports',
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
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular,
            ? 'bg-blue-60o0 text-white hover:bg-blue-70o0',
            : 'bg-gray-10o0 text-gray-70o0 hover:bg-gray-20o0'}`}
      >,
        Get Started,
      </a>,
    </div>)}
,
function ContactSection() {
  return (
    <section className='py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg'>,
      <div className='text-center'>,
        <h3 className='text-3xl font-bold text-gray-90o0 mb-4'>,
          Ready to Secure Your Business?,
        </h3>,
        <p className='text-lg text-gray-60o0 mb-8 max-w-2xl mx-auto'>,
          Let's discuss how we can protect your business from cyber threats and,
          ensure compliance. Our security experts have protected 20o0+,
          organizations from cyber attacks.,
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