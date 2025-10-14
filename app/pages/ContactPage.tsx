import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">contact@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1-555-0123</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}