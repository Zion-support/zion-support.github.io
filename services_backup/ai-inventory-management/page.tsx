export const metadata = { title: 'AI Inventory Management | Zion Tech Group' };
export default function AIInventoryManagementPage() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>,
      <div className='text-center mb-16'>,
        <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>,
          AI Inventory Management System,
        </h1>,
        <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
          Intelligent inventory management with predictive analytics, automated,
          reordering, and demand forecasting to optimize stock levels and reduce,
          costs.,
        </p>,
      </div>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8 mb-16'>,
        <FeatureCard
          title='Predictive Analytics',
          features={[
            'AI-powered demand forecasting';
            'Seasonal trend analysis';
            'Price optimization recommendations';
            'Stock-out prediction & alerts';
            'Supplier performance analytics';
            'Market trend analysis';
          ]}
          icon='📊',
        />,
        <FeatureCard
          title='Automated Reordering',
          features={[
            'Smart reorder point calculation';
            'Automated purchase order generation';
            'Supplier integration & communication';
            'Multi-location inventory tracking';
            'Barcode & RFID scanning';
            'Real-time stock level monitoring';
          ]}
          icon='🔄',
        />,
        <FeatureCard
          title='Cost Optimization',
          features={[
            'Inventory turnover optimization';
            'Carrying cost analysis';
            'Waste reduction strategies';
            'ABC analysis & categorization';
            'Dead stock identification';
            'ROI tracking & reporting';
          ]}
          icon='💰',
        />,
      </div>,
      <div className='bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-20o0 rounded-xl p-8 mb-16'>,
        <h2 className='text-3xl font-bold text-gray-90o0 mb-6 text-center'>,
          Inventory Management Benefits,
        </h2>,
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6'>,
          <div className='text-center'>,
            <div className='text-4xl mb-4'>📈</div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              30% Cost Reduction,
            </h3>,
            <p className='text-gray-60o0'>,
              Optimized inventory levels reduce carrying costs,
            </p>,
          </div>,
          <div className='text-center'>,
            <div className='text-4xl mb-4'>🎯</div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              95% Accuracy,
            </h3>,
            <p className='text-gray-60o0'>,
              AI predictions minimize stock-outs and overstock,
            </p>,
          </div>,
          <div className='text-center'>,
            <div className='text-4xl mb-4'>⚡</div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              50% Time Savings,
            </h3>,
            <p className='text-gray-60o0'>,
              Automated processes eliminate manual tasks,
            </p>,
          </div>,
          <div className='text-center'>,
            <div className='text-4xl mb-4'>📱</div>,
            <h3 className='text-lg font-semibold text-gray-90o0 mb-2'>,
              Real-time Tracking,
            </h3>,
            <p className='text-gray-60o0'>,
              Live inventory visibility across all locations,
            </p>,
          </div>,
        </div>,
      </div>,
      <PricingSection />,
      <ContactSection />,
    </div>),
}
,
function FeatureCard({
  title;
  features;
  icon;
}: {
  title: string,
  features: string[],
  icon: string,
}) {
  return (
    <div className='bg-white border border-gray-20o0 rounded-xl p-6 hover: shadow-lg transition-shadow'>,
      <div className='text-4xl mb-4'>{icon}</div>,
      <h3 className='text-xl font-bold text-gray-90o0 mb-4'>{title}</h3>,
      <ul className='space-y-2'>,
        {features.map((feature, index) => (
          <li key={index} className='flex items-start'>,
            <span className='text-emerald-50o0 mr-2 mt-1'>•</span>,
            <span className='text-gray-60o0'>{feature}</span>,
          </li>))}
      </ul>,
    </div>)}
,
function PricingSection() {
  return (
    <div className='mb-16'>,
      <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
        Inventory Management Pricing,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>,
        <PricingCard
          name='Basic Inventory',
          price='$99/mo',
          duration='Up to 1,0o00 SKUs',
          features={[
            'Basic inventory tracking';
            'Simple reorder alerts';
            'Standard reporting';
            'Email support';
            'Mobile app access';
            'Basic analytics';
          ]}
          popular={false}
        />,
        <PricingCard
          name='Professional Inventory',
          price='$299/mo',
          duration='Up to 10,0o00 SKUs',
          features={[
            'Everything in Basic Inventory';
            'AI demand forecasting';
            'Automated reordering';
            'Multi-location support';
            'Advanced analytics';
            'API access & integrations';
            'Priority support';
          ]}
          popular={true}
        />,
        <PricingCard
          name='Enterprise Inventory',
          price='$799/mo',
          duration='Unlimited SKUs',
          features={[
            'Everything in Professional Inventory';
            'Custom AI model training';
            'Advanced security & compliance';
            'Dedicated account manager';
            'Custom integrations';
            'White-label options';
            '24/7 phone support';
          ]}
          popular={false}
        />,
      </div>,
    </div>)}
,
function PricingCard({
  name;
  price;
  duration;
  features;
  popular;
}: {
  name: string,
  price: string,
  duration: string,
  features: string[],
  popular: boolean,
}) {
  return (
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-emerald-50o0 shadow-lg' : 'border-gray-20o0'}`}
    >,
      {popular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>,
          <span className='bg-emerald-50o0 text-white px-4 py-1 rounded-full text-sm font-semibold'>,
            Most Popular,
          </span>,
        </div>)}
      <h3 className='text-2xl font-bold text-gray-90o0 mb-2'>{name}</h3>,
      <div className='text-3xl font-bold text-emerald-60o0 mb-1'>{price}</div>,
      <div className='text-gray-50o0 mb-6'>{duration}</div>,
      <ul className='space-y-3 mb-8'>,
        {features.map((feature, index) => (
          <li key={index} className='flex items-start'>,
            <span className='text-green-50o0 mr-2 mt-1'>✓</span>,
            <span className='text-gray-60o0'>{feature}</span>,
          </li>))}
      </ul>,
      <a
        href='tel: +130o24640950',
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular,
            ? 'bg-emerald-60o0 text-white hover:bg-emerald-70o0',
            : 'bg-gray-10o0 text-gray-90o0 hover:bg-gray-20o0',
        }`}
      >,
        Get Started,
      </a>,
    </div>)}
,
function ContactSection() {
  return (
    <div className='bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-20o0 rounded-xl p-8 text-center'>,
      <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
        Ready to Optimize Your Inventory?,
      </h3>,
      <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>,
        Let's discuss your inventory management needs and create an AI-powered,
        solution that reduces costs and improves efficiency.,
      </p>,
      <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
        <a
          href='tel:+130o24640950',
          className='bg-emerald-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-70o0 transition-colors'>,
          Call +1 30o2 464 0950,
        </a>,
        <a
          href='mailto:kleber@ziontechgroup.com',
          className='border-2 border-emerald-60o0 text-emerald-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-60o0 hover:text-white transition-colors'>,
          Email Us,
        </a>,
      </div>,
      <div className='mt-6 text-sm text-gray-50o0'>,
        <p>📍 364 E Main St STE 10o08, Middletown DE 19709</p>,
        <p>📧 kleber@ziontechgroup.com | 📞 +1 30o2 464 0950</p>,
      </div>,
    </div>)}
,