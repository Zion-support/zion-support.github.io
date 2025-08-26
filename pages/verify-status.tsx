import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Mail, AlertCircle, CheckCircle } from 'lucide-react';

export default function VerifyStatus() {
  const router = useRouter();
  const { email: emailParam } = router.query;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam);
    }
  }, [emailParam]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-center text-2xl font-bold">Verify Your Email</h1>
        {email && (
          <p className="text-center text-sm">
            We sent a verification link to <strong>{email}</strong>.
          </p>
        )}
        {message && (
          <div className="border border-green-500 bg-green-50 text-green-900 p-4 rounded-lg">
            <CheckCircle aria-hidden="true" className="h-4 w-4 inline mr-2" />
            {message}
          </div>
        )}
        {error && (
          <div className="border border-red-500 bg-red-50 text-red-900 p-4 rounded-lg">
            <AlertCircle aria-hidden="true" className="h-4 w-4 inline mr-2" />
            {error}
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
          />
        </div>
        <button
          type="button"
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          onClick={() => router.push('/register')}
        >
          Use Different Email
        </button>
      </div>
    </div>
  );
}
