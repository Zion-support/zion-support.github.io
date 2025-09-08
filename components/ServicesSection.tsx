
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Smartphone,
  ArrowRight'

    {
      icon: Smartphone, title: 'Micro SaaS',
      description: 'Lightweight, focused software solutions that solve specific business problems.',



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}"
          className="text-center mb-16"

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >

                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (



                        {feature}
                      </li>
                    ))}
                  </ul>


                    Learn More
                    <ArrowRight className='ml-2 h-4 w-4' />



                  </Button>
                </CardContent>
              </Card>

            </motion.div>
          ),)}
        </div>
      </div>
    </section>



