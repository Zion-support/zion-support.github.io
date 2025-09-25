export const metadata = {
  title: 'CRM Platform Development | Zion Tech Group',
  description:,
    'Build powerful CRM platforms with lead management, sales tracking, and customer insights. Professional CRM solutions starting at $20k.',
},
export default function CRMPlatformPage() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>,
      <section className='mb-12'>,
        <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>,
          CRM Platform Development,
        </h1>,
        <p className='text-xl text-gray-60o0 mb-8'>,
          Build powerful CRM platforms with lead management, sales tracking,
          customer insights, and automation workflows.,
        </p>,
        <div className='grid grid-cols-1 md: grid-cols-3 gap-6 mb-12'>,
          <Item
            title='Lead Management',
            details={[
              'Lead capture formsLead scoring system',
              'Lead assignment rulesLead nurturing workflows',
              'Lead source trackingConversion analytics',
              'Lead qualification tools',
            ]}
          />,
          <Item
            title='Sales Pipeline',
            details={[
              'Deal trackingPipeline visualization',
              'Sales forecastingActivity tracking',
              'Quote generationContract management',
              'Revenue reporting',
            ]}
          />,
          <Item
            title='Customer Management',
            details={[
              'Contact managementCommunication history',
              'Customer segmentationSupport ticket integration',
              'Customer health scoringLifetime value tracking',
              'Retention analytics',
            ]}
          />,
        </div>,
        <div className='bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-20o0 rounded-lg p-6 mb-8'>,
          <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>,
            CRM Platform Features,
          </h2>,
          <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Sales Automation,
              </h3>,
              <p className='text-gray-60o0'>,
                Automate follow-ups, lead routing, and sales processes to,
                increase efficiency and close more deals.,
              </p>,
            </div>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Advanced Analytics,
              </h3>,
              <p className='text-gray-60o0'>,
                Track sales performance, customer behavior, and revenue trends,
                with comprehensive reporting dashboards.,
              </p>,
            </div>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Integration Ecosystem,
              </h3>,
              <p className='text-gray-60o0'>,
                Connect with email, phone, calendar, and marketing tools for a,
                unified customer experience.,
              </p>,
            </div>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Mobile-First Design,
              </h3>,
              <p className='text-gray-60o0'>,
                Access your CRM anywhere with responsive design and native,
                mobile apps for iOS and Android.,
              </p>,
            </div>,
          </div>,
        </div>,
      </section>,
      <Pricing />,
    </div>)}
,
function Item({ title, details }: { title: string, details: string[] }) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white'>,
      <h3 className='text-lg font-semibold text-gray-90o0 mb-4'>{title}</h3>,
      <ul className='space-y-2'>,
        {details.map((detail, index) => (
          <li key={index} className='flex items-start'>,
            <span className='text-indigo-50o0 mr-2 mt-1'>•</span>,
            <span className='text-gray-60o0'>{detail}</span>,
          </li>))}
      </ul>,
    </div>)}
,
function Pricing() {
  return (
    <section>,
      <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
        CRM Platform Pricing,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-6'>,
        <Plan
          name='Starter CRM',
          price='$20k–$40k',
          duration='8–12 weeks',
          features={[
            'Basic contact managementLead tracking',
            'Simple pipelineEmail integration',
            'Basic reportingMobile app',
            'User management',
          ]}
        />,
        <Plan
          name='Professional CRM',
          price='$40k–$80k',
          duration='12–18 weeks',
          features={[
            'Everything in StarterAdvanced automation',
            'Custom fields & workflowsAdvanced analytics',
            'API integrationsWhite-label options',
            'Priority support',
          ]}
        />,
        <Plan
          name='Enterprise CRM',
          price='$80k+',
          duration='16–24 weeks',
          features={[
            'Everything in ProfessionalCustom development',
            'Advanced securityMulti-tenant architecture',
            'Dedicated supportSLA guarantees',
            'On-premise deployment',
          ]}
        />,
      </div>,
      <div className='mt-12 text-center'>,
        <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
          Ready to Build Your CRM?,
        </h3>,
        <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>,
          Let's create a powerful CRM platform that streamlines your sales,
          process and drives revenue growth.,
        </p>,
        <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
          <a
            href='tel:+130o24640950',
            className='bg-indigo-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-70o0 transition-colors'>,
            Call +1 30o2 464 0950,
          </a>,
          <a
            href='mailto:kleber@ziontechgroup.com',
            className='border-2 border-indigo-60o0 text-indigo-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-60o0 hover:text-white transition-colors'>,
            Email Us,
          </a>,
        </div>,
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
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white hover: shadow-lg transition-shadow'>,
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{name}</h4>,
      <div className='text-3xl font-bold text-indigo-60o0 mb-1'>{price}</div>,
      <div className='text-gray-50o0 mb-6'>{duration}</div>,
      <ul className='space-y-3'>,
        {features.map((feature, index) => (
          <li key={index} className='flex items-start'>,
            <span className='text-green-50o0 mr-2 mt-1'>✓</span>,
            <span className='text-gray-60o0'>{feature}</span>,
          </li>))}
      </ul>,
      <a
        href='mailto: kleber@ziontechgroup.com?subject=CRM Platform Development Inquiry',
        className='block w-full mt-6 bg-indigo-60o0 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-70o0 transition-colors'>,
        Get Started,
      </a>,
    </div>)}
,