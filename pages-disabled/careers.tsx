
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, Rocket, Brain, Atom, Shield, Cloud;
  ArrowRight, MapPin, Clock, DollarSign, Star, Zap
 } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Head from 'next / head';
import {motion} from 'framer-motion';
import {Users, Rocket, Brain, Atom, Shield, Cloud, ArrowRight, MapPin, Clock, DollarSign, Star, Zap} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
export default /**
 * CareersPage - Function description
 */
function CareersPage() {
  const open_positions = [;

=======
      icon: Rocket,
      color: "from - yellow - 500 to - orange - 500";
    }
  ];
;
  const benefits = [;
    {
      title: "Competitive Compensation",
      description: "Above - market salaries with equity options and performance bonuses",
      icon: DollarSign,
      color: "from - green - 500 to - emerald - 500";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    {
      title: "Health & Wellness"
      description: "Comprehensive health, dental, and vision insurance for you and your family";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      icon: Star,
      color: "from - blue - 500 to - cyan - 500";
    }
    {
      title: "Flexible Work",
      description: "Remote work options and flexible hours to support work - life balance",
      icon: Clock,
      color: "from - purple - 500 to - pink - 500";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    {
      title: "Professional Growth"
      description: "Continuous learning opportunities, conferences, and career development";
    }
    {
      title: "Professional Growth"
      description: "Continuous learning opportunities, conferences, and career development";

      icon: Rocket,;
      color: "from-yellow-500 to-orange-500";
    }
  ];
  const benefits = [;
    {;
      title: "Competitive Compensation",;
      description: "Above-market salaries with equity options and performance bonuses",;
      icon: DollarSign,;
      color: "from-green-500 to-emerald-500";
    };
    {;
      title: "Health & Wellness",;
      description: "Comprehensive health, dental, and vision insurance for you and your family";
      icon: Star,;
      color: "from-blue-500 to-cyan-500";
    };
    {;
      title: "Flexible Work",;
      description: "Remote work options and flexible hours to support work-life balance",;
      icon: Clock,;
      color: "from-purple-500 to-pink-500";
    };
    {;
      title: "Professional Growth",;
      description: "Continuous learning opportunities, conferences, and career development";
      icon: Rocket,;
      color: "from-orange-500 to-red-500";
    }
  ];
  return (

    <UltraAdvancedFuturisticBackground>;
      <div className="min-h-screen">;
        <Head>;
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>;
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting-edge projects." />;
        </Head>;
      <EnhancedNavigation />;

    <UltraAdvancedFuturisticBackground>;
      <div className="min-h-screen">;
        <Head>;
          <title>Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>;
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting-edge projects." />;
        </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className="mb-8">;
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">;
              Join Our Team;
            </h1>;
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
              Build the future of technology with cutting-edge AI, quantum computing, and cybersecurity solutions;
            </p>;
          </motion && motion.div>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className="mb-12">;
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">;
              Work alongside world-class engineers and researchers to solve the most complex ;
              technological challenges and shape the future of computing.;
            </p>;
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">;
              View Open Positions;
              <ArrowRight className="w-5 h-5" />;
            </button>;
          </motion && motion.div>;
        </div>;
      </section>;


      {/* Benefits Section */}
      <section className="py-20 px-6">;
        <div className="max-w-7xl mx-auto">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Why Work at Zion Tech Group?</h2>;
            <p className="text-xl text-white/70 max-w-3xl mx-auto">;
              We offer competitive benefits and a collaborative environment that fosters innovation and growth;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {benefits && benefits.map((benefit, index) => (;
              <motion&& motion.div
                key={benefit && benefit.title}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">;
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit && benefit.color} rounded-2xl flex items-center justify-center mb-6`}>;
                  <benefit && benefit.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{benefit && benefit.title}</h3>;
                <p className="text-white/70">{benefit && benefit.description}</p>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;
          </div>
        </div>
      </section>


=======
=======


=======
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>;
            <p className="text-xl text-white/70 max-w-3xl mx-auto">;
              Join our team of innovators and help build the future of technology;
            </p>;
          </motion && motion.div>;
          <div className="space-y-6">;
            {openPositions && openPositions.map((position, index) => (;
              <motion&& motion.div
                key={position && position.title}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">;
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">;
                  <div className="flex-1">;
                    <div className="flex items-center gap-4 mb-4">;
                      <div className={`w-12 h-12 bg-gradient-to-br ${position && position.color} rounded-xl flex items-center justify-center`}>;
                        <position && position.icon className="w-6 h-6 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-2xl font-bold text-white">{position && position.title}</h3>;
                        <p className="text-white/70">{position && position.department}</p>;
                      </div>;
                    </div>;
                    <p className="text-white/80 mb-4">{position && position.description}</p>;
                    <div className="flex flex-wrap gap-4 mb-4">;
                      <div className="flex items-center gap-2 text-white/70">;
                        <MapPin className="w-4 h-4" />;
                        <span>{position && position.location}</span>;
                      </div>;
                      <div className="flex items-center gap-2 text-white/70">;
                        <Clock className="w-4 h-4" />;
                        <span>{position && position.type}</span>;
                      </div>;
                      <div className="flex items-center gap-2 text-white/70">;
                        <Users className="w-4 h-4" />;
                        <span>{position && position.experience}</span>;
                      </div>;
                      <div className="flex items-center gap-2 text-white/70">;
                        <DollarSign className="w-4 h-4" />;
                        <span>{position && position.salary}</span>;
                      </div>;
                    </div>;
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Requirements</h4>;
                      <ul className="space-y-1">;
                        {position && position.requirements.map((req, idx) => (;
                          <li key={idx} className="text-sm text-white/80 flex items-center">;
                            <div className="w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full mr-2" />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            {req}
                          </li>;
                        ))}
=======

                            {req}
                          </li>;
                        ))}

                      </ul>;
                    </div>;
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>;
                      <div className="flex flex-wrap gap-2">;
                        {position && position.benefits.map((benefit) => (;
                          <span key={benefit} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded">;

                            {benefit}
                          </span>;
                        ))}

                      </div>;
                    </div>;
                  </div>;
                  <div className="lg:flex-shrink-0">;
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">;
      icon: Rocket,
      color: "from - orange - 500 to - red - 500";
    }
  ];
;
  return (
    <UltraAdvancedFuturisticBackground>;
      <div className="min - h-screen">;
        <Head>;
          <title > Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>;
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting - edge projects." />;
        </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb - 8";
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent mb - 6">;
              Join Our Team;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed">;
              Build the future of technology with cutting - edge AI, quantum computing, and cybersecurity solutions;
            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb - 12";
          >;
            <p className="text - lg text - white / 70 max - w-2xl mx - auto mb - 8">;
              Work alongside world - class engineers and researchers to solve the most complex;
              technological challenges and shape the future of computing.;
            </p>;
            <button className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2 mx - auto">;
              View Open Positions;
              <ArrowRight className="w - 5 h - 5" />;
            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py - 20 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
=======                      </div>
                    </div>
                  </div>
                      </div>;
                    </div>;
                  </div>;
                  <div className="lg:flex-shrink-0">;
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">;
      icon: Rocket,
      color: "from - orange - 500 to - red - 500";
    }
  ];
;
  return (
    <UltraAdvancedFuturisticBackground>;
      <div className="min - h-screen">;
        <Head>;
          <title > Careers - Zion Tech Group | Join Our Revolutionary Technology Team</title>;
          <meta name="description" content="Join Zion Tech Group's team of innovators. Explore career opportunities in AI, quantum computing, and emerging technologies. Remote work, competitive benefits, and cutting - edge projects." />;
        </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb - 8";
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent mb - 6">;
              Join Our Team;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed">;
              Build the future of technology with cutting - edge AI, quantum computing, and cybersecurity solutions;
            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb - 12";
          >;
            <p className="text - lg text - white / 70 max - w-2xl mx - auto mb - 8">;
              Work alongside world - class engineers and researchers to solve the most complex;
              technological challenges and shape the future of computing.;
            </p>;
            <button className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2 mx - auto">;
              View Open Positions;
              <ArrowRight className="w - 5 h - 5" />;
            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py - 20 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
                      </div>
                    </div>
                  </div>                  <div className="lg:flex-shrink-0">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">Why Work at Zion Tech Group?</h2>;
            <p className="text - xl text - white / 70 max - w-3xl mx - auto">;
              We offer competitive benefits and a collaborative environment that fosters innovation and growth;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
            {benefits.map ((benefit, index) => (
              <motion.div;
                key={benefit.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 8 hover:border - blue - 500 / 30 transition - all duration - 300";
              >;
                <div className={`w - 16 h - 16 bg - gradient - to - br ${benefit.color} rounded - 2xl flex items - center justify - center mb - 6`}>;
                  <benefit.icon className="w - 8 h - 8 text - white" />;
                </div>;
                <h3 className="text - 2xl font - bold text - white mb - 4">{benefit.title}</h3>;
                <p className="text - white / 70">{benefit.description}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Open Positions */}
      <section className="py - 20 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">Open Positions</h2>;
            <p className="text - xl text - white / 70 max - w-3xl mx - auto">;
              Join our team of innovators and help build the future of technology;
            </p>;
          </motion.div>;
          <div className="space - y-6">;
            {open_positions.map ((position, index) => (
              <motion.div;
                key={position.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 8 hover:border - blue - 500 / 30 transition - all duration - 300";
              >;
                <div className="flex flex - col lg:flex - row lg:items - center lg:justify - between gap - 6">;
                  <div className="flex - 1">;
                    <div className="flex items - center gap - 4 mb - 4">;
                      <div className={`w - 12 h - 12 bg - gradient - to - br ${position.color} rounded - xl flex items - center justify - center`}>;
                        <position.icon className="w - 6 h - 6 text - white" />;
                      </div>;
                      <div>;
                        <h3 className="text - 2xl font - bold text - white">{position.title}</h3>;
                        <p className="text - white / 70">{position.department}</p>;
                      </div>;
                    </div>;
                    <p className="text - white / 80 mb - 4">{position.description}</p>;
                    <div className="flex flex - wrap gap - 4 mb - 4">;
                      <div className="flex items - center gap - 2 text - white / 70">;
                        <MapPin className="w - 4 h - 4" />;
                        <span>{position.location}</span>;
                      </div>;
                      <div className="flex items - center gap - 2 text - white / 70">;
                        <Clock className="w - 4 h - 4" />;
                        <span>{position.type}</span>;
                      </div>;
                      <div className="flex items - center gap - 2 text - white / 70">;
                        <Users className="w - 4 h - 4" />;
                        <span>{position.experience}</span>;
                      </div>;
                      <div className="flex items - center gap - 2 text - white / 70">;
                        <DollarSign className="w - 4 h - 4" />;
                        <span>{position.salary}</span>;
                      </div>;
                    </div>;
                    <div className="mb - 4">;
                      <h4 className="text - sm font - semibold text - white / 60 mb - 2 uppercase tracking - wider">Requirements</h4>;
                      <ul className="space - y-1">;
                        {position.requirements.map ((req, idx) => (
                          <li key={idx} className="text - sm text - white / 80 flex items - center">;
                            <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full mr - 2" />;
                            {req}
                          </li>))}
                      </ul>;
                    </div>;
                    <div className="mb - 4">;
                      <h4 className="text - sm font - semibold text - white / 60 mb - 2 uppercase tracking - wider">Benefits</h4>;
                      <div className="flex flex - wrap gap - 2">;
                        {position.benefits.map ((benefit) => (
                          <span key={benefit} className="text - xs bg - white / 5 text - white / 70 px - 2 py - 1 rounded">;
                            {benefit}
                          </span>))}
                      </div>;
                    </div>;
                  </div>;
                  <div className="lg:flex - shrink - 0">;
                    <button className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - white transition - all duration - 300 transform hover:scale - 105">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      Apply Now;
                    </button>;
                  </div>;
                </div>;



      {/* CTA Section */}
      <section className="py-20 px-6">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

      <EnhancedFooter />
    </div>
  )
}
}
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
