'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
const PagePage: React.FC = () => {

  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']},
    {icon: BarChart,
      title: 'Feature 2', 
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']},
    {icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <>
<div className="max-w-7xl mx-auto"
            <div className="text-center"
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"
                Page Page
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Key Features
              </h2>
              <p  >
                  $2
                </p>
            <div $1>
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  <div className="flex items-center mb-4"
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"
                    <h3 className="text-xl font-semibold text-gray-900"
                  </div>
                  <p {feature.benefits.map((benefit, idx) => (>
                  $2
                </p>
                      <li {benefit}>
                  $2
                </li>
                      </li>
                    ))}
                  </ul>
              ))}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
  );
export default PagePage
    </Footer>