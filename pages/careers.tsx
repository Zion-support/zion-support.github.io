import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Globe,
  Award,
  Rocket,
  Cpu,
  Database,
  Lock,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap
} from 'lucide-react'

export default function Careers() {
  const title = 'Careers — Zion Tech Group'
  const description = 'Join our team of innovators and help us build the future of technology. Explore career opportunities in AI, cloud computing, and cybersecurity.'
  
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push boundaries and embrace cutting-edge technologies.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams and perspectives.'
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'We invest in continuous learning and development.'
    }
  ]

  const benefits = [
    {
      icon: Globe,
      title: 'Remote First',
      description: 'Work from anywhere in the world with flexible hours.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Attractive compensation packages with equity options.'
    },
    {
      icon: GraduationCap,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and certifications.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs.'
    },
    {
      icon: Clock,
      title: 'Flexible PTO',
      description: 'Unlimited paid time off and flexible work arrangements.'
    },
    {
      icon: Award,
      title: 'Career Growth',
      description: 'Clear career paths and advancement opportunities.'
    }
  ]

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Build and deploy production AI systems, work with large language models, and develop autonomous workflows.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Kubernetes']
    },
    {
      title: 'Cloud Infrastructure Engineer',
      department: 'Cloud & DevOps',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design and implement scalable cloud infrastructure, manage Kubernetes clusters, and optimize performance.',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Implement zero-trust security frameworks, conduct security audits, and respond to security incidents.',
      skills: ['Zero Trust', 'SIEM', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern web applications, work with React/Next.js, and contribute to our Micro SaaS platform.',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'DevOps Engineer',
      department: 'Cloud & DevOps',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Automate deployment pipelines, implement monitoring and observability, and optimize CI/CD processes.',
      skills: ['CI/CD', 'Monitoring', 'Automation', 'Infrastructure as Code', 'Cloud Platforms']
    },
    {
      title: 'Data Engineer',
      department: 'Data & Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design data pipelines, implement ETL processes, and build analytics solutions for our clients.',
      skills: ['Python', 'Apache Spark', 'Airflow', 'Data Warehousing', 'SQL']
    }
  ]

  const departments = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Build autonomous systems and intelligent workflows.',
      openings: 3
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Design scalable infrastructure and automation.',
      openings: 2
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Implement enterprise-grade security solutions.',
      openings: 2
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights.',
      openings: 1
    },
    {
      icon: Cpu,
      title: 'Engineering',
      description: 'Build innovative products and platforms.',
      openings: 2
    }
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/careers/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers/" />
      </Head>
      
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Users className="w-20 h-20 mx-auto text-zion-cyan mb-4" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Join Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation Team
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
            >
              Help us build the future of technology. We're looking for passionate 
              individuals who want to make a real impact in AI, cloud computing, and cybersecurity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#open-positions" 
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 font-semibold"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values shape our culture and guide how we work together 
                to achieve our mission.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment that 
                enables you to do your best work.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Teams</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore opportunities across our different departments and find 
                the perfect role for your skills and interests.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{dept.title}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{dept.openings} open positions</span>
                    <a 
                      href="#open-positions" 
                      className="text-zion-cyan hover:text-zion-purple font-medium text-sm"
                    >
                      View roles →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to join our team? Explore our current openings and find 
                the perfect opportunity to grow with us.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{position.title}</h3>
                        <span className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan rounded-full text-sm font-medium">
                          {position.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:text-right">
                      <a 
                        href={`/contact?position=${encodeURIComponent(position.title)}`}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 font-semibold"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Don't See the Right Role?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-zion-slate-light mb-8"
            >
              We're always looking for talented individuals. Send us your resume 
              and let's discuss how you can contribute to our mission.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-zion-blue-dark rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Send Resume
              </a>
              <a 
                href="mailto:careers@ziontechgroup.com" 
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                careers@ziontechgroup.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}