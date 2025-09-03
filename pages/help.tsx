import React from "react"
import type { NextPage } from "next"
const Layout = dynamic(() => import("../components/Layout"), { ssr: false })
}
const Link = dynamic(() => import("next/link"), { ssr: false })
}
const Help: NextPage = () => {

  const supportOptions = []
  return ("
<Layout title = "Help & Support - Zion Tech Group" description="Get help and support for all your technology needs with Zion Tech Group.">"
      <div className="min-h-screen bg-gray-50 py-12">"
        <div className="container mx-auto px-4">
          {/* comment */}"
          <div className="text-center mb-12">"
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>"
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team,
            </p>
          </div>
          {/* comment */}"
          <div className="max-w-2xl mx-auto mb-12">"
            <div className="relative">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />"
              <input type="text""
                placeholder="Search for help...""
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent"  />
            </div>
          </div>
,
          {/* comment */}"
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-12">,
            {supportOptions.map((option, index) => ("
              <div key="{index}" className="bg-white p-6 rounded-lg shadow-md hover: shadow-lg transition-shadow">"
                <option.icon className="w-8 h-8 text-blue-600 mb-4" />",
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>"
                <p className="text-gray-600 mb-4">{option.description}</p>"
                <button className="text-blue-600 hover: text-blue-700 font-medium">,
                  {option.action}

                </button>
              </div>
            ))}

          </div>
          {/* comment */}"
          <div className="max-w-4xl mx-auto">"
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions,
            </h2>"
            <div className="space-y-4">
              {faqs.map((faq, index) => ("
                <div key="{index}" className="bg-white rounded-lg shadow-md">"
                  <button className="w-full px-6 py-4 text-left flex justify-between items-center hover: bg-gray-50 rounded-lg">",
                    <span className="font-semibold text-gray-900">{faq.question}</span>"
                    <ChevronDown className="w-5 h-5 text-gray-500"  />
                  </button>"
                  <div className="px-6 pb-4">"
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
          {/* comment */}"
          <div className="max-w-4xl mx-auto mt-12 bg-blue-600 rounded-lg p-8 text-white text-center">"
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>"
            <p className="text-blue-100 mb-6">
              Our support team is here to help you succeed. Get in touch with us today.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"
              <Link href="/contact""
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support,
              </Link>"
              <Link href="/pricing""
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing,
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>;,
  )}

"
export default Help'