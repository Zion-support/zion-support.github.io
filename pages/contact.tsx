import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Contact: NextPage = () => {
  const contactInfo = [
    {
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      value: "hello@ziontechsolutions.com",
      icon: "📧"
    },
    {
      title: "Call Us",
      description: "Speak with our team directly",
      value: "+1 (555) 123-4567",
      icon: "📞"
    },
    {
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 Tech Street, Silicon Valley, CA 94000",
      icon: "📍"
    }
  ];

  const services = [
    "AI Development & Machine Learning",
    "Cloud Architecture & Migration",
    "Web Application Development",
    "Mobile App Development",
    "Blockchain Solutions",
    "Cybersecurity Services",
    "Data Analytics & BI",
    "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Contact Us - Zion Tech Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Solutions. Contact us for AI development, cloud solutions, and technology consulting services." />
        <meta name="keywords" content="contact zion tech, technology consulting, AI development contact, cloud solutions contact" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and create a solution that drives your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} className="text-gray-900">{service}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{info.description}</p>
                      <p className="text-blue-300 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Subscribe to our newsletter for the latest technology insights and industry trends.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How long does a typical project take?</h3>
              <p className="text-gray-300 text-sm">
                Project timelines vary based on complexity and scope. Simple web applications typically take 4-8 weeks, 
                while complex AI solutions can take 3-6 months. We provide detailed timelines during our initial consultation.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you provide ongoing support?</h3>
              <p className="text-gray-300 text-sm">
                Yes, we offer comprehensive support and maintenance packages. Our 24/7 support ensures your systems 
                run smoothly and we're always available to help with updates, optimizations, and troubleshooting.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What technologies do you work with?</h3>
              <p className="text-gray-300 text-sm">
                We work with a wide range of technologies including React, Node.js, Python, AWS, Azure, 
                AI/ML frameworks, blockchain platforms, and more. We choose the best technology stack for your specific needs.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How do you ensure project security?</h3>
              <p className="text-gray-300 text-sm">
                Security is our top priority. We follow industry best practices, conduct regular security audits, 
                implement proper authentication and encryption, and ensure compliance with relevant regulations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives your business forward.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Our Services
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              See Our Work
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;