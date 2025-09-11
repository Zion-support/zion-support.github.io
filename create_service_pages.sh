#!/bin/bash

# Create missing service page files
services=(
  "CloudDevOps"
  "DigitalTwin"
  "DataAnalytics"
  "IoTEdge"
  "BlockchainEnterpriseSolutions"
  "HealthcareTech"
  "Sustainability"
  "ZeroTrustNetworkArchitecture"
  "ITInfrastructure"
  "AIBusinessIntelligence"
  "AISalesCopilot"
  "AIComplianceAssistant"
  "AIAutoEmailResponder"
  "LLMContentStudio"
  "CloudFinOpsOptimizer"
  "ReturnsManagement"
  "AffiliateTracking"
  "MobileFeedbackSurveys"
  "CustomerFeedbackSurveys"
  "AIComplianceCopilot"
  "FinOpsAdvisor"
  "DigitalTransformation"
  "ITConsulting"
  "GreenIT"
  "QuantumComputing"
  "SpaceTech"
  "AICybersecuritySuite"
  "QuantumAIPlatform"
  "AIHealthcareAnalytics"
  "AIWorkflowOrchestrator"
  "AIDataGovernance"
  "EdgeComputingPlatform"
  "AICustomerSuccessPlatform"
  "AIEnterpriseResourcePlanning"
  "AIQuantumFinancialTrading"
  "AIHealthcareDiagnostics"
  "AIBlockchainSupplyChain"
  "AICyberThreatIntelligence"
  "AIProjectManagement"
  "AICustomerSupportAutomation"
  "AIFinancialAnalytics"
  "AIMarketingAutomation"
)

for service in "${services[@]}"; do
  cat > "/workspace/src/pages/services/${service}.tsx" << EOF
import React from 'react';
import { SEO } from '@/components/SEO';

export default function ${service}() {
  return (
    <>
      <SEO 
        title="${service} - Zion Tech Group" 
        description="${service} service from Zion Tech Group" 
        keywords="${service}, zion tech group, services"
      />
      <div className="min-h-screen bg-zion-blue pt-20 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              ${service}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Professional ${service} services
            </p>
            <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-zion-slate-dark mb-4">
                ${service} Service
              </h2>
              <p className="text-zion-slate-light">
                We provide comprehensive ${service} solutions to help businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EOF
done

echo "Created ${#services[@]} missing service page files"