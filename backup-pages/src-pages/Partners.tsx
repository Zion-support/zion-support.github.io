import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Building,
  Globe,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Shield,
  Brain,
  Cloud,
} from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies we collaborate with',
      icon: Zap,
      partners: [
        {
          name: 'Microsoft',
          description: 'Cloud and AI solutions',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Amazon Web Services',
          description: 'Cloud infrastructure',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Google Cloud',
          description: 'Machine learning and data analytics',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'NVIDIA',
          description: 'AI and GPU computing',
          logo: '/api/placeholder/150/80',
        },
      ],
    },
    {
      title: 'Security Partners',
      description: 'Cybersecurity specialists and certification bodies',
      icon: Shield,
      partners: [
        {
          name: 'CrowdStrike',
          description: 'Endpoint protection',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Palo Alto Networks',
          description: 'Network security',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Okta',
          description: 'Identity and access management',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Splunk',
          description: 'Security monitoring',
          logo: '/api/placeholder/150/80',
        },
      ],
    },
    {
      title: 'AI & Analytics Partners',
      description: 'Artificial intelligence and data analytics specialists',
      icon: Brain,
      partners: [
        {
          name: 'IBM Watson',
          description: 'Enterprise AI solutions',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Databricks',
          description: 'Unified analytics platform',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Palantir',
          description: 'Big data analytics',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Snowflake',
          description: 'Cloud data platform',
          logo: '/api/placeholder/150/80',
        },
      ],
    },
    {
      title: 'Cloud Partners',
      description: 'Infrastructure and platform service providers',
      icon: Cloud,
      partners: [
        {
          name: 'Docker',
          description: 'Containerization platform',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'Kubernetes',
          description: 'Container orchestration',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'HashiCorp',
          description: 'Infrastructure automation',
          logo: '/api/placeholder/150/80',
        },
        {
          name: 'MongoDB',
          description: 'Database solutions',
          logo: '/api/placeholder/150/80',
        },
      ],
    },
  ];

  const partnershipBenefits = [
    {
      icon: Target,
      title: 'Strategic Alignment',
      description:
        'We partner with companies that share our vision for innovation and excellence',
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description:
        'Our team holds certifications from all major technology partners',
    },
    {
      icon: Heart,
      title: 'Collaborative Approach',
      description:
        'We work closely with partners to deliver integrated solutions',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Partner network enables us to serve clients worldwide',
    },
  ];

  const achievements = [
    { metric: '50+', label: 'Technology Partners' },
    { metric: '200+', label: 'Certifications' },
    { metric: '99%', label: 'Partner Satisfaction' },
    { metric: '24/7', label: 'Global Support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}
                Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We collaborate with industry-leading companies to deliver
              comprehensive technology solutions that drive innovation and
              business success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Become a Partner
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver exceptional value
              to our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Partner Ecosystem</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the best companies across different technology
              domains
            </p>
          </motion.div>

          <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <motion.div
                      key={partnerIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
                    >
                      <div className="w-20 h-12 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <Building className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-white">
                        {partner.name}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {partner.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Program */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Join Our Partner Program
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for innovative companies to join our
                partner ecosystem. Together, we can deliver exceptional
                solutions to our clients.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Access to joint go-to-market opportunities',
                  'Technical integration and support',
                  'Co-marketing and lead sharing programs',
                  'Training and certification programs',
                  'Dedicated partner success manager',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Apply Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Partnership Types</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Technology Partners',
                    description: 'Integrate your solutions with our platform',
                  },
                  {
                    title: 'Channel Partners',
                    description: 'Resell our services to your clients',
                  },
                  {
                    title: 'Implementation Partners',
                    description: 'Deliver our solutions to end customers',
                  },
                  {
                    title: 'Alliance Partners',
                    description: 'Strategic partnerships for joint solutions',
                  },
                ].map((type, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {type.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {type.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's explore how we can work together to deliver exceptional
              value to our mutual clients and grow our businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
