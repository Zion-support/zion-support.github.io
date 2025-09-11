export const metadata = { title: 'AI Document Processor | Zion Tech Group' };

export default function AIDocumentProcessorPage() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-gray-900 mb-6'>
          AI Document Processor
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Intelligent document processing platform with OCR, data extraction,
          and automated workflows. Transform unstructured documents into
          actionable data with 99% accuracy.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        <FeatureCard
          title='Document Recognition & OCR'
          features={[
            'Multi-format document support (PDF, images, scans)',
            'Advanced OCR with 99% accuracy',
            'Handwriting recognition',
            'Multi-language text extraction',
            'Table and form recognition',
            'Document classification & routing',
          ]}
          icon='📄'
        />
        <FeatureCard
          title='Data Extraction & Processing'
          features={[
            'Intelligent field extraction',
            'Structured data conversion',
            'Data validation & verification',
            'Duplicate detection & merging',
            'Custom extraction rules',
            'Batch processing capabilities',
          ]}
          icon='🔍'
        />
        <FeatureCard
          title='Workflow Automation'
          features={[
            'Automated document routing',
            'Approval workflows',
            'Integration with business systems',
            'Real-time processing notifications',
            'Error handling & retry logic',
            'Audit trails & compliance',
          ]}
          icon='⚙️'
        />
      </div>

      <div className='bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-xl p-8 mb-16'>
        <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
          Document Processing Benefits
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='text-center'>
            <div className='text-4xl mb-4'>⚡</div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              90% Time Savings
            </h3>
            <p className='text-gray-600'>
              Automated processing eliminates manual data entry
            </p>
          </div>
          <div className='text-center'>
            <div className='text-4xl mb-4'>🎯</div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              99% Accuracy
            </h3>
            <p className='text-gray-600'>
              AI-powered extraction with minimal errors
            </p>
          </div>
          <div className='text-center'>
            <div className='text-4xl mb-4'>💰</div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              70% Cost Reduction
            </h3>
            <p className='text-gray-600'>Eliminate manual processing costs</p>
          </div>
          <div className='text-center'>
            <div className='text-4xl mb-4'>🔒</div>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>
              Enterprise Security
            </h3>
            <p className='text-gray-600'>Bank-level security and compliance</p>
          </div>
        </div>
      </div>

      <PricingSection />

      <ContactSection />
    </div>
  );
}

function FeatureCard({
  title,
  features,
  icon,
}: {
  title: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className='bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-bold text-gray-900 mb-4'>{title}</h3>
      <ul className='space-y-2'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start'>
            <span className='text-slate-500 mr-2 mt-1'>•</span>
            <span className='text-gray-600'>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className='mb-16'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
        Document Processing Pricing
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <PricingCard
          name='Basic Processing'
          price='$199/mo'
          duration='Up to 1,000 documents'
          features={[
            'Basic OCR & text extraction',
            'Standard document formats',
            'Email support',
            'Basic reporting',
            'API access',
            'Mobile app access',
          ]}
          popular={false}
        />
        <PricingCard
          name='Professional Processing'
          price='$499/mo'
          duration='Up to 10,000 documents'
          features={[
            'Everything in Basic Processing',
            'Advanced AI extraction',
            'Custom field mapping',
            'Workflow automation',
            'Advanced analytics',
            'Priority support',
          ]}
          popular={true}
        />
        <PricingCard
          name='Enterprise Processing'
          price='$1,299/mo'
          duration='Unlimited documents'
          features={[
            'Everything in Professional Processing',
            'Custom AI model training',
            'Advanced security & compliance',
            'Dedicated account manager',
            'Custom integrations',
            '24/7 phone support',
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  duration,
  features,
  popular,
}: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-slate-500 shadow-lg' : 'border-gray-200'}`}
    >
      {popular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
          <span className='bg-slate-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
            Most Popular
          </span>
        </div>
      )}
      <h3 className='text-2xl font-bold text-gray-900 mb-2'>{name}</h3>
      <div className='text-3xl font-bold text-slate-600 mb-1'>{price}</div>
      <div className='text-gray-500 mb-6'>{duration}</div>
      <ul className='space-y-3 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start'>
            <span className='text-green-500 mr-2 mt-1'>✓</span>
            <span className='text-gray-600'>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href='tel:+13024640950'
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-slate-600 text-white hover:bg-slate-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className='bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200 rounded-xl p-8 text-center'>
      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
        Ready to Automate Your Document Processing?
      </h3>
      <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
        Let's discuss your document processing needs and create an AI-powered
        solution that eliminates manual data entry.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='tel:+13024640950'
          className='bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors'
        >
          Call +1 302 464 0950
        </a>
        <a
          href='mailto:kleber@ziontechgroup.com'
          className='border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-colors'
        >
          Email Us
        </a>
      </div>
      <div className='mt-6 text-sm text-gray-500'>
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
