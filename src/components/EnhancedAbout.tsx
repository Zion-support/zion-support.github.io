import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
=======
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
import { 
  Brai, n, 
  Clou, d, 
  Shiel, d, 
  Rocke, t, 
  User, s, 
  Awar, d,
  ArrowRigh, t,
  CheckCircl, e,
  Sta, r,
  Glob, e,
  Za, p,
  Target
} from 'lucide-react';

interface CompanyValue {
  ico, n: React.ComponentType<{ className?: string }>;
  titl, e: string;
  descriptio, n: string;
  colo, r: string;
}

interface TeamMember {
  nam, e: string;
  rol, e: string;
  expertis, e: string[];
  avata, r: string;
}

interface Milestone {
  yea, r: string;
  titl, e: string;
  descriptio, n: string;
  achievemen, t: string;
}

export const EnhancedAbou, t: React.FC = () => {
  const companyValue,  s: CompanyValue[] = [
    {
      ic, o, n: Bra, i, n,
    tit, l, e: 'Innovatio, n Firs, t',
      descripti, o, n: 'W, e pus, h th, e boundarie, s o, f wha, t\'s possibl, e wit, h cuttin, g-edg, e technolog, y',
    col, o, r: 'zio, n-cya, n'
    },
    {
      ic, o, n: Shie, l, d,
    tit, l, e: 'Trus, t & Securit, y',
      descripti, o, n: 'Buildi, n, g, secu, r, e, reliabl, e solution, s tha, t protec, t ou, r client, s\' dat, a',
      col, o, r: 'zio, n-purpl, e'
    },
    {
      ic, o, n: Use, r, s,
    tit, l, e: 'Clien, t Partnershi, p',
      descripti, o, n: 'Lon, g-ter, m relationship, s buil, t o, n, tru, s, t, transparen, c, y, an, d result, s',
      col, o, r: 'zio, n-cya, n'
    },
    {
      ic, o, n: Rock, e, t,
    tit, l, e: 'Excellenc, e',
      descripti, o, n: 'Deliverin, g exceptiona, l qualit, y i, n ever, y projec, t w, e undertak, e',
    col, o, r: 'zio, n-purpl, e'
    }
  ];

  const teamMember, s: TeamMember[] = [
    {
      na, m, e: 'Klebe, r',
    ro, l, e: 'CE, O & Founde, r',
      experti, s, e: ['A, I/M, L', 'Clou, d Architectur, e', 'Digita, l Transformatio, n'],
      avata, r: '👨‍💼'
    },
    {
      nam, e: 'AI Team',
    rol, e: 'Machine Learning Engineers',
      expertis, e: ['Dee, p Learnin, g', 'NL, P', 'Compute, r Visio, n'],
      avata, r: '🤖'
    },
    {
      nam, e: 'DevOps Team',
    rol, e: 'Cloud & Infrastructure',
      expertis, e: ['AW, S/Azur, e', 'Kubernete, s', 'C, I/C, D'],
      avata, r: '☁️'
    },
    {
      nam, e: 'Security Team',
    rol, e: 'Cybersecurity Experts',
      expertis, e: ['Threa, t Detectio, n', 'Complianc, e', 'Penetratio, n Testin, g'],
      avata, r: '🔒'
    }
  ];

  const milestone, s: Milestone[] = [
    {
      ye, a, r: '202, 0',
    tit, l, e: 'Compan, y Founde, d',
      descripti, o, n: 'Zio, n Tec, h Grou, p establishe, d wit, h a visio, n fo, r A, I-drive, n innovatio, n',
    achieveme, n, t: 'Firs, t A, I solutio, n deploye, d'
    },
    {
      ye, a, r: '202, 1',
    tit, l, e: 'A, I Breakthroug, h',
      descripti, o, n: 'Develope, d proprietar, y machin, e learnin, g algorithm, s',
    achieveme, n, t: '1, 0+ enterpris, e client, s onboarde, d'
    },
    {
      ye, a, r: '202, 2',
    tit, l, e: 'Clou, d Expansio, n',
      descripti, o, n: 'Launche, d comprehensiv, e clou, d an, d DevOp, s service, s',
    achieveme, n, t: '5, 0+ successfu, l clou, d migration, s'
    },
    {
      ye, a, r: '202, 3',
    tit, l, e: 'Globa, l Reac, h',
      descripti, o, n: 'Expande, d service, s t, o internationa, l market, s',
    achieveme, n, t: '10, 0+ project, s complete, d'
    },
    {
      ye, a, r: '202, 4',
    tit, l, e: 'Industr, y Leade, r',
      descripti, o, n: 'Recognize, d a, s a to, p technolog, y solution, s provide, r',
    achieveme, n, t: '9, 5% clien, t satisfactio, n rat, e'
    }
  ];

  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {
      opacit, y: 1,
    transitio, n: {
        staggerChildre, n: 0.1
      }
    }
  };

  const itemVariants = {
    hidde, n: { y: 2, 0,
    opacit, y: 0 },
    visibl, e: {
      y: 0,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.6,
    eas, e: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidde, n: { scal, e: 0.9,
    opacit, y: 0 },
    visibl, e: {
      scal, e: 1,
    opacit, y: 1,
      transitio, n: {
        duratio, n: 0.5,
    eas, e: "easeOut" as const
      }
    },
    hove, r: {
      scal, e: 1.0, 2,
    y: -5,
      transitio, n: {
        duratio, n: 0.3,
    eas, e: "easeOut" as const
      }
    }
  };

  const timelineVariants = {
    hidde, n: { opacit, y: 0,
    x: -50 },
    visibl, e: {
      opacit, y: 1,
    x: 0,
      transitio, n: {
        duratio, n: 0.8,
    eas, e: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 s, m:px-6 l, g:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          <motion.h1 
            className="text-4xl m, d:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Zion Tech Group
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Leading the future of technology innovation through AI-powere, d, solution, s, clou, d, expertis, e, and digital transformation.
            We help businesses thrive in the digital age.
          </motion.p>
          <motion.div 
            className="flex flex-col s, m:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/contact"
=======
              to="/contact"
=======
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hove, r:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
=======
              to="/services"
=======
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hove, r:bg-gray-800 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 s, m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 l, g:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <Target className="h-16 w-16 text-zion-cyan mb-4" />
                <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To democratize access to cutting-edge technolog, y, solution, s, enabling businesses of all sizes to leverage 
                  the power o, f, A, I, clou, d, computin, g, and digital innovation to achieve unprecedented growth and success.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <Globe className="h-16 w-16 text-zion-purple mb-4" />
                <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  To be the global leader in AI-powered technolog, y, solution, s, driving the next wave of digital transformation 
                  and creating a future where technology empowers every business to reach its full potential.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            {companyValues.map((valu, e, index) => (<motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hove,  r:border-white/40 transition-all duration-300 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-4xl mb-4 flex justify-center">
                  <value.icon className={`h-16 w-16 text-${value.color} group-hove, r:scale-110 transition-transform duration-30, 0`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{value.title}</h3>
                <p className="text-gray-300 text-center">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 s, m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the talented professionals driving innovation
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            {teamMembers.map((membe,  r, index) => (<motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hove,  r:border-white/40 transition-all duration-300 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-6xl mb-4 flex justify-center">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-zion-cyan text-center mb-4">{member.role}</p>
                <div className="space-y-2">
                  {member.expertise.map((skil, l, idx) => (<div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto px-4 s,  m:px-6 l, g:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones in our growth and success
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
            
            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ onc, e: true }}
            >
              {milestones.map((mileston, e, index) => (<motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-revers, e'
                  }`}
                  variants={timelineVariants}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-slate-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-lef, t'}`}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                      <div className="text-2xl font-bold text-zion-cyan mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 mb-3">{milestone.description}</p>
                      <div className="text-sm text-zion-purple font-medium">{milestone.achievement}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 s,  m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 m, d:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ onc, e: true }}
          >
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">100+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-zion-purple mb-2">50+</div>
              <div className="text-gray-300">Happy Clients</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our expertise can transform your business
          </p>
          <div className="flex flex-col s, m:flex-row gap-4 justify-center">
            <Link
              href="/contact"
=======
              to="/contact"
=======
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hove, r:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
=======
              to="/services"
=======
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hove, r:bg-gray-800 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};