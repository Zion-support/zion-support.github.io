import Link from 'next/link';
import Head from 'next/head';

export default function Authentication() {
  const contact = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    address: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Authentication - Zion Tech Group Documentation</title>
        <meta name="description" content="Learn how to authenticate with Zion Tech Group APIs using API keys, OAuth 2.0, and JWT tokens." />
        <link rel="canonical" href={`${contact.address}/docs/authentication`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/docs" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              ← Back to Documentation
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Authentication</h1>
            <p className="text-xl text-gray-600">
              Learn how to authenticate with Zion Tech Group APIs using various methods including API keys, OAuth 2.0, and JWT tokens.
            </p>
          </div>

          {/* API Key Authentication */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">🔑 API Key Authentication</h2>
            <p className="text-gray-600 mb-6">
              The simplest way to authenticate with our APIs is using an API key. Include it in the Authorization header of your requests.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Your API Key</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Sign up for a Zion Tech Group account</li>
                <li>Navigate to your dashboard</li>
                <li>Go to API Settings</li>
                <li>Generate a new API key</li>
                <li>Copy and store it securely</li>
              </ol>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Using Your API Key</h3>
              <p className="text-gray-600 mb-4">Include your API key in the Authorization header:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.ziontechgroup.com/v1/health`}
              </pre>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Security Best Practices</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Never expose your API key in client-side code</li>
                <li>Use environment variables to store API keys</li>
                <li>Rotate your API keys regularly</li>
                <li>Use different API keys for different environments</li>
                <li>Monitor API key usage for suspicious activity</li>
              </ul>
            </div>
          </div>

          {/* OAuth 2.0 Authentication */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">🔐 OAuth 2.0 Authentication</h2>
            <p className="text-gray-600 mb-6">
              For more secure authentication, especially for third-party applications, we support OAuth 2.0 with various grant types.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Authorization Code Flow</h3>
                <p className="text-gray-600 mb-4">Most secure flow for web applications with a backend.</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Redirect user to authorization endpoint</li>
                  <li>User grants permission</li>
                  <li>Receive authorization code</li>
                  <li>Exchange code for access token</li>
                  <li>Use access token for API calls</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Client Credentials Flow</h3>
                <p className="text-gray-600 mb-4">For server-to-server authentication.</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Send client credentials to token endpoint</li>
                  <li>Receive access token</li>
                  <li>Use access token for API calls</li>
                </ol>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">OAuth 2.0 Endpoints</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Authorization Endpoint</h4>
                  <code className="bg-gray-900 text-green-400 p-2 rounded text-sm">https://auth.ziontechgroup.com/oauth/authorize</code>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Token Endpoint</h4>
                  <code className="bg-gray-900 text-green-400 p-2 rounded text-sm">https://auth.ziontechgroup.com/oauth/token</code>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Revocation Endpoint</h4>
                  <code className="bg-gray-900 text-green-400 p-2 rounded text-sm">https://auth.ziontechgroup.com/oauth/revoke</code>
                </div>
              </div>
            </div>
          </div>

          {/* JWT Token Authentication */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">🎫 JWT Token Authentication</h2>
            <p className="text-gray-600 mb-6">
              JSON Web Tokens (JWT) provide a secure way to transmit information between parties. Our APIs support JWT for stateless authentication.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">JWT Structure</h3>
              <p className="text-gray-600 mb-4">A JWT consists of three parts separated by dots:</p>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`}
              </pre>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Header.Payload.Signature</strong>
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">JWT Payload Example</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "sub": "user_123",
  "name": "John Doe",
  "email": "john@example.com",
  "iat": 1516239022,
  "exp": 1641081600,
  "scope": "read write"
}`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Token Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Self-contained with user information</li>
                  <li>Built-in expiration handling</li>
                  <li>Stateless authentication</li>
                  <li>Cross-service compatibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>HMAC SHA-256 signing</li>
                  <li>Short expiration times</li>
                  <li>Refresh token support</li>
                  <li>Token revocation capability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rate Limiting */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate Limiting</h2>
            <p className="text-gray-600 mb-4">
              API requests are rate limited to ensure fair usage and system stability.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Free Tier</h3>
                <p className="text-gray-600">1,000 requests/hour</p>
              </div>
              <div className="bg-white rounded p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600">10,000 requests/hour</p>
              </div>
              <div className="bg-white rounded p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">Unlimited requests</p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Authentication?</h2>
            <p className="text-gray-600 mb-6">
              Our technical team is here to help you implement secure authentication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Support
              </Link>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Email Technical Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}