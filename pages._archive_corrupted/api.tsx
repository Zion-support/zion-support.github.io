

<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<meta name=\"description\" content=\"Comprehensive API documentation for Zion Tech Group services and integrations.\" />
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
      </Head>
      <div className=\"min-h-screen bg-gray-50\">
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<meta name=\"description\" content=\"Comprehensive API documentation for Zion Tech Group services and integrations.\" />;
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />;
      </Head>;
      <div className=\"min-h-screen bg-gray-50\">;
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const "API": NextPage = () => {
  const apiEndpoints = [{
      name: 'Services API',
      "endpoint": '/api/services',
      "method": 'GET',
      "description": 'Retrieve all available services',
      "response": 'Array of services'
    },
    {
      "name": 'Contact API',
      "endpoint": '/api/contact',
      "method": 'POST',
      "description": 'Submit contact form',
      "response": 'Success message'
    },
    {
      "name": 'Quote API',
      "endpoint": '/api/quote',
      "method": 'POST',
      "description": 'Request a quote',
      "response": 'Quote details'
    }
  ];
  return (


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Header */}
        <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16\">
          <div className=\"container mx-auto px-4 text-center\">
            <h1 className=\"text-4xl \"md\": text-5xl font-bold mb-4\">
              API <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400\">Documentation</span>
            </h1>
            <p className=\"text-xl text-gray-200 max-w-2xl mx-auto\">
              Comprehensive API documentation for integrating with Zion Tech Group services
            </p>
          </div>
        </section>

<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className=\"py-16 max-w-6xl mx-auto px-6\">
          <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-12\">Available Endpoints</h2>
          <div className=\"space-y-6\">
        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Endpoints</h2>
          <div className="space-y-6">

<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className=\"bg-white border border-gray-200 rounded-lg p-6 shadow-sm\">
                <div className=\"flex items-center justify-between mb-4\">
                  <h3 className=\"text-xl font-semibold text-gray-900\">{endpoint.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint.method === \'GET\' 
    <>;
      <Head>;
        <title>API Documentation - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations."  />;
      </Head>;
      <div className="min-h-screen bg-white">;
        <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center">;
          <div className="max-w-5xl mx-auto px-6">;
            <h1 className="text-4xl "md": tex t-6xl font-bold text-white mb-4">API Documentation</h1>;
            <p className="text-blue-100 text-xl">;
              Integrate with our services using our comprehensive REST API;
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        {/* Header */}
        <div className=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16\">;
          <div className=\"container mx-auto px-4 text-center\">;
            <h1 className=\"text-4xl \"md\": text-5xl font-bold mb-4\">;
              API <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400\">Documentation</span>;
            </h1>;
            <p className=\"text-xl text-gray-200 max-w-2xl mx-auto\">;
              Comprehensive API documentation for integrating with Zion Tech Group services;
            </p>;
          </div>;
        </section>;
        <section className=\"py-16 max-w-6xl mx-auto px-6\">;
          <h2 className=\"text-3xl font-bold text-gray-900 text-center mb-12\">Available Endpoints</h2>;
          <div className=\"space-y-6\">;
        <section className="py-16 max-w-6xl mx-auto px-6">;
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Endpoints</h2>;
          <div className="space-y-6">;
            {apiEndpoints && apiEndpoints.map((endpoint, index) => (;
              <div key={index} className=\"bg-white border border-gray-200 rounded-lg p-6 shadow-sm\">;
                <div className=\"flex items-center justify-between mb-4\">;
                  <h3 className=\"text-xl font-semibold text-gray-900\">{endpoint && endpoint.name}</h3>;
                  <spanclassName={`px-3 py-1 rounded-full text-sm font-medium ${
                    endpoint && endpoint.method === \'GET\' 
                      ? \'bg-green-100 text-green-800\' 
                      : \'bg-blue-100 text-blue-800\'
                  }`}>
                    {endpoint.method}
                  </span>
                </div>
                <div className=\"space-y-2\">
                  <p><strong>\"Endpoint\": </strong> <code className=\"bg-gray-100 px-2 py-1 rounded\">{endpoint.endpoint}</code></p>
                  <p><strong>\"Description\": </strong> {endpoint.description}</p>
                  <p><strong>\"Response\": </strong> {endpoint.response}</p>
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">{feature.title}</h3>
                <p className=\"text-gray-600\">{feature.description}</p>
              </div>
            ))}
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        <section className=\"py-16 bg-gray-50\">
          <div className=\"max-w-4xl mx-auto px-6 text-center\">
            <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Need Help with Integration?</h2>
            <p className=\"text-gray-600 text-xl mb-8\">
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Integration?</h2>
            <p className="text-gray-600 text-xl mb-8">


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Our team is here to help you integrate our APIs into your applications.
            </p>
            <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 text-white rounded-lg \"hover\": b g-blue-700 transition-colors inline-flex items-center\">
              Contact Our API Team
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
export default API;

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
          </div>;
        </section>;
        <section className=\"py-16 bg-gray-50\">;
          <div className=\"max-w-4xl mx-auto px-6 text-center\">;
            <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Need Help with Integration?</h2>;
            <p className=\"text-gray-600 text-xl mb-8\">;
        <section className="py-16 bg-gray-50">;
          <div className="max-w-4xl mx-auto px-6 text-center">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help with Integration?</h2>;
            <p className="text-gray-600 text-xl mb-8">;
              Our team is here to help you integrate our APIs into your applications.;
            </p>;
            <Link href=\"/contact\" className=\"px-8 py-3 bg-blue-600 text-white rounded-lg \"hover\": b g-blue-700 transition-colors inline-flex items-center\">;
              Contact Our API Team;
            </Link>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
export default API;
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services;
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; const API: NextPage = () => { const apiEndpoints = [ { name: 'Services API',endpoint: '/api/services',method: 'GET',description: 'Retrieve all available services',response: 'Array of services' },{ name: 'Contact API',endpoint: '/api/contact',method: 'POST',description: 'Submit contact form',response: 'Success message' },{ name: 'Quote API',endpoint: '/api/quote',method: 'POST',description: 'Request a quote',response: 'Quote details' } ]; return ( <> <Head> <title>API Documentation - Zion Tech Group</title>  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> </Head> <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <h1 className="text-4xl md: tex t-6xl font-bold text-white mb-4">API Documentation</h1> <p className="text-blue-100 text-xl"> Integrate with our services using our comprehensive REST API  <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and integrations." /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <div className="min-h-screen bg-gray-50"> {} <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"> <div className="container mx-auto px-4 text-center"> <h1 className="text-4xl md:text-5xl font-bold mb-4"> API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span> </h1> <p className="text-xl text-gray-200 max-w-2xl mx-auto"> Comprehensive API documentation for integrating with Zion Tech Group services
origin/cursor/integrate-build-improve-and-re-verify-c7b5
