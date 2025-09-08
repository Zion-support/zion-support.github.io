

import React from 'react';
import CodeSamples from './CodeSamples';


import TryItConsole from './TryItConsole';

  endpoint,
}: {;

  endpoint: EndpointSpec;
}) {

  return (
    <div className="space-y-4">


      <div>
      <div>'



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
          </ul>;
        </div>;
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
    </div>;
  );
}
        </div>
      </div>

      <div>
        <div className=&quot;font-medium mb-2&quot;>Code Examples</div>
        <CodeSamples samples={endpoint.samples} />
      </div>

      <div>
        <div className=&quot;font-medium mb-2&quot;>Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>

      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className=&quot;font-medium mb-2&quot;>Rate Limits</div>
          <ul className=&quot;list-disc pl-5 text-sm text-high-contrast-muted&quot;>
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>

            ))}
      {(endpoint.errors && endpoint.errors.length > 0) && (
            ))}
          </ul>
        </div>
      )}
        <div>
          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>

      {(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
          <div className=font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted>
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
            ))}
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  );
}
