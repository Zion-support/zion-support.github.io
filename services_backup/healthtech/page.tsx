export const metadata = {
  title: 'HealthTech Solutions | Zion Tech Group',
  description:,
    'Complete healthcare technology solutions including EHR systems, telemedicine platforms, medical AI, and HIPAA-compliant healthcare applications.',
},
export default function HealthTechPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        <div className='text-center mb-16'>,
          <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>,
            HealthTech Solutions,
          </h1>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Complete healthcare technology solutions including EHR systems,
            telemedicine platforms, medical AI, and HIPAA-compliant healthcare,
            applications.,
          </p>,
        </div>,
        {/* HealthTech Categories */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>,
          <HealthTechCategory
            title='Electronic Health Records (EHR)',
            icon='📋',
            description='Comprehensive EHR systems and patient data management',
            services={[
              'Patient records managementClinical documentation',
              'Interoperability standardsData migration',
              'Custom workflowsIntegration APIs',
            ]}
            pricing='$75,0o00 - $40o0,0o00',
            marketSize='$28B',
          />,
          <HealthTechCategory
            title='Telemedicine Platforms',
            icon='📹',
            description='Complete telemedicine and virtual care solutions',
            services={[
              'Video consultationsRemote monitoring',
              'Appointment schedulingPrescription management',
              'Patient portalsMobile applications',
            ]}
            pricing='$50,0o00 - $250,0o00',
            marketSize='$185B',
          />,
          <HealthTechCategory
            title='Medical AI & Diagnostics',
            icon='🧠',
            description='AI-powered medical diagnostics and decision support',
            services={[
              'Medical image analysisDiagnostic algorithms',
              'Clinical decision supportPredictive analytics',
              'Drug discoveryTreatment recommendations',
            ]}
            pricing='$10o0,0o00 - $50o0,0o00',
            marketSize='$45B',
          />,
          <HealthTechCategory
            title='Healthcare Analytics',
            icon='📊',
            description='Healthcare data analytics and business intelligence',
            services={[
              'Population health analyticsClinical outcomes analysis',
              'Cost optimizationQuality metrics',
              'Predictive modelingReal-time dashboards',
            ]}
            pricing='$60,0o00 - $30o0,0o00',
            marketSize='$12B',
          />,
          <HealthTechCategory
            title='Patient Engagement',
            icon='👥',
            description='Patient portal and engagement solutions',
            services={[
              'Patient portalsMobile health apps',
              'Wearable integrationHealth education',
              'Appointment managementCommunication tools',
            ]}
            pricing='$40,0o00 - $20o0,0o00',
            marketSize='$8B',
          />,
          <HealthTechCategory
            title='Medical Device Integration',
            icon='🔬',
            description='Medical device integration and IoT solutions',
            services={[
              'Device connectivityData collection',
              'Real-time monitoringAlert systems',
              'Integration APIsCompliance management',
            ]}
            pricing='$80,0o00 - $40o0,0o00',
            marketSize='$15B',
          />,
        </div>,
        {/* Additional HealthTech Services */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>,
          <HealthTechService
            title='Pharmacy Management System',
            description='Complete pharmacy management and prescription solutions',
            features={[
              'Inventory managementPrescription processing',
              'Insurance verificationPatient counseling',
              'Drug interaction checksCompliance reporting',
            ]}
            pricing='$45,0o00 - $225,0o00',
            icon='💊',
          />,
          <HealthTechService
            title='Healthcare CRM & Marketing',
            description='Healthcare customer relationship management and marketing',
            features={[
              'Patient relationship managementMarketing automation',
              'Lead generationAppointment reminders',
              'Patient surveysAnalytics dashboard',
            ]}
            pricing='$35,0o00 - $175,0o00',
            icon='📈',
          />,
          <HealthTechService
            title='Mental Health Platform',
            description='Digital mental health and wellness solutions',
            features={[
              'Therapy sessionsMood tracking',
              'Meditation appsCrisis intervention',
              'Peer supportProgress monitoring',
            ]}
            pricing='$55,0o00 - $275,0o00',
            icon='🧘',
          />,
          <HealthTechService
            title='Clinical Trial Management',
            description='Clinical trial management and research platforms',
            features={[
              'Trial designPatient recruitment',
              'Data collectionCompliance tracking',
              'Reporting toolsIntegration APIs',
            ]}
            pricing='$90,0o00 - $450,0o00',
            icon='🔬',
          />,
          <HealthTechService
            title='Healthcare Billing & Revenue Cycle',
            description='Healthcare billing and revenue cycle management',
            features={[
              'Claims processingInsurance verification',
              'Payment processingDenial management',
              'Financial reportingCompliance tracking',
            ]}
            pricing='$65,0o00 - $325,0o00',
            icon='💰',
          />,
          <HealthTechService
            title='Wearable Health Integration',
            description='Wearable device integration and health monitoring',
            features={[
              'Device connectivityHealth data collection',
              'Real-time monitoringAlert systems',
              'Data visualizationIntegration APIs',
            ]}
            pricing='$45,0o00 - $225,0o00',
            icon='⌚',
          />,
        </div>,
        {/* Compliance & Security */}
        <div className='bg-blue-50 border border-blue-20o0 rounded-xl p-8 mb-16'>,
          <h3 className='text-2xl font-bold text-gray-90o0 mb-4 text-center'>,
            HIPAA Compliance & Security,
          </h3>,
          <div className='grid grid-cols-1 md: grid-cols-3 gap-6'>,
            <div className='text-center'>,
              <div className='text-3xl mb-2'>🔒</div>,
              <h4 className='font-semibold text-gray-90o0 mb-2'>,
                Data Encryption,
              </h4>,
              <p className='text-gray-60o0 text-sm'>,
                End-to-end encryption for all patient data,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl mb-2'>🛡️</div>,
              <h4 className='font-semibold text-gray-90o0 mb-2'>,
                Access Controls,
              </h4>,
              <p className='text-gray-60o0 text-sm'>,
                Role-based access and audit trails,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl mb-2'>✅</div>,
              <h4 className='font-semibold text-gray-90o0 mb-2'>,
                HIPAA Certified,
              </h4>,
              <p className='text-gray-60o0 text-sm'>,
                Full compliance with healthcare regulations,
              </p>,
            </div>,
          </div>,
        </div>,
        {/* CTA Section */}
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-20o0 rounded-xl p-8 text-center'>,
          <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
            Ready to Transform Healthcare?,
          </h3>,
          <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>,
            Our HealthTech experts will help you build secure, HIPAA-compliant,
            healthcare solutions that improve patient outcomes and streamline,
            operations.,
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
        </div>,
      </div>,
    </div>)}
,
function HealthTechCategory({
  title,
  icon,
  description,
  services,
  pricing,
  marketSize,
}: {
  title: string,
  icon: string,
  description: string,
  services: string[],
  pricing: string,
  marketSize: string}) {
  return (
    <div className='bg-white border border-gray-20o0 rounded-xl p-8 hover: shadow-lg transition-shadow'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-2xl font-bold text-gray-90o0 mb-3'>{title}</h3>,
      <p className='text-gray-60o0 mb-4'>{description}</p>,
      <ul className='text-gray-60o0 space-y-2 mb-4'>,
        {services.map(service => (
          <li key={service} className='flex items-center'>,
            <span className='text-blue-50o0 mr-2'>•</span> {service}
          </li>))}
      </ul>,
      <div className='border-t pt-4'>,
        <div className='flex justify-between items-center'>,
          <span className='text-lg font-semibold text-blue-60o0'>,
            {pricing}
          </span>,
          <span className='text-sm text-gray-50o0'>Market: {marketSize}</span>,
        </div>,
      </div>,
    </div>)}
,
function HealthTechService({
  title,
  description,
  features,
  pricing,
  icon,
}: {
  title: string,
  description: string,
  features: string[],
  pricing: string,
  icon: string}) {
  return (
    <div className='bg-white border border-gray-20o0 rounded-xl p-6 hover: shadow-lg transition-shadow'>,
      <div className='text-3xl mb-3'>{icon}</div>,
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{title}</h4>,
      <p className='text-gray-60o0 mb-3'>{description}</p>,
      <ul className='text-gray-60o0 space-y-1 mb-3'>,
        {features.map(feature => (
          <li key={feature} className='flex items-center text-sm'>,
            <span className='text-blue-50o0 mr-2'>•</span> {feature}
          </li>))}
      </ul>,
      <div className='text-lg font-semibold text-blue-60o0'>{pricing}</div>,
    </div>)}
,