  Globe,;
  Building,;} from 'lucide-react';

export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);

import React, { useState } from 'react',
import { motion } from 'framer-motion',
import {
  Rocket, CheckCircle, ArrowRight, Brain, Atom,
  Shield, Zap, Users, Clock, Target, Star,
  FileText, Video, Code, Globe, Building
} from 'lucide-react',
export default function GetStarted() {
  const [selectedPath, setSelectedPath] = useState<string>(''),
  const [currentStep, setCurrentStep] = useState(1),
  const onboardingSteps = [
    {
      step: 1,
      title: 'Choose Your Path',
      description: 'Select the technology area that best fits your needs',

  const onboardingSteps = [;
    {;
      step: 1,;
      title: 'Choose Your Path',;
      description: 'Select the technology area that best fits your needs',;
      icon: <Target className='w-8 h-8 text-cyan-400' />,;
    },    {;
      step: 2,;
      title: 'Define Requirements',;
      description: 'Tell us about your project goals and constraints',;
      icon: <FileText className='w-8 h-8 text-purple-400' />,;
    },    {;
      step: 3,;
      title: 'Get Your Proposal',;
      description: 'Receive a detailed proposal and implementation plan',;
      icon: <Star className='w-8 h-8 text-yellow-400' />,;
    },    {;
      step: 4,;
      title: 'Begin Implementation',;
      description: 'Start your journey with our expert team',;
      icon: <Rocket className='w-8 h-8 text-green-400' />,;
    },  ];
  const technologyPaths = [;
    {;
      id: 'ai-consciousness',;
      name: 'AI Consciousness & Emotional Intelligence',;
      description:;
        'Develop AI systems with genuine self-awareness and emotional intelligence',;
      icon: <Brain className='w-8 h-8 text-cyan-400' />,;
      features: [;
        'AI consciousness development',;
        'Emotional intelligence training',;
        'Self-aware neural networks',;
        'Autonomous decision making',;
      ],;
      useCases: [;
        'Customer Success',;
        'HR Analytics',;
        'Mental Health',;
        'Education',;
      ],;
      timeline: '6-12 months',;
      complexity: 'Advanced',;
    },;
    {;
      id: 'quantum-computing',;
      name: 'Quantum Computing Solutions',;
      description:;
        'Leverage quantum computing for cryptography, optimization, and simulation',;
      icon: <Atom className='w-8 h-8 text-purple-400' />,;
      features: [;
        'Quantum algorithms',;
        'Post-quantum cryptography',;
        'Quantum machine learning',;
        'Quantum simulation',;
      ],;
      useCases: [;
        'Financial Services',;
        'Healthcare',;
        'Research',;
        'Cybersecurity',;
      ],;
      timeline: '8-18 months',;
      complexity: 'Expert',;
    },;
    {;
      id: 'autonomous-systems',;
      name: 'Autonomous Business Systems',;
      description:;
        'Build self-managing and self-optimizing business operations',;
      icon: <Rocket className='w-8 h-8 text-green-400' />,;
      features: [;
        'Process automation',;
        'Self-healing infrastructure',;
        'Predictive maintenance',;
        'Autonomous operations',;
      ],;
      useCases: ['Manufacturing', 'DevOps', 'Customer Service', 'Supply Chain'],;
      timeline: '3-9 months',;
      complexity: 'Intermediate',;
    },;
    {;
      id: 'enterprise-solutions',;
      name: 'Enterprise Technology Platform',;
      description:;
        'Modernize your infrastructure with cloud-native and AI-powered solutions',;
      icon: <Building className='w-8 h-8 text-blue-400' />,;
      features: [;
        'Cloud migration',;
        'Microservices architecture',;
        'AI-powered analytics',;
        'Security automation',;
      ],;
      useCases: [;
        'Digital Transformation',;
        'Legacy Modernization',;
        'Data Analytics',;
        'Security',;
      ],;
      timeline: '4-12 months',;
      complexity: 'Intermediate',;
    },  ];
  const quickStartOptions = [;
    {;
      title: 'Free Consultation',;
      description: '30-minute session to discuss your needs',;
      duration: '30 min',;
      icon: <Users className='w-6 h-6' />,;
      action: 'Schedule Call',;
      color: 'from-cyan-500 to-blue-600',;
    },    {;
      title: 'Demo Session',;
      description: 'See our technology in action',;
      duration: '45 min',;
      icon: <Video className='w-6 h-6' />,;
      action: 'Book Demo',;
      color: 'from-purple-500 to-pink-600',;
    },    {;
      title: 'Technical Assessment',;
      description: 'Evaluate your current technology stack',;
      duration: '2 hours',;
      icon: <Code className='w-6 h-6' />,;
      action: 'Start Assessment',;
      color: 'from-green-500 to-emerald-600',;
    },    {;
      title: 'Pilot Project',;
      description: 'Small-scale implementation to prove value',;
      duration: '4-8 weeks',;
      icon: <Rocket className='w-6 h-6' />,;
      action: 'Discuss Pilot',;
      color: 'from-orange-500 to-red-600',;
    },  ];

            transition={{ duration: 0 && 0.8 }}
transition={{ duration: 0 && 0.8 }}
      {/* Onboarding Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className="text-center mb-16"
      {/* Onboarding Steps */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
      {/* Onboarding Steps */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
          <div className='grid md:grid-cols-4 gap-8'>            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                }`}
          <div className="grid md:grid-cols-4 gap-8">
            {onboardingSteps.map((step, index) => (
              <motion.div
                key={step.step  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 ${;
                  currentStep === step.step;
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50';
                    : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                              key={useCase}
                              className='px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm'                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center justify-between pt-6 border-t border-gray-800/50'>
                      <div className='flex gap-4 text-sm text-gray-400'>
                        <span className='flex items-center gap-1'>
                          <Clock className='w-4 h-4' />
                          {path.timeline}
                              key={useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                            >
                              {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            </span>;
                          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>
                      </div>
                    </div>
                    />;
                  </div>;
                  <div className='flex justify-between pt-6'>;
className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                      onClick={handleNextStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onClick={handleNextStep}
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'                    >
                      Next Step

                    <button
                      onClick={handlePreviousStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                    <button

                      onClick={handlePreviousStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"

<div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Project Description
                    </label>
                    <textarea
                      rows={6}
                      className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'
                      placeholder='Describe your project goals, challenges, and specific requirements...'
                    />
                  </div>
                  <div className='flex justify-between pt-6'>
                    <button
                      onClick={handlePreviousStep}
                      className='px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300'

                    >
                      Previous;
                    </button>

                    >
                      Next Step;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
:pages/get-started.tsx
      )}
      {/* Quick Start Options */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'

      )  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Quick Start Options */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

      )}
      {/* Quick Start Options */}
<section className='py-20'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='text-center mb-16'

          >

            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quick Start Options;
            </h2>"
            <p className="text-xl text-gray-400">Get started immediately with these quick options</p>
          </motion.div>
:pages/get-started.tsx
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>            {quickStartOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='group cursor-pointer'

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartOptions.map((option, index) => (

              <motion.div

        </section>)}
      {/* Quick Start Options */}'
      <section className='py - 20'>;'
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}'
            className='text - center mb - 16';
          >;'
            <h2 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Quick Start Options;
            </h2>;'
            <p className='text - xl text - gray - 400'>;
              Get started immediately with these quick options;
            </p>;
          </motion.div>;'
          <div className='grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>            {quickStartOptions.map ((option, index) => (
              <motion.div;

                key={option.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
className='inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300'>;
                Get a Quote;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </div>;
  ),;
}whileInView= {;
  {;
  opacity: 1, y: 0 ;
}transition= {;
  {;
  duration: 0 && 0.8, delay: index * 0 && 0.1 ;
}className= {;
  `text-center p-6 rounded-2xl border transition-all duration-300 $ {;
  currentStep === step && step.step ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50' ;
}` ;
}> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Choose Your Technology Path </h2> <p className="text-xl text-gray-400" >Select the area that best aligns with your business goals</p> </motion && motion.div> </div> </div> <div className="grid md:grid-cols-2 gap-6 mb-6" > <div> </li>) ) ;
}</ul> </div> <div> <spankey= {
  useCase 
}className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm"> {;
  useCase ;
}</span>) ) ;
}</div> </div> </div> </span> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="font-medium" >Select Path</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section>) ;
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Define Your Requirements </h2> <p className="text-xl text-gray-400" >Help us understand your project goals and constraints</p> </motion && motion.div> </h3> <p className="text-gray-300" > Now let's gather more details about your specific needs </p> </div> <div className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Timeline</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Immediate (1-2 weeks) </option> <option>1-3 months</option> <option>3-6 months</option> <option>6+ months</option> </select> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Budget Range</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Under $50K</option> <option>$50K - $100K</option> <option>$100K - $500K</option> <option>$500K+</option> </select> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Description</label> <textarea /> </div> <div className="flex justify-between pt-6" > <button > Previous </button> <button > Next Step </button> </div> </div> </div> </div> </div> </section>) ;
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Quick Start Options </h2> <p className="text-xl text-gray-400" >Get started immediately with these quick options</p> </motion && motion.div> </span> </div> <buttonclassName= {
)
),

