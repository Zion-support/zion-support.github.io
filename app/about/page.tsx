import { Users, Target, Award, Globe, TrendingUp, Shield, Lightbulb, Heart } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Button from '../components/Button'

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of technology to deliver cutting-edge solutions that drive real business value.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security is at the core of everything we do. We protect your data and systems with enterprise-grade security measures.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring every solution is tailored to your unique needs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional results and exceeding expectations in every project.',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp },
    { number: '15+', label: 'Years Experience', icon: Award }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      description: 'AI and Machine Learning expert with 15+ years of experience in enterprise technology solutions.',
      expertise: ['AI/ML', 'Cloud Architecture', 'Team Leadership']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Cybersecurity',
      description: 'Cybersecurity specialist with deep expertise in threat detection and compliance frameworks.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    },
    {
      name: 'Emily Watson',
      role: 'Director of Innovation',
      description: 'Digital transformation leader focused on helping businesses adopt cutting-edge technologies.',
      expertise: ['Digital Strategy', 'Innovation', 'Change Management']
    },
    {
      name: 'David Kim',
      role: 'Lead Cloud Architect',
      description: 'Cloud infrastructure expert specializing in scalable, secure, and cost-effective solutions.',
      expertise: ['Cloud Migration', 'DevOps', 'Infrastructure']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology company specializing in AI solutions, cloud infrastructure, and cybersecurity. 
              Our mission is to empower businesses with cutting-edge technology that drives innovation and growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-8 border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card variant="glass" className="p-8 border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize advanced technology and make cutting-edge AI, cloud, and cybersecurity solutions 
                accessible to businesses of all sizes. We believe technology should empower, not complicate.
              </p>
            </Card>

            <Card variant="glass" className="p-8 border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in technology transformation, helping businesses worldwide 
                leverage the power of AI, cloud computing, and cybersecurity to achieve unprecedented growth.
              </p>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-6 border-white/20 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              innovation, and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-6 border-white/20"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 text-center">{member.name}</h3>
                <p className="text-blue-400 text-sm text-center mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <Card variant="glass" className="p-12 text-center border-white/20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our expertise can help transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}