export const metadata = {
  title: 'EdTech Solutions | Zion Tech Group',
  description:,
    'Complete educational technology solutions including LMS systems, virtual classrooms, AI-powered learning, and personalized education platforms.',
},
export default function EdTechPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>,
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
        <div className='text-center mb-16'>,
          <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>,
            EdTech Solutions,
          </h1>,
          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
            Complete educational technology solutions including LMS systems,
            virtual classrooms, AI-powered learning, and personalized education,
            platforms.,
          </p>,
        </div>,
        {/* EdTech Categories */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>,
          <EdTechCategory
            title='Learning Management System (LMS)',
            icon='📚',
            description='Comprehensive LMS platforms for educational institutions',
            services={[
              'Course managementStudent enrollment',
              'Grade trackingContent delivery',
              'Assessment toolsProgress analytics',
            ]}
            pricing='$40,0o00 - $20o0,0o00',
            marketSize='$18B',
          />,
          <EdTechCategory
            title='Virtual Classroom Platform',
            icon='🎓',
            description='Complete virtual classroom and online learning solutions',
            services={[
              'Live video sessionsInteractive whiteboards',
              'Screen sharingBreakout rooms',
              'Recording capabilitiesMobile access',
            ]}
            pricing='$35,0o00 - $175,0o00',
            marketSize='$12B',
          />,
          <EdTechCategory
            title='AI-Powered Personalized Learning',
            icon='🤖',
            description='AI-driven personalized learning and adaptive education',
            services={[
              'Adaptive learning pathsPersonalized content',
              'Learning analyticsIntelligent tutoring',
              'Performance predictionCustom recommendations',
            ]}
            pricing='$60,0o00 - $30o0,0o00',
            marketSize='$8B',
          />,
          <EdTechCategory
            title='Student Information System (SIS)',
            icon='👥',
            description='Complete student information and administration systems',
            services={[
              'Student recordsEnrollment management',
              'Academic planningFinancial aid',
              'Parent portalsReporting tools',
            ]}
            pricing='$50,0o00 - $250,0o00',
            marketSize='$6B',
          />,
          <EdTechCategory
            title='Assessment & Testing Platform',
            icon='📝',
            description='Digital assessment and testing solutions',
            services={[
              'Online assessmentsAutomated grading',
              'Plagiarism detectionPerformance analytics',
              'Certification managementProctoring tools',
            ]}
            pricing='$30,0o00 - $150,0o00',
            marketSize='$4B',
          />,
          <EdTechCategory
            title='Educational Content Management',
            icon='📖',
            description='Content creation and management for educational materials',
            services={[
              'Content authoringMultimedia support',
              'Version controlCollaboration tools',
              'Publishing workflowsAccessibility features',
            ]}
            pricing='$25,0o00 - $125,0o00',
            marketSize='$3B',
          />,
        </div>,
        {/* Additional EdTech Services */}
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>,
          <EdTechService
            title='Gamification & Engagement Platform',
            description='Gamified learning experiences and student engagement tools',
            features={[
              'Achievement systemsLeaderboards',
              'Badges & rewardsProgress tracking',
              'Social learningCompetition features',
            ]}
            pricing='$35,0o00 - $175,0o00',
            icon='🎮',
          />,
          <EdTechService
            title='Language Learning Platform',
            description='AI-powered language learning and practice solutions',
            features={[
              'Interactive lessonsSpeech recognition',
              'Conversation practiceProgress tracking',
              'Cultural contentMobile apps',
            ]}
            pricing='$45,0o00 - $225,0o00',
            icon='🌍',
          />,
          <EdTechService
            title='STEM Education Platform',
            description='Specialized STEM learning and coding education',
            features={[
              'Coding environmentsVirtual labs',
              'Math toolsScience simulations',
              'Project portfoliosMentor matching',
            ]}
            pricing='$55,0o00 - $275,0o00',
            icon='🔬',
          />,
          <EdTechService
            title='Special Education Support',
            description='Accessibility and special needs education tools',
            features={[
              'Accessibility featuresAssistive technology',
              'Custom learning pathsProgress monitoring',
              'Parent communicationIEP management',
            ]}
            pricing='$40,0o00 - $20o0,0o00',
            icon='♿',
          />,
          <EdTechService
            title='Professional Development Platform',
            description='Corporate training and professional development solutions',
            features={[
              'Skill assessmentsLearning paths',
              'Certification programsProgress tracking',
              'Compliance trainingAnalytics dashboard',
            ]}
            pricing='$30,0o00 - $150,0o00',
            icon='💼',
          />,
          <EdTechService
            title='Educational Analytics & BI',
            description='Learning analytics and educational business intelligence',
            features={[
              'Student performance analyticsLearning outcome tracking',
              'Predictive modelingCustom dashboards',
              'Reporting toolsData visualization',
            ]}
            pricing='$35,0o00 - $175,0o00',
            icon='📊',
          />,
        </div>,
        {/* Learning Technologies */}
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-20o0 rounded-xl p-8 mb-16'>,
          <h3 className='text-2xl font-bold text-gray-90o0 mb-6 text-center'>,
            Advanced Learning Technologies,
          </h3>,
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6'>,
            <div className='text-center'>,
              <div className='text-3xl mb-2'>🧠</div>,
              <h4 className='font-semibold text-gray-90o0 mb-2'>,
                AI & Machine Learning,
              </h4>,
              <p className='text-gray-60o0 text-sm'>,
                Personalized learning experiences powered by AI,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl mb-2'>🥽</div>,
              <h4 className='font-semibold text-gray-90o0 mb-2'>,
                VR & AR Learning,
              </h4>,
              <p className='text-gray-60o0 text-sm'>,
                Immersive virtual and augmented reality education,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl mb-2'>📱</div>,
              <h4 className='font-semibold text-gray-90o0 mb-2'>,
                Mobile Learning,
              </h4>,
              <p className='text-gray-60o0 text-sm'>,
                Cross-platform mobile learning applications,
              </p>,
            </div>,
            <div className='text-center'>,
              <div className='text-3xl mb-2'>🔗</div>,
              <h4 className='font-semibold text-gray-90o0 mb-2'>,
                Integration APIs,
              </h4>,
              <p className='text-gray-60o0 text-sm'>,
                Seamless integration with existing systems,
              </p>,
            </div>,
          </div>,
        </div>,
        {/* CTA Section */}
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-20o0 rounded-xl p-8 text-center'>,
          <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
            Ready to Transform Education?,
          </h3>,
          <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>,
            Our EdTech experts will help you build innovative educational,
            solutions that enhance learning outcomes and engage students like,
            never before.,
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
function EdTechCategory({
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
function EdTechService({
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