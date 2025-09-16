

  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Getting Started</h1>
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">
          <h3 className="text-yellow-500 text-sm font-medium mt-0">Important</h3>
          <p className="text-sm text-yellow-300/90 mb-0">
            Keep your API keys secure! Never expose them in client-side code or public repositories.
          </p>
        </div>
        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <div className="bg-zinc-900 p-4 rounded-md">
          <code className="text-zion-cyan break-words">https://api.zionai.com/v1</code>
        </div>
        <h2>Available APIs</h2>
        <ul>
          <li><strong>Jobs API</strong> - Post and retrieve job listings</li>
          <li><strong>Talent API</strong> - Search and retrieve talent profiles</li>
          <li><strong>Quotes API</strong> - Create and manage quote requests</li>
          <li><strong>Projects API</strong> - Manage projects and milestones</li>
          <li><strong>Webhooks API</strong> - Set up event notifications</li>
        </ul>
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors"
          >
            Download Postman Collection
          </a>
        </div>
      </div>
    </ApiDocsLayout>



export default ApiGettingStarted;

  );
}

export default ApiGettingStarted;
