import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className="space-y-4">
<<<<<<< HEAD


  endpoint,
}: {;

  endpoint: EndpointSpec;
}) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
export default function EndpointDetail({
  endpoint
}: {
origin/cursor/automate-test-improve-and-merge-code-2533
  endpoint: EndpointSpec;
}) {}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
'
    <div className='space-y-4'>

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    <div className='space-y-4'>
  endpoint,}: {import { EndpointSpec  } from '../../data/api-docs/types';
export default function EndpointDetail() {return (<div className="space-y-4">;
export default function EndpointDetail() {return (<div className='space-y-4'>;
      <div>;
        <div className='text-xl font-semibold text-high-contrast'>;
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div>
=======
      <div>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className='text-xl font-semibold text-high-contrast'>
    <div className='space-y-4' />

      <div />
        <div className='text-xl font-semibold text-high-contrast' />}
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          {endpoint.title}
<<<<<<< HEAD
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
=======
        </div>;
        <div className='text - sm text - high - contrast - muted'>;
          {endpoint.description}
        </div>;
        <div className='mt - 2 inline - flex items - center gap - 2 text - xs'>;
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
            {endpoint.method}
          </span>;
          <code className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
            {endpoint.path}
          </code>;
<<<<<<< HEAD
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
      <div>
        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>
=======
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary' />;

            {endpoint.visibility}
      <div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />
      </div>
      <div>        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>"
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>"
        <div className="mt-2 inline-flex items-center gap-2 text-xs">"
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>"
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>"
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        </div>
      </div>

      <div>
        <div className="font-medium mb-2">Code Examples</div>
        <CodeSamples samples={endpoint.samples} />
      </div>
<<<<<<< HEAD

        <TryItConsole
          method={endpoint && endpoint.method}
=======
      <div>
<div className='font-medium mb-2'>Try It</div>
origin/cursor/automate-test-improve-and-merge-code-2533
        <TryItConsole
=======
        <TryItConsole;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          method={endpoint && endpoint.method}
          path={endpoint && endpoint.path}
<<<<<<< HEAD
          requiresAuth={}
=======
          requiresAuth={
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>"
          <div className="font-medium mb-2">Rate Limits</div>"
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">



            (endpoint.auth |[]).includes('jwt') |
            (endpoint.auth |[]).includes('wallet')
      <div />
<div className='font-medium mb-2' />Try It</div>
        <TryItConsole;
method={endpoint && endpoint.method}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          path={endpoint && endpoint.path}
          requiresAuth={

      <div>
        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>
<<<<<<< HEAD

      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
=======
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
origin/cursor/automate-test-improve-and-merge-code-2533
          </ul>
        </div>
      )}

      {endpoint && endpoint.rateLimits && endpoint && endpoint.rateLimits.length > 0 && (;
        <div>;'
          <div className='font-medium mb-2'>Rate Limits</div>;'
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>;
            {endpoint && endpoint.rateLimits.map((r, idx) => (;
              <li key={idx}>;
                {r && r.tier}: {r && r.limitPerMinute}/min;'
                {r && r.burst ? `, burst ${r && r.burst}` : ''}
              </li>            ))}      </div>;
      {(endpoint && endpoint.rateLimits && endpoint && endpoint.rateLimits.length > 0) && (;
        <div>;"
          <div className="font-medium mb-2">Rate Limits</div>;"
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">;
            {endpoint && endpoint.rateLimits.map((r, idx) => (;'`
              <li key={idx}>{r && r.tier}: {r && r.limitPerMinute}/min{r && r.burst ? `, burst ${r && r.burst}` : ''}</li>;


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
        <div>"
          <div className="font-medium mb-2">Error Codes</div>"
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>

            ))}

          </ul>
        </div>
      )}

      {endpoint.errors && endpoint.errors.length > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
{endpoint.errors && endpoint.errors.length > 0 && (
origin/cursor/automate-test-improve-and-merge-code-2533
        <div>
          <div className='font-medium mb-2'>Error Codes</div>
=======
        <div>'
          <div className='font-medium mb-2'>Error Codes</div>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.errors.map(e => (
              <li key={e.code}>
<<<<<<< HEAD
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}"
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>"
=======
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
      <div>;'
        <div className='font - medium mb - 2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />;
      </div>;"
      <div>        <div className="text - xl font - semibold text - high - contrast">{endpoint.title}</div>;"
        <div className="text - sm text - high - contrast - muted">{endpoint.description}</div>;"
        <div className="mt - 2 inline - flex items - center gap - 2 text - xs">;"
          <span className="px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.method}</span>;"
          <code className="px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.path}</code>;"
          <span className="px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.visibility}</span>;
      </div>;
      <div>;'"
        <div className='font - medium mb - 2'>Code Examples</div>        <div className="font - medium mb - 2">Code Examples</div>;
        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>;'
        <div className='font - medium mb - 2'>Try It</div>;
        <TryItConsole;
          method={endpoint.method}
          path={endpoint.path}
          requires_auth={'
            (endpoint.auth || []).includes ('jwt') ||;'
            (endpoint.auth || []).includes ('wallet');
          }
        />;
      </div>;
      {endpoint.rate_limits && endpoint.rate_limits.length > 0 && (
        <div>;'
          <div className='font - medium mb - 2'>Rate Limits</div>;'
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.rate_limits.map ((r, idx) => (
              <li key={idx}>;
<<<<<<< HEAD
                {r.tier}: {r.limitPerMinute}/min;'`
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>            ))}      </div>;
      {(endpoint.rate_limits && endpoint.rate_limits.length > 0) && (
        <div>;"
          <div className="font - medium mb - 2">Rate Limits</div>;"
          <ul className="list - disc pl - 5 text - sm text - high - contrast - muted">;
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
                <strong>{e.code}</strong> ({e.http_status}) - {e.message}"
              </li>            ))}          <div className="font - medium mb - 2">Error Codes</div>;"
          <ul className="list - disc pl - 5 text - sm text - high - contrast - muted">;
            {endpoint.errors.map ((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.http_status}) - {e.message}</li>;
          </ul>;
        </div>)}
    </div>);
=======
        <div />
          <div className='font-medium mb-2' />Rate Limits</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted' />}
            {endpoint.rateLimits.map((r, idx) => (}
              <li key={idx} />
                {r.tier}: {r.limitPerMinute}/min;
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>
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
<<<<<<< HEAD
}
<<<<<<< HEAD
            {endpoint.visibility}<div>;
        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>;
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>;
        <div className="mt-2 inline-flex items-center gap-2 text-xs">;
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>;
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>;
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>;
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
          requiresAuth={{(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (<div>;
          <div className="font-medium mb-2">Rate Limits</div>;
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">;
            (endpoint.auth |[]).includes('jwt') |;
            (endpoint.auth |[]).includes('wallet')}
        />;
      </div>;
      {endpoint.rateLimits && endpoint.rateLimits.length > 0 && (<div>;
          <div className='font-medium mb-2'>Rate Limits</div>;
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>;
            {endpoint.rateLimits.map((r, idx) => (<li key={idx}>;
                {r.tier}: {r.limitPerMinute}/min;
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>;
            ))}</ul>;
        </div>;
      )}{endpoint && endpoint.rateLimits && endpoint && endpoint.rateLimits.length > 0 && (<div>;
          <div className='font-medium mb-2'>Rate Limits</div>;
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>;
            {endpoint && endpoint.rateLimits.map((r, idx) => (<li key={idx}>;
                {r && r.tier}: {r && r.limitPerMinute}/min;
                {r && r.burst ? `, burst ${r && r.burst}` : ''}
              </li>            ))}      </div>;
      {(endpoint && endpoint.rateLimits && endpoint && endpoint.rateLimits.length > 0) && (<div>;
          <div className="font-medium mb-2">Rate Limits</div>;
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">;
            {endpoint && endpoint.rateLimits.map((r, idx) => (<li key={idx}>{r && r.tier}: {r && r.limitPerMinute}/min{r && r.burst ? `, burst ${r && r.burst}` : ''}</li>;))}
          </ul>;
        </div>;
      )}
      )}
    </div>;
  )}
          </ul>;
        </div>;
      )}
        <div>;
          <div className="font-medium mb-2">Error Codes</div>;
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">;
            {endpoint.errors.map((e) => (<li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>;
            ))}</ul>;
        </div>;
      )}{endpoint.errors && endpoint.errors.length > 0 && ({endpoint.errors && endpoint.errors.length > 0 && (<div>;
          <div className='font-medium mb-2'>Error Codes</div>;
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>;
            {endpoint.errors.map(e => (<li key={e.code}>;
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>            ))}          <div className="font-medium mb-2">Error Codes</div>;
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">;
            {endpoint.errors.map((e) => (<li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>;
            ))}</li>;
            ))}
          </ul>;
        </div>;
      )}
    </div>;
  ))}
    </div>;
  )}
          </span>        </div>;
      </div>;
      <div>;
        <div className='font - medium mb - 2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>        <div className="text - xl font - semibold text - high - contrast">{endpoint.title}</div>;
        <div className="text - sm text - high - contrast - muted">{endpoint.description}</div>;
        <div className="mt - 2 inline - flex items - center gap - 2 text - xs">;
          <span className="px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.method}</span>;
          <code className="px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.path}</code>;
          <span className="px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary">{endpoint.visibility}</span>;
      </div>;
      <div>;
        <div className='font - medium mb - 2'>Code Examples</div>        <div className="font - medium mb - 2">Code Examples</div>;
        <CodeSamples samples={endpoint.samples} />;
      </div>;
      <div>;
        <div className='font - medium mb - 2'>Try It</div>;
        <TryItConsole;
          method={endpoint.method}
          path={endpoint.path}
          requires_auth={(endpoint.auth || []).includes ('jwt') ||;
            (endpoint.auth || []).includes ('wallet')}
        />;
      </div>;
      {endpoint.rate_limits && endpoint.rate_limits.length > 0 && (<div>;
          <div className='font - medium mb - 2'>Rate Limits</div>;
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.rate_limits.map ((r, idx) => (<li key={idx}>;
                {r.tier}: {r.limitPerMinute}/min;
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>            ))}      </div>;
      {(endpoint.rate_limits && endpoint.rate_limits.length > 0) && (<div>;
          <div className="font - medium mb - 2">Rate Limits</div>;
          <ul className="list - disc pl - 5 text - sm text - high - contrast - muted">;
            {endpoint.rate_limits.map ((r, idx) => (<li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>))}
          </ul>;
        </div>)}
      {endpoint.errors && endpoint.errors.length > 0 && (<div>;
          <div className='font - medium mb - 2'>Error Codes</div>;
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.errors.map (e => (<li key={e.code}>;
                <strong>{e.code}</strong> ({e.http_status}) - {e.message}
              </li>            ))}          <div className="font - medium mb - 2">Error Codes</div>;
          <ul className="list - disc pl - 5 text - sm text - high - contrast - muted">;
            {endpoint.errors.map ((e) => (<li key={e.code}><strong>{e.code}</strong> ({e.http_status}) - {e.message}</li>;
          </ul>;
        </div>)}
    </div>);

}


}
    </div>)}}
  )
}
=======
<<<<<<< HEAD

"
=======
</div> </div> <div>) ) 
}</ul> </div>) 
}{
  endpoint.errors.map ( (e) => (<li key= {
  e.code 
}><strong> {
  e.code 
}</strong> ({
  e.httpStatus 
}) - {
  e.message 
}</li>) ) 
}</ul> </div>) 
}</div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

origin/cursor/automate-test-improve-and-merge-code-2533
}
<<<<<<< HEAD
'"`
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
