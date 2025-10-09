'use client';
import React from 'react';
import {Receipt, TrendingUp, Shield, Zap, Brain, Target, CheckCircle, Star, Phone,  Receipt,  TrendingUp,  Zap,  Shield from 'lucide-react';
import { Link } from 'react-router-dom';
const ExpenseTrackerPage: React.FC = () => {
  const features = [
    {
  // TODO: Add content
 };
  icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.',
      benefit: 'Save 8+ hours per month'
     },
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.',
      benefit: 'Reduce expenses by 25%',

      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated expense approval workflows, reimbursement processes, and compliance checks.',
      benefit: 'Process expenses 5x faster',

      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with tax regulations and company policies with automated checks and audit trails.',
      benefit: '100% compliance guarantee'
     }
  ];
  const pricingPlans = [
      name: 'Business',
      price: '$29',
      description: 'Ideal for small businesses',
      name: 'Sarah Williams',
      company: 'Marketing Agency',
      role: 'Finance Manager',
      content: 'Our expense processing time dropped from 2 days to 2 hours. The automated workflows are game-changing.',
      name: 'David Chen',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The compliance features ensure we never miss a tax deduction. Our accountant loves the detailed reports.',
  return (
    
          
          
          
          
          
          
          
          <div></div>Coming Soon</div>
  )
    
          </div></div>
      {/* Hero Section */}
      </div></section>
        </section></div>
          </div></div>
            </div>
          </div>
          </div>
// AI Expense Tracker
          
          
          
          
          
          
          
          
          
          </h1>
          <p className="text-xl md: text-2xl text-cyan-400 mb-8 font-medium">
// Smart Financial Management
          
          
          
          
          
          
          
          
          
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
Transform your expense management with AI-powered receipt scanning, automated categorization,
            and intelligent financial insights. Save time, reduce errors, and gain complete control
            over your business finances.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
// >
              
          
          
          
          
          
          
          
          
          <Phone className="w-5 h-5 mr-2" />,
 Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
Start Free Trial
            </Link>
        {/* Key Benefits */ }
        <div className="grid grid-cols-1 md: grid-cols-4 gap-8 mb-16"></div>
          <div className="text-center"></div>
            <div className="text-4xl font-bold text-cyan-400 mb-2"></div>8+</div>
            </div></div>Hours Saved</div>
            <div className="text-gray-300 text-sm"></div>Per month on expense management</div>
            </div></div>99%</div>
            <div className="text-white font-semibold mb-2"></div>Accuracy</div>
            </div></div>In AI categorization</div>
            <div className="text-4xl font-bold text-green-400 mb-2"></div>25%</div>
            </div></div>Cost Reduction</div>
            <div className="text-gray-300 text-sm"></div>Through better expense control</div>
            </div></div>5x</div>
            <div className="text-white font-semibold mb-2"></div>Faster Processing</div>
            </div></div>With automated workflows</div>
        {/* Features Section */ }
        <section className="mb-16"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center"></h2>
// Powerful Expense Management Features
          
          
          
          
          
          
          
          
          
          </h2>
          </h2></div>
            {features.map((feature, index) => ()
              
          </div></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title;;}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm"></div>{feature.benefit}</div>
            ))}
        </div>
        {/* Integrations Section */}
Integrates with Your Tools
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6"></div>
            {integrations.map((integration, index) => ()
              
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover: border-cyan-400/40 transition-all duration-300"></div>
                <div className="text-4xl mb-3"></div>{integration.icon }</div>
                </div>{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
{/* Pricing Section */}
            Simple, Transparent Pricing
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => ()
              
          </div></div>
                {plan.popular && ()
                  
          
          
          
          
          
          
          
          
          </div></div>
Most Popular
                )}
                </div>{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6"></div>
                  </div>{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => ()
                    
          <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  Get Started
                </button>
        {/* Testimonials */ }
            What Our Customers Say
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => ()
              
          </div></div>
                </div></div>
                  {[...Array(testimonial.rating)].map((_, i) => ()
                    
          </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white"></div>{testimonial.name}</div>
                  </div></div>{testimonial.role}</div>
                  <div className="text-gray-400 text-sm"></div>{testimonial.company}</div>
{/* CTA Section */}
        </div></section>
          </section></h2>
            Ready to Master Your Expenses?
          </h2>
            Join thousands of businesses using AI Expense Tracker to streamline financial
            management and gain better control over their spending.
  );
;;};
export default ExpenseTrackerPage;