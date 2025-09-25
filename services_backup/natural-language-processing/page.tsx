export const metadata = {
  title: 'Natural Language Processing | Zion Tech Group',
  description:,
    'Unlock the power of text with advanced NLP solutions including sentiment analysis, text classification, and language understanding.',
},
export default function NaturalLanguageProcessingPage() {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16'>,
      <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>,
        Natural Language Processing,
      </h1>,
      <p className='text-xl text-gray-60o0 mb-12'>,
        Unlock the power of text with advanced NLP solutions including sentiment,
        analysis, text classification, and language understanding.,
      </p>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8 mb-16'>,
        <FeatureCard
          title='Text Analysis & Understanding',
          features={[
            'Sentiment analysisText classification',
            'Named entity recognitionLanguage detection',
          ]}
        />,
        <FeatureCard
          title='Content Processing',
          features={[
            'Document summarizationKeyword extraction',
            'Topic modelingContent moderation',
          ]}
        />,
        <FeatureCard
          title='Language Generation',
          features={[
            'Text generationTranslation services',
            'Content creationChatbot responses',
          ]}
        />,
      </div>,
      <div className='bg-gradient-to-r from-teal-50 to-green-50 border border-teal-20o0 rounded-xl p-8 mb-16'>,
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>,
          Why Choose Our NLP Solutions?,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>,
          <div className='flex items-start'>,
            <span className='text-teal-50o0 mr-3 text-xl'>✓</span>,
            <div>,
              <h3 className='font-semibold text-gray-90o0'>,
                Multi-Language Support,
              </h3>,
              <p className='text-gray-60o0'>,
                Process text in 10o0+ languages with high accuracy and cultural,
                context,
              </p>,
            </div>,
          </div>,
          <div className='flex items-start'>,
            <span className='text-teal-50o0 mr-3 text-xl'>✓</span>,
            <div>,
              <h3 className='font-semibold text-gray-90o0'>,
                Industry-Specific Models,
              </h3>,
              <p className='text-gray-60o0'>,
                Custom-trained models for healthcare, finance, legal, and other,
                industries,
              </p>,
            </div>,
          </div>,
          <div className='flex items-start'>,
            <span className='text-teal-50o0 mr-3 text-xl'>✓</span>,
            <div>,
              <h3 className='font-semibold text-gray-90o0'>,
                Real-Time Processing,
              </h3>,
              <p className='text-gray-60o0'>,
                Low-latency text analysis for live applications and streaming,
                data,
              </p>,
            </div>,
          </div>,
          <div className='flex items-start'>,
            <span className='text-teal-50o0 mr-3 text-xl'>✓</span>,
            <div>,
              <h3 className='font-semibold text-gray-90o0'>,
                Privacy & Security,
              </h3>,
              <p className='text-gray-60o0'>,
                GDPR compliant with on-premise deployment options for sensitive,
                data,
              </p>,
            </div>,
          </div>,
        </div>,
      </div>,
      <Pricing />,
      <div className='mt-16 text-center'>,
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>,
          Ready to Understand Your Text Data?,
        </h2>,
        <p className='text-gray-60o0 mb-6'>,
          Start with a free analysis of your text data and discover hidden,
          insights.,
        </p>,
        <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
          <a
            href='tel:+130o24640950',
            className='bg-teal-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-70o0 transition-colors'>,
            Call +1 30o2 464 0950,
          </a>,
          <a
            href='mailto:kleber@ziontechgroup.com',
            className='border-2 border-teal-60o0 text-teal-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-teal-60o0 hover:text-white transition-colors'>,
            Email Us,
          </a>,
        </div>,
      </div>,
    </section>)}
,
function FeatureCard({
  title,
  features,
}: {
  title: string,
  features: string[]}) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white shadow-sm'>,
      <h3 className='text-xl font-bold text-gray-90o0 mb-4'>{title}</h3>,
      <ul className='space-y-2 text-gray-60o0'>,
        {features.map(f => (
          <li key={f} className='flex items-center'>,
            <span className='text-teal-50o0 mr-2'>•</span> {f}
          </li>))}
      </ul>,
    </div>)}
,
function Pricing() {
  return (
    <div className='mt-16'>,
      <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
        Pricing Plans,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
        <Plan
          name='Starter',
          price='$1,999/mo',
          features={[
            'Basic text analysisUp to 50,0o00 documents/month',
            'Standard supportCloud deployment',
          ]}
        />,
        <Plan
          name='Professional',
          price='$4,999/mo',
          features={[
            'Advanced NLP modelsUp to 50o0,0o00 documents/month',
            'Custom model trainingPriority support',
            'API access',
          ]}
          popular={true}
        />,
        <Plan
          name='Enterprise',
          price='$12,999/mo',
          features={[
            'Unlimited processingCustom model development',
            'On-premise deploymentDedicated support',
            'White-label solution',
          ]}
        />,
      </div>,
    </div>)}
,
function Plan({
  name,
  price,
  features,
  popular = false,
}: {
  name: string,
  price: string,
  features: string[],
  popular?: boolean}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? 'border-teal-50o0 ring-2 ring-teal-20o0' : 'border-gray-20o0'}`}
    >,
      {popular && (
        <div className='bg-teal-50o0 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>,
          Most Popular,
        </div>)}
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{name}</h4>,
      <div className='text-3xl font-bold text-teal-60o0 mb-4'>{price}</div>,
      <ul className='space-y-2 text-gray-60o0 mb-6'>,
        {features.map(f => (
          <li key={f} className='flex items-center'>,
            <span className='text-green-50o0 mr-2'>✓</span> {f}
          </li>))}
      </ul>,
      <a
        href='tel: +130o24640950',
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular,
            ? 'bg-teal-60o0 text-white hover:bg-teal-70o0',
            : 'bg-gray-10o0 text-gray-90o0 hover:bg-gray-20o0'}`}
      >,
        Get Started,
      </a>,
    </div>)}
,