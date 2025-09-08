      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions, IT services, cloud infrastructure, cybersecurity, data analytics, and digital transformation services. Our team specializes in cutting-edge technologies to help businesses modernize and scale."
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Still Have Questions?
            </h3>
            <p className="text-zion-slate-light">
              We offer comprehensive AI solutions, cybersecurity services, cloud infrastructure, 
              data analytics, blockchain development, and innovative technology consulting.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              How can I get started with your services?
            </h3>
            <p className="text-zion-slate-light">
              Contact us through our website or call us directly. We'll schedule a consultation 
              to understand your needs and provide a customized solution.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              What is your typical project timeline?
            </h3>
            <p className="text-zion-slate-light">
              Project timelines vary based on complexity. Simple projects may take 2-4 weeks, 
              while complex enterprise solutions can take 3-6 months or more.
            </p>
          </div>
