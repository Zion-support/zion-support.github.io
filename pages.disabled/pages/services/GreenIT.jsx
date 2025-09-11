import React from
  'react';'
import { motion } from
  'framer-motion';'
import { SEO } from
  '../../components/SEO';
import {}
  Leaf,
  Zap,
  Globe,
  Shield,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Database,
  Server,
  Cloud,
  Cpu,
  Monitor,
  HardDrive,
  Network,
  ';';
  Battery} from: 'lucide-react;';
  ';';
:pages.disabled/pages/services/GreenIT.jsx;

    {
      icon: Za,p,
 {
      icon: Serve,r,
 {
      icon: Monito,r,
,

      title:,

          <motion.div;
            initial={{ opacity:  ,0, y: 20 }}
            animate={{ opacity:  ,1, y: 0 }}
:pages.disabled/pages/services/GreenIT.jsx;

              Sustainable technology solutions that reduce environmental impact;

                href='/contact'';
                className='px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105'>
                Start Green Transformation'
              </a>''
              <a'';
                href='/services-overview'';
                className='px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hove,
    r:bg-green-400 hove,
    r:text-white transition-all duration-300'>                View All Services

              </a>
            </div>
          </motion.div>
        </div>
      </section>

          <motion.div;
            initial={{ opacity:  ,0, y: 20 }}
:pages.disabled/pages/services/GreenIT.jsx;

            {services.map((service, index) => (

              <motion.div;
                key={service.title}

                  <service.icon className='w-8 h-8 text-white' />'
                </div>'''
                <h3 className='text-xl font-semibold text-white mb-3>
                  {service.title}</h3>''                <p className='text-slate-300 mb-4'>{service.description}</p>'''
                <ul className='space-y-2'>
                  {service.features.map((feature, idx) => (
:pages.disabled/pages/services/GreenIT.jsx'
                    <li'key={idx}                      className='flex items-center text-sm text-slate-400>'
                      <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />


                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <motion.div;
            initial={{ opacity:  ,0, y: 20 }}
:pages.disabled/pages/services/GreenIT.jsx;

            {benefits.map((benefit, index) => (

              <motion.div;
                key={benefit.title}

                  <benefit.icon className='w-8 h-8 text-white' />'
                </div>'''
                <h3 className='text-lg font-semibold text-white mb-2>
                  {benefit.title}</h3>''                <p className='text-slate-300 text-sm'>{benefit.description}</p>


              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <motion.div;
            initial={{ opacity:  ,0, y: 20 }}
:pages.disabled/pages/services/GreenIT.jsx;

            {technologies.map((tech, index) => (

              <motion.div;
                key={tech.title}

                  <tech.icon className='w-8 h-8 text-white' />'
                </div>'''
                <h3 className='text-lg font-semibold text-white mb-2>
                  {tech.title}</h3>''                <p className='text-slate-300 text-sm'>{tech.description}</p>


              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <motion.div;
            initial={{ opacity:  ,0, y: 20 }}
            whileInView={{ opacity:  ,1, y: 0 }}
:pages.disabled/pages/services/GreenIT.jsx;

              Transform your IT infrastructure with sustainable solutions that;
              benefit both your business and the planet.''
            </p>'''
            <div className='flex flex-col sm: flex-row gap-4 justify-center>'
              <a'''

                href='/contact'';
                className='px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105'>
                Start Green IT Journey'
              </a>''
              <a'';
                href='/services-overview'';
                className='px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hove,
    r:bg-green-400 hove,
    r:text-white transition-all duration-300'>                Explore More Services

              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );



