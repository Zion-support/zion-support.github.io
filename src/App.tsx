import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages that actually exist
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Support = React.lazy(() => import('./pages/Support'));
const News = React.lazy(() => import('./pages/News'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const InnovativeServicesShowcase = lazy(() => import('./pages/InnovativeServicesShowcase'));

// Service pages that exist
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const ConsultingServices = React.lazy(() => import('./pages/services/Consulting'));

function App() {
    return (
        <Router>
            <div className="App">
                <AppHeader />
                <main>
                    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/partners" element={<Partners />} />
                            <Route path="/sitemap" element={<Sitemap />} />
                            <Route path="/green-it" element={<GreenIT />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/support" element={<Support />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/white-papers" element={<WhitePapers />} />
                            <Route path="/talent-directory" element={<TalentDirectory />} />
                            <Route path="/ai-matcher" element={<AIMatcherPage />} />
                            <Route path="/innovative-services" element={<InnovativeServicesShowcase />} />
                            
                            {/* Service routes */}
                            <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                            <Route path="/services/consulting" element={<ConsultingServices />} />
                            
                            {/* Catch all route */}
                            <Route path="*" element={<Home />} />
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
