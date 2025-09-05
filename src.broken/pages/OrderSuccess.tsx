<<<<<<< HEAD
import React from 'react',
import { useSearchParams, Link } from 'react-router-dom',

export default function OrderSuccess() {
  const [params] = useSearchParams(),
  const sessionId = params.get('session_id'),
=======
import React from 'react';

export default function OrderSuccess() {_const [params] = useSearchParams();
  const _sessionId = params.get('session_id');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;min-h-screen flex flex-col items-center justify-center p-6&quot;>
      <h1 className=&quot;text-2xl font-bold mb-4&quot;>Payment Successful</h1>
      {sessionId && <p className=&quot;mb-4&quot;>Session ID: {sessionId}</p>}
      <Link className=&quot;underline&quot; to=&quot;/&quot;>Return Home</Link>
    </div>
  )
}
