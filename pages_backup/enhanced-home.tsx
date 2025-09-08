
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Star,
  Code,
  Database,


const: EnhancedHome: React.FC: = () => {
  const features = [

      title: 'AI-Powered Solutions',
      description:'
        'Cutting-edge artificial intelligence to transform your business operations and decision-making processes.',
      color: 'from-purple-500 to-pink-500' }, {
      icon: Cloud,
      title: 'Cloud Architecture',
      description:'
        'Scalable, secure, and efficient cloud solutions designed for modern enterprise needs.',
      color: 'from-blue-500 to-cyan-500' }, {
      icon: Shield,
      title: 'Cybersecurity',
      description:'
        'Advanced security measures to protect your digital assets and ensure compliance.',
      color: 'from-green-500 to-emerald-500' }, {
      icon: Zap,
      title: 'DevOps Excellence',
      description:'
        'Streamlined development and deployment processes for faster, more reliable software delivery.',
      color: 'from-yellow-500 to-orange-500' }, {
      icon: Database,
      title: 'Data Analytics',
      description:'
        'Transform raw data into actionable insights with our advanced analytics platforms.',
      color: 'from-indigo-500 to-purple-500' }, {
      icon: Code,
      title: 'Custom Development',
      description:'
        'Tailored software solutions built to meet your specific business requirements.',
      color: 'from-red-500 to-pink-500' } ];


    { number: '99.9%', label: 'Uptime Guarantee' }, { number: '50+', label: 'Expert Team Members' }, { number: '24/7', label: 'Support Available' } ];

  const testimonials = [

      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content:'
        'Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5 }, {'
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content:'
        'The cloud architecture they designed is incredibly scalable and secure. We can now handle 10x more traffic.',
      rating: 5 }, {'
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content:'
        'Their DevOps practices reduced our deployment time from hours to minutes. Outstanding work!',
      rating: 5 } ]


  return: (
    <>

                >
                  Explore: Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

                </motion.div>
              ))}
            </div>
          </div>
        </section>

                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let us discuss how our technology solutions can drive your
                success. Get in touch with our experts today.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link"
                  href="/contact""
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                >
                  Start Your Project"
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
                <Link"
                  href="/pricing""
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors font-semibold text-lg"

                >
                  View: Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )};


