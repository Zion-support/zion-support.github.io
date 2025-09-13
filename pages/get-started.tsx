import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Atom, Shield, Rocket, 
  Star, TrendingUp, CheckCircle, Phone, Mail, MapPin,
  ArrowRight, Zap, Cpu, Database, Cloud, Palette,
  Play, FileText, Video, Download, Calendar, Clock,
  Code
} from 'lucide-react';
import Link from 'next/link';

const GetStarted: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState('');

      icon: <Brain className="w-8 h-8" />,




      icon: <Brain className='w - 8 h - 8 text - cyan - 400' />,
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      description: 'Explore quantum computing solutions for your organization',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      steps: [
        'Quantum readiness assessment',
        'Identify quantum use cases',
        'Quantum infrastructure planning',
        'Quantum algorithm development',
        'Quantum solution deployment'
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      icon: <Rocket className='w - 8 h - 8 text - green - 400' />,
      icon: <Building className='w - 8 h - 8 text - blue - 400' />,



    }
  ];

      icon: <Phone className="w-6 h-6" />,
      icon: <Target className="w-6 h-6" />,
      icon: <Cpu className="w-6 h-6" />,
      icon: <Rocket className="w-6 h-6" />,
      icon: <Users className="w-6 h-6" />,

      icon: <FileText className="w-6 h-6" />,
      icon: <Video className="w-6 h-6" />,
      icon: <Code className="w-6 h-6" />,
      icon: <Star className="w-6 h-6" />,



  };

  return (
    <Layout>
                <Link href="#paths" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                </Link>






      icon: <Users className='w - 6 h - 6' />,
      icon: <Video className='w - 6 h - 6' />,
      icon: <Code className='w - 6 h - 6' />,
      icon: <Rocket className='w - 6 h - 6' />,














              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Choose Your Technology Path
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Select the technology area that aligns with your business goals and objectives
              </p>
            </motion.div>
            



                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  
                  
                  
                      <Link href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>

            
                  <ArrowRight className="w-5 h-5 rotate-180" />
                
                
                  <ArrowRight className="w-5 h-5" />
            
                    
                    
                    
                      <Clock className="w-4 h-4" />
                    
                            <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />

            
                  
                  






                              <CheckCircle className="w-4 h-4 text-cyan-400" />

                              <CheckCircle className='w - 4 h - 4 text - cyan - 400' />;
                          <Clock className='w - 4 h - 4' />;

                          <Target className='w - 4 h - 4' />;



                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />                      </div>
                          <Clock className='w-4 h-4' />;
                          <Target className='w-4 h-4' />;
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />                      </div>;



                    
                          <Clock className="w-4 h-4" />

                          <Target className="w-4 h-4" />
                          <Target className="w-4 h-4" />
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />















                    


                        <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform duration - 300' />                      </div>;




                  














                  



                      <Clock className="w-4 h-4" />
                    </span>
                    {resource.download && (
                      <Download className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm">
                    {resource.download ? 'Download' : 'Access'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>



                <ArrowRight className='w-5 h-5' />;



                <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </section>

        {/* Quick Start Options */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Quick Start Options
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the approach that works best for your timeline and needs
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Clock className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Express Start</h3>
                <p className="text-gray-300 mb-6">
                  Get up and running in 2-4 weeks with our rapid deployment option for urgent needs.
                </p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Express
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Standard Implementation</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive implementation over 8-12 weeks with full customization and training.
                </p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Standard
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
              >
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Scale</h3>
                <p className="text-gray-300 mb-6">
                  Large-scale deployment over 12-16 weeks with dedicated team and custom development.
                </p>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Enterprise
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-5 h-5 mr-2" />
                </Link>
                  <Phone className="w-5 h-5 mr-2" />
    </Layout>



}</div> </div> </div> </span> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="font-medium" >Select Path</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion.div>) )

}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion && motion.div> </div> </section> </div>) ;
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion && motion.div> </div> </section> </div>) ;

                      <Clock className='w - 4 h - 4' />;
                <ArrowRight className='w - 5 h - 5' />;
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion.div> </div> </section> </div>)
}> <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Begin Your Journey? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you navigate the future of technology. Let's discuss your project and create a roadmap to success. </p> <a href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300" > Contact Our Team <ArrowRight className="w-5 h-5" /> </Link> <a href="/quote" className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300" > Get a Quote </Link> </div> </motion.div> </div> </section> </div>)
                <ArrowRight className="w-5 h-5" />;

  );
};

export default GetStarted;


