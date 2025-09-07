> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > 2026 Revolutionary Services </span> </h2> </p> </motion.div> {
  /* Category Overview */ 
}<motion.div > {
  categories.map ( (category, index) => (<motion.div key= {
  category.name 
}</motion.div>) ) 
}</motion.div> </li>) ) 
}</ul> </div> > Learn More <ArrowRight className="w-4 h-4 ml-1" /> </a> </div> </div> </motion.div>) ) 
}</div> {
  /* Call to Action */ 
}<motion.div > <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8" > <h3 className="text-2xl font-bold text-white mb-4" > Ready to Transform Your Business? </h3> <p className="text-gray-300 mb-6 max-w-2xl mx-auto" > Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" > <motion.div whileHover= {
  {
  scale: 1.05 
}
}
export default Enhanced2026ServicesShowcase;  )
}
export default Enhanced2026ServicesShowcase
              while_hover={{ scale: 1.05, coordinate_y: -5 }}'
              className='group text - center'
            >
              <div;`
                className={`w - 16 h - 16 bg - gradient - to - br ${category.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300`}
              >;'
                <category.icon className='w - 8 h - 8 text - white' />
              </div>;'
              <h3 className='text - lg font - bold text - white mb - 2'>
                {category.name}
              </h3>;'
              <p className='text - 2xl font - bold text - cyan - 400'>
                {category.count}
              </p>            </motion.div>            >;`
              <div className={`w - 16 h - 16 bg - gradient - to - br ${category.color} rounded - 2xl flex items - center justify - center mx - auto mb - 4 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 300`}>;"
                <category.icon className="w - 8 h - 8 text - white" />
              </div>;"
              <h3 className="text - lg font - bold text - white mb - 2">{category.name}</h3>;"
              <p className="text - 2xl font - bold text - cyan - 400">{category.count}</p>
            </motion.div>))}
        </motion.div>
        {/* Featured Services Grid */}'"
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16'>          {featured_services.map ((service, index) => (        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 mb - 16">
          {featured_services.map ((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, coordinate_y: 20 }}
              whileInView={{ opacity: 1, scale: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              while_hover={{ scale: 1.02, coordinate_y: -5 }}'
              className='group relative'
            >
              <div;`
                className={`absolute inset - 0 bg - gradient - to - r ${service.color} opacity - 10 rounded - 2xl blur - xl group - hover:blur - 2xl transition - all duration - 500`}
              ></div>;'
              <div className='relative bg - black / 40 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 6 hover:border - cyan - 500 / 40 transition - all duration - 300'>
                {/* Service Header */}'
                <div className='flex items - center space - x-3 mb - 4'>
                  <div;`
                    className={`w - 12 h - 12 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center`}
                  >;'
                    <service.icon className='w - 6 h - 6 text - white' />
                  </div>
                  <div>;'
                    <h3 className='text - lg font - bold text - white'>
                      {service.name}
                    </h3>;'
                    <p className='text - gray - 400 text - sm'>{service.category}</p>                  </div>
                </div>
                {/* Description */}'
                <p className='text - gray - 300 text - sm mb - 4 leading - relaxed'>                  {service.description}
                </p>
                {/* Features */}            >;`
              <div className={`absolute inset - 0 bg - gradient - to - r ${service.color} opacity - 10 rounded - 2xl blur - xl group - hover:blur - 2xl transition - all duration - 500`}></div>;"
              <div className="relative bg - black / 40 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 6 hover:border - cyan - 500 / 40 transition - all duration - 300">
                {/* Service Header */}"
                <div className="flex items - center space - x-3 mb - 4">;`
                  <div className={`w - 12 h - 12 bg - gradient - to - br ${service.color} rounded - xl flex items - center justify - center`}>;"
                    <service.icon className="w - 6 h - 6 text - white" />
                  </div>
                  <div>;"
                    <h3 className="text - lg font - bold text - white">{service.name}</h3>;"
                    <p className="text - gray - 400 text - sm">{service.category}</p>
                  </div>
                </div>
                {/* Description */}'"
                <p className='text - gray - 300 text - sm mb - 4 leading - relaxed'>                <p className="text - gray - 300 text - sm mb - 4 leading - relaxed">
                  {service.description}
                </p>
                {/* Features */}'
                <div className='mb - 4'>;'
                  <ul className='space - y-1'>
                    {service.features.slice (0, 2).map ((feature, i) => (
                      <li
                        key={i}'
                        className='flex items - center text - gray - 400 text - xs'
                      >;'"
                        <Star className='w - 3 h - 3 text - cyan - 400 mr - 2 flex - shrink - 0' />                        {feature}                <div className="mb - 4">;"
                  <ul className="space - y-1">
                    {service.features.slice (0, 2).map ((feature, i) => ("
                      <li key={i} className="flex items - center text - gray - 400 text - xs">;"
                        <Star className="w - 3 h - 3 text - cyan - 400 mr - 2 flex - shrink - 0" />
                      </li>))}
                  </ul>
                </div>
                {/* Price and CTA */}'
                <div className='flex items - center justify - between'>
                  <div>;'
                    <span className='text - 2xl font - bold text - cyan - 400'>
                      {service.price}
                    </span>;'
                    <span className='text - gray - 400 text - sm'>
                      {service.period}
                    </span>
                  </div>
                  <Link;`
                    href={`/${service.id}`}'
                    className='inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors text - sm font - medium group - hover:translate - x-1 transition - transform duration - 200'
                  >;'
                    Learn More <ArrowRight className='w - 4 h - 4 ml - 1' />                  </Link>                  <div>;"
                    <span className="text - 2xl font - bold text - cyan - 400">{service.price}</span>;"
                    <span className="text - gray - 400 text - sm">{service.period}</span>
                  </div>
                  <Link;`
                    href={`/${service.id}`}"
                    className="inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors text - sm font - medium group - hover:translate - x-1 transition - transform duration - 200"
                  >;"
                    Learn More <ArrowRight className="w - 4 h - 4 ml - 1" />
                  </Link>
                </div>
              </div>
            </motion.div>))}
        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}'
          className='text - center'
        >;'
          <div className='bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20 border border - cyan - 500 / 20 rounded - 2xl p - 8'>;'
            <h3 className='text - 2xl font - bold text - white mb - 4'>
              Ready to Transform Your Business?
            </h3>;'
            <p className='text - gray - 300 mb - 6 max - w-2xl mx - auto'>
              Join thousands of businesses already leveraging our revolutionary
              services to achieve unprecedented growth and innovation.
            </p>;'
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>              <motion.div        >;"
          <div className="bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20 border border - cyan - 500 / 20 rounded - 2xl p - 8">;"
            <h3 className="text - 2xl font - bold text - white mb - 4">
              Ready to Transform Your Business?
            </h3>;"
            <p className="text - gray - 300 mb - 6 max - w-2xl mx - auto">
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.
            </p>;"
            <div className="flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6">
              <motion.div
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link;'
                  href='/services';'
                  className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40 transition - all duration - 200'
                >;'"
                  <Rocket className='w - 5 h - 5 mr - 2' />                  View All Services                  href="/services";"
                  className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl shadow - lg shadow - cyan - 500 / 25 hover:shadow - xl hover:shadow - cyan - 500 / 40 transition - all duration - 200"
                >;"
                  <Rocket className="w - 5 h - 5 mr - 2" />
                </Link>
              </motion.div>
              <motion.div
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link;'
                  href='/contact';'
                  className='inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 200'
                >;'"
                  <Shield className='w - 5 h - 5 mr - 2' />                  Get Started                  href="/contact";"
                  className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - xl hover: bg - cyan - 500 / 10 transition - all duration - 200"
                >;"
                  <Shield className="w - 5 h - 5 mr - 2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Enhanced2026ServicesShowcase;  )
}
}transition= {
  {
  duration: 0.2, delay: 0.1 
}
}> <Link > <Shield className="w-5 h-5 mr-2" /> Get Started </a> </motion.div> </div> </div> </motion.div> </div> </section>) 
}
export default Enhanced2026ServicesShowcase