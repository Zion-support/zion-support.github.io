import React, { useState } from 'react'"
import { Helmet } from 'react-helmet-async'"
import { 
  PlayIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  VideoCameraIcon,
  PresentationChartBarIcon
} from '@heroicons/react/24/outline'"

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState(0)"

  const demos = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "See how our AI analytics platform can transform your business intelligence and decision-making processes.",
      duration: "15 minutes",
      category: "AI Solutions",
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom reporting",
        "Automated insights"
      ],
      thumbnail: "/images/demos/ai-analytics.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Threat Detection",
      description: "Experience our advanced security monitoring system that protects against modern cyber threats.",
      duration: "20 minutes",
      category: "Cybersecurity",
      features: [
        "Real-time threat monitoring",
        "Automated incident response",
        "Security analytics",
        "Compliance reporting"
      ],
      thumbnail: "/images/demos/cybersecurity.jpg"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Management",
      description: "Explore our cloud management platform that simplifies infrastructure operations and optimization.",
      duration: "25 minutes",
      category: "Cloud Computing",
      features: [
        "Multi-cloud management",
        "Cost optimization",
        "Auto-scaling",
        "Performance monitoring"
      ],
      thumbnail: "/images/demos/cloud-management.jpg"
    },
    {
      id: 4,
      title: "Micro SaaS Application Builder",
      description: "Watch how we build custom micro SaaS applications tailored to specific business needs.",
      duration: "30 minutes",
      category: "Micro SaaS",
      features: [
        "Rapid prototyping",
        "Custom integrations",
        "User management",
        "Payment processing"
      ],
      thumbnail: "/images/demos/micro-saas.jpg"
    }
  ]"

  const benefits = [
    {
      icon: VideoCameraIcon,
      title: "Live Demonstrations",
      description: "See our solutions in action with real-time demonstrations"
    },
    {
      icon: UserIcon,
      title: "Expert Guidance",
      description: "Get personalized guidance from our technology experts"
    },
    {
      icon: PresentationChartBarIcon,
      title: "Custom Scenarios",
      description: "Explore solutions tailored to your specific use cases"
    },
    {
      icon: CheckCircleIcon,
      title: "Q&A Session",
      description: "Ask questions and get immediate answers from our team"
    }
  ]"

  return (
    <>
      <Helmet>
        <title>Schedule a Demo - Zion Tech Group</title>
        <meta name="description" content="See our AI and IT solutions in action. Schedule a personalized demo with our experts to explore how we can help your business." />
        <meta name="keywords" content="demo, AI demo, cybersecurity demo, cloud demo, technology demonstration" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              See Our Solutions in Action
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the power of our AI and IT solutions through personalized demonstrations
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Schedule a demo to see how our technology can transform your business operations 
              and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the solution you'd like to explore in detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(index)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedDemo === index
                    ? 'border-purple-500 bg-gradient-to-br from-purple-900/50 to-slate-800'
                    : 'border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 hover:border-purple-400'
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <PlayIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{demo.duration}</p>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                  {demo.category}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {demos[selectedDemo].title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {demos[selectedDemo].description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {demos[selectedDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <ClockIcon className="w-5 h-5 text-purple-400" />
                    <span>Duration: {demos[selectedDemo].duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CalendarIcon className="w-5 h-5 text-purple-400" />
                    <span>Available: Monday - Friday</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <UserIcon className="w-5 h-5 text-purple-400" />
                    <span>Expert-led demonstration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Schedule a Demo?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the most out of your demo experience with these benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon"
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              )"
            })}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Schedule Your Demo
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll contact you to schedule your personalized demonstration
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Demo</label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="">Select a demo</option>
                    {demos.map((demo) => (
                      <option key={demo.id} value={demo.id}>{demo.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your specific needs or questions"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    Schedule Demo
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Questions? We're Here to Help
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us directly if you have any questions about our solutions or need immediate assistance
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📞</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">✉️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )"
}