export const metadata = {
  title: 'Automation Solutions | Zion Tech Group',
  description:,
    'Intelligent automation solutions including RPA, workflow automation, AI-powered automation, and business process optimization. Streamline your operations.',
},
export default function AutomationSolutionsPage() {
  return (
    <div className='animate-fade-in'>,
      <section className='text-center py-12'>,
        <h1 className='text-4xl md: text-5xl font-bold text-gray-90o0 mb-6'>,
          Automation Solutions,
        </h1>,
        <p className='text-xl text-gray-60o0 max-w-3xl mx-auto mb-12'>,
          Intelligent automation solutions including RPA, workflow automation,
          AI-powered automation, and business process optimization. Streamline,
          your operations and boost productivity.,
        </p>,
      </section>,
      <section className='py-12'>,
        <h2 className='text-3xl font-bold text-gray-90o0 text-center mb-12'>,
          Our Automation Solutions,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'>,
          <AutomationServiceCard
            title='Robotic Process Automation (RPA)',
            description='Automate repetitive tasks and business processes with intelligent bots',
            features={[
              'Process discovery & analysisBot development & deployment',
              'Exception handlingMonitoring & reporting',
              'Scalable automation',
            ]}
            price='$15k–$50k',
            icon='🤖',
          />,
          <AutomationServiceCard
            title='Workflow Automation',
            description='End-to-end workflow automation with intelligent decision making',
            features={[
              'Workflow designIntegration management',
              'Approval processesNotification systems',
              'Performance analytics',
            ]}
            price='$10k–$35k',
            icon='⚡',
          />,
          <AutomationServiceCard
            title='AI-Powered Automation',
            description='Intelligent automation using AI and machine learning for complex tasks',
            features={[
              'AI decision makingNatural language processing',
              'Predictive automationLearning algorithms',
              'Cognitive automation',
            ]}
            price='$25k–$80k',
            icon='🧠',
          />,
          <AutomationServiceCard
            title='Document Processing Automation',
            description='Automated document handling, extraction, and processing',
            features={[
              'OCR & text extractionDocument classification',
              'Data validationWorkflow routing',
              'Compliance checking',
            ]}
            price='$12k–$40k',
            icon='📄',
          />,
          <AutomationServiceCard
            title='Customer Service Automation',
            description='Automated customer support with chatbots and intelligent routing',
            features={[
              'Chatbot developmentTicket routing',
              'Response automationSentiment analysis',
              'Escalation management',
            ]}
            price='$18k–$60k',
            icon='💬',
          />,
          <AutomationServiceCard
            title='Financial Process Automation',
            description='Automated financial processes including invoicing, payments, and reporting',
            features={[
              'Invoice processingPayment automation',
              'Financial reportingReconciliation',
              'Compliance automation',
            ]}
            price='$20k–$70k',
            icon='💰',
          />,
          <AutomationServiceCard
            title='HR & Payroll Automation',
            description='Complete HR process automation including recruitment, onboarding, and payroll',
            features={[
              'Resume screeningInterview scheduling',
              'Onboarding workflowsPayroll processing',
              'Benefits managementPerformance tracking',
            ]}
            price='$18k–$60k',
            icon='👥',
          />,
          <AutomationServiceCard
            title='Marketing Automation',
            description='Intelligent marketing campaign automation and lead nurturing',
            features={[
              'Email campaignsLead scoring',
              'Social media postingContent scheduling',
              'A/B testingAnalytics tracking',
            ]}
            price='$15k–$50k',
            icon='📢',
          />,
          <AutomationServiceCard
            title='Inventory Management Automation',
            description='Automated inventory tracking, ordering, and supply chain management',
            features={[
              'Stock monitoringAuto reordering',
              'Supplier managementDemand forecasting',
              'Quality controlCost optimization',
            ]}
            price='$20k–$65k',
            icon='📦',
          />,
          <AutomationServiceCard
            title='Email & Communication Automation',
            description='Intelligent email management and communication workflows',
            features={[
              'Email routingResponse automation',
              'Template managementFollow-up sequences',
              'Spam filteringAnalytics tracking',
            ]}
            price='$12k–$40k',
            icon='📧',
          />,
          <AutomationServiceCard
            title='Data Entry & Migration Automation',
            description='Automated data entry, validation, and system migration',
            features={[
              'Data extractionValidation rules',
              'Format conversionError handling',
              'Migration testingData quality checks',
            ]}
            price='$15k–$45k',
            icon='📊',
          />,
          <AutomationServiceCard
            title='Compliance & Audit Automation',
            description='Automated compliance monitoring and audit preparation',
            features={[
              'Compliance checkingAudit trail generation',
              'Report automationPolicy enforcement',
              'Risk assessmentDocumentation management',
            ]}
            price='$18k–$55k',
            icon='📋',
          />,
          <AutomationServiceCard
            title='Customer Onboarding Automation',
            description='Streamlined customer onboarding with automated workflows',
            features={[
              'Application processingDocument verification',
              'Account setupWelcome sequences',
              'Progress trackingCompliance checks',
            ]}
            price='$16k–$50k',
            icon='🚀',
          />,
          <AutomationServiceCard
            title='Sales Process Automation',
            description='End-to-end sales automation from lead to close',
            features={[
              'Lead qualificationFollow-up automation',
              'Proposal generationContract management',
              'Pipeline trackingRevenue forecasting',
            ]}
            price='$20k–$70k',
            icon='💼',
          />,
          <AutomationServiceCard
            title='IT Operations Automation',
            description='Automated IT operations and infrastructure management',
            features={[
              'Server monitoringBackup automation',
              'Patch managementIncident response',
              'Performance optimizationSecurity scanning',
            ]}
            price='$25k–$80k',
            icon='⚙️',
          />,
          <AutomationServiceCard
            title='Quality Assurance Automation',
            description='Automated testing and quality control processes',
            features={[
              'Test case generationAutomated testing',
              'Bug trackingPerformance monitoring',
              'Regression testingQuality reporting',
            ]}
            price='$18k–$60k',
            icon='🔍',
          />,
          <AutomationServiceCard
            title='Expense Management Automation',
            description='Automated expense tracking, approval, and reimbursement',
            features={[
              'Receipt processingExpense categorization',
              'Approval workflowsPolicy compliance',
              'Reimbursement processingAnalytics reporting',
            ]}
            price='$12k–$40k',
            icon='💳',
          />,
          <AutomationServiceCard
            title='Project Management Automation',
            description='Automated project tracking and resource management',
            features={[
              'Task assignmentProgress tracking',
              'Resource allocationTimeline management',
              'Risk monitoringReporting automation',
            ]}
            price='$15k–$50k',
            icon='📅',
          />,
          <AutomationServiceCard
            title='Customer Feedback Automation',
            description='Automated feedback collection and analysis',
            features={[
              'Survey automationResponse collection',
              'Sentiment analysisAction planning',
              'Follow-up automationTrend analysis',
            ]}
            price='$10k–$35k',
            icon='💬',
          />,
          <AutomationServiceCard
            title='Supply Chain Automation',
            description='End-to-end supply chain process automation',
            features={[
              'Order processingVendor management',
              'Shipment trackingQuality control',
              'Compliance monitoringCost optimization',
            ]}
            price='$25k–$75k',
            icon='🚚',
          />,
          <AutomationServiceCard
            title='Legal Document Automation',
            description='Automated legal document processing and management',
            features={[
              'Document generationContract analysis',
              'Compliance checkingVersion control',
              'Approval workflowsArchive management',
            ]}
            price='$20k–$65k',
            icon='⚖️',
          />,
          <AutomationServiceCard
            title='Real Estate Process Automation',
            description='Automated real estate workflows and property management',
            features={[
              'Property listingLead management',
              'Document processingInspection scheduling',
              'Contract managementCommission tracking',
            ]}
            price='$18k–$55k',
            icon='🏠',
          />,
          <AutomationServiceCard
            title='Healthcare Process Automation',
            description='Medical process automation and patient management',
            features={[
              'Patient schedulingAppointment reminders',
              'Insurance verificationBilling automation',
              'Compliance trackingReport generation',
            ]}
            price='$25k–$80k',
            icon='🏥',
          />,
          <AutomationServiceCard
            title='Manufacturing Automation',
            description='Production line and manufacturing process automation',
            features={[
              'Production schedulingQuality control',
              'Inventory managementEquipment monitoring',
              'Maintenance schedulingPerformance tracking',
            ]}
            price='$30k–$10o0k',
            icon='🏭',
          />,
          <AutomationServiceCard
            title='Insurance Process Automation',
            description='Automated insurance workflows and claims processing',
            features={[
              'Claims processingPolicy management',
              'Risk assessmentUnderwriting automation',
              'Payment processingCompliance monitoring',
            ]}
            price='$22k–$70k',
            icon='🛡️',
          />,
          <AutomationServiceCard
            title='Event Management Automation',
            description='Automated event planning and management workflows',
            features={[
              'Event registrationAttendee management',
              'Communication automationResource planning',
              'Feedback collectionAnalytics reporting',
            ]}
            price='$15k–$45k',
            icon='🎉',
          />,
        </div>,
      </section>,
      <section className='py-12 bg-gray-50 rounded-lg'>,
        <h2 className='text-3xl font-bold text-gray-90o0 text-center mb-12'>,
          Automation Technology Stack,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
          <Item
            title='RPA & Process Automation',
            details={[
              'UiPath, Automation Anywhere, Blue PrismProcess mining and discovery tools',
              'Screen scraping and data extractionAPI integration and orchestration',
              'Exception handling and error recoveryPerformance monitoring and analytics',
            ]}
          />,
          <Item
            title='AI & Machine Learning',
            details={[
              'Natural language processing (NLP)Computer vision and image recognition',
              'Predictive analytics and forecastingDecision trees and rule engines',
              'Machine learning model integrationCognitive automation platforms',
            ]}
          />,
          <Item
            title='Integration & Orchestration',
            details={[
              'API management and integrationWorkflow orchestration engines',
              'Event-driven automationMicroservices architecture',
              'Cloud-native automationReal-time monitoring and alerting',
            ]}
          />,
        </div>,
      </section>,
      <Pricing />,
      <ContactSection />,
    </div>)}
,
function AutomationServiceCard({
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
    <div className='bg-white border border-gray-20o0 rounded-xl p-6 hover: shadow-lg transition-shadow'>,
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
        Automation Packages,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
        <Plan
          name='Process Assessment',
          price='$5k–$15k',
          duration='2–4 weeks',
          features={[
            'Process discovery and analysisAutomation opportunity identification',
            'ROI calculation and business caseTechnology recommendations',
            'Implementation roadmapPilot process selection',
          ]}
        />,
        <Plan
          name='Automation Implementation',
          price='$20k–$80k',
          duration='8–16 weeks',
          features={[
            'End-to-end automation developmentIntegration with existing systems',
            'Testing and quality assuranceUser training and documentation',
            'Deployment and go-live supportPerformance monitoring setup',
          ]}
        />,
        <Plan
          name='Managed Automation',
          price='$3k+/mo',
          duration='Ongoing',
          features={[
            '24/7 monitoring and maintenanceContinuous optimization',
            'Exception handling and supportPerformance reporting',
            'Process improvementsScalability management',
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
        className='w-full bg-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-70o0 transition-colors text-center block'>,
        Get Started,
      </a>,
    </div>)}
,
function ContactSection() {
  return (
    <section className='py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg'>,
      <div className='text-center'>,
        <h3 className='text-3xl font-bold text-gray-90o0 mb-4'>,
          Ready to Automate Your Business?,
        </h3>,
        <p className='text-lg text-gray-60o0 mb-8 max-w-2xl mx-auto'>,
          Let's identify automation opportunities and implement solutions that,
          save time and reduce costs. Our automation experts have delivered 150+,
          successful automation projects.,
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