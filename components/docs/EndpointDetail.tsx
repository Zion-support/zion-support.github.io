

      <div>
=======
      <div>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className='text-xl font-semibold text-high-contrast>
    <div className=space-y-4' />

      <div />
        <div className='text-xl font-semibold text-high-contrast />}
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          {endpoint.title}


        <div className=font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />
      </div>
      <div>        <div className="text-xl font-semibold text-high-contrast>{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className=mt-2 inline-flex items-center gap-2 text-xs">"
          <span className=px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary>{endpoint.method}</span>"
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary>{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>

          </span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        </div>
      </div>

      <div>

          path={endpoint && endpoint.path}

      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>"
          <div className="font-medium mb-2>Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">




          path={endpoint && endpoint.path}
          requiresAuth={

      <div>
        <div className=font-medium mb-2>Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes(jwt') || (endpoint.auth || []).includes('wallet)} />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
      </div>


{endpoint.errors && endpoint.errors.length > 0 && (
origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
          <div className='font-medium mb-2'>Error Codes</div>'
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>'
=======
{endpoint.errors && endpoint.errors.length > 0 && (
origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
          <div className=font-medium mb-2'>Error Codes</div>
=======
        <div>'
          <div className=font-medium mb-2>Error Codes</div>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
            {endpoint.errors.map(e => (
              <li key={e.code}>

          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
            ))}

              </li>
origin/cursor/automate-test-improve-and-merge-code-2533
            ))}
          </ul>
        </div>
      )}
    </div>
  );

      )}
    </div>
  );
}
          </span>        </div>;
      </div>;
      <div>;
        <div className='font - medium mb - 2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>        <div className=text - xl font - semibold text - high - contrast">{endpoint.title}</div>;"
        <div className=text - sm text - high - contrast - muted>{endpoint.description}</div>;"
        <div className="mt - 2 inline - flex items - center gap - 2 text - xs>;
          <span className="px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.method}</span>;
          <code className=px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.path}</code>;"
          <span className=px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary>{endpoint.visibility}</span>;
      </div>;
      <div>;"
        <div className=font - medium mb - 2'>Code Examples</div>        <div className="font - medium mb - 2>Code Examples</div>;
        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>;'
        <div className=font - medium mb - 2>Try It</div>;
        <TryItConsole;
          method={endpoint.method}
          path={endpoint.path}
          requires_auth={'
            (endpoint.auth || []).includes ('jwt) ||;
            (endpoint.auth || []).includes ('wallet');
          }
        />;
      </div>;
      {endpoint.rate_limits && endpoint.rate_limits.length > 0 && (
        <div>;
          <div className=font - medium mb - 2'>Rate Limits</div>;'
          <ul className=list - disc pl - 5 text - sm text - high - contrast - muted>;
            {endpoint.rate_limits.map ((r, idx) => (
              <li key={idx}>;

            ))}
          </ul>
        </div>
      )}

{endpoint.errors && endpoint.errors.length > 0 && (
        <div />
          <div className='font-medium mb-2' />Error Codes</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted' />}
            {endpoint.errors.map(e => (}
              <li key={e.code} />
                <strong />{e.code}</strong> ({e.httpStatus}) - {e.message}

            ))}
          </ul>;
        </div>;
      )}
      )}
    </div>;
  );
}
          </ul>
        </div>
      )}
      {(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
          <div className=font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted>
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
              </li>            ))}          <div className=font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
            ))}

            ))}
          </ul>
        </div>
      )}
    </div>

      )}
    </div>
  );

=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

origin/cursor/automate-test-improve-and-merge-code-2533
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
