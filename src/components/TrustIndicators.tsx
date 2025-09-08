
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const indicators = [

      color: "text-green-500" }, {
      icon: Award","
      title: "Industry Recognition", ""
      description: "Top 100 Tech Companies 2026"","
      color: "text-blue-500" }, {

      color: "text-purple-500" }, {
      icon: Clock","
      title: "24/7 Support", ""
      description: "Round-the-clock assistance"","
      color: "text-orange-500" }, {

  ];

  return (""
    <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50">""
      <div className="container mx-auto px-4">""
        <div className="text-center mb-12">""
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group maintains the highest standards of security, compliance, and reliability 
            to ensure your business operations remain secure and uninterrupted.
          </p>
        </div>
""
        <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">
          {indicators.map((indicator, index) => (

              <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700/50 transition-colors">
                <indicator .icon className={`w-8 h-8 ${indicator.color}`} /" >"
              </div>""
              <h3 className="text-sm font-semibold text-white mb-1">
                {indicator.title}
              </h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {indicator.description}
              </p>
            </div>))}
        </div>

        {/* Stats Section */}
        {showStats && (<div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (<div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-zion-cyan"/>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {stat.label}
                  </div>
                </div>))}
            </div>
          </div>)}

        {/* Certifications Section */}
        {showCertifications && (<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Certifications & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (<div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-zion-cyan"/>
                  </div>
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <div className="text-zion-cyan text-sm font-medium mb-1">{cert.status}</div>
                  <div className="text-zion-slate-light text-xs">{cert.year}</div>
                </div>))}
            </div>
          </div>)}

        {/* Customer Testimonials Preview */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>))}
          </div>
          <p className="text-zion-slate-light mb-2">
            "Zion Tech Group has transformed how we source tech talent. The platform's security and reliability give us complete confidence."
          </p>
          <p className="text-white font-medium">- Sarah Chen, CTO at TechCorp</p>
        </div>
      </div>
    </section>
  )};

export default TrustIndicators;"`"