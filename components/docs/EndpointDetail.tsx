import React from 'react';
import CodeSamples from './CodeSamples';
import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function EndpointDetail({
  endpoint,
}: {
  endpoint: EndpointSpec;
}) {
<<<<<<< HEAD
=======
=======
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    <div className='space-y-4'>
      <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
          </span>        </div>
      </div>

      <div>
        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />
      </div>

      <div>
=======
          </span>
=======
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className="space-y-4">
      <div>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        </div>
      </div>

      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='font-medium mb-2'>Code Examples</div>
=======
        <div className="font-medium mb-2">Code Examples</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="font-medium mb-2">Code Examples</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <CodeSamples samples={endpoint.samples} />
      </div>

      <div>
<<<<<<< HEAD
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
=======
=======
        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      </div>

      {endpoint.rateLimits && endpoint.rateLimits.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Rate Limits</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.rateLimits.map((r, idx) => (
<<<<<<< HEAD
              <li key={idx}>
                {r.tier}: {r.limitPerMinute}/min
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>            ))}
=======
<<<<<<< HEAD
              <li key={idx}>
                {r.tier}: {r.limitPerMinute}/min
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>
=======
        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>

      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            ))}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </ul>
        </div>
      )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {endpoint.errors && endpoint.errors.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Error Codes</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.errors.map(e => (
              <li key={e.code}>
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}
<<<<<<< HEAD
              </li>            ))}
=======
              </li>
=======
      {(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
=======
      {(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            ))}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </ul>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
