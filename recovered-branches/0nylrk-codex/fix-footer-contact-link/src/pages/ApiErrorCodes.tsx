
  "details": [
    {
      "field": "title",
      "error": "Title is required"

  const rateLimitExample = `{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Try again in 30 seconds",
  "retry_after": 30
  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Error Codes & Rate Limits</h1>
        <ul>
          <li><code>error</code>: A machine-readable error code</li>
          <li><code>message</code>: A human-readable description of the error</li>
          <li><code>details</code>: Additional context about the error (when available)</li>
        </ul>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Status</th>
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Error Code</th>
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Message</th>
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {errorCodes.map((error, index) => (
                <tr key={error.code} className={index < errorCodes.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 px-4 text-white">
                    <span className={`inline-block px-2 rounded text-xs font-medium ${
                      error.status < 500 ? "bg-orange-950 text-orange-500" : "bg-red-950 text-red-500"
                    }`}>
                      {error.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-white font-mono">{error.code}</td>
                  <td className="py-2 px-4 text-zinc-300">{error.message}</td>
                  <td className="py-2 px-4 text-zinc-400 text-sm">{error.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Rate Limiting</h3>
        <p>
          When you exceed the rate limit, you'll receive a 429 response with details on when to retry:
        </p>
        <h2>Rate Limits</h2>
        <p>
          To ensure fair usage and protect the API from abuse, we enforce rate limits on all endpoints.
          The limits are based on the number of requests per minute per API key.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Endpoint</th>
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Limit</th>
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rateLimits.map((limit, index) => (
                <tr key={index} className={index < rateLimits.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 px-4 text-white font-mono">{limit.endpoint}</td>
                  <td className="py-2 px-4 text-zinc-300">{limit.limit}</td>
                  <td className="py-2 px-4 text-zinc-400 text-sm">{limit.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3>Rate Limit Headers</h3>
        <p>
          All API responses include headers to help you track your rate limit usage:
        </p>
        <ul>
          <li><code>X-RateLimit-Limit</code>: The maximum number of requests allowed per minute</li>
          <li><code>X-RateLimit-Remaining</code>: The number of requests remaining in the current window</li>
          <li><code>X-RateLimit-Reset</code>: The time at which the current rate limit window resets (Unix timestamp)</li>
        </ul>
        <h3>Best Practices for Rate Limits</h3>
        <ul>
          <li>Monitor the rate limit headers to avoid hitting limits</li>
          <li>Implement retry logic with exponential backoff for 429 errors</li>
          <li>Cache responses when possible to reduce API calls</li>
          <li>For high-volume needs, contact us about increased limits</li>
        </ul>
