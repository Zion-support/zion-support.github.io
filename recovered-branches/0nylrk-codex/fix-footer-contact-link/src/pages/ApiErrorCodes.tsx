



export function ApiErrorCodes() {

  const errorExample = `{

import React from "react";""
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";""
import {CodeBlock} from "@/components/developers/CodeBlock";"
export function ApiErrorCodes() {;`;
  const errorExample = `{;"
  "error": "validation_error";""
  "message": "The request was invalid";""
  "details": [;"
    {;"
      "field": "title";"
    },


    {"
      "field": "budget.min";""
      "error": "Budget minimum must be greater than 0""
export function ApiErrorCodes() {`;
import React from "react",""
import { CodeBlock } from "@/components/developers/CodeBlock";""
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",""
import { CodeBlock } from "@/components/developers/CodeBlock","
`;
  const errorExample = `{"
  "error": "validation_error",""
  "message": "The request was invalid",""
  "details": ["
      "field": "title",""
      "error": "Title is required"""
      "error": "Title is required";"
    };
      "field": "budget && budget.min";""
      "error": "Budget minimum must be greater than 0";"
    }
"
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";""
import { CodeBlock } from '@/components / developers / CodeBlock';
export /**
 * ApiErrorCodes - Function description;
 */
function ApiErrorCodes() {`;
  const error_example = `{
      "field": "title";""
    }]
  ];`;
}`;
;
  const rateLimitExample = `{
  const rateLimitExample = `{;"
  "error": "rate_limit_exceeded";""
  "message": "Rate limit exceeded. Try again in 30 seconds";""
  "retry_after": 30;"`;

  ]`;
}`;`;
}`,

  const rateLimitExample = `{"
  "error": "rate_limit_exceeded",""
  "message": "Rate limit exceeded. Try again in 30 seconds",""



  const errorCodes = [
    {
      status: 400;,"
  code: "validation_error"""
      message: "The request was invalid. Check the details for specific field errors."","
  details: "Includes field-specific validation errors.""


  code: "invalid_request"""
      message: "The request is invalid or malformed."","
  details: "The request could not be processed due to syntactical errors.""


      status: 401;,"
  code: "invalid_token"""
      message: "Invalid or expired API key."","
  details: "The provided API key is incorrect, expired, or revoked.""


      status: 403;,"
  code: "forbidden"""
      message: "You don't have permission to access this resource."","
  details: "Your API key doesn't have the required permissions for this operation.""


      status: 404;,"
  code: "not_found"""
      message: "The requested resource was not found."","
  details: "The specified ID does not exist or is not accessible.""


      status: 409;,"
  code: "conflict"""
      message: "The request conflicts with the current state of the resource."","
  details: "For example, trying to create a duplicate resource or updating a resource that has been modified.""


      status: 429;,"
  code: "rate_limit_exceeded"""
      message: "Rate limit exceeded. Try again later."","
  details: "Includes retry_after parameter indicating when to retry.""


      status: 500;,"
  code: "internal_error"""
      message: "An unexpected error occurred."","
  details: "Something went wrong on our end. If the problem persists, contact support.""


      status: 503;,"
  code: "service_unavailable"""
      message: "Service temporarily unavailable."","
  details: "The API is temporarily unavailable due to maintenance or high load.""

]
  ],



  const rateLimits = [
      endpoint: "All GET endpoints"","
  limit: "100 requests per minute"""
      notes: "Aggregate limit across all GET endpoints""


      endpoint: "All POST endpoints"","
  limit: "30 requests per minute"""
      notes: "Aggregate limit across all POST endpoints""


      endpoint: "All PUT/PATCH endpoints"","
      notes: "Aggregate limit across all PUT/PATCH endpoints""


      endpoint: "All DELETE endpoints"","
  limit: "15 requests per minute"""
      notes: "Aggregate limit across all DELETE endpoints""


      endpoint: "/api/jobs (Search)"","
  limit: "50 requests per minute"""
      notes: "Higher limit for common search operations""


      endpoint: "/api/talent (Search)"","


      endpoint: "Webhook delivery"","
  limit: "N/A"""
      notes: "Webhooks don't count against your rate limits""
  const errorCodes = [;
    {;
      status: 400,;"
      code: "validation_error",;""
      message: "The request was invalid. Check the details for specific field errors.",;""
      details: "Includes field-specific validation errors.";"
      code: "invalid_request",;""
      message: "The request is invalid or malformed.",;""
      details: "The request could not be processed due to syntactical errors.";"
      status: 401,;"
      code: "invalid_token",;""
      message: "Invalid or expired API key.",;""
      details: "The provided API key is incorrect, expired, or revoked.";"
      status: 403,;"
      code: "forbidden",;""
      message: "You don't have permission to access this resource.",;""
      details: "Your API key doesn't have the required permissions for this operation.";"
      status: 404,;"
      code: "not_found",;""
      message: "The requested resource was not found.",;""
      details: "The specified ID does not exist or is not accessible.";"
      status: 409,;"
      code: "conflict",;""
      message: "The request conflicts with the current state of the resource.",;""
      details: "For example, trying to create a duplicate resource or updating a resource that has been modified.";"
      status: 429,;"
      code: "rate_limit_exceeded",;""
      message: "Rate limit exceeded. Try again later.",;""
      details: "Includes retry_after parameter indicating when to retry.";"
      status: 500,;"
      code: "internal_error",;""
      message: "An unexpected error occurred.",;""
      details: "Something went wrong on our end. If the problem persists, contact support.";"
      status: 503,;"
      code: "service_unavailable",;""
      message: "Service temporarily unavailable.",;""
      details: "The API is temporarily unavailable due to maintenance or high load.";"
  ];

  const rateLimits = [;
      endpoint: "All GET endpoints",;""
      limit: "100 requests per minute",;""
      notes: "Aggregate limit across all GET endpoints";"
      endpoint: "All POST endpoints",;""
      limit: "30 requests per minute",;""
      notes: "Aggregate limit across all POST endpoints";"
      endpoint: "All PUT/PATCH endpoints",;""
      notes: "Aggregate limit across all PUT/PATCH endpoints";"
      endpoint: "All DELETE endpoints",;""
      limit: "15 requests per minute",;""
      notes: "Aggregate limit across all DELETE endpoints";"
      endpoint: "/api/jobs (Search)",;""
      limit: "50 requests per minute",;""
      notes: "Higher limit for common search operations";"
      endpoint: "/api/talent (Search)",;""
      endpoint: "Webhook delivery",;""
      limit: "N/A",;""
      notes: "Webhooks don't count against your rate limits";"



  return (

          If you're encountering persistent errors or need higher rate limits, please;
          <a href="#" className="text-zion-cyan"> contact our support team."
</a>
        </p>
      </div>
    
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;"
        <h1>Error Codes & Rate Limits</h1>;
        <h2>Error Format</h2>;
        <p>;
        </p>;"
        <CodeBlock code={errorExample} language="json" showLineNumbers={true} />;"

        </p>;
        <ul>;
</ul>
          <li><code>error</code>: A machine-readable error code</li>;
          <li><code>message</code>: A human-readable description of the error</li>;)
          <li><code>details</code>: Additional context about the error (when available)</li>;
        </ul>;
        <h2>Common Error Codes</h2>;"
        <div className="overflow-x-auto mb-8">;"
</div>"
          <table className="w-full border-collapse">;"
</table>
            <thead>;
</thead>"
              <tr className="border-b border-zinc-800">;"
</tr>"
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Status</th>;""
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Error Code</th>;""
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Message</th>;""
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Details</th>;"
              </tr>;
            </thead>;
            <tbody>;
</tbody>"
                <tr key={error && error.code} className={index < errorCodes && errorCodes.length - 1 ? "border-b border-zinc-800" : ""}>;"
                  <td className="py-2 px-4 text-white">;"
</td>`;
                    <spanclassName={`inline-block px-2 rounded text-xs font-medium ${"
                      error && error.status < 500 ? "bg-orange-950 text-orange-500" : "bg-red-950 text-red-500""`;
                    }`}>;
</spanclassName>
                    </span>;
                  </td>;"
                  <td className="py-2 px-4 text-white font-mono">{error && error.code}</td>;""
                  <td className="py-2 px-4 text-zinc-300">{error && error.message}</td>;""
                  <td className="py-2 px-4 text-zinc-400 text-sm">{error && error.details}</td>;"
            </tbody>;
          </table>;
        </div>;
        <h2>Handling Errors</h2>;
          Your application should be prepared to handle error responses appropriately: </p>;
          <li><strong>401 and 403 errors</strong>: Check your API key and permissions</li>;
          <li><strong>429 errors</strong>: Implement retry logic with backoff</li>;
          <li><strong>5xx errors</strong>: These are server-side issues, retry with backoff</li>;
        <h3>Rate Limiting</h3>;
        <CodeBlock code={rateLimitExample} language="json" showLineNumbers={true} />;"

        <h2>Rate Limits</h2>;
      <div className="max - w-3xl prose prose - invert">;"
        <h1 > Error Codes & Rate Limits</h1>;
        <h2 > Error Format</h2>;
        <CodeBlock code={error_example} language="json" showLineNumbers={true} />;"

          <li><code > error</code>: A machine - readable error code</li>;
          <li><code > message</code>: A human - readable description of the error</li>;
          <li><code > details</code>: Additional context about the error (when available)</li>;
        <h2 > Common Error Codes</h2>;"
        <div className="overflow - x-auto mb - 8">;"
          <table className="w - full border - collapse">;"
              <tr className="border - b border - zinc - 800">;"
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Status</th>;""
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Error Code</th>;""
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Message</th>;""
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Details</th>;"
                <tr key={error.code} className={index < error_codes.length - 1 ? "border - b border - zinc - 800" : ""}>;"
                  <td className="py - 2 px - 4 text - white">;"
                    <span className={`inline - block px - 2 rounded text - xs font - medium ${"
                      error.status < 500 ? "bg - orange - 950 text - orange - 500" : "bg - red - 950 text - red - 500";"`;
</span>
                  <td className="py - 2 px - 4 text - white font - mono">{error.code}</td>;""
                  <td className="py - 2 px - 4 text - zinc - 300">{error.message}</td>;""
                  <td className="py - 2 px - 4 text - zinc - 400 text - sm">{error.details}</td>;"
                </tr>))}
        <h2 > Handling Errors</h2>;
          <li><strong > 401 and 403 errors</strong>: Check your API key and permissions</li>;
          <li><strong > 429 errors</strong>: Implement retry logic with backoff</li>;
          <li><strong > 5xx errors</strong>: These are server - side issues, retry with backoff</li>;
        <h3 > Rate Limiting</h3>;

        <h2 > Rate Limits</h2>;"
                  <td className="py-2 px-4 text-white font-mono">{error.code}</td>;""
                  <td className="py-2 px-4 text-zinc-300">{error.message}</td>;""
                  <td className="py-2 px-4 text-zinc-400 text-sm">{error.details}</td>;"
          Your application should be prepared to handle error responses appropriately:</p>;
          <li><strong>401 and 403 errors</strong>:Check your API key and permissions</li>;
          <li><strong>429 errors</strong>:Implement retry logic with backoff</li>;
          <li><strong>5xx errors</strong>:These are server-side issues, retry with backoff</li>;

                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Endpoint</th>;""
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Limit</th>;""
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Notes</th>;"
                <tr key={index} className={index < rate_limits.length - 1 ? "border - b border - zinc - 800" : ""}>;"
                  <td className="py - 2 px - 4 text - white font - mono">{limit.endpoint}</td>;""
                  <td className="py - 2 px - 4 text - zinc - 300">{limit.limit}</td>;""
                  <td className="py - 2 px - 4 text - zinc - 400 text - sm">{limit.notes}</td>;"
        <h3 > Rate Limit Headers</h3>;
          <li><code > X-RateLimit - Limit</code>: The maximum number of requests allowed per minute</li>;
          <li><code > X-RateLimit - Remaining</code>: The number of requests remaining in the current window</li>;
          <li><code > X-RateLimit - Reset</code>: The time at which the current rate limit window resets (Unix timestamp)</li>;
        <h3 > Best Practices for Rate Limits</h3>;
          <li > Monitor the rate limit headers to avoid hitting limits</li>;
          <li > Implement retry logic with exponential backoff for 429 errors</li>;
          <li > Cache responses when possible to reduce API calls</li>;
          <li > For high - volume needs, contact us about increased limits</li>;
        <h2 > Need Help?</h2>;
</p>"
          <a href="#" className="text - zion - cyan"> contact our support team</a>.;"
    );
          <li><code>X-RateLimit-Limit</code>: The maximum number of requests allowed per minute</li>;
          <li><code>X-RateLimit-Remaining</code>: The number of requests remaining in the current window</li>;
          <li><code>X-RateLimit-Reset</code>: The time at which the current rate limit window resets (Unix timestamp)</li>;
        <h3>Best Practices for Rate Limits</h3>;
          <li>Monitor the rate limit headers to avoid hitting limits</li>;
          <li>Implement retry logic with exponential backoff for 429 errors</li>;
          <li>Cache responses when possible to reduce API calls</li>;
          <li>For high-volume needs, contact us about increased limits</li>;
        <h2>Need Help?</h2>;
          <a href="#" className="text-zion-cyan"> contact our support team</a>.;"
        </p>;"`;