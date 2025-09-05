
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiErrorCodes() {_const _errorExample = `{
  "error": "validation_error", _"message": "The request was invalid", _"details": [
    {
      "field": "title", _"error": "Title is required"},
    {_"field": "budget.min", _"error": "Budget minimum must be greater than 0"}
  ]
}`;

  const _rateLimitExample = `{_"error": "rate_limit_exceeded", _"message": "Rate limit exceeded. Try again in 30 seconds", _"retry_after": 30}`;

  const _errorCodes = [
    {_status: 400, _code: "validation_error", _message: "The request was invalid. Check the details for specific field errors.", _details: "Includes field-specific validation errors."},
    {_status: 400, _code: "invalid_request", _message: "The request is invalid or malformed.", _details: "The request could not be processed due to syntactical errors."},
    {_status: 401, _code: "invalid_token", _message: "Invalid or expired API key.", _details: "The provided API key is incorrect, _expired, _or revoked."},
    {_status: 403, _code: "forbidden", _message: "You don't have permission to access this resource.", _details: "Your API key doesn't have the required permissions for this operation."},
    {_status: 404, _code: "not_found", _message: "The requested resource was not found.", _details: "The specified ID does not exist or is not accessible."},
    {_status: 409, _code: "conflict", _message: "The request conflicts with the current state of the resource.", _details: "For example, _trying to create a duplicate resource or updating a resource that has been modified."},
    {_status: 429, _code: "rate_limit_exceeded", _message: "Rate limit exceeded. Try again later.", _details: "Includes retry_after parameter indicating when to retry."},
    {_status: 500, _code: "internal_error", _message: "An unexpected error occurred.", _details: "Something went wrong on our end. If the problem persists, _contact support."},
    {_status: 503, _code: "service_unavailable", _message: "Service temporarily unavailable.", _details: "The API is temporarily unavailable due to maintenance or high load."}
  ];

  const _rateLimits = [
    {_endpoint: "All GET endpoints", _limit: "100 requests per minute", _notes: "Aggregate limit across all GET endpoints"},
    {_endpoint: "All POST endpoints", _limit: "30 requests per minute", _notes: "Aggregate limit across all POST endpoints"},
    {_endpoint: "All PUT/PATCH endpoints", _limit: "30 requests per minute", _notes: "Aggregate limit across all PUT/PATCH endpoints"},
    {_endpoint: "All DELETE endpoints", _limit: "15 requests per minute", _notes: "Aggregate limit across all DELETE endpoints"},
    {_endpoint: "/api/jobs (Search)", _limit: "50 requests per minute", _notes: "Higher limit for common search operations"},
    {_endpoint: "/api/talent (Search)", _limit: "50 requests per minute", _notes: "Higher limit for common search operations"},
    {_endpoint: "Webhook delivery", _limit: "N/A", _notes: "Webhooks don't count against your rate limits"}
  ];

  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Error Codes & Rate Limits</h1>
        
        <h2>Error Format</h2>
        <p>
          When an error occurs, the API will return an appropriate HTTP status code along with 
          a JSON response body containing details about the error.
        </p>
        
        <CodeBlock code={_errorExample} language="json" showLineNumbers={_true} />
        
        <p>
          Most errors include:
        </p>
        
        <ul>
          <li><code>error</code>: A machine-readable error code</li>
          <li><code>message</code>: A human-readable description of the error</li>
          <li><code>details</code>: Additional context about the error (when available)</li>
        </ul>

        <h2>Common Error Codes</h2>
        
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
              {_errorCodes.map(_(error, _index) => (
                <tr key={error.code} className={_index < errorCodes.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 px-4 text-white">
                    <span className={_`inline-block px-2 rounded text-xs font-medium ${
                      error.status < 500 ? "bg-orange-950 text-orange-500" : "bg-red-950 text-red-500"}`}>
                      {_error.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-white font-mono">{_error.code}</td>
                  <td className="py-2 px-4 text-zinc-300">{_error.message}</td>
                  <td className="py-2 px-4 text-zinc-400 text-sm">{_error.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Handling Errors</h2>
        <p>
          Your application should be prepared to handle error responses appropriately:
        </p>
        
        <ul>
          <li><strong>401 and 403 errors</strong>: Check your API key and permissions</li>
          <li><strong>429 errors</strong>: Implement retry logic with backoff</li>
          <li><strong>5xx errors</strong>: These are server-side issues; retry with backoff</li>
        </ul>
        
        <h3>Rate Limiting</h3>
        <p>
          When you exceed the rate limit, you'll receive a 429 response with details on when to retry:
        </p>
        
        <CodeBlock code={_rateLimitExample} language="json" showLineNumbers={_true} />
        
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
              {_rateLimits.map(_(limit, _index) => (
                <tr key={index} className={_index < rateLimits.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 px-4 text-white font-mono">{_limit.endpoint}</td>
                  <td className="py-2 px-4 text-zinc-300">{_limit.limit}</td>
                  <td className="py-2 px-4 text-zinc-400 text-sm">{_limit.notes}</td>
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
        
        <h2>Need Help?</h2>
        <p>
          If you're encountering persistent errors or need higher rate limits, please 
          <a href="#" className="text-zion-cyan"> contact our support team</a>.
        </p>
      </div>
    </ApiDocsLayout>
  );
}

export default ApiErrorCodes;
