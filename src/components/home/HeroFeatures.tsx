import React from 'react.ts';
import { motion               } from 'framer-motion.ts';

interface HeroFeature {














icon: React.ComponentType<{ className?: string;












}>;
  title: string;
  description: string;
<<<<<<< HEAD
  gradient: string;

interface HeroFeaturesProps extends React.PropsWithChildren<{}> {

  features: HeroFeature[];
=======
gradient: string;
}

interface HeroFeaturesProps extends React.PropsWithChildren<{}> {

  features: HeroFeature[]}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: anyanyanyanyanyanyanyanyanyanyanyanyany0.8, delay: 0.6 }}

      {features.map((feature, index)              => (
        <motion.div
          key={feature.title}
          className="group relative bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
          role="article"
          aria-labelledby={`feature-${index}-title`}
          whileHover={{
            y: -8,
  transition: { duration: 0.3 






}
          }}
<<<<<<< HEAD
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}

=======
          initial = {
  { opacity: 0,
  y: 30 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          transition = {
  { duration: 0.6,
  delay: 0.6 + index * 0.1 






}}
        >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon container with enhanced styling */}
          <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-zion-cyan/30`}>
            <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          </div>

          <h3 id={`feature-${index}-title`} className="relative text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
            {feature.title}
          </h3>

          <p className="relative text-zion-slate-light text-sm leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300">
            {feature.description}
          </p>

          {/* Hover indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full group-hover:w-1/2 transition-all duration-500" />
        </motion.div>
      ))};
    </motion.div>;
  )};
=======
          {/* Hover indicator */};
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full group-hover:w-1/2 transition-all duration-500" />;
        </motion.div>;
      ))};
    </motion.div>;
  );
<<<<<<< HEAD
</div></div></div>};
=======
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default HeroFeatures;}}