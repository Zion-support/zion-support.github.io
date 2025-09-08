


  const rateLimitExample = `{
  const rateLimitExample = `{;
  "error": "rate_limit_exceeded";
  "message": "Rate limit exceeded. Try again in 30 seconds";
  "retry_after": 30;
}`;
    }
    },
    {
      "field": "budget.min",
      "error": "Budget minimum must be greater than 0"
    }







      details: "The provided API key is incorrect, expired, or revoked."






      details: "Includes retry_after parameter indicating when to retry."





  ],


      notes: "Aggregate limit across all GET endpoints"













        <CodeBlock code={errorExample} language="json" showLineNumbers={true} />;

        <p>;
          Most errors include:;
        </p>;




        <h2>Common Error Codes</h2>;



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
        <p>;'
          When you exceed the rate limit, you'll receive a 429 response with details on when to retry:;
        </p>;
"
        <CodeBlock code={rateLimitExample} language="json" showLineNumbers={true} />;

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

                      {error.status}
                    </span>;
                  </td>;
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

        <p>;
          To ensure fair usage and protect the API from abuse, we enforce rate limits on all endpoints.;
          The limits are based on the number of requests per minute per API key.;
        </p>;

export default ApiErrorCodes;

            <thead>;
              <tr className="border - b border - zinc-800">;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font-medium">Endpoint</th>;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font-medium">Limit</th>;
                <th className="text - left py - 2 px - 4 text - zinc - 300 font-medium">Notes</th>;
              </tr>;
            </thead>;
            <tbody>;
              {rate_limits.map ((limit, index) => (
                <tr key={index} className={index < rate_limits.length - 1 ? "border - b border - zinc - 800" : ""}>;
                  <td className="py - 2 px - 4 text - white font-mono">{limit.endpoint}</td>;
                  <td className="py - 2 px - 4 text - zinc-300">{limit.limit}</td>;
                  <td className="py - 2 px - 4 text - zinc - 400 text-sm">{limit.notes}</td>;

                </tr>))}
            </tbody>;
          </table>;
        </div>;
        <h3 > Rate Limit Headers</h3>;

