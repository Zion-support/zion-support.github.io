import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Handshake
  Award
  Users
  Globe
  ArrowRight
  CheckCircle
  Star
  Building
  Target
  Lightbulb
  Shield
  Cloud
} from 'lucide-react';

export default function Partners() {

  const partnerTypes = [
    {'
      title: 'Technology Partners',
      description:',
      'Integrate your technology with our platform and create powerful solutions together.'
      features: ['
        'API Integration',
      'SDK Access'
        'Technical Documentation',
      'Developer Support'
      ]
    }
    {'
      title: 'Solution Partners',
      description:',
      'Resell our solutions and provide implementation services to your clients.'
      features: ['
        'Reseller Program',
      'Implementation Services'
        'Training & Certification',
      'Marketing Support'
      ]
    }
    {'
      title: 'Channel Partners',
      description:',
      'Distribute our solutions through your sales channels and customer base.'
      features: ['
        'Channel Program',
      'Sales Training'
        'Lead Sharing',
      'Co-marketing Opportunities'
      ]
    }
    }
    {
      title: 'Solution Partners',
      description: 'Specialized service providers that complement our offerings and expand our capabilities.',
      icon: Target,
      benefits: [
        'Expanded service portfolio',
      'Cross-referral opportunities'
        'Joint solution development',
      'Shared expertise and resources'
      ]
    }
    {
      title: 'Channel Partners',
      description: 'Resellers and integrators who help us reach new markets and deliver solutions to clients worldwide.',
      icon: Globe,
      benefits: [
        'Market expansion opportunities',
      'Local market expertise'
        'Sales and marketing support',
      'Training and certification programs'
      ]
    }
    }

  ];

  const currentPartners = [
    {
      name: 'Microsoft', logo: '/api/placeholder/200/100',
      description: 'Cloud infrastructure and AI services partnership', category: 'Technology Partner'
    }
    {
      name: 'Amazon Web Services', logo: '/api/placeholder/200/100',
      description: 'Cloud computing and machine learning solutions', category: 'Technology Partner'
    }
    {
      name: 'Google Cloud', logo: '/api/placeholder/200/100',
      description: 'AI and analytics platform integration', category: 'Technology Partner'
    }
    {
      name: 'IBM', logo: '/api/placeholder/200/100',
      description: 'Quantum computing and enterprise solutions', category: 'Strategic Partner'
    }
    {
      name: 'Oracle', logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application integration', category: 'Technology Partner'
    }
    {
      name: 'Salesforce', logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience solutions', category: 'Technology Partner'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Star, title: 'Access to Cutting-Edge Technology',
      description: 'Leverage the latest innovations and technologies from our partners.'
    }, {
      icon: Users,
      title: 'Expanded Market Reach', description: 'Tap into new markets and customer segments through our partner network.'
    }
    {
      icon: Award, title: 'Enhanced Credibility',
      description: 'Build trust with customers through our established partner relationships.'
    }, {
      icon: CheckCircle,
      title: 'Comprehensive Support', description: 'Access to expert support and resources from our partner ecosystem.'
    }


  ];

  return (
    <>
      <SEO'
        title="Partners - Zion Tech Group""
        description="Join our partner network and grow your business with Zion Tech Group. Technology, solution, and channel partnerships available.""
        keywords="partners, partnership, reseller, technology partners, channel partners, business partnership"
      />

          </div>
        </section>

      {/* Partner Benefits */}"
      <section className="py-20 bg-gray-50">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support and resources to help our
              partners succeed and grow their business.
            </p>
          </div>
"
          <div className="grid grid-cols-1 m
    d:grid-cols-2 l
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
                </div>"
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}"
      <section className="py-20 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl m
    d:text-4xl font-bold text-gray-900 mb-4">
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

              Partnership Programs
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership program that best fits your business model
              and goals.
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
"
          <div className="grid grid-cols-1 m
    d:grid-cols-3 gap-8">
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

        {/* Become a Partner */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Ready to join our partner ecosystem? Let&apos;s explore how we can work together to drive innovation and growth.''
            </p>
            <div className="flex flex-col sm: flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/partners/application"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access tools, training, and resources to help you succeed as a Zion Tech Group partner.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Partner Portal</h3>
                <p className="text-gray-600 mb-4">Access your dedicated partner portal with resources and tools.</p>
                <Link href="/partners/portal" className="text-blue-600 font-semibold hover:text-blue-700">
                  Access Portal →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Training Programs</h3>
                <p className="text-gray-600 mb-4">Comprehensive training programs for all partner types.</p>
                <Link href="/partners/training" className="text-blue-600 font-semibold hover:text-blue-700">
                  View Training →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Resources</h3>
                <p className="text-gray-600 mb-4">Co-marketing materials and campaign support.</p>
                <Link href="/partners/marketing" className="text-blue-600 font-semibold hover:text-blue-700">
                  Get Resources →
                </Link>
              </div>
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
              Join our partner ecosystem and unlock new opportunities for growth
              and innovation.

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {partnerTypes.map((type, index) => (
              <Card
                key={index}"
                className="p-8 hover: shadow-xl transition-shadow duration-300"
              >"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>"
                <p className="text-gray-600 mb-6">{type.description}</p>
"
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, idx) => ("
                    <li key={idx} className="flex items-center">"
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />"
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
"
                <Button className="w-full">
                  Learn More"
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>"
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our partner network today and start growing your business with
            Zion Tech Group. Our team is ready to help you succeed.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link href="/contact">
              <Button"
                size="lg""
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Partnership Team"
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button"
              size="lg""
              variant="outline""
              className="border-white text-white hove
    r:bg-white hove
    r:text-blue-600"
            >
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
