<<<<<<< HEAD
import React from 'react";
import { Helmet } from 'react-helmet-async";
export default function OnsiteRequest.js() {
=======
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function OnsiteRequest() {
>>>>>>> origin/main
  return (
    <>
      <Helmet>
        <title>Onsite Request.js - Zion Tech Group</title>
        <meta name="description" content="Professional onsite request.js services by Zion Tech Group." />"
      </Helmet>
      
      <div className="min-h-screen bg-white">"
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
          <div className="max-w-6xl mx-auto text-center">"
            <h1 className="text-5xl font-bold text-gray-900 mb-6">"
              Onsite Request.js
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
              Professional onsite request.js services by Zion Tech Group.
            </p>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-20 px-4">"
          <div className="max-w-6xl mx-auto">"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              <div className="bg-white p-6 rounded-lg shadow-lg">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Service</h3>"
                <p className="text-gray-600">High-quality professional services tailored to your needs.</p>"
=======
        { /* Content Section */ }
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Service</h3>
                <p className="text-gray-600">High-quality professional services tailored to your needs.</p>
>>>>>>> origin/main
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>"
                <p className="text-gray-600">Experienced professionals with deep industry knowledge.</p>"
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>"
                <p className="text-gray-600">Round-the-clock support to ensure your success.</p>"
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">"
          <div className="max-w-4xl mx-auto text-center">"
            <h2 className="text-4xl font-bold text-white mb-6">"
=======
        { /* CTA Section */ }
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> origin/main
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">"
              Contact us today to learn more about our services and how they can benefit your organization.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">"
              Get Started
            </button>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  )
=======
  );
}
=======
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    // Add your API logic here
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal server error" });
=======
  try {
try {
    const data = fs.readFileSync(file, 'utf8');
    const requests = JSON.parse(data);
    
    const newRequest = {
      id: Date.now().toString(),
      ...req.body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      message: 'Onsite request submitted successfully' 
    }));
  } catch (error) {
    console.error('Error:', error);
    console.error('Error saving onsite request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
  }
}
>>>>>>> origin/main
>>>>>>> origin/main
