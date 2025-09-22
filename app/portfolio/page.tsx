import { ExternalLink, Github, Globe, Award, Users, TrendingUp, Shield, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import LazyImage from '../components/LazyImage'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Enterprise AI Platform',
      description: 'A comprehensive AI platform that processes over 1M requests daily, serving 500+ enterprise clients with 99.9% uptime.',
      category: 'AI & Machine Learning',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'AWS', 'Docker'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        users: '500K+',
        uptime: '99.9%',
        requests: '1M+'
      },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Cloud Migration Suite',
      description: 'Automated cloud migration platform that helped 200+ companies reduce infrastructure costs by 40% while improving performance.',
      category: 'Cloud Services',
      technologies: ['Kubernetes', 'Terraform', 'Python', 'AWS', 'GCP'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        companies: '200+',
        savings: '40%',
        performance: '+60%'
      },
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Cybersecurity Dashboard',
      description: 'Real-time threat detection and response system that protects enterprise networks with advanced AI-powered security analytics.',
      category: 'Cybersecurity',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        threats: '10M+',
        accuracy: '98.5%',
        response: '<1s'
      },
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 4,
      title: 'IoT Analytics Platform',
      description: 'Connected device management platform processing 50TB of sensor data daily with real-time insights and predictive analytics.',
      category: 'IoT & Analytics',
      technologies: ['React', 'Python', 'Apache Kafka', 'Elasticsearch', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        devices: '1M+',
        data: '50TB',
        insights: 'Real-time'
      },
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 5,
      title: 'Blockchain Payment System',
      description: 'Secure, scalable blockchain-based payment processing system handling $100M+ in transactions with sub-second confirmation times.',
      category: 'Blockchain',
      technologies: ['Solidity', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        volume: '$100M+',
        speed: '<1s',
        security: '100%'
      },
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 6,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management system with predictive analytics, automated workflows, and personalized insights.',
      category: 'AI & Business',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      stats: {
        efficiency: '+75%',
        satisfaction: '95%',
        automation: '80%'
      },
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Named "Top AI Company 2024" by TechCrunch and "Best Cloud Solution" by Gartner',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries with 24/7 support and multilingual capabilities',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Metrics',
      description: '300% year-over-year growth with 99.9% client retention rate and 95% satisfaction score',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Security Excellence',
      description: 'SOC 2 Type II certified with zero security breaches and 100% compliance across all projects',
      color: 'from-red-500 to-pink-500'
    }
  ]

  const categories = ['All', 'AI & Machine Learning', 'Cloud Services', 'Cybersecurity', 'IoT & Analytics', 'Blockchain', 'AI & Business']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <ScrollReveal origin="bottom" delay={100}>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses transform their operations 
                with cutting-edge technology solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Achievements Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <ScrollReveal origin="bottom" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Recognized industry leader with proven track record of delivering exceptional results.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <ScrollReveal key={index} origin="bottom" delay={300 + index * 100}>
                <Card variant="glass" hover className="p-6 border-white/20 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <ScrollReveal origin="bottom" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our innovative solutions have transformed businesses across various industries.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} origin="bottom" delay={300 + index * 100}>
                <Card variant="glass" hover className="p-0 border-white/20 overflow-hidden">
                  <div className="relative">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-lg font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <ScrollReveal origin="bottom" delay={200}>
            <Card variant="glass" className="p-12 text-center border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}