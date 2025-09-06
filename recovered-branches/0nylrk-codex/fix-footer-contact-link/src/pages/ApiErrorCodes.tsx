import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",



export function ApiErrorCodes() {

  const errorExample = `{
  "error": "validation_error",
  "message": "The request was invalid",
  "details": [
    {
      "field": "title",
      "error": "Title is required"
    }
    },
    }
  ]
}`;
}`,

  const rateLimitExample = `{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Try again in 30 seconds",
  "retry_after": 30
  const errorCodes = [
    {
      status: 400
      code: "validation_error"
      message: "The request was invalid. Check the details for specific field errors."
      details: "Includes field-specific validation errors."
    {
      status: 400
      code: "invalid_request"
      message: "The request is invalid or malformed."
      details: "The request could not be processed due to syntactical errors."
    {
      status: 401
      code: "invalid_token"
      message: "Invalid or expired API key."
      details: "The provided API key is incorrect, expired, or revoked."
    {
      status: 403
      code: "forbidden"
      message: "You don't have permission to access this resource."
      details: "Your API key doesn't have the required permissions for this operation."
    {
      status: 404
      code: "not_found"
      message: "The requested resource was not found."
      details: "The specified ID does not exist or is not accessible."
    {
      status: 409
      code: "conflict"
      message: "The request conflicts with the current state of the resource."
      details: "For example, trying to create a duplicate resource or updating a resource that has been modified."
    {
      status: 429
      code: "rate_limit_exceeded"
      message: "Rate limit exceeded. Try again later."
      details: "Includes retry_after parameter indicating when to retry."
    {
      status: 500
      code: "internal_error"
      message: "An unexpected error occurred."
      details: "Something went wrong on our end. If the problem persists, contact support."
    {
      status: 503
      code: "service_unavailable"
      message: "Service temporarily unavailable."
      details: "The API is temporarily unavailable due to maintenance or high load."
    }
  const rateLimits = [
    {
      endpoint: "All GET endpoints"
      limit: "100 requests per minute"
      notes: "Aggregate limit across all GET endpoints"
    {
      endpoint: "All POST endpoints"
      limit: "30 requests per minute"
      notes: "Aggregate limit across all POST endpoints"
    {
      endpoint: "All PUT/PATCH endpoints"
      limit: "30 requests per minute"
      notes: "Aggregate limit across all PUT/PATCH endpoints"
    {
      endpoint: "All DELETE endpoints"
      limit: "15 requests per minute"
      notes: "Aggregate limit across all DELETE endpoints"
    {
      endpoint: "/api/jobs (Search)"
      limit: "50 requests per minute"
      notes: "Higher limit for common search operations"
    {
      endpoint: "/api/talent (Search)"
      limit: "50 requests per minute"
      notes: "Higher limit for common search operations"
    {
      endpoint: "Webhook delivery"
      limit: "N/A"
      notes: "Webhooks don't count against your rate limits"


          If you're encountering persistent errors or need higher rate limits, please 
          <a href="#" className="text-zion-cyan"> contact our support team</Link>.
        </p>
      </div>
    </ApiDocsLayout>
  )
        <p>;
          When an error occurs, the API will return an appropriate HTTP status code along with ;
          a JSON response body containing details about the error.;
        </p>;

  "error": "validation_error";
  "message": "The request was invalid";
  "details": [;
    {;
      "field": "title";
    }
  ];
}`;
  const rateLimitExample = `{

  const rateLimitExample = `{;
  "error": "rate_limit_exceeded";
  "message": "Rate limit exceeded. Try again in 30 seconds";
  "retry_after": 30;
}`;
    }
  ];
  return (
        <p>;
          To ensure fair usage and protect the API from abuse, we enforce rate limits on all endpoints.;
          The limits are based on the number of requests per minute per API key.;
        </p>;
}
export default ApiErrorCodes;

        <div className="overflow - x-auto mb - 8">;
          <table className="w - full border - collapse">;
            <thead>;
              <tr className="border - b border - zinc - 800">;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Endpoint</th>;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Limit</th>;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Notes</th>;
              </tr>;
            </thead>;
            <tbody>;
              {rate_limits.map ((limit, index) => (
                <tr key={index} className={index < rate_limits.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 px - 4 text - white font - mono">{limit.endpoint}</td>;
                  <td className="py - 2 px - 4 text - zinc - 300">{limit.limit}</td>;
                  <td className="py - 2 px - 4 text - zinc - 400 text - sm">{limit.notes}</td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>;
        <h3 > Rate Limit Headers</h3>;
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
          If you're encountering persistent errors or need higher rate limits, please ;
          <a href="#" className="text-zion-cyan"> contact our support team</a>.;
        </p>;
export default ApiErrorCodes;
