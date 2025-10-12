import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))

// Dynamic route loader component
const DynamicPage = ({ pagePath }) => {
  const PageComponent = React.lazy(() => import(`./app/${pagePath}/page.tsx`))
  return <PageComponent />
}

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                                <Route path="/5g-data-analytics" element={<DynamicPage pagePath="5g-data-analytics" />} />
                <Route path="/5g-edge-computing" element={<DynamicPage pagePath="5g-edge-computing" />} />
                <Route path="/5g-implementation" element={<DynamicPage pagePath="5g-implementation" />} />
                <Route path="/5g-iot-solutions" element={<DynamicPage pagePath="5g-iot-solutions" />} />
                <Route path="/5g-mobile-applications" element={<DynamicPage pagePath="5g-mobile-applications" />} />
                <Route path="/5g-network-infrastructure" element={<DynamicPage pagePath="5g-network-infrastructure" />} />
                <Route path="/5g-private-networks" element={<DynamicPage pagePath="5g-private-networks" />} />
                <Route path="/about" element={<DynamicPage pagePath="about" />} />
                <Route path="/accessibility" element={<DynamicPage pagePath="accessibility" />} />
                <Route path="/accessibility-page" element={<DynamicPage pagePath="accessibility-page" />} />
                <Route path="/ai-3d-generation" element={<DynamicPage pagePath="ai-3d-generation" />} />
                <Route path="/ai-accounting-assistant" element={<DynamicPage pagePath="ai-accounting-assistant" />} />
                <Route path="/ai-agricultural-intelligence-pro" element={<DynamicPage pagePath="ai-agricultural-intelligence-pro" />} />
                <Route path="/ai-analytics" element={<DynamicPage pagePath="ai-analytics" />} />
                <Route path="/ai-analytics-dashboard" element={<DynamicPage pagePath="ai-analytics-dashboard" />} />
                <Route path="/ai-api-management" element={<DynamicPage pagePath="ai-api-management" />} />
                <Route path="/ai-api-manager" element={<DynamicPage pagePath="ai-api-manager" />} />
                <Route path="/ai-automated-reporting" element={<DynamicPage pagePath="ai-automated-reporting" />} />
                <Route path="/ai-automated-testing" element={<DynamicPage pagePath="ai-automated-testing" />} />
                <Route path="/ai-automation" element={<DynamicPage pagePath="ai-automation" />} />
                <Route path="/ai-autonomous-systems" element={<DynamicPage pagePath="ai-autonomous-systems" />} />
                <Route path="/ai-blockchain-analytics" element={<DynamicPage pagePath="ai-blockchain-analytics" />} />
                <Route path="/ai-blockchain-solutions" element={<DynamicPage pagePath="ai-blockchain-solutions" />} />
                <Route path="/ai-business-intelligence" element={<DynamicPage pagePath="ai-business-intelligence" />} />
                <Route path="/ai-chatbot-builder" element={<DynamicPage pagePath="ai-chatbot-builder" />} />
                <Route path="/ai-chatbot-enterprise" element={<DynamicPage pagePath="ai-chatbot-enterprise" />} />
                <Route path="/ai-climate-prediction-engine" element={<DynamicPage pagePath="ai-climate-prediction-engine" />} />
                <Route path="/ai-climate-solutions-pro" element={<DynamicPage pagePath="ai-climate-solutions-pro" />} />
                <Route path="/ai-cloud-infrastructure" element={<DynamicPage pagePath="ai-cloud-infrastructure" />} />
                <Route path="/ai-code-assistant" element={<DynamicPage pagePath="ai-code-assistant" />} />
                <Route path="/ai-code-generation" element={<DynamicPage pagePath="ai-code-generation" />} />
                <Route path="/ai-code-security-auditor" element={<DynamicPage pagePath="ai-code-security-auditor" />} />
                <Route path="/ai-computer-vision" element={<DynamicPage pagePath="ai-computer-vision" />} />
                <Route path="/ai-content-delivery-network" element={<DynamicPage pagePath="ai-content-delivery-network" />} />
                <Route path="/ai-content-generation" element={<DynamicPage pagePath="ai-content-generation" />} />
                <Route path="/ai-content-generation-pro" element={<DynamicPage pagePath="ai-content-generation-pro" />} />
                <Route path="/ai-content-generator" element={<DynamicPage pagePath="ai-content-generator" />} />
                <Route path="/ai-content-management" element={<DynamicPage pagePath="ai-content-management" />} />
                <Route path="/ai-content-moderation" element={<DynamicPage pagePath="ai-content-moderation" />} />
                <Route path="/ai-content-studio" element={<DynamicPage pagePath="ai-content-studio" />} />
                <Route path="/ai-content-writer" element={<DynamicPage pagePath="ai-content-writer" />} />
                <Route path="/ai-conversation-analytics" element={<DynamicPage pagePath="ai-conversation-analytics" />} />
                <Route path="/ai-conversational-ai" element={<DynamicPage pagePath="ai-conversational-ai" />} />
                <Route path="/ai-crm" element={<DynamicPage pagePath="ai-crm" />} />
                <Route path="/ai-crm-assistant" element={<DynamicPage pagePath="ai-crm-assistant" />} />
                <Route path="/ai-customer-churn" element={<DynamicPage pagePath="ai-customer-churn" />} />
                <Route path="/ai-customer-service" element={<DynamicPage pagePath="ai-customer-service" />} />
                <Route path="/ai-customer-support" element={<DynamicPage pagePath="ai-customer-support" />} />
                <Route path="/ai-customer-support-bot" element={<DynamicPage pagePath="ai-customer-support-bot" />} />
                <Route path="/ai-customer-support-chatbot" element={<DynamicPage pagePath="ai-customer-support-chatbot" />} />
                <Route path="/ai-cyber-defense-matrix" element={<DynamicPage pagePath="ai-cyber-defense-matrix" />} />
                <Route path="/ai-cybersecurity" element={<DynamicPage pagePath="ai-cybersecurity" />} />
                <Route path="/ai-cybersecurity-monitor" element={<DynamicPage pagePath="ai-cybersecurity-monitor" />} />
                <Route path="/ai-cybersecurity-suite" element={<DynamicPage pagePath="ai-cybersecurity-suite" />} />
                <Route path="/ai-data-analytics" element={<DynamicPage pagePath="ai-data-analytics" />} />
                <Route path="/ai-data-visualization" element={<DynamicPage pagePath="ai-data-visualization" />} />
                <Route path="/ai-design-studio" element={<DynamicPage pagePath="ai-design-studio" />} />
                <Route path="/ai-document-intelligence" element={<DynamicPage pagePath="ai-document-intelligence" />} />
                <Route path="/ai-document-processing" element={<DynamicPage pagePath="ai-document-processing" />} />
                <Route path="/ai-document-processor" element={<DynamicPage pagePath="ai-document-processor" />} />
                <Route path="/ai-document-scanner" element={<DynamicPage pagePath="ai-document-scanner" />} />
                <Route path="/ai-drug-discovery-pro" element={<DynamicPage pagePath="ai-drug-discovery-pro" />} />
                <Route path="/ai-ecommerce-assistant" element={<DynamicPage pagePath="ai-ecommerce-assistant" />} />
                <Route path="/ai-ecommerce-optimizer" element={<DynamicPage pagePath="ai-ecommerce-optimizer" />} />
                <Route path="/ai-ecommerce-solutions" element={<DynamicPage pagePath="ai-ecommerce-solutions" />} />
                <Route path="/ai-edge-computing" element={<DynamicPage pagePath="ai-edge-computing" />} />
                <Route path="/ai-education" element={<DynamicPage pagePath="ai-education" />} />
                <Route path="/ai-email-assistant" element={<DynamicPage pagePath="ai-email-assistant" />} />
                <Route path="/ai-email-marketing" element={<DynamicPage pagePath="ai-email-marketing" />} />
                <Route path="/ai-email-marketing-automation" element={<DynamicPage pagePath="ai-email-marketing-automation" />} />
                <Route path="/ai-energy" element={<DynamicPage pagePath="ai-energy" />} />
                <Route path="/ai-energy-grid-management-pro" element={<DynamicPage pagePath="ai-energy-grid-management-pro" />} />
                <Route path="/ai-enterprise-solutions" element={<DynamicPage pagePath="ai-enterprise-solutions" />} />
                <Route path="/ai-expense-tracker" element={<DynamicPage pagePath="ai-expense-tracker" />} />
                <Route path="/ai-fashion-design" element={<DynamicPage pagePath="ai-fashion-design" />} />
                <Route path="/ai-financial-advisor" element={<DynamicPage pagePath="ai-financial-advisor" />} />
                <Route path="/ai-financial-analyzer" element={<DynamicPage pagePath="ai-financial-analyzer" />} />
                <Route path="/ai-financial-crime-detection-pro" element={<DynamicPage pagePath="ai-financial-crime-detection-pro" />} />
                <Route path="/ai-financial-forecasting" element={<DynamicPage pagePath="ai-financial-forecasting" />} />
                <Route path="/ai-financial-planner" element={<DynamicPage pagePath="ai-financial-planner" />} />
                <Route path="/ai-financial-services" element={<DynamicPage pagePath="ai-financial-services" />} />
                <Route path="/ai-fintech" element={<DynamicPage pagePath="ai-fintech" />} />
                <Route path="/ai-fitness-coach" element={<DynamicPage pagePath="ai-fitness-coach" />} />
                <Route path="/ai-fraud-detection" element={<DynamicPage pagePath="ai-fraud-detection" />} />
                <Route path="/ai-health-tracker" element={<DynamicPage pagePath="ai-health-tracker" />} />
                <Route path="/ai-healthcare" element={<DynamicPage pagePath="ai-healthcare" />} />
                <Route path="/ai-healthcare-diagnostics" element={<DynamicPage pagePath="ai-healthcare-diagnostics" />} />
                <Route path="/ai-healthcare-solutions" element={<DynamicPage pagePath="ai-healthcare-solutions" />} />
                <Route path="/ai-holographic-workspace" element={<DynamicPage pagePath="ai-holographic-workspace" />} />
                <Route path="/ai-hr" element={<DynamicPage pagePath="ai-hr" />} />
                <Route path="/ai-hr-assistant" element={<DynamicPage pagePath="ai-hr-assistant" />} />
                <Route path="/ai-hr-solutions" element={<DynamicPage pagePath="ai-hr-solutions" />} />
                <Route path="/ai-image-recognition" element={<DynamicPage pagePath="ai-image-recognition" />} />
                <Route path="/ai-infrastructure-monitoring" element={<DynamicPage pagePath="ai-infrastructure-monitoring" />} />
                <Route path="/ai-insurance" element={<DynamicPage pagePath="ai-insurance" />} />
                <Route path="/ai-integration-services" element={<DynamicPage pagePath="ai-integration-services" />} />
                <Route path="/ai-inventory-management" element={<DynamicPage pagePath="ai-inventory-management" />} />
                <Route path="/ai-inventory-manager" element={<DynamicPage pagePath="ai-inventory-manager" />} />
                <Route path="/ai-investment-optimizer" element={<DynamicPage pagePath="ai-investment-optimizer" />} />
                <Route path="/ai-invoice-generator" element={<DynamicPage pagePath="ai-invoice-generator" />} />
                <Route path="/ai-iot-analytics" element={<DynamicPage pagePath="ai-iot-analytics" />} />
                <Route path="/ai-knowledge-management" element={<DynamicPage pagePath="ai-knowledge-management" />} />
                <Route path="/ai-lead-generation" element={<DynamicPage pagePath="ai-lead-generation" />} />
                <Route path="/ai-lead-scoring" element={<DynamicPage pagePath="ai-lead-scoring" />} />
                <Route path="/ai-learning-platform" element={<DynamicPage pagePath="ai-learning-platform" />} />
                <Route path="/ai-legal" element={<DynamicPage pagePath="ai-legal" />} />
                <Route path="/ai-legal-assistant" element={<DynamicPage pagePath="ai-legal-assistant" />} />
                <Route path="/ai-legal-research-pro" element={<DynamicPage pagePath="ai-legal-research-pro" />} />
                <Route path="/ai-load-testing" element={<DynamicPage pagePath="ai-load-testing" />} />
                <Route path="/ai-logo-designer" element={<DynamicPage pagePath="ai-logo-designer" />} />
                <Route path="/ai-manufacturing" element={<DynamicPage pagePath="ai-manufacturing" />} />
                <Route path="/ai-marketing" element={<DynamicPage pagePath="ai-marketing" />} />
                <Route path="/ai-meeting-assistant" element={<DynamicPage pagePath="ai-meeting-assistant" />} />
                <Route path="/ai-meeting-transcriber" element={<DynamicPage pagePath="ai-meeting-transcriber" />} />
                <Route path="/ai-mental-health-companion" element={<DynamicPage pagePath="ai-mental-health-companion" />} />
                <Route path="/ai-ml" element={<DynamicPage pagePath="ai-ml" />} />
                <Route path="/ai-ml-platform" element={<DynamicPage pagePath="ai-ml-platform" />} />
                <Route path="/ai-mobile-app-builder" element={<DynamicPage pagePath="ai-mobile-app-builder" />} />
                <Route path="/ai-mobile-app-development" element={<DynamicPage pagePath="ai-mobile-app-development" />} />
                <Route path="/ai-mobile-builder" element={<DynamicPage pagePath="ai-mobile-builder" />} />
                <Route path="/ai-music-composition" element={<DynamicPage pagePath="ai-music-composition" />} />
                <Route path="/ai-neural-interface" element={<DynamicPage pagePath="ai-neural-interface" />} />
                <Route path="/ai-neural-memory-assistant" element={<DynamicPage pagePath="ai-neural-memory-assistant" />} />
                <Route path="/ai-nlp" element={<DynamicPage pagePath="ai-nlp" />} />
                <Route path="/ai-ops" element={<DynamicPage pagePath="ai-ops" />} />
                <Route path="/ai-password-manager" element={<DynamicPage pagePath="ai-password-manager" />} />
                <Route path="/ai-predictive-analytics" element={<DynamicPage pagePath="ai-predictive-analytics" />} />
                <Route path="/ai-predictive-maintenance" element={<DynamicPage pagePath="ai-predictive-maintenance" />} />
                <Route path="/ai-predictive-modeling" element={<DynamicPage pagePath="ai-predictive-modeling" />} />
                <Route path="/ai-project-management" element={<DynamicPage pagePath="ai-project-management" />} />
                <Route path="/ai-project-manager" element={<DynamicPage pagePath="ai-project-manager" />} />
                <Route path="/ai-quality-assurance" element={<DynamicPage pagePath="ai-quality-assurance" />} />
                <Route path="/ai-quantum-computing" element={<DynamicPage pagePath="ai-quantum-computing" />} />
                <Route path="/ai-quantum-computing-simulator" element={<DynamicPage pagePath="ai-quantum-computing-simulator" />} />
                <Route path="/ai-quantum-financial-oracle" element={<DynamicPage pagePath="ai-quantum-financial-oracle" />} />
                <Route path="/ai-quantum-optimization" element={<DynamicPage pagePath="ai-quantum-optimization" />} />
                <Route path="/ai-quantum-task-optimizer" element={<DynamicPage pagePath="ai-quantum-task-optimizer" />} />
                <Route path="/ai-real-estate" element={<DynamicPage pagePath="ai-real-estate" />} />
                <Route path="/ai-recommendation-engine" element={<DynamicPage pagePath="ai-recommendation-engine" />} />
                <Route path="/ai-recruitment-assistant" element={<DynamicPage pagePath="ai-recruitment-assistant" />} />
                <Route path="/ai-robotics" element={<DynamicPage pagePath="ai-robotics" />} />
                <Route path="/ai-sales-automation" element={<DynamicPage pagePath="ai-sales-automation" />} />
                <Route path="/ai-scheduler" element={<DynamicPage pagePath="ai-scheduler" />} />
                <Route path="/ai-security-monitor" element={<DynamicPage pagePath="ai-security-monitor" />} />
                <Route path="/ai-sentiment-analysis" element={<DynamicPage pagePath="ai-sentiment-analysis" />} />
                <Route path="/ai-sentiment-analyzer" element={<DynamicPage pagePath="ai-sentiment-analyzer" />} />
                <Route path="/ai-seo-optimizer" element={<DynamicPage pagePath="ai-seo-optimizer" />} />
                <Route path="/ai-services" element={<DynamicPage pagePath="ai-services" />} />
                <Route path="/ai-services/business-intelligence" element={<DynamicPage pagePath="ai-services/business-intelligence" />} />
                <Route path="/ai-services/content-generation" element={<DynamicPage pagePath="ai-services/content-generation" />} />
                <Route path="/ai-services/customer-experience" element={<DynamicPage pagePath="ai-services/customer-experience" />} />
                <Route path="/ai-services/document-processing" element={<DynamicPage pagePath="ai-services/document-processing" />} />
                <Route path="/ai-services/energy-management" element={<DynamicPage pagePath="ai-services/energy-management" />} />
                <Route path="/ai-services/fraud-detection" element={<DynamicPage pagePath="ai-services/fraud-detection" />} />
                <Route path="/ai-services/hr-analytics" element={<DynamicPage pagePath="ai-services/hr-analytics" />} />
                <Route path="/ai-services/marketing-automation" element={<DynamicPage pagePath="ai-services/marketing-automation" />} />
                <Route path="/ai-services/predictive-maintenance" element={<DynamicPage pagePath="ai-services/predictive-maintenance" />} />
                <Route path="/ai-services/process-automation" element={<DynamicPage pagePath="ai-services/process-automation" />} />
                <Route path="/ai-services/quality-assurance" element={<DynamicPage pagePath="ai-services/quality-assurance" />} />
                <Route path="/ai-services/supply-chain" element={<DynamicPage pagePath="ai-services/supply-chain" />} />
                <Route path="/ai-smart-calendar" element={<DynamicPage pagePath="ai-smart-calendar" />} />
                <Route path="/ai-smart-contract-auditor" element={<DynamicPage pagePath="ai-smart-contract-auditor" />} />
                <Route path="/ai-smart-home-controller" element={<DynamicPage pagePath="ai-smart-home-controller" />} />
                <Route path="/ai-social-media-manager" element={<DynamicPage pagePath="ai-social-media-manager" />} />
                <Route path="/ai-social-media-scheduler" element={<DynamicPage pagePath="ai-social-media-scheduler" />} />
                <Route path="/ai-solutions" element={<DynamicPage pagePath="ai-solutions" />} />
                <Route path="/ai-space-mission-optimizer" element={<DynamicPage pagePath="ai-space-mission-optimizer" />} />
                <Route path="/ai-space-technology" element={<DynamicPage pagePath="ai-space-technology" />} />
                <Route path="/ai-space-technology-pro" element={<DynamicPage pagePath="ai-space-technology-pro" />} />
                <Route path="/ai-speech-synthesis" element={<DynamicPage pagePath="ai-speech-synthesis" />} />
                <Route path="/ai-stock-portfolio-manager" element={<DynamicPage pagePath="ai-stock-portfolio-manager" />} />
                <Route path="/ai-supply-chain" element={<DynamicPage pagePath="ai-supply-chain" />} />
                <Route path="/ai-supply-chain-ai" element={<DynamicPage pagePath="ai-supply-chain-ai" />} />
                <Route path="/ai-supply-chain-optimization-pro" element={<DynamicPage pagePath="ai-supply-chain-optimization-pro" />} />
                <Route path="/ai-task-manager" element={<DynamicPage pagePath="ai-task-manager" />} />
                <Route path="/ai-telepathic-interface" element={<DynamicPage pagePath="ai-telepathic-interface" />} />
                <Route path="/ai-time-tracker" element={<DynamicPage pagePath="ai-time-tracker" />} />
                <Route path="/ai-transportation" element={<DynamicPage pagePath="ai-transportation" />} />
                <Route path="/ai-video-analysis" element={<DynamicPage pagePath="ai-video-analysis" />} />
                <Route path="/ai-video-editor" element={<DynamicPage pagePath="ai-video-editor" />} />
                <Route path="/ai-video-generation" element={<DynamicPage pagePath="ai-video-generation" />} />
                <Route path="/ai-video-generator" element={<DynamicPage pagePath="ai-video-generator" />} />
                <Route path="/ai-vision" element={<DynamicPage pagePath="ai-vision" />} />
                <Route path="/ai-voice-assistant" element={<DynamicPage pagePath="ai-voice-assistant" />} />
                <Route path="/ai-voice-cloning" element={<DynamicPage pagePath="ai-voice-cloning" />} />
                <Route path="/ai-voice-cloning-studio" element={<DynamicPage pagePath="ai-voice-cloning-studio" />} />
                <Route path="/ai-voice-processing" element={<DynamicPage pagePath="ai-voice-processing" />} />
                <Route path="/ai-voice-solutions" element={<DynamicPage pagePath="ai-voice-solutions" />} />
                <Route path="/ai-voice-synthesis" element={<DynamicPage pagePath="ai-voice-synthesis" />} />
                <Route path="/ai-website-builder" element={<DynamicPage pagePath="ai-website-builder" />} />
                <Route path="/ai-workflow-automation" element={<DynamicPage pagePath="ai-workflow-automation" />} />
                <Route path="/ai-writing-assistant" element={<DynamicPage pagePath="ai-writing-assistant" />} />
                <Route path="/analytics" element={<DynamicPage pagePath="analytics" />} />
                <Route path="/analytics-tools" element={<DynamicPage pagePath="analytics-tools" />} />
                <Route path="/api" element={<DynamicPage pagePath="api" />} />
                <Route path="/api-development" element={<DynamicPage pagePath="api-development" />} />
                <Route path="/api-development-advanced" element={<DynamicPage pagePath="api-development-advanced" />} />
                <Route path="/api-docs" element={<DynamicPage pagePath="api-docs" />} />
                <Route path="/ar-vr-platform" element={<DynamicPage pagePath="ar-vr-platform" />} />
                <Route path="/ar-vr-solutions" element={<DynamicPage pagePath="ar-vr-solutions" />} />
                <Route path="/automation" element={<DynamicPage pagePath="automation" />} />
                <Route path="/autonomous-systems" element={<DynamicPage pagePath="autonomous-systems" />} />
                <Route path="/backup-recovery" element={<DynamicPage pagePath="backup-recovery" />} />
                <Route path="/blockchain" element={<DynamicPage pagePath="blockchain" />} />
                <Route path="/blockchain-development" element={<DynamicPage pagePath="blockchain-development" />} />
                <Route path="/blockchain-integration-services" element={<DynamicPage pagePath="blockchain-integration-services" />} />
                <Route path="/blockchain-web3" element={<DynamicPage pagePath="blockchain-web3" />} />
                <Route path="/blog" element={<DynamicPage pagePath="blog" />} />
                <Route path="/business-apps" element={<DynamicPage pagePath="business-apps" />} />
                <Route path="/business-intelligence" element={<DynamicPage pagePath="business-intelligence" />} />
                <Route path="/careers" element={<DynamicPage pagePath="careers" />} />
                <Route path="/case-studies" element={<DynamicPage pagePath="case-studies" />} />
                <Route path="/cloud-cost-optimization" element={<DynamicPage pagePath="cloud-cost-optimization" />} />
                <Route path="/cloud-infrastructure" element={<DynamicPage pagePath="cloud-infrastructure" />} />
                <Route path="/cloud-infrastructure-manager" element={<DynamicPage pagePath="cloud-infrastructure-manager" />} />
                <Route path="/cloud-migration" element={<DynamicPage pagePath="cloud-migration" />} />
                <Route path="/cloud-migration-advanced" element={<DynamicPage pagePath="cloud-migration-advanced" />} />
                <Route path="/cloud-migration-services" element={<DynamicPage pagePath="cloud-migration-services" />} />
                <Route path="/cloud-native-development" element={<DynamicPage pagePath="cloud-native-development" />} />
                <Route path="/cloud-native-security" element={<DynamicPage pagePath="cloud-native-security" />} />
                <Route path="/cloud-security" element={<DynamicPage pagePath="cloud-security" />} />
                <Route path="/cloud-services" element={<DynamicPage pagePath="cloud-services" />} />
                <Route path="/community" element={<DynamicPage pagePath="community" />} />
                <Route path="/compliance" element={<DynamicPage pagePath="compliance" />} />
                <Route path="/compliance-automation" element={<DynamicPage pagePath="compliance-automation" />} />
                <Route path="/computer-vision" element={<DynamicPage pagePath="computer-vision" />} />
                <Route path="/consultation" element={<DynamicPage pagePath="consultation" />} />
                <Route path="/contact" element={<DynamicPage pagePath="contact" />} />
                <Route path="/cookie-policy" element={<DynamicPage pagePath="cookie-policy" />} />
                <Route path="/cookies" element={<DynamicPage pagePath="cookies" />} />
                <Route path="/crm-lite" element={<DynamicPage pagePath="crm-lite" />} />
                <Route path="/custom-development" element={<DynamicPage pagePath="custom-development" />} />
                <Route path="/cybersecurity" element={<DynamicPage pagePath="cybersecurity" />} />
                <Route path="/cybersecurity-advanced" element={<DynamicPage pagePath="cybersecurity-advanced" />} />
                <Route path="/cybersecurity-solutions" element={<DynamicPage pagePath="cybersecurity-solutions" />} />
                <Route path="/cybersecurity-suite" element={<DynamicPage pagePath="cybersecurity-suite" />} />
                <Route path="/data-analytics" element={<DynamicPage pagePath="data-analytics" />} />
                <Route path="/data-center" element={<DynamicPage pagePath="data-center" />} />
                <Route path="/data-engineering" element={<DynamicPage pagePath="data-engineering" />} />
                <Route path="/data-protection" element={<DynamicPage pagePath="data-protection" />} />
                <Route path="/data-visualization" element={<DynamicPage pagePath="data-visualization" />} />
                <Route path="/database" element={<DynamicPage pagePath="database" />} />
                <Route path="/database-management" element={<DynamicPage pagePath="database-management" />} />
                <Route path="/database-services" element={<DynamicPage pagePath="database-services" />} />
                <Route path="/demo" element={<DynamicPage pagePath="demo" />} />
                <Route path="/developer-tools" element={<DynamicPage pagePath="developer-tools" />} />
                <Route path="/devops" element={<DynamicPage pagePath="devops" />} />
                <Route path="/devops-advanced" element={<DynamicPage pagePath="devops-advanced" />} />
                <Route path="/devops-cicd" element={<DynamicPage pagePath="devops-cicd" />} />
                <Route path="/devops-solutions" element={<DynamicPage pagePath="devops-solutions" />} />
                <Route path="/digital-transformation" element={<DynamicPage pagePath="digital-transformation" />} />
                <Route path="/digital-twin-platform" element={<DynamicPage pagePath="digital-twin-platform" />} />
                <Route path="/disaster-recovery-advanced" element={<DynamicPage pagePath="disaster-recovery-advanced" />} />
                <Route path="/docs" element={<DynamicPage pagePath="docs" />} />
                <Route path="/e-commerce-development" element={<DynamicPage pagePath="e-commerce-development" />} />
                <Route path="/edge-computing" element={<DynamicPage pagePath="edge-computing" />} />
                <Route path="/email-marketing-automation" element={<DynamicPage pagePath="email-marketing-automation" />} />
                <Route path="/email-optimizer" element={<DynamicPage pagePath="email-optimizer" />} />
                <Route path="/enterprise" element={<DynamicPage pagePath="enterprise" />} />
                <Route path="/enterprise-integration" element={<DynamicPage pagePath="enterprise-integration" />} />
                <Route path="/enterprise-security" element={<DynamicPage pagePath="enterprise-security" />} />
                <Route path="/enterprise-solutions" element={<DynamicPage pagePath="enterprise-solutions" />} />
                <Route path="/expense-tracker" element={<DynamicPage pagePath="expense-tracker" />} />
                <Route path="/financial-it" element={<DynamicPage pagePath="financial-it" />} />
                <Route path="/gdpr" element={<DynamicPage pagePath="gdpr" />} />
                <Route path="/gdpr-compliance" element={<DynamicPage pagePath="gdpr-compliance" />} />
                <Route path="/health" element={<DynamicPage pagePath="health" />} />
                <Route path="/healthcare-it" element={<DynamicPage pagePath="healthcare-it" />} />
                <Route path="/help" element={<DynamicPage pagePath="help" />} />
                <Route path="/innovation-labs" element={<DynamicPage pagePath="innovation-labs" />} />
                <Route path="/intelligent-database-migration" element={<DynamicPage pagePath="intelligent-database-migration" />} />
                <Route path="/intelligent-email-infrastructure" element={<DynamicPage pagePath="intelligent-email-infrastructure" />} />
                <Route path="/investors" element={<DynamicPage pagePath="investors" />} />
                <Route path="/iot" element={<DynamicPage pagePath="iot" />} />
                <Route path="/iot-development" element={<DynamicPage pagePath="iot-development" />} />
                <Route path="/iot-edge" element={<DynamicPage pagePath="iot-edge" />} />
                <Route path="/iot-edge-computing" element={<DynamicPage pagePath="iot-edge-computing" />} />
                <Route path="/iot-integration" element={<DynamicPage pagePath="iot-integration" />} />
                <Route path="/iot-platform" element={<DynamicPage pagePath="iot-platform" />} />
                <Route path="/it-asset-management" element={<DynamicPage pagePath="it-asset-management" />} />
                <Route path="/it-consulting" element={<DynamicPage pagePath="it-consulting" />} />
                <Route path="/it-infrastructure" element={<DynamicPage pagePath="it-infrastructure" />} />
                <Route path="/it-infrastructure-design" element={<DynamicPage pagePath="it-infrastructure-design" />} />
                <Route path="/it-infrastructure-solutions" element={<DynamicPage pagePath="it-infrastructure-solutions" />} />
                <Route path="/it-performance" element={<DynamicPage pagePath="it-performance" />} />
                <Route path="/it-project-management" element={<DynamicPage pagePath="it-project-management" />} />
                <Route path="/it-security-services" element={<DynamicPage pagePath="it-security-services" />} />
                <Route path="/it-services" element={<DynamicPage pagePath="it-services" />} />
                <Route path="/it-services/cloud-migration" element={<DynamicPage pagePath="it-services/cloud-migration" />} />
                <Route path="/it-services/cybersecurity-audit" element={<DynamicPage pagePath="it-services/cybersecurity-audit" />} />
                <Route path="/it-support" element={<DynamicPage pagePath="it-support" />} />
                <Route path="/it-training" element={<DynamicPage pagePath="it-training" />} />
                <Route path="/landing-page-builder" element={<DynamicPage pagePath="landing-page-builder" />} />
                <Route path="/machine-learning" element={<DynamicPage pagePath="machine-learning" />} />
                <Route path="/machine-learning-ops" element={<DynamicPage pagePath="machine-learning-ops" />} />
                <Route path="/managed-it" element={<DynamicPage pagePath="managed-it" />} />
                <Route path="/marketing-tools" element={<DynamicPage pagePath="marketing-tools" />} />
                <Route path="/micro-saas" element={<DynamicPage pagePath="micro-saas" />} />
                <Route path="/micro-saas-services" element={<DynamicPage pagePath="micro-saas-services" />} />
                <Route path="/micro-saas-services/ai-analytics-dashboard" element={<DynamicPage pagePath="micro-saas-services/ai-analytics-dashboard" />} />
                <Route path="/micro-saas-services/ai-chatbot-builder" element={<DynamicPage pagePath="micro-saas-services/ai-chatbot-builder" />} />
                <Route path="/micro-saas-services/ai-content-generator" element={<DynamicPage pagePath="micro-saas-services/ai-content-generator" />} />
                <Route path="/micro-saas-services/ai-email-assistant" element={<DynamicPage pagePath="micro-saas-services/ai-email-assistant" />} />
                <Route path="/micro-saas-services/ai-lead-generation" element={<DynamicPage pagePath="micro-saas-services/ai-lead-generation" />} />
                <Route path="/micro-saas/ai-content-writer" element={<DynamicPage pagePath="micro-saas/ai-content-writer" />} />
                <Route path="/micro-saas/ai-content-writer-pro" element={<DynamicPage pagePath="micro-saas/ai-content-writer-pro" />} />
                <Route path="/micro-saas/analytics-dashboard" element={<DynamicPage pagePath="micro-saas/analytics-dashboard" />} />
                <Route path="/micro-saas/appointment-scheduler" element={<DynamicPage pagePath="micro-saas/appointment-scheduler" />} />
                <Route path="/micro-saas/chat-analytics" element={<DynamicPage pagePath="micro-saas/chat-analytics" />} />
                <Route path="/micro-saas/content-generator" element={<DynamicPage pagePath="micro-saas/content-generator" />} />
                <Route path="/micro-saas/document-processor" element={<DynamicPage pagePath="micro-saas/document-processor" />} />
                <Route path="/micro-saas/email-marketing" element={<DynamicPage pagePath="micro-saas/email-marketing" />} />
                <Route path="/micro-saas/expense-tracker" element={<DynamicPage pagePath="micro-saas/expense-tracker" />} />
                <Route path="/micro-saas/inventory-management" element={<DynamicPage pagePath="micro-saas/inventory-management" />} />
                <Route path="/micro-saas/lead-scoring" element={<DynamicPage pagePath="micro-saas/lead-scoring" />} />
                <Route path="/micro-saas/seo-optimizer" element={<DynamicPage pagePath="micro-saas/seo-optimizer" />} />
                <Route path="/micro-saas/social-manager" element={<DynamicPage pagePath="micro-saas/social-manager" />} />
                <Route path="/micro-saas/support-bot" element={<DynamicPage pagePath="micro-saas/support-bot" />} />
                <Route path="/mobile-app-development" element={<DynamicPage pagePath="mobile-app-development" />} />
                <Route path="/mobile-development" element={<DynamicPage pagePath="mobile-development" />} />
                <Route path="/network-design" element={<DynamicPage pagePath="network-design" />} />
                <Route path="/network-infrastructure" element={<DynamicPage pagePath="network-infrastructure" />} />
                <Route path="/network-security" element={<DynamicPage pagePath="network-security" />} />
                <Route path="/network-solutions" element={<DynamicPage pagePath="network-solutions" />} />
                <Route path="/news" element={<DynamicPage pagePath="news" />} />
                <Route path="/nlp" element={<DynamicPage pagePath="nlp" />} />
                <Route path="/not-found" element={<DynamicPage pagePath="not-found" />} />
                <Route path="/offline" element={<DynamicPage pagePath="offline" />} />
                <Route path="/partners" element={<DynamicPage pagePath="partners" />} />
                <Route path="/penetration-testing" element={<DynamicPage pagePath="penetration-testing" />} />
                <Route path="/performance-optimization" element={<DynamicPage pagePath="performance-optimization" />} />
                <Route path="/press" element={<DynamicPage pagePath="press" />} />
                <Route path="/pricing" element={<DynamicPage pagePath="pricing" />} />
                <Route path="/privacy" element={<DynamicPage pagePath="privacy" />} />
                <Route path="/privacy-policy" element={<DynamicPage pagePath="privacy-policy" />} />
                <Route path="/process-automation" element={<DynamicPage pagePath="process-automation" />} />
                <Route path="/productivity" element={<DynamicPage pagePath="productivity" />} />
                <Route path="/project-management-pro" element={<DynamicPage pagePath="project-management-pro" />} />
                <Route path="/quantum-ai" element={<DynamicPage pagePath="quantum-ai" />} />
                <Route path="/quantum-computing" element={<DynamicPage pagePath="quantum-computing" />} />
                <Route path="/quantum-computing-solutions" element={<DynamicPage pagePath="quantum-computing-solutions" />} />
                <Route path="/robotics" element={<DynamicPage pagePath="robotics" />} />
                <Route path="/robotics-integration" element={<DynamicPage pagePath="robotics-integration" />} />
                <Route path="/search" element={<DynamicPage pagePath="search" />} />
                <Route path="/security" element={<DynamicPage pagePath="security" />} />
                <Route path="/security-automation" element={<DynamicPage pagePath="security-automation" />} />
                <Route path="/security-monitoring" element={<DynamicPage pagePath="security-monitoring" />} />
                <Route path="/security-monitoring-suite" element={<DynamicPage pagePath="security-monitoring-suite" />} />
                <Route path="/seo-optimizer" element={<DynamicPage pagePath="seo-optimizer" />} />
                <Route path="/services" element={<DynamicPage pagePath="services" />} />
                <Route path="/services-advertising" element={<DynamicPage pagePath="services-advertising" />} />
                <Route path="/sitemap" element={<DynamicPage pagePath="sitemap" />} />
                <Route path="/sitemap.xml" element={<DynamicPage pagePath="sitemap.xml" />} />
                <Route path="/sla" element={<DynamicPage pagePath="sla" />} />
                <Route path="/smart-analytics" element={<DynamicPage pagePath="smart-analytics" />} />
                <Route path="/smart-cities" element={<DynamicPage pagePath="smart-cities" />} />
                <Route path="/smart-city-infrastructure" element={<DynamicPage pagePath="smart-city-infrastructure" />} />
                <Route path="/smart-contract-security-audit" element={<DynamicPage pagePath="smart-contract-security-audit" />} />
                <Route path="/specialized-services" element={<DynamicPage pagePath="specialized-services" />} />
                <Route path="/status" element={<DynamicPage pagePath="status" />} />
                <Route path="/support" element={<DynamicPage pagePath="support" />} />
                <Route path="/system-admin" element={<DynamicPage pagePath="system-admin" />} />
                <Route path="/system-administration" element={<DynamicPage pagePath="system-administration" />} />
                <Route path="/system-integration" element={<DynamicPage pagePath="system-integration" />} />
                <Route path="/system-status" element={<DynamicPage pagePath="system-status" />} />
                <Route path="/task-manager-pro" element={<DynamicPage pagePath="task-manager-pro" />} />
                <Route path="/team" element={<DynamicPage pagePath="team" />} />
                <Route path="/terms" element={<DynamicPage pagePath="terms" />} />
                <Route path="/terms-of-service" element={<DynamicPage pagePath="terms-of-service" />} />
                <Route path="/test-simple" element={<DynamicPage pagePath="test-simple" />} />
                <Route path="/training" element={<DynamicPage pagePath="training" />} />
                <Route path="/web-development" element={<DynamicPage pagePath="web-development" />} />
                <Route path="/workflow-automation" element={<DynamicPage pagePath="workflow-automation" />} />
                <Route path="/zion-ai-accounting-assistant" element={<DynamicPage pagePath="zion-ai-accounting-assistant" />} />
                <Route path="/zion-ai-code-reviewer" element={<DynamicPage pagePath="zion-ai-code-reviewer" />} />
                <Route path="/zion-ai-content-moderation" element={<DynamicPage pagePath="zion-ai-content-moderation" />} />
                <Route path="/zion-ai-contract-analyzer" element={<DynamicPage pagePath="zion-ai-contract-analyzer" />} />
                <Route path="/zion-ai-customer-service-pro" element={<DynamicPage pagePath="zion-ai-customer-service-pro" />} />
                <Route path="/zion-ai-data-cleaner" element={<DynamicPage pagePath="zion-ai-data-cleaner" />} />
                <Route path="/zion-ai-document-ai" element={<DynamicPage pagePath="zion-ai-document-ai" />} />
                <Route path="/zion-ai-email-assistant" element={<DynamicPage pagePath="zion-ai-email-assistant" />} />
                <Route path="/zion-ai-energy-manager" element={<DynamicPage pagePath="zion-ai-energy-manager" />} />
                <Route path="/zion-ai-fraud-detector" element={<DynamicPage pagePath="zion-ai-fraud-detector" />} />
                <Route path="/zion-ai-marketing-automation" element={<DynamicPage pagePath="zion-ai-marketing-automation" />} />
                <Route path="/zion-ai-meeting-assistant" element={<DynamicPage pagePath="zion-ai-meeting-assistant" />} />
                <Route path="/zion-ai-predictive-maintenance" element={<DynamicPage pagePath="zion-ai-predictive-maintenance" />} />
                <Route path="/zion-ai-recruitment-pro" element={<DynamicPage pagePath="zion-ai-recruitment-pro" />} />
                <Route path="/zion-ai-seo-optimizer" element={<DynamicPage pagePath="zion-ai-seo-optimizer" />} />
                <Route path="/zion-ai-supply-chain-optimizer" element={<DynamicPage pagePath="zion-ai-supply-chain-optimizer" />} />
                <Route path="/zion-ai-survey-builder" element={<DynamicPage pagePath="zion-ai-survey-builder" />} />
                <Route path="/zion-ai-translator-pro" element={<DynamicPage pagePath="zion-ai-translator-pro" />} />
                <Route path="/zion-ai-video-editor" element={<DynamicPage pagePath="zion-ai-video-editor" />} />
                <Route path="/zion-analytics-pro" element={<DynamicPage pagePath="zion-analytics-pro" />} />
                <Route path="/zion-chat-ai" element={<DynamicPage pagePath="zion-chat-ai" />} />
                <Route path="/zion-cloud-vault" element={<DynamicPage pagePath="zion-cloud-vault" />} />
                <Route path="/zion-compliance-manager" element={<DynamicPage pagePath="zion-compliance-manager" />} />
                <Route path="/zion-content-studio" element={<DynamicPage pagePath="zion-content-studio" />} />
                <Route path="/zion-crm-intelligence" element={<DynamicPage pagePath="zion-crm-intelligence" />} />
                <Route path="/zion-customer-insights" element={<DynamicPage pagePath="zion-customer-insights" />} />
                <Route path="/zion-data-sync" element={<DynamicPage pagePath="zion-data-sync" />} />
                <Route path="/zion-email-automation" element={<DynamicPage pagePath="zion-email-automation" />} />
                <Route path="/zion-inventory-smart" element={<DynamicPage pagePath="zion-inventory-smart" />} />
                <Route path="/zion-invoice-genius" element={<DynamicPage pagePath="zion-invoice-genius" />} />
                <Route path="/zion-lead-magnet" element={<DynamicPage pagePath="zion-lead-magnet" />} />
                <Route path="/zion-performance-monitor" element={<DynamicPage pagePath="zion-performance-monitor" />} />
                <Route path="/zion-project-master" element={<DynamicPage pagePath="zion-project-master" />} />
                <Route path="/zion-security-shield" element={<DynamicPage pagePath="zion-security-shield" />} />
                <Route path="/zion-social-scheduler" element={<DynamicPage pagePath="zion-social-scheduler" />} />
                <Route path="/zion-workflow-automation" element={<DynamicPage pagePath="zion-workflow-automation" />} />
                
                {/* 404 Route */}
                <Route path="*" element={
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                      <p className="text-xl text-gray-300 mb-8">Page not found</p>
                      <a 
                        href="/" 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App