"use client";
import React from "react";


  return (

              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2>Powerful Features
              </h2>
              <p>Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature> </feature>
                  <h3>{feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2>Ready to Get Started?
            </h2>
            <p>Let us help you implement this solution for your business.
            </p>
            <div>Start Your Project
              </div>a>

                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

