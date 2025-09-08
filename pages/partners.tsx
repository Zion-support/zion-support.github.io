import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


export default function Partners() {

  const partnerTypes = [

        'Integrate your technology with our platform and create powerful solutions together.',
      features: ['
        'API Integration',
        'SDK Access',
        'Technical Documentation',
        'Developer Support' ] }, {'
      title: 'Solution Partners',
      description:'
        'Resell our solutions and provide implementation services to your clients.',
      features: ['
        'Reseller Program',
        'Implementation Services',
        'Training & Certification',
        'Marketing Support' ] }, {'
      title: 'Channel Partners',
      description:'
        'Distribute our solutions through your sales channels and customer base.',
      features: ['
        'Channel Program',
        'Sales Training',
        'Lead Sharing',
        'Co-marketing Opportunities' ] } }, {
      title: 'Solution Partners',
      description:
        'Specialized service providers that complement our offerings and expand our capabilities.',
      icon: Target,
      benefits: [

    }, {
      title: 'Channel Partners',
      description:
        'Resellers and integrators who help us reach new markets and deliver solutions to clients worldwide.',
      icon: Globe,
      benefits: [

    }

  ];

  const currentPartners = [

    }


  ];

  const partnershipLevels = [
    {
      name: 'Platinum',
      description: 'Strategic partnerships with deep integration and joint go-to-market initiatives.',
      benefits: ['Priority support', 'Joint marketing', 'Custom integrations', 'Executive alignment'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Gold',
      description: 'Preferred partnerships with significant collaboration and mutual benefits.',
      benefits: ['Enhanced support', 'Co-marketing opportunities', 'Technical collaboration', 'Training access'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Silver',
      description: 'Standard partnerships with basic collaboration and referral programs.',
      benefits: ['Standard support', 'Referral programs', 'Documentation access', 'Community access'],
      color: 'from-gray-400 to-gray-600'
    }
  {/* Removed stray closing bracket */}

const Page = () => {
  return (
    <>

        keywords="partners, partnership, reseller, technology partners, channel partners, business partnership"
      />

      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner network and grow your business with Zion Tech Group's innovative solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}

            </div>

          </div>
        </section>


            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support and resources to help our
              partners succeed and grow their business.
            </p>
          </div>
"
          <div className="grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card
                key={index}"
                className="p-6 hover: shadow-xl transition-shadow duration-300"
              >"
                <div className="flex items-center mb-4">"
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">"
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>

                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        </section>


                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {partner.category}
                  </p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>

              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">


            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <a
                href="mailto:partners@ziontechgroup.com"
                className="text-white hover:text-blue-200 transition-colors"
              >
                partners@ziontechgroup.com
              </a>
            </div>
          </div>

    </>

