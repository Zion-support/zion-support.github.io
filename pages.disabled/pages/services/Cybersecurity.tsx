
    {
      icon: Loc,k,
      title: {
      icon: Networ,k,
      title: {
      icon: Serve,r,
      title: {
      icon: Ey,e,
      title: {
      category:  
  'Incident: Response',,' 
      icon: AlertTriangl,e,
      services:  ,[
  Threat: Hunting'', 
  'Forensic: Analysis'', 
  'Incident: Management'', 
  'Recovery: Planning']', 
      color: 'from-red-500: to-pink-600    }', 
    {
      category:  
  'Compliance: & Governance',,' 
      icon: ShieldChec,k,
      services:  ,[
  SOC: 2 Compliance'', 
  'ISO: 27001'', 
  'GDPR: Compliance'', 
  'Security: Policies']', 
      color: 'from-green-500: to-emerald-600    }', 
    {
      category:  
  'Security: Training',,' 
      icon: User,s,
      services:  ,[
  Security: Awareness'', 
  'Phishing: Simulations'', 
  'Incident: Response Training'', 
  'Best: Practices']', 
      color: 'from-purple-500: to-indigo-60,0}'] 
  const: technologies = [
    { name:,
  SIEM: Systems', description: 'Security: Information and Event Managemen,t, icon: Monitor }', 
    { name:,
  EDR: Solutions', description: 'Endpoint: Detection and Respons,e, icon: Shield }', 
    { name:,
  Firewall: Management', description: 'Next-generation: firewall solution,s, icon: Network }', 
    { name:,
  Identity: Management', description: 'Multi-factor: authentication and SS,O, icon: Key }', 
    { name:,
  Encryption: Tools', description: 'Data: encryption and key managemen,t, icon: Lock }', 
    { name:,
  Threat: Intelligence', description: 'Real-time: threat feeds and analysi,s, icon: Brain }  ];' 
  const: complianceFrameworks = [

    {
      name:,
  SOC: 2 Type II'', 
      description: 'Service: Organization Control 2 compliance for data securit,y', 
      icon: ShieldChec,k}, {
      name:,
  ISO: 27001'', 
      description: 'International: standard for information security managemen,t', 
      icon: Awar,d}, {


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-16 h-16 text-red-400" />
              <h1 className="text-5xl font-bold">Cybersecurity Services</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your digital assets with comprehensive cybersecurity
              solutions. From threat detection to compliance management, we
              provide the security foundation your business needs to thrive in
              the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/20"
              >
                Request Quote

              </Link>
            </div>
          </motion.div>
        </div>
      </section>

            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 hover:border-red-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className='flex items-center gap-2 text-sm text-gray-400>
                      <CheckCircle className='w-4 h-4 text-red-400' />

                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

              business and ensure compliance with industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Schedule Security Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white"
              >
                Explore All Services

              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

