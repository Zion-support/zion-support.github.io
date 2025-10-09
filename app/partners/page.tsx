import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      category: "Cloud Platform",
      description: "Strategic partnership for Azure AI services and enterprise solutions",
      logo: "🔷"
    },
    {
      name: "Amazon Web Services",
      category: "Cloud Infrastructure",
      description: "AWS partnership for scalable cloud computing and AI services",
      logo: "🟠"
    },
    {
      name: "Google Cloud",
      category: "AI & Machine Learning",
      description: "Google Cloud AI partnership for advanced ML and analytics",
      logo: "🔵"
    },
    {
      name: "IBM",
      category: "Quantum Computing",
      description: "IBM Quantum partnership for quantum computing solutions",
      logo: "🔵"
    },
    {
      name: "NVIDIA",
      category: "AI Hardware",
      description: "NVIDIA partnership for GPU-accelerated AI computing",
      logo: "🟢"
    },
    {
      name: "Salesforce",
      category: "CRM Integration",
      description: "Salesforce partnership for AI-powered customer solutions",
      logo: "🔵"
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Strategic alliances with leading technology providers to deliver cutting-edge solutions",
      benefits: [
        "Access to latest technologies and platforms",
        "Joint go-to-market opportunities",
        "Technical support and training",
        "Co-marketing and co-selling programs"
      ]
    },
    {
      title: "Solution Partners",
      description: "Collaborative partnerships to develop integrated solutions for specific industries",
      benefits: [
        "Industry-specific expertise",
        "Integrated solution development",
        "Shared resources and knowledge",
        "Expanded market reach"
      ]
    },
    {
      title: "Channel Partners",
      description: "Distribution partnerships to expand our market presence and reach",
      benefits: [
        "Reseller and referral programs",
        "Marketing support and materials",
        "Training and certification programs",
        "Competitive pricing and incentives"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our Partners
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Strategic partnerships with industry leaders to deliver comprehensive AI and technology solutions.
            </p>
          </div>

          {/* Current Partners */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Strategic Partners</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                    <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>
                    <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Opportunities</h2>
            <div className="space-y-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="cyber-card">
                  <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Partner With Us */}
          <section className="mb-16">
            <div className="cyber-card hologram-card">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Partner With Zion Tech Group?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation Leader</h3>
                  <p className="text-gray-300 text-sm">Cutting-edge AI and quantum computing solutions</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300 text-sm">$2.5B+ in client savings and 99.9% uptime</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300 text-sm">Serving enterprise clients worldwide</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Collaborative</h3>
                  <p className="text-gray-300 text-sm">Strong support and joint development</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and innovation. 
              Let's work together to transform businesses with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?subject=Partnership Inquiry"
                className="cyber-button"
              >
                Partner With Us
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;