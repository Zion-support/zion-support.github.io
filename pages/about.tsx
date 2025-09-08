import type { NextPage } from 'next';
import Head from 'next/head';
import { Users, Target, Award, Globe, Zap, Shield, Brain, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology solutions provider with over 15 years of experience in digital transformation." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              About Zion Tech Group
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Story
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              For over 15 years, we've been at the forefront of technology innovation, 
              helping businesses transform and thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Who We Are
              </h2>
              
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Zion Tech Group is a leading technology solutions provider that specializes in 
                digital transformation, artificial intelligence, cloud architecture, and cybersecurity. 
                We partner with businesses of all sizes to deliver innovative solutions that drive 
                growth and competitive advantage.
              </p>
              
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Our team of experts combines deep technical knowledge with business acumen to 
                understand your unique challenges and deliver tailored solutions that exceed expectations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Projects Completed' },
                  { number: '50+', label: 'Team Members' },
                  { number: '15+', label: 'Years Experience' },
                  { number: '98%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Brain, label: 'AI & ML', color: 'from-purple-500 to-pink-600' },
                    { icon: Cloud, label: 'Cloud', color: 'from-blue-500 to-cyan-600' },
                    { icon: Shield, label: 'Security', color: 'from-green-500 to-emerald-600' },
                    { icon: BarChart3, label: 'Analytics', color: 'from-orange-500 to-red-600' }
                  ].map((service, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-semibold">{service.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-300">
                Contact Us Today
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group to transform their business 
                and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Explore Services
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Proven Track Record</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Innovation Focus</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}