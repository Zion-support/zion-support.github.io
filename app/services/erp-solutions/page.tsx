
export const metadata = {
  title: "ERP Solutions | Zion Tech Group",
  description: "Streamline your business operations with comprehensive ERP solutions, including financial management, HR systems, and supply chain optimization.",
  keywords: "erp solutions, enterprise resource planning, business management, financial systems, hr management"
};

export default function ERPSolutionsPage() {

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ERP Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your business operations with comprehensive ERP solutions, including financial management, HR systems, and supply chain optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Financial Management
          </h3>
          <p className="text-gray-600">
            Comprehensive financial management systems for accounting, budgeting, and reporting.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">👥</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            HR Management
          </h3>
          <p className="text-gray-600">
            Complete human resources management including payroll, benefits, and employee records.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Supply Chain
          </h3>
          <p className="text-gray-600">
            Optimize your supply chain with advanced planning and inventory management tools.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Streamline Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your ERP needs and implement a comprehensive business management solution.
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