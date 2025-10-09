import React from 'react',
import Navigation from '../components/Navigation',
import Footer from '../components/Footer',
const GdprPage: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main role="main" role="main" className="relative z-10">
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GDPR Compliance;
            </h1>
            <p className="text-xl text-gray-500 mb-8">
              Our commitment to data protection and privacy;
            </p>
          </div>
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
export default GdprPage;