import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SiteHeader from './pages/basic/SiteHeader';
import SiteFooter from './pages/basic/SiteFooter';

const Home = React.lazy(() => import('./pages/basic/HomeSimple'));
const About = React.lazy(() => import('./pages/basic/AboutPage'));
const Contact = React.lazy(() => import('./pages/basic/ContactSimple'));
const Careers = React.lazy(() => import('./pages/basic/CareersSimple'));
const Solutions = React.lazy(() => import('./pages/basic/SolutionsSimple'));
const ResearchDevelopment = React.lazy(() => import('./pages/basic/ResearchDevelopment'));
const CaseStudies = React.lazy(() => import('./pages/basic/CaseStudiesSimple'));
const News = React.lazy(() => import('./pages/basic/NewsSimple'));
const Events = React.lazy(() => import('./pages/basic/EventsSimple'));
const ServicesIndex = React.lazy(() => import('./pages/basic/ServicesIndex'));
const ServicesAI = React.lazy(() => import('./pages/basic/ServicesAI'));
const ServicesCloud = React.lazy(() => import('./pages/basic/ServicesCloud'));
const ServicesCybersecurity = React.lazy(() => import('./pages/basic/ServicesCybersecurity'));
const ServicesInfrastructure = React.lazy(() => import('./pages/basic/ServicesInfrastructure'));
const ServicesTransformation = React.lazy(() => import('./pages/basic/ServicesTransformation'));
const ServicesConsulting = React.lazy(() => import('./pages/basic/ServicesConsulting'));
const Privacy = React.lazy(() => import('./pages/basic/PrivacySimple'));
const Terms = React.lazy(() => import('./pages/basic/TermsSimple'));

const App: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col bg-white">
			<SiteHeader />
			<main className="flex-1">
				<Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/careers" element={<Careers />} />
						<Route path="/solutions" element={<Solutions />} />
						<Route path="/research-development" element={<ResearchDevelopment />} />
						<Route path="/case-studies" element={<CaseStudies />} />
						<Route path="/news" element={<News />} />
						<Route path="/events" element={<Events />} />
						<Route path="/services" element={<ServicesIndex />} />
						<Route path="/services/ai" element={<ServicesAI />} />
						<Route path="/services/cloud" element={<ServicesCloud />} />
						<Route path="/services/cybersecurity" element={<ServicesCybersecurity />} />
						<Route path="/services/infrastructure" element={<ServicesInfrastructure />} />
						<Route path="/services/transformation" element={<ServicesTransformation />} />
						<Route path="/services/consulting" element={<ServicesConsulting />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/terms" element={<Terms />} />
					</Routes>
				</Suspense>
			</main>
			<SiteFooter />
		</div>
	);
};

export default App;