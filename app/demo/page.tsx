import React, { Helmet } from 'react-helmet-async';
const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }));
  };

    },
    {
      id: 'ai-chatbot,'
      title: 'AI Customer Service Bot,'
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.,'
      features: [
        'Natural language understanding,'
        'Multi-language support,'
        24;
        Seamless handoff to humans]
      ],
      icon: Users,
      duration: '3 min demo,'
      category: 'AI Solutions;'
    },    {
      title: 'AI Content Generation,'
      description: 'Watch our AI create high-quality content in seconds,'
      duration: '4 min,'
      features: ['Blog posts', 'Social media content', 'Product descriptions],'
export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Interactive demos by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Demos;
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience our solutions through interactive demonstrations.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Chatbot Demo</h3>"
              <p className="text-gray-600">
                Try our AI chatbot and see how it can help your business.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>"
              <p className="text-gray-600">
                Explore our analytics dashboard with sample data.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile App Preview</h3>"
              <p className="text-gray-600">
                Preview our mobile applications and their features.
              </p>
            </div>
          </div>
      {/* Testimonials *}
      <section className="py-16 px-4">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-12">"
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say<"
            <p className="text-xl text-gray-300">See how our demos led to successful implementations<
          <
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">"
            {testimonials.map((testimonial), index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white"
                <div className="flex items-center mb-4">)
                  {[...Array(testimonial.rating)].map((_, i) => (}
                  "{testimonial.quote}"
                <
                <div>
                  <div className="font-semibold text-white>{testimonial.name}<"
                  <div className="text-sm text-gray-400>{testimonial.role}, {testimonial.company}<
                <
              <
            ))}

          <
        <
      <

      {/* CTA Section *
      <section className="py-20 px-4>"
        <div className="max-w-4xl mx-auto text-center>"
          <h2 className="text-4xl font-bold text-white mb-6>
            Ready to See More?
          <
          <p className="text-xl text-gray-300 mb-8>
            Schedule a personalized demo with our experts. Well show you exactly ;
            how our solutions can address your specific business needs.
          <
          <div className="flex flex-col sm: flex-row gap-4 justify-center>"
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105>
              Schedule Live Demo;
            <
            <button className=border border-purple-400 text-purple-400 hover:bg-purple-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300>
              Contact Sales;
            <
          <
        <
      <

      <Footer ;
    <
    </React.Fragment>)
  );};

const DemoPage: React.FC = () => {
  return (
    <div>
  )
    </div>
  )
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Demo services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-4">Demo</h1>"
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours to schedule your demo.');
  };

  const Component = () => {
  
    return (
    <div>
  )
    </div>
  )
    <>
      <Helmet>
        <title>Request Demo - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Schedule a personalized demo of our AI and IT solutions. See how Zion Tech Group can transform your business." />"
        <meta name="keywords" content="AI demo, IT demo, technology demonstration, business consultation, AI solutions demo" />"
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">"
          <div className="max-w-7xl mx-auto text-center">"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"
              Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Personalized Demo</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See our AI and IT solutions in action. Schedule a free 30-minute demo tailored to your business needs.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-16">"
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Options */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Choose Your Demo Focus</h2>"
              <div className="space-y-6">
                {demoOptions.map((option, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">"
                    <div className="flex items-start space-x-4">"
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">"
                        <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>"
                        <p className="text-gray-300 mb-4">{option.description}</p>"
                        <ul className="space-y-2">
                          {option.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">"
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Request Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">"
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company;
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number;
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Job Role;
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select your role</option>"
                    <option value="ceo">CEO/Founder</option>"
                    <option value="cto">CTO</option>"
                    <option value="it-director">IT Director</option>"
                    <option value="operations">Operations Manager</option>"
                    <option value="marketing">Marketing Director</option>"
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">"
                    {['AI Solutions', 'IT Infrastructure', 'Cloud Services', 'Cybersecurity', 'Automation', 'Data Analytics', 'Micro SAAS', 'Quantum Computing'].map((interest) => ('
                      <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-4 h-4 text-cyan-500 bg-white/10 border-white/20 rounded focus:ring-cyan-500"
                        />
                        <span className="text-sm text-gray-300">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Date;
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Time;
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Message;
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs and challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cyber-button py-4 text-lg font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2 inline" />
                  Schedule My Demo;
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Why Choose Our Demo */}
        <section className="py-16 px-4 bg-white/5">"
          <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-12">"
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Demo?</h2>"
              <p className="text-xl text-gray-300">Experience the difference with our personalized approach</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Personalized Experience</h3>"
                <p className="text-gray-300">Tailored demo based on your specific business needs and challenges</p>
              </div>
              
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Scheduling</h3>"
                <p className="text-gray-300">Choose a time that works best for your schedule</p>
              </div>
              
              <div className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Guidance</h3>"
                <p className="text-gray-300">Learn from our certified AI and IT experts</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea
  );
};

export default DemoPage;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo List */}
              <div className="space-y-6">"
                <h2 className="text-3xl font-bold text-white mb-8">Choose a Demo</h2>
                {demos.map((demo) => (
                  <div;
                    key={demo.id}
                    className={`cyber-card p-6 cursor-pointer transition-all ${
                      selectedDemo === demo.id ? 'ring-2 ring-cyan-500' : '
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
                    <div className="flex items-start justify-between">"
                      <div className="flex-1">"
                        <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>"
                        <p className="text-gray-300 mb-4">{demo.description}</p>"
                        <ul className="space-y-2">
                          {demo.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">"
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ml-4">"
                        <Play className="w-6 h-6 text-cyan-400" />
                      </div>
                ))}
              </div>

              {/* Demo Preview */}
              <div className="cyber-card p-8">"
                <h3 className="text-2xl font-bold text-white mb-6">
                  {demos.find(d => d.id === selectedDemo)?.title} Demo;
                </h3>
                <div className="bg-gray-800 rounded-lg p-8 mb-6 text-center">"
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 mb-4">
                    Interactive demo coming soon. Contact us to schedule a live demonstration.
                  </p>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Live Demo;
                  </button>
                </div>
                <div className="space-y-4">"
                  <h4 className="text-lg font-semibold text-white">What you'll see:</h4>"'
                  <ul className="space-y-2">
                    {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">"
                        <Star className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-4xl font-bold text-white mb-4">Ready to See More?</h2>"
            <p className="text-xl text-gray-100 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">"
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo;
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center">"
                <ArrowRight className="w-5 h-5 mr-2" />
                Contact Sales;
              </button>
            </div>
          </div>
    </>
);
}
