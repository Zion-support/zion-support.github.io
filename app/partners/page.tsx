'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ExternalLink, Award, Users, Globe, Shield, Zap } from 'lucide-react'
const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Microsoft Azure',
      logo: '/images/partners/azure.png',
      description: 'Enterprise cloud solutions and AI platform',
      category: 'Cloud',
      website: 'https://azure.microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/gcp.png',
      description: 'AI and machine learning services',
      category: 'Cloud',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'AI computing and GPU solutions',
      category: 'Hardware',
      website: 'https://nvidia.com',
      tier: 'technology'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Technology',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'Software',
      website: 'https://salesforce.com',
      tier: 'technology'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Software',
      website: 'https://oracle.com',
      tier: 'technology'
    },
    {
      name: 'Cisco',
      logo: '/images/partners/cisco.png',
      description: 'Networking and cybersecurity solutions',
      category: 'Security',
      website: 'https://cisco.com',
      tier: 'technology'
    },
    {
      name: 'Dell Technologies',
      logo: '/images/partners/dell.png',
      description: 'Infrastructure and storage solutions',
      category: 'Hardware',
      website: 'https://dell.com',
      tier: 'technology'
    }
  ]
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Dedicated Support',
      description: 'Direct access to partner support teams and resources'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Global Reach',
      description: 'Leverage partner networks for worldwide deployment'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Compliance',
      description: 'Meet enterprise security and compliance requirements'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early product releases'
    }
  ]
  const tiers = {
    strategic: { label: 'Strategic Partner', color: 'from-cyan-400 to-purple-500' },
    technology: { label: 'Technology Partner', color: 'from-blue-400 to-cyan-500' }
  }
  return (
    <>
      <Helmet> </Helmet><title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>Our </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Partners</span>
              </h1>
              <p>We collaborate with industry leaders to deliver cutting-edge AI and IT solutions. 
                Our strategic partnerships enable us to provide the best technology and support for our clients.
              </p></p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p>Our strategic partnerships provide us with access to cutting-edge technology, 
                expert support, and global resources to better serve our clients.
              </p></p>
            </div>

            <div>{benefits.map((benefit, index) => (
                </div><div> </div><div>{benefit.icon}
                  </div></div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Technology Partners</h2>
              <p>We work with leading technology companies to deliver comprehensive solutions 
                that meet the diverse needs of our clients across various industries.
              </p></p>
            </div>

            <div>{partners.map((partner) => (
                </div><div> </div><div> </div><div> </div><span>{partner.name.charAt(0)}
                      </span></span>
                    </div>
                    <span>{tiers[partner.tier as keyof typeof tiers].label}
                    </span></span>
                  </div>
                  
                  <h3>{partner.name}
                  </h3></h3>
                  
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  
                  <div> </div><span className="text-sm text-cyan-400 font-medium">{partner.category}</span>
                    <a>Visit Website
                      </a><ExternalLink> </ExternalLink></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
              <p>We maintain different levels of partnerships based on the depth of collaboration 
                and mutual value creation.
              </p></p>
            </div>

            <div> </div><div> </div><div> </div><div> </div><Award> </Award></div>
                  <h3 className="text-2xl font-bold text-white">Strategic Partners</h3>
                </div>
                <p>Long-term partnerships with shared goals, joint go-to-market strategies, 
                  and deep technical integration.
                </p></p>
                <ul> </ul><li> </li><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Joint product development</span>
                  </li>
                  <li> </li><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Shared marketing initiatives</span>
                  </li>
                  <li> </li><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Priority support and resources</span>
                  </li>
                  <li> </li><div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span>Early access to new technologies</span>
                  </li>
                </ul>
              </div>

              <div> </div><div> </div><div> </div><Users> </Users></div>
                  <h3 className="text-2xl font-bold text-white">Technology Partners</h3>
                </div>
                <p>Technology-focused partnerships for integration, certification, 
                  and technical collaboration.
                </p></p>
                <ul> </ul><li> </li><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Technical integration support</span>
                  </li>
                  <li> </li><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Certification programs</span>
                  </li>
                  <li> </li><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Training and enablement</span>
                  </li>
                  <li> </li><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Co-marketing opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><h2>Interested in Partnering With Us?
            </h2></h2>
            <p>We're always looking for new technology partners who share our vision of 
              transforming businesses through innovative solutions.
            </p></p>
            <div> </div><a> </a><span className="relative z-10">Become a Partner</span>
                <div> </div></a>
              <a>Email Our Partnership Team
              </a></a>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default PartnersPage