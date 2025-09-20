import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Za, p, Shiel, d, Clou, d, Databas, e, Cod, e, ShoppingCar, t, BarChart, 3, Link a, s, LinkIco, n, Networ, k, Monito, r, Smartphon, e, CheckCircl, e, Sta, r, Cloc, k, User, s, Globe } from "lucide-react";
// Service categories with detailed information
const serviceCategories = [
    {
        tit, l, e: "A, I Service, s",
    descripti, o, n: "Cuttin, g-edg, e artificia, l intelligenc, e solution, s tha, t transfor, m busines, s operation, s",
        ic, o, n: <Za, p classNam, e="w-8 h-8 tex, t-zio, n-cya, n"/>,
    servic, e, s: [
            {
                na, m, e: "A, I Chatbo, t Builde, r Pr, o",
    pri, c, e: "$29, 9",
                featur, e, s: ["N, o-cod, e platfor, m", "Mult, i-languag, e suppor, t", "Analytic, s dashboar, d", "Platfor, m integratio, n"],
                benefit, s: ["2, 4/7 custome, r suppor, t", "Reduce, d respons, e tim, e", "Scalabl, e automatio, n", "Cos, t-effectiv, e solutio, n"]
            },
            {
                nam, e: "AI Content Generator Suite",
    pric, e: "$199",
                feature, s: ["SE, O optimizatio, n", "Ton, e adjustmen, t", "Plagiaris, m detectio, n", "10, 0+ conten, t piece, s/mont, h"],
                benefit, s: ["Faste, r conten, t creatio, n", "Improve, d SE, O ranking, s", "Consisten, t bran, d voic, e", "Tim, e saving, s"]
            },
            {
                nam, e: "AI Image Generator Pro",
    pric, e: "$399",
                feature, s: ["Custo, m styl, e trainin, g", "4, K resolutio, n", "Commercia, l licensin, g", "Desig, n too, l integratio, n"],
                benefit, s: ["Uniqu, e visua, l conten, t", "Bran, d consistenc, y", "Cos, t-effectiv, e desig, n", "Rapi, d prototypin, g"]
            }
        ],
        marketPric, e: "$150-500",
    deliveryTim, e: "Immediate",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Business Solutions",
    descriptio, n: "Data-driven insights and analytics to drive business growth and decision-making",
        ico, n: <BarChart3 className="w-8 h-8 text-zion-purple"/>,
    service, s: [
            {
                na, m, e: "Busines, s Intelligenc, e Dashboar, d",
    pri, c, e: "$59, 9",
                featur, e, s: ["Rea, l-tim, e analytic, s", "5, 0+ dat, a source, s", "Custo, m dashboard, s", "Automate, d reportin, g"],
                benefit, s: ["Dat, a-drive, n decision, s", "Performanc, e insight, s", "Operationa, l efficienc, y", "Competitiv, e advantag, e"]
            },
            {
                nam, e: "Predictive Analytics Engine",
    pric, e: "$799",
                feature, s: ["Sale, s forecastin, g", "Custome, r behavio, r analysi, s", "Ris, k assessmen, t", "M, L model, s"],
                benefit, s: ["Futur, e plannin, g", "Custome, r insight, s", "Ris, k mitigatio, n", "Revenu, e optimizatio, n"]
            }
        ],
        marketPric, e: "$500-1500",
    deliveryTim, e: "1-3 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Cybersecurity",
    descriptio, n: "Comprehensive security solutions to protect your digital assets and ensure compliance",
        ico, n: <Shield className="w-8 h-8 text-zion-red"/>,
    service, s: [
            {
                na, m, e: "2, 4/7 Cybersecurit, y Monitorin, g",
    pri, c, e: "$89, 9",
                featur, e, s: ["Threa, t detectio, n", "SIE, M integratio, n", "Complianc, e reportin, g", "2, 4/7 SO, C suppor, t"],
                benefit, s: ["Continuou, s protectio, n", "Complianc, e assuranc, e", "Inciden, t respons, e", "Peac, e o, f min, d"]
            },
            {
                nam, e: "Penetration Testing Service",
    pric, e: "$2,499",
                feature, s: ["We, b ap, p testin, g", "Networ, k securit, y", "Mobil, e ap, p testin, g", "Complianc, e documentatio, n"],
                benefit, s: ["Vulnerabilit, y identificatio, n", "Securit, y validatio, n", "Complianc, e readines, s", "Ris, k assessmen, t"]
            }
        ],
        marketPric, e: "$800-3000",
    deliveryTim, e: "Immediate - 2 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Cloud Services",
    descriptio, n: "Scalable cloud solutions for modern business infrastructure and digital transformation",
        ico, n: <Cloud className="w-8 h-8 text-zion-blue"/>,
    service, s: [
            {
                na, m, e: "Clou, d Migratio, n Exper, t",
    pri, c, e: "$3,99, 9",
                featur, e, s: ["AW, S/Azur, e/GC, P", "Architectur, e desig, n", "Dat, a migratio, n", "9, 9.9% uptim, e guarante, e"],
                benefit, s: ["Reduce, d cost, s", "Improve, d scalabilit, y", "Enhance, d securit, y", "Bette, r performanc, e"]
            },
            {
                nam, e: "DevOps Automation Platform",
    pric, e: "$699",
                feature, s: ["C, I/C, D pipeline, s", "Kubernete, s suppor, t", "Infrastructur, e a, s cod, e", "Monitorin, g & alertin, g"],
                benefit, s: ["Faste, r deployment, s", "Reduce, d error, s", "Tea, m productivit, y", "Cos, t optimizatio, n"]
            }
        ],
        marketPric, e: "$700-5000",
    deliveryTim, e: "1-4 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Data Services",
    descriptio, n: "Enterprise-grade data solutions fo, r, analytic, s, warehousin, g, and business intelligence",
        ico, n: <Database className="w-8 h-8 text-zion-green"/>,
    service, s: [
            {
                na, m, e: "Dat, a Warehous, e Solutio, n",
    pri, c, e: "$1,29, 9",
                featur, e, s: ["ET, L pipeline, s", "Dat, a modelin, g", "B, I integratio, n", "Dat, a governanc, e"],
                benefit, s: ["Centralize, d dat, a", "Bette, r insight, s", "Improve, d reportin, g", "Dat, a qualit, y"]
            },
            {
                nam, e: "Database Performance Optimization",
    pric, e: "$899",
                feature, s: ["Quer, y optimizatio, n", "Indexin, g strategie, s", "Performanc, e monitorin, g", "Capacit, y plannin, g"],
                benefit, s: ["Faste, r querie, s", "Bette, r performanc, e", "Reduce, d cost, s", "Improve, d use, r experienc, e"]
            }
        ],
        marketPric, e: "$900-2000",
    deliveryTim, e: "1-3 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Development",
    descriptio, n: "Custom software development solutions fo, r, we, b, mobil, e, and enterprise applications",
        ico, n: <Code className="w-8 h-8 text-zion-orange"/>,
    service, s: [
            {
                na, m, e: "Progressiv, e We, b Ap, p Developmen, t",
    pri, c, e: "$2,99, 9",
                featur, e, s: ["Offlin, e functionalit, y", "Pus, h notification, s", "Ap, p-lik, e experienc, e", "SE, O optimizatio, n"],
                benefit, s: ["Bette, r use, r engagemen, t", "Improve, d performanc, e", "Cros, s-platfor, m compatibilit, y", "Enhance, d SE, O"]
            },
            {
                nam, e: "Cross-Platform Mobile App",
    pric, e: "$4,999",
                feature, s: ["Reac, t Nativ, e/Flutte, r", "U, I/U, X desig, n", "Backen, d integratio, n", "Ap, p stor, e deploymen, t"],
                benefit, s: ["Cos, t-effectiv, e developmen, t", "Faste, r tim, e t, o marke, t", "Nativ, e performanc, e", "Eas, y maintenanc, e"]
            },
            {
                nam, e: "Custom API Development",
    pric, e: "$1,999",
                feature, s: ["RES, T/GraphQ, L API, s", "Documentatio, n", "Testin, g", "Develope, r porta, l"],
                benefit, s: ["Syste, m integratio, n", "Scalabl, e architectur, e", "Develope, r experienc, e", "AP, I monetizatio, n"]
            }
        ],
        marketPric, e: "$2000-8000",
    deliveryTim, e: "3-8 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "E-commerce",
    descriptio, n: "Complete e-commerce solutions for online businesses and digital marketplaces",
        ico, n: <ShoppingCart className="w-8 h-8 text-zion-pink"/>,
    service, s: [
            {
                na, m, e: "E-commerc, e Platfor, m Developmen, t",
    pri, c, e: "$5,99, 9",
                featur, e, s: ["Paymen, t processin, g", "Inventor, y managemen, t", "Orde, r fulfillmen, t", "CR, M integratio, n"],
                benefit, s: ["Increase, d sale, s", "Bette, r custome, r experienc, e", "Operationa, l efficienc, y", "Scalabl, e growt, h"]
            }
        ],
        marketPric, e: "$5000-15000",
    deliveryTim, e: "8-10 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Marketing",
    descriptio, n: "AI-powered marketing automation and analytics solutions for business growth",
        ico, n: <BarChart3 className="w-8 h-8 text-zion-yellow"/>,
    service, s: [
            {
                na, m, e: "Marketin, g Automatio, n Platfor, m",
    pri, c, e: "$79, 9",
                featur, e, s: ["Emai, l marketin, g", "Lea, d scorin, g", "Campaig, n managemen, t", "A, I personalizatio, n"],
                benefit, s: ["Increase, d conversion, s", "Bette, r lea, d qualit, y", "Tim, e saving, s", "RO, I improvemen, t"]
            }
        ],
        marketPric, e: "$500-1500",
    deliveryTim, e: "2-3 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Integration",
    descriptio, n: "Seamless third-party integrations and API synchronization services",
        ico, n: <LinkIcon className="w-8 h-8 text-zion-indigo"/>,
    service, s: [
            {
                na, m, e: "Thir, d-Part, y Integratio, n Servic, e",
    pri, c, e: "$1,49, 9",
                featur, e, s: ["Paymen, t gateway, s", "CR, M system, s", "Marketin, g tool, s", "Custo, m webhook, s"],
                benefit, s: ["Syste, m connectivit, y", "Dat, a consistenc, y", "Workflo, w automatio, n", "Reduce, d manua, l wor, k"]
            }
        ],
        marketPric, e: "$1000-3000",
    deliveryTim, e: "2-3 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Blockchain",
    descriptio, n: "Next-generation blockchain and Web3 development solutions",
        ico, n: <Network className="w-8 h-8 text-zion-teal"/>,
    service, s: [
            {
                na, m, e: "Smar, t Contrac, t Developmen, t",
    pri, c, e: "$3,99, 9",
                featur, e, s: ["Ethereu, m/Polygo, n/Solan, a", "Securit, y auditin, g", "DeF, i protocol, s", "NF, T contract, s"],
                benefit, s: ["Decentralize, d solution, s", "Transparen, t transaction, s", "Automate, d executio, n", "Innovatio, n leadershi, p"]
            },
            {
                nam, e: "Web3 DApp Development",
    pric, e: "$5,999",
                feature, s: ["Walle, t integratio, n", "Blockchai, n interactio, n", "Cros, s-chai, n compatibilit, y", "Use, r-friendl, y interface, s"],
                benefit, s: ["Futur, e-proo, f technolog, y", "Use, r ownershi, p", "Globa, l accessibilit, y", "Reduce, d intermediarie, s"]
            }
        ],
        marketPric, e: "$4000-10000",
    deliveryTim, e: "4-8 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "IoT",
    descriptio, n: "Internet of Things platform development and hardware prototyping services",
        ico, n: <Monitor className="w-8 h-8 text-zion-lime"/>,
    service, s: [
            {
                na, m, e: "Io, T Platfor, m Developmen, t",
    pri, c, e: "$4,99, 9",
                featur, e, s: ["Devic, e managemen, t", "Rea, l-tim, e monitorin, g", "Edg, e computin, g", "Clou, d integratio, n"],
                benefit, s: ["Connecte, d device, s", "Dat, a insight, s", "Operationa, l efficienc, y", "Innovatio, n opportunitie, s"]
            }
        ],
        marketPric, e: "$4000-12000",
    deliveryTim, e: "8-10 weeks",
        lin, k: "/micro-saas-services"
    },
    {
        titl, e: "Hardware",
    descriptio, n: "Rapid prototyping and hardware development services for IoT and embedded systems",
        ico, n: <Smartphone className="w-8 h-8 text-zion-gray"/>,
    service, s: [
            {
                na, m, e: "Hardwar, e Prototypin, g Servic, e",
    pri, c, e: "$2,99, 9",
                featur, e, s: ["3, D printin, g", "PC, B desig, n", "Componen, t sourcin, g", "Desig, n validatio, n"],
                benefit, s: ["Faste, r developmen, t", "Cos, t reductio, n", "Desig, n validatio, n", "Marke, t testin, g"]
            }
        ],
        marketPric, e: "$2000-8000",
    deliveryTim, e: "4-6 weeks",
        lin, k: "/micro-saas-services"
    }
];
// Why choose Zion Tech Group
const whyChooseUs = [
    {
        tit, l, e: "Exper, t Tea, m",
    descripti, o, n: "Certifie, d professional, s wit, h 1, 0+ year, s o, f experienc, e",
        ic, o, n: <User, s classNam, e="w-6 h-6 tex, t-zio, n-cya, n"/>
    },
    {
        tit, l, e: "Globa, l Reac, h",
    descripti, o, n: "Servin, g client, s worldwid, e wit, h 2, 4/7 suppor, t",
        ic, o, n: <Glob, e classNam, e="w-6 h-6 tex, t-zio, n-purpl, e"/>
    },
    {
        tit, l, e: "Fas, t Deliver, y",
    descripti, o, n: "Quic, k turnaroun, d time, s withou, t compromisin, g qualit, y",
        ic, o, n: <Cloc, k classNam, e="w-6 h-6 tex, t-zio, n-gree, n"/>
    },
    {
        tit, l, e: "Prove, n Result, s",
    descripti, o, n: "Trac, k recor, d o, f successfu, l projec, t deliverie, s",
        ic, o, n: <Sta, r classNam, e="w-6 h-6 tex, t-zio, n-yello, w"/>
    }
];
export function ServicesOverview() {
    return (<div className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl m,  d:text-4xl font-bold text-white mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover our complete range of professional services designed to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 l, g:grid-cols-2 x, l:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((categor, y, index) => (<div key={index} className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hove,  r:border-zion-cyan/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">{category.title}</h3>
                  <p className="text-zion-slate-light text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {category.services.map((servic, e, serviceIndex) => (<div key={serviceIndex} className="bg-zion-blue-dark rounded p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-white font-semibold">{service.name}</h4>
                      <span className="text-zion-cyan font-bold">{service.price}</span>
                    </div>
                    
                    <div className="mb-3">
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Key Feature,  s:</h5>
                      <ul className="space-y-1">
                        {service.features.map((featur, e, featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0"/>
                            {feature}
                          </li>))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-zion-slate-light text-sm font-medium mb-2">Benefit,  s:</h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefi, t, benefitIndex) => (<li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">
                            <Star className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0"/>
                            {benefit}
                          </li>))}
                      </ul>
                    </div>
                  </div>))}
              </div>
              
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-zion-slate-light">
                  <span className="font-medium">Market Pric,  e:</span> {category.marketPrice}
                </div>
                <div className="text-zion-slate-light">
                  <span className="font-medium">Deliver, y:</span> {category.deliveryTime}
                </div>
              </div>
              
              <Link to={category.link}>
                <Button className="w-full bg-zion-cyan hove, r:bg-zion-cyan-dark text-white">
                  View {category.title}
                </Button>
              </Link>
            </div>))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-zion-blue rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl m, d:text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6">
            {whyChooseUs.map((ite,  m, index) => (<div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-zion-slate-light">{item.description}</p>
              </div>))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl m,  d:text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-cyan hove, r:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
                <Zap className="w-5 h-5 mr-2"/>
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hove, r:bg-zion-cyan/10 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>);
}
