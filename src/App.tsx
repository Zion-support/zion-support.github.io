import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import InnovativeServices2025 from './pages/InnovativeServices2025';
import ComprehensivePricing2025 from './pages/ComprehensivePricing2025';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

// Legal Pages
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Service Pages
import AI from './pages/services/AI';
import Cloud from './pages/services/Cloud';
import Consulting from './pages/services/Consulting';
import Cybersecurity from './pages/services/Cybersecurity';
import Infrastructure from './pages/services/Infrastructure';
import Transformation from './pages/services/Transformation';

// AI Autonomous Service Pages
import AIAutonomousAnalytics from './pages/AIAutonomousAnalytics';
import AIAutonomousAPISecurity from './pages/AIAutonomousAPISecurity';
import AIAutonomousApplicationSecurity from './pages/AIAutonomousApplicationSecurity';
import AIAutonomousArchitecture from './pages/AIAutonomousArchitecture';
import AIAutonomousAudit from './pages/AIAutonomousAudit';
import AIAutonomousAutomation from './pages/AIAutonomousAutomation';
import AIAutonomousCloudSecurity from './pages/AIAutonomousCloudSecurity';
import AIAutonomousCodeReview from './pages/AIAutonomousCodeReview';
import AIAutonomousCompliance from './pages/AIAutonomousCompliance';
import AIAutonomousComplianceSecurity from './pages/AIAutonomousComplianceSecurity';
import AIAutonomousContainerSecurity from './pages/AIAutonomousContainerSecurity';
import AIAutonomousCreativeDirector from './pages/AIAutonomousCreativeDirector';
import AIAutonomousCreativity from './pages/AIAutonomousCreativity';
import AIAutonomousCustomerService from './pages/AIAutonomousCustomerService';
import AIAutonomousData from './pages/AIAutonomousData';
import AIAutonomousDataSecurity from './pages/AIAutonomousDataSecurity';
import AIAutonomousDatabaseSecurity from './pages/AIAutonomousDatabaseSecurity';
import AIAutonomousDecisionEngine from './pages/AIAutonomousDecisionEngine';
import AIAutonomousDecisionPlatform from './pages/AIAutonomousDecisionPlatform';
import AIAutonomousDesign from './pages/AIAutonomousDesign';
import AIAutonomousDevOps from './pages/AIAutonomousDevOps';
import AIAutonomousDevOpsSecurity from './pages/AIAutonomousDevOpsSecurity';
import AIAutonomousDevelopment from './pages/AIAutonomousDevelopment';
import AIAutonomousDiscovery from './pages/AIAutonomousDiscovery';
import AIAutonomousEdgeSecurity from './pages/AIAutonomousEdgeSecurity';
import AIAutonomousEducationProfessor from './pages/AIAutonomousEducationProfessor';
import AIAutonomousEngineering from './pages/AIAutonomousEngineering';
import AIAutonomousFinance from './pages/AIAutonomousFinance';
import AIAutonomousForensics from './pages/AIAutonomousForensics';
import AIAutonomousGovernance from './pages/AIAutonomousGovernance';
import AIAutonomousHealthcarePhysician from './pages/AIAutonomousHealthcarePhysician';
import AIAutonomousHybridSecurity from './pages/AIAutonomousHybridSecurity';
import AIAutonomousIdentitySecurity from './pages/AIAutonomousIdentitySecurity';
import AIAutonomousIncidentResponse from './pages/AIAutonomousIncidentResponse';
import AIAutonomousInfrastructureSecurity from './pages/AIAutonomousInfrastructureSecurity';
import AIAutonomousInnovation from './pages/AIAutonomousInnovation';
import AIAutonomousIntegration from './pages/AIAutonomousIntegration';
import AIAutonomousInvention from './pages/AIAutonomousInvention';
import AIAutonomousIOTSecurity from './pages/AIAutonomousIOTSecurity';
import AIAutonomousLearning from './pages/AIAutonomousLearning';
import AIAutonomousLearningSystem from './pages/AIAutonomousLearningSystem';
import AIAutonomousLegalCounsel from './pages/AIAutonomousLegalCounsel';
import AIAutonomousLogistics from './pages/AIAutonomousLogistics';
import AIAutonomousMalwareAnalysis from './pages/AIAutonomousMalwareAnalysis';
import AIAutonomousManagement from './pages/AIAutonomousManagement';
import AIAutonomousManufacturing from './pages/AIAutonomousManufacturing';
import AIAutonomousMarketing from './pages/AIAutonomousMarketing';
import AIAutonomousMicroserviceSecurity from './pages/AIAutonomousMicroserviceSecurity';
import AIAutonomousMobileSecurity from './pages/AIAutonomousMobileSecurity';
import AIAutonomousMonitoring from './pages/AIAutonomousMonitoring';
import AIAutonomousMonitoringSecurity from './pages/AIAutonomousMonitoringSecurity';
import AIAutonomousNetworkSecurity from './pages/AIAutonomousNetworkSecurity';
import AIAutonomousOptimization from './pages/AIAutonomousOptimization';
import AIAutonomousOrchestration from './pages/AIAutonomousOrchestration';
import AIAutonomousPenetrationTesting from './pages/AIAutonomousPenetrationTesting';
import AIAutonomousPlanning from './pages/AIAutonomousPlanning';
import AIAutonomousPrediction from './pages/AIAutonomousPrediction';
import AIAutonomousQualityAssurance from './pages/AIAutonomousQualityAssurance';
import AIAutonomousReasoning from './pages/AIAutonomousReasoning';
import AIAutonomousRecommendation from './pages/AIAutonomousRecommendation';
import AIAutonomousResearch from './pages/AIAutonomousResearch';
import AIAutonomousRiskManagement from './pages/AIAutonomousRiskManagement';
import AIAutonomousRobotics from './pages/AIAutonomousRobotics';
import AIAutonomousScientificResearcher from './pages/AIAutonomousScientificResearcher';
import AIAutonomousSecurity from './pages/AIAutonomousSecurity';
import AIAutonomousServerlessSecurity from './pages/AIAutonomousServerlessSecurity';
import AIAutonomousSoftwareEngineer from './pages/AIAutonomousSoftwareEngineer';
import AIAutonomousSpeech from './pages/AIAutonomousSpeech';
import AIAutonomousSynthesis from './pages/AIAutonomousSynthesis';
import AIAutonomousSystemsPlatform from './pages/AIAutonomousSystemsPlatform';
import AIAutonomousTesting from './pages/AIAutonomousTesting';
import AIAutonomousThreatDetection from './pages/AIAutonomousThreatDetection';
import AIAutonomousThreatIntelligence from './pages/AIAutonomousThreatIntelligence';
import AIAutonomousTrading from './pages/AIAutonomousTrading';
import AIAutonomousTranslation from './pages/AIAutonomousTranslation';
import AIAutonomousVirtualAssistant from './pages/AIAutonomousVirtualAssistant';
import AIAutonomousVision from './pages/AIAutonomousVision';
import AIAutonomousVulnerabilityAssessment from './pages/AIAutonomousVulnerabilityAssessment';
import AIAutonomousWebSecurity from './pages/AIAutonomousWebSecurity';
import AIAutonomousWorkflow from './pages/AIAutonomousWorkflow';
import AIAutonomousWriting from './pages/AIAutonomousWriting';
import AIAutonomousZeroTrustSecurity from './pages/AIAutonomousZeroTrustSecurity';

// Additional Pages
import Careers from './pages/Careers';
import ComprehensivePricing from './pages/ComprehensivePricing';
import ServicesShowcase from './pages/ServicesShowcase';
import AIConsumerWillingnessToTry from './pages/AIConsumerWillingnessToTry';
import AIConsumerWillingnessToUse from './pages/AIConsumerWillingnessToUse';

// Sitemap Component
import Sitemap from './components/Sitemap';

// Comprehensive Services Showcase
import ComprehensiveServicesShowcase from './components/ComprehensiveServicesShowcase';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
            <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricing2025 />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Service Category Pages */}
            <Route path="/services/ai" element={<AI />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/infrastructure" element={<Infrastructure />} />
            <Route path="/services/transformation" element={<Transformation />} />
            
            {/* AI Autonomous Service Pages */}
            <Route path="/ai-autonomous-analytics" element={<AIAutonomousAnalytics />} />
            <Route path="/ai-autonomous-api-security" element={<AIAutonomousAPISecurity />} />
            <Route path="/ai-autonomous-application-security" element={<AIAutonomousApplicationSecurity />} />
            <Route path="/ai-autonomous-architecture" element={<AIAutonomousArchitecture />} />
            <Route path="/ai-autonomous-audit" element={<AIAutonomousAudit />} />
            <Route path="/ai-autonomous-automation" element={<AIAutonomousAutomation />} />
            <Route path="/ai-autonomous-cloud-security" element={<AIAutonomousCloudSecurity />} />
            <Route path="/ai-autonomous-code-review" element={<AIAutonomousCodeReview />} />
            <Route path="/ai-autonomous-compliance" element={<AIAutonomousCompliance />} />
            <Route path="/ai-autonomous-compliance-security" element={<AIAutonomousComplianceSecurity />} />
            <Route path="/ai-autonomous-container-security" element={<AIAutonomousContainerSecurity />} />
            <Route path="/ai-autonomous-creative-director" element={<AIAutonomousCreativeDirector />} />
            <Route path="/ai-autonomous-creativity" element={<AIAutonomousCreativity />} />
            <Route path="/ai-autonomous-customer-service" element={<AIAutonomousCustomerService />} />
            <Route path="/ai-autonomous-data" element={<AIAutonomousData />} />
            <Route path="/ai-autonomous-data-security" element={<AIAutonomousDataSecurity />} />
            <Route path="/ai-autonomous-database-security" element={<AIAutonomousDatabaseSecurity />} />
            <Route path="/ai-autonomous-decision-engine" element={<AIAutonomousDecisionEngine />} />
            <Route path="/ai-autonomous-decision-platform" element={<AIAutonomousDecisionPlatform />} />
            <Route path="/ai-autonomous-design" element={<AIAutonomousDesign />} />
            <Route path="/ai-autonomous-devops" element={<AIAutonomousDevOps />} />
            <Route path="/ai-autonomous-devops-security" element={<AIAutonomousDevOpsSecurity />} />
            <Route path="/ai-autonomous-development" element={<AIAutonomousDevelopment />} />
            <Route path="/ai-autonomous-discovery" element={<AIAutonomousDiscovery />} />
            <Route path="/ai-autonomous-edge-security" element={<AIAutonomousEdgeSecurity />} />
            <Route path="/ai-autonomous-education-professor" element={<AIAutonomousEducationProfessor />} />
            <Route path="/ai-autonomous-engineering" element={<AIAutonomousEngineering />} />
            <Route path="/ai-autonomous-finance" element={<AIAutonomousFinance />} />
            <Route path="/ai-autonomous-forensics" element={<AIAutonomousForensics />} />
            <Route path="/ai-autonomous-governance" element={<AIAutonomousGovernance />} />
            <Route path="/ai-autonomous-healthcare-physician" element={<AIAutonomousHealthcarePhysician />} />
            <Route path="/ai-autonomous-hybrid-security" element={<AIAutonomousHybridSecurity />} />
            <Route path="/ai-autonomous-identity-security" element={<AIAutonomousIdentitySecurity />} />
            <Route path="/ai-autonomous-incident-response" element={<AIAutonomousIncidentResponse />} />
            <Route path="/ai-autonomous-infrastructure-security" element={<AIAutonomousInfrastructureSecurity />} />
            <Route path="/ai-autonomous-innovation" element={<AIAutonomousInnovation />} />
            <Route path="/ai-autonomous-integration" element={<AIAutonomousIntegration />} />
            <Route path="/ai-autonomous-invention" element={<AIAutonomousInvention />} />
            <Route path="/ai-autonomous-iot-security" element={<AIAutonomousIOTSecurity />} />
            <Route path="/ai-autonomous-learning" element={<AIAutonomousLearning />} />
            <Route path="/ai-autonomous-learning-system" element={<AIAutonomousLearningSystem />} />
            <Route path="/ai-autonomous-legal-counsel" element={<AIAutonomousLegalCounsel />} />
            <Route path="/ai-autonomous-logistics" element={<AIAutonomousLogistics />} />
            <Route path="/ai-autonomous-malware-analysis" element={<AIAutonomousMalwareAnalysis />} />
            <Route path="/ai-autonomous-management" element={<AIAutonomousManagement />} />
            <Route path="/ai-autonomous-manufacturing" element={<AIAutonomousManufacturing />} />
            <Route path="/ai-autonomous-marketing" element={<AIAutonomousMarketing />} />
            <Route path="/ai-autonomous-microservice-security" element={<AIAutonomousMicroserviceSecurity />} />
            <Route path="/ai-autonomous-mobile-security" element={<AIAutonomousMobileSecurity />} />
            <Route path="/ai-autonomous-monitoring" element={<AIAutonomousMonitoring />} />
            <Route path="/ai-autonomous-monitoring-security" element={<AIAutonomousMonitoringSecurity />} />
            <Route path="/ai-autonomous-network-security" element={<AIAutonomousNetworkSecurity />} />
            <Route path="/ai-autonomous-optimization" element={<AIAutonomousOptimization />} />
            <Route path="/ai-autonomous-orchestration" element={<AIAutonomousOrchestration />} />
            <Route path="/ai-autonomous-penetration-testing" element={<AIAutonomousPenetrationTesting />} />
            <Route path="/ai-autonomous-planning" element={<AIAutonomousPlanning />} />
            <Route path="/ai-autonomous-prediction" element={<AIAutonomousPrediction />} />
            <Route path="/ai-autonomous-quality-assurance" element={<AIAutonomousQualityAssurance />} />
            <Route path="/ai-autonomous-reasoning" element={<AIAutonomousReasoning />} />
            <Route path="/ai-autonomous-recommendation" element={<AIAutonomousRecommendation />} />
            <Route path="/ai-autonomous-research" element={<AIAutonomousResearch />} />
            <Route path="/ai-autonomous-risk-management" element={<AIAutonomousRiskManagement />} />
            <Route path="/ai-autonomous-robotics" element={<AIAutonomousRobotics />} />
            <Route path="/ai-autonomous-scientific-researcher" element={<AIAutonomousScientificResearcher />} />
            <Route path="/ai-autonomous-security" element={<AIAutonomousSecurity />} />
            <Route path="/ai-autonomous-serverless-security" element={<AIAutonomousServerlessSecurity />} />
            <Route path="/ai-autonomous-software-engineer" element={<AIAutonomousSoftwareEngineer />} />
            <Route path="/ai-autonomous-speech" element={<AIAutonomousSpeech />} />
            <Route path="/ai-autonomous-synthesis" element={<AIAutonomousSynthesis />} />
            <Route path="/ai-autonomous-systems-platform" element={<AIAutonomousSystemsPlatform />} />
            <Route path="/ai-autonomous-testing" element={<AIAutonomousTesting />} />
            <Route path="/ai-autonomous-threat-detection" element={<AIAutonomousThreatDetection />} />
            <Route path="/ai-autonomous-threat-intelligence" element={<AIAutonomousThreatIntelligence />} />
            <Route path="/ai-autonomous-trading" element={<AIAutonomousTrading />} />
            <Route path="/ai-autonomous-translation" element={<AIAutonomousTranslation />} />
            <Route path="/ai-autonomous-virtual-assistant" element={<AIAutonomousVirtualAssistant />} />
            <Route path="/ai-autonomous-vision" element={<AIAutonomousVision />} />
            <Route path="/ai-autonomous-vulnerability-assessment" element={<AIAutonomousVulnerabilityAssessment />} />
            <Route path="/ai-autonomous-web-security" element={<AIAutonomousWebSecurity />} />
            <Route path="/ai-autonomous-workflow" element={<AIAutonomousWorkflow />} />
            <Route path="/ai-autonomous-writing" element={<AIAutonomousWriting />} />
            <Route path="/ai-autonomous-zero-trust-security" element={<AIAutonomousZeroTrustSecurity />} />
            
            {/* Additional Pages */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/comprehensive-pricing" element={<ComprehensivePricing />} />
            <Route path="/services-showcase" element={<ServicesShowcase />} />
            <Route path="/ai-consumer-willingness-to-try" element={<AIConsumerWillingnessToTry />} />
            <Route path="/ai-consumer-willingness-to-use" element={<AIConsumerWillingnessToUse />} />
            
            {/* Sitemap */}
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Comprehensive Services Showcase */}
            <Route path="/comprehensive-services-showcase" element={<ComprehensiveServicesShowcase />} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;