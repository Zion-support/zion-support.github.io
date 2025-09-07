import Link from "next/link";
export const metadata = {
  title: "IoT Solutions | Zion Tech Group",
  description: "Connect and manage devices with comprehensive IoT solutions, including sensor networks, data collection, and real-time monitoring systems.",
  keywords: "iot solutions, internet of things, sensor networks, device management, iot analytics"
};
export default function IoTSolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IoT Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect and manage devices with comprehensive IoT solutions, including sensor networks, data collection, and real-time monitoring systems.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🌐</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Device Connectivity
          </h3>
          <p className="text-gray-600">
            Seamless connectivity solutions for IoT devices with secure communication protocols.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Sensor Networks
          </h3>
          <p className="text-gray-600">
            Advanced sensor network solutions for data collection and environmental monitoring.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Real-time Monitoring
          </h3>
          <p className="text-gray-600">
            Real-time monitoring dashboards and alerting systems for IoT device management.
          </p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Connect Your Devices?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your IoT needs and implement comprehensive device management solutions.
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
