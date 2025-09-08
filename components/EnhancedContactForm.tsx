    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    { id: 'ai-development', name: 'AI Development', icon: Globe, color: 'from-purple-500 to-pink-500' },


    { id: 'cloud-architecture', name: 'Cloud Architecture', icon: Globe, color: 'from-blue-500 to-cyan-500' }, { id: 'web-development', name: 'Web Development', icon: Globe, color: 'from-green-500 to-emerald-500' }, { id: 'cybersecurity', name: 'Cybersecurity', icon: Globe, color: 'from-red-500 to-orange-500' }, { id: 'iot-platforms', name: 'IoT Platforms', icon: Globe, color: 'from-indigo-500 to-purple-500' }, { id: 'digital-transformation', name: 'Digital Transformation', icon: Globe, color: 'from-yellow-500 to-orange-500' }, { id: 'custom', name: 'Custom Solution', icon: Globe, color: 'from-gray-500 to-slate-500' } ];


    { value: 'under-25k', label: 'Under $25K' },


    { value: '25k-50k', label: '$25K - $50K' }, { value: '50k-100k', label: '$50K - $100K' }, { value: '100k-250k', label: '$100K - $250K' }, { value: '250k-500k', label: '$250K - $500K' }, { value: 'over-500k', label: 'Over $500K' } ];


    { value: 'asap', label: 'ASAP' },


    { value: '1-3-months', label: '1-3 Months' }, { value: '3-6-months', label: '3-6 Months' }, { value: '6-12-months', label: '6-12 Months' }, { value: '12-plus-months', label: '12+ Months' } ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'}
    

    if (!formData.email.trim()) {

      newErrors.email = 'Email is required'} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {'
      newErrors.email = 'Please enter a valid email address'}


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!validateForm()) {
      return}
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    

    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({'

        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '' });
      setSelectedService('')}, 5000)};

  const handleChange = (


    }
  };

  const containerVariants = {

  };
  if (isSubmitted) {;

  const itemVariants = {
    hidden: { opacit,
    y: 0, y: 30 },
    visible: {
      opacit,
    y: 1,
      y: 0,


  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-20 bg-gradient-to-br from-green-50 to-emerald-50"

                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Response within 24h</span>
                </div>"
                <div className="flex items-center gap-2">"
                  <MessageSquare className="w-4 h-4 text-green-500" />
                  <span>Schedule consultation</span>
                </div>"
                <div className="flex items-center gap-2">"

                  <Calendar className="w-4 h-4 text-green-500" />
                  <span>Project planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}


                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team of technology experts is ready to help you navigate
                  the digital landscape and implement solutions that drive real
                  business value.
                </p>
              </div>

              {/* Contact Details */}"
              <div className="space-y-6">"
                <div className="flex items-start space-x-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">"
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>"
                    <h4 className="font-semibold text-gray-900">Phone</h4>

                      className="text-blue-600 hover:text-blue-700 text-lg"
                    >
                      +1 (302) 464-0950
                    </a>

                  </div>
                </div>
"
                <div className="flex items-start space-x-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">"
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>"
                    <h4 className="font-semibold text-gray-900">Email</h4>

                      className="text-blue-600 hover:text-blue-700 text-lg"
                    >
                      kleber@ziontechgroup.com
                    </a>

                  </div>
                </div>
"
                <div className="flex items-start space-x-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">"
                    <MapPin className="w-6 h-6 text-white" />
                  </div>


                  </div>
                </div>
              </div>


                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>"
                    <div className="text-2xl font-bold">500+</div>"
                    <div className="text-blue-100">Projects Delivered</div>
                  </div>
                  <div>"
                    <div className="text-2xl font-bold">98%</div>"
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div>"
                    <div className="text-2xl font-bold">15+</div>"
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div>"
                    <div className="text-2xl font-bold">24/7</div>"

                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form

                  {/* Name */}
                  <div>
                    <label"
                      htmlFor="name""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>"
                    <div className="relative">"
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input"
                        type="text""
                        id="name""
                        name="name"
                        value={formData.name}
                        onChange={handleChange}"
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent transition-colors duration-300 ${`
                          errors.name ? 'border-red-500' : 'border-gray-300''
                        }`}`
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && ("
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">"

                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>

                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && ("
                      <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">"

                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Company */}
                  <div>


                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>

                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>


                            setErrors(prev => ({ ...prev, service: '' }))}
                        }}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${

                        <div className="text-sm font-medium">
                          {service.name}
                        </div>
                      </button>
                    ))}
                  </div>

                      <AlertCircle className="w-4 h-4" />
                      {errors.service}
                    </div>
                  )}
                </div>


                  <div>
                    <label"
                      htmlFor="budget""

                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Budget Range
                    </label>

                      <option value="">Select budget range</option>
                      {budgetRanges.map(budget => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>

                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Timeline
                    </label>


                      <option value="">Select timeline</option>
                      {timelineOptions.map(timeline => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>

                    </select>
                  </div>
                </div>


                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>

                    placeholder="Tell us about your project, requirements, timeline, and budget..."
                  />
                  {errors.message && ("
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">"

                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}

                >
                  {isSubmitting ? ("
                    <div className="flex items-center justify-center gap-3">"
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : ("
                    <div className="flex items-center justify-center gap-3">"

                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </button>


                  >
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )};






