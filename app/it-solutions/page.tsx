import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Server, Cloud } from 'lucide-react'
const ItSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive IT services to power your digital transformation
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2gap-8">
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <Server className="w-12h-12text-blue-400mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Infrastructure</h3>
              <p className="text-gray-300">
                Robust IT infrastructure solutions for scalable growth.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <Cloud className="w-12h-12text-blue-400mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Cloud Services</h3>
              <p className="text-gray-300">
                Secure and scalable cloud computing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ItSolutionsPage