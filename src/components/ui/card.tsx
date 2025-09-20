import React from "react"

const Card: React.FC<{ className?: string, children: React.ReactNode }> = ({ className = "", children }) : any => {
  return (
    <div className={`p-6 bg-white dark: bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  )
}

export default Card,<//div><///div>