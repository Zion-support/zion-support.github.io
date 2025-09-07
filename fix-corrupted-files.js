#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AIHealthcareRevenueCycle.tsx","src/pages/services/AIIdentityManagement.tsx","src/pages/services/AILegalDocumentAutomation.tsx","src/pages/services/AIIncidentResponse.tsx","src/pages/services/AIInsurance.tsx","src/pages/services/AIInternetOfThings.tsx","src/pages/services/AIKafka.tsx","src/pages/services/AIKubernetes.tsx","src/pages/services/AILegalTech.tsx","src/pages/services/AIManufacturing.tsx","src/pages/services/AIManufacturingQualityControl.tsx","src/pages/services/AIMarketingAutomation.tsx","src/pages/services/AIMentalHealthSupportPlatform.tsx","src/pages/services/AIMetaverse.tsx","src/pages/services/AIMicroservices.tsx","src/pages/services/AIMongoDB.tsx","src/pages/services/AIMySQL.tsx","src/pages/services/AINetworkSecurity.tsx","src/pages/services/AIPenetrationTesting.tsx","src/pages/services/AIPostgreSQL.tsx","src/pages/services/AIPoweredSEO.tsx","src/pages/services/AIPredictiveAnalytics.tsx","src/pages/services/AIPredictiveAnalyticsPlatform.tsx","src/pages/services/AIPredictiveMaintenance.tsx","src/pages/services/AIProductivitySuite.tsx","src/pages/services/AIProjectManagement.tsx","src/pages/services/AIProjectManagementAssistant.tsx","src/pages/services/AIPrometheus.tsx","src/pages/services/AIQuantumComputing.tsx","src/pages/services/AIQuantumComputingSolutions.tsx","src/pages/services/AIQuantumMachineLearning.tsx","src/pages/services/AIRealEstate.tsx","src/pages/services/AIRealTimeBusinessIntelligence.tsx","src/pages/services/AIRedis.tsx","src/pages/services/AIRetail.tsx","src/pages/services/AISEOOptimizer.tsx","src/pages/services/AISecurityAnalytics.tsx","src/pages/services/AISecurityAssessment.tsx","src/pages/services/AISecurityAuditing.tsx","src/pages/services/AISecurityAutomation.tsx","src/pages/services/AISecurityAwareness.tsx","src/pages/services/AISecurityCompliance.tsx","src/pages/services/AISecurityConsulting.tsx","src/pages/services/AISecurityForensics.tsx","src/pages/services/AISecurityGovernance.tsx","src/pages/services/AISecurityImplementation.tsx","src/pages/services/AISecurityIntelligence.tsx","src/pages/services/AISecurityMaintenance.tsx","src/pages/services/AISecurityMonitoring.tsx","src/pages/services/AISecurityOperations.tsx","src/pages/services/AISecurityOrchestration.tsx","src/pages/services/AISecurityRiskManagement.tsx","src/pages/services/AISecuritySupport.tsx","src/pages/services/AISecurityTesting.tsx","src/pages/services/AISecurityTraining.tsx","src/pages/services/AIServerless.tsx","src/pages/services/AIServices.tsx","src/pages/services/AISmartCityInfrastructure.tsx","src/pages/services/AISmartCityPlatform.tsx","src/pages/services/AISports.tsx","src/pages/services/AISupplyChainOptimizationPlatform.tsx","src/pages/services/AISustainableTechnology.tsx","src/pages/services/AITerraform.tsx","src/pages/services/AITransportation.tsx","src/pages/services/AITravel.tsx","src/pages/services/AIVideoAnalytics.tsx","src/pages/services/AIVirtualReality.tsx","src/pages/services/AIVulnerabilityManagement.tsx","src/pages/services/AIWorkflowAutomation.jsx","src/pages/services/AIWorkflowAutomation.tsx"]; const servicePageTemplate = (serviceName,displayName) => `import React from "react"; import { Database,Check,Phone,Mail,ArrowRight,Target,Zap } from "lucide-react"; export default function ${serviceName}() { const features = [ "AI-powered ${displayName.toLowerCase()} optimization","Automated ${displayName.toLowerCase()} management","Real-time ${displayName.toLowerCase()} analytics","Predictive ${displayName.toLowerCase()} insights","Custom AI models for ${displayName.toLowerCase()}","Enterprise-grade security and compliance"]; const benefits = [ "Improve ${displayName.toLowerCase()} performance by 50-80%","Reduce operational costs by 35-65%","Enhance scalability and reliability","Optimize resource utilization","Scale operations efficiently","Maximize ROI and efficiency"]; const useCases = [ "Software Development","E-commerce & Retail","Financial Services","Healthcare & Life Sciences","Media & Entertainment","Technology & SaaS"]; const pricing = [ { name: "Starter",price: "$299/mo",details: ["Up to 10 users","Basic features","Email support","Standard SLA"],},{ name: "Professional",price: "$799/mo",details: ["Up to 50 users","Advanced features","Priority support","99.9% SLA"],},{ name: "Enterprise",price: "$1,999/mo",details: ["Unlimited users","Custom AI models","Full ${displayName.toLowerCase()} suite","24/7 dedicated support"],} ]; return (; <div className="min-h-screen bg-white">; <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">; <div className="max-w-5xl mx-auto px-6">; <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">; <Database className="w-4 h-4 mr-2" />; AI-Powered ${displayName} Intelligence; </div>; <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">${displayName} Platform</h1>; <p className="text-indigo-100 text-xl">; Transform your ${displayName.toLowerCase()} operations with AI-powered tools that optimize performance,enhance scalability,and maximize efficiency.; </p>; </div>; </section>; <section className="py-16 max-w-6xl mx-auto px-6">; <div className="grid md:grid-cols-2 gap-10">; <div>; <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced ${displayName} Features</h2>; <ul className="space-y-3">; {features.map((feature,index) => (; <li key={index} className="flex items-start">; <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />; <span className="text-gray-700">{feature}</span>; </li>; ))} </ul>; <div className="mt-6 text-sm text-gray-600">; Built with enterprise-grade security,SOC 2 compliance,and 99.9% uptime SLA.; </div>; </div>; <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">; <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>; <div className="grid md:grid-cols-3 gap-4">; {pricing.map((tier,index) => (; <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">; <div className="text-lg font-semibold mb-1">{tier.name}</div>; <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>; <ul className="text-sm text-gray-600 space-y-1">; {tier.details.map((detail,detailIndex) => (; <li key={detailIndex}>{detail}</li>; ))} </ul>; </div>; ))} </div>; <div className="mt-6 flex flex-wrap gap-3">; <a href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">; View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">; Contact Sales <Phone className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </div>; </section>; <section className="py-16 bg-gray-50">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">; {benefits.map((benefit,index) => (; <div key={index} className="bg-white p-6 rounded-lg shadow-sm">; <div className="flex items-center mb-3">; <Zap className="w-6 h-6 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">Performance</h3>; </div>; <p className="text-gray-600">{benefit}</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">; {useCases.map((industry,index) => (; <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">; <div className="flex items-center mb-3">; <Target className="w-5 h-5 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>; </div>; <p className="text-gray-600">Comprehensive ${displayName.toLowerCase()} solutions tailored for {industry.toLowerCase()}.</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16 bg-indigo-600">; <div className="max-w-4xl mx-auto px-6 text-center">; <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your ${displayName}?</h2>; <p className="text-indigo-100 text-xl mb-8">; Get started with our AI-powered ${displayName.toLowerCase()} platform today.; </p>; <div className="flex flex-col sm:flex-row gap-4 justify-center">; <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">; Get Started <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">; Schedule Demo <Mail className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </section>; </div>; )} `; function getServiceName(filePath) { const fileName = path.basename(filePath,path.extname(filePath)); return fileName; .split(/[-_]/); .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); .join("")} ; function getDisplayName(serviceName) { return serviceName; .replace(/^AI/,""); .replace(/([A-Z])/g," $1"); .trim()} ; corruptedFiles.forEach(filePath => { try { const serviceName = getServiceName(filePath); const displayName = getDisplayName(serviceName);  const dir = path.dirname(filePath); if (!fs.existsSync(dir)) { fs.mkdirSync(dir,{ recursive: true })} ; const content = servicePageTemplate(serviceName,displayName); fs.writeFileSync(filePath,content,"utf8"); } catch (error) { console.error(`✗ Error fixing ${filePath}:`,error.message)} });""
    <div className="min-h-screen bg-white">;"
</div>"
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">;"
</section>"
        <div className="max-w-5xl mx-auto px-6">;"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">;"
            <Database className="w-4 h-4 mr-2" />;"

          </div>;"
          <h1 className="text-4xl "md": text-6xl font-bold text-white mb-4">${displayName} Platform</h1>;""
          <p className="text-indigo-100 text-xl">;"
</p>
          </p>;
        </div>;
      </section>;"
      <section className="py-16 max-w-6xl mx-auto px-6">;"
        <div className="grid "md": grid-cols-2 gap-10">;"
</div>
          <div>;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced ${displayName} Features</h2>;""
            <ul className="space-y-3">;"
</ul>"
                <li key={index} className="flex items-start">;"
</li>"
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;"
"
                  <span className="text-gray-700">{feature}</span>;"
                </li>;
            </ul>;"
            <div className="mt-6 text-sm text-gray-600">;"
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">;"
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>;""
            <div className="grid "md": grid-cols-3 gap-4">;"
                <div key={index} className="rounded-lg p-4 border border-gray-200 "hover": border-indigo-300 transition-colors">;"
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>;""
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>;""
                  <ul className="text-sm text-gray-600 space-y-1">;"
</ul>
                      <li key={detailIndex}>{detail}</li>;
                  </ul>;
            <div className="mt-6 flex flex-wrap gap-3">;"
              <a href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg "hover": bg-indigo-700 transition-colors inline-flex items-center">;"
</a>"
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />;"

              </a>;"
              <a href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">;"
                Contact Sales <Phone className="w-4 h-4 ml-2" />;"

              </a>;
      <section className="py-16 bg-gray-50">;"
        <div className="max-w-6xl mx-auto px-6">;"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>;""
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;"
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">;"
                <div className="flex items-center mb-3">;"
                  <Zap className="w-6 h-6 text-indigo-600 mr-3" />;"
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>;"
                <p className="text-gray-600">{benefit}</p>;"
      <section className="py-16">;"
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>;""
          <div className="grid "md": grid-cols-2 lg:grid-cols-3 gap-6">;"
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 "hover": shadow-md transition-shadow">;"
                  <Target className="w-5 h-5 text-indigo-600 mr-3" />;"
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>;"
                <p className="text-gray-600">Comprehensive ${displayName.toLowerCase()} solutions tailored for {industry.toLowerCase()}.</p>;"
      <section className="py-16 bg-indigo-600">;"
        <div className="max-w-4xl mx-auto px-6 text-center">;"
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your ${displayName}?</h2>;""
          <p className="text-indigo-100 text-xl mb-8">;"
          </p>;"
          <div className="flex flex-col "sm": flex-row gap-4 justify-center">;"
            <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">;"
              Get Started <ArrowRight className="w-4 h-4 ml-2" />;"

            <a href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">;"
              Schedule Demo <Mail className="w-4 h-4 ml-2" />;"

      </section>;
    </div>;"`;
#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AIHealthcareRevenueCycle.tsx",; "src/pages/services/AIIdentityManagement.tsx",; "src/pages/services/AILegalDocumentAutomation.tsx",; "src/pages/services/AIIncidentResponse.tsx",; "src/pages/services/AIInsurance.tsx",; "src/pages/services/AIInternetOfThings.tsx",; "src/pages/services/AIKafka.tsx",; "src/pages/services/AIKubernetes.tsx",; "src/pages/services/AILegalTech.tsx",; "src/pages/services/AIManufacturing.tsx",; "src/pages/services/AIManufacturingQualityControl.tsx",; "src/pages/services/AIMarketingAutomation.tsx",; "src/pages/services/AIMentalHealthSupportPlatform.tsx",; "src/pages/services/AIMetaverse.tsx",; "src/pages/services/AIMicroservices.tsx",; "src/pages/services/AIMongoDB.tsx",; "src/pages/services/AIMySQL.tsx",; "src/pages/services/AINetworkSecurity.tsx",; "src/pages/services/AIPenetrationTesting.tsx",; "src/pages/services/AIPostgreSQL.tsx",; "src/pages/services/AIPoweredSEO.tsx",; "src/pages/services/AIPredictiveAnalytics.tsx",; "src/pages/services/AIPredictiveAnalyticsPlatform.tsx",; "src/pages/services/AIPredictiveMaintenance.tsx",; "src/pages/services/AIProductivitySuite.tsx",; "src/pages/services/AIProjectManagement.tsx",; "src/pages/services/AIProjectManagementAssistant.tsx",; "src/pages/services/AIPrometheus.tsx",; "src/pages/services/AIQuantumComputing.tsx",; "src/pages/services/AIQuantumComputingSolutions.tsx",; "src/pages/services/AIQuantumMachineLearning.tsx",; "src/pages/services/AIRealEstate.tsx",; "src/pages/services/AIRealTimeBusinessIntelligence.tsx",; "src/pages/services/AIRedis.tsx",; "src/pages/services/AIRetail.tsx",; "src/pages/services/AISEOOptimizer.tsx",; "src/pages/services/AISecurityAnalytics.tsx",; "src/pages/services/AISecurityAssessment.tsx",; "src/pages/services/AISecurityAuditing.tsx",; "src/pages/services/AISecurityAutomation.tsx",; "src/pages/services/AISecurityAwareness.tsx",; "src/pages/services/AISecurityCompliance.tsx",; "src/pages/services/AISecurityConsulting.tsx",; "src/pages/services/AISecurityForensics.tsx",; "src/pages/services/AISecurityGovernance.tsx",; "src/pages/services/AISecurityImplementation.tsx",; "src/pages/services/AISecurityIntelligence.tsx",; "src/pages/services/AISecurityMaintenance.tsx",; "src/pages/services/AISecurityMonitoring.tsx",; "src/pages/services/AISecurityOperations.tsx",; "src/pages/services/AISecurityOrchestration.tsx",; "src/pages/services/AISecurityRiskManagement.tsx",; "src/pages/services/AISecuritySupport.tsx",; "src/pages/services/AISecurityTesting.tsx",; "src/pages/services/AISecurityTraining.tsx",; "src/pages/services/AIServerless.tsx",; "src/pages/services/AIServices.tsx",; "src/pages/services/AISmartCityInfrastructure.tsx",; "src/pages/services/AISmartCityPlatform.tsx",; "src/pages/services/AISports.tsx",; "src/pages/services/AISupplyChainOptimizationPlatform.tsx",; "src/pages/services/AISustainableTechnology.tsx",; "src/pages/services/AITerraform.tsx",; "src/pages/services/AITransportation.tsx",; "src/pages/services/AITravel.tsx",; "src/pages/services/AIVideoAnalytics.tsx",; "src/pages/services/AIVirtualReality.tsx",; "src/pages/services/AIVulnerabilityManagement.tsx",; "src/pages/services/AIWorkflowAutomation.jsx",; "src/pages/services/AIWorkflowAutomation.tsx"; ]; const servicePageTemplate = (serviceName,displayName) => `import React from "react"; import { Database,Check,Phone,Mail,ArrowRight,Target,Zap } from "lucide-react"; export default function ${serviceName}() { const features = [ "AI-powered ${displayName.toLowerCase()} optimization",; "Automated ${displayName.toLowerCase()} management",; "Real-time ${displayName.toLowerCase()} analytics",; "Predictive ${displayName.toLowerCase()} insights",; "Custom AI models for ${displayName.toLowerCase()}",; "Enterprise-grade security and compliance"; ]; const benefits = [ "Improve ${displayName.toLowerCase()} performance by 50-80%",; "Reduce operational costs by 35-65%",; "Enhance scalability and reliability",; "Optimize resource utilization",; "Scale operations efficiently",; "Maximize ROI and efficiency"; ]; const useCases = [ "Software Development",; "E-commerce & Retail",; "Financial Services",; "Healthcare & Life Sciences",; "Media & Entertainment",; "Technology & SaaS"; ]; const pricing = [ { name: "Starter",; price: "$299/mo",; details: ["Up to 10 users","Basic features","Email support","Standard SLA"];,},; { name: "Professional",; price: "$799/mo",; details: ["Up to 50 users","Advanced features","Priority support","99.9% SLA"];,},; { name: "Enterprise",; price: "$1,999/mo",; details: ["Unlimited users","Custom AI models","Full ${displayName.toLowerCase()} suite","24/7 dedicated support"];,} ]; return (; <div className="min-h-screen bg-white"> <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center"> <div className="max-w-5xl mx-auto px-6"> <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6"> <Database className="w-4 h-4 mr-2" /> AI-Powered ${displayName} Intelligence; ></div> <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">${displayName} Platform></div> <p className="text-indigo-100 text-xl"> Transform your ${displayName.toLowerCase()} operations with AI-powered tools that optimize performance,enhance scalability,and maximize efficiency.; ></div> ></div> ></div> <section className="py-16 max-w-6xl mx-auto px-6"> <div className="grid md:grid-cols-2 gap-10"> <div> <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced ${displayName} Features></div> <ul className="space-y-3"> {features.map((feature,index) => (; <li key={index} className="flex items-start"> <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> <span className="text-gray-700">{feature}></div> ></div> ))} ></div> <div className="mt-6 text-sm text-gray-600"> Built with enterprise-grade security,SOC 2 compliance,and 99.9% uptime SLA.; ></div> ></div> <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg"> <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing></div> <div className="grid md:grid-cols-3 gap-4"> {pricing.map((tier,index) => (; <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors"> <div className="text-lg font-semibold mb-1">{tier.name}></div> <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}></div> <ul className="text-sm text-gray-600 space-y-1"> {tier.details.map((detail,detailIndex) => (; <li key={detailIndex}>{detail}></div> ))} ></div> ></div> ))} ></div> <div className="mt-6 flex flex-wrap gap-3"> <a href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"> View Full Pricing <ArrowRight className="w-4 h-4 ml-2" /> ></div> <a href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center"> Contact Sales <Phone className="w-4 h-4 ml-2" /> ></div> ></div> ></div> ></div> ></div> <section className="py-16 bg-gray-50"> <div className="max-w-6xl mx-auto px-6"> <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits></div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {benefits.map((benefit,index) => (; <div key={index} className="bg-white p-6 rounded-lg shadow-sm"> <div className="flex items-center mb-3"> <Zap className="w-6 h-6 text-indigo-600 mr-3" /> <h3 className="text-lg font-semibold text-gray-900">Performance></div> ></div> <p className="text-gray-600">{benefit}></div> ></div> ))} ></div> ></div> ></div> <section className="py-16"> <div className="max-w-6xl mx-auto px-6"> <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve></div> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {useCases.map((industry,index) => (; <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"> <div className="flex items-center mb-3"> <Target className="w-5 h-5 text-indigo-600 mr-3" /> <h3 className="text-lg font-semibold text-gray-900">{industry}></div> ></div> <p className="text-gray-600">Comprehensive ${displayName.toLowerCase()} solutions tailored for {industry.toLowerCase()}.></div> ></div> ))} ></div> ></div> ></div> <section className="py-16 bg-indigo-600"> <div className="max-w-4xl mx-auto px-6 text-center"> <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your ${displayName}?></div> <p className="text-indigo-100 text-xl mb-8"> Get started with our AI-powered ${displayName.toLowerCase()} platform today.; ></div> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"> Get Started <ArrowRight className="w-4 h-4 ml-2" /> ></div> <a href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center"> Schedule Demo <Mail className="w-4 h-4 ml-2" /> ></div> ></div> ></div> ></div> ></div> )} `; function getServiceName(filePath) { const fileName = path.basename(filePath,path.extname(filePath)); return fileName; .split(/[-_]/); .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); .join()} ; function getDisplayName(serviceName) { return serviceName; .replace(/^AI/,""); .replace(/([A-Z])/g," $1"); .trim()} ; corruptedFiles.forEach(filePath => { try { const serviceName = getServiceName(filePath); const displayName = getDisplayName(serviceName); console.log(`Fixing ${filePath}...`); const dir = path.dirname(filePath); if (!fs.existsSync(dir)) { fs.mkdirSync(dir,{ recursive: 'true' })} ; const content = servicePageTemplate(serviceName,displayName); fs.writeFileSync(filePath,content,"utf8"); console.log(`✓ Fixed ${filePath}`)} catch (error) { console.error(`✗ Error fixing ${filePath}:`,error.message)} }); console.log("\\nFixed all corrupted service files!")""`;
#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AIHealthcareRevenueCycle.tsx","src/pages/services/AIIdentityManagement.tsx","src/pages/services/AILegalDocumentAutomation.tsx","src/pages/services/AIIncidentResponse.tsx","src/pages/services/AIInsurance.tsx","src/pages/services/AIInternetOfThings.tsx","src/pages/services/AIKafka.tsx","src/pages/services/AIKubernetes.tsx","src/pages/services/AILegalTech.tsx","src/pages/services/AIManufacturing.tsx","src/pages/services/AIManufacturingQualityControl.tsx","src/pages/services/AIMarketingAutomation.tsx","src/pages/services/AIMentalHealthSupportPlatform.tsx","src/pages/services/AIMetaverse.tsx","src/pages/services/AIMicroservices.tsx","src/pages/services/AIMongoDB.tsx","src/pages/services/AIMySQL.tsx","src/pages/services/AINetworkSecurity.tsx","src/pages/services/AIPenetrationTesting.tsx","src/pages/services/AIPostgreSQL.tsx","src/pages/services/AIPoweredSEO.tsx","src/pages/services/AIPredictiveAnalytics.tsx","src/pages/services/AIPredictiveAnalyticsPlatform.tsx","src/pages/services/AIPredictiveMaintenance.tsx","src/pages/services/AIProductivitySuite.tsx","src/pages/services/AIProjectManagement.tsx","src/pages/services/AIProjectManagementAssistant.tsx","src/pages/services/AIPrometheus.tsx","src/pages/services/AIQuantumComputing.tsx","src/pages/services/AIQuantumComputingSolutions.tsx","src/pages/services/AIQuantumMachineLearning.tsx","src/pages/services/AIRealEstate.tsx","src/pages/services/AIRealTimeBusinessIntelligence.tsx","src/pages/services/AIRedis.tsx","src/pages/services/AIRetail.tsx","src/pages/services/AISEOOptimizer.tsx","src/pages/services/AISecurityAnalytics.tsx","src/pages/services/AISecurityAssessment.tsx","src/pages/services/AISecurityAuditing.tsx","src/pages/services/AISecurityAutomation.tsx","src/pages/services/AISecurityAwareness.tsx","src/pages/services/AISecurityCompliance.tsx","src/pages/services/AISecurityConsulting.tsx","src/pages/services/AISecurityForensics.tsx","src/pages/services/AISecurityGovernance.tsx","src/pages/services/AISecurityImplementation.tsx","src/pages/services/AISecurityIntelligence.tsx","src/pages/services/AISecurityMaintenance.tsx","src/pages/services/AISecurityMonitoring.tsx","src/pages/services/AISecurityOperations.tsx","src/pages/services/AISecurityOrchestration.tsx","src/pages/services/AISecurityRiskManagement.tsx","src/pages/services/AISecuritySupport.tsx","src/pages/services/AISecurityTesting.tsx","src/pages/services/AISecurityTraining.tsx","src/pages/services/AIServerless.tsx","src/pages/services/AIServices.tsx","src/pages/services/AISmartCityInfrastructure.tsx","src/pages/services/AISmartCityPlatform.tsx","src/pages/services/AISports.tsx","src/pages/services/AISupplyChainOptimizationPlatform.tsx","src/pages/services/AISustainableTechnology.tsx","src/pages/services/AITerraform.tsx","src/pages/services/AITransportation.tsx","src/pages/services/AITravel.tsx","src/pages/services/AIVideoAnalytics.tsx","src/pages/services/AIVirtualReality.tsx","src/pages/services/AIVulnerabilityManagement.tsx","src/pages/services/AIWorkflowAutomation.jsx","src/pages/services/AIWorkflowAutomation.tsx"]; const servicePageTemplate = (serviceName,displayName) => `import React from "react"; import { Database,Check,Phone,Mail,ArrowRight,Target,Zap } from "lucide-react"; export default function ${serviceName}() { const features = [ "AI-powered ${displayName.toLowerCase()} optimization","Automated ${displayName.toLowerCase()} management","Real-time ${displayName.toLowerCase()} analytics","Predictive ${displayName.toLowerCase()} insights","Custom AI models for ${displayName.toLowerCase()}","Enterprise-grade security and compliance"]; const benefits = [ "Improve ${displayName.toLowerCase()} performance by 50-80%","Reduce operational costs by 35-65%","Enhance scalability and reliability","Optimize resource utilization","Scale operations efficiently","Maximize ROI and efficiency"]; const useCases = [ "Software Development","E-commerce & Retail","Financial Services","Healthcare & Life Sciences","Media & Entertainment","Technology & SaaS"]; const pricing = [ { name: "Starter",price: "$299/mo",details: ["Up to 10 users","Basic features","Email support","Standard SLA"],},{ name: "Professional",price: "$799/mo",details: ["Up to 50 users","Advanced features","Priority support","99.9% SLA"],},{ name: "Enterprise",price: "$1,999/mo",details: ["Unlimited users","Custom AI models","Full ${displayName.toLowerCase()} suite","24/7 dedicated support"],} ]; return (; <div className="min-h-screen bg-white">; <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">; <div className="max-w-5xl mx-auto px-6">; <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">; <Database className="w-4 h-4 mr-2" />; AI-Powered ${displayName} Intelligence; </div>; <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">${displayName} Platform</h1>; <p className="text-indigo-100 text-xl">; Transform your ${displayName.toLowerCase()} operations with AI-powered tools that optimize performance,enhance scalability,and maximize efficiency.; </p>; </div>; </section>; <section className="py-16 max-w-6xl mx-auto px-6">; <div className="grid md:grid-cols-2 gap-10">; <div>; <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced ${displayName} Features</h2>; <ul className="space-y-3">; {features.map((feature,index) => (; <li key={index} className="flex items-start">; <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />; <span className="text-gray-700">{feature}</span>; </li>; ))} </ul>; <div className="mt-6 text-sm text-gray-600">; Built with enterprise-grade security,SOC 2 compliance,and 99.9% uptime SLA.; </div>; </div>; <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">; <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>; <div className="grid md:grid-cols-3 gap-4">; {pricing.map((tier,index) => (; <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">; <div className="text-lg font-semibold mb-1">{tier.name}</div>; <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>; <ul className="text-sm text-gray-600 space-y-1">; {tier.details.map((detail,detailIndex) => (; <li key={detailIndex}>{detail}</li>; ))} </ul>; </div>; ))} </div>; <div className="mt-6 flex flex-wrap gap-3">; <a href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">; View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">; Contact Sales <Phone className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </div>; </section>; <section className="py-16 bg-gray-50">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">; {benefits.map((benefit,index) => (; <div key={index} className="bg-white p-6 rounded-lg shadow-sm">; <div className="flex items-center mb-3">; <Zap className="w-6 h-6 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">Performance</h3>; </div>; <p className="text-gray-600">{benefit}</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">; {useCases.map((industry,index) => (; <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">; <div className="flex items-center mb-3">; <Target className="w-5 h-5 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>; </div>; <p className="text-gray-600">Comprehensive ${displayName.toLowerCase()} solutions tailored for {industry.toLowerCase()}.</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16 bg-indigo-600">; <div className="max-w-4xl mx-auto px-6 text-center">; <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your ${displayName}?</h2>; <p className="text-indigo-100 text-xl mb-8">; Get started with our AI-powered ${displayName.toLowerCase()} platform today.; </p>; <div className="flex flex-col sm:flex-row gap-4 justify-center">; <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">; Get Started <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">; Schedule Demo <Mail className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </section>; </div>; )} `; function getServiceName(filePath) { const fileName = path.basename(filePath,path.extname(filePath)); return fileName; .split(/[-_]/); .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); .join("")} ; function getDisplayName(serviceName) { return serviceName; .replace(/^AI/,""); .replace(/([A-Z])/g," $1"); .trim()} ; corruptedFiles.forEach(filePath => { try { const serviceName = getServiceName(filePath); const displayName = getDisplayName(serviceName); console.log(`Fixing ${filePath}...`); const dir = path.dirname(filePath); if (!fs.existsSync(dir)) { fs.mkdirSync(dir,{ recursive: true })} ; const content = servicePageTemplate(serviceName,displayName); fs.writeFileSync(filePath,content,"utf8"); console.log(`✓ Fixed ${filePath}`)} catch (error) { console.error(`✗ Error fixing ${filePath}:`,error.message)} }); console.log("\\nFixed all corrupted service files!")""`;
#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AIHealthcareRevenueCycle.tsx","src/pages/services/AIIdentityManagement.tsx","src/pages/services/AILegalDocumentAutomation.tsx","src/pages/services/AIIncidentResponse.tsx","src/pages/services/AIInsurance.tsx","src/pages/services/AIInternetOfThings.tsx","src/pages/services/AIKafka.tsx","src/pages/services/AIKubernetes.tsx","src/pages/services/AILegalTech.tsx","src/pages/services/AIManufacturing.tsx","src/pages/services/AIManufacturingQualityControl.tsx","src/pages/services/AIMarketingAutomation.tsx","src/pages/services/AIMentalHealthSupportPlatform.tsx","src/pages/services/AIMetaverse.tsx","src/pages/services/AIMicroservices.tsx","src/pages/services/AIMongoDB.tsx","src/pages/services/AIMySQL.tsx","src/pages/services/AINetworkSecurity.tsx","src/pages/services/AIPenetrationTesting.tsx","src/pages/services/AIPostgreSQL.tsx","src/pages/services/AIPoweredSEO.tsx","src/pages/services/AIPredictiveAnalytics.tsx","src/pages/services/AIPredictiveAnalyticsPlatform.tsx","src/pages/services/AIPredictiveMaintenance.tsx","src/pages/services/AIProductivitySuite.tsx","src/pages/services/AIProjectManagement.tsx","src/pages/services/AIProjectManagementAssistant.tsx","src/pages/services/AIPrometheus.tsx","src/pages/services/AIQuantumComputing.tsx","src/pages/services/AIQuantumComputingSolutions.tsx","src/pages/services/AIQuantumMachineLearning.tsx","src/pages/services/AIRealEstate.tsx","src/pages/services/AIRealTimeBusinessIntelligence.tsx","src/pages/services/AIRedis.tsx","src/pages/services/AIRetail.tsx","src/pages/services/AISEOOptimizer.tsx","src/pages/services/AISecurityAnalytics.tsx","src/pages/services/AISecurityAssessment.tsx","src/pages/services/AISecurityAuditing.tsx","src/pages/services/AISecurityAutomation.tsx","src/pages/services/AISecurityAwareness.tsx","src/pages/services/AISecurityCompliance.tsx","src/pages/services/AISecurityConsulting.tsx","src/pages/services/AISecurityForensics.tsx","src/pages/services/AISecurityGovernance.tsx","src/pages/services/AISecurityImplementation.tsx","src/pages/services/AISecurityIntelligence.tsx","src/pages/services/AISecurityMaintenance.tsx","src/pages/services/AISecurityMonitoring.tsx","src/pages/services/AISecurityOperations.tsx","src/pages/services/AISecurityOrchestration.tsx","src/pages/services/AISecurityRiskManagement.tsx","src/pages/services/AISecuritySupport.tsx","src/pages/services/AISecurityTesting.tsx","src/pages/services/AISecurityTraining.tsx","src/pages/services/AIServerless.tsx","src/pages/services/AIServices.tsx","src/pages/services/AISmartCityInfrastructure.tsx","src/pages/services/AISmartCityPlatform.tsx","src/pages/services/AISports.tsx","src/pages/services/AISupplyChainOptimizationPlatform.tsx","src/pages/services/AISustainableTechnology.tsx","src/pages/services/AITerraform.tsx","src/pages/services/AITransportation.tsx","src/pages/services/AITravel.tsx","src/pages/services/AIVideoAnalytics.tsx","src/pages/services/AIVirtualReality.tsx","src/pages/services/AIVulnerabilityManagement.tsx","src/pages/services/AIWorkflowAutomation.jsx","src/pages/services/AIWorkflowAutomation.tsx"]; const servicePageTemplate = (serviceName,displayName) => `import React from "react"; import { Database,Check,Phone,Mail,ArrowRight,Target,Zap } from "lucide-react"; export default function ${serviceName}() { const features = [ "AI-powered ${displayName.toLowerCase()} optimization","Automated ${displayName.toLowerCase()} management","Real-time ${displayName.toLowerCase()} analytics","Predictive ${displayName.toLowerCase()} insights","Custom AI models for ${displayName.toLowerCase()}","Enterprise-grade security and compliance"]; const benefits = [ "Improve ${displayName.toLowerCase()} performance by 50-80%","Reduce operational costs by 35-65%","Enhance scalability and reliability","Optimize resource utilization","Scale operations efficiently","Maximize ROI and efficiency"]; const useCases = [ "Software Development","E-commerce & Retail","Financial Services","Healthcare & Life Sciences","Media & Entertainment","Technology & SaaS"]; const pricing = [ { name: "Starter",price: "$299/mo",details: ["Up to 10 users","Basic features","Email support","Standard SLA"],},{ name: "Professional",price: "$799/mo",details: ["Up to 50 users","Advanced features","Priority support","99.9% SLA"],},{ name: "Enterprise",price: "$1,999/mo",details: ["Unlimited users","Custom AI models","Full ${displayName.toLowerCase()} suite","24/7 dedicated support"],} ]; return (; <div className="min-h-screen bg-white">; <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">; <div className="max-w-5xl mx-auto px-6">; <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">; <Database className="w-4 h-4 mr-2" />; AI-Powered ${displayName} Intelligence; </div>; <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">${displayName} Platform</h1>; <p className="text-indigo-100 text-xl">; Transform your ${displayName.toLowerCase()} operations with AI-powered tools that optimize performance,enhance scalability,and maximize efficiency.; </p>; </div>; </section>; <section className="py-16 max-w-6xl mx-auto px-6">; <div className="grid md:grid-cols-2 gap-10">; <div>; <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced ${displayName} Features</h2>; <ul className="space-y-3">; {features.map((feature,index) => (; <li key={index} className="flex items-start">; <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />; <span className="text-gray-700">{feature}</span>; </li>; ))} </ul>; <div className="mt-6 text-sm text-gray-600">; Built with enterprise-grade security,SOC 2 compliance,and 99.9% uptime SLA.; </div>; </div>; <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">; <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>; <div className="grid md:grid-cols-3 gap-4">; {pricing.map((tier,index) => (; <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">; <div className="text-lg font-semibold mb-1">{tier.name}</div>; <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>; <ul className="text-sm text-gray-600 space-y-1">; {tier.details.map((detail,detailIndex) => (; <li key={detailIndex}>{detail}</li>; ))} </ul>; </div>; ))} </div>; <div className="mt-6 flex flex-wrap gap-3">; <a href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">; View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">; Contact Sales <Phone className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </div>; </section>; <section className="py-16 bg-gray-50">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">; {benefits.map((benefit,index) => (; <div key={index} className="bg-white p-6 rounded-lg shadow-sm">; <div className="flex items-center mb-3">; <Zap className="w-6 h-6 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">Performance</h3>; </div>; <p className="text-gray-600">{benefit}</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">; {useCases.map((industry,index) => (; <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">; <div className="flex items-center mb-3">; <Target className="w-5 h-5 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>; </div>; <p className="text-gray-600">Comprehensive ${displayName.toLowerCase()} solutions tailored for {industry.toLowerCase()}.</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16 bg-indigo-600">; <div className="max-w-4xl mx-auto px-6 text-center">; <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your ${displayName}?</h2>; <p className="text-indigo-100 text-xl mb-8">; Get started with our AI-powered ${displayName.toLowerCase()} platform today.; </p>; <div className="flex flex-col sm:flex-row gap-4 justify-center">; <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">; Get Started <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">; Schedule Demo <Mail className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </section>; </div>; )} `; function getServiceName(filePath) { const fileName = path.basename(filePath,path.extname(filePath)); return fileName; .split(/[-_]/); .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); .join("")} ; function getDisplayName(serviceName) { return serviceName; .replace(/^AI/,""); .replace(/([A-Z])/g," $1"); .trim()} ; corruptedFiles.forEach(filePath => { try { const serviceName = getServiceName(filePath); const displayName = getDisplayName(serviceName); console.log(`Fixing ${filePath}...`); const dir = path.dirname(filePath); if (!fs.existsSync(dir)) { fs.mkdirSync(dir,{ recursive: true })} ; const content = servicePageTemplate(serviceName,displayName); fs.writeFileSync(filePath,content,"utf8"); console.log(`✓ Fixed ${filePath}`)} catch (error) { console.error(`✗ Error fixing ${filePath}:`,error.message)} }); console.log("\\nFixed all corrupted service files!")"
<="`;
>#!/usr/bin/env node; import fs from "fs"; import path from "path"; import { fileURLToPath } from "url"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); const corruptedFiles = [ "src/pages/services/AIHealthcareRevenueCycle.tsx","src/pages/services/AIIdentityManagement.tsx","src/pages/services/AILegalDocumentAutomation.tsx","src/pages/services/AIIncidentResponse.tsx","src/pages/services/AIInsurance.tsx","src/pages/services/AIInternetOfThings.tsx","src/pages/services/AIKafka.tsx","src/pages/services/AIKubernetes.tsx","src/pages/services/AILegalTech.tsx","src/pages/services/AIManufacturing.tsx","src/pages/services/AIManufacturingQualityControl.tsx","src/pages/services/AIMarketingAutomation.tsx","src/pages/services/AIMentalHealthSupportPlatform.tsx","src/pages/services/AIMetaverse.tsx","src/pages/services/AIMicroservices.tsx","src/pages/services/AIMongoDB.tsx","src/pages/services/AIMySQL.tsx","src/pages/services/AINetworkSecurity.tsx","src/pages/services/AIPenetrationTesting.tsx","src/pages/services/AIPostgreSQL.tsx","src/pages/services/AIPoweredSEO.tsx","src/pages/services/AIPredictiveAnalytics.tsx","src/pages/services/AIPredictiveAnalyticsPlatform.tsx","src/pages/services/AIPredictiveMaintenance.tsx","src/pages/services/AIProductivitySuite.tsx","src/pages/services/AIProjectManagement.tsx","src/pages/services/AIProjectManagementAssistant.tsx","src/pages/services/AIPrometheus.tsx","src/pages/services/AIQuantumComputing.tsx","src/pages/services/AIQuantumComputingSolutions.tsx","src/pages/services/AIQuantumMachineLearning.tsx","src/pages/services/AIRealEstate.tsx","src/pages/services/AIRealTimeBusinessIntelligence.tsx","src/pages/services/AIRedis.tsx","src/pages/services/AIRetail.tsx","src/pages/services/AISEOOptimizer.tsx","src/pages/services/AISecurityAnalytics.tsx","src/pages/services/AISecurityAssessment.tsx","src/pages/services/AISecurityAuditing.tsx","src/pages/services/AISecurityAutomation.tsx","src/pages/services/AISecurityAwareness.tsx","src/pages/services/AISecurityCompliance.tsx","src/pages/services/AISecurityConsulting.tsx","src/pages/services/AISecurityForensics.tsx","src/pages/services/AISecurityGovernance.tsx","src/pages/services/AISecurityImplementation.tsx","src/pages/services/AISecurityIntelligence.tsx","src/pages/services/AISecurityMaintenance.tsx","src/pages/services/AISecurityMonitoring.tsx","src/pages/services/AISecurityOperations.tsx","src/pages/services/AISecurityOrchestration.tsx","src/pages/services/AISecurityRiskManagement.tsx","src/pages/services/AISecuritySupport.tsx","src/pages/services/AISecurityTesting.tsx","src/pages/services/AISecurityTraining.tsx","src/pages/services/AIServerless.tsx","src/pages/services/AIServices.tsx","src/pages/services/AISmartCityInfrastructure.tsx","src/pages/services/AISmartCityPlatform.tsx","src/pages/services/AISports.tsx","src/pages/services/AISupplyChainOptimizationPlatform.tsx","src/pages/services/AISustainableTechnology.tsx","src/pages/services/AITerraform.tsx","src/pages/services/AITransportation.tsx","src/pages/services/AITravel.tsx","src/pages/services/AIVideoAnalytics.tsx","src/pages/services/AIVirtualReality.tsx","src/pages/services/AIVulnerabilityManagement.tsx","src/pages/services/AIWorkflowAutomation.jsx","src/pages/services/AIWorkflowAutomation.tsx"]; const servicePageTemplate = (serviceName,displayName) => `import React from "react"; import { Database,Check,Phone,Mail,ArrowRight,Target,Zap } from "lucide-react"; export default function ${serviceName}() { const features = [ "AI-powered ${displayName.toLowerCase()} optimization","Automated ${displayName.toLowerCase()} management","Real-time ${displayName.toLowerCase()} analytics","Predictive ${displayName.toLowerCase()} insights","Custom AI models for ${displayName.toLowerCase()}","Enterprise-grade security and compliance"]; const benefits = [ "Improve ${displayName.toLowerCase()} performance by 50-80%","Reduce operational costs by 35-65%","Enhance scalability and reliability","Optimize resource utilization","Scale operations efficiently","Maximize ROI and efficiency"]; const useCases = [ "Software Development","E-commerce & Retail","Financial Services","Healthcare & Life Sciences","Media & Entertainment","Technology & SaaS"]; const pricing = [ { name: "Starter",price: "$299/mo",details: ["Up to 10 users","Basic features","Email support","Standard SLA"],},{ name: "Professional",price: "$799/mo",details: ["Up to 50 users","Advanced features","Priority support","99.9% SLA"],},{ name: "Enterprise",price: "$1,999/mo",details: ["Unlimited users","Custom AI models","Full ${displayName.toLowerCase()} suite","24/7 dedicated support"],} ]; return (; <div className="min-h-screen bg-white">; <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">; <div className="max-w-5xl mx-auto px-6">; <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">; <Database className="w-4 h-4 mr-2" />; AI-Powered ${displayName} Intelligence; </div>; <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">${displayName} Platform</h1>; <p className="text-indigo-100 text-xl">; Transform your ${displayName.toLowerCase()} operations with AI-powered tools that optimize performance,enhance scalability,and maximize efficiency.; </p>; </div>; </section>; <section className="py-16 max-w-6xl mx-auto px-6">; <div className="grid md:grid-cols-2 gap-10">; <div>; <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced ${displayName} Features</h2>; <ul className="space-y-3">; {features.map((feature,index) => (; <li key={index} className="flex items-start">; <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />; <span className="text-gray-700">{feature}</span>; </li>; ))} </ul>; <div className="mt-6 text-sm text-gray-600">; Built with enterprise-grade security,SOC 2 compliance,and 99.9% uptime SLA.; </div>; </div>; <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">; <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>; <div className="grid md:grid-cols-3 gap-4">; {pricing.map((tier,index) => (; <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">; <div className="text-lg font-semibold mb-1">{tier.name}</div>; <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>; <ul className="text-sm text-gray-600 space-y-1">; {tier.details.map((detail,detailIndex) => (; <li key={detailIndex}>{detail}</li>; ))} </ul>; </div>; ))} </div>; <div className="mt-6 flex flex-wrap gap-3">; <a href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">; View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">; Contact Sales <Phone className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </div>; </section>; <section className="py-16 bg-gray-50">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">; {benefits.map((benefit,index) => (; <div key={index} className="bg-white p-6 rounded-lg shadow-sm">; <div className="flex items-center mb-3">; <Zap className="w-6 h-6 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">Performance</h3>; </div>; <p className="text-gray-600">{benefit}</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16">; <div className="max-w-6xl mx-auto px-6">; <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>; <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">; {useCases.map((industry,index) => (; <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">; <div className="flex items-center mb-3">; <Target className="w-5 h-5 text-indigo-600 mr-3" />; <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>; </div>; <p className="text-gray-600">Comprehensive ${displayName.toLowerCase()} solutions tailored for {industry.toLowerCase()}.</p>; </div>; ))} </div>; </div>; </section>; <section className="py-16 bg-indigo-600">; <div className="max-w-4xl mx-auto px-6 text-center">; <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your ${displayName}?</h2>; <p className="text-indigo-100 text-xl mb-8">; Get started with our AI-powered ${displayName.toLowerCase()} platform today.; </p>; <div className="flex flex-col sm:flex-row gap-4 justify-center">; <a href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">; Get Started <ArrowRight className="w-4 h-4 ml-2" />; </a>; <a href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">; Schedule Demo <Mail className="w-4 h-4 ml-2" />; </a>; </div>; </div>; </section>; </div>; )} `; function getServiceName(filePath) { const fileName = path.basename(filePath,path.extname(filePath)); return fileName; .split(/[-_]/); .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); .join("")} ; function getDisplayName(serviceName) { return serviceName; .replace(/^AI/,""); .replace(/([A-Z])/g," $1"); .trim()} ; corruptedFiles.forEach(filePath => { try { const serviceName = getServiceName(filePath); const displayName = getDisplayName(serviceName); console.log(`Fixing ${filePath}...`); const dir = path.dirname(filePath); if (!fs.existsSync(dir)) { fs.mkdirSync(dir,{ recursive: true })} ; const content = servicePageTemplate(serviceName,displayName); fs.writeFileSync(filePath,content,"utf8"); console.log(`✓ Fixed ${filePath}`)} catch (error) { console.error(`✗ Error fixing ${filePath}:`,error.message)} }); console.log("\\nFixed all corrupted service files!")""`;
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Starting comprehensive file fixing...');

// List of corrupted files to fix
const corruptedFiles = [
  '/workspace/app/robots.ts',
  '/workspace/app/services/ai-analytics-platform/page.tsx',
  '/workspace/app/services/ai-code-reviewer/page.tsx',
  '/workspace/app/services/ai-content-generator/page.tsx'
];

// Function to fix robots.ts
function fixRobotsTs(filePath) {
  const content = `import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        '*.json',
        '*.xml',
        '*.txt',
        '/scripts/',
        '/automation/',
        '/backup/',
        '/temp/'
      ]
    },
    sitemap: 'https://ziontechgroup.com/sitemap.xml'
  };
}`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fixed: ${filePath}`);
}

// Function to fix AI analytics platform page
function fixAiAnalyticsPage(filePath) {
  const content = `import React from 'react';

export const metadata = {
  title: 'AI Analytics Platform | Zion Tech Group',
  description: 'Professional AI analytics platform services for your business needs.',
  keywords: 'ai-analytics-platform, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Analytics Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional AI analytics platform services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored AI analytics platform solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your AI analytics platform solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fixed: ${filePath}`);
}

// Function to fix AI code reviewer page
function fixAiCodeReviewerPage(filePath) {
  const content = `import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Code Reviewer - Zion Tech Group',
  description: 'Professional AI code reviewer solutions for your business needs.'
};

export default function AiCodeReviewerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Code Reviewer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional AI code reviewer services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored AI code reviewer solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your AI code reviewer solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fixed: ${filePath}`);
}

// Function to fix AI content generator page
function fixAiContentGeneratorPage(filePath) {
  const content = `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generator Pro | Zion Tech Group',
  description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials. Generate high-quality, SEO-optimized content at scale.',
  keywords: 'AI content generator, content creation, blog writing, social media content, marketing automation, SEO content'
};

export default function AIContentGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Content Generator Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform your content marketing with our advanced AI-powered platform. Generate high-quality, 
            SEO-optimized content for blogs, social media, and marketing materials at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator Inquiry"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Powerful Features</h2>
            <div className="space-y-6">
              <FeatureItem
                icon="✍️"
                title="Multi-Language Support"
                description="Generate content in 50+ languages with native-level quality and cultural context."
                benefits={["50+ languages", "Cultural adaptation", "Native-level quality", "Real-time translation"]}
              />
              <FeatureItem
                icon="🔍"
                title="SEO Optimization"
                description="AI-powered SEO optimization with keyword research, meta descriptions, and content structure."
                benefits={["Keyword research", "Meta optimization", "Content structure", "Ranking analysis"]}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Platform?</h2>
            <div className="space-y-6">
              <BenefitCard
                icon="⚡"
                title="10x Faster Content Creation"
                description="Generate high-quality content 10x faster than traditional methods, saving hours of work."
              />
              <BenefitCard
                icon="📈"
                title="300% Higher Engagement"
                description="AI-optimized content achieves 300% higher engagement rates compared to manually written content."
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="199"
              period="month"
              description="Perfect for small businesses and content creators"
              features={[
                "10,000 words/month",
                "5 languages",
                "Basic SEO optimization",
                "Email support",
                "Standard templates"
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="399"
              period="month"
              description="Ideal for growing businesses and agencies"
              features={[
                "50,000 words/month",
                "25 languages",
                "Advanced SEO optimization",
                "Priority support",
                "Custom templates",
                "Brand voice training",
                "Analytics dashboard"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="799"
              period="month"
              description="For large organizations with high-volume needs"
              features={[
                "Unlimited words",
                "50+ languages",
                "Full SEO suite",
                "24/7 support",
                "Custom integrations",
                "Advanced analytics",
                "API access",
                "White-label options"
              ]}
              popular={false}
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Content Strategy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 10,000+ businesses already using AI Content Generator Pro to create
            high-quality content at scale. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Content Generator - Free Trial"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { 
  icon: string; 
  title: string; 
  description: string; 
  benefits: string[] 
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string 
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  popular 
}: { 
  title: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular: boolean 
}) {
  return (
    <div className={\`p-8 rounded-xl border-2 \${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative\`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">${\`\${price}\`}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={\`mailto:kleber@ziontechgroup.com?subject=AI Content Generator - \${title} Plan\`}
        className={\`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors \${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }\`}
      >
        Get Started
      </a>
    </div>
  );
}`;
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Fixed: ${filePath}`);
}

// Main execution
try {
  console.log('🔍 Fixing corrupted files...');
  
  for (const filePath of corruptedFiles) {
    if (fs.existsSync(filePath)) {
      if (filePath.includes('robots.ts')) {
        fixRobotsTs(filePath);
      } else if (filePath.includes('ai-analytics-platform')) {
        fixAiAnalyticsPage(filePath);
      } else if (filePath.includes('ai-code-reviewer')) {
        fixAiCodeReviewerPage(filePath);
      } else if (filePath.includes('ai-content-generator')) {
        fixAiContentGeneratorPage(filePath);
      }
    }
  }
  
  console.log('🎉 All corrupted files have been fixed!');
  
} catch (error) {
  console.error('❌ Error during file fixing:', error);
  process.exit(1);
}
