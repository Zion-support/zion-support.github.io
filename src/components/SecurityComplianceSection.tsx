import {  import { motion  } from 'framer-motion';
 params - Function parameters;
 * @returns {*} Function return value;
 */;
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}        >";
          <h2 className="text-4xl "md": "tex t-5xl font-bold text-white mb-4">;
            Security & Compliance;
          </h2>";
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Enterprise-grade security with industry-leading compliance certifications.Your data and systems are protected by the highest security standards.</p>;
        </motion.div>;
          initial = {;
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          transition = {;

  { duration: 0.6,
  delay: 0.1;
}}";
          className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16">;
          {securityMetrics.map ( (metric, index) => {;            return (";
              <div key = {metric.label} className="text-center">";
                <div className="flex justify-center mb-4">";
                  <div className="p-3 bg-blue-600 rounded-full">";
                    <IconComponent className="h-8 w-8 text-white"   />;
        {/* Security Certifications */}"        <div className="grid grid-cols-1 "md": "gri d-cols-2 "lg": gri d-cols-3 gap-6 mb-16">;
          {securityFeatures.map((feature", index) => (;
            <motion.div;
              key={feature.title}";
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 "hover": "borde r-blue-500/50 transition-all duration-300";
              initial = {;
  { opacity: 0,
  y: 30;
}}
              whileInView = {;

  { opacity: 1,
  y: 0;
}}
              viewport={{ once: true }}
              transition = {;

  { duration: 0.6,
  delay: index * 0.1;
}}            >";
              <div className="flex items-start gap-4">;
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>";
                  <span className="text-xl">{feature.icon}</span>;
                </div>";
                <div className="flex-1">";
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>";
                  <p className="text-gray-400 text-sm mb-3">{feature.description}</p>";
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">`;
                    <div className={`w-2 h-2 rounded-full ${feature.status === 'Certified' ? 'bg-green-400' :';
                      feature.status === 'Compliant' ? 'bg-blue-400' : 'bg-purple-400'`;
  { opacity: 0,
  y: 30;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition = {;

  { duration: 0.6,
  delay: 0.4;
}}        >";
          <h3 className="text-3xl font-bold text-white text-center mb-8">;
            Comprehensive Security Features;
          </h3>;}}
        >"
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Comprehensive Security Features

          <div className="grid grid - cols - 1 "md": "gri d - cols - 3 gap-8">;
            {complianceFeatures.map((category", index) => (<div key={category.category} className="bg-slate - 800 border border-slate - 700 rounded-xl p -6">;
                <h4 className="text-xl font - bold text-white mb-4 text-center">                  {category.category}
                </h4>";
                <ul className="space-y-3">;
                  {category.features.map((feature, featureIndex) => (";
                    <li key={featureIndex} className="flex items-center gap-3">";
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>";
                      <span className="text-gray-300 text-sm">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>) ) }
          </div>;
        </motion.div>;
        {/* Security Metrics */}
        <motion.div;
          className="mb-16"          initial = {;
  { opacity: 0,
  y: 30;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition = {;

  { duration: 0.6,
  delay: 0.6;
}}        >";
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">";
            <h3 className="text-2xl font-bold text-white text-center mb-8">;
              Security Performance Metrics;
  { opacity: 0,
  y: 20;
}}
          whileInView = {;

  { opacity: 1,
  y: 0;
}}
          viewport={{ once: true }}
          transition = {;

  { duration: 0.6,
  delay: 0.8;
}}        >";
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">";
            <h3 className="text-2xl font-bold mb-4">;
              Secure Your Business Today;
            </h3>";
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">;
              Get enterprise-grade security and compliance without the complexity.Our experts handle everything while you focus on your business.</p>";
            <div className="flex flex-col "sm": "fle x-row gap-4 justify-center">";
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 "hover": b g-gray-100 rounded-lg font-medium transition-colors duration-200">;
                Security Assessment";
                <Shield className="ml-2 h-5 w-5"   />;
              </button>";
              <button className="inline-flex items-center px-6 py-3 border border-white text-white "hover": b g-white "hover": tex t-blue-600 rounded-lg font-medium transition-colors duration-200">;
                Compliance Review";
                <FileText className="ml-2 h-5 w-5"   />              </button>;
            </div>;
          </div>;
        </motion.div>;}}
        >"
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">"
            <h3 className="text-2xl font-bold mb-4">
              Secure Your Business Today
            "
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get enterprise-grade security and compliance without the complexity.Our experts handle everything while you focus on your business.</p>"
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">"
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover: b g-gray-100 rounded-lg font-medium transition-colors duration-200">
                Security Assessment"
                <Shield className="ml-2 h-5 w-5"   />
              </button>"
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover: b g-white hover: tex t-blue-600 rounded-lg font-medium transition-colors duration-200">
                Compliance Review"
                <FileText className="ml-2 h-5 w-5"   />              </button>
            </div>
          </div>
        </motion.div>
      </div>;
    </section>;) "};
;
    </section>;) };
export default SecurityComplianceSection;";
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
export default SecurityComplianceSection;
export default SecurityComplianceSection;
'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</div>