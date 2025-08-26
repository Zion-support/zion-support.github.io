import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages (only confirmed ones)
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Team = React.lazy(() => import('./pages/Team'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
				<AppHeader />
				<main className="flex-1">
					<Suspense fallback={<div />}> 
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/team" element={<Team />} />
							<Route path="/careers" element={<Careers />} />
							<Route path="/pricing" element={<Pricing />} />
							<Route path="/case-studies" element={<CaseStudies />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route path="/terms" element={<Terms />} />
							<Route path="/contact" element={<ContactPage />} />
							<Route path="/partners" element={<PartnersPage />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/blog/:slug" element={<BlogPost />} />
							<Route path="/sitemap" element={<Sitemap />} />
							<Route path="/faq" element={<FAQ />} />
						</Routes>
					</Suspense>
				</main>
				<Footer />
				<ChatAssistant />
			</div>
		</Router>
	);
}

export default App;