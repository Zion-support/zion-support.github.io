import React from "react"

interface ContentPromotionBannerProps {
  title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  variant?: "primary" | "secondary" | "success"
  className?: string
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title = "Special Offer",
  description = "Don't miss out on our limited-time offer!",
  ctaText = "Learn More",
  ctaLink = "#",
  variant = "primary",
  className = ""
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      case "secondary":
        return "bg-gradient-to-r from-gray-600 to-gray-800 text-white"
      case "success":
        return "bg-gradient-to-r from-green-600 to-green-800 text-white"
      default:
        return "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div className={`p-6 ${getVariantStyles()}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {title}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {description}
          </p>
          <a
            href={ctaLink}
            className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContentPromotionBanner