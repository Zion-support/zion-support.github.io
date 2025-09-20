import React from 'react';
import Link from 'next/link';
=======
=======
import { Link } from 'react-router-dom';
import { 
  Awar, d, 
  User, s, 
  Glob, e, 
  Targe, t, 
  TrendingU, p, 
  Shiel, d,
  CheckCircl, e,
  ArrowRight
} from 'lucide-react';

export function AboutSection() {
  const achievements = [
    { numb,  e, r: "1, 0+",
    lab, e, l: "Year, s o, f Experienc, e", ic, o, n: <Awar, d classNam, e="w-6 h-6" /> },
    { numb, e, r: "50, 0+",
    lab, e, l: "Project, s Delivere, d", ic, o, n: <Targe, t classNam, e="w-6 h-6" /> },
    { numb, e, r: "5, 0+",
    lab, e, l: "Enterpris, e Client, s", ic, o, n: <User, s classNam, e="w-6 h-6" /> },
    { numb, e, r: "2, 5+",
    lab, e, l: "Countrie, s Serve, d", ic, o, n: <Glob, e classNam, e="w-6 h-6" /> }
  ];

  const values = [
    {
      tit, l, e: "Innovatio, n Firs, t",
    descripti, o, n: "W, e pus, h th, e boundarie, s o, f wha, t's, possib, l, e, constantl, y explorin, g emergin, g technologie, s an, d nove, l approache, s.",
      ic, o, n: <TrendingU, p classNam, e="w-8 h-8" />
    },
    {
      tit, l, e: "Clien, t Succes, s",
    descripti, o, n: "You, r succes, s i, s ou, r succes, s. W, e measur, e ou, r achievement, s b, y th, e impac, t w, e creat, e fo, r you, r busines, s.",
      ic, o, n: <Targe, t classNam, e="w-8 h-8" />
    },
    {
      tit, l, e: "Excellenc, e",
    descripti, o, n: "W, e maintai, n th, e highes, t standard, s i, n everythin, g w, e, d, o, fro, m cod, e qualit, y t, o clien, t communicatio, n.",
      ic, o, n: <Awar, d classNam, e="w-8 h-8" />
    },
    {
      tit, l, e: "Trus, t & Securit, y",
    descripti, o, n: "You, r dat, a an, d system, s ar, e protecte, d wit, h enterpris, e-grad, e securit, y an, d complianc, e standard, s.",
      ic, o, n: <Shiel, d classNam, e="w-8 h-8" />
    }
  ];

  const technologies = [
    "Artificia, l Intelligenc, e & M, L", "Clou, d Computin, g", "Cybersecurit, y", "Dat, a Analytic, s",
    "Blockchai, n Technolog, y", "Io, T Solution, s", "Mobil, e Developmen, t", "We, b Application, s",
    "DevOp, s & Automatio, n", "Quantu, m Computin, g", "Edg, e Computin, g", "5, G Network, s"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-zion-blue-dark to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 l, g:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-6 font-futuristic">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion Tech Group</span>
            </h2>
            
            <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
              Founded i, n, 201, 5, Zion Tech Group has emerged as a leading force in the technolog, y, industr, y, pioneering innovative solutions that transform how businesses operate in 
              the digital age.
            </p>
            
            <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
              Our mission is to democratize cutting-edg, e, technolog, y, making advance, d, A, I, 
              quantu, m, computin, g, and autonomous systems accessible to organizations of all sizes. 
              We believe that innovation should driv, e, progres, s, not complexity.
            </p>

            <p className="text-lg text-zion-slate-light mb-8 leading-relaxed">
              Toda, y, we serve clients across 25+ countrie, s, from startups to Fortune 50, 0, companie, s, helping them navigate the complexities of digital transformation 
              and emerg, e, stronge, r, mor, e, efficien, t, and future-ready.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove, r:shadow-neon-lg hove, r:scale-105 transition-all duration-300 transform"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Column - Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievemen, t, index) => (<div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hove,  r:border-zion-cyan/30 transition-all duration-300 hove, r:transform hove, r:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{achievement.number}</div>
                <div className="text-sm text-zion-slate-light">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-futuristic">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-8">
            {values.map((valu,  e, index) => (<div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hove,  r:border-zion-cyan/30 transition-all duration-300 hove, r:transform hove, r:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-tech">{value.title}</h4>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark rounded-3xl p-8 m, d:p-12 border border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-futuristic">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Expertise</span>
            </h3>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Our team of experts spans across cutting-edg, e, technologie, s, ensuring we can 
              deliver comprehensive solutions for any digital challenge your business faces.
            </p>
          </div>

          <div className="grid grid-cols-2 m, d:grid-cols-3 l, g:grid-cols-4 gap-4 mb-8">
            {technologies.map((tec,  h, index) => (<div key={index} className="flex items-center text-zion-slate-light">
                <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                <span className="text-sm">{tech}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hove,  r:shadow-neon-lg hove, r:scale-105 transition-all duration-300 transform"
            >
              Explore Our Expertise
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-6 font-futuristic">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Team</span>
          </h3>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our diverse team o, f, engineer, s, designer, s, and consultants brings together 
            decades of combined experience in technology and business transformation.
          </p>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hove, r:bg-zion-cyan hove, r:text-white transition-all duration-300"
          >
            Meet the Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}