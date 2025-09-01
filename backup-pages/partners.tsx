import Head from 'next/head.ts'
import { motion  } from 'framer-motion.ts'
import { Handshake, 
  Shield, 
  Cloud, 
  Brain, 
  Users, 
  Globe,
  Award,
  Zap,
  Cpu,
  Database,
  Lock,
  Rocket
 } from 'lucide-react'

export default function Partners(...args[]):  {
  const title = 'Partners — Zion Tech Group'
  const description = 'Strategic partnerships with leading technology providers, cloud platforms, and cybersecurity experts to deliver comprehensive solutions.'
  
            <motion.div 
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}
              className="mb-6"

              <Handshake className="w-20 h-20 mx-auto text-zion-cyan mb-4" />
            </motion.div>
            <motion.h1 
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.2 






}}
              className="text-4xl md:text-6xl font-bold mb-6"

              Strategic
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Partnerships
              </span>
            </motion.h1>
            <motion.p 
              initial = {
  { opacity: 0,
  y: 20 






}}
              animate = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.4 






}}
              className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"

              We collaborate with industry leaders to deliver comprehensive, cutting-edge
              technology solutions that drive business transformation.
            </motion.p>
          </div>
        </section>
        {/* Partnership Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner with Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic partnerships enable us to deliver comprehensive solutions
                that combine the best technologies and expertise in the industry.
              </p>
            </motion.div>
            
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index)  => (
                <motion.div
                  key={benefit.title}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"

                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Partner Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partner Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've built strategic relationships across the technology landscape
                to provide comprehensive solutions for our clients.
              </p>
            </motion.div>

            <div className="space-y-12">
              {partnerCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.6,
  delay: categoryIndex * 0.2 






}}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm"

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, partnerIndex)  => (
                      <motion.div
                        key={partner.name}
                        initial = {
  { opacity: 0,
  scale: 0.9 






}}
                        whileInView = {
  { opacity: 1,
  scale: 1 






}}
                        transition = {
  { duration: 0.4,
  delay: partnerIndex * 0.1 






}}
                        viewport={{ once: true }}
                        className="text-center p-4 rounded-lg border hover:shadow-md transition-all duration-300"

                        <div className="text-4xl mb-3">{partner.logo}</div>
                        <h4 className="font-semibold mb-1">{partner.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          partner.tier === 'Platinum' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' :
                          partner.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {partner.tier}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Levels */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnership Tiers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer different levels of partnership to accommodate various
                collaboration needs and business objectives.
              </p>
            </motion.div>
            
            <div className="grid md: grid-cols-3 gap-8">
              {partnershipLevels.map((level, index)  => (
                <motion.div
                  key={level.name}
                  initial = {
  { opacity: 0,
  y: 20 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 






}}
                  viewport={{ once: true }}
                  className="relative"

                  <div className={`bg-gradient-to-br ${level.color} text-white p-8 rounded-2xl h-full`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                      <p className="text-white/90">{level.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {level.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Become a Partner */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"

              Become a Partner
            </motion.h2>
            <motion.p 
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.2 






}}
              viewport={{ once: true }}
              className="text-xl text-zion-slate-light mb-8"

              Join our ecosystem of technology leaders and help us deliver
              innovative solutions to businesses worldwide.
            </motion.p>
            <motion.div 
              initial = {
  { opacity: 0,
  y: 20 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition = {
  { duration: 0.6,
  delay: 0.4 






}}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"

              <a
                href="/contact"
                className="px-8 py-3 bg-white text-zion-blue-dark rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"

                Contact Us
              </a>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"

                partnerships@ziontechgroup.com
              </a>
            </motion.div>;
          </div>;
        </section>;
      </main>;
    </>;
  );
};
