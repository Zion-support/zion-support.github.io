import React from 'react',
const ContentPromotionBanner: React.FC = React.memo(() => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium">
          🚀 <strong>New:</strong> AI-Powered Business Intelligence Dashboard - 
          <a href="/business-intelligence" className="underline hover:no-underline ml-1">
            Learn More →
          </a>
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
export default ContentPromotionBanner;