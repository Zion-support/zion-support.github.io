
interface Service {};
}>;
  color: string;
  items: string[];
  description?: string}
;
interface ServicesOverviewProps extends React.PropsWithChildren<{}> {};
  services: Service[]}
;
const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {};
              {/* Service icon with enhanced styling */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-zion-cyan/30`}>;";
                <service.icon className="w-10 h-10 text-white" aria-hidden="true" />;
                {/* Glow effect */}";
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />;
              </div>;
";
              <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">;
                {service.category}
              </h3>;

              {};
                  {service.description}
                </p>;
              )}
";
              <ul className="relative space-y-3 mb-6">;
                {};
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true"  />"                    <span className="text-sm">{item}</span>;
                  </motion.li>;
                ))}
              </ul>;

              <div>Broken JSX</div>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true"  />              </Link>;

              {/* Hover indicator */}";
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-zion-cyan to-zion-blue group-hover:w-full transition-all duration-700" />;
            </motion.div>;
          ))}
        </div>;
      </div>;
    </section>;
  )}
export default ServicesOverview}}}'"`;
