'use client'

import React from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<main className="p-8">
			<h1>Something went wrong</h1>
			<button onClick={() => reset()}>Try again</button>
		</main>
	)
}
