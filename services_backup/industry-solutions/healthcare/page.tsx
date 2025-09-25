export const metadata = {
  title: 'Healthcare IT Solutions | Zion Tech Group',
  description:,
    'HIPAA-compliant healthcare technology solutions including telemedicine platforms, medical imaging systems, patient data management, and healthcare AI applications.',
  keywords:,
    'healthcare IT, HIPAA compliance, telemedicine, medical imaging, healthcare AI, patient data management, healthcare software',
},
export default function HealthcareSolutionsPage() {
  return (
    <div className='animate-fade-in'>,
      <section className='text-center mb-16'>,
        <h1 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-6'>,
          Healthcare IT Solutions,
        </h1>,
        <p className='text-xl text-gray-60o0 max-w-4xl mx-auto leading-relaxed'>,
          HIPAA-compliant technology solutions that improve patient care,
          streamline operations, and enhance healthcare delivery. Built with,
          security, compliance, and scalability in mind.,
        </p>,
      </section>,
      <section className='mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          Healthcare Technology Solutions,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          <HealthcareServiceCard
            title='Telemedicine Platform',
            description='Complete virtual care solution with video consultations, appointment scheduling, and patient management',
            features={[
              'Video consultationsAppointment scheduling',
              'Patient recordsPrescription management',
              'HIPAA complianceMobile app',
            ]}
            price='$25,0o00-75,0o00',
            icon='🏥',
          />,
          <HealthcareServiceCard
            title='Medical Imaging AI',
            description='AI-powered medical image analysis for faster and more accurate diagnoses',
            features={[
              'X-ray analysisMRI interpretation',
              'CT scan analysisAI diagnostics',
              'Integration APIsRadiologist tools',
            ]}
            price='$40,0o00-120,0o00',
            icon='🔬',
          />,
          <HealthcareServiceCard
            title='Patient Portal System',
            description='Comprehensive patient engagement platform with health records and communication tools',
            features={[
              'Health recordsAppointment booking',
              'Prescription refillsLab results',
              'Secure messagingHealth tracking',
            ]}
            price='$15,0o00-45,0o00',
            icon='👤',
          />,
          <HealthcareServiceCard
            title='Electronic Health Records (EHR)',
            description='Modern EHR system with interoperability and advanced analytics capabilities',
            features={[
              'Patient recordsClinical notes',
              'Medication trackingInteroperability',
              'Analytics dashboardMobile access',
            ]}
            price='$50,0o00-150,0o00',
            icon='📋',
          />,
          <HealthcareServiceCard
            title='Healthcare Analytics Platform',
            description='Advanced analytics for population health, outcomes tracking, and operational efficiency',
            features={[
              'Population healthOutcomes tracking',
              'Cost analysisQuality metrics',
              'Predictive analyticsReporting tools',
            ]}
            price='$30,0o00-80,0o00',
            icon='📊',
          />,
          <HealthcareServiceCard
            title='Pharmacy Management System',
            description='Complete pharmacy operations management with inventory and prescription tracking',
            features={[
              'Inventory managementPrescription tracking',
              'Insurance verificationPatient profiles',
              'ReportingCompliance tools',
            ]}
            price='$20,0o00-60,0o00',
            icon='💊',
          />,
          <HealthcareServiceCard
            title='Healthcare AI Chatbot',
            description='Intelligent patient support with symptom checking and appointment scheduling',
            features={[
              'Symptom checkingAppointment scheduling',
              'Medication remindersHealth education',
              'Triage assistanceMulti-language',
            ]}
            price='$12,0o00-35,0o00',
            icon='🤖',
          />,
          <HealthcareServiceCard
            title='Remote Patient Monitoring',
            description='IoT-based patient monitoring with real-time health data collection and alerts',
            features={[
              'Vital signs monitoringWearable integration',
              'Alert systemsData visualization',
              'Provider dashboardMobile app',
            ]}
            price='$35,0o00-90,0o00',
            icon='📱',
          />,
          <HealthcareServiceCard
            title='Healthcare Compliance Management',
            description='Automated compliance monitoring for HIPAA, HITECH, and other healthcare regulations',
            features={[
              'HIPAA complianceAudit trails',
              'Risk assessmentPolicy management',
              'Training modulesIncident reporting',
            ]}
            price='$18,0o00-50,0o00',
            icon='⚖️',
          />,
        </div>,
      </section>,
      <section className='mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          Healthcare Compliance & Security,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6'>,
          <ComplianceCard
            title='HIPAA Compliance',
            description='Full HIPAA compliance implementation with audit trails and data protection',
            icon='🔒',
          />,
          <ComplianceCard
            title='HITECH Act',
            description='HITECH Act compliance for electronic health information security',
            icon='🛡️',
          />,
          <ComplianceCard
            title='SOC 2 Type II',
            description='SOC 2 Type II certification for healthcare data security and availability',
            icon='✅',
          />,
          <ComplianceCard
            title='GDPR Compliance',
            description='GDPR compliance for international healthcare data protection',
            icon='🌍',
          />,
        </div>,
      </section>,
      <section className='mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          Healthcare AI Applications,
        </h2>,
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>,
          <AICard
            title='Diagnostic AI',
            description='Machine learning models for medical diagnosis and treatment recommendations',
            applications={[
              'RadiologyPathology',
              'CardiologyDermatology',
              'Ophthalmology',
            ]}
            icon='🧠',
          />,
          <AICard
            title='Predictive Analytics',
            description='AI-powered prediction of patient outcomes and health risks',
            applications={[
              'Readmission riskSepsis prediction',
              'Fall riskMedication adherence',
              'Chronic disease management',
            ]}
            icon='📈',
          />,
          <AICard
            title='Natural Language Processing',
            description='AI for processing clinical notes and extracting meaningful insights',
            applications={[
              'Clinical documentationCoding assistance',
              'Quality measuresResearch data extraction',
            ]}
            icon='💬',
          />,
        </div>,
      </section>,
      <section className='mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          Implementation Process,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6'>,
          <ProcessStep
            step='1',
            title='Compliance Assessment',
            description='Evaluate current systems and identify compliance requirements',
          />,
          <ProcessStep
            step='2',
            title='Solution Design',
            description='Design HIPAA-compliant architecture and user workflows',
          />,
          <ProcessStep
            step='3',
            title='Development & Testing',
            description='Build and thoroughly test all healthcare applications',
          />,
          <ProcessStep
            step='4',
            title='Deployment & Training',
            description='Deploy with comprehensive staff training and support',
          />,
        </div>,
      </section>,
      <Pricing />,
      <section className='mt-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
          Why Choose Our Healthcare Solutions?,
        </h2>,
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>,
          <BenefitCard
            title='HIPAA Compliant',
            description='All solutions built with healthcare compliance and security as top priorities',
            icon='🔒',
          />,
          <BenefitCard
            title='Interoperable',
            description='Seamless integration with existing healthcare systems and EHRs',
            icon='🔗',
          />,
          <BenefitCard
            title='Scalable',
            description='Solutions that grow with your practice and patient volume',
            icon='📈',
          />,
          <BenefitCard
            title='User-Friendly',
            description='Intuitive interfaces designed for healthcare professionals',
            icon='👥',
          />,
          <BenefitCard
            title='24/7 Support',
            description='Round-the-clock support for critical healthcare systems',
            icon='🛡️',
          />,
          <BenefitCard
            title='AI-Powered',
            description='Cutting-edge AI to improve patient outcomes and operational efficiency',
            icon='🤖',
          />,
        </div>,
      </section>,
      <CTASection />,
    </div>)}
,
function HealthcareServiceCard({
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
function ComplianceCard({
  title,
  description,
  icon,
}: {
  title: string,
  description: string,
  icon: string}) {
  return (
    <div className='text-center p-6 border border-gray-20o0 rounded-xl bg-white hover: shadow-lg transition-shadow'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>{title}</h3>,
      <p className='text-gray-60o0'>{description}</p>,
    </div>)}
,
function AICard({
  title,
  description,
  applications,
  icon,
}: {
  title: string,
  description: string,
  applications: string[],
  icon: string}) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white hover: shadow-lg transition-shadow'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-xl font-bold text-gray-90o0 mb-3'>{title}</h3>,
      <p className='text-gray-60o0 mb-4'>{description}</p>,
      <ul className='text-gray-60o0 space-y-2'>,
        {applications.map(app => (
          <li key={app} className='flex items-center'>,
            <span className='text-blue-50o0 mr-2'>•</span> {app}
          </li>))}
      </ul>,
    </div>)}
,
function ProcessStep({
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
function BenefitCard({
  title,
  description,
  icon,
}: {
  title: string,
  description: string,
  icon: string}) {
  return (
    <div className='text-center p-6 border border-gray-20o0 rounded-xl bg-white hover: shadow-lg transition-shadow'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>{title}</h3>,
      <p className='text-gray-60o0'>{description}</p>,
    </div>)}
,
function Pricing() {
  return (
    <section className='mb-16'>,
      <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
        Healthcare Solution Pricing,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
        <Plan
          name='Compliance Assessment',
          price='$5k–$15k',
          features={[
            'HIPAA auditRisk assessment',
            'Compliance roadmapSecurity review',
            'Recommendations',
          ]}
          popular={false}
        />,
        <Plan
          name='Solution Development',
          price='$25k–$10o0k',
          features={[
            'Custom developmentHIPAA compliance',
            'IntegrationTesting',
            'Training',
          ]}
          popular={true}
        />,
        <Plan
          name='Managed Services',
          price='$3k+/mo',
          features={[
            '24/7 monitoringCompliance management',
            'UpdatesSupport',
            'Security',
          ]}
          popular={false}
        />,
      </div>,
    </section>)}
,
function Plan({
  name,
  price,
  features,
  popular,
}: {
  name: string,
  price: string,
  features: string[],
  popular: boolean}) {
  return (
    <div
      className={`border rounded-xl p-8 relative ${popular ? 'border-blue-50o0 bg-blue-50' : 'border-gray-20o0 bg-white'}`}
    >,
      {popular && (
        <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>,
          <span className='bg-blue-60o0 text-white px-4 py-1 rounded-full text-sm font-medium'>,
            Most Popular,
          </span>,
        </div>)}
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{name}</h4>,
      <div className='text-3xl font-bold text-blue-60o0 mb-4'>{price}</div>,
      <ul className='space-y-3 mb-6'>,
        {features.map(feature => (
          <li key={feature} className='flex items-center'>,
            <span className='text-blue-50o0 mr-3'>✓</span> {feature}
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
function CTASection() {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-20o0 rounded-xl p-8 text-center'>,
      <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
        Ready to Transform Healthcare with Technology?,
      </h3>,
      <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>,
        Let's discuss your healthcare technology needs and create a compliant,
        secure solution that improves patient care and operational efficiency.,
        Our healthcare IT experts are ready to help.,
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
      <div className='mt-6 text-sm text-gray-60o0'>,
        <p>Address: 364 E Main St STE 10o08, Middletown, DE 19709</p>,
      </div>,
    </div>)}
,