import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { Handshake, Award, Users, Globe, Star, CheckCircle } from 'lucide-react';

const Partners: NextPage = () => {
=======
import { Handshake, Building, Globe, Award, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PartnersPage: NextPage = () => {
>>>>>>> main
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      partners: [
        {
          name: 'Microsoft',
<<<<<<< HEAD
          logo: '🏢',
          description: 'Cloud infrastructure and enterprise solutions',
          tier: 'Platinum'
        },
        {
          name: 'Amazon Web Services',
          logo: '☁️',
          description: 'Cloud computing and AI services',
          tier: 'Platinum'
        },
        {
          name: 'Google Cloud',
          logo: '🔍',
          description: 'AI/ML platforms and data analytics',
          tier: 'Gold'
        },
        {
          name: 'IBM',
          logo: '💼',
          description: 'Enterprise AI and blockchain solutions',
          tier: 'Gold'
        }
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Specialized partners that enhance our service offerings',
      partners: [
        {
          name: 'Salesforce',
          logo: '📊',
          description: 'CRM and customer experience solutions',
          tier: 'Silver'
        },
        {
          name: 'Oracle',
          logo: '🗄️',
          description: 'Database and enterprise applications',
          tier: 'Silver'
        },
        {
          name: 'SAP',
          logo: '📈',
          description: 'Enterprise resource planning solutions',
          tier: 'Silver'
        },
        {
          name: 'ServiceNow',
          logo: '⚙️',
          description: 'IT service management and automation',
          tier: 'Silver'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners, ensuring expert-level knowledge and implementation.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with our partners to deliver integrated solutions that leverage the best of each technology.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Through our partner network, we can serve clients worldwide with local expertise and global capabilities.'
    },
    {
      icon: Star,
      title: 'Innovation Access',
      description: 'Early access to new technologies and features through our strategic partnerships with industry leaders.'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      color: 'bg-gray-800',
      textColor: 'text-white',
      description: 'Strategic technology partners with deep integration and joint go-to-market initiatives.'
    },
    {
      name: 'Gold',
      color: 'bg-yellow-500',
      textColor: 'text-white',
      description: 'Key technology partners with significant collaboration and joint solution development.'
    },
    {
      name: 'Silver',
      color: 'bg-gray-400',
      textColor: 'text-white',
      description: 'Valued partners with proven track record of successful project delivery.'
=======
          logo: '/partners/microsoft.png',
          description: 'Azure cloud services and enterprise solutions',
          category: 'Cloud & Infrastructure'
        },
        {
          name: 'Amazon Web Services',
          logo: '/partners/aws.png',
          description: 'Comprehensive cloud computing platform',
          category: 'Cloud & Infrastructure'
        },
        {
          name: 'Google Cloud',
          logo: '/partners/google-cloud.png',
          description: 'AI/ML and data analytics solutions',
          category: 'AI & Analytics'
        },
        {
          name: 'Salesforce',
          logo: '/partners/salesforce.png',
          description: 'Customer relationship management platform',
          category: 'CRM & Business'
        }
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Companies that help us deliver comprehensive solutions to our clients',
      partners: [
        {
          name: 'Deloitte',
          logo: '/partners/deloitte.png',
          description: 'Digital transformation consulting',
          category: 'Consulting'
        },
        {
          name: 'Accenture',
          logo: '/partners/accenture.png',
          description: 'Technology and business consulting',
          category: 'Consulting'
        },
        {
          name: 'IBM',
          logo: '/partners/ibm.png',
          description: 'Enterprise software and services',
          category: 'Enterprise Solutions'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Expertise',
      description: 'Our partnerships ensure we maintain the highest standards of technical expertise and certification.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Access to worldwide resources and support networks through our partner ecosystem.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Best-in-Class Solutions',
      description: 'We leverage the best technologies and methodologies from industry leaders.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Direct access to partner support teams and specialized resources.'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Integration',
      description: 'Seamless integration with leading technology platforms',
      features: ['API Integration', 'Custom Connectors', 'Data Synchronization', 'Real-time Updates']
    },
    {
      title: 'Joint Solutions',
      description: 'Co-developed solutions that combine our expertise with partner technologies',
      features: ['Co-marketing', 'Joint Development', 'Shared Resources', 'Combined Support']
    },
    {
      title: 'Certification Programs',
      description: 'Certified professionals and solutions for enterprise-grade implementations',
      features: ['Technical Certifications', 'Solution Validation', 'Best Practices', 'Compliance Standards']
>>>>>>> main
    }
  ];

  return (
<<<<<<< HEAD
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Learn about Zion Tech Group's strategic partnerships with leading technology companies and how we deliver integrated solutions."
      keywords="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Handshake className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Partners</h1>
              <p className="text-xl text-gray-200 mb-8">
                We collaborate with industry leaders to deliver comprehensive technology solutions 
                that drive business success and innovation.
              </p>
=======
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Building powerful alliances with industry leaders to deliver comprehensive technology solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
              Become a Partner
            </Link>
            <Link href="/solutions" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver cutting-edge solutions and exceptional value to our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.partners.map((partner, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
                    <span className="text-zion-cyan font-medium">{partner.category}</span>
                  </div>
                  <p className="text-gray-600 text-center">{partner.description}</p>
                </div>
              ))}
>>>>>>> main
            </div>
          </div>
        </section>
      ))}

<<<<<<< HEAD
        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Partner with Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {partnerCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-4">{partner.logo}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                        <p className="text-gray-600 mb-4">{partner.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          partner.tier === 'Platinum' ? 'bg-gray-800 text-white' :
                          partner.tier === 'Gold' ? 'bg-yellow-500 text-white' :
                          'bg-gray-400 text-white'
                        }`}>
                          {partner.tier} Partner
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Partnership Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {partnershipTiers.map((tier, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-20 h-20 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className={`text-2xl font-bold ${tier.textColor}`}>{tier.name[0]}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{tier.name} Partner</h3>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                ))}
              </div>
            </div>
=======
      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various partnership models to meet different business needs and objectives
            </p>
>>>>>>> main
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Become a Partner */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-lg font-semibold mb-2">Access to Resources</h3>
                  <p className="text-blue-100">Training, certification, and marketing support</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-lg font-semibold mb-2">Joint Opportunities</h3>
                  <p className="text-blue-100">Collaborate on projects and expand your market reach</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-lg font-semibold mb-2">Technical Support</h3>
                  <p className="text-blue-100">Dedicated technical resources and expertise</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Partner with Us
                </a>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Partnership Team
                </a>
              </div>
            </div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our network of strategic partners and help us deliver exceptional technology solutions to clients worldwide
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Contact Partnership Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/solutions" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Our Solutions
            </Link>
>>>>>>> main
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PartnersPage;