'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {
  return (
              </p>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </div>
      
      <Footer />
    </>
      </section>

        <section className="py-20"
          <div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Discover the powerful features that make our solutions stand out.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g: grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div>
                  <p className="text-gray-600 mb-4"
                  <ul className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600"
                        <CheckCircle />
                        {benefit}

                      </li>
                    ))}

                  </ul>
              ))}

            </div>

        <section className="py-20 bg-gray-100"
          <div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Experience the benefits of working with industry leaders.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g: grid-cols-3 gap-8"
              {benefits.map((benefit, index) => (
                <div>
              ))}

            </div>

        <section className="py-20"
          <div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div>
              <button className="
    ,
    r: bg-blue-600 hove, r: text-white transition-colors"
                Schedule Demo
              </button>
      
      <Footer />
    </>
  );}

  </Footer>
