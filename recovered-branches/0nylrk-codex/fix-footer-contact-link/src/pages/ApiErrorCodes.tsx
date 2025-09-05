
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
  ]
}`,

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

  return (
    <ApiDocsLayout>
      <div className=&quot;max-w-3xl prose prose-invert&quot;>
        <h1>Error Codes & Rate Limits</h1>
        
        <h2>Error Format</h2>
        <p>
          When an error occurs, the API will return an appropriate HTTP status code along with 
          a JSON response body containing details about the error.
        </p>
        
        <CodeBlock code={errorExample} language=&quot;json&quot; showLineNumbers={true} />
        
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
        
        <CodeBlock code={rateLimitExample} language=&quot;json" showLineNumbers={true} />
        
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
                <tr key={index} className={index < rateLimits.length - 1 ? "border-b border-zinc-800&quot; : "&quot;}>
                  <td className=&quot;py-2 px-4 text-white font-mono&quot;>{limit.endpoint}</td>
                  <td className=&quot;py-2 px-4 text-zinc-300&quot;>{limit.limit}</td>
                  <td className=&quot;py-2 px-4 text-zinc-400 text-sm&quot;>{limit.notes}</td>
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
          <a href=&quot;#&quot; className=&quot;text-zion-cyan&quot;> contact our support team</Link>.
        </p>
      </div>
    </ApiDocsLayout>
  )
=======
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
export function ApiErrorCodes() {;
  const errorExample = `{;
  "error": "validation_error",;
  "message": "The request was invalid",;
  "details": [;
    {;
      "field": "title",;
      "error": "Title is required";
    },;
    {;
      "field": "budget.min",;
      "error": "Budget minimum must be greater than 0";
    }
  ];
}`,;
  const rateLimitExample = `{;
  "error": "rate_limit_exceeded",;
  "message": "Rate limit exceeded. Try again in 30 seconds",;
  "retry_after": 30;
}`,;
  const errorCodes = [;
    {;
      status: 400,;
      code: "validation_error",;
      message: "The request was invalid. Check the details for specific field errors.",;
      details: "Includes field-specific validation errors.";
    },;
    {;
      status: 400,;
      code: "invalid_request",;
      message: "The request is invalid or malformed.",;
      details: "The request could not be processed due to syntactical errors.";
    },;
    {;
      status: 401,;
      code: "invalid_token",;
      message: "Invalid or expired API key.",;
      details: "The provided API key is incorrect, expired, or revoked.";
    },;
    {;
      status: 403,;
      code: "forbidden",;
      message: "You don't have permission to access this resource.",;
      details: "Your API key doesn't have the required permissions for this operation.";
    },;
    {;
      status: 404,;
      code: "not_found",;
      message: "The requested resource was not found.",;
      details: "The specified ID does not exist or is not accessible.";
    },;
    {;
      status: 409,;
      code: "conflict",;
      message: "The request conflicts with the current state of the resource.",;
      details: "For example, trying to create a duplicate resource or updating a resource that has been modified.";
    },;
    {;
      status: 429,;
      code: "rate_limit_exceeded",;
      message: "Rate limit exceeded. Try again later.",;
      details: "Includes retry_after parameter indicating when to retry.";
    },;
    {;
      status: 500,;
      code: "internal_error",;
      message: "An unexpected error occurred.",;
      details: "Something went wrong on our end. If the problem persists, contact support.";
    },;
    {;
      status: 503,;
      code: "service_unavailable",;
      message: "Service temporarily unavailable.",;
      details: "The API is temporarily unavailable due to maintenance or high load.";
    }
  ],;
  const rateLimits = [;
    {;
      endpoint: "All GET endpoints",;
      limit: "100 requests per minute",;
      notes: "Aggregate limit across all GET endpoints";
    },;
    {;
      endpoint: "All POST endpoints",;
      limit: "30 requests per minute",;
      notes: "Aggregate limit across all POST endpoints";
    },;
    {;
      endpoint: "All PUT/PATCH endpoints",;
      limit: "30 requests per minute",;
      notes: "Aggregate limit across all PUT/PATCH endpoints";
    },;
    {;
      endpoint: "All DELETE endpoints",;
      limit: "15 requests per minute",;
      notes: "Aggregate limit across all DELETE endpoints";
    },;
    {;
      endpoint: "/api/jobs (Search)",;
      limit: "50 requests per minute",;
      notes: "Higher limit for common search operations";
    },;
    {;
      endpoint: "/api/talent (Search)",;
      limit: "50 requests per minute",;
      notes: "Higher limit for common search operations";
    },;
    {;
      endpoint: "Webhook delivery",;
      limit: "N/A",;
      notes: "Webhooks don't count against your rate limits";
    }
  ];
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Error Codes & Rate Limits</h1>;
        <h2>Error Format</h2>;
        <p>;
          When an error occurs, the API will return an appropriate HTTP status code along with;
          a JSON response body containing details about the error.;
        </p>;
        <CodeBlock code={errorExample} language="json" showLineNumbers={true} />;
        <p>;
          Most errors include:;
        </p>;
        <ul>;
          <li><code>error</code>: A machine-readable error code</li>;
          <li><code>message</code>: A human-readable description of the error</li>;
          <li><code>details</code>: Additional context about the error (when available)</li>;
        </ul>;
        <h2>Common Error Codes</h2>;
        <div className="overflow-x-auto mb-8">;
          <table className="w-full border-collapse">;
            <thead>;
              <tr className="border-b border-zinc-800">;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Status</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Error Code</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Message</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Details</th>;
              </tr>;
            </thead>;
            <tbody>;
              {errorCodes.map((error, index) => (;
                <tr key={error.code} className={index < errorCodes.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 px-4 text-white">;
                    <span className={`inline-block px-2 rounded text-xs font-medium ${;
                      error.status < 500 ? "bg-orange-950 text-orange-500" : "bg-red-950 text-red-500";
                    }`}>;
                      {error.status}
                    </span>;
                  </td>;
                  <td className="py-2 px-4 text-white font-mono">{error.code}</td>;
                  <td className="py-2 px-4 text-zinc-300">{error.message}</td>;
                  <td className="py-2 px-4 text-zinc-400 text-sm">{error.details}</td>;
                </tr>;
              ))}
            </tbody>;
          </table>;
        </div>;
        <h2>Handling Errors</h2>;
        <p>;
          Your application should be prepared to handle error responses appropriately: </p>;
        <ul>;
          <li><strong>401 and 403 errors</strong>: Check your API key and permissions</li>;
          <li><strong>429 errors</strong>: Implement retry logic with backoff</li>;
          <li><strong>5xx errors</strong>: These are server-side issues, retry with backoff</li>;
        </ul>;
        <h3>Rate Limiting</h3>;
        <p>;
          When you exceed the rate limit, you'll receive a 429 response with details on when to retry:;
        </p>;
        <CodeBlock code={rateLimitExample} language="json" showLineNumbers={true} />;
        <h2>Rate Limits</h2>;
        <p>;
          To ensure fair usage and protect the API from abuse, we enforce rate limits on all endpoints.;
          The limits are based on the number of requests per minute per API key.;
        </p>;
        <div className="overflow-x-auto mb-8">;
          <table className="w-full border-collapse">;
            <thead>;
              <tr className="border-b border-zinc-800">;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Endpoint</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Limit</th>;
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Notes</th>;
              </tr>;
            </thead>;
            <tbody>;
              {rateLimits.map((limit, index) => (;
                <tr key={index} className={index < rateLimits.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 px-4 text-white font-mono">{limit.endpoint}</td>;
                  <td className="py-2 px-4 text-zinc-300">{limit.limit}</td>;
                  <td className="py-2 px-4 text-zinc-400 text-sm">{limit.notes}</td>;
                </tr>;
              ))}
            </tbody>;
          </table>;
        </div>;
        <h3>Rate Limit Headers</h3>;
        <p>;
          All API responses include headers to help you track your rate limit usage:;
        </p>;
        <ul>;
          <li><code>X-RateLimit-Limit</code>: The maximum number of requests allowed per minute</li>;
          <li><code>X-RateLimit-Remaining</code>: The number of requests remaining in the current window</li>;
          <li><code>X-RateLimit-Reset</code>: The time at which the current rate limit window resets (Unix timestamp)</li>;
        </ul>;
        <h3>Best Practices for Rate Limits</h3>;
        <ul>;
          <li>Monitor the rate limit headers to avoid hitting limits</li>;
          <li>Implement retry logic with exponential backoff for 429 errors</li>;
          <li>Cache responses when possible to reduce API calls</li>;
          <li>For high-volume needs, contact us about increased limits</li>;
        </ul>;
        <h2>Need Help?</h2>;
        <p>;
          If you're encountering persistent errors or need higher rate limits, please;
          <a href="#" className="text-zion-cyan"> contact our support team</a>.;
        </p>;
      </div>;
    </ApiDocsLayout>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export default ApiErrorCodes;