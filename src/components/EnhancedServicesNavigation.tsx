
      ]}
  ]}  ]';';
  return ('';
    <div className = 'relative'>;
      {/* Main Services Button */}


          <span>🚀</span>
          <span>Services</span>
          <motion.span

          >
            ▼
          </motion.span>
        </span>
      </button>

            transition={{ duration: 0.3 }}
          >;
            ▼;
          </motion.span>;
        </span>;
      </button>;

      {/* Services Dropdown */}

            initial = {}, { opacity: 0, y: -10,;
  scale: 0.95}}
            animate = {}, { opacity: 1, y: 0,;
  scale: 1}}
            exit = {}, {serviceCategories.map((category, categoryIndex)  => (

                  <motion.div;
                    key={category.name}

                    animate = {}, { opacity: 1,;
  x: 0}}
                    transition = {}, {category.services.map((service, serviceIndex) => (

                          <motion.div;
                            key={service.title}

                            animate = {}, { opacity: 1,;
  x: 0}}
                            transition = {}


                            </div>

                          </motion.div>) ) }
                      </div>;
                    </div>;
                  </motion.div>) ) }

                    <motion.div
                      key={link.title}
                      initial = {}, { opacity: 0, y: 20}}

                      animate = {}, { opacity: 1,;
  y: 0}}
                      transition = {}, {link.description}

                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>


                    </span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>) }

          onClick={() => setIsOpen(false)}
        />)}
    </div>;

          onClick={() => setIsOpen(false)}
        />)}&quot;&quot;
    </div>

  )}
;
export: default EnhancedServicesNavigation;
export: { EnhancedServicesNavigation }
;


export { EnhancedServicesNavigation }




