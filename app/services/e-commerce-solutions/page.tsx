
export const metadata = {
  title: "E-commerce Solutions | Zion Tech Group",
  description: "Build powerful e-commerce platforms with custom solutions, payment integration, inventory management, and seamless user experiences.",
  keywords: "e-commerce, online store, payment integration, inventory management, e-commerce platform"
};

export default function ECommerceSolutionsPage() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          E-commerce Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build powerful e-commerce platforms with custom solutions, payment integration, inventory management, and seamless user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🛒</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Custom Platforms
          </h3>
          <p className="text-gray-600">
            Tailored e-commerce platforms designed to meet your specific business requirements.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💳</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Payment Integration
          </h3>
          <p className="text-gray-600">
            Secure payment processing with multiple payment gateway integrations.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📦</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Inventory Management
          </h3>
          <p className="text-gray-600">
            Advanced inventory tracking and management systems for optimal stock control.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build Your E-commerce Platform?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your e-commerce needs and create a powerful online store.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );

}