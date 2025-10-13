'use client';'''
import React from 'react';'''
import { Helmet } from 'react-helmet-async';'''
import {ArrowRight, CheckCircle} from 'lucide-react';''const AiDataVisualizationPage: React.FC = () => {const features = [{icon, Zap}, {icon];'
  const stats = [{label, 'Projects Completed'}, ''{label];'
  return (<>
      <Helmet>
        <title>Ai Data Visualization | Zion Tech Group</title>
        <meta name="description" content="Advanced ai data visualization solutions powered by artificial intelligence to transform your business operations." />"""""
        <meta name="keywords" content="AIAiDataVisualization) => ("""""'
              <div key={index} className="bg-gray-800 p-6 rounded-lg">"""""
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />"""""
                <h3 className="text-xl font-semibold text-white mb-2">"""
                  {feature.title}""""'
                </h3>"""""
                <p className="text-gray-300 mb-4">"""
                  {feature.description};""""
                </p>"""""
                <ul className="space-y-2">""""
                  {feature.benefits.map((benefit, idx) => ("""""
                    <li key={idx} className="flex items-center text-gray-300">"""""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />""{benefit};"
                    </li>
                  ))}</ul>"
              </div>
            ))};
          </div>
        </div>
      </section>""""
      ;"""""
      <section className="py-20 px-4 sm px-6 lgpx-8 bg-gray-800">"""""'
        <div className="max-w-7xl mx-auto">"""""
          <div className="grid grid-cols-2 md grid-cols-4 gap-8">,""""
            {stats.map((stat, index) => ("""""
              <div key={index} className="text-center">"""""
                <div className="text-4xl font-bold text-purple-400 mb-2">"""
                  {stat.value};""""
                </div>"""""
                <div className="text-gray-300">""{stat.label};"
                </div>
              </div>
            ))}</div>"
        </div>
      </section>""""
      ;"""""
      <section className="py-20 px-4 sm px-6 lg:px-8">"""""
        <div className="max-w-4xl mx-auto text-center">"""""
          <h2 className="text-3xl md text-4xl font-bold text-white mb-4">,"""
            Ready to Transform Your Business?""""
          </h2>"""""
          <p className="text-xl text-gray-300 mb-8">,"""
            Get started with our AiDataVisualization solution today and see the difference AI can make,""""
          </p>"""""
          <button className="bg-purple-600 hover bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">,""Start Your Journey"
          </button>
        </div>
      </section>
    </>)};"
export default AiDataVisualizationPage;""""
"""""