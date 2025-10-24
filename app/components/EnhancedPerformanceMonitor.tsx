"use client"
import React from "react";
import { Helmet  } from "react-helmet-async";
import { ArrowRight, Brain, CheckCircle, Phone, Mail, MapPin, Zap, Shield, Globe   } from "lucide-react";
import { Navigation  } from "../components/Navigation";
const EnhancedPerformanceMonitorPage: "React.FC = () => {
const benefits = [
    "Increase efficiency by up to 50%"","Reduce costs by 30% with automation"
    "Improve decision-making with AI insights"
    "Scale operations without proportional staff increases"
    "Gain competitive advantage with advanced technology" <div className="[^"]*">

        </section>

        {/* Features Section*/}
        <section className="py-20 px-4 sm: px-6 lg:px-8">,<div className="[^"]*"> <div className="[^"]*">
    <h1 className="text-3 xl md: text-4 xl font-bold text-white mb-4"></h2>
Key Features
              </h2> <p className="[^"]*">
Our enhanced performance monitoring system provides comprehensive insights and optimization.
              </p>,<div className="[^"]*">
              {features.map((feature,index) => (<divkey = {index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors" />
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />,<h1 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (<li key = {idx} className="flex items-center text-sm text-gray-400"> <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  </div>
    </>
  ))}
              </div>
            </div>
        </section>

        {/* Benefits Section*/}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gray-800">,<div className="[^"]*"> <div className="[^"]*">
    <h1 className="text-3 xl md: text-4 xl font-bold text-white mb-4"></h2>
Why Choose Our Performance Monitor?</h2> <p className="[^"]*">
Experience the benefits of advanced performance monitoring with our comprehensive solution.
              </p>
              </div>,<div className="[^"]*">
              {benefits.map((benefit,index) => (<divkey = {index} className="flex items-start space-x-3" /> <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
    </>
  ))
              </div>
            </div>
        </section>

        {/* CTA Section*/}
        <section className="py-20 px-4 sm: px-6 lg:px-8">,<div className="[^"]*"> <div className="[^"]*">,<h1 className="text-3 xl md: text-4 xl font-bold text-white mb-4"></h2>
Ready to Optimize Your Performance?</h2> <p className="[^"]*">
Get started with our enhanced performance monitoring solution today.
              </p>,<div className="[^"]*">
                <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"> <Phone className="mr-2 h-5 w-5 inline" />
Call Now
                </button>
                <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"> <Mail className="mr-2 h-5 w-5 inline" />
Email Us
                </button>
                </div>
              </div>
            </div>
        </section>
        </div>
      </div>
    </>
  )

export default EnhancedPerformanceMonitorPage
}

export const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedperformancemonitor ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedPerformanceMonitor;