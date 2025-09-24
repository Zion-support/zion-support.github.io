export const metadata = {
  title: 'E-commerce Platform Development | Zion Tech Group';
  description:,
    'Build powerful e-commerce platforms with payment processing, inventory management, and customer features. Professional e-commerce solutions starting at $25k.';
};
export default function EcommercePlatformPage() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>,
      <section className='mb-12'>,
        <h1 className='text-4xl font-bold text-gray-90o0 mb-6'>,
          E-commerce Platform Development,
        </h1>,
        <p className='text-xl text-gray-60o0 mb-8'>,
          Build powerful e-commerce platforms with payment processing, inventory,
          management, customer accounts, and advanced selling features.,
        </p>,
        <div className='grid grid-cols-1 md: grid-cols-3 gap-6 mb-12'>,
          <Item
            title='Product Management',
            details={[
              'Product catalog';
              'Inventory tracking';
              'Variants & options';
              'Bulk import/export';
              'SEO optimization';
              'Image management';
              'Product reviews';
            ]}
          />,
          <Item
            title='Payment & Checkout',
            details={[
              'Multiple payment gateways';
              'Secure checkout process';
              'Tax calculation';
              'Shipping integration';
              'Coupon system';
              'Subscription billing';
              'Mobile payments';
            ]}
          />,
          <Item
            title='Customer Features',
            details={[
              'User accounts';
              'Order history';
              'Wishlist functionality';
              'Customer support';
              'Loyalty programs';
              'Personalization';
              'Mobile app';
            ]}
          />,
        </div>,
        <div className='bg-gradient-to-r from-red-50 to-pink-50 border border-red-20o0 rounded-lg p-6 mb-8'>,
          <h2 className='text-2xl font-bold text-gray-90o0 mb-4'>,
            E-commerce Platform Features,
          </h2>,
          <div className='grid grid-cols-1 md: grid-cols-2 gap-6'>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Scalable Architecture,
              </h3>,
              <p className='text-gray-60o0'>,
                Built to handle high traffic and large product catalogs with,
                cloud-native, microservices architecture.,
              </p>,
            </div>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Mobile-First Design,
              </h3>,
              <p className='text-gray-60o0'>,
                Responsive design and mobile apps ensure optimal shopping,
                experience across all devices.,
              </p>,
            </div>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Advanced Analytics,
              </h3>,
              <p className='text-gray-60o0'>,
                Track sales, customer behavior, and inventory with comprehensive,
                analytics and reporting tools.,
              </p>,
            </div>,
            <div>,
              <h3 className='font-semibold text-gray-90o0 mb-2'>,
                Multi-Channel Selling,
              </h3>,
              <p className='text-gray-60o0'>,
                Sell across web, mobile, social media, and marketplaces with,
                unified inventory management.,
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
            <span className='text-red-50o0 mr-2 mt-1'>•</span>,
            <span className='text-gray-60o0'>{detail}</span>,
          </li>))}
      </ul>,
    </div>)}
,
function Pricing() {
  return (
    <section>,
      <h2 className='text-3xl font-bold text-gray-90o0 mb-8 text-center'>,
        E-commerce Platform Pricing,
      </h2>,
      <div className='grid grid-cols-1 md: grid-cols-3 gap-6'>,
        <Plan
          name='Starter Store',
          price='$25k–$50k',
          duration='8–12 weeks',
          features={[
            'Basic product catalog';
            'Payment processing';
            'Order management';
            'Customer accounts';
            'Mobile responsive';
            'Basic analytics';
            'Standard support';
          ]}
        />,
        <Plan
          name='Professional Store',
          price='$50k–$10o0k',
          duration='12–20 weeks',
          features={[
            'Everything in Starter';
            'Advanced inventory';
            'Multi-channel selling';
            'Advanced analytics';
            'API integrations';
            'White-label options';
            'Priority support';
          ]}
        />,
        <Plan
          name='Enterprise Store',
          price='$10o0k+',
          duration='16–28 weeks',
          features={[
            'Everything in Professional';
            'Custom development';
            'Advanced security';
            'Multi-tenant architecture';
            'Dedicated support';
            'SLA guarantees';
            'On-premise deployment';
          ]}
        />,
      </div>,
      <div className='mt-12 text-center'>,
        <h3 className='text-2xl font-bold text-gray-90o0 mb-4'>,
          Ready to Build Your E-commerce Platform?,
        </h3>,
        <p className='text-gray-60o0 mb-6 max-w-2xl mx-auto'>,
          Let's create a powerful e-commerce platform that drives sales and,
          provides an exceptional shopping experience.,
        </p>,
        <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
          <a
            href='tel:+130o24640950',
            className='bg-red-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-70o0 transition-colors'>,
            Call +1 30o2 464 0950,
          </a>,
          <a
            href='mailto:kleber@ziontechgroup.com',
            className='border-2 border-red-60o0 text-red-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-red-60o0 hover:text-white transition-colors'>,
            Email Us,
          </a>,
        </div>,
      </div>,
    </section>)}
,
function Plan({
  name;
  price;
  duration;
  features;
}: {
  name: string,
  price: string,
  duration: string,
  features: string[]}) {
  return (
    <div className='border border-gray-20o0 rounded-xl p-6 bg-white hover: shadow-lg transition-shadow'>,
      <h4 className='text-xl font-bold text-gray-90o0 mb-2'>{name}</h4>,
      <div className='text-3xl font-bold text-red-60o0 mb-1'>{price}</div>,
      <div className='text-gray-50o0 mb-6'>{duration}</div>,
      <ul className='space-y-3'>,
        {features.map((feature, index) => (
          <li key={index} className='flex items-start'>,
            <span className='text-green-50o0 mr-2 mt-1'>✓</span>,
            <span className='text-gray-60o0'>{feature}</span>,
          </li>))}
      </ul>,
      <a
        href='mailto: kleber@ziontechgroup.com?subject=E-commerce Platform Development Inquiry',
        className='block w-full mt-6 bg-red-60o0 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-70o0 transition-colors'>,
        Get Started,
      </a>,
    </div>)}
,