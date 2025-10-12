'use client';
import { Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Loading Spinner from './components/Loading Spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const About Page = lazy(() => import('./about/page'));
const Contact Page = lazy(() => import('./contact/page'));
const Services Page = lazy(() => import('./services/page'));
const Pricing Page = lazy(() => import('./pricing/page'));
const Case Studies Page = lazy(() => import('./case-studies/page'));
const Blog Page = lazy(() => import('./blog/page'));
const Team Page = lazy(() => import('./team/page'));
const Careers Page = lazy(() => import('./careers/page'));
const Privacy Page = lazy(() => import('./privacy/page'));
const Terms Page = lazy(() => import('./terms/page'));
const Cookies Page = lazy(() => import('./cookies/page'));
// A I Services
const Ai Services Page = lazy(() => import('./ai-services/page'));
const Ai Marketing Page = lazy(() => import('./ai-marketing/page'));
const Ai Automation Page = lazy(() => import('./ai-automation/page'));
const Ai Healthcare Page = lazy(() => import('./ai-healthcare/page'));
const Ai Fintech Page = lazy(() => import('./ai-fintech/page'));
const Ai Content Generation Page = lazy(() => import('./ai-content-generation/page'));
const Ai Data Analytics Page = lazy(() => import('./ai-data-analytics/page'));
const Ai Cybersecurity Page = lazy(() => import('./ai-cybersecurity/page'));
const Ai Workflow Automation Page = lazy(() => import('./ai-workflow-automation/page'));
const Ai Customer Support Page = lazy(() => import('./ai-customer-support/page'));
const Ai Sales Automation Page = lazy(() => import('./ai-sales-automation/page'));
const Ai Data Visualization Page = lazy(() => import('./ai-data-visualization/page'));
// I T Services
const It Services Page = lazy(() => import('./it-services/page'));
const It Infrastructure Page = lazy(() => import('./it-infrastructure/page'));
const It Support Page = lazy(() => import('./it-support/page'));
const Cloud Infrastructure Page = lazy(() => import('./cloud-infrastructure/page'));
const Cybersecurity Page = lazy(() => import('./cybersecurity/page'));
// Emerging Technologies
const Blockchain Page = lazy(() => import('./blockchain/page'));
const Quantum Computing Page = lazy(() => import('./quantum-computing/page'));
const Io T Edge Computing Page = lazy(() => import('./iot-edge-computing/page'));
const A R V R Solutions Page = lazy(() => import('./ar-vr-solutions/page'));
const Autonomous Systems Page = lazy(() => import('./autonomous-systems/page'));
// Micro Saa S
const Micro Saas Page = lazy(() => import('./micro-saas/page'));
const A I Content Writer Pro Page = lazy(() => import('./micro-saas/ai-content-writer-pro/page'));
// Support Pages
const Docs Page = lazy(() => import('./docs/page'));
const Api Docs Page = lazy(() => import('./api-docs/page'));
const Support Page = lazy(() => import('./support/page'));
const Status Page = lazy(() => import('./status/page'));
const Consultation Page = lazy(() => import('./consultation/page'));
// Loading component
const App Loading Spinner = () => <L oading Spinner />;
function App() {
  return (
    <E rror Boundary />
      <H elmet Provider />
        <B rowser Router />
          <d iv class Name="A pp" />
            <P erformance Monitor / />
            <A ccessibility Enhancer / />
            <S uspense fallback="{<App Loading Spinner" / />}>
              <R outes />
                {/* Main Pages */}
                <R oute path="/" element="{<HomePage" / />} />
                <R oute path="/about" element="{<About Page" / />} />
                <R oute path="/contact" element="{<Contact Page" / />} />
                <R oute path="/services" element="{<Services Page" / />} />
                <R oute path="/pricing" element="{<Pricing Page" / />} />
                <R oute path="/case-studies" element="{<Case Studies Page" / />} />
                <R oute path="/blog" element="{<Blog Page" / />} />
                <R oute path="/team" element="{<Team Page" / />} />
                <R oute path="/careers" element="{<Careers Page" / />} />
                <R oute path="/privacy" element="{<Privacy Page" / />} />
                <R oute path="/terms" element="{<Terms Page" / />} />
                <R oute path="/cookies" element="{<Cookies Page" / />} />

                {/* A I Services */}
                <R oute path="/ai-services" element="{<Ai Services Page" / />} />
                <R oute path="/ai-marketing" element="{<Ai Marketing Page" / />} />
                <R oute path="/ai-automation" element="{<Ai Automation Page" / />} />
                <R oute path="/ai-healthcare" element="{<Ai Healthcare Page" / />} />
                <R oute path="/ai-fintech" element="{<Ai Fintech Page" / />} />
                <R oute path="/ai-content-generation" element="{<Ai Content Generation Page" / />} />
                <R oute path="/ai-data-analytics" element="{<Ai Data Analytics Page" / />} />
                <R oute path="/ai-cybersecurity" element="{<Ai Cybersecurity Page" / />} />
                <R oute path="/ai-workflow-automation" element="{<Ai Workflow Automation Page" / />} />
                <R oute path="/ai-customer-support" element="{<Ai Customer Support Page" / />} />
                <R oute path="/ai-sales-automation" element="{<Ai Sales Automation Page" / />} />
                <R oute path="/ai-data-visualization" element="{<Ai Data Visualization Page" / />} />

                {/* I T Services */}
                <R oute path="/it-services" element="{<It Services Page" / />} />
                <R oute path="/it-infrastructure" element="{<It Infrastructure Page" / />} />
                <R oute path="/it-support" element="{<It Support Page" / />} />
                <R oute path="/cloud-infrastructure" element="{<Cloud Infrastructure Page" / />} />
                <R oute path="/cybersecurity" element="{<Cybersecurity Page" / />} />

                {/* Emerging Technologies */}
                <R oute path="/blockchain" element="{<Blockchain Page" / />} />
                <R oute path="/quantum-computing" element="{<Quantum Computing Page" / />} />
                <R oute path="/iot-edge-computing" element="{<Io T Edge Computing Page" / />} />
                <R oute path="/ar-vr-solutions" element="{<A R V R Solutions Page" / />} />
                <R oute path="/autonomous-systems" element="{<Autonomous Systems Page" / />} />

                {/* Micro Saa S */}
                <R oute path="/micro-saas" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/ai-content-writer-pro" element="{<A I Content Writer Pro Page" / />} />
                <R oute path="/micro-saas/analytics-dashboard" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/appointment-scheduler" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/chat-analytics" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/content-generator" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/document-processor" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/email-marketing" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/expense-tracker" element="{<Micro Saas Page" / />} />
                <R oute path="/micro-saas/inventory-management" element="{<Micro Saas Page" / />} />
                
                {/* A I Services Dropdown */}
                <R oute path="/ai-content-generator" element="{<Ai Content Generation Page" / />} />
                <R oute path="/ai-chatbot-builder" element="{<Ai Services Page" / />} />
                <R oute path="/ai-analytics-dashboard" element="{<Ai Data Analytics Page" / />} />
                <R oute path="/ai-email-assistant" element="{<Ai Services Page" / />} />
                
                {/* Additional A I Services */}
                <R oute path="/ai-voice-assistant" element="{<Ai Services Page" / />} />
                <R oute path="/ai-crm-assistant" element="{<Ai Services Page" / />} />
                <R oute path="/ai-social-media-manager" element="{<Ai Services Page" / />} />
                <R oute path="/ai-email-marketing-automation" element="{<Ai Services Page" / />} />
                <R oute path="/ai-project-manager" element="{<Ai Services Page" / />} />
                <R oute path="/ai-3 d-generation" element="{<Ai Services Page" / />} />
                <R oute path="/ai-drug-discovery-pro" element="{<Ai Services Page" / />} />
                <R oute path="/ai-automated-reporting" element="{<Ai Services Page" / />} />
                <R oute path="/ai-password-manager" element="{<Ai Services Page" / />} />
                <R oute path="/ai-task-manager" element="{<Ai Services Page" / />} />
                
                {/* I T Services Dropdown */}
                <R oute path="/web-development" element="{<It Services Page" / />} />
                <R oute path="/mobile-development" element="{<It Services Page" / />} />
                <R oute path="/devops" element="{<It Services Page" / />} />
                <R oute path="/cloud-migration" element="{<It Services Page" / />} />
                
                {/* Additional I T Services */}
                <R oute path="/api-development" element="{<It Services Page" / />} />
                <R oute path="/database-management" element="{<It Services Page" / />} />
                <R oute path="/network-infrastructure" element="{<It Services Page" / />} />
                <R oute path="/system-integration" element="{<It Services Page" / />} />
                <R oute path="/data-analytics" element="{<It Services Page" / />} />
                <R oute path="/iot-solutions" element="{<It Services Page" / />} />
                <R oute path="/blockchain-development" element="{<It Services Page" / />} />
                
                {/* 5 G Services */}
                <R oute path="/5 g-network-infrastructure" element="{<It Services Page" / />} />
                <R oute path="/5 g-iot-solutions" element="{<It Services Page" / />} />
                <R oute path="/5 g-edge-computing" element="{<It Services Page" / />} />
                <R oute path="/5 g-private-networks" element="{<It Services Page" / />} />
                <R oute path="/5 g-mobile-applications" element="{<It Services Page" / />} />
                <R oute path="/5 g-data-analytics" element="{<It Services Page" / />} />
                
                {/* Additional Services */}
                <R oute path="/business-intelligence" element="{<It Services Page" / />} />
                <R oute path="/5 g-implementation" element="{<It Services Page" / />} />
                
                {/* Company Pages */}
                <R oute path="/team" element="{<Team Page" / />} />
                <R oute path="/careers" element="{<Careers Page" / />} />
                <R oute path="/case-studies" element="{<Case Studies Page" / />} />
                <R oute path="/blog" element="{<Blog Page" / />} />
                {/* Support Pages */}
                <R oute path="/docs" element="{<Docs Page" / />} />
                <R oute path="/api-docs" element="{<Api Docs Page" / />} />
                <R oute path="/support" element="{<Support Page" / />} />
                <R oute path="/status" element="{<Status Page" / />} />
                <R oute path="/consultation" element="{<Consultation Page" / />} />
              </R outes>
            </S uspense>
          </d iv>
        </B rowser Router>
      </H elmet Provider>
    </E rror Boundary>
  );
};

export default App;
