import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Handshake,
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Target,
  Lightbulb,
  Shield,
  Cloud} from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
export default function Partners() {
  const partnerBenefits = [
    {
      icon: Handshake, title: 'Strategic Partners',
      description: 'Long-term partnerships that drive mutual growth and innovation.', benefits: ['Joint product development', 'Shared resources', 'Market expansion']
    }, {
      icon: Award,
      title: 'Technology Partners', description: 'Integration partnerships with leading technology providers.',
      benefits: ['API integrations', 'Technical support', 'Co-marketing opportunities']
    }, {
      icon: Users,
      title: 'Channel Partners', description: 'Reseller and distribution partnerships for market reach.',
      benefits: ['Revenue sharing', 'Training programs', 'Marketing support']
    }, {
      icon: Globe,
      title: 'Global Partners', description: 'International partnerships for worldwide market presence.',
      benefits: ['Local expertise', 'Regional support', 'Cultural adaptation']
    }, {
      icon: Users,
      title: 'Access to Our Network',
      description: 'Connect with our extensive network of clients and partners worldwide.',
      benefits: ['Networking opportunities', 'Collaboration projects', 'Knowledge sharing']
    }, {
      icon: Award,
      title: 'Certification Programs',
      description: 'Professional certification and training programs for our partners.',
      benefits: ['Industry recognition', 'Technical expertise', 'Competitive advantage']
    }, {
      icon: Target,
      title: 'Joint Marketing',
      description: 'Collaborative marketing initiatives to expand market reach.',
      benefits: ['Co-branded campaigns', 'Lead generation', 'Market expansion']
    }, {
      icon: Zap,
      title: 'Technical Support',
      description: 'Comprehensive technical support and training for our partners.',
      benefits: ['24/7 support', 'Training resources', 'Expert consultation']
    }, {
      icon: Shield,
      title: 'Revenue Sharing',
      description: 'Attractive revenue sharing models for successful partnerships.',
      benefits: ['Competitive commissions', 'Performance bonuses', 'Long-term partnerships']
    }, {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our global network and international markets.',
      benefits: ['International expansion', 'Local market access', 'Cultural expertise']
    }];

  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the tools and platforms we use to deliver exceptional solutions.',
      icon: Cloud,
      benefits: [
        'Access to cutting-edge technology',
        'Joint go-to-market opportunities',
        'Technical support and training',
        'Co-marketing initiatives'
      ]
    }
  ];

  return (
    <Layout
      title="Partners - Zion Tech Group"
      description="Join our partner ecosystem and grow your business with Zion Tech Group's innovative solutions and support."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ecosystem</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join our network of partners and grow your business with innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive support and resources to help our partners succeed in the technology market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to create innovative solutions and grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors"
            >
              Visit our website <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Partners;
                How to become a partner in 4 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
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
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
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
              className="border-white text-white hove,
    r:bg-white hove,
    r:text-blue-600"
            >
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>
        </section>
      </main>
    </>
  )
}
  );
}
"
