
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon

                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}

                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >

                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}

                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            

                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div  className ={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div  className ={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Showcase Section */}

                Discover our innovative micro SAAS applications designed to solve specific business challenges with real functionality.
              </p>
            </div>
            

                >
                  Try Free Trial
                </Link>
              </div>

              {/* Analytics Dashboard */}

                >
                  Try Free Trial
                </Link>
              </div>

              {/* Task Manager */}

                >
                  Try Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}

                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            

                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default HomePage