import React, { Suspense } from 'react'; import {Helmet, Server, Cloud }from 'react-helmet-async'; const It Solutions Page: React.FC = ( )=> {return (
    <> 
      <Helmet> <title>ITSolutions - Zion Tech Group</title> <meta name="description"content="Comprehensive IT solutions for modern businesses" /> 
      </Helmet> 
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> 
        <div className="container mx-auto px 4 py-1"> 
          <div className="text-center"> mb 12"> <h1 className="text 5 xlfont-bold text-white mb-6"> ITSolutions </h1> <p className="text xltext gray-3 mb-8"> Comprehensive IT servicestopower yourdigitaltransformation </p> 
          </div> 
            <div className="grid md:grid cols 2 gap-8"> <div className="bg white/10 backdrop blur-sm rounded-lg p-6 border border-white/2 0"> <Serverclass Nam e="w 12 h-1 text-blue-4 mb-4"/> <h3 className="text xlfont semibold text-white mb-3">Infrastructure</h3> <p className="text gray 30"> Robust IT infrastructuresolutionsfor scalable growth. </p> 
          </div> <div className="bg white/10 backdrop blur-sm rounded-lg p-6 border border-white/2 0"> <Cloudclass Nam e="w 12 h-1 text-blue-4 mb-4"/> <h3 className="text xlfont semibold text-white mb-3">Cloud Services</h3> <p className="text gray 30"> Secureandscalable cloudcomputingsolutions. </p> 
          
        </div>
      </div>
    </div> 
          </div> 
    </>
  )}; export default It Solutions Page;
=======
import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Server, Cloud } from 'lucide-react'




const It Solutions Page: React.FC = () => {
  return (
    <>
      <div>
      <Helmet>
        <title>I T Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive I T solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        <div className="containermx-auto px-4 py-1 6">
        
          <div className="text-center mb-1 6">
        
            <h1>
          
              I T Solutions
            </h1>
            <p>
          
              Comprehensive I T services to power your digital transformation
            </p>
          </div>
          
          <div className="gridmd:grid-cols-2 gap-8">
        
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/2 0">
        
              <Server className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure</h3>
              <p>
          
                Robust I T infrastructure solutions for scalable growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/2 0">
        
              <Cloud className="w-12 h-1 2 text-blue-4 0 0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
              <p>
          
                Secure and scalable cloud computing solutions.
              </p>
            </div>
        </div>
    </>
  )
  }
  )
export default It;; Solutions Page
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d8c1
