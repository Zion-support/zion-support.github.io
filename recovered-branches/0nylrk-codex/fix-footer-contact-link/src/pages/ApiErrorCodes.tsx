
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
=======
import React from &quot;react&quot;;
import ApiDocsLayout from &quot;@/components/developers/ApiDocsLayout&quot;;
import { CodeBlock } from &quot;@/components/developers/CodeBlock&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ApiErrorCodes() {
  const errorExample = `{
  &quot;error&quot;: &quot;validation_error&quot;,
  &quot;message&quot;: &quot;The request was invalid&quot;,
  &quot;details&quot;: [
    {
      &quot;field&quot;: &quot;title&quot;,
      &quot;error&quot;: &quot;Title is required&quot;
    },
    {
      &quot;field&quot;: &quot;budget.min&quot;,
      &quot;error&quot;: &quot;Budget minimum must be greater than 0&quot;
    }
=======
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";

export function ApiErrorCodes() {_const _errorExample = `{
  "error": "validation_error", _"message": "The request was invalid", _"details": [
    {
      "field": "title", _"error": "Title is required"},
    {_"field": "budget.min", _"error": "Budget minimum must be greater than 0"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ]
}`,

<<<<<<< HEAD
  const rateLimitExample = `{
<<<<<<< HEAD
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Try again in 30 seconds",
  "retry_after": 30
}`,
=======
  &quot;error&quot;: &quot;rate_limit_exceeded&quot;,
  &quot;message&quot;: &quot;Rate limit exceeded. Try again in 30 seconds&quot;,
  &quot;retry_after&quot;: 30
}`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const errorCodes = [
    {
      status: 400,
      code: &quot;validation_error&quot;,
      message: &quot;The request was invalid. Check the details for specific field errors.&quot;,
      details: &quot;Includes field-specific validation errors.&quot;
    },
    {
      status: 400,
      code: &quot;invalid_request&quot;,
      message: &quot;The request is invalid or malformed.&quot;,
      details: &quot;The request could not be processed due to syntactical errors.&quot;
    },
    {
      status: 401,
      code: &quot;invalid_token&quot;,
      message: &quot;Invalid or expired API key.&quot;,
      details: &quot;The provided API key is incorrect, expired, or revoked.&quot;
    },
    {
      status: 403,
      code: &quot;forbidden&quot;,
      message: &quot;You don't have permission to access this resource.&quot;,
      details: &quot;Your API key doesn't have the required permissions for this operation.&quot;
    },
    {
      status: 404,
      code: &quot;not_found&quot;,
      message: &quot;The requested resource was not found.&quot;,
      details: &quot;The specified ID does not exist or is not accessible.&quot;
    },
    {
      status: 409,
      code: &quot;conflict&quot;,
      message: &quot;The request conflicts with the current state of the resource.&quot;,
      details: &quot;For example, trying to create a duplicate resource or updating a resource that has been modified.&quot;
    },
    {
      status: 429,
      code: &quot;rate_limit_exceeded&quot;,
      message: &quot;Rate limit exceeded. Try again later.&quot;,
      details: &quot;Includes retry_after parameter indicating when to retry.&quot;
    },
    {
      status: 500,
      code: &quot;internal_error&quot;,
      message: &quot;An unexpected error occurred.&quot;,
      details: &quot;Something went wrong on our end. If the problem persists, contact support.&quot;
    },
    {
      status: 503,
      code: &quot;service_unavailable&quot;,
      message: &quot;Service temporarily unavailable.&quot;,
      details: &quot;The API is temporarily unavailable due to maintenance or high load.&quot;
    }
  ],

  const rateLimits = [
    {
      endpoint: &quot;All GET endpoints&quot;,
      limit: &quot;100 requests per minute&quot;,
      notes: &quot;Aggregate limit across all GET endpoints&quot;
    },
    {
      endpoint: &quot;All POST endpoints&quot;,
      limit: &quot;30 requests per minute&quot;,
      notes: &quot;Aggregate limit across all POST endpoints&quot;
    },
    {
      endpoint: &quot;All PUT/PATCH endpoints&quot;,
      limit: &quot;30 requests per minute&quot;,
      notes: &quot;Aggregate limit across all PUT/PATCH endpoints&quot;
    },
    {
      endpoint: &quot;All DELETE endpoints&quot;,
      limit: &quot;15 requests per minute&quot;,
      notes: &quot;Aggregate limit across all DELETE endpoints&quot;
    },
    {
      endpoint: &quot;/api/jobs (Search)&quot;,
      limit: &quot;50 requests per minute&quot;,
      notes: &quot;Higher limit for common search operations&quot;
    },
    {
      endpoint: &quot;/api/talent (Search)&quot;,
      limit: &quot;50 requests per minute&quot;,
      notes: &quot;Higher limit for common search operations&quot;
    },
    {
      endpoint: &quot;Webhook delivery&quot;,
      limit: &quot;N/A&quot;,
      notes: &quot;Webhooks don't count against your rate limits&quot;
    }
  ],
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <ApiDocsLayout>
      <div className=&quot;max-w-3xl prose prose-invert&quot;>
        <h1>Error Codes & Rate Limits</h1>
        
        <h2>Error Format</h2>
        <p>
          When an error occurs, the API will return an appropriate HTTP status code along with 
          a JSON response body containing details about the error.
        </p>
        
<<<<<<< HEAD
        <CodeBlock code={errorExample} language=&quot;json&quot; showLineNumbers={true} />
=======
        <CodeBlock code={_errorExample} language="json" showLineNumbers={_true} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        <p>
          Most errors include:
        </p>
        
        <ul>
          <li><code>error</code>: A machine-readable error code</li>
          <li><code>message</code>: A human-readable description of the error</li>
          <li><code>details</code>: Additional context about the error (when available)</li>
        </ul>

        <h2>Common Error Codes</h2>
        
        <div className=&quot;overflow-x-auto mb-8&quot;>
          <table className=&quot;w-full border-collapse&quot;>
            <thead>
              <tr className=&quot;border-b border-zinc-800&quot;>
                <th className=&quot;text-left py-2 px-4 text-zinc-300 font-medium&quot;>Status</th>
                <th className=&quot;text-left py-2 px-4 text-zinc-300 font-medium&quot;>Error Code</th>
                <th className=&quot;text-left py-2 px-4 text-zinc-300 font-medium&quot;>Message</th>
                <th className=&quot;text-left py-2 px-4 text-zinc-300 font-medium&quot;>Details</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {errorCodes.map((error, index) => (
                <tr key={error.code} className={index < errorCodes.length - 1 ? &quot;border-b border-zinc-800&quot; : ""}>
                  <td className="py-2 px-4 text-white">
                    <span className={`inline-block px-2 rounded text-xs font-medium ${
                      error.status < 500 ? "bg-orange-950 text-orange-500&quot; : &quot;bg-red-950 text-red-500"
                    }`}>
                      {error.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-white font-mono">{error.code}</td>
                  <td className="py-2 px-4 text-zinc-300">{error.message}</td>
                  <td className="py-2 px-4 text-zinc-400 text-sm&quot;>{error.details}</td>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Handling Errors</h2>
        <p>
          Your application should be prepared to handle error responses appropriately: </p>
        
        <ul>
          <li><strong>401 and 403 errors</strong>: Check your API key and permissions</li>
          <li><strong>429 errors</strong>: Implement retry logic with backoff</li>
          <li><strong>5xx errors</strong>: These are server-side issues, retry with backoff</li>
        </ul>
        
        <h3>Rate Limiting</h3>
        <p>
          When you exceed the rate limit, you'll receive a 429 response with details on when to retry:
        </p>
        
<<<<<<< HEAD
        <CodeBlock code={rateLimitExample} language=&quot;json" showLineNumbers={true} />
=======
        <CodeBlock code={_rateLimitExample} language="json" showLineNumbers={_true} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
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
<<<<<<< HEAD
              {rateLimits.map((limit, index) => (
                <tr key={index} className={index < rateLimits.length - 1 ? "border-b border-zinc-800&quot; : "&quot;}>
                  <td className=&quot;py-2 px-4 text-white font-mono&quot;>{limit.endpoint}</td>
                  <td className=&quot;py-2 px-4 text-zinc-300&quot;>{limit.limit}</td>
                  <td className=&quot;py-2 px-4 text-zinc-400 text-sm&quot;>{limit.notes}</td>
=======
              {_rateLimits.map(_(limit, _index) => (
                <tr key={index} className={_index < rateLimits.length - 1 ? "border-b border-zinc-800" : ""}>
                  <td className="py-2 px-4 text-white font-mono">{_limit.endpoint}</td>
                  <td className="py-2 px-4 text-zinc-300">{_limit.limit}</td>
                  <td className="py-2 px-4 text-zinc-400 text-sm">{_limit.notes}</td>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <h3>Rate Limit Headers</h3>
        <p>
          All API responses include headers to help you track your rate limit usage: </p>
        
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
          <a href=&quot;#&quot; className=&quot;text-zion-cyan&quot;> contact our support team</Link>.
        </p>
      </div>
    </ApiDocsLayout>
  )
}

export default ApiErrorCodes,
