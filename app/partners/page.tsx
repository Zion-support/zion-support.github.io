import React from "react"
import { Helmet } from "react-helmet-async"
import { } from "react-router-dom"
import { Circle, Right } from "lucide-react"
const PartnersPage: React.FC = () => {"
  const partners = [{
      name: ""Microsoft"",""
      logo: ""🏢"",""
      description: ""Strategic partnership for cloud and AI solutions"",""
      category: ""Technology""},"
    {
      name: ""Amazon Web Services"",""
      logo: ""☁️"",""
      description: ""infrastructure and AI services collaboration"",""
      category: """""},"
    {
      name: ""Google "",""
      logo: ""🔍"",""
      description: ""AI and machine learning platform integration"",""
      category: ""AI/ML""},"
    {
      name: ""IBM"",""
      logo: ""💼"",""
      description: ""Enterprise AI solutions and consulting"",""
      category: ""Enterprise""},"
    {
      name: ""Salesforce"",""
      logo: ""📊"",""
      description: ""CRM and business intelligence integration"",""
      category: ""CRM""},"
    {
      name: ""Oracle"",""
      logo: ""🗄️"",""
      description: ""and enterprise application solutions"",""
      category: """""}"
  ]
  const benefits = ["Access to cutting-edge technology",""
    "Joint go-to-market opportunities",""
    "Technical support and training",""
    "Co-marketing and co-selling programs",""
    "Priority access to new features",""
    "Dedicated partner success manager"""
  ]
  return (
    <>
      <Helmet>
        <title>Partners - Strategic Partnerships | Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, technical support, and joint go-to-market opportunities." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partners, partner program" />
      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-slate-90 via-purple-90 to-slate-90">;
        {/* Hero Section */};
        <section className="relative py-20 px-4">;
          <div className="max-w-7xl mx-auto text-center">;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              Our;
              <span className="block bg-gradient-to-r from-cyan-40 to-blue-50 bg-clip-text text-transparent">
                Partners;
              </span>
            </h$1>
            <p className="text-xl text-gray-30 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem of strategic partners and unlock new opportunities;
              for growth and innovation.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-50 to-blue-60 text-white rounded-xl font-semibold hover: from-cyan-60 hover:to-blue-70 transition-all duration-30 transform hover:scale-10o5 shadow-lg shadow-cyan-50"/25">
                Become a Partner;
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-50"/30 text-cyan-40 rounded-xl font-semibold hover:bg-cyan-50"/10 transition-all duration-30">
                Learn More;
              </button>
            </div>
          </div>
        </section>
        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Strategic Partners;
            </h$1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map(partner, _index) => (
                <div key={_index} className="bg-slate-80"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70"/50 hover:border-cyan-50"/50 transition-all duration-30">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h$1>
                    <p className="text-cyan-40 text-sm mb-3">{partner.category}</p>
                    <p className="text-gray-30 text-sm">{partner.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-80"/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Partner Benefits;
            </h$1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map(benefit, _index) => (
                <div key={_index} className="flex items-center space-x-4 bg-slate-80"/30 backdrop-blur-sm rounded-xl p-6 border border-slate-70"/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-50 to-blue-60 flex items-center justify-center flex-shrink-0">
                    <Circle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-30 font-medium">{benefit}</span>
                </div>)}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?;
            </h$1>
            <p className="text-xl text-gray-30 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-50 to-blue-60 text-white rounded-xl font-semibold hover: from-cyan-60 hover:to-blue-70 transition-all duration-30 transform hover:scale-10o5 shadow-lg shadow-cyan-50"/25">
                Apply Now;
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-50"/30 text-cyan-40 rounded-xl font-semibold hover:bg-cyan-50"/10 transition-all duration-30">
                Contact Us;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )}export default PartnersPage};
export default PartnersPage;""
