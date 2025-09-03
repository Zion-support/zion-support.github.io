import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
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
      description:
        'Connect with our extensive network of clients and partners worldwide.',
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description:
        'Get certified in our technologies and solutions with comprehensive training.',
    },
    {
      icon: Target,
      title: 'Joint Marketing',
      description:
        'Collaborate on marketing initiatives and co-branded campaigns.',
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description:
        'Receive dedicated technical support and resources for your team.',
    },
    {
      icon: Shield,
      title: 'Revenue Sharing',
      description:
        'Earn competitive commissions and revenue sharing opportunities.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Expand your business reach with our global partner network.',
    },
  ];

=======
import { Handshake, Award, Users, Globe, ArrowRight, CheckCircle, Star, Building, Target, Lightbulb, Shield, Cloud } from 'lucide-react';

export default function Partners() {
>>>>>>> main
  const partnerTypes = [
  {
      title: 'Technology Partners',
<<<<<<< HEAD
      description:
        'Integrate your technology with our platform and create powerful solutions together.',
      features: [
        'API Integration',
        'SDK Access',
        'Technical Documentation',
        'Developer Support',
      ],
    },
    {
      title: 'Solution Partners',
      description:
        'Resell our solutions and provide implementation services to your clients.',
      features: [
        'Reseller Program',
        'Implementation Services',
        'Training & Certification',
        'Marketing Support',
      ],
    },
    {
      title: 'Channel Partners',
      description:
        'Distribute our solutions through your sales channels and customer base.',
      features: [
        'Channel Program',
        'Sales Training',
        'Lead Sharing',
        'Co-marketing Opportunities',
      ],
    },
=======
      description: 'Leading technology companies that provide the tools and platforms we use to deliver exceptional solutions.',
      icon: Cloud,
      benefits: [
        'Access to cutting-edge technology,Joint go-to-market opportunities,Technical support and training,Co-marketing initiatives'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Specialized service providers that complement our offerings and expand our capabilities.',
      icon: Target,
      benefits: [
        'Expanded service portfolio,Cross-referral opportunities,Joint solution development,Shared expertise and resources'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resellers and integrators who help us reach new markets and deliver solutions to clients worldwide.',
      icon: Globe,
      benefits: [
        'Market expansion opportunities,Local market expertise,Sales and marketing support,Training and certification programs'
      ]
    }
  ];

  const currentPartners = [
  {
      name: 'Microsoft',
      category: 'Cloud Platform',
      description: 'Azure cloud services and enterprise solutions',
      logo: 'Microsoft',
      tier: 'Platinum'
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Infrastructure',
      description: 'AWS cloud computing and AI services',
      logo: 'AWS',
      tier: 'Platinum'
    },
    {
      name: 'Google Cloud',
      category: 'AI & Analytics',
      description: 'Google Cloud Platform and AI tools',
      logo: 'Google',
      tier: 'Gold'
    },
    {
      name: 'Salesforce',
      category: 'CRM Solutions',
      description: 'Customer relationship management platform',
      logo: 'Salesforce',
      tier: 'Gold'
    },
    {
      name: 'ServiceNow',
      category: 'IT Service Management',
      description: 'Digital workflow and automation platform',
      logo: 'ServiceNow',
      tier: 'Silver'
    },
    {
      name: 'Slack',
      category: 'Collaboration',
      description: 'Team communication and collaboration tools',
      logo: 'Slack',
      tier: 'Silver'
    }
  ];

  const partnershipBenefits = [
  {
      title: 'Revenue Growth',
      description: 'Access to new markets and revenue streams through partner channels',
      icon: Target
    },
    {
      title: 'Technical Excellence',
      description: 'Leverage partner technologies to deliver superior solutions',
      icon: Award
    },
    {
      title: 'Market Expansion',
      description: 'Reach new geographic markets and customer segments',
      icon: Globe
    },
    {
      title: 'Innovation',
      description: 'Collaborate on cutting-edge solutions and emerging technologies',
      icon: Lightbulb
    }
  ];

  const partnershipProcess = [
  {
      step: '1',
      title: 'Initial Discussion',
      description: 'We discuss your business goals and how we can work together to achieve mutual success.'
    },
    {
      step: '2',
      title: 'Partnership Agreement',
      description: 'We formalize our partnership with clear terms, expectations, and mutual benefits.'
    },
    {
      step: '3',
      title: 'Training & Certification',
      description: 'We provide comprehensive training and certification programs for your team.'
    },
    {
      step: '4',
      title: 'Go-to-Market',
      description: 'We launch joint marketing initiatives and begin delivering solutions together.'
    }
>>>>>>> main
  ];

  return (
    <>
<<<<<<< HEAD
      <SEO
        title="Partners - Zion Tech Group"
        description="Join our partner network and grow your business with Zion Tech Group. Technology, solution, and channel partnerships available."
        keywords="partners, partnership, reseller, technology partners, channel partners, business partnership"
      />
=======
>>>>>>> main
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology, solution, and channel partnerships available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
<<<<<<< HEAD

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-500 text-white">
              <Handshake className="w-4 h-4 mr-2" />
              Partnership Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing partner network and unlock new opportunities for
              growth. Whether you&apos;re a technology company, solution
              provider, or channel partner, ' we have programs designed to help
              you succeed.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Button>
=======
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Partner With Us
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Join our ecosystem of innovative partners and grow your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="#benefits">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Partner Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support and resources to help our
              partners succeed and grow their business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover: shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
=======
        {/* Partnership Types */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Partnership Types
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership program that best fits your business model
              and goals.
=======
        {/* Current Partners */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Partners
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      partner.tier === 'Platinum' ? 'bg-yellow-100 text-yellow-800' :
                      partner.tier === 'Gold' ? 'bg-gray-100 text-gray-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{partner.category}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Partnership Benefits
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Why partner with Zion Tech Group?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Partnership Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                How to become a partner in 4 simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
>>>>>>> main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <a href="mailto:partners@ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                partners@ziontechgroup.com
              </a>
            </div>
          </div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card
                key={index}
                className="p-8 hover: shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our partner network today and start growing your business with
            Zion Tech Group. Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Contact Partnership Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>
=======
        </section>
      </main>
>>>>>>> main
    </>
  );
}
