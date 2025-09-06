<<<<<<< HEAD
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",
=======
<<<<<<< HEAD

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

<<<<<<< HEAD


export function ApiErrorCodes() {

  const errorExample = `{
<<<<<<< HEAD
=======
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
=======
export function ApiErrorCodes() {

  const errorExample = `{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import React from "react";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import {CodeBlock} from "@/components/developers/CodeBlock";
<<<<<<< HEAD
export function ApiErrorCodes() {;
  const errorExample = `{;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  "error": "validation_error";
  "message": "The request was invalid";
  "details": [;
    {;
      "field": "title";


    },


    {
      "field": "budget.min";
      "error": "Budget minimum must be greater than 0"
=======
=======
export function ApiErrorCodes() {
  const errorExample = `{;
  "error": "validation_error";
  "message": "The request was invalid";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import ApiDocsLayout from "@/components/developers/ApiDocsLayout";
import { CodeBlock } from "@/components/developers/CodeBlock";
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",
import { CodeBlock } from "@/components/developers/CodeBlock",



export function ApiErrorCodes() {

  const errorExample = `{
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  "error": "validation_error",
  "message": "The request was invalid",
  "details": [
    {
      "field": "title",
      "error": "Title is required"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      "error": "Title is required";
    };
    {;
      "field": "budget && budget.min";
      "error": "Budget minimum must be greater than 0";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
<<<<<<< HEAD

=======
  ];
}`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from './react';
import ApiDocsLayout from "@/components / developers / ApiDocsLayout";
import { CodeBlock } from '@/components / developers / CodeBlock';
export /**
 * ApiErrorCodes - Function description
 */
function ApiErrorCodes() {
  const error_example = `{
  "error": "validation_error";
  "message": "The request was invalid";
  "details": [;
    {
      "field": "title";
      "error": "Title is required";
    }
    {
      "field": "budget.min";
      "error": "Budget minimum must be greater than 0";
    }
  ];
}`;
;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const rateLimitExample = `{
=======

  const rateLimitExample = `{;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  "error": "rate_limit_exceeded";
  "message": "Rate limit exceeded. Try again in 30 seconds";
  "retry_after": 30;
}`;
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    }
    },
    }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ]
}`;
}`,

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const rateLimitExample = `{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Try again in 30 seconds",
  "retry_after": 30
<<<<<<< HEAD
=======
<<<<<<< HEAD

}`,



<<<<<<< HEAD
=======
}`;
}`,

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const errorCodes = [
    {
      status: 400
      code: "validation_error"
      message: "The request was invalid. Check the details for specific field errors."
      details: "Includes field-specific validation errors."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 400
      code: "invalid_request"
      message: "The request is invalid or malformed."
      details: "The request could not be processed due to syntactical errors."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 401
      code: "invalid_token"
      message: "Invalid or expired API key."
      details: "The provided API key is incorrect, expired, or revoked."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 403
      code: "forbidden"
      message: "You don't have permission to access this resource."
      details: "Your API key doesn't have the required permissions for this operation."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 404
      code: "not_found"
      message: "The requested resource was not found."
      details: "The specified ID does not exist or is not accessible."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 409
      code: "conflict"
      message: "The request conflicts with the current state of the resource."
      details: "For example, trying to create a duplicate resource or updating a resource that has been modified."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 429
      code: "rate_limit_exceeded"
      message: "Rate limit exceeded. Try again later."
      details: "Includes retry_after parameter indicating when to retry."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 500
      code: "internal_error"
      message: "An unexpected error occurred."
      details: "Something went wrong on our end. If the problem persists, contact support."
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      status: 503
      code: "service_unavailable"
      message: "Service temporarily unavailable."
      details: "The API is temporarily unavailable due to maintenance or high load."
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD


  ],



<<<<<<< HEAD
=======
  ];
  ],

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  const rateLimits = [
    {
      endpoint: "All GET endpoints"
      limit: "100 requests per minute"
      notes: "Aggregate limit across all GET endpoints"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      endpoint: "All POST endpoints"
      limit: "30 requests per minute"
      notes: "Aggregate limit across all POST endpoints"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      endpoint: "All PUT/PATCH endpoints"
      limit: "30 requests per minute"
      notes: "Aggregate limit across all PUT/PATCH endpoints"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      endpoint: "All DELETE endpoints"
      limit: "15 requests per minute"
      notes: "Aggregate limit across all DELETE endpoints"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      endpoint: "/api/jobs (Search)"
      limit: "50 requests per minute"
      notes: "Higher limit for common search operations"
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      endpoint: "/api/talent (Search)"
      limit: "50 requests per minute"
      notes: "Higher limit for common search operations"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    },


<<<<<<< HEAD
=======
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    {
      endpoint: "Webhook delivery"
      limit: "N/A"
      notes: "Webhooks don't count against your rate limits"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const errorCodes = [;
    {;
      status: 400,;
      code: "validation_error",;
      message: "The request was invalid. Check the details for specific field errors.",;
      details: "Includes field-specific validation errors.";
    };
    {;
      status: 400,;
      code: "invalid_request",;
      message: "The request is invalid or malformed.",;
      details: "The request could not be processed due to syntactical errors.";
    };
    {;
      status: 401,;
      code: "invalid_token",;
      message: "Invalid or expired API key.",;
      details: "The provided API key is incorrect, expired, or revoked.";
    };
    {;
      status: 403,;
      code: "forbidden",;
      message: "You don't have permission to access this resource.",;
      details: "Your API key doesn't have the required permissions for this operation.";
    };
    {;
      status: 404,;
      code: "not_found",;
      message: "The requested resource was not found.",;
      details: "The specified ID does not exist or is not accessible.";
    };
    {;
      status: 409,;
      code: "conflict",;
      message: "The request conflicts with the current state of the resource.",;
      details: "For example, trying to create a duplicate resource or updating a resource that has been modified.";
    };
    {;
      status: 429,;
      code: "rate_limit_exceeded",;
      message: "Rate limit exceeded. Try again later.",;
      details: "Includes retry_after parameter indicating when to retry.";
    };
    {;
      status: 500,;
      code: "internal_error",;
      message: "An unexpected error occurred.",;
      details: "Something went wrong on our end. If the problem persists, contact support.";
    };
    {;
      status: 503,;
      code: "service_unavailable",;
      message: "Service temporarily unavailable.",;
      details: "The API is temporarily unavailable due to maintenance or high load.";
    }
<<<<<<< HEAD
  ];

  const rateLimits = [;
    {;
      endpoint: "All GET endpoints",;
      limit: "100 requests per minute",;
      notes: "Aggregate limit across all GET endpoints";
    };
    {;
      endpoint: "All POST endpoints",;
      limit: "30 requests per minute",;
      notes: "Aggregate limit across all POST endpoints";
    };
    {;
      endpoint: "All PUT/PATCH endpoints",;
      limit: "30 requests per minute",;
      notes: "Aggregate limit across all PUT/PATCH endpoints";
    };
    {;
      endpoint: "All DELETE endpoints",;
      limit: "15 requests per minute",;
      notes: "Aggregate limit across all DELETE endpoints";
    };
    {;
      endpoint: "/api/jobs (Search)",;
      limit: "50 requests per minute",;
      notes: "Higher limit for common search operations";
    };
    {;
      endpoint: "/api/talent (Search)",;
      limit: "50 requests per minute",;
      notes: "Higher limit for common search operations";
    };
    {;
      endpoint: "Webhook delivery",;
      limit: "N/A",;
      notes: "Webhooks don't count against your rate limits";

    }
  ];
=======
=======
  ];
  const rateLimits = [;
    {;
      endpoint: "All GET endpoints",;
      limit: "100 requests per minute",;
      notes: "Aggregate limit across all GET endpoints";
    };
    {;
      endpoint: "All POST endpoints",;
      limit: "30 requests per minute",;
      notes: "Aggregate limit across all POST endpoints";
    };
    {;
      endpoint: "All PUT/PATCH endpoints",;
      limit: "30 requests per minute",;
      notes: "Aggregate limit across all PUT/PATCH endpoints";
    };
    {;
      endpoint: "All DELETE endpoints",;
      limit: "15 requests per minute",;
      notes: "Aggregate limit across all DELETE endpoints";
    };
    {;
      endpoint: "/api/jobs (Search)",;
      limit: "50 requests per minute",;
      notes: "Higher limit for common search operations";
    };
    {;
      endpoint: "/api/talent (Search)",;
      limit: "50 requests per minute",;
      notes: "Higher limit for common search operations";
    };
    {;
      endpoint: "Webhook delivery",;
      limit: "N/A",;
      notes: "Webhooks don't count against your rate limits";
    }
  ];
  ],

  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Error Codes & Rate Limits</h1>
        <h2>Error Format</h2>
        <p>
          When an error occurs, the API will return an appropriate HTTP status code along with
          a JSON response body containing details about the error.
        </p>
        <CodeBlock code={errorExample} language="json" showLineNumbers={true} />
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
        <CodeBlock code={rateLimitExample} language="json" showLineNumbers={true} />
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
        <h2>Need Help?</h2>
        <p>
  ];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

  ],


  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


          If you're encountering persistent errors or need higher rate limits, please 
          <a href="#" className="text-zion-cyan"> contact our support team</Link>.
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
          If you're encountering persistent errors or need higher rate limits, please
          <a href="#" className="text-zion-cyan"> contact our support team</a>.
          If you're encountering persistent errors or need higher rate limits, please 
          <a href="#" className="text-zion-cyan"> contact our support team</Link>.
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        </p>
      </div>
    </ApiDocsLayout>
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======


}
export default ApiErrorCodes;

}
export default ApiErrorCodes;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
    }
  ];
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Error Codes & Rate Limits</h1>;

<<<<<<< HEAD
=======
import React from "react",;
import ApiDocsLayout from "@/components/developers/ApiDocsLayout",;
import { CodeBlock } from "@/components/developers/CodeBlock",;
;
export function ApiErrorCodes() {;
  const errorExample = `{;
  "error":"validation_error",;
  "message":"The request was invalid",;
  "details":[;
    {;
      "field":"title",;
      "error":"Title is required";
    },;
    {;
      "field":"budget.min",;
      "error":"Budget minimum must be greater than 0";
    }
  ];
}`,;
;
  const rateLimitExample = `{;
  "error":"rate_limit_exceeded",;
  "message":"Rate limit exceeded. Try again in 30 seconds",;
  "retry_after":30;
}`,;
;
  const errorCodes = [;
    {;
      status:400,;
      code:"validation_error",;
      message:"The request was invalid. Check the details for specific field errors.",;
      details:"Includes field-specific validation errors.";
    },;
    {;
      status:400,;
      code:"invalid_request",;
      message:"The request is invalid or malformed.",;
      details:"The request could not be processed due to syntactical errors.";
    },;
    {;
      status:401,;
      code:"invalid_token",;
      message:"Invalid or expired API key.",;
      details:"The provided API key is incorrect, expired, or revoked.";
    },;
    {;
      status:403,;
      code:"forbidden",;
      message:"You don't have permission to access this resource.",;
      details:"Your API key doesn't have the required permissions for this operation.";
    },;
    {;
      status:404,;
      code:"not_found",;
      message:"The requested resource was not found.",;
      details:"The specified ID does not exist or is not accessible.";
    },;
    {;
      status:409,;
      code:"conflict",;
      message:"The request conflicts with the current state of the resource.",;
      details:"For example, trying to create a duplicate resource or updating a resource that has been modified.";
    },;
    {;
      status:429,;
      code:"rate_limit_exceeded",;
      message:"Rate limit exceeded. Try again later.",;
      details:"Includes retry_after parameter indicating when to retry.";
    },;
    {;
      status:500,;
      code:"internal_error",;
      message:"An unexpected error occurred.",;
      details:"Something went wrong on our end. If the problem persists, contact support.";
    },;
    {;
      status:503,;
      code:"service_unavailable",;
      message:"Service temporarily unavailable.",;
      details:"The API is temporarily unavailable due to maintenance or high load.";
    }
  ],;
;
  const rateLimits = [;
    {;
      endpoint:"All GET endpoints",;
      limit:"100 requests per minute",;
      notes:"Aggregate limit across all GET endpoints";
    },;
    {;
      endpoint:"All POST endpoints",;
      limit:"30 requests per minute",;
      notes:"Aggregate limit across all POST endpoints";
    },;
    {;
      endpoint:"All PUT/PATCH endpoints",;
      limit:"30 requests per minute",;
      notes:"Aggregate limit across all PUT/PATCH endpoints";
    },;
    {;
      endpoint:"All DELETE endpoints",;
      limit:"15 requests per minute",;
      notes:"Aggregate limit across all DELETE endpoints";
    },;
    {;
      endpoint:"/api/jobs (Search)",;
      limit:"50 requests per minute",;
      notes:"Higher limit for common search operations";
    },;
    {;
      endpoint:"/api/talent (Search)",;
      limit:"50 requests per minute",;
      notes:"Higher limit for common search operations";
    },;
    {;
      endpoint:"Webhook delivery",;
      limit:"N/A",;
      notes:"Webhooks don't count against your rate limits";
    }
  ],;
;
  return (;
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Error Codes & Rate Limits</h1>;
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <h2>Error Format</h2>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        <p>;
          When an error occurs, the API will return an appropriate HTTP status code along with ;
          a JSON response body containing details about the error.;
        </p>;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert">;
        <h1>Error Codes & Rate Limits</h1>;
        <h2>Error Format</h2>;
        <p>;
          When an error occurs, the API will return an appropriate HTTP status code along with;
          a JSON response body containing details about the error.;
        </p>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
        ;
        <CodeBlock code={errorExample} language="json" showLineNumbers={true} />;
        ;
        <p>;
          Most errors include:;
        </p>;
        ;
        <ul>;
          <li><code>error</code>:A machine-readable error code</li>;
          <li><code>message</code>:A human-readable description of the error</li>;
          <li><code>details</code>:Additional context about the error (when available)</li>;
        </ul>;
;
        <h2>Common Error Codes</h2>;
        ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
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
                </tr>;
=======
              {errorCodes.map((error, index) => (;
                <tr key={error.code} className={index < errorCodes.length - 1 ? "border-b border-zinc-800" : ""}>;
                  <td className="py-2 px-4 text-white">;
                    <span className={`inline-block px-2 rounded text-xs font-medium ${;
                      error.status < 500 ? "bg-orange-950 text-orange-500" : "bg-red-950 text-red-500";
                    }`}>;
                      {error.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-white font-mono">{error.code}</td>
                  <td className="py-2 px-4 text-zinc-300">{error.message}</td>
                  <td className="py-2 px-4 text-zinc-400 text-sm">{error.details}</td>
                </tr>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
;
  const error_codes = [;
    {
      status: 400,
      code: "validation_error",
      message: "The request was invalid. Check the details for specific field errors.",
      details: "Includes field - specific validation errors.";
    }
    {
      status: 400,
      code: "invalid_request",
      message: "The request is invalid or malformed.",
      details: "The request could not be processed due to syntactical errors.";
    }
    {
      status: 401,
      code: "invalid_token",
      message: "Invalid or expired API key.",
      details: "The provided API key is incorrect, expired, or revoked.";
    }
    {
      status: 403,
      code: "forbidden",
      message: "You don't have permission to access this resource.",
      details: "Your API key doesn't have the required permissions for this operation.";
    }
    {
      status: 404,
      code: "not_found",
      message: "The requested resource was not found.",
      details: "The specified ID does not exist or is not accessible.";
    }
    {
      status: 409,
      code: "conflict",
      message: "The request conflicts with the current state of the resource.",
      details: "For example, trying to create a duplicate resource or updating a resource that has been modified.";
    }
    {
      status: 429,
      code: "rate_limit_exceeded",
      message: "Rate limit exceeded. Try again later.",
      details: "Includes retry_after parameter indicating when to retry.";
    }
    {
      status: 500,
      code: "internal_error",
      message: "An unexpected error occurred.",
      details: "Something went wrong on our end. If the problem persists, contact support.";
    }
    {
      status: 503,
      code: "service_unavailable",
      message: "Service temporarily unavailable.",
      details: "The API is temporarily unavailable due to maintenance or high load.";
=======

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  "error": "validation_error";
  "message": "The request was invalid";
  "details": [;
    {;
      "field": "title";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <ApiDocsLayout>;
      <div className="max - w-3xl prose prose - invert">;
        <h1 > Error Codes & Rate Limits</h1>;
        <h2 > Error Format</h2>;
        <p>;
          When an error occurs, the API will return an appropriate HTTP status code along with;
          a JSON response body containing details about the error.;
        </p>;
        <CodeBlock code={error_example} language="json" showLineNumbers={true} />;
        <p>;
          Most errors include:;
        </p>;
        <ul>;
          <li><code > error</code>: A machine - readable error code</li>;
          <li><code > message</code>: A human - readable description of the error</li>;
          <li><code > details</code>: Additional context about the error (when available)</li>;
        </ul>;
        <h2 > Common Error Codes</h2>;
        <div className="overflow - x-auto mb - 8">;
          <table className="w - full border - collapse">;
            <thead>;
              <tr className="border - b border - zinc - 800">;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Status</th>;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Error Code</th>;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Message</th>;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font - medium">Details</th>;
              </tr>;
            </thead>;
            <tbody>;
              {error_codes.map ((error, index) => (
                <tr key={error.code} className={index < error_codes.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 px - 4 text - white">;
                    <span className={`inline - block px - 2 rounded text - xs font - medium ${
                      error.status < 500 ? "bg - orange - 950 text - orange - 500" : "bg - red - 950 text - red - 500";
=======
              {errorCodes.map((error, index) => (;
                <tr key={error.code} className={index < errorCodes.length - 1 ? "border-b border-zinc-800" :""}>;
                  <td className="py-2 px-4 text-white">;
                    <span className={`inline-block px-2 rounded text-xs font-medium ${;
                      error.status < 500 ? "bg-orange-950 text-orange-500" :"bg-red-950 text-red-500";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    }`}>;
                      {error.status}
                    </span>;
                  </td>;
<<<<<<< HEAD
                  <td className="py - 2 px - 4 text - white font - mono">{error.code}</td>;
                  <td className="py - 2 px - 4 text - zinc - 300">{error.message}</td>;
                  <td className="py - 2 px - 4 text - zinc - 400 text - sm">{error.details}</td>;
                </tr>))}
            </tbody>;
          </table>;
        </div>;
        <h2 > Handling Errors</h2>;
        <p>;
          Your application should be prepared to handle error responses appropriately: </p>;
        <ul>;
          <li><strong > 401 and 403 errors</strong>: Check your API key and permissions</li>;
          <li><strong > 429 errors</strong>: Implement retry logic with backoff</li>;
          <li><strong > 5xx errors</strong>: These are server - side issues, retry with backoff</li>;
        </ul>;
        <h3 > Rate Limiting</h3>;
        <p>;
          When you exceed the rate limit, you'll receive a 429 response with details on when to retry:;
        </p>;
        <CodeBlock code={rateLimitExample} language="json" showLineNumbers={true} />;
        <h2 > Rate Limits</h2>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                  <td className="py-2 px-4 text-white font-mono">{error.code}</td>;
                  <td className="py-2 px-4 text-zinc-300">{error.message}</td>;
                  <td className="py-2 px-4 text-zinc-400 text-sm">{error.details}</td>;
                </tr>;
              ))}
            </tbody>;
          </table>;
        </div>;
;
        <h2>Handling Errors</h2>;
        <p>;
          Your application should be prepared to handle error responses appropriately:</p>;
        ;
        <ul>;
          <li><strong>401 and 403 errors</strong>:Check your API key and permissions</li>;
          <li><strong>429 errors</strong>:Implement retry logic with backoff</li>;
          <li><strong>5xx errors</strong>:These are server-side issues, retry with backoff</li>;
        </ul>;
        ;
        <h3>Rate Limiting</h3>;
        <p>;
          When you exceed the rate limit, you'll receive a 429 response with details on when to retry:;
        </p>;
        ;
        <CodeBlock code={rateLimitExample} language="json" showLineNumbers={true} />;
        ;
        <h2>Rate Limits</h2>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        <p>;
          To ensure fair usage and protect the API from abuse, we enforce rate limits on all endpoints.;
          The limits are based on the number of requests per minute per API key.;
        </p>;
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

;


=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <p>;
          All API responses include headers to help you track your rate limit usage:;
        </p>;

        <ul>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <li><code > X-RateLimit - Limit</code>: The maximum number of requests allowed per minute</li>;
          <li><code > X-RateLimit - Remaining</code>: The number of requests remaining in the current window</li>;
          <li><code > X-RateLimit - Reset</code>: The time at which the current rate limit window resets (Unix timestamp)</li>;
        </ul>;
        <h3 > Best Practices for Rate Limits</h3>;
        <ul>;
          <li > Monitor the rate limit headers to avoid hitting limits</li>;
          <li > Implement retry logic with exponential backoff for 429 errors</li>;
          <li > Cache responses when possible to reduce API calls</li>;
          <li > For high - volume needs, contact us about increased limits</li>;
        </ul>;
        <h2 > Need Help?</h2>;
        <p>;
          If you're encountering persistent errors or need higher rate limits, please;
          <a href="#" className="text - zion - cyan"> contact our support team</a>.;
        </p>;
      </div>;
    </ApiDocsLayout>);
}
export default ApiErrorCodes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
