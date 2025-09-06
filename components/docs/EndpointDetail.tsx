import React from 'react',
import CodeSamples from './CodeSamples',
import React from 'react';
import CodeSamples from './CodeSamples';
import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';




<<<<<<< HEAD
export default function EndpointDetail({
  endpoint
}: {
  endpoint,
}: {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

import TryItConsole from './TryItConsole';


  endpoint,
}: {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  endpoint: EndpointSpec;
}) {

  return (


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    <div className='space-y-4'>

      <div>
        <div className='text-xl font-semibold text-high-contrast'>

      </div>
      <div>        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>

        </div>

      </div>
      <div>

        <div className="font-medium mb-2">Code Examples</div>

        <CodeSamples samples={endpoint.samples} />
      </div>
      <div>


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import CodeSamples from './CodeSamples';
import TryItConsole from './TryItConsole';
import { EndpointSpec } from '../../data/api-docs/types';
export default function EndpointDetail(): any ({;
  endpoint,;
}: {;
  endpoint: EndpointSpec;
}) {;
    <div className='space-y-4'>;
      <div>;
        <div className='text-xl font-semibold text-high-contrast'>;
          {endpoint && endpoint.title}
        </div>;
        <div className='text-sm text-high-contrast-muted'>;
          {endpoint && endpoint.description}
        </div>;
        <div className='mt-2 inline-flex items-center gap-2 text-xs'>;
          <span className='px-2 py-0 && 0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>;
            {endpoint && endpoint.method}
          </span>;
          <code className='px-2 py-0 && 0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>;
            {endpoint && endpoint.path}
          </code>;
          <span className='px-2 py-0 && 0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary'>;
            {endpoint && endpoint.visibility}
          </span>        </div>;
      </div>;
      <div>;
        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint && endpoint.samples} />;
      </div>;
      <div>        <div className="text-xl font-semibold text-high-contrast">{endpoint && endpoint.title}</div>;
        <div className="text-sm text-high-contrast-muted">{endpoint && endpoint.description}</div>;
        <div className="mt-2 inline-flex items-center gap-2 text-xs">;
          <span className="px-2 py-0 && 0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint && endpoint.method}</span>;
          <code className="px-2 py-0 && 0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint && endpoint.path}</code>;
          <span className="px-2 py-0 && 0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint && endpoint.visibility}</span>;
      </div>;
      <div>;
        <div className='font-medium mb-2'>Code Examples</div>        <div className="font-medium mb-2">Code Examples</div>;
        <CodeSamples samples={endpoint && endpoint.samples} />;
      </div>;
      <div>;
        <div className='font-medium mb-2'>Try It</div>;

        <TryItConsole
          method={endpoint && endpoint.method}
          path={endpoint && endpoint.path}
          requiresAuth={

        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>


      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>
<<<<<<< HEAD
=======

            (endpoint && endpoint.auth || []).includes('jwt') ||
            (endpoint && endpoint.auth || []).includes('wallet')
          }
        />;
      </div>;
=======


=======

            ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4





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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
          </ul>;
        </div>;
      )}


            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>

            ))}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

          </ul>
        </div>
      )}

{(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
<<<<<<< HEAD
=======
            ))}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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
              </li>            ))}          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

            ))}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          </ul>
        </div>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      )}
    </div>
  );

<<<<<<< HEAD

=======
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
          requires_auth={
            (endpoint.auth || []).includes ('jwt') ||;
            (endpoint.auth || []).includes ('wallet');
          }
        />;
      </div>;
      {endpoint.rate_limits && endpoint.rate_limits.length > 0 && (
        <div>;
          <div className='font - medium mb - 2'>Rate Limits</div>;
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.rate_limits.map ((r, idx) => (
              <li key={idx}>;
                {r.tier}: {r.limitPerMinute}/min;
                {r.burst ? `, burst ${r.burst}` : ''}
              </li>            ))}      </div>;
      {(endpoint.rate_limits && endpoint.rate_limits.length > 0) && (
        <div>;
          <div className="font - medium mb - 2">Rate Limits</div>;
          <ul className="list - disc pl - 5 text - sm text - high - contrast - muted">;
            {endpoint.rate_limits.map ((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>))}
          </ul>;
        </div>)}
      {endpoint.errors && endpoint.errors.length > 0 && (
        <div>;
          <div className='font - medium mb - 2'>Error Codes</div>;
          <ul className='list - disc pl - 5 text - sm text - high - contrast - muted'>;
            {endpoint.errors.map (e => (
              <li key={e.code}>;
                <strong>{e.code}</strong> ({e.http_status}) - {e.message}
              </li>            ))}          <div className="font - medium mb - 2">Error Codes</div>;
          <ul className="list - disc pl - 5 text - sm text - high - contrast - muted">;
            {endpoint.errors.map ((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.http_status}) - {e.message}</li>;
          </ul>;
        </div>)}
    </div>);
=======
  );
<<<<<<< HEAD
=======
}

=======

}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}


}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
