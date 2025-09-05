import React from 'react',
import CodeSamples from './CodeSamples',
import TryItConsole from './TryItConsole',
import { EndpointSpec } from '../../data/api-docs/types',
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className=&quot;space-y-4&quot;>
      <div>
        <div className=&quot;text-xl font-semibold text-high-contrast&quot;>{endpoint.title}</div>
        <div className=&quot;text-sm text-high-contrast-muted&quot;>{endpoint.description}</div>
        <div className=&quot;mt-2 inline-flex items-center gap-2 text-xs&quot;>
          <span className=&quot;px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary&quot;>{endpoint.method}</span>
          <code className=&quot;px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary&quot;>{endpoint.path}</code>
          <span className=&quot;px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary&quot;>{endpoint.visibility}</span>        </div>
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
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>            ))}
          </ul>
        </div>
      )}

      {(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
          <div className=&quot;font-medium mb-2&quot;>Error Codes</div>
          <ul className=&quot;list-disc pl-5 text-sm text-high-contrast-muted&quot;>            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{_e.code}</strong> ({_e.httpStatus}) - {_e.message}</li>
            ))}
          </ul>;
        </div>;
      )}
    </div>
  )
}