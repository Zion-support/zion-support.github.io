import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Code, 
  Palette, 
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Shield,
  Layers,
  Cpu,
  Database
} from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const services = [
  {
    title: 'Bespoke Development',
    description: 'Custom software built from scratch to your exact specifications',
    icon: Code,
    features: ['Unique functionality', 'Custom architecture', 'Full control', 'Scalable design']
  },
  {
    title: 'Full Control',
    description: 'Complete ownership and control over your custom solution',
    icon: Settings,
    features: ['Source code ownership', 'Custom modifications', 'Independent hosting', 'No vendor lock-in']
  },
  {
    title: 'Unique Features',
    description: 'Innovative features tailored to your specific business needs',
    icon: Palette,
    features: ['Custom UI/UX', 'Specialized algorithms', 'Unique workflows', 'Brand integration']
  },
  {
    title: 'Dedicated Team',
    description: 'Dedicated development team focused on your project',
    icon: Users,
    features: ['Dedicated developers', 'Project manager', 'Quality assurance', 'Ongoing support']
  }
];

const technologies = [
  { name: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript'] },
  { name: 'Backend', items: ['Node.js', 'Python', 'Java', 'C#', 'Go'] },
  { name: 'Mobile', items: ['React Native', 'Flutter', 'iOS Native', 'Android Native'] },
  { name: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
  { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'] },
  { name: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision', 'NLP'] }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Deep dive into your requirements and business goals',
    duration: '1-2 weeks',
    activities: ['Requirements gathering', 'Technical analysis', 'Architecture planning', 'Timeline estimation']
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Create wireframes, mockups, and interactive prototypes',
    duration: '2-3 weeks',
    activities: ['UI/UX design', 'User flow mapping', 'Interactive prototypes', 'Design system creation']
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build your custom solution with agile methodology',
    duration: '8-16 weeks',
    activities: ['Sprint planning', 'Code development', 'Regular demos', 'Continuous testing']
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description: 'Comprehensive testing and production deployment',
    duration: '2-3 weeks',
    activities: ['Quality assurance', 'Performance testing', 'Security audit', 'Production deployment']
  },
  {
    step: '05',
    title: 'Support & Maintenance',
    description: 'Ongoing support and feature enhancements',
    duration: 'Ongoing',
    activities: ['Bug fixes', 'Feature updates', 'Performance monitoring', 'Technical support']
  }
];

const caseStudies = [
  {
    client: 'FinTech Startup',
    challenge: 'Complex trading platform with real-time data',
    solution: 'Custom trading platform with microservices architecture',
    results: ['99.99% uptime', 'Sub-millisecond latency', 'Handles 1M+ transactions/day']
  },
  {
    client: 'Healthcare Provider',
    challenge: 'HIPAA-compliant patient management system',
    solution: 'Custom EHR system with advanced analytics',
    results: ['40% efficiency improvement', 'Full HIPAA compliance', '50K+ patients managed']
  },
  {
    client: 'Manufacturing Company',
    challenge: 'IoT-based predictive maintenance system',
    solution: 'Custom IoT platform with ML predictions',
    results: ['30% reduction in downtime', 'Predictive accuracy 95%', 'ROI 300% in first year']
  }
];

export default function CustomDevelopmentPage() {
  return (
    <MainLayout
      title="Custom Development - Zion Tech Group"
      description="Bespoke software development with full control, unique features, and dedicated team. Custom solutions built to your exact specifications."
      keywords="custom development, bespoke software, custom solutions, dedicated team, full control, unique features"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Bespoke software solutions built from scratch to your exact specifications. 
                Full control, unique features, and dedicated team for your custom project.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <Link href="/contact">
                  <span className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Custom Project
                  </span>
                </Link>
                <Link href="/solutions">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    View All Solutions
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Development Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We build custom software solutions that are uniquely tailored to your business 
                requirements and provide complete control over your technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use the latest technologies and frameworks to build robust, 
                scalable, and maintainable custom solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {tech.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven development process ensures quality, transparency, 
                and successful delivery of your custom solution.
              </p>
            </motion.div>

            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                          <div className="text-orange-600 font-semibold">
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {step.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Development Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've built custom solutions that transformed businesses 
                and delivered exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {study.client}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-orange-100">
                Let's discuss your unique requirements and create a custom solution 
                that perfectly fits your business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact">
                  <span className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Start Custom Project
                  </span>
                </Link>
                <Link href="/about">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Learn More
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}