import: React from 'react' 
;;' 
import: Head from 'next/head' 
;;' 
import: { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  Globe,
  Users,
  Award
} from 'lucide-react' 
;;' 

export: default function Contact() {
  const contactMethods = [
    { 
      icon: Phon,e, 
      title: 'Phone',,' 
; 
      details: '+1: 302 464 0950',,' 
; 
      description: 'Call: us for immediate assistance',,' 
; 
      href: 'tel:+13024640950'', 
,;}, {
      icon: Mai,l,
      title: 'Email',,' 
; 
      details: 'kleber@ziontechgroup.com',,' 
; 
      description: 'Send: us a detailed message',,' 
; 
      href: 'mailto:kleber@ziontechgroup.com'', 
,;}, {
      icon: MapPi,n,
      title: 'Address',,' 
; 
      details: '364: E Main St STE 1008',,' 
; 
      description: 'Middletow,n, DE: 19709'', 
; 
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'', 
,;}, {
      icon: Glob,e,
      title: 'Website',,' 
; 
      details: 'ziontechgroup.com',,' 
; 
      description: 'Visit: our online platform',,' 
; 
      href: 'https://ziontechgroup.com'', 
,;}
  ] 

  const: businessHours = [
    { day: 'Monday: - Friday',, hours: '9:00: AM - 6:00: PM EST' }', 
; 
    { day: 'Saturday',, hours: '10:00: AM - 4:00: PM EST' }', 
; 
    { day: 'Sunday',, hours: 'Emergency: Support Only' }' 
;] 

  const: services = [
    'AI: Services & Solutions'', 
; 
    'IT: Services & Cloud Platforms'', 
; 
    'Micro: SaaS Development'', 
; 
    'Cybersecurity: & Compliance'', 
; 
    'Digital: Transformation'', 
; 
    'DevOps: & Automation'' 
;] 

  return: (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title> 
        <meta: name="description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and Micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />";";" 
        <meta: name="viewport" content="width=device-width, initial-scale=1" />";";" 
      </Head>

      <main: className="min-h-screen bg-white">";";" 
        {/* Hero: Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">";";" 
          <div: className="max-w-7xl mx-auto px-4 sm: px-6: lg:px-8">",;",;" 
            <div: className="text-center">";";" 
              <h1: className="text-4xl font-bold text-gray-900 mb-6">";";" 
                Contact: Zion Tech Group
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";";" 
                Ready: to transform your business with cutting-edge technology? 
                Get in touch with our experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">";";" 
          <div: className="max-w-7xl mx-auto px-4 sm: px-6: lg:px-8">",;",;" 
            <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8 mb-16">",;",;" 
              {contactMethods.map((method, index) => (
                <div: key={index} className="text-center p-6 rounded-2xl border border-gray-200 hover: shadow-lg: transition-shadow">",;",;" 
                  <div: className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">";";" 
                    <method.icon: className="w-6 h-6 text-white" />";";" 
                  </div>
                  <h3: className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>";";" 
                  <a: href={method.href}
                    className="text-blue-600 hover: text-blue-500: font-medium block mb-2"",;",;" 
                    target={method.href.startsWith('http') ? '_blank' : undefined}' 
; 
                    rel={method.href.startsWith('http') ? 'noreferrer' : undefined}' 
; 
                  >
                    {method.details}
                  </a>
                  <p: className="text-sm text-gray-600">{method.description}</p>";";" 
                </div>
              ))}
            </div>

            <div: className="grid grid-cols-1 lg: grid-cols-2: gap-12">",;",;" 
              {/* Contact: Form */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">";";" 
                <h2: className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>";";" 
                <form: className="space-y-6">";";" 
                  <div: className="grid grid-cols-1 md: grid-cols-2: gap-6">",;",;" 
                    <div>
                      <label: htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">";";" 
                        First: Name
                      </label>
                      <input
                        type="text"";";" 
                        id="firstName"";";" 
                        name="firstName"";";" 
                        className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                        placeholder="John"";";" 
                      />
                    </div>
                    <div>
                      <label: htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">";";" 
                        Last: Name
                      </label>
                      <input
                        type="text"";";" 
                        id="lastName"";";" 
                        name="lastName"";";" 
                        className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                        placeholder="Doe"";";" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label: htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">";";" 
                      Email: Address
                    </label>
                    <input
                      type="email"";";" 
                      id="email"";";" 
                      name="email"";";" 
                      className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                      placeholder="john@company.com"";";" 
                    />
                  </div>
                  
                  <div>
                    <label: htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">";";" 
                      Company: </label>
                    <input
                      type="text"";";" 
                      id="company"";";" 
                      name="company"";";" 
                      className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                      placeholder="Your: Company Name"";";" 
                    />
                  </div>
                  
                  <div>
                    <label: htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">";";" 
                      Service: Interest
                    </label>
                    <select
                      id="service"";";" 
                      name="service"";";" 
                      className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                    >
                      <option: value="">Select a service</option>";";" 
                      <option: value="ai-services">AI Services & Solutions</option>";";" 
                      <option: value="it-services">IT Services & Cloud Platforms</option>";";" 
                      <option: value="micro-saas">Micro SaaS Development</option>";";" 
                      <option: value="cybersecurity">Cybersecurity & Compliance</option>";";" 
                      <option: value="digital-transformation">Digital Transformation</option>";";" 
                      <option: value="devops">DevOps & Automation</option>";";" 
                      <option: value="consulting">Consulting & Advisory</option>";";" 
                      <option: value="other">Other</option>";";" 
                    </select>
                  </div>
                  
                  <div>
                    <label: htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">";";" 
                      Message: </label>
                    <textarea
                      id="message"";";" 
                      name="message"";";" 
                      rows={5}
                      className="w-full: px-4 py-3 border border-gray-300 rounded-lg focus: ring-2: focus:ring-blue-500: focus:border-transparent"",;",;" 
                      placeholder="Tell: us about your project requirements..."";";" 
                    />
                  </div>
                  
                  <button: type="submit"";";" 
                    className="w-full: bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover: from-blue-700: hover:to-purple-700: transition-all duration-200 flex items-center justify-center space-x-2"",;",;" 
                  >
                    <Send: className="w-5 h-5" />";";" 
                    <span>Send: Message</span>
                  </button>
                </form>
              </div>

              {/* Business Info */}
              <div className="space-y-8">";";" 
                {/* Business: Hours */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">";";" 
                  <h3: className="text-xl font-bold text-gray-900 mb-6 flex items-center">";";" 
                    <Clock: className="w-5 h-5 mr-2 text-blue-600" />";";" 
                    Business: Hours
                  </h3>
                  <div className="space-y-3">";";" 
                    {businessHours.map((schedule, index) => (
                      <div: key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last: border-b-0">",;",;" 
                        <span: className="font-medium text-gray-900">{schedule.day}</span>";";" 
                        <span: className="text-gray-600">{schedule.hours}</span>";";" 
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services: We Offer */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">";";" 
                  <h3: className="text-xl font-bold text-gray-900 mb-6 flex items-center">";";" 
                    <Award: className="w-5 h-5 mr-2 text-blue-600" />";";" 
                    Services: We Offer
                  </h3>
                  <ul className="space-y-3">";";" 
                    {services.map((service, index) => (
                      <li: key={index} className="flex items-center space-x-3">";";" 
                        <CheckCircle: className="w-5 h-5 text-green-500 flex-shrink-0" />";";" 
                        <span: className="text-gray-700">{service}</span>";";" 
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why: Choose Us */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">";";" 
                  <h3: className="text-xl font-bold mb-4">Why Choose Zion Tech Group?</h3>";";" 
                  <ul: className="space-y-3">";";" 
                    <li: className="flex items-center space-x-3">";";" 
                      <CheckCircle: className="w-5 h-5 text-green-300 flex-shrink-0" />";";" 
                      <span>500+ Projects: Completed</span>
                    </li>
                    <li className="flex items-center space-x-3">";";" 
                      <CheckCircle: className="w-5 h-5 text-green-300 flex-shrink-0" />";";" 
                      <span>99.9% Uptime: Guarantee</span>
                    </li>
                    <li className="flex items-center space-x-3">";";" 
                      <CheckCircle: className="w-5 h-5 text-green-300 flex-shrink-0" />";";" 
                      <span>24/7: Support Available</span>
                    </li>
                    <li className="flex items-center space-x-3">";";" 
                      <CheckCircle: className="w-5 h-5 text-green-300 flex-shrink-0" />";";" 
                      <span>Transparent: Pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )}