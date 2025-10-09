import React from 'react',
const HomePage: React.FC = React.memo(() => {
  return (<div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Zion Tech Group - Advanced AI and IT Solutions;
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
          Transform your business with our cutting-edge technology.
        </p>
      </div>
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
export default HomePage;