import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import SiteSidebar from "./components/SiteSidebar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookiesPage from "./pages/Cookies";
import SitemapPage from "./pages/Sitemap";

const App: React.FC = () => {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50">
				<SiteHeader />
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 xl:grid-cols-[16rem_1fr] gap-8">
					<SiteSidebar />
					<div>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/solutions/*" element={<SolutionsPage />} />
							<Route path="/services/*" element={<ServicesPage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/contact" element={<ContactPage />} />
							<Route path="/blog/*" element={<BlogPage />} />
							<Route path="/case-studies" element={<CaseStudiesPage />} />
							<Route path="/resources" element={<Resources />} />
						<Route path="/partners" element={<Partners />} />
						<Route path="/pricing" element={<Pricing />} />
							<Route path="/privacy" element={<Privacy />} />
							<Route path="/terms" element={<Terms />} />
							<Route path="/cookies" element={<CookiesPage />} />
							<Route path="/sitemap" element={<SitemapPage />} />
							<Route
								path="*"
								element={
									<div className="min-h-[40vh] flex items-center justify-center">
										<div className="text-center">
											<h1 className="text-5xl font-bold text-gray-300 mb-3">404</h1>
											<p className="text-gray-600 mb-6">Page not found</p>
											<a href="/" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">Return Home</a>
										</div>
									</div>
								}
							/>
						</Routes>
					</div>
				</main>
				<SiteFooter />
			</div>
		</Router>
	);
};

export default App;