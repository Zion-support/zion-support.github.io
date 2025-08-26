import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppHeader } from './layout/AppHeader.tsx'
import { Footer } from './components/Footer.tsx'
import { ChatAssistant } from './components/ChatAssistant.tsx'

const Home = React.lazy(() => import('./pages/Home.tsx'))
const About = React.lazy(() => import('./pages/Index.tsx'))
const Contact = React.lazy(() => import('./pages/Contact.tsx'))
const Blog = React.lazy(() => import('./pages/Blog.tsx'))
const BlogPost = React.lazy(() => import('./pages/BlogPost.tsx'))
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'))
const Careers = React.lazy(() => import('./pages/Careers.tsx'))
const Privacy = React.lazy(() => import('./pages/GDPR.tsx'))
const Terms = React.lazy(() => import('./pages/Index.tsx'))
const Sitemap = React.lazy(() => import('./components/SitemapPage.tsx'))
const GreenIT = React.lazy(() => import('./pages/GreenIT.tsx'))

const LoadingSpinner = () => (
	<div className="flex items-center justify-center min-h-screen">
		<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-zion-cyan"></div>
	</div>
)

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-background">
				<AppHeader />
				<main className="flex-1">
					<Suspense fallback={<LoadingSpinner />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/blog/:slug" element={<BlogPost />} />
							<Route path="/faq" element={<FAQ />} />
							<Route path="/careers" element={<Careers />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route path="/terms" element={<Terms />} />
							<Route path="/sitemap" element={<Sitemap />} />
							<Route path="/green-it" element={<GreenIT />} />
						</Routes>
					</Suspense>
				</main>
				<Footer />
				<ChatAssistant />
			</div>
		</Router>
	)
}

export default App