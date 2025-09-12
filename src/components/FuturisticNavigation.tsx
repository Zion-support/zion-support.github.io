import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
const services = [];


                  <AnimatePresence>;
                    {activeDropdown === category.name && ;
                      <motion.div;
                        initial = {;
  { "opacity": "0", "y": "-10",;
  "scale": "0.95;
"}}
                        animate = {;
  { "opacity": "1", "y": "0",;
  "scale": "1;
"}}
                        exit = {;
  { "opacity": "0", "y": "-10",;
  "scale": "0.95;
"}}
                        transition={{ "duration": "0.2 "}}";
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden";
";
                        <div className="p-4">";
                          <div className="mb-4">";
                            <h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}</h3>";
                            <div className="w-16 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>;
                          </div>";
                          <div className="space-y-2">;
                            {category.services.map((service, subIndex) => (;
                              <motion.div;}}
                        transition={{ duration: 0.2 }}"
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
"
                        <div className="p-4">"
                          <div className="mb-4">"
                            <h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}"
                            <div className="w-16 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                          </div>"
                          <div className="space-y-2">
                            {category.services.map((service, subIndex) => (
                              <motion.div
                                key={service.name}
                                initial = {;
  { "opacity": "0",;
  "x": "-20;
"}}
                                animate = {;
  { "opacity": "1",;
  "x": "0;
"}}
                                transition = {;
  { "duration": "0.3",;
  "delay": "subInde x * 0.05;
"}}
                              >;
                                <Link;
                                  to={service.href}";
                                  className="flex items-start space-x-3 p-3 rounded-lg "hover": "b g-zion-cyan/10 transition-all duration-300 group";
";
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-"hover": scal e-110 transition-transform duration-300">";
                                    <Brain className="w-4 h-4 text-zion-cyan"   /> {/* Using Brain icon for consistency */"}
                                  </div>";
                                  <div className="flex-1">"                                    <h4 className="font-medium text-white group-"hover": "tex t-zion-cyan transition-colors duration-300">;
                                      {service.name"}
                                    </h4>;
                                  </div>;
                                </Link>;
                              </motion.div>;) ) }
                          </div>;
                        </div>;
                      </motion.div>) }
                  </AnimatePresence>;
                </div>) ) }
            </nav>;
            {/* Right side actions */}";
            <div className="flex items-center space-x-4"> {/* Search */}";
              <form onSubmit={handleSearch} className="hidden "md": "bloc k">;";
                <div className="relative">;
                  <input";
                    type="text";
                    placeholder="Search services...";
                    value={searchQuery"}
                    onChange={(e) => setSearchQuery(e.target.value)}";
                    className="w-64 px-4 py-2 pl-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light "focus": "outlin e-none "focus": rin g-2 "focus": rin g-zion-cyan/50 "focus": borde r-zion-cyan/50 transition-all duration-300";
                  />";
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light"   />                </div>;
              </form>;
              {/* User actions */"}";
              <div className="flex items-center space-x-2">;
                <motion.button;
                  whileHover={{ "scale": "1.05 "}}
                  whileTap={{ "scale": "0.95 "}}";
                  className="p-2 text-zion-slate-light "hover": "tex t-zion-cyan "hover": b g-zion-cyan/10 rounded-lg transition-all duration-300";
";
                  <Bell className="w-5 h-5"   />                </motion.button>;
                <motion.button;
                  whileHover={{ "scale": 1.05 "}}
                  whileTap={{ "scale": "0.95 "}}";
                  className="p-2 text-zion-slate-light "hover": "tex t-zion-cyan "hover": b g-zion-cyan/10 rounded-lg transition-all duration-300";
";
                  <User className="w-5 h-5"   />                </motion.button>;
                <motion.button;
                  whileHover={{ "scale": 1.05 "}}
                  whileTap={{ "scale": "0.95 "}}";
                  className="p-2 text-zion-slate-light "hover": "tex t-zion-cyan "hover": b g-zion-cyan/10 rounded-lg transition-all duration-300";
";
                  <ShoppingCart className="w-5 h-5"   />                </motion.button>;
              </div>;
              {/* Mobile Sidebar Toggle */"}
              <MobileSidebarToggle  />;
            </div>;
          </div>;
        </div>;
      </header>;
    </>;
  )};
'"`;
;,"});})";
;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</ChevronDown>;
</motion>;
</motion>;
</motion>;
'"`
;,"}
    );,})";
</motion>
</motion>
</motion>
</motion>
</motion>
</ChevronDown>
</motion>
</motion>
</motion>
</motion>

