import React from 'react',
import CodeSamples from './CodeSamples',
import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';
<<<<<<< HEAD
<<<<<<< HEAD
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className="space-y-4">
=======
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function EndpointDetail({
  endpoint
}: {
  endpoint: EndpointSpec;
}) {
    <div className='space-y-4'>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
<<<<<<< HEAD
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
=======
          </span>
        </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      </div>
      <div>
<<<<<<< HEAD
        <div className='font-medium mb-2'>Code Examples</div>        <div className="font-medium mb-2">Code Examples</div>
=======
        <div className='font-medium mb-2'>Code Examples</div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <CodeSamples samples={endpoint.samples} />
      </div>
      <div>
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
<<<<<<< HEAD
              </li>            ))}      </div>
      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
=======
              </li>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            ))}
          </ul>
        </div>
      )}
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      {endpoint.errors && endpoint.errors.length > 0 && (
        <div>
          <div className='font-medium mb-2'>Error Codes</div>
          <ul className='list-disc pl-5 text-sm text-high-contrast-muted'>
            {endpoint.errors.map(e => (
              <li key={e.code}>
                <strong>{e.code}</strong> ({e.httpStatus}) - {e.message}
<<<<<<< HEAD
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
=======
              </li>
            ))}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </ul>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
