"use client&quot;;
import React from &quot;react&quot;;


  return (

              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Powerful Features
              </h2>
              <p className=&quot;text-lg text-gray-300&quot;>
                Everything you need for success
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                    <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>
                    {feature.title}
                  </h3>
                  <p className=&quot;text-gray-300&quot;>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
              Ready to Get Started?
            </h2>
            <p className=&quot;text-lg text-gray-300 mb-8&quot;>
              Let us help you implement this solution for your business.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                Start Your Project
              </a>

                Learn More
              </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

