
import React from 'react',
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Rocket, Brain, Atom, Shield, Cloud, BarChart3;
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function PortfolioPage() {
  const projects = null;

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
      <Head>
        <title>Our Work - Zion Tech Group</title>
        <meta
          name='description'
          content="Explore Zion Tech Group's portfolio of innovative technology projects. AI, quantum computing, cybersecurity, and digital transformation solutions."
        />
        <meta property='og:title' content='Our Work - Zion Tech Group' />
        <meta
          property='og:description'
          content='Explore our portfolio of innovative technology projects and solutions.'
        />
        <link rel='canonical' href='https://ziontechgroup.com/portfolio' />      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6'>
              Our Work
            </h1>
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Innovative technology solutions that drive business transformation
              and growth            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              Discover how we've helped organizations leverage cutting-edge
              technology to solve complex challenges and achieve remarkable
              results.            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='w-8 h-8 text-cyan-400' />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-white/70'>{stat.label}</div>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-8 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map(category => (              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300'
              >
                <div className='p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}
                    >
                      <project.icon className='w-6 h-6 text-white' />
                    </div>
                    <span className='text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full'>
                      {project.category}
                    </span>
                  </div>

                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {project.title}
                  </h3>
                  <p className='text-white/70 mb-6'>{project.description}</p>

                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider'>
                      Technologies
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className='text-xs bg-white/5 text-white/70 px-2 py-1 rounded'
                        >                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider'>
                      Results
                    </h4>
                    <ul className='space-y-1'>
                      {project.results.map(result => (
                        <li
                          key={result}
                          className='text-sm text-white/80 flex items-center'
                        >
                          <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2' />                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-white/60'>
                      Client: {project.client}
                    </span>
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105'>                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Start Your Project?
            </h2>
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>
              Let's discuss how we can help you achieve similar results with our
              innovative technology solutions.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
                Start Your Project
              </button>
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
),
</Head> <EnhancedNavigation /> > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > Our Work </h1> <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed" > Innovative technology solutions that drive business transformation and growth </p> </motion.div> <motion.div > <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8" > Discover how we've helped organizations leverage cutting-edge technology to solve complex challenges and achieve remarkable results. </p> </motion.div> </div> </section> > <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4" > <stat.icon className="w-8 h-8 text-cyan-400" /> </div> </motion.div>) ) 
}</div> </div> </section> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-6 py-3 rounded-full font-semibold transition-all duration-300 $ {
  selectedCategory === category ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white': 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> </div> </section> </span>) ) 
}</div> </div> </li>) ) 
}</ul> </div> View Details </button> </div> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Start Your Project? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how we can help you achieve similar results with our innovative technology solutions. </p> Start Your Project </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Schedule Consultation </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
