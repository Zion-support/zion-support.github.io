              </div>
            ))}
          </div></div>
</section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-4xl font-bold text-white mb-4">""              Proven Results
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">""              Our AI automation solutions deliver measurable improvements in business performance.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">""            {benefits.map((benefit, index) => (
  
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">""<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">""<CheckCircle className="w-8 h-8 text-white" /></div>""<p className="text-gray-300 text-lg">{benefit}</p></div>""            ))}
          </div></div>
</section>

      {/* CTA Section */}
      <section className="py-20 px-4">""<div className="max-w-4xl mx-auto text-center">""<h2 className="text-4xl font-bold text-white mb-6">""            Ready to Automate Your Business?
          </h2>
<p className="text-xl text-gray-300 mb-8">""            Contact our automation experts to learn how our AI solutions can transform your business processes.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">""<button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">""              Get Started
            </button>
<button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">""              Contact Sales
            </button></div>
</div></section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">""<div className="max-w-4xl mx-auto text-center">""<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""            Start Automating
          </h2>
<p className="text-xl text-gray-300 mb-8">""            Discover how AI automation can transform your business operations.
          </p>
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">""<ArrowRight className="w-5 h-5 mr-2" />""            Get Started
          </button></div>
</section>
<Footer /></div>
  )
}
export default AIAutomationPage;
>>>>>>> cursor/delete-records-a75e
        </div>
      </div>
    </div>
  );
