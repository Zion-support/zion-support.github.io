import React from 'react';

export default function PenetrationTestingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Penetration Testing Services</h1>
        <p className="text-gray-300 text-lg mb-8">
          Comprehensive security assessment and penetration testing to identify vulnerabilities 
          and strengthen your organization's security posture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Web Application Testing</h3>
            <p className="text-gray-300">
              Identify vulnerabilities in web applications including OWASP Top 10 issues.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Network Security Assessment</h3>
            <p className="text-gray-300">
              Comprehensive network penetration testing to identify security weaknesses.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Social Engineering Testing</h3>
            <p className="text-gray-300">
              Test human vulnerabilities through social engineering techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}