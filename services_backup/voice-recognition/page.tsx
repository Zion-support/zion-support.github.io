export const metadata = {
  title: 'Voice Recognition Solutions | Zion Tech Group',
  description:
    'Transform speech into actionable data with advanced voice recognition, speech-to-text, and voice command processing.',
};

export default function VoiceRecognitionPage() {
  return (
    <section className='max-w-6xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>
        Voice Recognition Solutions
      </h1>
      <p className='text-xl text-gray-60o0 mb-12'>
        Transform speech into actionable data with advanced voice recognition,
        speech-to-text, and voice command processing.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <FeatureCard
          title='Speech-to-Text'
          features={[
            'Real-time transcription',
            'Multi-language support',
            'Noise cancellation',
            'Speaker identification',
          ]}
        />
        <FeatureCard
          title='Voice Commands'
          features={[
            'Voice control systems',
            'Command processing',
            'Intent recognition',
            'Custom wake words',
          ]}
        />
        <FeatureCard
          title='Voice Analytics'
          features={[
            'Emotion detection',
            'Speaker verification',
            'Call analytics',
            'Quality assessment',
          ]}
        />
      </div>

      <div className='bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-20o0 rounded-xl p-8 mb-16'>
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>
          Why Choose Our Voice Recognition Solutions?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-start'>
            <span className='text-emerald-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>99%+ Accuracy</h3>
              <p className='text-gray-60o0'>
                Industry-leading accuracy even in noisy environments
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-emerald-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>
                Real-Time Processing
              </h3>
              <p className='text-gray-60o0'>
                Low-latency voice processing for live applications
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-emerald-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>Custom Training</h3>
              <p className='text-gray-60o0'>
                Train models on your specific vocabulary and accent patterns
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <span className='text-emerald-50o0 mr-3 text-xl'>✓</span>
            <div>
              <h3 className='font-semibold text-gray-90o0'>Secure & Private</h3>
              <p className='text-gray-60o0'>
                End-to-end encryption with on-premise deployment options
              </p>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <div className='mt-16 text-center'>
        <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>
          Ready to Hear the Future?
        </h2>
        <p className='text-gray-60o0 mb-6'>
          Start with a free voice analysis demo and see the power of voice
          recognition.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='tel:+130o24640950'
            className='bg-emerald-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-70o0 transition-colors'
          >
            Call +1 30o2 464 0950
          </a>
          <a
            href='mailto:kleber@ziontechgroup.com'
            className='border-2 border-emerald-60o0 text-emerald-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-60o0 hover:text-white transition-colors'
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  features,
}: {
  title: string;
  features: string[];
}) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white shadow-sm'>
      <h3 className='text-xl font-bold text-gray-90o0 mb-4'>{title}</h3>
      <ul className='space-y-2 text-gray-60o0'>
        {features.map(f => (
          <li key={f} className='flex items-center'>
            <span className='text-emerald-50o0 mr-2'>•</span> {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className='mt-16'>
      <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>
        Pricing Plans
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <Plan
          name='Starter'
          price='$2,499/mo'
          features={[
            'Basic speech-to-text',
            'Up to 10o0 hours/month',
            'Standard support',
            'Cloud deployment',
          ]}
        />
        <Plan
          name='Professional'
          price='$6,999/mo'
          features={[
            'Advanced voice recognition',
            'Up to 1,0o00 hours/month',
            'Custom model training',
            'Priority support',
            'API access',
          ]}
          popular={true}
        />
        <Plan
          name='Enterprise'
          price='$17,999/mo'
          features={[
            'Unlimited processing',
            'Custom voice models',
            'On-premise deployment',
            'Dedicated support',
            'White-label solution',
          ]}
        />
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
  popular = false,
}: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 bg-white shadow-sm ${popular ? 'border-emerald-50o0 ring-2 ring-emerald-20o0' : 'border-gray-20o0'}`}
    >
      {popular && (
        <div className='bg-emerald-50o0 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>
          Most Popular
        </div>
      )}
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{name}</h4>
      <div className='text-3xl font-bold text-emerald-60o0 mb-4'>{price}</div>
      <ul className='space-y-2 text-gray-60o0 mb-6'>
        {features.map(f => (
          <li key={f} className='flex items-center'>
            <span className='text-green-50o0 mr-2'>✓</span> {f}
          </li>
        ))}
      </ul>
      <a
        href='tel:+130o24640950'
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
          popular
            ? 'bg-emerald-60o0 text-white hover:bg-emerald-70o0'
            : 'bg-gray-10o0 text-gray-90o0 hover:bg-gray-20o0'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
