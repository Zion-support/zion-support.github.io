  "error": "validation_error";
  "message": "The request was invalid";
  "details": [;
    {;
      "field": "title";
    }
  ];
}`;
  const rateLimitExample = `{
=======

  const rateLimitExample = `{;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

=======
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
