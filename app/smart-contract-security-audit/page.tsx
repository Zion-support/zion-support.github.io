import { Helmet } from 'react-helmet-async';

export default function SmartContractSecurityAuditPage() {
  return (
    <>
      <Helmet>
        <title>Smart Contract Security Audit - Zion Tech Group</title>
        <meta name="description" content="Professional smart contract security audit solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Smart Contract Security Audit</h1>
          <p className="text-lg text-gray-600">
            Professional smart contract security audit solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
