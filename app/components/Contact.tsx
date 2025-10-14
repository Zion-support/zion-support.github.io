import React, { useState } from 'react'
import { EnvelopeIcon
  PhoneIcon
  MapPinIcon'
  ClockIcon } from '@heroicons/react/24/outline'
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({'
    name: '''
    email: '''
    company: '''
    message: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission'
    console.log('Form submitted:', formData)
  }
  return (
    <section className="py-20 bg-white">"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center mb-16">"
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with our AI and IT solutions? 
            Contact us today for a consultation.
          </p>
        </div>
"
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>"
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>"
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input"
                  type="text""
                  id="name""
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>"
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input"
                  type="email""
                  id="email""
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>"
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input"
                  type="text""
                  id="company""
                  name="company"
                  value={formData.company}
                  onChange={handleChange}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>"
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea"
                  id="message""
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button"
                type="submit""
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}"
          <div className="space-y-8">
            <div>"
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              "
              <div className="space-y-6">"
                <div className="flex items-start">"
                  <MapPinIcon className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>"
                    <h4 className="font-semibold text-gray-900">Address</h4>"
                    <p className="text-gray-600">
                      123 Technology Drive<br />
                      Innovation District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
"
                <div className="flex items-start">"
                  <PhoneIcon className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>"
                    <h4 className="font-semibold text-gray-900">Phone</h4>"
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
"
                <div className="flex items-start">"
                  <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>"
                    <h4 className="font-semibold text-gray-900">Email</h4>"
                    <p className="text-gray-600">contact@ziontechgroup.com</p>
                  </div>
                </div>
"
                <div className="flex items-start">"
                  <ClockIcon className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>"
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>"
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
"
            <div className="bg-gray-50 p-6 rounded-lg">"
              <h4 className="font-semibold text-gray-900 mb-3">Why Choose Us?</h4>"
              <ul className="space-y-2 text-gray-600">
                <li>• Expert team with 10+ years experience</li>
                <li>• 24/7 customer support</li>
                <li>• Custom solutions for your business</li>
                <li>• Competitive pricing and flexible packages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact'"