import { Helmet } from 'react-helmet-async';'''
import {ArrowRight, Zap} from 'lucide-react';'''
import EnhancedSEO from '../components/EnhancedSEO';'''
import ResponsiveContainer from '../components/ResponsiveContainer';'''
import FuturisticCard from '../components/FuturisticCard';'''
import FuturisticButton from '../components/FuturisticButton';''const AIAutomationPlatform = () => {const features = [{'
      title"Workflow Automation", ""description}, {title];"'
  const benefits = ["70% process efficiency gain", "Automated decision making"} className="text-center">""<div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>"
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">""{feature.title}"
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md text-base">""{feature.description}"
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        
        <section className="py-20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">""<ResponsiveContainer>"
            <div className="text-center mb-16">"""
              <h2 className="text-3xl md text-4xl font-bold text-white mb-4">""Why Choose AI Automation Platform?"
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">""Experience intelligent automation that transforms your business operations."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md grid-cols-2 lggrid-cols-3 gap-6">""{benefits.map((benefit, index) => ("'")
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">"""
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />"""
                  <span className="text-white font-medium">{benefit}</span>""</div>"
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        
        <section className="py-20">""<ResponsiveContainer>"
            <div className="text-center">"""
              <h2 className="text-3xl md text-4xl font-bold text-white mb-6">""Ready to Automate Your Business?"
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">""Join thousands of businesses already using AI automation to streamline their operations."
              </p>
              <FuturisticButton
                size="lg""""
                icon={<Zap className="w-6 h-6" />}"">"
                Start Your Automation Journey
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  )};"
export default AIAutomationPlatform;