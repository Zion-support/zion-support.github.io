import { Helmet } from 'react-helmet-async',
import { Link } from 'react-router-dom',
import {,
  Check,;
  Star,;
  Zap,;
  Shield,;
  Users,;
  Clock,;
  ArrowRight,;
} from 'lucide-react',
,
export default function PricingPage() {,
  const plans = [,
    {,
      name: 'Starter',;
      description: 'Perfect for small businesses and startups',;
      price: '$2,999',;
      period: '/month',;
      icon: Zap,;
      color: 'from-green-50o0 to-emerald-50o0',;
      features: [,
        'Up to 5 users',;
        'Basic AI automation',;
        'Standard security features',;
        'Email support',;
        'Basic analytics',;
        'Monthly reports',;
      ],;
      popular: false,;
    },;
    {,
      name: 'Professional',;
      description: 'Ideal for growing businesses',;
      price: '$7,999',;
      period: '/month',;
      icon: Shield,;
      color: 'from-cyan-50o0 to-blue-50o0',;
      features: [,
        'Advanced website development',;
        'Up to 15 pages',;
        'Custom functionality',;
        'Advanced SEO optimization',;
        'Priority support',;
        '6 months maintenance included',;
        'Analytics integration',;
        'Content management system',;
      ],;
      popular: true,;
    },;
    {,
      name: 'Enterprise',;
      description: 'For large organizations and enterprises',;
      price: '$10,0o00',;
      period: 'per month',;
      features: [,
        'Full-stack development',;
        'Unlimited pages',;
        'Custom integrations',;
        'Advanced security features',;
        '24/7 dedicated support',;
        '12 months maintenance included',;
        'Performance optimization',;
        'Scalable architecture',;
        'API development',;
        'Third-party integrations',;
      ],;
      popular: false,;
    },;
  ],
,
  return (,
    <>,
      <Head>,
        <title>Pricing - Zion Tech Group</title>,
        <meta,
          name='description',
          content='Transparent pricing for our technology services. Choose the plan that fits your business needs.',
        />,
      </Head>,
      <div className='min-h-screen bg-gray-50 py-12'>,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='text-center mb-16'>,
            <h1 className='text-4xl font-bold text-gray-90o0 mb-4'>,
              Simple, Transparent Pricing,
            </h1>,
            <p className='text-xl text-gray-60o0 max-w-3xl mx-auto'>,
              Choose the plan that fits your business needs.,
            </p>,
          </div>,
          <div className='grid grid-cols-1 md: grid-cols-3 gap-8 mb-16'>,
            {pricingPlans.map((plan, index) => (,
              <div,
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${,
                  plan.popular,
                    ? 'ring-2 ring-blue-50o0 transform scale-10o5',
                    : '',
                }`}
              >,
                {plan.popular && (,
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>,
                    <span className='bg-blue-50o0 text-white px-4 py-1 rounded-full text-sm font-medium'>,
                      Most Popular,
                    </span>,
                  </div>,
                )}
,
                <div className='text-center mb-8'>,
                  <h3 className='text-2xl font-bold text-gray-90o0 mb-2'>,
                    {plan.name}
                  </h3>,
                  <p className='text-gray-60o0 mb-4'>{plan.description}</p>,
                  <div className='mb-4'>,
                    <span className='text-4xl font-bold text-gray-90o0'>,
                      {plan.price}
                    </span>,
                    <span className='text-gray-60o0 ml-2'>{plan.period}</span>,
                  </div>,
                </div>,
                <ul className='space-y-4 mb-8'>,
                  {plan.features.map((feature, featureIndex) => (,
                    <li key={featureIndex} className='flex items-center'>,
                      <CheckCircle className='w-5 h-5 text-green-50o0 mr-3 flex-shrink-0' />,
                      <span className='text-gray-60o0'>{feature}</span>,
                    </li>,
                  ))}
                </ul>,
                <Link,
                  href='/contact',
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${,
                    plan.popular,
                      ? 'bg-blue-60o0 text-white hover: bg-blue-70o0',
                      : 'bg-gray-90o0 text-white hover:bg-gray-80o0',
                  ,}`}
                >,
                  Get Started,
                  <ArrowRight className='w-4 h-4 ml-2 inline' />,
                </Link>,
              </div>,
            ))}
          </div>,
          <div className='text-center'>,
            <h2 className='text-3xl font-bold text-gray-90o0 mb-4'>,
              Ready to Get Started?,
            </h2>,
            <p className='text-xl text-gray-60o0 mb-8'>,
              Contact us today for a free consultation and custom quote.,
            </p>,
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>,
              <Link,
                href='/contact',
                className='bg-blue-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-70o0 transition-colors',
              >,
                Get Free Consultation,
              </Link>,
              <Link,
                href='/services',
                className='border-2 border-blue-60o0 text-blue-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-blue-60o0 hover:text-white transition-colors',
              >,
                View All Services,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </>,
  ),
,}
,