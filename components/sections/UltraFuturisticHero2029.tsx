
<<<<<<< HEAD



=======
import React from 'react';
import { motion } from 'framer-motion';
import React from 'react';

import { motion } from 'framer-motion';
import {
import {
  ArrowRight
  Star
  TrendingUp
  Zap
  Brain
  Atom
  Rocket
  Target
  Shield
  Cpu
  Globe
  Sparkles;
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Atom,
  Rocket,
  Target,
  Shield,
  Cpu,

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
    }
    return this.props.children;
  }
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import { motion  } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Atom, Rocket, Target, Shield, Cpu, Globe, Sparkles  } from 'lucide-react';
import Link from 'next/link';
<<<<<<< HEAD




  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}

                left: Math.random() * 100 + '%'
                top: Math.random() * 100 + '%'


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
=======


import React from 'react';'
import { motion  } from 'framer-motion';'
import { ArrowRight, Star, TrendingUp, Zap, Brain, Atom, Rocket, Target, Shield, Cpu, Globe, Sparkles  } from 'lucide-react';'
import Link from 'next/link';'

export default function UltraFuturisticHero2029() {
}
const features = [;
    {
      }
      "icon": Brain,
      "text": 'AI Consciousness Evolution','
      "color": 'from-violet-500 to-purple-600','
    },
    {
      }
      "icon": Atom,
      "text": 'Quantum Computing Solutions','
      "color": 'from-blue-500 to-cyan-600','
    },
    {
      }
      "icon": Rocket,
      "text": 'Space Technology Innovation','
      "color": 'from-emerald-500 to-teal-600','
    },
    {
      }
      "icon": Target,
      "text": 'Micro SAAS Excellence','
      "color": 'from-orange-500 to-red-600','
    },
    {
      }
      "icon": Shield,
      "text": 'Enterprise Security','
      "color": 'from-indigo-500 to-blue-600','
    },
    {
      }
      "icon": Cpu,
      "text": 'Autonomous IT Operations','
      "color": 'from-cyan-500 to-teal-600','
    }
  ];

const stats = [;
    { "number": '500+', "label": 'Innovative Services', "icon": Sparkles,'
},
    { "number": '$2.5B+', "label": 'Market Opportunity', "icon": TrendingUp,'
},
    { "number": '99.9%', "label": 'Success Rate', "icon": Star,'
},
{ "number": '24/7', "label": 'AI Operations', "icon": Zap,'
}
  ];
return (;
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>;'

>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">;
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">;
          {[...Array(50)].map((_, i) => (;
            <motion&& motion.div
      icon: Brain,
      text: 'AI Consciousness Evolution',
      color: 'from - violet - 500 to - purple - 600',
    },
    {
      icon: Atom,
      text: 'Quantum Computing Solutions',
      color: 'from - blue - 500 to - cyan - 600',
    },
    {
      icon: Rocket,
      text: 'Space Technology Innovation',
      color: 'from - emerald - 500 to - teal - 600',
    },
    {
      icon: Target,
      text: 'Micro SAAS Excellence',
      color: 'from - orange - 500 to - red - 600',
    },
    {
      icon: Shield,
      text: 'Enterprise Security',
      color: 'from - indigo - 500 to - blue - 600',
    },
    {
      icon: Cpu,
      text: 'Autonomous IT Operations',
      color: 'from - cyan - 500 to - teal - 600',
    },  ];    { icon: Brain, text: 'AI Consciousness Evolution', color: 'from - violet - 500 to - purple - 600' },
    { icon: Atom, text: 'Quantum Computing Solutions', color: 'from - blue - 500 to - cyan - 600' },
    { icon: Rocket, text: 'Space Technology Innovation', color: 'from - emerald - 500 to - teal - 600' },
    { icon: Target, text: 'Micro SAAS Excellence', color: 'from - orange - 500 to - red - 600' },
    { icon: Shield, text: 'Enterprise Security', color: 'from - indigo - 500 to - blue - 600' },
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from - cyan - 500 to - teal - 600' }
  const stats = [;
    { number: '500+', label: 'Innovative Services', icon: Sparkles },
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp },
    { number: '99.9%', label: 'Success Rate', icon: Star },
    { number: '24 / 7', label: 'AI Operations', icon: Zap },
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ];

const stats = [
    { number: '500+'}
  label: 'Innovative Services', icon: Sparkles}
},
    { number: '$2.5B+'}
  label: 'Market Opportunity', icon: TrendingUp}
},
    { number: '99.9%'}
  label: 'Success Rate', icon: Star}
},
{ number: '24/7'}
  label: 'AI Operations', icon: Zap}
}
  ];
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'    />;

      {/* Animated Background */}
<<<<<<< HEAD

      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'    />;
        {/* Floating Particles */}
        <div className='absolute inset-0 overflow-hidden'    />;
          {[...Array(50)].map((_, i) => (<motion&& motion.div;}

=======
      <div className=absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden>
          {[...Array(50)].map((_, i) => (
            <motion.div
>>>>>>> origin/cursor/delete-old-data-records-6bba
              key={i}

              className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20''
              animate={{
              }}
              style={{

<<<<<<< HEAD
                left: Math.random () * 100 + '%',
                top: Math.random () * 100 + '%',
              }}            />  ];
;
  return (
    <section className="relative min - h-screen flex items - center justify - center overflow - hidden">;
      {/* Animated Background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black via - gray - 900 to - black">;
        {/* Floating Particles */}
        <div className="absolute inset - 0 overflow - hidden">;
          {[...Array (50)].map ((_, i) => (
            <motion.div;
              key={i}
              className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 20";
              animate={{
=======
                }

                "left": Math.random() * 100 + '%','
                "top": Math.random() * 100 + '%','
              }} />
          ))}
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

                duration: Math && Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 1000],
                y: [0, Math.random() * 1000],
                opacity: [0.2, 0.8, 0.2]}}
              transition = $2;
                repeat: Infinity,
                ease: "linear"
              }}
              style = $2;
                top: Math.random() * 100 + '%'}}
            />
            />
<<<<<<< HEAD

=======
                left: Math.random() * 100 + '%'}
                top: Math.random() * 100 + '%'}
              }}
               />
        <div className='absolute inset-0 overflow-hidden'>;'
          {[...Array(50)].map((_, i) => (<motion&& motion.div;
              }
              key={i}

              className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20''
              animate={{
              }}
              style={{

                }

                "left": Math.random() * 100 + '%','
                "top": Math.random() * 100 + '%','
              }} />
>>>>>>> origin/cursor/delete-old-data-records-6bba
          ))}
        </div>

          ))}
        </div>

        {/* Grid Pattern */}
<<<<<<< HEAD

<div className='absolute inset-0 opacity-10'    />
          <div;
className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`}
              backgroundSize: '50px 50px'}

            }}
             />




=======
<div className='absolute inset-0 opacity-10'>'
          <div,
className='absolute inset-0''
            style={{
              }
              "backgroundImage": `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)``              "backgroundSize": '50px 50px''
            }} />

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`
              backgroundSize: '50px 50px'
            }}
          />

        {/* Gradient Orbs *
}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse' />;'
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000' />;'

>>>>>>> origin/cursor/delete-old-data-records-6bba


          ))}
        </div>


<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Grid Pattern */}
<div className='absolute inset-0 opacity-10'>;
          <div;
            className='absolute inset-0';
            style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`;
              backgroundSize: '50px 50px';
            }}
          />;
        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>;
          <div;
            className='absolute inset-0';
            style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`;
              backgroundSize: '50px 50px';
            }}
          />;
        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>;
          <div;
            className='absolute inset-0';
            style={{backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`;
              backgroundSize: '50px 50px';
            }}
          />;
          ))}
        </div>;{/* Grid Pattern */}
        <div className='absolute inset-0 opacity-10'>;
          <div;
            className='absolute inset-0';
            style={{</div>;
        {/* Gradient Orbs */}
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  const stats = [;
    { number: '500+', label: 'Innovative Services', icon: Sparkles }
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp }
    { number: '99.9%', label: 'Success Rate', icon: Star }
    { number: '24/7', label: 'AI Operations', icon: Zap }
  ];
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />;
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />;
      </div>;
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}</div>;
        {/* Gradient Orbs */}

        </div>
        {/* Gradient Orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000' />
      </div>
      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Main Heading */}
        {/* Gradient Orbs *}
}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000' />;
              backgroundSize: 50px 50px'
            }}
          />


<<<<<<< HEAD
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}        </div>

=======
              backgroundSize: '50px 50px
            }}
          />


        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse />;
        <div className=absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000' />;
      </div>;
      {/* Content */}
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,

      </div>;
      {/* Content */}
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`;
            backgroundSize: '50px 50px'
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }} />
        </div>
    { icon: Cpu, text: 'Autonomous IT Operations', color: 'from-cyan-500 to-teal-600' }
  const stats = [
    { number: '500+', label: 'Innovative Services', icon: Sparkles }
    { number: '$2.5B+', label: 'Market Opportunity', icon: TrendingUp }
    { number: '99.9%', label: 'Success Rate', icon: Star }
    { number: '24/7', label: 'AI Operations', icon: Zap }
  ];

<<<<<<< HEAD


=======
      <div className='relative z-10 max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8 text-center'>'
        {/* Main Heading *
}

        <motion.div,
initial={{ "opacity": 0, "y": 30 
}
          animate={{ "opacity": 1, "y": 0 }}
          transition={{ "duration": 0.8 
}

className='mb-8''
        >
          <h1 className='text-5xl "md":text-7xl "lg":text-8xl font-bold mb-6'>'
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>'
              2029
            </span>
            <br />
            <span className='text-white'>Future Technology</span>'
            <br />
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>'
              Revolution
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

<<<<<<< HEAD

        {/* Main Heading */}
        <motion&& motion.div

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}

        {/* Main Heading */}


        <motion.div

          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

        >
          <Link'
            href='/services'
          <Link'
            href='/contact''
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'>;
            <span>Get Started</span>;'
            <Zap className='w-5 h-5' />          </Link>        >;
          <Link"
            href="/services"
        {/* Features Grid */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

        >
          {features.map((feature, index) => (
            <motion.div;
                coordinate_x: [0, Math.random () * 1000];
                coordinate_y: [0, Math.random () * 1000];
                opacity: [0.2, 0.8, 0.2]}}
              transition={{}
                duration: Math.random () * 10 + 10,
                repeat: Infinity,"
                ease: "linear";
              }}
              style={{'
                left: Math.random () * 100 + '%','
                top: Math.random () * 100 + '%'}}
            />))}
        </div>;
        {/* Grid Pattern */}'
        <div className='absolute inset - 0 opacity - 10'>;
          <div;'
            className='absolute inset - 0';
            style={{}`
              background_image: `radial - gradient (circle at 1px 1px, rgba (6, 182, 212, 0.3) 1px, transparent 0)`,'
              background_size: '50px 50px',
            }}

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6' />;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent' />;
              2029;
            </span>;
            <br />;'
            <span className=text-white>Future Technology</span>;
            <br />;'
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent>;
              Revolution;
            </span>;
          </h1>;
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Experience the future of technology with Zion Tech Groups;
            revolutionary 2029 services. From AI consciousness evolution to;'
            quantum space mining, we're building tomorrows solutions today.          </p>          ;"
          <p className=text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed>;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services. ;'
            From AI consciousness evolution to quantum space mining, were building tomorrows solutions today.;
        </motion && motion.div>;


              2029;
            </span>;
            <br />;
            <span className=text-white'>Future Technology</span>;
            <br />;
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent>;
              Revolution;
            </span>;
          </h1>;
          <p className=text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
            quantum space mining, were building tomorrows solutions today.;
          </p>;
        </motion.div>;
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>;
            <span className=bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>;
              2029;
            </span>;
            <br />;
            <span className='text-white'>Future Technology</span>;
            <br />;
            <span className=bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent>;
              Revolution;
            </span>;
          </h1>;
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Experience the future of technology with Zion Tech Groups;
            revolutionary 2029 services. From AI consciousness evolution to;
            quantum space mining, were building tomorrow's solutions today.          </p>          ;
          <p className=text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed>;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services. ;
            From AI consciousness evolution to quantum space mining, were building tomorrows solutions today.;

        </motion && motion.div>;{/* CTA Buttons */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 30 }
}
          animate={{ opacity: 1, y: 0 }
}    />;
          <Link;
            href='/services';
          <Link;
=======
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba

            href='/contact';
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'    />;
            <span    />Get Started</span>;
            <Zap className='w-5 h-5'    />          </Link>        >;
          <Link;"
            href=\'/services\';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Features Grid */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 30 }
}
          animate={{ opacity: 1, y: 0 }
}    />;
          {features.map((feature, index) => (<motion.div;
<<<<<<< HEAD

                coordinate_x: [0, Math.random () * 1000];}
                coordinate_y: [0, Math.random () * 1000];}
                opacity: [0.2, 0.8, 0.2]}}"
              transition={{duration: Math.random () * 10 + 10,repeat: Infinity,ease: \'linear\';}
=======
                }
                "coordinate_x": [0, Math.random () * 1000];
                "coordinate_y": [0, Math.random () * 1000];
                "opacity": [0.2, 0.8, 0.2]}}
              transition={{"duration": Math.random () * 10 + 10,"repeat": Infinity,"ease": "linear";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
              style={{"left": Math.random () * 100 + '%',"top": Math.random () * 100 + '%'}}' />)
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        </div>;
        {/* Grid Pattern */}
        <div className='absolute inset - 0 opacity - 10'    />;
          <div;
<<<<<<< HEAD
            className='absolute inset - 0';

            style={{background_image: `radial - gradient (circle at 1px 1px, rgba (6, 182, 212, 0.3) 1px, transparent 0)`,background_size: '50px 50px'}}
             />;
        </div>;
        {/* Gradient Orbs */}
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse'    />;
        <div className='absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000'    />;
      </div>;
      {/* Content */}
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center'    />        {/* Main Heading *}
}        </div>;

=======
            className='absolute inset - 0';'
            style={{"background_image": `radial - gradient (circle at 1px 1px, rgba (6, 182, 212, 0.3) 1px, transparent 0)`,"background_size": '50px 50px'}}' />;        </div>;
        {/* Gradient Orbs */}
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse' />;'
        <div className='absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000' />;'
      </div>;
      {/* Content */}'
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>        {/* Main Heading */}        </div>;
        {/* Gradient Orbs */}"
        <div className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse" />;"
        <div className="absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000" />;
      </div>;
      {/* Content */}"
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Gradient Orbs */}"
        <div className=\"absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse\"    />;"
        <div className=\"absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000\"    />;
      </div>;
      {/* Content */}"
<<<<<<< HEAD

      <div className=\"relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center\"    />;
        {/* Main Heading */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }
}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }
}
          className='mb - 8';
          <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold mb - 6'    />;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'    />;

=======
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
      {/* Content */}
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
        {/* Main Heading */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          transition={{ duration: 0.8 }}'
          className='mb - 8';'
          <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold mb - 6'>;'
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
              2029;
            </span>;
            <br />;'
            <span className='text - white'>Future Technology</span>;
            <br />;'
            <span className='bg - gradient - to - r from - emerald - 400 via - teal - 500 to - cyan - 500 bg - clip - text text - transparent'>;
              Revolution;
            </span>;
          </h1>;'
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;'
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;'
            quantum space mining, we're building tomorrow's solutions today.          </p>;"
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;'
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.;'
          className='mb - 8';
          <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold mb - 6'>;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
      {/* Content */}
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 "sm":px - 6 "lg":px - 8 text - center">;"
        {/* Main Heading */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}

          className=mb - 8;
          <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold mb - 6'>;
            <span className=bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              2029;
            </span>;
            <br    />;
            <span className='text - white'    />Future Technology</span>;
            <br    />;
            <span className='bg - gradient - to - r from - emerald - 400 via - teal - 500 to - cyan - 500 bg - clip - text text - transparent'    />;
              Revolution;
            </span>;
          </h1>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'    />;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
<<<<<<< HEAD

            quantum space mining, we're building tomorrow's solutions today.          </p>;"
          <p className=\"text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed\"    />;

            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion.div>;

=======
            quantum space mining, we're building tomorrow's solutions today.          </p>;
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion.div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD

          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              2029
            </span>
            <br />
            <span className='text-white'>Future Technology</span>
            <br />
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
              Revolution
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the future of technology with Zion Tech Group's
            revolutionary 2029 services. From AI consciousness evolution to
            quantum space mining, we're building tomorrow's solutions today.          </p>

=======
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/services"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>

          transition={{ duration: 0.8 }}
          className="mb-8"
        <motion.div,
initial={{ "opacity": 0, "y": 30 
}
          animate={{ "opacity": 1, "y": 0 }}
          transition={{ "duration": 0.8 
}

className='mb-8''
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              2029
            </span>
            <br />
            <span className="text-white">
              Future Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}'
          className='flex flex - col sm:flex - row gap - 4 justify - center mb - 16';
        >;
        {/* Main Heading */}'
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        {/* Main Heading */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />        {/* Main Heading */}{/* Main Heading *}
}<motion.div;
          initial={{ opacity: 0, y: 30 }
}

          animate={{ opacity: 1, y: 0 }
}

<<<<<<< HEAD


          </p>
        </motion.div>

=======
          transition={{ "duration": 0.8, "delay": 0.2 }}
className='flex flex-col "sm":flex-row gap-4 justify-center mb-16''
        >


        {/* Features Grid *
}
        <motion.div;
          initial={{ "opacity": 0, "y": 30 
}
          animate={{ "opacity": 1, "y": 0 
}

          transition={{ "duration": 0.8, "delay": 0.4 
}

className='grid grid-cols-2 "md":grid-cols-3 "lg":grid-cols-6 gap-4 mb-16''
        >
          {features.map((feature, index) => (
            <motion.div

          />
        </div>
        {/* Gradient Orbs */}
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse'    />
        <div className='absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000'    />
      </div>
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, coordinate_y: 30 }

          animate={{ opacity: 1, coordinate_y: 0 }}

            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.

          <p className='text-xl "md":text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>'
            Experience the future of technology with Zion Tech Group's'
            revolutionary 2029 services. From AI consciousness evolution to,
quantum space mining, we're building tomorrow's solutions today.'
          </p>
        </motion.div>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
        {/* Main Heading */}<motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}className='mb-8';
className='mb-8';
        >;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>;
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>;
              2029;
            </span>;
            <br />;
            <span className='text-white'>Future Technology</span>;
            <br />;
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>;
              Revolution;
            </span>;
          </h1>;
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
<<<<<<< HEAD

            quantum space mining, we're building tomorrow's solutions today.          </p>          ;
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services. ;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion && motion.div>;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* CTA Buttons */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}


        >
          <Link
            href='/services'

            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'>;
            <span>Explore Services</span>;
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
          </Link>;
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <Link
            href='/contact'
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'>;
            <span>Get Started</span>;
            <Zap className='w-5 h-5' />          </Link>        >;
<<<<<<< HEAD



=======
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >

          <Link
            href="/services"

          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="/services"
          <Link
            href="/services"

>>>>>>> origin/cursor/delete-old-data-records-6bba
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2">;
            <span>Explore Services</span>;
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
          </Link>;
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2">;
            <span>Get Started</span>;
            <Zap className="w-5 h-5" />;
          </Link>;
        </motion && motion.div>;



<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Features Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}


<<<<<<< HEAD


=======
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        >
          {features.map((feature, index) => (
            <motion.div
                coordinate_x: [0, Math.random () * 1000];
                coordinate_y: [0, Math.random () * 1000];
                opacity: [0.2, 0.8, 0.2]}}
              transition={{
                duration: Math.random () * 10 + 10,
                repeat: Infinity,
                ease: "linear";
              }}
              style={{
                left: Math.random () * 100 + '%',
                top: Math.random () * 100 + '%'}}
            />))}
        </div>;
        {/* Grid Pattern */}
        <div className='absolute inset - 0 opacity - 10'>;
          <div;
            className='absolute inset - 0';
            style={{
              background_image: `radial - gradient (circle at 1px 1px, rgba (6, 182, 212, 0.3) 1px, transparent 0)`,
              background_size: '50px 50px',
            }}
          />;
        </div>;
        {/* Gradient Orbs */}
        <div className='absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000' />;
      </div>;
      {/* Content */}
      <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>        {/* Main Heading */}        </div>;
        {/* Gradient Orbs */}
        <div className="absolute top - 1/4 left - 1/4 w - 96 h - 96 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full blur - 3xl animate - pulse" />;
        <div className="absolute bottom - 1/4 right - 1/4 w - 96 h - 96 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000" />;
      </div>;
      {/* Content */}
      <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
        {/* Main Heading */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb - 8';
          <h1 className='text - 5xl md:text - 7xl lg:text - 8xl font - bold mb - 6'>;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
          <h1 className='text-5xl "md":text-7xl "lg":text-8xl font-bold mb-6'>;'
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>;'
              2029;
            </span>;
            <br />;
            <span className='text - white'>Future Technology</span>;
            <br />;
            <span className='bg - gradient - to - r from - emerald - 400 via - teal - 500 to - cyan - 500 bg - clip - text text - transparent'>;
              Revolution;
            </span>;
          </h1>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            quantum space mining, we're building tomorrow's solutions today.          </p>;
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.;
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.;
        </motion.div>;
          transition={{ duration: 0.8, delay: 0.2 }}
className='flex flex-col sm:flex-row gap-4 justify-center mb-16';
        >;
          <Link;
            href='/services';
            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2';
          >;
            <span>Explore Services</span>;
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
          </Link>;
          <Link;
            href='/contact';
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2';
          >;
            <span>Get Started</span>;
            <Zap className='w-5 h-5' />;
          </Link>;
        </motion.div>;
        {/* Features Grid */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}'
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>'
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              2029;
            </span>
            <br />'
            <span className='text-white'>Future Technology</span>
            <br />'
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
              Revolution;
            </span>
          </h1>'
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>'
            Experience the future of technology with Zion Tech Group's;
            revolutionary 2029 services. From AI consciousness evolution to'
            quantum space mining, we're building tomorrow's solutions today.          </p>"
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">'
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.'
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.
        </motion.div>
          transition={{ duration: 0.8, delay: 0.2 }}
className='flex flex-col sm:flex-row gap-4 justify-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          <Link'
            href='/services''
            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'
          >
            <span>Explore Services</span>'
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
          <Link'
            href='/contact''
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'
          >
            <span>Get Started</span>
            <Zap className='w-5 h-5' />
            <span>Get Started</span>'
            <Zap className='w-5 h-5' />          </Link>        >
          <Link"
            href="/services""
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>"
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link"
            href="/contact""
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>"
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>
        {/* Features Grid */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
        >
          {features.map((feature, index) => (
            <motion.div;
<<<<<<< HEAD

            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className=&quot;absolute inset-0 opacity-10&quot;>
          <div className=&quot;absolute inset-0&quot; style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot; />
      </div>

      {/* Content */}
      <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>        {/* Main Heading */}

        {/* Main Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8'

        >
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
              2029
            </span>
            <br />
            <span className='text-white'>Future Technology</span>
            <br />
            <span className='bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent'>
              Revolution
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Experience the future of technology with Zion Tech Group's
            revolutionary 2029 services. From AI consciousness evolution to
            quantum space mining, we're building tomorrow's solutions today.          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with Zion Tech Group's revolutionary 2029 services.
            From AI consciousness evolution to quantum space mining, we're building tomorrow's solutions today.
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col sm:flex-row gap-4 justify-center mb-16'

        >
          <Link
            href='/services'
            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'
          >
            <span>Explore Services</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </Link>
          <Link
            href='/contact'
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'
          >
            <span>Get Started</span>
            <Zap className='w-5 h-5' />          </Link>        >
          <Link
            href="/services"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <Zap className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'        >          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'        >

        >
          {features.map((feature, index) => (
            <motion.div

              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}


            >
              <div;`
                className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}

          transition={{ duration: 0.8, delay: 0.2 }}
className='flex flex-col sm:flex-row gap-4 justify-center mb-16'
            />
          <Link;
href='/services'
            className='group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2'
              />
            <span    />Explore Services</span>
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform'    />
          </Link>
          <Link;
href='/contact'
            className='px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2'
              />
            <span    />Get Started</span>
            <Zap className='w-5 h-5'    />
          </Link>
        </motion.div>


        {/* Features Grid *}
}
        <motion.div;
          initial={{ opacity: 0, y: 30 }
}
          animate={{ opacity: 1, y: 0 }
}

          transition={{ duration: 0.8, delay: 0.4 }
}


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'
            />
          {features.map((feature, index) => (}
            <motion.div;}
key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }
}
              animate={{ opacity: 1, scale: 1 }
}
<<<<<<< HEAD

              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}





              </p>
            </motion.div>

=======
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50"
              className="group p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <p className='text-xs text-gray-300 group-"hover":text-white transition-colors text-center leading-tight'>'
                {feature.text}
              </p>
            </motion.div>
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white />
              >
                <feature.icon className='w-6 h-6 text-white' />
              </div>

className='group p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50'
                />
              <div;
className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform`}
                  />
                <feature.icon className='w-6 h-6 text-white'    />
              </div>

              <p className='text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight'    />
                {feature.text}
              </p>
            </motion.div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

          )
}
        </motion.div>;
          ))}
<<<<<<< HEAD



        </motion && motion.div>;






        {/* Stats */}
        <motion&& motion.div;

          initial={{ opacity: 0, y: 30 }
}

=======

        {/* Stats */}
        <motion&& motion.div;
          initial={{ "opacity": 0, "y": 30 
}

          animate={{ "opacity": 1, "y": 0 
>>>>>>> origin/cursor/delete-old-data-records-6bba

          animate={{ opacity: 1, y: 0 }
}

          transition={{ duration: 0.8, delay: 0.6 }
}
className='grid grid-cols-2 md:grid-cols-4 gap-8'
            />
          {stats.map((stat, index) => (

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className='group p - 4 rounded - xl bg - gray - 800 / 30 backdrop - blur - sm border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:bg - gray - 800 / 50';
            >;
              <div;
                className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}
              >;
                <feature.icon className='w - 6 h - 6 text - white' />;
              </div>;
              <p className='text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight'>                {feature.text}            >;
              <div className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}>;
                <feature.icon className="w - 6 h - 6 text - white" />;
              </div>;
              <p className="text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight">;
            <motion.div'
              className='group p - 4 rounded - xl bg - gray - 800 / 30 backdrop - blur - sm border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:bg - gray - 800 / 50';
            >;
              <div;`
                className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}
              >;'
                <feature.icon className='w - 6 h - 6 text - white' />;
              </div>;'
              <p className='text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight'>                {feature.text}            >;`
              <div className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform`}>;"
                <feature.icon className="w - 6 h - 6 text - white" />;
              </div>;"
              <p className="text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight">;
<<<<<<< HEAD

=======
            <motion.div;
className='group p - 4 rounded - xl bg - gray - 800 / 30 backdrop - blur - sm border border - gray - 700 / 50 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:bg - gray - 800 / 50'    />
}
              <div;}
                className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover: shadow - lg hover:shadow - cyan - 400 / 40 transition - transform
}    />

                <feature.icon className='w - 6 h - 6 text - white'    />;
              </div>;
              <p className='text - xs text - gray - 300 group - hover: text - white transition - colors text - center leading - tight'    />                {feature.tex}
}            >;
              <div className={`w - 12 h - 12 mx - auto mb - 3 rounded - lg bg - gradient - to - r ${feature.color} flex items - center justify - center group - hover: shadow - lg hover:shadow - cyan - 400 / 40 transition - transform
}    />
"
                <feature.icon className=\"w - 6 h - 6 text - white\"    />;
              </div>;"
              <p className=\"text - xs text - gray - 300 group - hover:text - white transition - colors text - center leading - tight\"    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {feature.text}
              </p>;
            </motion.div>))}
        </motion.div>;
        {/* Stats */}
        <motion.div;

<<<<<<< HEAD
          {stats.map ((stat, index) => (
            <motion.div;

=======
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          initial={{ opacity: 0, coordinate_y: 30 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}'"
          className='grid grid - cols - 2 md:grid - cols - 4 gap - 8'        >          className="grid grid - cols - 2 md:grid - cols - 4 gap - 8";
        >;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}className='text - center group';
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className='text - center group';
<<<<<<< HEAD


=======
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}className='text - center group';
>>>>>>> origin/cursor/delete-old-data-records-6bba
            >;
              <div className='w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform'>;
                <stat.icon className='w - 8 h - 8 text - cyan - 400' />;
              </div>;
              <div className='text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                {stat.number}
              </div>;
              <div className='text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors'>                {stat.label}            >;
              <div className="w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform">;
                <stat.icon className="w - 8 h - 8 text - cyan - 400" />;
              </div>;
<<<<<<< HEAD

              <div className="text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;

=======
              <div className="text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;{stat.number}
                {stat.number}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </div>;
              <div className="text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors">;
                {stat.label}className='text-center group';
            >;
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform'>;
                <stat.icon className='w-8 h-8 text-cyan-400' />;
              </div>;
              <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                {stat.number}
              </div>;
              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>                {stat.label}<div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>;
                {stat.label}</div>;
            </motion.div>;
                {stat.label}
<<<<<<< HEAD


            >
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform'>
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}'
          initial={{ opacity: 0, coordinate_y: 30 }
}
          animate={{ opacity: 1, coordinate_y: 0 }
}
          transition={{ duration: 0.8, delay: 0.6 }}"
          className='grid grid - cols - 2 md:grid - cols - 4 gap - 8'         />          className=\"grid grid - cols - 2 md:grid - cols - 4 gap - 8\">

              key={stat.labe}
}
              initial={{ opacity: 0, scale: 0.8 }
}
              animate={{ opacity: 1, scale: 1 }
}

              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className='text - center group';
            >;'
              <div className='w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform'>;'
                <stat.icon className='w - 8 h - 8 text - cyan - 400' />;
              </div>;'
              <div className='text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                {stat.number}
              </div>;'
              <div className='text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors'>                {stat.label}            >;"
              <div className="w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform">;"
                <stat.icon className="w - 8 h - 8 text - cyan - 400" />;
              </div>;"
              <div className="text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;

                {stat.number}
              </div>;"
              <div className="text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors">;
                {stat.label}

className='text-center group'
origin/cursor/automate-test-improve-and-merge-code-2533

className='text-center group'
            >
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform'>
                <stat.icon className='w-8 h-8 text-cyan-400' />
              </div>'
              <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                {stat.number}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              key={stat.labe}
}
              initial={{ opacity: 0, scale: 0.8 }
}
              animate={{ opacity: 1, scale: 1 }
}

              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}

className='text-center group'
            >
              <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform'    />
                <stat.icon className='w-8 h-8 text-cyan-400'    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </div>
              <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'    />
                {stat.number}
              </div>
<<<<<<< HEAD

              </div>
            </motion.div>
          ))}


              <div className=text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>                {stat.label}

              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors>
origin/cursor/automate-test-improve-and-merge-code-2533



=======
              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>                {stat.label}
              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>                {stat.label}

              <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors'>
origin/cursor/automate-test-improve-and-merge-code-2533

              className='text - center group;
            >;
              <div className='w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform'>;
                <stat.icon className=w - 8 h - 8 text - cyan - 400' />;
              </div>;'
              <div className=text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors>;
                {stat.number}
              </div>;'
              <div className='text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors>                {stat.label}            >;"
              <div className="w - 16 h - 16 mx - auto mb - 4 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 flex items - center justify - center group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform>;
                <stat.icon className="w - 8 h - 8 text - cyan - 400" />;
              </div>;
              <div className=text - 3xl md:text - 4xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;

                {stat.number}
              </div>;"
              <div className=text - sm text - gray - 400 group - hover:text - gray - 300 transition - colors>;
                {stat.label}
>>>>>>> origin/cursor/delete-old-data-records-6bba




<<<<<<< HEAD

        {/* Scroll Indicator */}

          animate={{ opacity: 1 }}

=======
          )
}
        </motion.div>;
          ))}

          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              className='text-center group'

className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center''
          >
            <motion.div,
animate={{ "y": [0, 12, 0] }}
              transition={{ "duration": 2, "repeat": Infinity }}
className='w-1 h-3 bg-cyan-400 rounded-full mt-2'' />

          animate={{ opacity: 1 }
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}

<<<<<<< HEAD

=======
className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center''
>>>>>>> origin/cursor/delete-old-data-records-6bba
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
<<<<<<< HEAD


            />


=======
className='w-1 h-3 bg-cyan-400 rounded-full mt-2'
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity}}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity}}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"

          transition={{ duration: 1, delay: 1.2 }
}
className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
            />
          <motion.div;
animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }
}
}
        </motion.div>;
          ))}
        </motion.div>;
              <p className="text-xs text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'
              />
            <motion.div;
animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
className='w-1 h-3 bg-cyan-400 rounded-full mt-2'
               />
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </motion.div>
      </div>

<<<<<<< HEAD
=======
            />;
/>;
          </motion && motion.div>;
        </motion && motion.div>;
      </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba





<<<<<<< HEAD
=======



>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Floating Elements */}
      <motion&& motion.div
              </div>;

<<<<<<< HEAD
=======

      {/* Floating Elements *
}
      <motion&& motion.div;
              </div />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </motion.div>))}
        </motion.div>;
        {/* Scroll Indicator */}
        <motion.div;
<<<<<<< HEAD
          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }
=======
          initial={{ "opacity": 0 }}
          animate={{ "opacity": 1 
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
          transition={{ "duration": 1, "delay": 1.2 
}
<<<<<<< HEAD
          className='absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2'            />;

=======
          className='absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2'        >;'
          <motion.div;
            animate={{ "coordinate_y": [0, 10, 0] }}
            transition={{ "duration": 2, "repeat": Infinity 
}
            className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'          >;'
            <motion.div;
              animate={{ "coordinate_y": [0, 12, 0] }}
              transition={{ "duration": 2, "repeat": Infinity 
}
              className='w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2' />          className="absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2">"

          <motion.div;
            animate={{ "coordinate_y": [0, 10, 0] }}
            transition={{ "duration": 2, "repeat": Infinity 
}
            className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'            className="w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center">"

            <motion.div;
              animate={{ "coordinate_y": [0, 12, 0] }}
              transition={{ "duration": 2, "repeat": Infinity 
}
              className='w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2'              className="w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2";" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <motion.div;
            animate={{ coordinate_y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }
}
            className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'              />;
            <motion.div;
              animate={{ coordinate_y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }
}"
              className='w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2'               />          className=\"absolute bottom - 8 left - 1/2 transform -translate - x-1 / 2\">

          <motion.div;
            animate={{ coordinate_y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }
}"
            className='w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center'            className=\"w - 6 h - 10 border - 2 border - cyan - 400 rounded - full flex justify - center\"    />

            <motion.div;
              animate={{ coordinate_y: [0, 12, 0] }}
<<<<<<< HEAD

              transition={{ duration: 2, repeat: Infinity }
}"
              className='w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2'              className=\'w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2\';
               />;

=======
              transition={{ duration: 2, repeat: Infinity }}
              className='w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2'              className="w - 1 h - 3 bg - cyan - 400 rounded - full mt - 2";
            />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </motion.div>;
      </div>;
      {/* Floating Elements */}
      <motion.div;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        animate={{ rotate: 360 }}

        animate={{ "rotate": 360 

}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full";
        className='absolute top - 20 right - 20 w - 32 h - 32 border border - cyan - 500 / 20 rounded - full';
      />;
      <motion.div;
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className='absolute bottom - 20 left - 20 w - 24 h - 24 border border - purple - 500 / 20 rounded - full';
      />;
    </section>)/>;
      <motion.div;
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}

<<<<<<< HEAD






      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className='absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full'

      />
    </section>

  );


}
        className='absolute top - 20 right - 20 w - 32 h - 32 border border - cyan - 500 / 20 rounded - full';

      />;
      <motion.div;
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className='absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full';
}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: linear" }}"
        className=absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full
        className='absolute top - 20 right - 20 w - 32 h - 32 border border - cyan - 500 / 20 rounded - full';
      />;
      <motion.div;
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: linear' }}'
        className='absolute bottom - 20 left - 20 w - 24 h - 24 border border - purple - 500 / 20 rounded - full';
      />;
    </section>);      />;
      <motion.div;
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className='absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full'
origin/cursor/automate-test-improve-and-merge-code-2533
transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className='absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full'
      />
      <motion.div;
        animate={{ rotate: -360 }}'
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}'
        className='absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full'
}
        animate={{ rotate: -360 }}"
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}"
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"'
        className='absolute top - 20 right - 20 w - 32 h - 32 border border - cyan - 500 / 20 rounded - full';
      />;
      <motion.div;
        animate={{ rotate: -360 }}'
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}'
        className='absolute bottom - 20 left - 20 w - 24 h - 24 border border - purple - 500 / 20 rounded - full';
      />;
    </section>);      />;
      <motion.div;
        animate={{ rotate: -360 }}"
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}"
        className="absolute bottom - 20 left - 20 w - 24 h - 24 border border - purple - 500 / 20 rounded - full";
      />;
    </section>);
}





=======
transition={{ "duration": 20, "repeat": Infinity, "ease": 'linear' }}'
        className='absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full'' />
      <motion.div,
animate={{ "rotate": -360 
}
        transition={{ "duration": 25, "repeat": Infinity, "ease": 'linear' ,'
}
        className='absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full'' />
    </section>
origin/cursor/automate-test-improve-and-merge-code-2533

}
  );
    </section>)}}/>;
    </section>;
  )
      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360}}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/20 rounded-full"
      />
    </section>
  )
}
  )
}


}
  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
