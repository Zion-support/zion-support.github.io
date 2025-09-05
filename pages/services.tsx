<<<<<<< HEAD
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including micro SaaS, IT infrastructure, AI solutions, and cybersecurity." />
      </Head>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>

            </div>
          </div>
        </section>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-600 font-semibold mb-4">
                    {service.pricing}
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>
    </>
  );
=======
 const getColorClasses = (color: string) => {
  const colors = {
  blue: {
  return (<> <Head> <title>Our Services - Zion Tech Group</title> <h1 className= {
  `text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> Our Services </h1> <p className= {
  `text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> 350+ Innovative Solutions for Modern Businesses </p> <p className= {
  `text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}> From cutting-edge AI services to comprehensive IT solutions and specialized micro SaaS products, we provide everything your business needs to thrive in the digital age. </p> </div> </section> key= {
  category.title 
}className= {
  `p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-$ {
  category.color 
}-500/40 transition-all duration-300 hover:scale-105 $ {
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' 
}` 
}style= {
  {
  transitionDelay: `$ {
  index * 200 
}ms` 
}
}> </h3> <span className= {
  `text-3xl font-bold $ {
  colors.text 
}` 
}> {
  category.count 
}</span> </div> </li>) ) 
}</ul> <Link href= {
  category.href 
}className= {
  `inline-flex items-center px-6 py-3 $ {
  colors.bg 
}$ {
  colors.hover 
}rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 $ {
  colors.ring 
}focus:ring-offset-2 focus:ring-offset-slate-900` 
}> </svg> </Link> </div>) 
}) 
}</div> </div> </section> </svg> </div> <h3 className="text-xl font-bold mb-2" >Lightning Fast</h3> <p className="text-slate-400" >Rapid deployment and implementation of solutions</p> </div> </svg> </div> <h3 className="text-xl font-bold mb-2" >Enterprise Grade</h3> <p className="text-slate-400" >Scalable solutions for businesses of all sizes</p> </div> </svg> </div> <h3 className="text-xl font-bold mb-2" >Secure & Reliable</h3> <p className="text-slate-400" >Bank-level security and 99.9% uptime guarantee</p> </div> </svg> </div> <h3 className="text-xl font-bold mb-2" >24/7 Support</h3> <p className="text-slate-400" >Round-the-clock technical support and maintenance</p> </div> </div> </div> </section> Ready to Get Started? </h2> <p className="text-lg text-slate-300 mb-8" > Contact our experts today to discuss your project requirements and discover how our innovative solutions can transform your business. </p> <div className="flex flex-col sm:flex-row items-center justify-center gap-4" > <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors" > Get a Quote </Link> <a 
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
}