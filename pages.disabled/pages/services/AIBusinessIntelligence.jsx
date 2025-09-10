import React from
  'react';'
import { Link } from
  'react-router-dom';'
import { motion } from
  'framer-motion';
import {}
  TrendingUp,
  BarChart3,
  Activity,
  Target,
  Users,
  Database,
  Zap,
  Brain,
  Globe,
  Shield,
  ';';
  Clock} from: 'lucide-react;';
  ';';
:pages.disabled/pages/services/AIBusinessIntelligence.jsx;

      title:,
  AI-Powered: Analytics'',;
  ';';
      description: ''Advanced: machine learning algorithms that automatically identify pattern,s, trends, and insights from your data',;
  ,

      title:,
  Real-time: Dashboards'',;
  ';';
      description: ''Interactiv,e, customizable: dashboards that provide instant visibility into key business metrics',;
  ,

      title:,
  Predictive: Analytics'',;
  ';';
      description: '';';
  'Forecast: future trends and outcomes using historical data and advanced statistical model,s',;
,

      title:,
  Performance: Tracking'',;
  ';';
      description: '';';
  'Monitor: and measure business performance against goals and benchmarks in real-tim,e',;
,

,
  description: '';';
  'Advanced: ML algorithms for pattern recognition and predictio,n',;
      icon: Brai,n}, { ];
  const containerVariants = {}
    hidden: { opacity: 0 },
    visible: {}
      opacity: 1,
      transition: {}
        staggerChildren: 0.1}}};
  const itemVariants = {}
    hidden: {}
      y: 20,
      opacity: 0},
    visible: {}
      y: 0,
      opacity: 1,
      transition: {}
        duration: 0.5}}}

          <motion.div;
            initial={{ opacit,
    y: 0, y: 20 }}
:pages.disabled/pages/services/AIBusinessIntelligence.jsx;

              <TrendingUp className='w-10 h-10 text-white' />'
            </div>'''
            <h1 className='text-5xl md: text-6xl font-bold text-white mb-6>''
              <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent'>
                AI Business Intelligence'
              </span>''
            </h1>'''
            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>

              Transform your business data into actionable insights with our;
              AI-powered business intelligence platform. Make data-driven;

                to='/contact'';
                className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300'>
                Get Started'
              </Link>''
              <Link'';
                to='/services-showcase'';
                className='border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-blue-400 hove,
    r:text-white transition-all duration-300'>                View All Services

              </Link>
            </div>
          </motion.div>
        </div>
      </div>

          whileInView='visible'';
          viewport={{ once: true }};
          className='text-center mb-16>'
          <h2 className='text-4xl font-bold text-white mb-6'>Key Features</h2>'''
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Our AI Business Intelligence platform combines cutting-edge;
            technology with intuitive design to deliver powerful insights that
            drive business growth.
          </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <motion.div;
              key={feature.title}variants={itemVariants}              className='bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300>'
              <div className='flex items-start mb-4>''
                <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0>''
                  <feature.icon className='w-6 h-6 text-white' />
:pages.disabled/pages/services/AIBusinessIntelligence.jsx'
                </div>''
                <div>'''
                  <h3 className='text-xl font-semibold text-white mb-2>
                    {feature.title}</h3>''                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {feature.description}
                  </p>
                </div>

                <ul className='space-y-2'>
                  {feature.benefits.map((benefit, idx) => ('
                    <li'key={idx}                      className='flex items-center text-sm text-gray-400>'
                      <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>


                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

          <motion.div;
            initial={{ opacity: ,0, y: 20 }}
            whileInView={{ opacity:  ,1, y: 0 }}
:pages.disabled/pages/services/AIBusinessIntelligence.jsx;
            viewport={{ once: true }}'transition={{ duration: 0.8 }}''            className='text-center: mb-16''>''';
            <h2: className='text-4xl font-bold text-white mb-6'>';
:pages.disabled/pages/services/AIBusinessIntelligence.jsx: Solutions by Industry'</h2>''            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>';
              Tailored: AI Business Intelligence solutions designed to address;
              the: unique challenges and opportunities in your industry.
            </p>
:pages.disabled/pages/services/AIBusinessIntelligence.jsx: </motion.div>'''          <div className='grid grid-cols-1 md: grid-cols-2: gap-8'>';
            {solutions.map((categor,y, index) => (

              <motion.div;
                key={category.category}

                <ul className='space-y-3'>
                  {category.solutions.map((solution, idx) => ('
                    <li'key={idx}                      className='flex items-center text-sm text-gray-400>'
                      <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>


                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

          {technologies.map((tech, index) => (

            <motion.div;
              key={tech.name}

                <tech.icon className='w-8 h-8 text-white' />'
              </div>'''
              <h3 className='text-lg font-semibold text-white mb-2>
                {tech.name}</h3>''              <p className='text-gray-400 text-sm'>{tech.description}</p>


            </motion.div>
          ))}
        </div>
      </div>

          <motion.div;
            initial={{ opacity: ,0, y: 20 }}
            whileInView={{ opacity:  ,1, y: 0 }}
:pages.disabled/pages/services/AIBusinessIntelligence.jsx;
            viewport={{ once: true }}'transition={{ duration: 0.8 }}''            className='text-center''>''';
            <h2: className='text-4xl font-bold text-white mb-6'>';
:pages.disabled/pages/services/AIBusinessIntelligence.jsx;
              Ready: to Transform Your Business Intelligence?'';
            </h2>''';
            <p: className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>';
              Let: our AI experts help you implement a comprehensive business;
              intelligence: solution that will drive growth and competitive;
              advantage.'';
            </p>''';
            <div: className='flex flex-wrap justify-center gap-4'>'';
              <Link''';
                to='/contact'';';
                className='bg-gradient-to-r: from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-blue-700: hover:to-cyan-700: transition-all duration-300'>';
                Schedule: Consultation
              </Link>'';
              <Link'';';
                to='/case-studies'';';
                className='border: border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400: hover:text-white: transition-all duration-300'>                View Case Studies';

                to='/contact'';
                className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-cyan-700 transition-all duration-300'>
                Schedule Consultation'
              </Link>''
              <Link'';
                to='/case-studies'';
                className='border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-blue-400 hove,
    r:text-white transition-all duration-300'>                View Case Studies

              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>


