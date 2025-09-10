import { motion } from 'framer-motion';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
const Contact: NextPage = () => {;
  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Contact Us - Zion Tech Group</title>;
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />";
      </Head>;
      <Navigation />;
      <main className="min-h-screen bg-gray-900 pt-16">;
        <div className="container mx-auto px-4 py-16">;
          <div className="max-w-6xl mx-auto">;
            <div className="text-center mb-16">;
              <h1 className="text-5xl font-bold text-white mb-6">;
                Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>;
              </h1>;
              <p className="text-xl text-gray-300">;
                Ready to transform your business? Let's discuss how we can help.;
              </p>;
            </div>;
            <div className="grid lg:grid-cols-2 gap-12">;
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">;
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>;
                <form className="space-y-6">;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Email</h3>";
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>";
                  </div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Phone</h3>";
                    <p className="text-gray-600">+1 302 464 0950</p>";
                  </div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Address</h3>";
                    <p className="text-gray-600">";
                      364 E Main St STE 1008<br />;
                      Middletown DE 19709;
                    </p>;
                  </div>;
                </div>;
              </div>;
              ;
              <div>;
                <form className="space-y-4">";
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">";
                      Name;
                    </label>;
                    <input;
                      type="text"";
                      id="name"";
                      name="name"";
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"";
                      required;
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">";
                      Email;
                    </label>;
                    <input;
                      type="email"";
                      id="email"";
                      name="email"";
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"";
                      required;
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="company" className="block text-white mb-2">Company</label>;
                    <input;
                      type="text";
                      id="company";
                      name="company";
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400";
                      placeholder="Your company";
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="message" className="block text-white mb-2">Message</label>;
                    <textarea;
                      id="message"";
                      name="message"";
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"";
                      required;
                    ></textarea>;
                  </div>;
                  <button;
                    type="submit"";
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"";
                  >;
                    Send Message;
                  </button>;
                </form>;
              </div>;
              {/* Contact Info */}
              <div className="space-y-8">;
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">;
                  <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>;
                  <div className="space-y-6">;
                    <div className="flex items-start space-x-4">;
                      <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />;
                      <div>;
                        <h3 className="text-white font-semibold mb-1">Email</h3>;
                        <p className="text-gray-300">info@ziontechgroup.com</p>;
                        <p className="text-gray-300">support@ziontechgroup.com</p>;
                      </div>;
                    </div>;
                    <div className="flex items-start space-x-4">;
                      <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />;
                      <div>;
                        <h3 className="text-white font-semibold mb-1">Phone</h3>;
                        <p className="text-gray-300">+1 (555) 012-3456</p>;
                        <p className="text-gray-300">24/7 Support Available</p>;
                      </div>;
                    </div>;
                    <div className="flex items-start space-x-4">;
                      <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />;
                      <div>;
                        <h3 className="text-white font-semibold mb-1">Office</h3>;
                        <p className="text-gray-300">;
                          123 Tech Street<br />;
                          San Francisco, CA 94105<br />;
                          United States;
                        </p>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">;
                  <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>;
                  <div className="space-y-2 text-gray-300">;
                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>;
                    <p>Saturday: 10:00 AM - 4:00 PM PST</p>;
                    <p>Sunday: Closed</p>;
                    <p className="text-blue-400 mt-4">Emergency support available 24/7</p>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </main>;
      <Footer />;
    </>;
  );
};
export default Contact;
>>>>>>> origin/automation-fixes
=======
import React from 'react';
import Head from 'next/head';
  Mail, Phone, MapPin, Clock, MessageSquare, Send, 
  Globe, Building, Users, Award, Shield, Rocket
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI solutions, cloud services, and technology consulting." />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold"
              >
                Call Us
              </Link>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">{contactInfo.hours}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Send us a Message</h2>
              <p className="text-xl text-gray-600">
                Have a project in mind? We'd love to hear from you.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709'
	};
	return (
		<Layout>
=======
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>Contact | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/contact" />
			</Head>
			<div className="container mx-auto px-4 py-20 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Talk to Us</h1>
				<p className="text-gray-300 mb-10 max-w-2xl">We ship outcomes in weeks. Call, email, or visit to get a tailored plan and pricing.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<a href={`tel:${contact.mobile}`} className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-cyan-500/50">
						<Phone className="w-5 h-5 text-cyan-400" />
						<div className="mt-3 font-semibold">Call</div>
						<div className="text-gray-300">{contact.mobile}</div>
					</a>
					<a href={`mailto:${contact.email}`} className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-purple-500/50">
						<Mail className="w-5 h-5 text-purple-400" />
						<div className="mt-3 font-semibold">Email</div>
						<div className="text-gray-300">{contact.email}</div>
					</a>
					<a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-black/50 border border-gray-700/60 hover:border-pink-500/50">
						<MapPin className="w-5 h-5 text-pink-400" />
						<div className="mt-3 font-semibold">Visit</div>
						<div className="text-gray-300 text-sm">{contact.address}</div>
					</a>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
>>>>>>> origin/automation/changelog
