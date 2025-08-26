import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface ErrorPageProps {
  statusCode?: number;
  err?: Error;
}

export default function ErrorPage({ statusCode = 500, err }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    if (err) {
      console.error('Error occurred:', err);
    }
  }, [err]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
      <p>Please try again later.</p>
      <button 
        onClick={() => router.push('/')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </button>
    </main>
  );
}
