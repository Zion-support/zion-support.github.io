import React from 'react',
import Navigation from '../components/Navigation',
import Footer from '../components/Footer',
const ProductivityPage: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main role="main" role="main" className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Productivity</h1>
          <p className="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
            This page is under construction. Please check back soon for updates.
          </p>
          <a;
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us;
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
)
// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export default ProductivityPage;