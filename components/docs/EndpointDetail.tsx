<<<<<<< HEAD
import React from 'react',
import CodeSamples from './CodeSamples',
=======
import React from 'react';
import CodeSamples from './CodeSamples';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';

export default function EndpointDetail({
<<<<<<< HEAD
  endpoint
}: {
=======
  endpoint,
}: {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  endpoint: EndpointSpec;
}) {
<<<<<<< HEAD
=======

  return (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
      <div>        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>
      </div>
      <div>
        <div className='font-medium mb-2'>Code Examples</div>        <div className="font-medium mb-2">Code Examples</div>
        <CodeSamples samples={endpoint.samples} />
      </div>
      <div>
<<<<<<< HEAD
        <div className='font-medium mb-2'>Try It</div>
        <TryItConsole
          method={endpoint.method}
          path={endpoint.path}
          requiresAuth={
            (endpoint.auth |[]).includes('jwt') |
            (endpoint.auth |[]).includes('wallet')
          }
        />
      </div>
      {endpoint.rateLimits && endpoint.rateLimits.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Rate Limits</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>
                {r.tier}: {r.limitPerMinute}/min
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>            ))}      </div>
      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
            ))}
<<<<<<< HEAD
          </ul>
        </div>
      )}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

            ))}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </ul>
        </div>
      )}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      {endpoint.errors && endpoint.errors.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Error Codes</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.errors.map(e => (
              <li key={e.code}>
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
<<<<<<< HEAD
=======

            ))}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          </ul>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
=======
}

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}