<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react';
import CodeSamples from './CodeSamples';


import TryItConsole from './TryItConsole';


  endpoint,
}: {;

  endpoint: EndpointSpec;
}) {


  return (


    <div className='space-y-4'>

      <div>
        <div className='text-xl font-semibold text-high-contrast'>
<<<<<<< HEAD
export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className="space-y-4">
      <div>
<div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

import TryItConsole from './TryItConsole';


  endpoint,
}: {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  endpoint: EndpointSpec;
}) {

  return (
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space-y-4'>

      <div>
        <div className='text-xl font-semibold text-high-contrast'>
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import { EndpointSpec } from '../../data / api - docs / types';
;
export default /**
 * EndpointDetail - Function description
 */
function EndpointDetail() {
    <div className='space - y-4'>;
      <div>;
        <div className='text - xl font - semibold text - high - contrast'>;
          {endpoint.title}
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
          <span className='px - 2 py - 0.5 rounded bg - high - contrast - tertiary border border - high - contrast - secondary'>;
            {endpoint.visibility}

export default function EndpointDetail({ endpoint }: { endpoint: EndpointSpec }) {
  return (
    <div className="space-y-4">

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div>
        <div className='font-medium mb-2'>Code Examples</div>        <CodeSamples samples={endpoint.samples} />
      </div>
      <div>        <div className="text-xl font-semibold text-high-contrast">{endpoint.title}</div>
        <div className="text-sm text-high-contrast-muted">{endpoint.description}</div>
        <div className="mt-2 inline-flex items-center gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.method}</span>
          <code className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.path}</code>
          <span className="px-2 py-0.5 rounded bg-high-contrast-tertiary border border-high-contrast-secondary">{endpoint.visibility}</span>
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TryItConsole
          method={endpoint && endpoint.method}
          path={endpoint && endpoint.path}
          requiresAuth={
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>
      </div>
      <div>
        <div className='font-medium mb-2'>Code Examples</div>        <div className="font-medium mb-2">Code Examples</div>
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
              </li>            ))}      </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="font-medium mb-2">Try It</div>
        <TryItConsole method={endpoint.method} path={endpoint.path} requiresAuth={(endpoint.auth || []).includes('jwt') || (endpoint.auth || []).includes('wallet')} />
      </div>


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {(endpoint.rateLimits && endpoint.rateLimits.length > 0) && (
        <div>
          <div className="font-medium mb-2">Rate Limits</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>

            (endpoint && endpoint.auth || []).includes('jwt') ||
            (endpoint && endpoint.auth || []).includes('wallet')
          }
        />;
      </div>;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



            ))}
<<<<<<< HEAD
=======
=======


=======

            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




          </ul>
        </div>
      )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </ul>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>

            ))}
<<<<<<< HEAD
<<<<<<< HEAD
      {(endpoint.errors && endpoint.errors.length > 0) && (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
          </ul>
        </div>
      )}
<<<<<<< HEAD
{(endpoint.errors && endpoint.errors.length > 0) && (
        <div>
          <div className="font-medium mb-2">Error Codes</div>
          <ul className="list-disc pl-5 text-sm text-high-contrast-muted">
            {endpoint.errors.map((e) => (
              <li key={e.code}><strong>{e.code}</strong> ({e.httpStatus}) - {e.message}</li>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}
          </ul>
        </div>
      )}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
          </ul>
        </div>
      )}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            ))}

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

            ))}

<<<<<<< HEAD
=======
=======
            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </ul>
        </div>
      )}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

  );
}

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

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
<<<<<<< HEAD
=======
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}

}

}
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
