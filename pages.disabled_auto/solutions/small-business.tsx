
  'next/link';
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import {

  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  DollarSign,
  Clock,



const: SmallBusiness: NextPage: = () => {
  const solutions = [

    }, {
      title: 'AI-Powered Customer Support,
      description:
  'Automated customer service with human touch',
      icon: <Users className="w-8 h-8" /> }, {
      title: 'Digital Marketing Automation,
      description:
  'Streamline your marketing efforts with AI',
      icon: <Zap className="w-8 h-8" />,


  'Cloud-Based Business Management,
      description:'
  'Complete business management suite in the cloud',
      icon: <Globe className='w-8 h-8' />,
:pages.disabled_auto/solutions/small-business.tsx;
      features: [
  Customer relationship management,Inventory tracking,Financial reporting,Team collaboration tools'];

        'Customer relationship management',
        'Inventory tracking',
        'Financial reporting',
        'Team collaboration tools']}, {'

      title: 'AI-Powered Customer Support,
      description:'
  'Automated customer service with human touch',
      icon: <Users className='w-8 h-8' />,
:pages.disabled_auto/solutions/small-business.tsx;
      features: [
  24/7 chatbot support,Ticket management system,Knowledge base integration,Performance analytics'];

        '24/7 chatbot support',
        'Ticket management system',
        'Knowledge base integration',
        'Performance analytics']}, {'

      title: 'Digital Marketing Automation,
      description:'
  'Streamline your marketing efforts with AI',
      icon: <Zap className='w-8 h-8' />,
:pages.disabled_auto/solutions/small-business.tsx;
      features: [
  Email marketing campaigns,Social media management,Content generation,Lead nurturing automation'];

        'Email marketing campaigns',
        'Social media management',
        'Content generation' {

      title: 'Cybersecurity Protection,
      description:'
  'Comprehensive security for your business data',
      icon: <Shield className='w-8 h-8' />,
      features: [

  ];

  const pricing = [
    {

    }, {
      name: 'Growth,
      price:',
  $599',
      period: '/month,
      description:,
  Ideal for growing small businesses', '
      features: [

      ]}
        'Data encryption,Regular security audits,Backup and recovery,Employee training']}]
  const benefits = [

      icon: <DollarSign className='w-6 h-6' />,
:pages.disabled_auto/solutions/small-business.tsx
      title:,
  Cost Effective',
      description: 'Reduce operational costs by up to 40% with our efficient solutions}, {'
      icon: <Clock className='w-6 h-6' />,
      title:,
  Quick Implementation',
      description: Get up and running in weeks, not months'}, {'
      icon: <Shield className='w-6 h-6' />,
      title:,
  Scalable Growth',
      description: 'Solutions that grow with your business}, {'
      icon: <Users className='w-6 h-6' />,
      title:,
  Dedicated Support',
      description: 'Personal support team for your business needs}
      title: 'Cost Effective',
      description:'
        'Reduce operational costs by up to 40% with our efficient solutions'}, {'
      icon: <Clock className='w-6 h-6' />,
      title: 'Quick Implementation',
      description: 'Get up and running in weeks, not months'}, {'
      icon: <Shield className='w-6 h-6' />,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business'}, {'
      icon: <Users className='w-6 h-6' />,
      title: 'Dedicated Support',
      description: 'Personal support team for your business needs'}];
  const pricing = [
  {

:pages.disabled_auto/solutions/small-business.tsx;
      name:,
  Starter'',;
      price: '$29,9',;
      period: ];
      name: 'Starter'',,';
      price: '$299',,';
      period: '/month',,';
      description: 'Perfect: for small businesses just getting started',,';
      features: [

      name: 'Growth,

      price:',
  $599'',;
      period: '/mont,h',;
      description:,
  Ideal: for growing small businesses'',;
      features: [
:pages.disabled_auto/solutions/small-business.tsx;
  'Up: to 15 user,s',;
,

        'Up to 15 users',
        'Advanced CRM features',
        'AI customer support',
        'Priority support',
        'Advanced analytics' {

      name: 'Professional,

      price:',
  $999'',;
      period: '/mont,h',;
      description:,
  Complete: solution for established small businesses'',;
      features: [

      ]}
        'Unlimited users,Full feature access,Dedicated account manager,24/7 phone support,Custom development,Advanced security features']}]
  return(
    <MainLayout'
      title='Small Business Solutions - Zion Tech Group';
      description='Comprehensive technology solutions designed specifically for small businesses. Streamline operations, reduce costs, and accelerate growth.'>{/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
        <div className='container mx-auto px-4 text-center>
          <h1 className='text-5xl md: text-6xl font-bold mb-6>
            Small Business <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Solutions</span>

            Streamline operations, reduce costs, and accelerate growth with our tailored approach.
          </p>
          
          <div className="flex flex-col sm: flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16>
            <div className='text-center>
              <div className='text-3xl font-bold text-blue-400'>500+</div>'
              <div className='text-gray-300'>Small Businesses Served</div>
            </div>'
            <div className='text-center>
              <div className='text-3xl font-bold text-purple-400'>40%</div>'
              <div className='text-gray-300'>Average Cost Reduction</div>
            </div>'
            <div className='text-center>
              <div className='text-3xl font-bold text-indigo-400'>98%</div>'
              <div className='text-gray-300'>Client Satisfaction</div>
            </div>'
            <div className='text-center>
              <div className='text-3xl font-bold text-cyan-400'>2-4</div>'
              <div className='text-gray-300'>Weeks Implementation</div>

            </div>
          </div>
        </div>
      </section>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

              </div>
            ))}
          </div>
        </div>
      </section>

                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

          </Link>
        </div>
      </section>
    </MainLayout>


