export function ApiErrorCodes() {

  const errorExample = `{
import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
export function ApiErrorCodes() {;
  const errorExample = `{;
  "error": "validation_error";
  "message": "The request was invalid";
  "details": [;
    {;
      "field": "title";

    },

    {
      "field": "budget.min";
      "error": "Budget minimum must be greater than 0"import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",

export function ApiErrorCodes() {
      "field": "title",
      "error": "Title is required"  const errorCodes = [
    {
      status: 400
      code: "validation_error"
      message: "The request was invalid. Check the details for specific field errors."
      details: "Includes field-specific validation errors."

    },
    {
      status: 401
      code: "invalid_token"
      message: "Invalid or expired API key."
      details: "The provided API key is incorrect, expired, or revoked."    {
      status: 404
      code: "not_found"
      message: "The requested resource was not found."
      details: "The specified ID does not exist or is not accessible."

    },
    {
      status: 429
      code: "rate_limit_exceeded"
      message: "Rate limit exceeded. Try again later."
      details: "Includes retry_after parameter indicating when to retry."    {
      status: 503
      code: "service_unavailable"
      message: "Service temporarily unavailable."
      details: "The API is temporarily unavailable due to maintenance or high load."
    }

  ],

  const rateLimits = [
    {
      endpoint: "All GET endpoints"
      limit: "100 requests per minute"
      notes: "Aggregate limit across all GET endpoints"    {
      endpoint: "All POST endpoints"
      limit: "30 requests per minute"
      notes: "Aggregate limit across all POST endpoints"

    },
    {
      endpoint: "All DELETE endpoints"
      limit: "15 requests per minute"
      notes: "Aggregate limit across all DELETE endpoints"    {
      endpoint: "/api/talent (Search)"
      limit: "50 requests per minute"
      notes: "Higher limit for common search operations"

    },

          If you're encountering persistent errors or need higher rate limits, please 
          <a href="#" className="text-zion-cyan"> contact our support team</Link>.        </p>
      </div>
    </ApiDocsLayout>
  )        <h2>Error Format</h2>;        <p>;
          When an error occurs, the API will return an appropriate HTTP status code along with ;
          a JSON response body containing details about the error.;
        </p>;

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
            <thead>;"
              <tr className="border-b border-zinc-800">;"
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Status</th>;"
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Error Code</th>;"
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Message</th>;"
                <th className="text-left py-2 px-4 text-zinc-300 font-medium">Details</th>;
              </tr>;
            </thead>;
            <tbody>;
              {errorCodes && errorCodes.map((error, index) => (;
                <tr key={error && error.code} className={index < errorCodes && errorCodes.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 px-4 text-white">;
                    <spanclassName={`inline-block px-2 rounded text-xs font-medium ${
                      error && error.status < 500 ? "bg-orange-950 text-orange-500" : "bg-red-950 text-red-500"
                    }`}>;
                      {error && error.status}
                    </span>;
                  </td>;
                  <td className="py-2 px-4 text-white font-mono">{error && error.code}</td>;
                  <td className="py-2 px-4 text-zinc-300">{error && error.message}</td>;
                  <td className="py-2 px-4 text-zinc-400 text-sm">{error && error.details}</td>;
                </tr>;              ))}
        ;
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
          <li><code>X-RateLimit-Limit</code>: The maximum number of requests allowed per minute</li>;
          <li><code>X-RateLimit-Remaining</code>: The number of requests remaining in the current window</li>;
          <li><code>X-RateLimit-Reset</code>: The time at which the current rate limit window resets (Unix timestamp)</li>;
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
}
;
export default ApiErrorCodes;
        </ul>;

        <h3>Best Practices for Rate Limits</h3>;
        <ul>;
          <li>Monitor the rate limit headers to avoid hitting limits</li>;
          <li>Implement retry logic with exponential backoff for 429 errors</li>;
          <li>Cache responses when possible to reduce API calls</li>;
          <li>For high-volume needs, contact us about increased limits</li>;
        </ul>;

        <h2>Need Help?</h2>;
        <p>;'
          If you're encountering persistent errors or need higher rate limits, please ;"
          <a href="#" className="text-zion-cyan"> contact our support team</a>.;
        </p>;

export default ApiErrorCodes;
