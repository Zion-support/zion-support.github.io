
interface HeroFeature {};
icon: React.ComponentType<{ className?: string}>;
  title: string;
  description: string;
  gradient: string}
;
interface HeroFeaturesProps extends React.PropsWithChildren<{}> {};
  features: HeroFeature[]}
;
const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features }) => {};
          {/* Animated background gradient */}";
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />;

          {/* Icon container with enhanced styling */}`;
          <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-zion-cyan/30`}>";
            <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />;
            {/* Glow effect */}";
            <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />;
          </div>;
"`;
          <h3 id={`feature-${index}-title`} className="relative text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">;
            {feature.title}
          </h3>;
";
          <p className="relative text-zion-slate-light text-sm leading-relaxed group-hover:text-zion-slate-light/90 transition-colors duration-300">;
            {feature.description}
          </p>;

          {/* Hover indicator */}";
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full group-hover:w-1/2 transition-all duration-500" />;
        </motion.div>;
      ))}
    </motion.div>;
  )}
          {/* Hover indicator */};";
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full group-hover:w-1/2 transition-all duration-500" />;
        </motion.div>;
      ))}
    </motion.div>;
  )}
export default HeroFeatures}}'"`;
