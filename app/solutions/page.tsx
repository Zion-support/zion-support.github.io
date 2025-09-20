import Link from "next/link",

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Professional solutions for your business needs.",
  keywords: "solutions, business, technology"
},

export default function SolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional solutions for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Business Solutions
          </h3>
          <p className="text-gray-600">
            Comprehensive business solutions tailored to your specific needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Custom Solutions
          </h3>
          <p className="text-gray-600">
            Create custom solutions tailored to your specific business needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Technology Solutions
          </h3>
          <p className="text-gray-600">
            Cutting-edge technology solutions to drive your business forward.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}