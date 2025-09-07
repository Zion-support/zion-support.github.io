
  }
];

export default function APIDocsPage() {

export default function ApiDocsPage() {
  return (
    <>
      <Head>
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final

export default function APIDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900>;
      <Head>;
        <title>API Documentation - Zion Tech Group | Developer Resources</title>;
        <meta name=description" content="Comprehensive API documentation for Zion Tech Group services. Access our RESTful APIs for AI, IT, and micro SaaS solutions. />;
        <meta name=keywords" content="API documentation, developer resources, REST API, integration, SDK />;
      </Head>;

      {/* Hero Section */}

      <section className=relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">;
        <div className="absolute inset-0>;
          <div className=absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>;
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000></div>;
        </div>;

        <div className=container mx-auto px-4 relative z-10">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className="text-center>;
            <h1 className=text-4xl md:text-6xl font-bold mb-6">;
              API Documentation;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto>;
              Comprehensive API documentation for integrating with Zion Tech Group services. ;
              Build powerful applications with our RESTful APIs.;
            </p>;
          </motion && motion.div>;
        </div>;
      </section>;


      {/* API Endpoints Section */}
      <section className=py-20 bg-white">;
        <div className="container mx-auto px-4>;
          <motion&& motion.div
            className=text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className="text-4xl font-bold text-gray-900 mb-4>API Endpoints</h2>;
            <p className=text-xl text-gray-600 max-w-3xl mx-auto">;
              Explore our comprehensive API endpoints for seamless integration with our services.;
            </p>;
          </motion && motion.div>;

          <div className="grid md:grid-cols-2 gap-8>;
            {apiEndpoints && apiEndpoints.map((endpoint, index) => {
              const IconComponent = endpoint && endpoint.icon;
              return (
                  <Link
                    href={`/api-docs/${endpoint && endpoint.endpoint.replace('/api/, ')}`}
                    className=inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">;
                    View Documentation;
                    <ArrowRight className="w-4 h-4 ml-1 />;
                  </Link>;
                </motion && motion.div>;
              );
            })}
      {/* CTA Section */}
      <section className=py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
      <div className='container mx-auto px-4 py-16 text-gray-200>
        <h1 className=text-4xl md:text-6xl font-bold mb-4'>API Docs</h1>
        <p className='text-gray-300>
          See{ '}
          <a href='/api-docs className=text-cyan-400 underline'>
            API Documentation
          </a>{' }
          for the full reference.
        </p>
      </div>
    </Layout>
  );
}
import Layout from ../components/Layout';
export default function APIDocsPage() {
origin/cursor/automate-test-improve-and-merge-code-2533
export default function ApiDocsPage() {
  return (
    <>
      <Head>
        <title>API Docs | Zion Tech Group</title>
<meta name='description content=API reference and guides.' />
        <link rel='canonical href=https://ziontechgroup.com/api-docs' />
origin/cursor/automate-test-improve-and-merge-code-2533
      </Head>
      <div className='container mx-auto px-4 py-16 text-gray-200>
        <h1 className=text-4xl md:text-6xl font-bold mb-4'>API Docs</h1>
        <p className='text-gray-300>
          See{ '}
          <a href='/api-docs className=text-cyan-400 underline'>
            API Documentation
          </a>{' '}
          for the full reference.
        </p>
      </div>


    </Layout>
  );

=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
