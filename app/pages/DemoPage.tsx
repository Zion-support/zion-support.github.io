import React from 'react'
import { Helmet } from 'react-helmet-async'
const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our solutions with live demos" />
        <meta name="keywords" content="demo, live demo, solutions showcase" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16">
          <div className="text-center">
            <h1 className="text-4xlfont-boldtext-whitemb-8">Demo</h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience our solutions with live demos
            </p>
            <div className="text-gray-400">
              <p>Demos coming soon...</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DemoPage