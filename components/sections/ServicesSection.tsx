import { motion } from 'framer-motion';
import { Brain, Shield, Rocket, Cloud, BarChart3, Atom } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, neural networks, and autonomous systems',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing',
      description: 'Quantum algorithms, cryptography, and quantum AI integration',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat detection, quantum-resistant encryption',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions, edge computing, and DevOps',
      icon: Cloud,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Data Analytics',
      description: 'Big data processing, predictive analytics, and insights',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation and modernization',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className='py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
            Our Services
          </h2>
          <p className='text-xl text-white/70 max-w-3xl mx-auto'>
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />
              <div className='relative z-10'>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center`}
                >
                  <service.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-4 text-white'>
                  {service.title}
                </h3>
                <p className='text-white/70 leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}