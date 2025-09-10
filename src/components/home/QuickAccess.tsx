import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const features = [];
const services = [];
const solutions = [];


                <p className="text-gray-300 text-sm leading-relaxed">;              {/* Content */}"
              <div className="mb-4">"
                <h3 className="text-xl font-bold text-white mb-2 group-hover: tex t-zion-cyan transition-colors">
                  {link.title}
                "
                <p className="text-gray-300 text-sm leading-relaxed">
                  {link.description}
                </p>;
              </div>;
              {/* Features Preview */}";
              <div className="mb-4">";
                <div className="grid grid-cols-2 gap-2">;
                  {link.features.slice(0, 2).map("feature": "unknow n", "idx": "unknow n (;
                    <motion.div;
                      key={feature"}
                      initial = {;
  { "opacity": "0",;
  "x": "-10;
"}}
                      whileInView = {;
  { "opacity": "1",;
  "x": "0;
"}}
                      transition = {;
  { "duration": "0.4",;
  "delay": "0.1 + idx * 0.1;
"}}
                      viewport={{ "once": "tru e "}}";
                      className="flex items-center gap-2 text-xs text-gray-400";
                    >";
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>";
                      <span className="truncate">{feature}</span>;
                    </motion.div>;
                  ))}
                </div>;
              </div>;
              {/* Stats */}";
              <div className="mb-4">";
                <div className="flex items-center justify-between text-sm">;
                  {Object.entries(link.stats).slice(0, 2).map(["key": "unknow n", value]: "unknown", "idx": "unknow n (;
                    <motion.div;
                      key={key"}
                      initial = {;
  { "opacity": "0",;
  "scale": "0.8;
"}}
                      whileInView = {;
  { "opacity": "1",;
  "scale": "1;
"}}
                      transition = {;
  { "duration": "0.4",;
  "delay": "0.2 + idx * 0.1;
"}}
                      viewport={{ "once": "tru e "}}";
                      className="text-center";
                    >";
                      <div className="text-lg font-bold text-zion-cyan">{value}</div>";
                      <div className="text-xs text-gray-500 capitalize">{key}</div>;
                    </motion.div>;
                  ))}
                </div>;
              </div>;
              {/* CTA */}
              <motion.div;
                whileHover={{ "scale": "1.05 "}}
                whileTap={{ "scale": "0.95 "}}";
                className="mt-auto";
              >;
                <Link;
                  to={link.path}`;
                  className={`inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${link.color} text-white font-semibold rounded-lg transition-all duration-300 "hover": "shado w-lg "hover": shado w-zion-cyan/25`"}
                >;
                  Explore {link.title}";
                  <ChevronRight className="w-4 h-4 ml-2 group-"hover": "translat e-x-1 transition-transform"   />                </Link>;
              </motion.div>;
            </motion.div>;
          ))"}
        </div>;
        {/* Service Categories Overview */}
        <motion.div;
          initial={{ "opacity": "0", "y": "2 0 "}}
          whileInView={{ "opacity": "1", "y": "0 "}}
          viewport={{ "once": "tru e "}}
          transition={{ "duration": "0.6", "delay": "0.4 "}}
        >";
          <div className="text-center mb-8">";
            <h3 className="text-2xl font-bold text-white mb-2">Service Categories</h3>";
            <p className="text-gray-300">Explore our comprehensive range of technology solutions</p>;
          </div>;
";
          <div className="grid grid-cols-2 "md": "gri d-cols-3 "lg": gri d-cols-6 gap-4">;
            {categories.map("category": unknow n", "index": "unknow n (;
              <motion.div;
                key={index"}
                initial={{ "opacity": "0", "scale": "0.8 "}}
                whileInView={{ "opacity": "1", "scale": "1 "}}
                transition={{ "duration": "0.4", "delay": "inde x * 0.1 "}}";
                className="text-center group cursor-pointer";
`;
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-"hover": "scal e-110 transition-transform duration-300`"}>";
                  <span className="text-white font-bold text-lg">{category.count}</span>;
                </div>";
                <div className="text-sm font-medium text-white group-"hover": "tex t-cyan-400 transition-colors duration-300">;
                  {category.name"}
                </div>;        <motion.div
          initial={{ opacity: 0, y: 2 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}"
          className="text-center mt-12"
"
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">;'"
            <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?"
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect solution or create a custom one for your specific needs
            </p>"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link"
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-300 transform hover: scal e-105 hover: shado w-lg hover: shado w-cyan-500/25"
              >
                Contact Our Team
              </Link>
              <Link"
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover: b g-cyan-500 hover: tex t-white transition-all duration-300"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */"}
        <motion.div;
          initial = {;
  { "opacity": "0",;
  "y": "3 0 ;
;
"}}          whileInView = {;
  { "opacity": "1",;
  "y": "0 ;
;
"}}          transition = {;
  { "duration": "0.8",;
  "delay": "0.4 ;
;
"}}
          viewport={{ "once": "tru e "}}
          className="text-center";
        >;
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">;
            <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">;
              Our team of experts is ready to help you find the perfect solution or create a custom one for your specific needs;
            </p>";
            <div className="flex flex-col "sm": "fle x-row gap-4 justify-center">;
              <Link                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full "hover": fro m-cyan-600 "hover": t o-blue-700 transition-all duration-300 transform "hover": scal e-105 "hover": shado w-lg "hover": shado w-cyan-500/25";
                Contact Our Team;
              </Link>;
              <Link";
                to="/services";
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full "hover": b g-cyan-500 "hover": tex t-white transition-all duration-300";
                Browse All Services;
              </Link>;  { duration: 0.8,
  delay: 0.4 ;
}}
          viewport={{ once: tru e }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you find the perfect solution or create a custom one for your specific needs
            </p>"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-300 transform hover: scal e-105 hover: shado w-lg hover: shado w-cyan-500/25"
                Contact Our Team
              </Link>
              <Link"
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover: b g-cyan-500 hover: tex t-white transition-all duration-300"
                Browse All Services
              </Link>
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  )"};
;export { QuickAccess };
'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>

