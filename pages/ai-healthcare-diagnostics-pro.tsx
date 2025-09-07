import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
const AIHealthcareDiagnosticsPro: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare delivery with the world's most advanced AI diagnostic platform" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Healthcare Diagnostics Pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform healthcare delivery with the world's most advanced AI diagnostic platform. 
            Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
            <div className="text-gray-600">Diagnostic Accuracy</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
            <div className="text-gray-600">Faster Diagnosis</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-600">Continuous Monitoring</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Radiology</h3>
            <p className="text-gray-600 mb-4">
              Advanced AI-powered radiology analysis for X-rays, CT scans, and MRIs.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• X-ray analysis</li>
              <li>• CT scan interpretation</li>
              <li>• MRI diagnostics</li>
              <li>• Ultrasound imaging</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pathology</h3>
            <p className="text-gray-600 mb-4">
              AI-powered pathology analysis for tissue samples and cellular structures.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Tissue analysis</li>
              <li>• Cellular diagnostics</li>
              <li>• Cancer detection</li>
              <li>• Disease classification</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Cardiology</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive cardiac diagnostics and monitoring with AI assistance.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• ECG analysis</li>
              <li>• Heart rhythm monitoring</li>
              <li>• Cardiac imaging</li>
              <li>• Risk assessment</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Transform Your Practice</h2>
          <p className="text-lg text-gray-700 mb-6">
            From radiology to pathology, our AI platform adapts to your specific medical specialty and workflow requirements.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Schedule Demo
            </a>
            <a href="/about" className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50">
              Contact Sales
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default AIHealthcareDiagnosticsPro