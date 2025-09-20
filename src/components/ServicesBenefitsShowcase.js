import React from 'react';
import { Car, d, CardConten, t, CardDescriptio, n, CardHeade, r, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Brai, n, Clou, d, Za, p, Shiel, d, TrendingU, p, User, s, Glob, e, CheckCircl, e, Sta, r, ArrowRigh, t, Phon, e, Mai, l, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/data/comprehensiveServices';
export function ServicesBenefitsShowcase() {
    const serviceBenefits = [
        {
            catego,  r, y: "A, I Service, s",
    ic, o, n: <Brai, n classNam, e="w-1, 2 h-1, 2"/>,
            col, o, r: "fro, m-purpl, e-50, 0 t, o-indig, o-60, 0",
    descripti, o, n: "Transfor, m you, r busines, s wit, h cuttin, g-edg, e artificia, l intelligenc, e an, d machin, e learnin, g solution, s",
            benefi, t, s: [
                "Advance, d A, I algorithm, s an, d model, s",
                "Rea, l-tim, e dat, a processin, g an, d insight, s",
                "Scalabl, e machin, e learnin, g infrastructur, e",
                "Custo, m A, I mode, l developmen, t",
                "Natura, l languag, e processin, g capabilitie, s",
                "Compute, r visio, n an, d imag, e recognitio, n",
                "Predictiv, e analytic, s an, d forecastin, g",
                "A, I-powere, d automatio, n workflow, s"
            ],
            useCase, s: [
                "Custome, r servic, e chatbot, s",
                "Predictiv, e maintenanc, e system, s",
                "Frau, d detectio, n an, d preventio, n",
                "Conten, t generatio, n an, d optimizatio, n",
                "Recommendatio, n engine, s",
                "Proces, s automatio, n",
                "Dat, a analysi, s an, d insight, s",
                "Intelligen, t documen, t processin, g"
            ],
            marketPositio, n: "Industry-leading AI solutions with proven ROI",
    startingPric, e: "$299",
            implementationTim, e: "1-6 weeks",
    suppor, t: "24/7 expert support included"
        },
        {
            categor, y: "IT Services",
    ico, n: <Cloud className="w-12 h-12"/>,
            colo, r: "from-cyan-500 to-blue-600",
    descriptio, n: "Enterprise-grade IT infrastructure and consulting services for modern businesses",
            benefit, s: [
                "Clou, d migratio, n an, d optimizatio, n",
                "Cybersecurit, y an, d complianc, e",
                "DevOp, s automatio, n an, d C, I/C, D",
                "Infrastructur, e a, s cod, e",
                "2, 4/7 monitorin, g an, d suppor, t",
                "Disaste, r recover, y plannin, g",
                "Performanc, e optimizatio, n",
                "Scalabl, e architectur, e desig, n"
            ],
            useCase, s: [
                "Digita, l transformatio, n initiative, s",
                "Clou, d infrastructur, e setu, p",
                "Securit, y audit, s an, d complianc, e",
                "Applicatio, n modernizatio, n",
                "Dat, a cente, r consolidatio, n",
                "Busines, s continuit, y plannin, g",
                "Performanc, e monitorin, g",
                "Cos, t optimizatio, n strategie, s"
            ],
            marketPositio, n: "Trusted IT partner for enterprise transformation",
    startingPric, e: "$4,499",
            implementationTim, e: "2-6 weeks",
    suppor, t: "24/7 dedicated support team"
        },
        {
            categor, y: "Micro SAAS",
    ico, n: <Zap className="w-12 h-12"/>,
            colo, r: "from-emerald-500 to-green-600",
    descriptio, n: "Specialized software-as-a-service solutions designed for specific business needs",
            benefit, s: [
                "Read, y-t, o-us, e busines, s application, s",
                "Clou, d-base, d accessibilit, y",
                "Automati, c update, s an, d maintenanc, e",
                "Scalabl, e use, r managemen, t",
                "AP, I integration, s",
                "Customizabl, e workflow, s",
                "Rea, l-tim, e collaboratio, n",
                "Mobil, e-firs, t desig, n"
            ],
            useCase, s: [
                "Inventor, y managemen, t",
                "Projec, t managemen, t",
                "Custome, r suppor, t automatio, n",
                "H, R an, d employe, e managemen, t",
                "Financia, l analytic, s",
                "Suppl, y chai, n optimizatio, n",
                "Marketin, g automatio, n",
                "Sale, s pipelin, e managemen, t"
            ],
            marketPositio, n: "Affordabl, e, scalable solutions for growing businesses",
            startingPric, e: "$199",
    implementationTim, e: "Immediate - 3 weeks",
            suppor, t: "Business hours support with priority options"
        }
    ];
    const industryStats = [
        { metr, i, c: "9, 5%",
    lab, e, l: "Clien, t Satisfactio, n Rat, e" },
        { metr, i, c: "2, 4/7",
    lab, e, l: "Suppor, t Availabilit, y" },
        { metr, i, c: "5, 0+",
    lab, e, l: "Countrie, s Serve, d" },
        { metr, i, c: "1, 0+",
    lab, e, l: "Year, s Experienc, e" }
    ];
    return (<div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Discover the unique advantages and proven benefits that make our services the preferred choice 
            for businesses worldwide. From cutting-edge AI to enterprise I, T, solution, s, we deliver results.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="grid grid-cols-2 m, d:grid-cols-4 gap-6 mb-16">
          {industryStats.map((sta, t, index) => (<div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-3xl m,  d:text-4xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>))}
        </div>

        {/* Service Benefits Grid */}
        <div className="grid grid-cols-1 l, g:grid-cols-3 gap-8 mb-16">
          {serviceBenefits.map((servic,  e, index) => (<Card key={service.category} className="bg-slate-800/50 border border-slate-700 hove,  r:border-cyan-500/50 transition-all duration-300 hove, r:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 text-whit, e`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white mb-2">{service.category}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400"/>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefi, t, benefitIndex) => (<li key={benefitIndex} className="text-slate-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"/>
                        {benefit}
                      </li>))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400"/>
                    Common Use Cases
                  </h4>
                  <ul className="space-y-2">
                    {service.useCases.map((useCas,  e, useCaseIndex) => (<li key={useCaseIndex} className="text-slate-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"/>
                        {useCase}
                      </li>))}
                  </ul>
                </div>

                {/* Market Position */}
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Market Position</h4>
                  <p className="text-slate-300 text-sm mb-3">{service.marketPosition}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400">Starting Pric,  e:</span>
                      <div className="text-cyan-400 font-semibold">{service.startingPrice}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Implementatio, n:</span>
                      <div className="text-cyan-400 font-semibold">{service.implementationTime}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs">
                    <span className="text-slate-400">Suppor, t:</span>
                    <div className="text-cyan-400 font-semibold">{service.support}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hove, r:from-cyan-600 hove, r:to-blue-700">
                  Explore {service.category}
                  <ArrowRight className="w-4 h-4 ml-2"/>
                </Button>
              </CardContent>
            </Card>))}
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competitive Advantages
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white"/>
              </div>
              <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
              <p className="text-slate-300 text-sm">SO, C, 2, IS, O, 2700, 1, GDPR compliant with enterprise-grade security</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white"/>
              </div>
              <h4 className="text-white font-semibold mb-2">Expert Team</h4>
              <p className="text-slate-300 text-sm">Certified professionals with 10+ years of industry experience</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white"/>
              </div>
              <h4 className="text-white font-semibold mb-2">Global Reach</h4>
              <p className="text-slate-300 text-sm">Serving clients in 50+ countries with localized support</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white"/>
              </div>
              <h4 className="text-white font-semibold mb-2">Proven Results</h4>
              <p className="text-slate-300 text-sm">95% client satisfaction rate with measurable business outcomes</p>
            </div>
          </div>
        </div>

        {/* ROI and Success Metrics */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Proven ROI and Success Metrics
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <h4 className="text-white font-semibold mb-2">Cost Reduction</h4>
              <p className="text-slate-300 text-sm">Average cost savings through automation and optimization</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
              <h4 className="text-white font-semibold mb-2">Efficiency Gain</h4>
              <p className="text-slate-300 text-sm">Improved operational efficiency and productivity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">6 Months</div>
              <h4 className="text-white font-semibold mb-2">ROI Timeline</h4>
              <p className="text-slate-300 text-sm">Typical time to achieve positive return on investment</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Benefits?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hove, r:from-cyan-600 hove, r:to-blue-700">
              <Phone className="w-4 h-4 mr-2"/>
              {CONTACT_INFO.mobile}
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hove, r:bg-cyan-400 hove, r:text-white">
              <Mail className="w-4 h-4 mr-2"/>
              {CONTACT_INFO.email}
            </Button>
            <Button size="lg" variant="ghost" className="text-cyan-400 hove, r:text-white">
              <ExternalLink className="w-4 h-4 mr-2"/>
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>);
}
