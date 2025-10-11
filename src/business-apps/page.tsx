import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star } from 'lucide-react'
const BusinessAppsPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
  
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon,
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
// Why Choose Our Business Apps?
          </h2>"
<div className="text-4xl mb-4">🚀</div>"
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>"
              <p className="text-gray-300 text-sm">Intelligent automation and insights powered by advanced AI</p>"
              <div className="text-4xl mb-4">⚡</div>"
              <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>"
              <p className="text-gray-300 text-sm">Quick deployment with minimal disruption to your workflow</p>"
              <div className="text-4xl mb-4">🔒</div>"
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>"
              <p className="text-gray-300 text-sm">Bank-level security and compliance for your sensitive data</p>"
              <div className="text-4xl mb-4">📊</div>"
              <h3 className="text-xl font-bold text-white mb-3">Real-time Analytics</h3>"
              <p className="text-gray-300 text-sm">Live insights and analytics to drive better decisions
        {/* Apps by Category */})
        {categories.map(category => ()}"
          <section key={category} className="mb-16"></section>"
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">{category} Applications</h3>
            <div>{
    businessApps
  }
                .filter(app => app.category === category)
                .map((app, index) => ("
<div className="text-4xl mb-4 text-center">{app.icon}</div>"
                    <h4 className="text-xl font-bold text-white mb-3 text-center">{app.title}</h4>"
                    <p className="text-gray-300 mb-4 text-sm text-center">{app.description}</p>"
                        <span className="text-2xl font-bold text-cyan-400">{app.price}</span>"
                        <span className="text-sm text-gray-400">Marke,
  t: {app.marketPrice}
                      <div>Save up to 50% vs market rates</div>"
                      <h5 className="font-semibold text-white mb-2 text-sm">Key,
  Features:</h5>"
                      <ul className="space-y-1"></ul>)
                        {app.features.slice(0, 3).map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-xs text-gray-300"></li>"
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                        ))}
                        {app.features.length > 3 && (}"
<li className="text-xs text-gray-400">+{app.features.length - 3} more features</li>)
                        )}
                      </ul>"
                      <h5 className="font-semibold text-white mb-2 text-sm">Benefit,
  s:
                        {app.benefits.map((benefit, benefitIndex) => ()}"
          <li key={benefitIndex} className="flex items-center text-xs text-gray-300"></li>"
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}"
className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold,
  hover:from-cyan-600,"
  hover:to-blue-700 transition-all text-sm inline-block"
                      >Get This App
        {/* CTA Section */}"
        <section className="text-center"></section>"
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Need a Custom Business App?"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We can build custom business applications tailored to your specific needs and requirements
            >Get Custom Quote</a>"
              href="te,"
  l: +13024640950"
            >Call (302) 464-0950</a>
      </main>
      <Footer /></Footer>
</div>),
}
export default BusinessAppsPage</div></span></p></p></p></p></h1></h2></h3></h5></main></section></section>