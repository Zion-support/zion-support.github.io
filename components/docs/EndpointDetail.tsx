
import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className="space-y-4">


      <div>
      <div>'
        <div className='text-xl font-semibold text-high-contrast'>
    <div className='space-y-4' />
        <div className='text-xl font-semibold text-high-contrast>
    <div className=space-y-4' />

      <div />
        <div className='text-xl font-semibold text-high-contrast />}
}
          {endpoint.title}
        </div>;'
        <div className='text - sm text - high - contrast - muted'>;
          {endpoint.description}
        </div>;'
        <div className='mt - 2 inline - flex items - center gap - 2 text - xs'>;'
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
            {endpoint.method}
          </span>;'
          <code className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
            {endpoint.path}
          </code>;'
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
            {endpoint.visibility}
      <div>'
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
      <div>
        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>

        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />
      </div>
      <div>        <div className="text-xl font-semibold text-high-contrast>{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className=mt-2 inline-flex items-center gap-2 text-xs">"
          <span className=px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary>{endpoint.method}</span>"
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary>{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className=\"space-y-4\"    />
export default function EndpointDetail({}
  endpoint}
}: {}
  endpoint: EndpointSpec;}
}) {

  return (

    <div className='space-y-4'    />


      <div    />
        <div className='text-xl font-semibold text-high-contrast'    />}
}
          {endpoint.title}

        </div>;
        <div className='text - sm text - high - contrast - muted'    />;
          {endpoint.description}
        </div>;
        <div className='mt - 2 inline - flex items - center gap - 2 text - xs'    />;
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'    />;
            {endpoint.method}
          </span>;
          <code className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'    />;
            {endpoint.path}
          </code>;

          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'    />;

            {endpoint.visibility}


          </span>
        </div>
      </div>
      <div    />
<div className='font-medium mb-2'    />Code Examples</div>
        <CodeSamples samples={endpoint.samples}    />
      </div>


        <TryItConsole
          method={endpoint && endpoint.method}
          method={endpoint && endpoint.method}
          path={endpoint && endpoint.path}
          requiresAuth={}
      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>'
          <div className='font-medium mb-2'>Rate Limits</div>'
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>



            (endpoint.auth |[]).includes('jwt') |
            (endpoint.auth |[]).includes('wallet')
      <div />
<div className='font-medium mb-2' />Try It</div>
        <TryItConsole;
method={endpoint && endpoint.method}
          path={endpoint && endpoint.path}
          requiresAuth={
      </div>
      {endpoint.rateLimits && endpoint.rateLimits.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Rate Limits</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>
                {r.tier}: {r.limitPerMinute}/min
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>
            ))}

      <div>
        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>


      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
{endpoint.errors && endpoint.errors.length > 0 && (
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533

            (endpoint && endpoint.auth || []).includes('jwt') ||
            (endpoint && endpoint.auth || []).includes('wallet')
          }
        />;
      </div>;



            ))}

      {endpoint && endpoint.rateLimits && endpoint && endpoint.rateLimits.length > 0 && (;
        <div>;
          <div className='font-medium mb-2'>Rate Limits</div>;
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>;
            {endpoint && endpoint.rateLimits.map((r, idx) => (;
              <li key={idx}>;
                {r && r.tier}: {r && r.limitPerMinute}/min;
                {r && r.burst ? `, burst ${r && r.burst}` : ''}
              </li>            ))}      </div>;
      {(endpoint && endpoint.rateLimits && endpoint && endpoint.rateLimits.length > 0) && (;
        <div>;
          <div className="font-medium mb-2">Rate Limits</div>;
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">;
            {endpoint && endpoint.rateLimits.map((r, idx) => (;
              <li key={idx}>{r && r.tier}: {r && r.limitPerMinute}/min{r && r.burst ? `, burst ${r && r.burst}` : ''}</li>;
            ))}
          </ul>
        </div>
      )}



      {endpoint && endpoint.errors && endpoint && endpoint.errors.length > 0 && (;
        <div>;
          <div className='font-medium mb-2'>Error Codes</div>;
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>;
            {endpoint && endpoint.errors.map(e => (;
              <li key={e && e.code}>;
                <strong>{e && e.code}</strong> ({e && e.httpStatus}) - {e && e.message}
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>;
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">;
            {endpoint && endpoint.errors.map((e) => (;
              <li key={e && e.code}><strong>{e && e.code}</strong> ({e && e.httpStatus}) - {e && e.message}</li>;
          </ul>;
        </div>;
      )}
    </div>
  )
          </ul>
        </div>
      )}
{(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
          <div className='font-medium mb-2'>Error Codes</div>
        <div>'
          <div className='font-medium mb-2'>Error Codes</div>'
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
      </div>


{endpoint.errors && endpoint.errors.length > 0 && (
origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
          <div className='font-medium mb-2'>Error Codes</div>'
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>'
{endpoint.errors && endpoint.errors.length > 0 && (
origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
          <div className=font-medium mb-2'>Error Codes</div>
        <div>'
          <div className=font-medium mb-2>Error Codes</div>'
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted>
            {endpoint.errors.map(e => (
              <li key={e.code}>
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}"
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>"
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
                {r.tier}: {r.limitPerMinute}/min;'`
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>            ))}      </div>;
      {(endpoint.rate_limits && endpoint.rate_limits.length > 0) && (
        <div>;'
          <div className='font - medium mb - 2'>Rate Limits</div>;'
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.rate_limits.map ((r, idx) => ('`
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>))}
          </ul>;
        </div>)}
      {endpoint.errors && endpoint.errors.length > 0 && (
        <div>;'
          <div className='font - medium mb - 2'>Error Codes</div>;'
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.errors.map (e => (
              <li key={e.code}>;
                <strong>{e.code}</strong> ({e.http_status}) - {e.message}'
              </li>            ))}          <div className='font - medium mb - 2'>Error Codes</div>;'
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.errors.map ((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.http_status}) - {e.message}</li>;
          </ul>;
        </div>)}
    </div>);

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
}
            {endpoint.visibility}<div>;
        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>        <div className='text-xl font-semibold text-high-contrast'>{endpoint.title}</div>;
        <div className='text-sm text-high-contrast-muted'>{endpoint.description}</div>;
        <div className='mt-2 inline-flex items-center gap-2 text-xs'>;
          <span className='px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>{endpoint.method}</span>;
          <code className='px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>{endpoint.path}</code>;
          <span className='px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>{endpoint.visibility}</span>;
          </span>;
        </div>;
      </div>;
      <div>;
<div className='font-medium mb-2'>Code Examples</div>;
        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>;
<div className='font-medium mb-2'>Try It</div>;
        <TryItConsole;
          method={endpoint && endpoint.method}
          path={endpoint && endpoint.path}
          requiresAuth={(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (<div>;
          <div className='font-medium mb-2'>Rate Limits</div>;
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>;
            (endpoint.auth |[]).includes('jwt') |;

      <div    />
<div className='font-medium mb-2'    />Try It</div>
        <TryItConsole;
method={endpoint && endpoint.method}
          path={endpoint && endpoint.path}
          requiresAuth={


            (endpoint.auth |[]).includes('jwt') |}
            (endpoint.auth |[]).includes('wallet')}
          }
           />
      </div>
      {endpoint.rateLimits && endpoint.rateLimits.length > 0 && (
        <div    />
          <div className='font-medium mb-2'    />Rate Limits</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'    />}
            {endpoint.rateLimits.map((r, idx) => (}
              <li key={idx}    />
                {r.tier}: {r.limitPerMinute}/min;
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}


{endpoint.errors && endpoint.errors.length > 0 && (
        <div    />
          <div className='font-medium mb-2'    />Error Codes</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'    />}
            {endpoint.errors.map(e => (}
              <li key={e.code}    />
                <strong    />{e.code}</strong> ({e.httpStatus}) - {e.message}

              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

}


}
    </div>)}
  )
}

"
}

}

origin/cursor/automate-test-improve-and-merge-code-2533
}

"
'"`
"
