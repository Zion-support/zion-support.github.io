import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
	return (
		<div style={{ padding: 24 }}>
			<h1>Zion Tech Group</h1>
			<p>The future of Tech & AI Marketplace.</p>
			<nav>
				<Link to="/">Home</Link>
			</nav>
		</div>
	)
}

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	)
}