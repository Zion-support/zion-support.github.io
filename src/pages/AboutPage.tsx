import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Zion Tech Group is a leading technology company specializing in innovative solutions 
              that transform businesses and drive digital transformation. With years of experience 
              in the industry, we have built a reputation for delivering exceptional results.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that enhance efficiency, 
              improve productivity, and drive sustainable growth in the digital age.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the global leader in technology innovation, setting new standards for excellence 
              and creating a better future through technology.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation and creativity in everything we do</li>
              <li>Commitment to excellence and quality</li>
              <li>Integrity and transparency in all relationships</li>
              <li>Continuous learning and improvement</li>
              <li>Customer-centric approach to solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage