import React from 'react';
import {  import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
';
  'Advanced': 1", 'Cutting-edge': "2",;  ;
  ;
  ;
  ;
  'Revolutionary': "3 ;
;
"};
        return (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0) - ;
               (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0);      case 'category': ";
        return a.category.localeCompare(b.category) ;
      "default":;
        return 0"}) ;
;
    "hidden": "{ "opacity": 0 "},;
    "visible": "{;
      "opacity": 1",;
      "transition": "{;
        "staggerChildren": 0.1;
      "};                        <div>"
                          <h3 className="text-lg font-semibold text-white group-hover: tex t-zion-cyan transition-colors">
                            {service.title}
                          "
                          <p className="text-sm text-zion-slate-400">{service.category}</p>
                        </div>
                      </div>
                      {getInnovationIcon(service.innovationLevel) }
                    </div>;
                    {/* Description */}";
                    <p className="text-zion-slate-300 text-sm mb-4 line-clamp-3">;
                      {service.description}
                    </p>;
                    {/* Tags */}";
                    <div className="flex flex-wrap gap-2 mb-4">;
                      {service.tags.slice(0, 3).map((tag, index) => (;
                        <span;
                          key={index}";
                          className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-lg";
                          {tag}
                        </span>) ) }
                    </div>;
                    {/* Price and Features */}";
                    <div className="space-y-3">";
                      <div className="flex items-center justify-between">";
                        <span className="text-2xl font-bold text-zion-cyan">;
                          ${service.price.toLocaleString()}
                        </span>";
                        <span className="text-sm text-zion-slate-400">/month</span>;
                      </div>;
";
                      <div className="flex items-center gap-2 text-sm text-zion-slate-400">";
                        <Clock className="w-4 h-4"   />;
                        <span>{service.estimatedDelivery}</span>;
                      </div>;
";
                      <div className="flex items-center gap-2 text-sm text-zion-slate-400">";
                        <Shield className="w-4 h-4"   />                        <span>{service.supportLevel}</span>;
                      </div>;
                    </div>;
                    {/* CTA Button */}";
                    <button className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-2 px-4 rounded-xl font-medium "hover": "fro m-zion-cyan/90 "hover": t o-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2">;
                      Learn More";
                      <ArrowRight className="w-4 h-4"   />                    </button>;
                  </>) : (;
                  // List View;
                  <>";
                    <div className="flex-1">";
                      <div className="flex items-start justify-between mb-2">";
                        <div className="flex items-center gap-3">;
                          {getCategoryIcon(service.category)"}
                          <div>";
                            <h3 className="text-xl font-semibold text-white group-"hover": "tex t-zion-cyan transition-colors">;
                              {service.title"}
                            </h3>";
                            <p className="text-zion-slate-400">{service.category}</p>;
                          </div>;
                        </div>;          {filteredServices.length === 0 && (<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}"
              className="text-center py-20"
"
              <div className="text-6xl mb-4">🔍</div>"
              <h3 className="text-2xl font-semibold text-white mb-2">No services found"
              <p className="text-zion-slate-400 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button      onClick={;
  ;
  ;
  ;
  ;
              <button      onClick = {;
  () => {;
                  setSearchTerm('');
                  setActiveCategory('all');
                  setPriceRange([0,
  10000]);
                  setInnovationLevel('all')}}"                className="bg-zion-cyan text-white px-6 py-3 rounded-xl font-medium "hover": "b g-zion-cyan/90 transition-colors";
              >;
                Clear All Filters;
              </button>;
            </motion.div>) "}
        </div>;
      </section>;
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && (<motion.div;
            initial={{ "opacity": "0 "}}
            animate={{ "opacity": "1 "}}
            exit={{ "opacity": "0 "}}";
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4";
            onClick={closeModal}

            <motion.div;
              initial = {;
  { scale: 0.9,
  opacity: 0;
}}
              animate = {;

  { scale: 1,
  opacity: 1;
}}
              exit = {;

  { scale: 0.9,
  opacity: 0;
}}";              className="bg-zion-slate-900 border border-zion-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto";
              onClick={(e) => e.stopPropagation()}
";
              <div className="p-8">;
                {/* Header */}";
                <div className="flex items-start justify-between mb-6">";
                  <div className="flex-1">";
                    <div className="flex items-center gap-3 mb-2">;
                      {getCategoryIcon(selectedService.category)}";
                      <span className="text-zion-slate-400">{selectedService.category}</span>;
                    </div>";
                    <h2 className="text-3xl font-bold text-white mb-2">;
                      {selectedService.title}
                    </h2>";
                    <p className="text-zion-slate-300 text-lg">;
                      {selectedService.description}
                    </p>;
                  </div>;
                  <button onClick={closeModal}";
                    className="text-zion-slate-400 "hover": "tex t-white transition-colors";
";
                    <X className="w-6 h-6"   />                  </button>;
                </div>;
                {/* Price and Key Info */"}";
                <div className="grid grid-cols-1 "md": "gri d-cols-3 gap-6 mb-8">";
                  <div className="bg-zion-slate-800/50 rounded-xl p-4">";
                    <div className="text-3xl font-bold text-zion-cyan mb-1">;
                      ${selectedService.price.toLocaleString()"}
                    </div>";
                    <div className="text-zion-slate-400">per month</div>;
                  </div>";
                  <div className="bg-zion-slate-800/50 rounded-xl p-4">";
                    <div className="text-2xl font-bold text-zion-purple mb-1">;
                      {selectedService.estimatedDelivery}
                    </div>";
                    <div className="text-zion-slate-400">delivery time</div>;
                  </div>";
                  <div className="bg-zion-slate-800/50 rounded-xl p-4">";
                    <div className="text-2xl font-bold text-zion-green mb-1">;
                      {selectedService.roi}
                    </div>";
                    <div className="text-zion-slate-400">ROI</div>;
                  </div>;
                </div>;
                {/* Features and Benefits */}";
                <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-8 mb-8">;
                  <div>";
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">";
                      <CheckCircle className="w-5 h-5 text-zion-green"   />                      Key Features;
                    </h3>";
                    <ul className="space-y-2">;
                      {selectedService.features.map((feature", index) => (";
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">";
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"  />;
                          {feature}
                        </li>) ) }
                    </ul>;
                  </div>;
                  <div>";
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">";
                      <TrendingUp className="w-5 h-5 text-zion-green"   />                      Benefits;
                    </h3>";
                    <ul className="space-y-2">;
                      {selectedService.benefits.map((benefit, index) => (";
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">";
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"  />;                {/* Features and Benefits */}"
                <div className="grid grid-cols-1 md: gri d-cols-2 gap-8 mb-8">
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">"
                      <CheckCircle className="w-5 h-5 text-zion-green"   />                      Key Features
                    "
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => ("
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">"
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"  />
                          {feature}
                        </li>) ) }
                    </ul>
                  </div>
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">"
                      <TrendingUp className="w-5 h-5 text-zion-green"   />                      Benefits
                    "
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => ("
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">"
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"  />
                          {benefit}
                        </li>) ) }
                    </ul>;
                  </div>;
                </div>;
                {/* Use Cases and Target Audience */}";
                <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-8 mb-8">;
                  <div>";
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">";
                      <Target className="w-5 h-5 text-zion-cyan"   />                      Use Cases;
                    </h3>";
                    <ul className="space-y-2">;
                      {selectedService.useCases.map((useCase", index) => (";
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">";
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"  />;
                          {useCase}
                        </li>) ) }
                    </ul>;
                  </div>;
                  <div>";
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">";
                      <Users className="w-5 h-5 text-zion-purple"   />                      Target Audience;
                    </h3>";
                    <ul className="space-y-2">;
                      {selectedService.targetAudience.map((audience, index) => (";
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">";
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"  />;                {/* Use Cases and Target Audience */}"
                <div className="grid grid-cols-1 md: gri d-cols-2 gap-8 mb-8">
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">"
                      <Target className="w-5 h-5 text-zion-cyan"   />                      Use Cases
                    "
                    <ul className="space-y-2">
                      {selectedService.useCases.map((useCase, index) => ("
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">"
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"  />
                          {useCase}
                        </li>) ) }
                    </ul>
                  </div>
                  <div>"
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">"
                      <Users className="w-5 h-5 text-zion-purple"   />                      Target Audience
                    "
                    <ul className="space-y-2">
                      {selectedService.targetAudience.map((audience, index) => ("
                        <li key={index} className="flex items-start gap-2 text-zion-slate-300">"
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"  />
                          {audience}
                        </li>) ) }
                    </ul>;
                  </div>;
                </div>;
                {/* Technical Specs */}
                {selectedService.technicalSpecs && (";
                  <div className="mb-8">";
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">";
                      <Code className="w-5 h-5 text-zion-cyan"   />                      Technical Specifications;
                    </h3>";
                    <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-6">;
                      <div>";
                        <h4 className="font-medium text-zion-slate-300 mb-2">Technology Stack</h4>";
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.technology.map((tech", index) => (";
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-cyan text-sm rounded-lg">;
                {selectedService.technicalSpecs && ("
                  <div className="mb-8">"
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">"
                      <Code className="w-5 h-5 text-zion-cyan"   />                      Technical Specifications
                    "
                    <div className="grid grid-cols-1 md: gri d-cols-2 gap-6">
                      <div>"
                        <h4 className="font-medium text-zion-slate-300 mb-2">Technology Stack</h4>"
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technicalSpecs.technology.map((tech, index) => ("
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-cyan text-sm rounded-lg">
                              {tech}
                            </span>) ) }
                        </div>;
                      </div>;
                      <div>";
                        <h4 className="font-medium text-zion-slate-300 mb-2">Integrations</h4>";
                        <div className="flex flex-wrap gap-2">;
                          {selectedService.technicalSpecs.integrations.map((integration, index) => (";
                            <span key={index} className="px-3 py-1 bg-zion-slate-800 text-zion-purple text-sm rounded-lg">;
                              {integration}
                            </span>) ) }
                        </div>;
                      </div>;
                    </div>;
                  </div>) }

                {/* Contact and CTA */}";
                <div className="border-t border-zion-slate-700 pt-6">";
                  <div className="flex flex-col "md": "fle x-row items-center justify-between gap-4">";
                    <div className="text-center "md": tex t-left">";
                      <p className="text-zion-slate-400 mb-2">Ready to get started?</p>";
                      <div className="flex items-center gap-4 text-sm text-zion-slate-300">;
                        <span>📞 {selectedService.contactInfo.phone"}</span>;
                        <span>✉️ {selectedService.contactInfo.email}</span>;
                      </div>;
                    </div>";
                    <div className="flex gap-3">";
                      <button className="bg-zion-slate-700 text-white px-6 py-3 rounded-xl font-medium "hover": "b g-zion-slate-600 transition-colors">;
                        Request Demo;
                      </button>";
                      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-medium "hover": fro m-zion-cyan/90 "hover": t o-zion-purple/90 transition-colors">;
                        Get Started;
                      </button>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;) "};
      </AnimatePresence>;
    </div>;) ;
</div></div></div></div></div></div></div>};
export default ComprehensiveServicesShowcase2025}}}}}}}}}}'"`;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>