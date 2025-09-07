'use client'

import React from 'react'

<<<<<<< HEAD
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
=======
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<main className="p-8">
			<h1>Something went wrong</h1>
			<button onClick={() => reset()}>Try again</button>
		</main>
	)
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
