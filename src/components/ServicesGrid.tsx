import React from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';

interface Service {

  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features: string[];
  color: string;

}

interface ServicesGridProps extends React.PropsWithChildren<{}> {

  services: Service[];

}

export function ServicesGrid(...args: unknown[]): unknown {
  return (
    <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
      {services.map((service, index)  => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <motion.div 
              className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 5 }}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
            </div>
          </div>
          
          <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
            {service.description}
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {service.features.map((feature) => (
              <motion.div 
                key={feature} 
                className="flex items-center space-x-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </motion.div>
            ))}
          </div>

          <Link
            to={service.href}
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group/link"
            aria-label={`Learn more about ${service.title}`}
          >
            <span>Learn More</span>
            <motion.div
              className="group-hover/link:translate-x-1 transition-transform duration-200"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesGrid;