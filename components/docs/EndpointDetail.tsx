import React from 'react';
import CodeSamples from './CodeSamples';
import TryItConsole from './TryItConsole';

export default function EndpointDetail(_{_endpoint}: {_endpoint: EndpointSpec}) {_return (
    <div className="space-y-4">
      <div>
        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{_endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{_endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{_endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{_endpoint.visibility}</span>
        </div>
      </div>

      <div>
        <div className="font-medium mb-2">Code Examples</div>
        <CodeSamples samples={_endpoint.samples} />
      </div>

      <div>
        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={_endpoint.method} path={_endpoint.path} requiresAuth={_(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>

      {_(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (_<div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.rateLimits.map((r, _idx) => (
              <li key={idx}>{_r.tier}: {_r.limitPerMinute}/min{_r.burst ? `, _burst ${r.burst}` : ''}</li>
            ))}
          </ul>
        </div>
      )}

      {_(endpoint.errors && endpoint.errors.length > 0) && (_<div>
          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{_e.code}</strong> ({_e.httpStatus}) - {_e.message}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}