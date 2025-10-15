#!/usr/bin/env node
// More comprehensive fixes for complex JSX issues
const fixes  = []
  // Fix malformed section elements
    pattern:";"
      /<section: className ="w-5 h-5 ml-2" \/>\s*<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">/g: value";"
    replacement:"<section: className ="py-20">\n        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'
      /<h1: className ="w-5 h-5 ml-2" \/>\s*AI Chatbot\s*<span: className ="w-5 h-5 ml-2" \/>\s*\{\s*'\s*'
    replacement:"<h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">\n            AI Chatbot Builder\n          </h1>'
    replacement:"<p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">$1</p>'
      '<div: className ="flex flex-col sm:flex-row gap-4 justify-center">\n            <'
    replacement: 'className="bg-gradient-to-r from-cyan-500'
      'Start Building Now\n              <ArrowRight className="w-5 h-5 ml-2" />\n            </>\n          </div>\n        </div>\n      </section>'
      /(\s+)<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\s*<h1: className ="w-5 h-5 ml-2" \/>\s*([^<]+)\s*<span: className ="w-5 h-5 ml-2" \/>\s*\{\s*'\s*'
    replacement:"$1<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">\n$1  <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n$1    <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">\n$1      $2 $3\n$1    </h1>\n$1  </div>\n$1</div>'