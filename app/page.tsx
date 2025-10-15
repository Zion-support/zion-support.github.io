<<<<<<< HEAD

<<<<<<< HEAD
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI and IT Solutions for Modern Businesses
          </p>
        </div>
=======
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
                      animationDelay `${index * 100}ms`
                    }}
                  >

                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
>>>>>>> main
            </div>
          </div>
        </section>

        {/* Services Section */}

                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            

                  style={{
                    animationDelay `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className ={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className ={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  

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
>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
      </div>
    </div>
  );
}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive page solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - Page Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
