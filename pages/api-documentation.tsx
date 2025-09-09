import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Code, ExternalLink } from 'lucide-react';

export default function APIDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Beautiful, accurate API docs with live playgrounds and SDK snippets." />
        <link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
      </Head>
      <section className="pt-28 pb-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" /> Developer Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>
            <p className="text-gray-400 mt-4">Generate and host comprehensive API docs from your code and OpenAPI. Zero drift, CI-friendly.</p>
          </div>

              <div className="border-l-4 border-purple-500 pl-4">;
                <h3 className="text-lg font-medium text-gray-800 mb-2">Analytics</h3>;
                <div className="space-y-2 text-sm">;
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /analytics/overview</code> - Get analytics overview</div>;
                  <div><code className="bg-gray-100 px-2 py-1 rounded">GET /analytics/reports</code> - Generate reports</div>;
                  <div><code className="bg-gray-100 px-2 py-1 rounded">POST /analytics/export</code> - Export data</div>;
                </div>;
              </div>;
            </div>;
          </div>;

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Code Examples</h2>;
            <div className="space-y-6">;
              <div>;
                <h3 className="text-lg font-medium text-gray-800 mb-3">JavaScript/Node.js</h3>;
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">;
{};
}
});

// Get content;
const getContent = async () => {};
} catch (error) {};
}
};`}
                </pre>;
              </div>;

              <div>;
                <h3 className="text-lg font-medium text-gray-800 mb-3">Python</h3>;
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">;
{};
    'Authorization': f'Bearer {api_key}',;
    'Content-Type': 'application/json'}

# Get content;
response = requests.get(f'{base_url}/content', headers=headers);
if response.status_code == 200:;
    print(response.json());
else:;
    print(f'Error: {response.status_code}')`}
                </pre>;
              </div>;
            </div>;
          </div>;

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">;
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Error Codes</h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
              <div className="bg-red-50 p-4 rounded-lg">;
                <h3 className="font-medium text-red-800">4xx Client Errors</h3>;
                <div className="text-sm text-red-700 space-y-1 mt-2">;
                  <div><strong>400:</strong> Bad Request</div>;
                  <div><strong>401:</strong> Unauthorized</div>;
                  <div><strong>403:</strong> Forbidden</div>;
                  <div><strong>404:</strong> Not Found</div>;
                  <div><strong>429:</strong> Too Many Requests</div>;
                </div>;
              </div>;
              <div className="bg-orange-50 p-4 rounded-lg">;
                <h3 className="font-medium text-orange-800">5xx Server Errors</h3>;
                <div className="text-sm text-orange-700 space-y-1 mt-2">;
                  <div><strong>500:</strong> Internal Server Error</div>;
                  <div><strong>502:</strong> Bad Gateway</div>;
                  <div><strong>503:</strong> Service Unavailable</div>;
                  <div><strong>504:</strong> Gateway Timeout</div>;
                </div>;
              </div>;
            </div>;
          </div>;

          <div className="bg-blue-50 rounded-lg p-6 text-center">;
            <h3 className="text-lg font-medium text-blue-800 mb-2">Need Help?</h3>;
            <p className="text-blue-600 mb-4">;
              Our developer support team is here to help you integrate successfully.;
            </p>;
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
              Contact Support;
            </Link>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}
export default APIDocumentation;