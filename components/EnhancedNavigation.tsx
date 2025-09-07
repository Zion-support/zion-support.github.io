


const toggleDropdown = ("dropdown": string) => {setActiveDropdown(activeDropdown === dropdown ? null : dropdown;
}



                <span>Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />;`              </button>;{activeDropdown === 'services' && (<motion&& motion.div;'
                  }
                  initial={{ "opacity": 0, "y": 10 
}
                  animate={{ "opacity": 1, "y": 0 
}
                  exit={{ "opacity": 0, "y": 10 
}
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6">"

                  <div className="grid grid-cols-2 gap-4 px-6">;"
                    {services.map((service) => (<Link;
                        }
                        key={service.name}
                        href={service.href}
                        className="group p-4 rounded-lg "hover":bg-gray-50 transition-colors";"
                        onClick={closeAllDropdowns}
                      >;
                        <div className="flex items-start space-x-3">;"
                          <service.icon className="w-6 h-6 text-blue-600 mt-1" />;"
                          <div>;
                            <h3 className="font-semibold text-gray-900 group-"hover":text-blue-600">;"
                              {service.name}
                            </h3>;
                            <p className="text-sm text-gray-600">{service.description}</p>;"
                          </div>;
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion.div>;
              )}
            </div>;
            {/* Company Dropdown */}

          {/* Mobile Menu Button */}
          <button;
            onClick={() => setIsOpen(!isOpen)}


            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
        {/* Mobile Menu */}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
