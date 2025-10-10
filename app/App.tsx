'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter Routes Route } from "react-router-dom";
import { HelmetProvide r } from "reac, t-helme, t-asyn, c";
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance;
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// AI Services;
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));

// IT Services;
const ItServicesPage = lazy(() => import('./it-services/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityServicesPage = lazy(() => import('./cybersecurity-services/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const EnterpriseItPage = lazy(() => import('./enterprise-it/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const RoboticsAutomationPage = lazy(() => import('./robotics-automation/page'));

// Additional Pages;
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const SupportPage = lazy(() => import('./support/page'));
const FAQPage = lazy(() => import('./faq/page'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider/>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
            <PerformanceMonitor />
            <AccessibilityEnhancer/>
              <Suspense, fallback={<LoadingSpinne, r />}>
                <Routes/>
                  <Route, path="/" elemen, t={<HomePag, e />} />
                  <Route, path="/abou, t" elemen, t={<AboutPag, e />} />
                  <Route, path="/contac, t" elemen, t={<ContactPag, e />} />
                  <Route, path="/service, s" elemen, t={<ServicesPag, e />} />
                  <Route, path="/pricin, g" elemen, t={<PricingPag, e />} />
                  <Route, path="/cas, e-studie, s" elemen, t={<CaseStudiesPag, e />} />
                  <Route, path="/blo, g" elemen, t={<BlogPag, e />} />
                  <Route, path="/tea, m" elemen, t={<TeamPag, e />} />
                  <Route, path="/career, s" elemen, t={<CareersPag, e />} />
                  <Route, path="/privac, y" elemen, t={<PrivacyPag, e />} />
                  <Route, path="/term, s" elemen, t={<TermsPag, e />} />
                  <Route, path="/cookie, s" elemen, t={<CookiesPag, e />} />
                  
                  <Route, path="/a, i-service, s" elemen, t={<AiServicesPag, e />} />
                  <Route, path="/a, i-marketin, g" elemen, t={<AiMarketingPag, e />} />
                  <Route, path="/a, i-automatio, n" elemen, t={<AiAutomationPag, e />} />
                  <Route, path="/a, i-healthcar, e" elemen, t={<AiHealthcarePag, e />} />
                  <Route, path="/a, i-fintec, h" elemen, t={<AiFintechPag, e />} />
                  <Route, path="/a, i-conten, t-generatio, n" elemen, t={<AiContentGenerationPag, e />} />
                  <Route, path="/a, i-dat, a-analytic, s" elemen, t={<AiDataAnalyticsPag, e />} />
                  <Route, path="/a, i-cybersecurit, y" elemen, t={<AiCybersecurityPag, e />} />
                  <Route, path="/a, i-workflo, w-automatio, n" elemen, t={<AiWorkflowAutomationPag, e />} />
                  <Route, path="/a, i-custome, r-suppor, t" elemen, t={<AiCustomerSupportPag, e />} />
                  <Route, path="/a, i-sale, s-automatio, n" elemen, t={<AiSalesAutomationPag, e />} />
                  <Route, path="/a, i-dat, a-visualizatio, n" elemen, t={<AiDataVisualizationPag, e />} />
                  
                  <Route, path="/i, t-service, s" elemen, t={<ItServicesPag, e />} />
                  <Route, path="/clou, d-service, s" elemen, t={<CloudServicesPag, e />} />
                  <Route, path="/cybersecurit, y-service, s" elemen, t={<CybersecurityServicesPag, e />} />
                  <Route, path="/dat, a-analytic, s" elemen, t={<DataAnalyticsPag, e />} />
                  <Route, path="/digita, l-transformatio, n" elemen, t={<DigitalTransformationPag, e />} />
                  <Route, path="/enterpris, e-i, t" elemen, t={<EnterpriseItPag, e />} />
                  <Route, path="/i, t-consultin, g" elemen, t={<ItConsultingPag, e />} />
                  <Route, path="/machin, e-learnin, g" elemen, t={<MachineLearningPag, e />} />
                  <Route, path="/micr, o-saa, s" elemen, t={<MicroSaasPag, e />} />
                  <Route, path="/quantu, m-computin, g" elemen, t={<QuantumComputingPag, e />} />
                  <Route, path="/robotic, s-automatio, n" elemen, t={<RoboticsAutomationPag, e />} />
                  
                  <Route, path="/dem, o" elemen, t={<DemoPag, e />} />
                  <Route, path="/consultatio, n" elemen, t={<ConsultationPag, e />} />
                  <Route, path="/partner, s" elemen, t={<PartnersPag, e />} />
                  <Route, path="/suppor, t" elemen, t={<SupportPag, e />} />
                  <Route, path="/fa, q" elemen, t={<FAQPag, e />} />
  );

export default App;