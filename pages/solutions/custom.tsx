import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const process = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business requirements and technical constraints.',
    icon: Target,
    details: ['Requirements gathering', 'Technical analysis', 'Project planning', 'Timeline estimation']
  },
  {
    step: 2,
    title: 'Design & Architecture',
    description: 'Create detailed technical specifications and system architecture.',
    icon: Code,
    details: ['System design', 'Database architecture', 'API design', 'UI/UX planning']
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Build your solution with rigorous testing and quality assurance.',
    icon: Zap,
    details: ['Agile development', 'Code reviews', 'Automated testing', 'Quality assurance']
  },
  {
    step: 4,
    title: 'Deployment & Support',
    description: 'Deploy your solution and provide ongoing maintenance and support.',
    icon: Rocket,
    details: ['Production deployment', 'Performance monitoring', 'Bug fixes', 'Feature updates']
  }
];

const technologies = [
  { name: 'React/Next.js', category: 'Frontend' },
  { name: 'Node.js/Python', category: 'Backend' },
  { name: 'PostgreSQL/MongoDB', category: 'Database' },
  { name: 'AWS/Azure/GCP', category: 'Cloud' },
  { name: 'Docker/Kubernetes', category: 'DevOps' },
  { name: 'AI/ML Integration', category: 'AI' }
];

export default function Custom() {
  return (
    <Layout>
      <Head>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Get tailored software solutions built specifically for your business needs and requirements." />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Get tailored software solutions built specifically for your business needs and requirements.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Development Process
              </h2>
              
              <div className="space-y-8">
                {process.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-8"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                              {step.step}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Technologies We Use
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <span className="text-sm text-gray-500">{tech.category}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Build Your Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss your project requirements and create a custom solution that perfectly fits your business.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}