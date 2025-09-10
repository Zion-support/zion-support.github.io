const \"Home\": NextPage = () => {
import React, { memo } from 'react' 
import Link from 'next/link' 
import Navigation from '../components/Navigation' 
import Footer from '../components/Footer' 
import SEOHead from '../components/seo/SEOHead' 
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Brain, Server, Smartphone, Globe, Zap, Shield, Users } from 'lucide-react' 
const Home = memo(() => {
  const structuredData = {
    "@context": ""https": //schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": ""https": //ziontechgroup.com",
    "logo": ""https": //ziontechgroup.com/logo.png",
    "description": "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [""https": //ziontechgroup.com"
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Technology Services",
    "services": ["AI Services",
      "IT Solutions",
      "Micro SaaS Development",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Digital Transformation"
    ]
  } as const 
  const stats = [{ "number": '500+', "label": 'Projects Completed' },
    { "number": '50+', "label": 'Happy Clients' },
    { "number": '99.9%', "label": 'Uptime Guarantee' },
    { "number": '24/7', "label": 'Support Available' }
  ];    },
    {
      \"title\": \'Blockchain Solutions\',
      \"description\": \'Decentralized applications and smart contract development.\',
      \"icon\": \'⛓️\',
      \"href\": \'/services/blockchain\'
    },
    {
      \"title\": \'Cybersecurity\',
      \"description\": \'Comprehensive security solutions to protect your digital assets.\',
      \"icon\": \'🔒\',
      \"href\": \'/services/cybersecurity\'
    }
  ] 
  const features = [{
      \"title\": \'Expert Team\',
      \"description\": \'Experienced developers and consultants with deep industry knowledge.\',
      \"icon\": Users
    },
    {
      \"title\": \'Quality Assurance\',
      \"description\": \'Rigorous testing and quality control processes for reliable solutions.\',
      \"icon\": CheckCircle
    },
    {
      \"title\": \'Fast Delivery\',
      \"description\": \'Agile development methodology ensuring timely project completion.\',
      \"icon\": Clock
    },
    {
      \"title\": \'Security First\',
      \"description\": \'Built-in security measures to protect your data and applications.\',
      \"icon\": Shield
    }
  ] 
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center\">
            <h1 className=\"text-5xl md:text-6xl font-bold mb-6\">
              Transform Your Business with
              <span className=\"text-blue-400\"> Zion Tech Group</span>
            </h1>
            <p className=\"text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200\">
              Leading technology solutions provider helping businesses innovate and grow 
              with cutting-edge AI, cloud architecture, and digital transformation services.
            </p>
            <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center\">
              <Link
                href=\"/contact\"
                className=\"bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center\"
              >
                Get Started Today
                <ArrowRight className=\"ml-2 h-5 w-5\" />
              </Link>
              <Link
                href=\"/services\"
                className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className=\"py-20 bg-gray-50\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">
              Our Services
            </h2>
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className=\"py-20\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center\">
            <div>
              <h2 className=\"text-4xl font-bold text-gray-900 mb-6\">
                About Zion Tech Group
              </h2>
              <p className=\"text-lg text-gray-600 mb-6\">
                We are a team of passionate technologists dedicated to helping businesses 
                leverage the power of modern technology to achieve their goals. With years 
                of experience across various industries, we understand the unique challenges 
                that organizations face in today\'s digital landscape.
              </p>
              <p className=\"text-lg text-gray-600 mb-8\">
                Our mission is to deliver innovative, scalable, and secure technology 
                solutions that drive business growth and operational efficiency.
              </p>
              <Link
                href=\"/about\"
                className=\"bg-blue-600 \"hover\": bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center\"
              >
                Learn More About Us
                <ArrowRight className=\"ml-2 h-4 w-4\" />
              </Link>
            </div>
            <div className=\"bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8\">
              <div className=\"grid grid-cols-2 gap-6\">
                {features.map((feature) => (
                  <div key={feature.title} className=\"text-center\">
                    <div className=\"bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3\">
                      <feature.icon className=\"h-6 w-6\" />
                    </div>
                    <h3 className=\"font-semibold text-gray-900 mb-2\">
                      {feature.title}
                    </h3>
                    <p className=\"text-sm text-gray-600\">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=\"py-20 bg-blue-600 text-white\">
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8 text-center\">
          <h2 className=\"text-4xl font-bold mb-6\">
            Ready to Transform Your Business?
          </h2>
          <p className=\"text-xl mb-8 max-w-3xl mx-auto\">
            Let\'s discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
            <Link
              href=\"/contact\"
              className=\"bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              Get Free Consultation
            </Link>
            <Link
              href=\"/services\"
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors\"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
});
export default Home;
   import React,{ memo } from 'react';  import type { NextPage } from 'next'; import EnhancedLayout from '../components/layout/EnhancedLayout';
