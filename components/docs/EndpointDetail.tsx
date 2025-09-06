import React from 'react';
import CodeSamples from './CodeSamples';
import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';

export default function EndpointDetail({
  endpoint,
}: {
  endpoint: EndpointSpec;
}) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    <div className='space-y-4'>
      <div>
        <div className='text-xl font-semibold text-high-contrast'>
          {endpoint.title}
        </div>
        <div className='text-sm text-high-contrast-muted'>
          {endpoint.description}
        </div>
        <div className='mt-2 inline-flex items-center gap-2 text-xs'>
          <span className='px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>
            {endpoint.method}
          </span>
          <code className='px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>
            {endpoint.path}
          </code>
          <span className='px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>
            {endpoint.visibility}
          </span>        </div>
      </div>

      <div>
        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />
      </div>

      <div>
        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        </div>
      </div>

      <div>
<<<<<<< HEAD
        <div className='font-medium mb-2'>Code Examples</div>
=======
        <div className="font-medium mb-2">Code Examples</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <CodeSamples samples={endpoint.samples} />
      </div>

      <div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='font-medium mb-2'>Try It</div>
        <TryItConsole
          method={endpoint.method}
          path={endpoint.path}
          requiresAuth={
            (endpoint.auth || []).includes('jwt') ||
            (endpoint.auth || []).includes('wallet')
          }
        />
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>

      {endpoint.rateLimits && endpoint.rateLimits.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Rate Limits</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>
                {r.tier}: {r.limitPerMinute}/min
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>            ))}
=======
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
            ))}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </ul>
        </div>
      )}

      {endpoint.errors && endpoint.errors.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Error Codes</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.errors.map(e => (
              <li key={e.code}>
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}
              </li>            ))}
          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            ))}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </ul>
        </div>
      )}
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
