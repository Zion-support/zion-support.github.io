
import { Header } from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import ScrollToTop from "./src/components/ScrollToTop";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ScrollToTop />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading the future of technology with AI, blockchain, and innovative solutions
          </p>
          {/* Promo Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/blog/latest"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-amber-400 hover:to-orange-500 transition-colors shadow-md hover:shadow-lg"
            >
              Read Latest Insights
            </a>
            <div className="text-sm text-gray-700 bg-white/70 border border-orange-200 px-4 py-2 rounded-lg">
              New: 2025 AI Trends Report and Case Studies
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions for your business needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p className="text-gray-600">
              Secure, decentralized solutions powered by blockchain technology.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver 
            solutions that drive real business value. Our team of experts is dedicated 
            to helping you succeed in the digital age.
          </p>
        </div>

        {/* Latest Content Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Latest Content</h3>
            <a href="/blog" className="text-blue-600 hover:underline">View all</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/blog/ai-trends-2025" className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm text-orange-600 font-medium mb-2">Report</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700">AI Trends 2025: Autonomy Everywhere</h4>
              <p className="text-gray-600">A deep dive into autonomous systems, agentic workflows, and enterprise adoption.</p>
            </a>
            <a href="/blog/case-study-logistics-optimization" className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm text-green-700 font-medium mb-2">Case Study</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700">Logistics Optimization: 45% Cost Reduction</h4>
              <p className="text-gray-600">How AI route planning and demand forecasting transformed a global supply chain.</p>
            </a>
            <a href="/blog/quantum-readiness-checklist" className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm text-purple-700 font-medium mb-2">Guide</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700">Quantum Readiness Checklist</h4>
              <p className="text-gray-600">A practical roadmap for leaders preparing for quantum-enhanced workloads.</p>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
