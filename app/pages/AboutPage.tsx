import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge AI and IT solutions." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
          <p className="text-lg text-gray-600">
            We are a leading technology company specializing in AI development, web development, 
            mobile applications, cloud solutions, and cybersecurity services.
          </p>
        </div>
      </div>
=======
        <meta name="description" content="Learn about Zion Tech Group's mission to provide innovative AI and IT solutions." />
      </Helmet>
      
      <main id="main-content" className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Zion Tech Group is a leading provider of advanced AI and IT solutions, dedicated to helping businesses 
                transform their operations through cutting-edge technology.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts combines deep technical knowledge with industry experience to deliver solutions 
                that drive real business value.
              </p>
            </div>
          </div>
        </div>
      </main>
>>>>>>> cursor/fix-errors-and-merge-to-main-6911
    </>
  );
};

<<<<<<< HEAD
export default AboutPage;
=======
export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6911
=======
export default function PagesPage() {
  return (
    <>
      <Helmet>
        <title>Pages - Zion Tech Group</title>
        <meta name="description" content="Professional pages solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pages</h1>
          <p className="text-lg text-gray-600">
            Professional pages solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-15e9
