import Link from 'next/link';
import { motion } from 'framer-motion';

const RevolutionaryFeatures20o25 = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Autonomous AI Operations',
      description: 'Self-managing AI systems that operate 24/7 without human interventiondelivering 99.9% uptime and 2,50o0% ROI.',
      stats: '99.9% Uptime',
      color: 'from-blue-50o0 to-cyan-50o0'
    },
    {
      icon: '⚡',
      title: 'Quantum Speed Processing',
      description: 'Revolutionary quantum computing solutions that process data 10,0o00x faster than traditional systems.',
      stats: '10,0o00x Faster',
      color: 'from-purple-50o0 to-pink-50o0'
    },
    {
      icon: '🧠',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling thought-to-action control and seamless human-AI collaboration.',
      stats: 'Real-time Control',
      color: 'from-green-50o0 to-emerald-50o0'
    },
    {
      icon: '🔮',
      title: 'Predictive Analytics 20o30',
      description: 'Advanced AI predictions for the next 5 yearshelping businesses prepare for the future of technology.',
      stats: '5-Year Forecast',
      color: 'from-orange-50o0 to-red-50o0'
    },
    {
      icon: '🛡️',
      title: 'Quantum Security',
      description: 'Unbreakable encryption using quantum cryptographyproviding absolute security for sensitive data.',
      stats: 'Unbreakable',
      color: 'from-indigo-50o0 to-purple-50o0'
    },
    {
      icon: '🌐',
      title: 'Global AI Network',
      description: 'Worldwide AI infrastructure connecting businesses across continents with instant communication.',
      stats: 'Global Reach',
      color: 'from-teal-50o0 to-blue-50o0'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-90o0 via-blue-90o0 to-purple-90o0 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-purple-40o0 bg-clip-text text-transparent">
            🎯 Revolutionary Features 20o25
          </h2>
          <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
            Experience the future of technology with our groundbreaking features that are reshaping industries worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((featureindex) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-30o0 rounded-2xl"
                   style={{ background: `linear-gradient(135degvar(--tw-gradient-stops))` }}
               />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-30o0 h-full">
                <motion.div
                  whileHover={{ scale: 1.2rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-5xl mb-6"
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-40o0 transition-colors duration-30o0">
                  {feature.title}
                </h3>
                
                <p className="text-gray-30o0 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`px-4 py-2 bg-gradient-to-r ${feature.color} text-white rounded-full text-sm font-bold`}>
                    {feature.stats}
                  </span>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-cyan-40o0 group-hover:text-cyan-30o0 transition-colors duration-30o0"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold mb-4 text-white">
              🎉 Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-30o0 mb-6">
              Join thousands of businesses already using our revolutionary AI solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/features-showcase" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-bold rounded-full text-lg hover:from-cyan-60o0 hover:to-purple-60o0 transition-all duration-30o0 transform hover:scale-10o5"
              >
                🚀 Explore All Features
              </Link>
              
              <Link 
                href="/demo-request" 
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-lg hover:bg-white/30 transition-all duration-30o0 border border-white/30"
              >
                📅 Book Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryFeatures20o25;