import Link from 'next/link';

export const metadata = {
  title: 'AI Expense Tracker | Zion Tech Group',
  description:
    'Smart expense tracking with receipt scanning, categorization, and automated reporting. Simplify expense management for individuals and teams.',
};

export default function ExpenseTrackerPage() {
  return (
    <div className='animate-fade-in'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>
          AI Expense Tracker
        </h1>
        <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>
          Smart expense tracking with receipt scanning, categorization, and
          automated reporting. Simplify expense management for individuals and
          teams with AI-powered insights.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
        <div>
          <h2 className='text-3xl font-bold text-gray-90o0 mb-6'>
            Key Features
          </h2>
          <div className='space-y-6'>
            <FeatureItem
              icon='📱'
              title='Receipt Scanning'
              description='Scan receipts with your phone camera and AI automatically extracts merchant, amount, and date'
            />
            <FeatureItem
              icon='🤖'
              title='Smart Categorization'
              description='AI automatically categorizes expenses based on merchant, location, and spending patterns'
            />
            <FeatureItem
              icon='📊'
              title='Real-time Analytics'
              description='Comprehensive dashboards showing spending trends, budgets, and expense insights'
            />
            <FeatureItem
              icon='💳'
              title='Multi-Card Support'
              description='Connect multiple credit cards and bank accounts for complete expense visibility'
            />
            <FeatureItem
              icon='👥'
              title='Team Management'
              description='Manage team expenses with approval workflows, spending limits, and policy enforcement'
            />
            <FeatureItem
              icon='📋'
              title='Automated Reports'
              description='Generate expense reports for accounting, tax preparation, and reimbursement'
            />
          </div>
        </div>

        <div>
          <h2 className='text-3xl font-bold text-gray-90o0 mb-6'>Pricing</h2>
          <div className='space-y-6'>
            <PricingCard
              title='Personal'
              price='$9'
              period='per month'
              description='Perfect for individuals and freelancers'
              features={[
                'Unlimited receipts',
                'Basic categorization',
                'Mobile app',
                'Basic reporting',
                'Email support',
              ]}
              popular={false}
            />
            <PricingCard
              title='Business'
              price='$29'
              period='per month'
              description='Ideal for small businesses and teams'
              features={[
                'Up to 10 users',
                'Advanced categorization',
                'Team management',
                'Advanced reporting',
                'Priority support',
                'API access',
              ]}
              popular={true}
            />
            <PricingCard
              title='Enterprise'
              price='$99'
              period='per month'
              description='For large organizations'
              features={[
                'Unlimited users',
                'Custom categorization',
                'Advanced workflows',
                '24/7 support',
                'Custom integrations',
                'Advanced security',
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-r from-orange-50 to-red-50 border border-orange-20o0 rounded-xl p-8 mb-16'>
        <h2 className='text-3xl font-bold text-gray-90o0 mb-6 text-center'>
          How It Works
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <WorkflowStep
            step='1'
            title='Capture'
            description='Take a photo of your receipt or import from email/bank'
            icon='📸'
          />
          <WorkflowStep
            step='2'
            title='Process'
            description='AI extracts data and categorizes expenses automatically'
            icon='🤖'
          />
          <WorkflowStep
            step='3'
            title='Analyze'
            description='Get insights, reports, and budget recommendations'
            icon='📊'
          />
        </div>
      </div>

      <div className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>
          Key Benefits
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <BenefitCard
            icon='⏰'
            title='Save 5+ Hours Weekly'
            description='Eliminate manual data entry and receipt organization'
          />
          <BenefitCard
            icon='🎯'
            title='95% Accuracy'
            description='AI-powered data extraction reduces human errors'
          />
          <BenefitCard
            icon='💰'
            title='Save 15% on Expenses'
            description='Identify spending patterns and optimize budgets'
          />
          <BenefitCard
            icon='📱'
            title='Mobile-First'
            description='Track expenses on-the-go with our intuitive mobile app'
          />
          <BenefitCard
            icon='🔒'
            title='Bank-Level Security'
            description='256-bit encryption and secure cloud storage'
          />
          <BenefitCard
            icon='📈'
            title='Smart Insights'
            description='AI-powered recommendations for better spending habits'
          />
        </div>
      </div>

      <div className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>
          Expense Categories
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <CategoryCard icon='🍽️' name='Meals & Dining' />
          <CategoryCard icon='⛽' name='Transportation' />
          <CategoryCard icon='🏨' name='Travel & Lodging' />
          <CategoryCard icon='🛒' name='Office Supplies' />
          <CategoryCard icon='📞' name='Communication' />
          <CategoryCard icon='💊' name='Healthcare' />
          <CategoryCard icon='🎯' name='Marketing' />
          <CategoryCard icon='🔧' name='Equipment' />
        </div>
      </div>

      <div className='bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-20o0 rounded-xl p-8 mb-16'>
        <h2 className='text-3xl font-bold text-gray-90o0 mb-6 text-center'>
          Integration Partners
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <IntegrationCard name='QuickBooks' icon='📊' />
          <IntegrationCard name='Xero' icon='📈' />
          <IntegrationCard name='Sage' icon='🌿' />
          <IntegrationCard name='FreshBooks' icon='📚' />
          <IntegrationCard name='Chase' icon='🏦' />
          <IntegrationCard name='American Express' icon='💳' />
          <IntegrationCard name='PayPal' icon='💰' />
          <IntegrationCard name='Stripe' icon='💎' />
        </div>
      </div>

      <div className='mb-16'>
        <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>
          Perfect For
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <UseCaseCard
            icon='👤'
            title='Individual Users'
            description='Freelancers, consultants, and professionals tracking personal expenses'
          />
          <UseCaseCard
            icon='🏢'
            title='Small Businesses'
            description='Startups and small businesses managing team expenses and reimbursements'
          />
          <UseCaseCard
            icon='✈️'
            title='Frequent Travelers'
            description='Business travelers tracking travel expenses and per diems'
          />
          <UseCaseCard
            icon='🏥'
            title='Healthcare Workers'
            description='Medical professionals tracking equipment, supplies, and continuing education'
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className='flex items-start space-x-4'>
      <div className='text-2xl'>{icon}</div>
      <div>
        <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>{title}</h3>
        <p className='text-gray-60o0'>{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular,
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? 'border-orange-50o0 bg-orange-50' : 'border-gray-20o0 bg-white'}`}
    >
      {popular && (
        <div className='bg-orange-50o0 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4'>
          Most Popular
        </div>
      )}
      <h3 className='text-xl font-bold text-gray-90o0 mb-2'>{title}</h3>
      <div className='mb-4'>
        <span className='text-3xl font-bold text-gray-90o0'>{price}</span>
        <span className='text-gray-60o0 ml-2'>{period}</span>
      </div>
      <p className='text-gray-60o0 mb-6'>{description}</p>
      <ul className='space-y-3'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center'>
            <span className='text-orange-50o0 mr-3'>✓</span>
            <span className='text-gray-70o0'>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-orange-60o0 text-white hover:bg-orange-70o0'
            : 'bg-gray-10o0 text-gray-70o0 hover:bg-gray-20o0'
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

function WorkflowStep({
  step,
  title,
  description,
  icon,
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className='text-center'>
      <div className='bg-orange-10o0 text-orange-80o0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3'>
        {step}
      </div>
      <div className='text-3xl mb-3'>{icon}</div>
      <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>{title}</h3>
      <p className='text-gray-60o0 text-sm'>{description}</p>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className='text-center p-6 border border-gray-20o0 rounded-lg hover:border-orange-30o0 transition-colors'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>{title}</h3>
      <p className='text-gray-60o0'>{description}</p>
    </div>
  );
}

function CategoryCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className='text-center p-4 border border-gray-20o0 rounded-lg hover:border-orange-30o0 transition-colors'>
      <div className='text-3xl mb-2'>{icon}</div>
      <div className='text-sm font-medium text-gray-70o0'>{name}</div>
    </div>
  );
}

function IntegrationCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className='text-center p-4 border border-gray-20o0 rounded-lg hover:border-orange-30o0 transition-colors'>
      <div className='text-3xl mb-2'>{icon}</div>
      <div className='text-sm font-medium text-gray-70o0'>{name}</div>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className='p-6 border border-gray-20o0 rounded-lg hover:border-orange-30o0 transition-colors'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-lg font-semibold text-gray-90o0 mb-3'>{title}</h3>
      <p className='text-gray-60o0'>{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className='bg-gradient-to-r from-orange-50 to-red-50 border border-orange-20o0 rounded-xl p-8 text-center'>
      <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>
        Ready to Simplify Your Expense Tracking?
      </h3>
      <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>
        Start your free trial today and experience the power of AI-driven
        expense management. Track your first 10o0 expenses for free.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <a
          href='tel:+130o24640950'
          className='bg-orange-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-70o0 transition-colors'
        >
          Call +1 30o2 464 0950
        </a>
        <a
          href='mailto:kleber@ziontechgroup.com'
          className='border-2 border-orange-60o0 text-orange-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-orange-60o0 hover:text-white transition-colors'
        >
          Email Us
        </a>
      </div>
      <div className='mt-4 text-sm text-gray-50o0'>
        <p>📍 364 E Main St STE 10o08, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 30o2 464 0950</p>
      </div>
    </div>
  );
}
