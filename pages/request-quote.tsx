import React, { useState } from 'react'
const Head = dynamic(() => import('next/head'), { ssr: false })
  Mail,
  MapPin} from 'lucide-react'

export default function RequestQuote() {

  const [formData, setFormData] = useState({'
    name: '','
    email: '','
    company: '','
    phone: '','
    serviceType: '','
    projectSize: '','
    timeline: '','
    budget: '','
    description: '','
    requirements: ''});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,,
    const { name, value } = e.target;
    setFormData(prev = > ({
      ...prev,;
      [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault(),
    setIsSubmitting(true),;
    ;
    // Simulate API call,;
await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const serviceTypes = ['
    'AI & Machine Learning','
    'Micro SAAS Development','
    'IT Services & Infrastructure','
    'Digital Transformation','
    'Cybersecurity','
    'Cloud Solutions','
    'Custom Software Development','
    'Data Analytics','
    'Mobile App Development','
    'Web Development','
    'Other'
  ]

  const projectSizes = ['
    'Small Project (< $10K)','
    'Medium Project ($10K - $50K)','
    'Large Project ($50K - $200K)','
    'Enterprise Project (> $200K)'
  ]

  const timelines = ['
    'ASAP','
    '1-2 weeks','
    '1 month','
    '2-3 months','
    '3-6 months','
    '6+ months'
  ]

  const benefits = [
    {
      icon: Clock,'
      title: 'Fast Response','
      description: 'Get your quote within 24 hours'},
    {
      icon: DollarSign,'
      title: 'Competitive Pricing','
      description: 'Best value for your investment'},
    {
      icon: Users,'
      title: 'Expert Team','
      description: 'Certified professionals'},
    {
      icon: Zap,'
      title: 'Quick Start','
      description: 'Begin your project immediately'}
  ]
;
  if (isSubmitted) {;
    return (
      <>;
<Head>
          <title>Quote Request Submitted - Zion Tech Group</title>'
          <meta name = "description" content="Your quote request has been submitted successfully. We'll get back to you within 24 hours." />
        </Head>
        "
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <motion.div,"
initial="{{" opacity: 0, scale: 0.9 }}"
            animate="{{" opacity: 1, scale: 1 }}"
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
          >
            <motion.div,"
initial="{{" scale: 0 }}"
              animate="{{" scale: 1 }}"
              transition="{{" delay: 0.2, type: "spring", stiffness: 200 }}"
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >"
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            "
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quote Request Submitted!
            </h1>
            "
            <p className="text-lg text-gray-600 mb-8">'
              Thank you for your interest in Zion Tech Group. We've received your quote request and will get back to you within 24 hours with a detailed proposal.
            </p>
            "
            <div className="bg-blue-50 rounded-lg p-6 mb-8">"
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>"
              <ul className="text-left text-blue-800 space-y-2">
                <li>• Our team will review your requirements</li>'
                <li>• We'll prepare a detailed proposal</li>'
                <li>• You'll receive your quote within 24 hours</li>'
                <li>• We'll schedule a consultation call if needed</li>
              </ul>
            </div>
            "
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <a href="/contact""
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us"
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>"
              <a href="/""
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Home,
              </a>
            </div>
          </motion.div>
        </div>
      </>
    )}

  return (
    <>;
<Head>
        <title>Request a Quote - Zion Tech Group</title>"
        <meta name = "description" content="Get a personalized quote for your technology project. Fast response, competitive pricing, expert team." />
      </Head>
"
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/*   */}"
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            <motion.div,"
initial="{{" opacity: 0, y: 20 }}"
              animate="{{" opacity: 1, y: 0 }}"
              className="text-center"
            >"
              <h1 className="text-4xl md: text-5xl font-bold mb-6">
                Request Your Quote,
              </h1>"
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Get a personalized quote for your technology project. Our experts will provide you with competitive pricing and detailed project planning.
              </p>
            </motion.div>
          </div>
        </div>
,
        {/*   */}"
        <div className="py-16 bg-white">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
              {benefits.map((benefit, index) => (
                <motion.div,"
key="{index}""
                  initial="{{" opacity: 0, y: 20 }}"
                  animate="{{" opacity: 1, y: 0 }}"
                  transition="{{" delay: index * 0.1 }}"
                  className="text-center"
                >"
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>"
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>"
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/*   */}"
        <div className="py-16">"
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8">,
            <motion.div,"
initial="{{" opacity: 0, y: 20 }}"
              animate="{{" opacity: 1, y: 0 }}"
              className="bg-white rounded-2xl shadow-2xl p-8"
            >"
              <div className="text-center mb-8">"
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tell Us About Your Project,
                </h2>"
                <p className="text-gray-600">'
                  Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
                </p>
              </div>
"
              <form onSubmit="{handleSubmit}" className="space-y-6">"
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
                  <div>"
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>"
                    <input type="text""
                      id="name""
                      name="name">
                      required,"
value="{formData.name}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                      placeholder="Your full name"
                    />
                  </div>

                  <div>"
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>"
                    <input type="email""
                      id="email""
                      name="email">
                      required,"
value="{formData.email}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>"
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name,
                    </label>"
                    <input type="text""
                      id="company""
                      name="company"">
                      value="{formData.company}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                      placeholder="Your company name"
                    />
                  </div>

                  <div>"
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number,
                    </label>"
                    <input type="tel""
                      id="phone""
                      name="phone"">
                      value="{formData.phone}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>"
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>"
                    <select id="serviceType""
                      name="serviceType">
                      required,"
value="{formData.serviceType}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                    >"
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (",
                        <option key="{service}" value="{service}">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>"
                    <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Size,
                    </label>"
                    <select id="projectSize""
                      name="projectSize""
                      value="{formData.projectSize}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                    >"
                      <option value="">Select project size</option>
                      {projectSizes.map((size) => (",
                        <option key="{size}" value="{size}">
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
"
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
                  <div>"
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline,
                    </label>"
                    <select id="timeline""
                      name="timeline"">
                      value="{formData.timeline}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"
                    >"
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (",
                        <option key="{time}" value="{time}">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>"
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range,
                    </label>"
                    <input type="text""
                      id="budget""
                      name="budget""
                      value="{formData.budget}""
                      onChange="{handleInputChange}""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"">
                      placeholder="e.g., $10,000 - $50,000"
                    />
                  </div>
                </div>

                <div>"
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>"
                  <textarea id="description""
                    name="description"
                    required,"
rows="{4}""
                    value="{formData.description}""
                    onChange="{handleInputChange}""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent""
                    placeholder="Describe your project in detail..."
                  />
                </div>

                <div>"
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Requirements,
                  </label>"
                  <textarea id="requirements""
                    name="requirements"",
                    rows="{3}""
                    value="{formData.requirements}""
                    onChange="{handleInputChange}""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"">
                    placeholder="Any specific requirements, technologies, or constraints..."
                  />
                </div>
"
                <div className="text-center">"
                  <button type="submit""
                    disabled="{isSubmitting}""
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>"
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Quote Request"
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/*   */}"
        <div className="py-16 bg-gray-50">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="text-center mb-12">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Immediate Assistance?
              </h2>"
              <p className="text-lg text-gray-600">
                Contact us directly for urgent projects or questions,
              </p>
            </div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
              <div className="text-center">"
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>"
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>"
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
"
              <div className="text-center">"
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Mail className="w-8 h-8 text-green-600" />
                </div>"
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>"
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
"
              <div className="text-center">"
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>"
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>"
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>",
  )};