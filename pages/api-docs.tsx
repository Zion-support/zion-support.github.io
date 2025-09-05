import { motion } from 'framer-motion'
import Head from 'next/head'
import Head from 'next/head'
import { Code, ArrowRight, Book, Zap, Shield, CheckCircle } from 'lucide-react'
import Layout from '../components/Layout'
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight, Copy } from 'lucide-react'

const apiEndpoints = [{
    method: 'GET', path: '/api/v1/health', description: 'Check API health status', response: {
      status: 'ok', timestamp: '2024-01-01T00: 00:00Z' }}, ;
  {
    method: 'POST',  }]

export default function APIDocs() {
  return(<>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group's services. Learn how to integrate our APIs into your applications."  />
        <meta name="keywords" content="API documentation, RESTful API, developer tools, integration"  />
      </Head>
      <Layout>
        {/* Hero Section */ }
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              animate={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h1 className="text-5xl md: text-6xl font-bold mb-6 text-white">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Complete guide to integrating with our APIs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{scale: 1.05 }}
                  whileTap={{scale: 0.95 }}
                  className="bg-blue-600 hover: bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{scale: 1.05 }}
                  whileTap={{scale: 0.95 }}
                  className="border-2 border-white text-white hover: bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        { /* API Endpoints Section */ }
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md: text-5xl font-bold mb-6">API Endpoints</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our available API endpoints and their responses.
              </p>
            </motion.div>
            <div className="space-y-8">
              { apiEndpoints.map((endpoint, index) => (;
                <motion.div;
                  key={index }
                  initial={{opacity: 0, y: 30 }}
                  whileInView={{opacity: 1, y: 0 }}
                  transition={{duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={ `px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :;
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :;
                        'bg-gray-100 text-gray-800' }`}>
                        { endpoint.method }
                      </span>
                      <code className="text-lg font-mono">{ endpoint.path }</code>
                    </div>
                    <button className="p-2 hover: bg-gray-100 rounded">
                      <Copy size={ 20 }  />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{ endpoint.description }</p>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      { JSON.stringify(endpoint.response, null, 2) }
                    </pre>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    endpoint: '/api/auth/login',
    description: 'Authenticate users and get access tokens',
    parameters: [{ name: 'email', type: 'string', required: true, description: 'User email address' }, ;
      { name: 'password', type: 'string', required: true, description: 'User password' }],;
    response: { success: { token: 'string', user: 'object' },;
      error: { message: 'string', code: 'number' }}},;
  {
    name: 'Get User Profile', method: 'GET', endpoint: '/api/user/profile', description: 'Retrieve user profile information', parameters: [{ name: 'id', type: 'string', required: true, description: 'User ID' }],;
    response: { success: { user: 'object' },;
      error: { message: 'string', code: 'number' }}},;
  {
    name: 'Create Project', method: 'POST', endpoint: '/api/projects', description: 'Create a new project', parameters: [{ name: 'name', type: 'string', required: true, description: 'Project name' }, ;
      { name: 'description', type: 'string', required: false, description: 'Project description' }],;
    response: { success: { project: 'object' },;
      error: { message: 'string', code: 'number' }}}]

export default function ApiDocs() {
  return(<Layout>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations."  />
      </Head>
      <main>
        {/* Hero Section */ }
        <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md: text-6xl font-bold mb-6">
                API Documentation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive API documentation for integrating with Zion Tech Group services
              </p>
            </div>
          </div>
        </section>
        { /* API Endpoints Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-12 text-center">
                Available Endpoints
              </h2>
              <div className="space-y-8">
                { endpoints.map((endpoint, index) => (;
                  <div key={index } className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{ endpoint.name }</h3>
                        <p className="text-gray-600">{ endpoint.description }</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={ `px-3 py-1 rounded-full text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :;
                          endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :;
                          'bg-gray-100 text-gray-800' }`}>
                          { endpoint.method }
                        </span>
                        <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                          { endpoint.endpoint }
                        </code>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h4>
                        <div className="space-y-3">
                          { endpoint.parameters.map((param, paramIndex) => (;
                            <div key={paramIndex } className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <span className="font-medium text-gray-900">{ param.name }</span>
                                <span className="text-gray-500 ml-2">({ param.type })</span>
                                { param.required && <span className="text-red-500 ml-2">*</span> }
                              </div>
                              <p className="text-sm text-gray-600">{ param.description }</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Response</h4>
                        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                          <pre>{ JSON.stringify(endpoint.response, null, 2) }</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div;
              initial={{opacity: 0, y: 30 }}
              whileInView={{opacity: 1, y: 0 }}
              transition={{duration: 0.8 }}
            >
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Get your API key and start integrating our services into your applications today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{scale: 1.05 }}
                  whileTap={{scale: 0.95 }}
                  className="bg-white text-blue-600 hover: bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{scale: 1.05 }}
                  whileTap={{scale: 0.95 }}
                  className="border-2 border-white text-white hover: bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
      </main>
    </Layout>
  )
}
)