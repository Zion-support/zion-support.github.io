import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function Home(): JSX.Element {
	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-4">Zion Tech Group</h1>
			<p className="text-gray-600 mb-6">Welcome. Temporary minimal app to restore build.</p>
			<div className="space-x-4">
				<Link to="/blog" className="text-blue-600 underline">Blog</Link>
				<Link to="/contact" className="text-blue-600 underline">Contact</Link>
			</div>
		</main>
	)
}

function Blog(): JSX.Element {
	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold mb-2">Our Blog</h1>
			<p className="text-gray-600">Coming soon.</p>
		</main>
	)
}

function Contact(): JSX.Element {
	return (
		<main className="container mx-auto px-4 py-12">
			<h1 className="text-3xl font-bold mb-2">Contact Us</h1>
			<p className="text-gray-600">Get in touch with our team.</p>
		</main>
	)
}

export default function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</Router>
	)
}

