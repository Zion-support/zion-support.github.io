import { 
  UserGroupIcon,SparklesIcon, 
  CheckCircleIcon, 
  StarIcon
} from '@heroicons/react/24/outline';
'use client';
import SEOHead from '../components/SEOHead';

const ITSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: UserGroupIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud. 99.9% uptime guarantee with 24/7 monitoring.',
      features: ['AWS/Azure/GCP expertise', 'Auto-scaling solutions', 'Disaster recovery', 'Cost optimization'],
      pricing: 'Starting at $2,999/mo',
      popular: true
    },
    {
      icon: UserGroupIcon,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['React/Next.js expertise', 'Mobile-first design', 'SEO optimization', 'Performance optimization'],
      pricing: 'Starting at $4,999/project',
      popular: false
    },
    {
      icon: UserGroupIcon,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      features: ['iOS/Android native', 'React Native/Flutter', 'App Store optimization', 'Push notifications'],
      pricing: 'Starting at $7,999/app',
      popular: false
    },
    {
      icon: UserGroupIcon,
      title: 'Database Management',
      description: 'Enterprise-grade database solutions with optimization, backup, and security management.',
      features: ['MySQL/PostgreSQL/MongoDB', 'Performance tuning', 'Backup & recovery', 'Security hardening'],
      pricing: 'Starting at $1,999/mo',
      popular: false
    },
    {
      icon: UserGroupIcon,
      title: 'Network Infrastructure',
      description: 'Robust network solutions with 5G capabilities, IoT integration, and enterprise security.',
      features: ['5G network setup', 'IoT device integration', 'Network security', 'Performance monitoring'],
      pricing: 'Starting at $3,999/mo',
      popular: false
    },
    {
      icon: UserGroupIcon,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions including penetration testing, compliance, and threat monitoring.',
      features: ['Penetration testing', 'SOC 2 compliance', 'Threat detection', 'Security audits'],
      pricing: 'Starting at $2,499/mo',
      popular: false
    }
  ];

  const technologies = [
    { name: 'React/Next.js', category: 'Frontend', description: 'Modern web applications' },
    { name: 'Node.js/Python', category: 'Backend', description: 'Scalable server solutions' },
    { name: 'AWS/Azure/GCP', category: 'Cloud', description: 'Cloud infrastructure' },
    { name: 'Docker/Kubernetes', category: 'DevOps', description: 'Container orchestration' },
    { name: 'MongoDB/PostgreSQL', category: 'Database', description: 'Data management' },
    { name: 'React Native/Flutter', category: 'Mobile', description: 'Cross-platform apps' },
    { name: 'TensorFlow/PyTorch', category: 'AI/ML', description: 'Machine learning' },
    { name: 'Blockchain/Solidity', category: 'Blockchain', description: 'Decentralized solutions' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their cloud solutions reduced our costs by 40% while improving performance.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'VP of Technology',
      content: 'The web development team delivered an exceptional e-commerce platform that increased our conversion rates by 60%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'Their mobile app development expertise helped us launch our product successfully. The app has 4.8 stars on both stores.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Technologies Mastered' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <>
      <SEOHead 
        title="IT Solutions - Comprehensive Technology Services | Zion Tech Group"
        description="Complete IT solutions including cloud infrastructure, web development, mobile apps, cybersecurity, and digital transformation. Expert team with 10+ years experience."
        keywords="IT solutions, cloud infrastructure, web development, mobile development, cybersecurity, digital transformation, technology consulting"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">Comprehensive IT Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent holographic">
                  IT Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete technology solutions for modern businesses. From cloud infrastructure to mobile apps, we deliver enterprise-grade solutions that drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Get Free Consultation
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Our Work
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2 neon-text">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  service.popular ? 'border-blue-500 shadow-blue-500/20' : 'border-slate-700 hover:border-blue-500 hover:shadow-blue-500/20'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-blue-400 font-medium neon-text">{service.pricing}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full cyber-button py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Technologies We Master</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with cutting-edge technologies to deliver modern, scalable, and secure solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium mb-2">{tech.category}</p>
                    <p className="text-gray-400 text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses that trust us with their technology needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can accelerate your digital transformation and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;