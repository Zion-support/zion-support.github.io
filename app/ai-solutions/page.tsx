import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap } from 'lucide-react'




const Ai Solutions Page: React.FC = () => {
  return (
    <>
      <div>
      <Helmet>
        <title>A I Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced A I solutions for your business needs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        
        <div className="container mx-auto px-4 py-16">
        
          <div className="text-center mb-16">
        
            <h1>
          
              A I Solutions
            </h1>
            <p>
          
              Transform your business with cutting-edge artificial intelligence
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2 gap-8">
        
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
        
              <Brain className="w-1 2h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xl font-semiboldtext-whitemb-3">Machine Learning</h3>
              <p>
          
                Custom M L models tailored to your specific business requirements.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/2 0">
        
              <Zap className="w-1 2h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xl font-semiboldtext-whitemb-3">Automation</h3>
              <p>
          
                Intelligent automation solutions to streamline your operations.
              </p>
            </div>
        </div>
    </>
  )
  }
  )
export default Ai;; Solutions Page
