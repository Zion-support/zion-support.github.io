import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  Users2 as Handshake,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Award,
  Target,
  Zap,
  Shield,
} from 'lucide-react';

export default function Partners() {
  const partnerBenefits = [
    {
      icon: Users,
      title: 'Access to Our Network',
      description:'
        'Connect with our extensive network of clients and partners worldwide.',
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description:'
        'Get certified in our technologies and solutions with comprehensive training.',
    },
    {
      icon: Target,
      title: 'Joint Marketing',
      description:'
        'Collaborate on marketing initiatives and co-branded campaigns.',
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description:'
        'Receive dedicated technical support and resources for your team.',
    },
    {
      icon: Shield,
      title: 'Revenue Sharing',
      description:'
        'Earn competitive commissions and revenue sharing opportunities.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:'
        'Expand your business reach with our global partner network.',
    },
  ];

  const partnerTypes = [
    {'
      title: 'Technology Partners',
      description:'
        'Integrate your technology with our platform and create powerful solutions together.',
      features: ['
        'API Integration',
        'SDK Access',
        'Technical Documentation',
        'Developer Support',
      ],
    },
    {'
      title: 'Solution Partners',
      description:'
        'Resell our solutions and provide implementation services to your clients.',
      features: ['
        'Reseller Program',
        'Implementation Services',
        'Training & Certification',
        'Marketing Support',
      ],
    },
    {'
      title: 'Channel Partners',
      description:'
        'Distribute our solutions through your sales channels and customer base.',
      features: ['
        'Channel Program',
        'Sales Training',
        'Lead Sharing',
        'Co-marketing Opportunities',
      ],
    },
  ];

  return (
    <>
      <SEO'
        title="Partners - Zion Tech Group""
        description="Join our partner network and grow your business with Zion Tech Group. Technology, solution, and channel partnerships available.""
        keywords="partners, partnership, reseller, technology partners, channel partners, business partnership"
      />
      <Head>
        <title>Partners - Zion Tech Group</title>
      </Head>

      {/* Hero Section */}"
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8">"
          <div className="text-center">"
            <Badge className="mb-4 bg-blue-500 text-white">"
              <Handshake className="w-4 h-4 mr-2" />
              Partnership Program
            </Badge>"
            <h1 className="text-4xl m,
    d:text-6xl font-bold mb-6">
              Partner With"
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">"
                {' '}
                Zion Tech Group
              </span>
            </h1>'
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing partner network and unlock new opportunities for
              growth. Whether you&apos;re a technology company, solution"
              provider, or channel partner, ' we have programs designed to help
              you succeed.
            </p>'
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Become a Partner"
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button"
                size="lg""
                variant="outline""
                className="border-white text-white hove,
    r:bg-white hove,
    r:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>
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
            <h2 className="text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4">
              Partnership Programs
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership program that best fits your business model
              and goals.
            </p>
          </div>
"
          <div className="grid grid-cols-1 m,
    d:grid-cols-3 gap-8">
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
    </>
  );
}
"