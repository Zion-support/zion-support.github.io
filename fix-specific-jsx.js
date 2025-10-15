#!/usr/bin/env node
// Specific fixes for remaining JSX issues
const fixes  = []
  // Fix malformed className attributes
    pattern: /className="max-w-7xlmx-auto/g,";"
    replacement: 'className="max-w-7xl mx-auto'
  { pattern: /className="w-16h-16/g, replacement: 'className="w-16 h-16'
    replacement: 'className="text-4xl md:text-6xl'
    replacement: 'className="text-xl text-gray-300'
    replacement: 'className="hover:border-cyan-400/50 transition-all'
    replacement: '
    replacement: '
    replacement:"<div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">\n                <div: className ={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>\n                  {feature.icon}\n                </div>\n                <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>\n                <p: className ="text-gray-300">{feature.description}</p>\n              </div>'
    replacement:"<div: key ={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">\n                <div: className ="flex items-center mb-4">\n                  {useCase.icon}\n                  <h3: className ="text-xl font-semibold text-white ml-3">{useCase.title}</h3>\n                </div>\n                <p: className ="text-gray-300 mb-4">{useCase.description}</p>\n                <ul: className ="space-y-2">\n                  {useCase.benefits.map((benefit, idx) => (\n                    <li: key ={idx} className="flex items-center text-sm text-gray-400">\n                      <CheckCircle className="w-5 h-5 ml-2" />\n                      {benefit}\n                    </li>\n                  ))}\n                </ul>\n              </div>'
    replacement:"<h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">$1</h2>'
    replacement:"<Layout>\n      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">'