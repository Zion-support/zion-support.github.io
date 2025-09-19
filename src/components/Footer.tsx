import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
          <p className="text-gray-300 mb-4">Revolutionary Technology Solutions</p>
          <p className="text-sm text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer