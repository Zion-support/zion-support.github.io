import React, { Suspense } from 'react'; import {Helmet, Brain, Zap }from 'react-helmet-async'; const Ai Solutions Page: React.FC = ( )=> {return (
    <> 
      <Helmet> <title>AISolutions - Zion Tech Group</title> <meta name="description"content="Advanced AI solutions for your business needs" /> 
      </Helmet> 
      <div className="min-h-screen bg-gradient-to-br from-slate-900-via-purple-900-to-slate-900"> 
        <div className="container mx-auto px 4 py-16"> 
          <div className="text-center"> mb 126"> <h1 className="text 5 xlfont-boldtext-whitemb-6"> AISolutions </h1> <p className="text xl text gray-300 mb-8"> Transformyourbusiness with cutting-edgeartificialintelligence </p> 
          </div> 
            <div className="grid md:grid cols 2-gap-8"> <div className="bg white/10 backdrop-blur-smrounded-lgp-6-borderborder-white/2 0"> <Brainclass Nam e="w 1-h-1 text-blue-4-mb-4"/> <h3 className="text xlfont semiboldtext-whitemb-3">Machine Learning</h3> <p className="text gray 30"> Custom ML modelstailoredto yourspecificbusiness requirements. </p> 
          </div> <div className="bg white/10 backdrop-blur-smrounded-lgp-6-borderborder-white/2 0"> <Zapclass Nam e="w 1-h-1 text-blue-4-mb-4"/> <h3 className="text xlfont semiboldtext-whitemb-3">Automation</h3> <p className="text gray 30"> Intelligentautomationsolutions tostreamlineyour operations. </p> 
          
        </div>
      </div>
    </div> 
          </div> 
    </>
  )}; export default Ai Solutions Page;