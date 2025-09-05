import React from 'react'
import Header from '../../components/Header'

export default function APIDocumentationPage() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<main className="container mx-auto px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">API Documentation</h1>
				<p className="text-gray-700">Refer to our endpoints and examples. This page has been simplified to restore build health.</p>
			</main>
		</div>
	)
}
