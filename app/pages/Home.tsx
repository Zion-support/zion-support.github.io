import React from 'react',
const Home: React.FC = React.memo(() => {
  return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6">
          Zion Tech Group;
        </h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
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
export default Home;