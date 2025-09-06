  Rocket,
  CheckCircle,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Zap,
  Users,
  Clock,
  Target,
  Star,
  FileText,
  Video,
  Code,
export default function GetStarted() {;
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {;
    if (currentStep < 4) {;
      setCurrentStep(currentStep + 1);    }
  ];
    {
      title: 'Free Consultation',
      description: '30 - minute session to discuss your needs',
      duration: '30 min',
  };

      color: 'from-orange-500 to-red-600'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const handlePathSelection = (pathId: string) => {;
    setSelectedPath(pathId);
    setCurrentStep(2);
  };
  const handleNextStep = () => {;
    if (currentStep < 4) {;
      setCurrentStep(currentStep + 1);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const handlePreviousStep = () => {;
    if (currentStep > 1) {;




  return (
      setCurrentStep(currentStep - 1);    }
  }
  return (


              </div>
            </div>
          </motion.div>
        </div>
      </section>
              Begin your journey into the future of AI consciousness, quantum;
              computing, and autonomous systems. Our expert team will guide you;
              every step of the way.;
            </p>;


      {/* Onboarding Steps */}
      <section className='py-20'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Simple 4-Step Process
            </h2>
            <p className='text-xl text-gray-400'>
              From initial consultation to full implementation
            </p>
          </motion.div>
              <motion.div
            transition={{ duration: 0 && 0.8 }}
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Simple 4-Step Process;
            </h2>;
            <p className='text-xl text-gray-400'>;
              From initial consultation to full implementation;
            </p>;
          </motion && motion.div>;

          <div className='grid md:grid-cols-4 gap-8'>            {onboardingSteps && onboardingSteps.map((step, index) => (;
              <motion&& motion.div
                key={step && step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 ${
                  currentStep === step && step.step
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50'
                    : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'


              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <div className='flex justify-center mb-4'>{step.icon}</div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {step.description}
                </p>              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Paths */}
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>;
        </div>;
      </section>;
      {currentStep === 1 && (
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
            >
              <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                Choose Your Technology Path
              </h2>
              <p className='text-xl text-gray-400'>
                Select the area that best aligns with your business goals
              </p>
            </motion.div>
                <motion.div

              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
                Choose Your Technology Path;
              </h2>;
              <p className='text-xl text-gray-400'>;
                Select the area that best aligns with your business goals;
              </p>;
            </motion && motion.div>;

            <div className='grid lg:grid-cols-2 gap-8'>              {technologyPaths && technologyPaths.map((path, index) => (;
                <motion&& motion.div
                  key={path && path.id}
                >
                  <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">{path.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{path.description}</p>
                      </div>
                    </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {path.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}


                        </ul>;
                      </div>;

                      <div>;
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>;
                          Use Cases;
                        </h4>;
                        <div className='flex flex-wrap gap-2'>;
                          {path && path.useCases.map(useCase => (;
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Use Cases</h4>
                        <div className="flex flex-wrap gap-2">
                          {path.useCases.map((useCase) => (
                            <span
                        </div>;
                      </div>;
                    </div>;

                    <div className='flex items-center justify-between pt-6 border-t border-gray-800/50'>;
                      <div className='flex gap-4 text-sm text-gray-400'>;
                        <span className='flex items-center gap-1'>;
                          <Clock className='w-4 h-4' />;
                          {path && path.timeline}
                        </span>;
                        <span className='flex items-center gap-1'>;
                          <Target className='w-4 h-4' />;
                          {path && path.complexity}
                        </span>;
                      </div>;
                      <div className='flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300'>;
                        <span className='font-medium'>Select Path</span>;
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />                      </div>;
                    </div>;
                  </div>;
                </motion && motion.div>;


              ))}
            </div>;
          </div>;
        </section>;
      )}
      {/* Requirements Definition */}
      {currentStep === 2 && (;
        <section className='py-20 bg-gradient-to-r from-gray-900/50 to-black'>;
          <div className='container mx-auto px-4'>            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-800/50">
                      <div className="flex gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {path.timeline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          {path.complexity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="font-medium">Select Path</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Requirements Definition */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {currentStep === 2 && (
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Define Your Requirements
              </h2>
              <p className="text-xl text-gray-400">Help us understand your project goals and constraints</p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Selected Path: {technologyPaths.find(p => p.id === selectedPath)?.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className="text-gray-300">
                    Now let's gather more details about your specific needs
                  </p>
                </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Timeline</label>
                      <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300">
                        <option>Immediate (1-2 weeks)</option>
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                      </select>
                    </div>
                        <option>$50K - $100K</option>
                        <option>$100K - $500K</option>
                        <option>$500K+</option>
                      </select>
                    </div>
                  </div>
                        <option>$50K - $100K</option>;
                        <option>$100K - $500K</option>;
                        <option>$500K+</option>;
                      </select>;
                    </div>;
                  </div>;
                    <button
                      onClick={handlePreviousStep}
                      className='px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300'>;
                      Previous;
                    </button>;
                    <button
                      onClick={handleNextStep}
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>;
                  <div>;
                    <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                      Project Description;
                    </label>;
                    <textarea;
                      rows={6}
                      className='w - full px - 4 py - 3 bg - gray - 800 / 50 border border - gray - 700 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 500 / 50 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300';
                      placeholder='Describe your project goals, challenges, and specific requirements...';
                    />;
                  </div>;
                  <div className='flex justify - between pt - 6'>;
                    <button;
                      on_click={handlePreviousStep}
                      className='px - 6 py - 3 border border - gray - 600 text - gray - 300 rounded - xl hover:border - gray - 500 hover:text - white transition - all duration - 300'                    >;
                      Previous;
                    </button>;
                    <button;
                      on_click={handleNextStep}
                      className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - xl hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300'                    >;
                      Next Step;
                    </button>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Describe your project goals, challenges, and specific requirements..."
                    />
                  </div>
                    <button
                      onClick={handlePreviousStep  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300"
                    >
                      Previous
                    </button>
                    <button
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
      {/* Quick Start Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          >
            <h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Quick Start Options
            </h2>
            <p className='text-xl text-gray-400'>
              Get started immediately with these quick options
            </p>
          </motion.div>
              <motion.div

        </section>)}
      {/* Quick Start Options */}
      <section className='py - 20'>;
        <div className='container mx - auto px - 4'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Quick Start Options;
            </h2>;
            <p className='text - xl text - gray - 400'>;
              Get started immediately with these quick options;
            </p>;
          </motion.div>;
          <div className='grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>            {quickStartOptions.map ((option, index) => (
              <motion.div;

                key={option.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                    {option.title}
                  </h3>;
                  <p className='text - gray - 300 mb - 4 text - center leading - relaxed'>;
                    {option.description}
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {option.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{option.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{option.description}</p>
                  
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm">
                      <Clock className="w-4 h-4" />
                      {option.duration}
                    </span>
                  </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a roadmap to success.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              <a
                href="/quote"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Get a Quote
            </div>
          </motion.div>
        </div>
      </section>
    </div>
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0.8, delay: index * 0.1
}className= {
  `text-center p-6 rounded-2xl border transition-all duration-300 $ {
  currentStep === step.step ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50' : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/50'
}`
}> </motion.div>) )
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Choose Your Technology Path </h2> <p className="text-xl text-gray-400" >Select the area that best aligns with your business goals</p> </motion.div> </div> </div> <div className="grid md:grid-cols-2 gap-6 mb-6" > <div> </li>) )
}</ul> </div> <div> <span key= {
  useCase
}className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm" > {
  useCase
}</span>) )
}</div> </div> </div> </span> </div> <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" > <span className="font-medium" >Select Path</span> <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> </div> </div> </div> </motion.div>) )
}</div> </div> </section>)
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Define Your Requirements </h2> <p className="text-xl text-gray-400" >Help us understand your project goals and constraints</p> </motion.div> </h3> <p className="text-gray-300" > Now let's gather more details about your specific needs </p> </div> <div className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Timeline</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Immediate (1-2 weeks) </option> <option>1-3 months</option> <option>3-6 months</option> <option>6+ months</option> </select> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Budget Range</label> <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" > <option>Under $50K</option> <option>$50K - $100K</option> <option>$100K - $500K</option> <option>$500K+</option> </select> </div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-2" >Project Description</label> <textarea /> </div> <div className="flex justify-between pt-6" > <button > Previous </button> <button > Next Step </button> </div> </div> </div> </div> </div> </section>)
}> <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Quick Start Options </h2> <p className="text-xl text-gray-400" >Get started immediately with these quick options</p> </motion.div> </span> </div> <button className= {
  {
  opacity: 0, y: 20
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
          >;
            <h2 className='text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent'>;
              Ready to Begin Your Journey?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Our team of experts is ready to help you navigate the future of;
              technology. Let's discuss your project and create a roadmap to;
              success.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='/contact';
                className='inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - 2xl font - semibold hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                Contact Our Team;
                <ArrowRight className='w - 5 h - 5' />;
              </a>;
              <a;
                href='/quote';
                className='inline - flex items - center gap - 2 border border - cyan - 500 / 30 text - cyan - 400 px - 8 py - 4 rounded - 2xl font - semibold hover:bg - cyan - 500 / 10 transition - all duration - 300'              >;
                Get a Quote;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
