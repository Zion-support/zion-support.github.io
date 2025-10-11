import React from 'react';
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {Shield;, Eye, Database, Server, Mail, Phone, MapPin, CheckCircle, User, Edit, Trash2} from 'lucide-react'
const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {; } category: 'Personal Information'},;,
icon: User,;,
description: 'Name, email, phone number, and other identifying information'
    },
    {;,
category: 'Contact Information',;,
icon: Database,;,
description: 'Name, email, phone number, and contact details'} ,
    {;,
category: 'Usage Data',;,
icon: Server,;,
description: 'How you interact with our services and website'} ,
    {;,
category: 'Technical Data',;,
icon: Server,;,
description: 'IP address, browser type, device information, and cookies'} ]

const purposes = [
    {;,
title: 'Service Provision',;,
description: 'To provide and maintain our AI and IT services',;,
icon: CheckCircle} ,
    {;,
title: 'Communication',;,
description: 'To respond to inquiries and provide customer support',;,
icon: CheckCircle} ,
    {;,
title: 'Improvement',;,
description: 'To analyze usage patterns and improve our services',;,
icon: CheckCircle} ,
    {;,
title: 'Legal Compliance',;,
description: 'To comply with applicable laws and regulations',;,
icon: CheckCircle} ]

const rights = [
    {;,
title: 'Access',;,
description: 'Request access to your personal data',;,
icon: Eye} ,
    {;,
title: 'Rectification',;,
description: 'Correct inaccurate or incomplete data',;,
icon: Edit} ,
    {;,
title: 'Erasure',;,
description: 'Request deletion of your personal data',;,
icon: Trash2} ,
    {;,
title: 'Portability',;,
description: 'Receive your data in a structured format',;,
icon: Database} ]

const contactInfo={;;,
email: 'privacy@ziontechgroup.com',;,
phone: '+1 (302) 464-0950',;,
address: '364 E Main St STE 1008, Middletown, DE 19709'} const contactInfo={;;,
email: 'privacy@ziontechgroup.com',;,
phone: '+1 (302) 464-0950',;,
address: '364 E Main St STE 1008, Middletown, DE 19709'} return (
    <>

    <div>
        <title>Privacy Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions for modern businesses."
      </Helmet>
      
      <Navigation />
      {/* Hero Section */}

      <section className="
    g: px-8"
        <div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div>
            <Shield />
            <span className="font-semibold">Last updated: {new Date().toLocaleDateString()}</span>
          </div>
      
      <Footer />
    </>
        </div>
      
      <Footer />
    </>
      </section>

      {/* Data Collection Section */}

      <section className="py-16 px-4 sm: px-6 lg: px-8"
        <div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"
We collect information to provide better services to our users
            </p>
          </div>
      
      <Footer />
    </>
          <div>
            {dataTypes.map((type), index) => (
              <div>
      <Footer />
    </>
                <h3 className="text-xl font-bold text-white mb-4">{type.category}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
      
      <Footer />
    </>
            ))}

          </div>
      
      <Footer />
    </>
        </div>
      
      <Footer />
    </>
      </section>

      {/* Purposes Section */}

      <section className="
    g: px-8"
        <div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"
We use your information for specific, legitimate purposes
            </p>
          </div>
      
      <Footer />
    </>
          <div>
            {purposes.map((purpose), index) => (
              <div>
                  </div>
      
      <Footer />
    </>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2"
                    <p className="text-gray-300"
                  </div>
      
      <Footer />
    </>
                </div>
      
      <Footer />
    </>
              </div>
      
      <Footer />
    </>
            ))}

          </div>
      
      <Footer />
    </>
        </div>
      
      <Footer />
    </>
      </section>

      {/* Rights Section */}

      <section className="py-16 px-4 sm: px-6 lg: px-8"
        <div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"
You have control over your personal data
            </p>
          </div>
      
      <Footer />
    </>
          <div>
            {rights.map((right), index) => (
              <div>
      <Footer />
    </>
                <h3 className="text-xl font-bold text-white mb-4">{right.title}</h3>
                <p className="text-gray-300">{right.description}</p>
              </div>
      
      <Footer />
    </>
            ))}

          </div>
      
      <Footer />
    </>
        </div>
      
      <Footer />
    </>
      </section>

      {/* Contact Section */}

      <section className="py-16 px-4 sm: px-6 lg: px-8"
        <div>
            <p className="text-xl text-gray-300 mb-8"
Contact our privacy team for any questions or concerns about your data
            </p>
            
            <div>
      <Footer />
    </>
              <div>
                <Phone />
                <span className="text-white">{contactInfo.phone}</span>
              </div>
      
      <Footer />
    </>
              <div>
                <MapPin />
                <span className="text-white text-sm">{contactInfo.address}</span>
              </div>
      
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">;
Contact Privacy Team
            </button>
          </div>
      
      <Footer />
    </>
        </div>
      
      <Footer />
    </>
      </section>

        <section className="py-20"
          <div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Discover the powerful features that make our solutions stand out.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g: grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div>
                  <p className="text-gray-600 mb-4"
                  <ul className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600"
                        <CheckCircle />
                        {benefit}

                      </li>
                    ))}

                  </ul>
              ))}

            </div>

        <section className="py-20 bg-gray-100"
          <div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Experience the benefits of working with industry leaders.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g: grid-cols-3 gap-8"
              {benefits.map((benefit, index) => (
                <div>
              ))}

            </div>

        <section className="py-20"
          <div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div>
              <button className="
    ,
    r: bg-blue-600 hove, r: text-white transition-colors"
                Schedule Demo
              </button>
      
      <Footer />
    </div>
      
      <Footer />
    </>
  )
}

export default PrivacyPage

            </Navigation>
