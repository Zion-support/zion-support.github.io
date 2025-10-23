"use client";
import React from "react";


export default function Page() {
  return (

              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <div className="text-center mb-16" loading="lazy">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" loading="lazy">Powerful Features</h2>
              <p className="text-lg text-gray-300" loading="lazy">Everything you need for success</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4" loading="lazy">
                    <feature.icon className="w-8 h-8 text-white" loading="lazy" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3" loading="lazy">{feature.title}</h3>h3>
                  <p className="text-gray-300" loading="lazy">{feature.description}</p>
                </div>
              ))}
};
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" loading="lazy">
          <div className="max-w-7xl mx-auto text-center" loading="lazy">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" loading="lazy">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8" loading="lazy">Let us help you implement this solution for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">Start Your Project</div>a>

                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
    </ErrorBoundary>
  );
};


