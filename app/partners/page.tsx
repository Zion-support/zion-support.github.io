import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Globe, Users, Award, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "🏢",
      description: "Cloud infrastructure and AI solutions",
      category: "Technology Partner"
    },
    {
      name: "Amazon Web Services",
      logo: "☁️",
      description: "Cloud computing and data analytics",
      category: "Cloud Partner"
    },
    {
      name: "Google Cloud",
      logo: "🔍",
      description: "AI/ML and data processing solutions",
      category: "AI Partner"
    },
    {
      name: "IBM",
      logo: "💼",
      description: "Enterprise solutions and consulting",
      category: "Enterprise Partner"
    },
    {
      name: "Salesforce",
      logo: "📊",
      description: "CRM and business automation",
      category: "Business Partner"
    },
    {
      name: "Oracle",
      logo: "🗄️",
      description: "Database and enterprise software",
      category: "Database Partner"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Access to our worldwide network of partners and clients"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "24/7 support from our expert team and partner network"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Solutions",
      description: "Industry-certified solutions and best practices"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Enterprise-grade security and compliance standards"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Technology & Business Partnership Program | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's partner program. Access cutting-edge AI and IT solutions, expand your business reach, and grow with our comprehensive partnership ecosystem." />
        <meta name="keywords" content="technology partners, business partnership, AI solutions, IT services, partner program, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 quantum-field-bg">
        <div className="holographic-grid">
          <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold mb-6 text-cyberpunk">
                Partner with Us
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our ecosystem of technology partners and unlock new opportunities 
                to grow your business with cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-quantum">
                  Become a Partner
                </button>
                <button className="btn-holographic">
                  View Partner Portal
                </button>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk">
                Our Technology Partners
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="holographic-card hover-quantum p-6 text-center">
                    <div className="text-6xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{partner.name}</h3>
                    <p className="text-gray-300 mb-3">{partner.description}</p>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk">
                Partner Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="holographic-card hover-quantum p-6 text-center">
                    <div className="text-cyan-400 mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Tiers */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-center mb-12 text-cyberpunk">
                Partnership Tiers
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Silver Tier */}
                <div className="holographic-card p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Silver Partner</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">Free</div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ Basic partner resources</li>
                    <li>✓ Marketing materials</li>
                    <li>✓ Training access</li>
                    <li>✓ Email support</li>
                  </ul>
                  <button className="btn-quantum w-full">Get Started</button>
                </div>

                {/* Gold Tier */}
                <div className="holographic-card p-8 text-center border-2 border-yellow-400 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Gold Partner</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">$500<span className="text-lg">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ All Silver benefits</li>
                    <li>✓ Priority support</li>
                    <li>✓ Co-marketing opportunities</li>
                    <li>✓ Dedicated account manager</li>
                    <li>✓ Custom integrations</li>
                    <li>✓ Revenue sharing</li>
                  </ul>
                  <button className="btn-holographic w-full">Get Started</button>
                </div>

                {/* Platinum Tier */}
                <div className="holographic-card p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-cyberpunk">Platinum Partner</h3>
                  <div className="text-4xl font-bold mb-4 neon-glow-advanced">Custom</div>
                  <ul className="text-left space-y-3 mb-8">
                    <li>✓ All Gold benefits</li>
                    <li>✓ White-label solutions</li>
                    <li>✓ Custom development</li>
                    <li>✓ 24/7 dedicated support</li>
                    <li>✓ Joint go-to-market</li>
                    <li>✓ Strategic planning</li>
                  </ul>
                  <button className="btn-quantum w-full">Contact Sales</button>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center holographic-card p-12">
              <h2 className="text-4xl font-bold mb-6 text-cyberpunk">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our growing network of technology partners and unlock new opportunities 
                to expand your business with innovative AI and IT solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-holographic text-lg px-8 py-4">
                  Apply Now
                </button>
                <button className="btn-quantum text-lg px-8 py-4">
                  Download Partner Kit
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No commitment required • Quick approval process • Start earning immediately
              </p>
            </div>

            {/* Contact Information */}
            <div className="text-center mt-16 text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
              <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
