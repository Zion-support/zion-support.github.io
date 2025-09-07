import React, { useState } from 'react',
import SEO from '../components/SEO',
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, Award, BookOpen, Video;
  Headphones, Code, Brain, Atom, Rocket, Shield, Zap;
  Star, CheckCircle, ArrowRight, ChevronDown, ChevronUp;
  Play, Download, ExternalLink, Calendar, MapPin, DollarSign;
  TrendingUp, Target, Lightbulb, Building, Globe, Server
 } from 'lucide-react';
export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null),

  const trainingCategories = null;
import React from 'react';
import Layout from '../components/Layout';

export default function Training() {
  return (
    <Layout
      title="Training & Education - Zion Tech Group"
      description="Professional training and education services for technology professionals."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Training & Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional training and education services for technology professionals.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Training page is under construction.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
  return (
    <Layout>
      <SEO
        title="Training & Certification - Zion Tech Group"
        description="Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career."
      />
      <div className="min-h-screen">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Training & Certification
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Master the future of technology with our comprehensive training programs in AI consciousness, quantum computing, and autonomous operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Expert-Led Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Industry Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Global Community</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Training page is under construction.</p>
          </div>
        </div>
      </div>
    </Layout>;
  );
}
};
  )
};

export default Training;
};export default Training;
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const toggleProgram = (id: number) => {
    setExpandedProgram(expandedProgram === id ? null : id);  };

  return (
    <Layout>
      <SEO
        title='Training & Certification - Zion Tech Group'
        description='Master AI consciousness, quantum computing, and autonomous operations with our comprehensive training programs. Earn industry-recognized certifications and advance your career.'
      />

      <div className='min-h-screen'>
        {/* Hero Section */}
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10' />
          <div className='relative z-10 container mx-auto px-4 text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className='text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
                Training & Certification
              </h1>
              <p className='text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8'>
                Master the future of technology with our comprehensive training
                programs in AI consciousness, quantum computing, and autonomous
                operations.
              </p>
              <div className='flex flex-wrap justify-center gap-4 text-gray-400'>
                <div className='flex items-center gap-2'>
                  <GraduationCap className='w-5 h-5' />
                  <span>Expert-Led Training</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Award className='w-5 h-5' />
                  <span>Industry Certifications</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='w-5 h-5' />                  <span>Global Community</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className='py-10'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center gap-3'>
              {trainingCategories.map(category => (                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Featured Programs
              </h2>
              <p className='text-xl text-gray-400'>
                Our most popular and comprehensive training programs
              </p>
            </motion.div>

            <div className='grid lg:grid-cols-3 gap-8 mb-16'>              {featuredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'
                >
                  <div className='h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center'>
                    {program.icon}
                  </div>
                  <div className='p-6'>
                    <div className='flex items-center gap-2 mb-3'>
                      <span
                        className={`px-3 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${getCategoryColor(program.category)}-400 rounded-full text-sm border border-${getCategoryColor(program.category)}-500/30`}
                      >
                        {program.category.replace('-', ' ')}
                      </span>
                      <span className='text-gray-400 text-sm'>
                        {program.level}
                      </span>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-3'>
                      {program.title}
                    </h3>
                    <p className='text-gray-300 mb-4'>{program.description}</p>

                    <div className='flex items-center gap-4 text-sm text-gray-400 mb-4'>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-4 h-4' />
                        <span>{program.duration}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Users className='w-4 h-4' />
                        <span>{program.students} students</span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-1'>
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='text-white font-medium'>
                          {program.rating}
                        </span>
                      </div>
                      <span className='text-2xl font-bold text-cyan-400'>
                        {program.price}
                      </span>
                    </div>

                    <div className='space-y-2 mb-6'>
                      {program.highlights
                        .slice(0, 3)
                        .map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className='flex items-center gap-2 text-sm text-gray-300'
                          >
                            <CheckCircle className='w-4 h-4 text-green-400' />
                            <span>{highlight}</span>
                          </div>
                        ))}
                    </div>

                    <a
                      href='#'
                      className='w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105'
                    >
                      Enroll Now
                      <ArrowRight className='w-4 h-4' />                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Programs */}
        <section className='py-20 bg-black/50'>
          <div className='container mx-auto px-4'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                All Training Programs
              </h2>
              <p className='text-xl text-gray-400'>
                Comprehensive collection of training programs across all
                technology domains
              </p>
            </motion.div>

            <div className='space-y-4'>              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden'
                >
                  <div className='p-6'>
                    <div className='flex items-start gap-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0'>
                        {program.icon}
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center gap-2 mb-2'>
                          <span
                            className={`px-2 py-1 bg-${getCategoryColor(program.category)}-500/20 text-${getCategoryColor(program.category)}-400 rounded text-xs border border-${getCategoryColor(program.category)}-500/30`}
                          >
                            {program.category.replace('-', ' ')}
                          </span>
                          <span className='text-gray-400 text-xs'>
                            {program.level}
                          </span>
                        </div>

                        <h3 className='text-lg font-bold text-white mb-2'>
                          {program.title}
                        </h3>
                        <p className='text-gray-300 text-sm mb-3'>
                          {program.description}
                        </p>

                        <div className='flex items-center gap-4 text-xs text-gray-400 mb-3'>
                          <div className='flex items-center gap-1'>
                            <Clock className='w-3 h-3' />
                            <span>{program.duration}</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Users className='w-3 h-3' />
                            <span>{program.students} students</span>
                          </div>
                          <div className='flex items-center gap-1'>
                            <Star className='w-3 h-3 text-yellow-400 fill-current' />                            <span>{program.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className='text-right flex-shrink-0'>
                        <div className='text-2xl font-bold text-cyan-400 mb-2'>                          {program.price}
                        </div>
                        <button
                          onClick={() => toggleProgram(program.id)}
                          className='text-gray-400 hover:text-white transition-colors duration-300'
                        >
                          {expandedProgram === program.id ? (
                            <ChevronUp className='w-5 h-5' />
                          ) : (
                            <ChevronDown className='w-5 h-5' />                          )}
                        </button>
                      </div>
                    </div>
                    {expandedProgram === program.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='mt-4 pt-4 border-t border-gray-700'
                      >
                        <div className='grid md:grid-cols-2 gap-6'>
                          <div>
                            <h4 className='text-white font-semibold mb-3'>
                              What You'll Learn
                            </h4>
                            <ul className='space-y-2 text-sm text-gray-300'>
                              <li className='flex items-center gap-2'>
                                <CheckCircle className='w-4 h-4 text-green-400' />
                                <span>Core concepts and principles</span>
                              </li>
                              <li className='flex items-center gap-2'>
                                <CheckCircle className='w-4 h-4 text-green-400' />
                                <span>Hands-on practical exercises</span>
                              </li>
                              <li className='flex items-center gap-2'>
                                <CheckCircle className='w-4 h-4 text-green-400' />
                                <span>Real-world project implementation</span>
                              </li>
                              <li className='flex items-center gap-2'>
                                <CheckCircle className='w-4 h-4 text-green-400' />                                <span>Industry best practices</span>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 className='text-white font-semibold mb-3'>
                              Program Details
                            </h4>
                            <div className='space-y-2 text-sm text-gray-300'>
                              <div className='flex justify-between'>
                                <span>Duration:</span>
                                <span className='text-white'>
                                  {program.duration}
                                </span>
                              </div>
                              <div className='flex justify-between'>
                                <span>Level:</span>
                                <span className='text-white'>
                                  {program.level}
                                </span>
                              </div>
                              <div className='flex justify-between'>
                                <span>Format:</span>
                                <span className='text-white'>
                                  Online + Live Sessions
                                </span>
                              </div>
                              <div className='flex justify-between'>
                                <span>Support:</span>
                                <span className='text-white'>
                                  24/7 Community + Mentors
                                </span>                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='mt-6 flex gap-3'>
                          <a
                            href='#'
                            className='flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300'
                          >
                            Enroll Now
                            <ArrowRight className='w-4 h-4' />
                          </a>
                          <a
                            href='#'
                            className='inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300'                          >
                            Learn More
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl font-bold text-white mb-4'>
                Learning Paths
              </h2>
              <p className='text-xl text-gray-400'>
                Structured learning journeys to master complete technology
                domains
              </p>
            </motion.div>

            <div className='grid lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'AI Consciousness Expert',
                  description:
                    'Complete path from fundamentals to advanced AI consciousness development.',
                  duration: '6-12 months',
                  courses: 8,
                  level: 'Beginner to Expert',
                  icon: <Brain className='w-12 h-12' />,
                  color: 'cyan',
                  path: [
                    'AI Consciousness Fundamentals',
                    'Consciousness Architecture Design',
                    'Advanced Implementation',
                    'Ethics and Governance',
                    'API Development',
                    'System Optimization',
                    'Real-world Applications',
                    'Expert Certification',
                  ],
                },
                {
                  title: 'Quantum Computing Specialist',
                  description:
                    'Master quantum computing from basic principles to enterprise implementation.',
                  duration: '8-16 months',
                  courses: 6,
                  level: 'Intermediate to Expert',
                  icon: <Atom className='w-12 h-12' />,
                  color: 'purple',
                  path: [
                    'Quantum Computing Basics',
                    'Quantum Algorithms',
                    'Machine Learning Integration',
                    'Security Implementation',
                    'Enterprise Solutions',
                    'Advanced Applications',
                  ],
                },
                {
                  title: 'Autonomous Operations Leader',
                  description:
                    'Lead the transformation to fully autonomous business operations.',
                  duration: '6-10 months',
                  courses: 5,
                  level: 'Intermediate to Advanced',
                  icon: <Rocket className='w-12 h-12' />,
                  color: 'green',
                  path: [
                    'Business Process Analysis',
                    'Automation Strategy',
                    'System Implementation',
                    'Change Management',
                    'Performance Optimization',
                  ],
                },              ].map((path, index) => (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300'
                >
                  <div className='text-center mb-6'>
                    <div
                      className={`w-20 h-20 bg-${path.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      {path.icon}
                    </div>
                    <h3 className='text-2xl font-bold text-white mb-3'>
                      {path.title}
                    </h3>
                    <p className='text-gray-300 mb-4'>{path.description}</p>
                    <div className='flex items-center justify-center gap-4 text-sm text-gray-400'>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-4 h-4' />
                        <span>{path.duration}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <BookOpen className='w-4 h-4' />                        <span>{path.courses} courses</span>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-3 mb-6'>
                    {path.path.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className='flex items-center gap-3 text-sm'
                      >
                        <div className='w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold'>
                          {stepIndex + 1}
                        </div>
                        <span className='text-gray-300'>{step}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href='#'
                    className={`w-full inline-flex items-center justify-center gap-2 bg-${path.color}-500/20 text-${path.color}-400 font-bold py-3 px-6 rounded-xl border border-${path.color}-500/30 hover:bg-${path.color}-500 hover:text-white transition-all duration-300`}
                  >
                    Start Learning Path
                    <ArrowRight className='w-4 h-4' />                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'>
          <div className='container mx-auto px-4 text-center'>            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl font-bold text-white mb-6'>
                Ready to Transform Your Career?
              </h2>
              <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
                Join thousands of professionals who have already mastered the
                future of technology. Start your learning journey today and earn
                industry-recognized certifications.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='/contact'
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105'                >
                  Get Personalized Guidance
                </a>
                <a
                  href='/resources'
                  className='px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300'                >
                  Explore Free Resources
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  ),
      </div>
    </Layout>
  );
}
};
  )
}
export default Training;
};export default Training;

  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6" > Training & Certification </h1> </p> <div className="flex flex-wrap justify-center gap-4 text-gray-400" > <div className="flex items-center gap-2" > <GraduationCap className="w-5 h-5" /> <span>Expert-Led Training</span> </div> <div className="flex items-center gap-2" > <Award className="w-5 h-5" /> <span>Industry Certifications</span> </div> <div className="flex items-center gap-2" > <Users className="w-5 h-5" /> <span>Global Community</span> </div> </div> </motion.div> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-xl font-medium transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Featured Programs </h2> <p className="text-xl text-gray-400" > Our most popular and comprehensive training programs </p> </motion.div> </div>) ) 
}</div> <a href="#" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > All Training Programs </h2> <p className="text-xl text-gray-400" > Comprehensive collection of training programs across all technology domains </p> </motion.div> </div> </div> </div>) : (<ChevronDown className="w-5 h-5" />) 
}</button> </div> </div> {
  expandedProgram === program.id && (<motion.div > <div className="grid md:grid-cols-2 gap-6" > <div> <h4 className="text-white font-semibold mb-3" >What You'll Learn</h4> <ul className="space-y-2 text-sm text-gray-300" > <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Core concepts and principles</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Hands-on practical exercises</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Real-world project implementation</span> </li> <li className="flex items-center gap-2" > <CheckCircle className="w-4 h-4 text-green-400" /> <span>Industry best practices</span> </li> </ul> </div> <div> <h4 className="text-white font-semibold mb-3" >Program Details</h4> <div className="space-y-2 text-sm text-gray-300" > <div className="flex justify-between" > <span>Duration:</span> </div> <div className="flex justify-between" > <span>Level:</span> </div> <div className="flex justify-between" > <span>Format:</span> <span className="text-white" >Online + Live Sessions</span> </div> <div className="flex justify-between" > <span>Support:</span> <span className="text-white" >24/7 Community + Mentors</span> </div> </div> </div> </div> <div className="mt-6 flex gap-3" > <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300" > Enroll Now <ArrowRight className="w-4 h-4" /> </Link> <a href="#" className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Learn More </Link> </div> </motion.div>) 
}</div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-4" > Learning Paths </h2> <p className="text-xl text-gray-400" > Structured learning journeys to master complete technology domains </p> </motion.div> </div> </div> </div> </div>) ) 
}</div> <a > Start Learning Path <ArrowRight className="w-4 h-4" /> </Link> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Career? </h2> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Join thousands of professionals who have already mastered the future of technology. Start your learning journey today and earn industry-recognized certifications. </p> <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105" > Get Personalized Guidance </Link> <a href="/resources" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300" > Explore Free Resources </Link> </div> </motion.div> </div> </section> </div> </Layout>) 
};
  )
}
export default Training;
export default Training;
};

export default Training;
};export default Training;