const fs = require('fs');
const path = require('path');

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709"
};

const newServices = [
  // V856: Revenue Operations (RevOps) Services - 6 services
  {id:"revops-pipeline-analytics-v856",name:"RevOps Pipeline Analytics",category:"Revenue Operations",description:"AI-powered pipeline analytics with forecast accuracy, deal velocity tracking, and conversion rate optimization.",price:"$4,200/mo",features:["Pipeline health scoring","Forecast accuracy tracking","Deal velocity analysis","Conversion optimization"],icon:"📊",contactInfo,link:"/services/revops-pipeline-analytics-v856"},
  {id:"revops-deal-intelligence-v856",name:"RevOps Deal Intelligence",category:"Revenue Operations",description:"Deal-level intelligence with win probability scoring, competitive analysis, and stakeholder mapping.",price:"$3,800/mo",features:["Win probability scoring","Competitive intelligence","Stakeholder mapping","Deal risk assessment"],icon:"🎯",contactInfo,link:"/services/revops-deal-intelligence-v856"},
  {id:"revops-territory-optimization-v856",name:"RevOps Territory Optimization",category:"Revenue Operations",description:"AI-driven territory design and optimization with coverage analysis and whitespace identification.",price:"$2,900/mo",features:["Territory design","Coverage analysis","Whitespace identification","Account assignment"],icon:"🗺️",contactInfo,link:"/services/revops-territory-optimization-v856"},
  {id:"revops-compensation-modeling-v856",name:"RevOps Compensation Modeling",category:"Revenue Operations",description:"Incentive compensation modeling with quota setting, accelerator design, and attainment analysis.",price:"$3,500/mo",features:["Comp plan design","Quota modeling","Accelerator design","Attainment analysis"],icon:"💰",contactInfo,link:"/services/revops-compensation-modeling-v856"},
  {id:"revops-forecast-accuracy-v856",name:"RevOps Forecast Accuracy Engine",category:"Revenue Operations",description:"AI-powered forecasting with weighted pipeline analysis, historical accuracy tracking, and adjustment recommendations.",price:"$4,500/mo",features:["Weighted pipeline forecasting","Historical accuracy","Adjustment recommendations","Confidence scoring"],icon:"📈",contactInfo,link:"/services/revops-forecast-accuracy-v856"},
  {id:"revops-sales-enablement-v856",name:"RevOps Sales Enablement Platform",category:"Revenue Operations",description:"Sales enablement with content intelligence, training automation, and performance coaching.",price:"$3,200/mo",features:["Content intelligence","Training automation","Performance coaching","Playbook management"],icon:"🚀",contactInfo,link:"/services/revops-sales-enablement-v856"},

  // V857: Data Governance & Quality Services - 6 services
  {id:"data-quality-platform-v857",name:"Data Quality Platform",category:"Data Governance",description:"Comprehensive data quality platform with profiling, validation, and automated remediation.",price:"$5,500/mo",features:["Data profiling","Quality rules","Automated validation","Remediation workflows"],icon:"✅",contactInfo,link:"/services/data-quality-platform-v857"},
  {id:"data-governance-framework-v857",name:"Data Governance Framework",category:"Data Governance",description:"Enterprise data governance with policy management, stewardship workflows, and compliance tracking.",price:"$6,200/mo",features:["Policy management","Stewardship workflows","Compliance tracking","Governance council"],icon:"🏛️",contactInfo,link:"/services/data-governance-framework-v857"},
  {id:"data-lineage-tracking-v857",name:"Data Lineage Tracking",category:"Data Governance",description:"End-to-end data lineage with automated discovery, transformation tracking, and impact analysis.",price:"$4,800/mo",features:["Automated lineage discovery","Transformation tracking","Impact analysis","Dependency mapping"],icon:"🔗",contactInfo,link:"/services/data-lineage-tracking-v857"},
  {id:"metadata-catalog-v857",name:"Metadata Catalog Platform",category:"Data Governance",description:"Enterprise metadata catalog with business glossary, data dictionary, and search/discovery.",price:"$4,200/mo",features:["Business glossary","Data dictionary","Search & discovery","Metadata enrichment"],icon:"📚",contactInfo,link:"/services/metadata-catalog-v857"},
  {id:"master-data-management-v857",name:"Master Data Management Platform",category:"Data Governance",description:"MDM platform with golden record management, deduplication, and survivorship rules.",price:"$7,500/mo",features:["Golden record management","Deduplication","Survivorship rules","Hierarchy management"],icon:"🎯",contactInfo,link:"/services/master-data-management-v857"},
  {id:"data-privacy-compliance-v857",name:"Data Privacy & Compliance",category:"Data Governance",description:"Privacy compliance platform with PII detection, consent management, and regulatory reporting.",price:"$5,800/mo",features:["PII detection","Consent management","Regulatory reporting","Data classification"],icon:"🔒",contactInfo,link:"/services/data-privacy-compliance-v857"},

  // V858: Incident Response & Threat Hunting Services - 6 services
  {id:"incident-response-platform-v858",name:"Incident Response Platform",category:"Cybersecurity",description:"Automated incident response with playbook execution, evidence collection, and post-incident review.",price:"$8,500/mo",features:["Playbook automation","Evidence collection","Timeline analysis","Post-incident review"],icon:"🚨",contactInfo,link:"/services/incident-response-platform-v858"},
  {id:"threat-hunting-service-v858",name:"Threat Hunting Service",category:"Cybersecurity",description:"Proactive threat hunting with IOC correlation, TTP mapping, and threat actor profiling.",price:"$9,200/mo",features:["IOC correlation","TTP mapping","Threat actor profiling","Campaign tracking"],icon:"🎯",contactInfo,link:"/services/threat-hunting-service-v858"},
  {id:"forensic-investigation-v858",name:"Digital Forensic Investigation",category:"Cybersecurity",description:"Digital forensics with memory analysis, disk imaging, and root cause determination.",price:"$7,800/mo",features:["Memory analysis","Disk imaging","Log analysis","Root cause analysis"],icon:"🔍",contactInfo,link:"/services/forensic-investigation-v858"},
  {id:"security-orchestration-v858",name:"Security Orchestration (SOAR)",category:"Cybersecurity",description:"SOAR platform with automated workflows, threat intelligence integration, and case management.",price:"$10,500/mo",features:["Automated workflows","Threat intel integration","Case management","Playbook builder"],icon:"⚡",contactInfo,link:"/services/security-orchestration-v858"},
  {id:"breach-notification-v858",name:"Breach Notification Service",category:"Cybersecurity",description:"Regulatory breach notification with compliance assessment, notification templates, and timeline management.",price:"$6,500/mo",features:["Compliance assessment","Notification templates","Timeline management","Regulatory filing"],icon:"📋",contactInfo,link:"/services/breach-notification-v858"},
  {id:"threat-intelligence-platform-v858",name:"Threat Intelligence Platform",category:"Cybersecurity",description:"Threat intelligence aggregation with IOC feeds, dark web monitoring, and risk scoring.",price:"$8,900/mo",features:["IOC feed aggregation","Dark web monitoring","Risk scoring","Threat actor tracking"],icon:"🌐",contactInfo,link:"/services/threat-intelligence-platform-v858"},

  // V859: Customer Data Platform (CDP) Services - 6 services
  {id:"cdp-unified-profiles-v859",name:"CDP Unified Customer Profiles",category:"Customer Data Platform",description:"Unified customer profiles with 360-degree view, real-time updates, and profile enrichment.",price:"$6,800/mo",features:["360-degree customer view","Real-time updates","Profile enrichment","Privacy compliance"],icon:"👤",contactInfo,link:"/services/cdp-unified-profiles-v859"},
  {id:"cdp-identity-resolution-v859",name:"CDP Identity Resolution",category:"Customer Data Platform",description:"Identity resolution with deterministic and probabilistic matching, cross-device graph, and anonymous stitching.",price:"$7,200/mo",features:["Deterministic matching","Probabilistic matching","Cross-device graph","Anonymous stitching"],icon:"🔗",contactInfo,link:"/services/cdp-identity-resolution-v859"},
  {id:"cdp-segmentation-v859",name:"CDP Segmentation Engine",category:"Customer Data Platform",description:"Advanced segmentation with predictive models, lookalike audiences, and real-time segment updates.",price:"$5,500/mo",features:["Predictive segments","Lookalike audiences","Real-time updates","Behavioral segmentation"],icon:"🎯",contactInfo,link:"/services/cdp-segmentation-v859"},
  {id:"cdp-activation-orchestration-v859",name:"CDP Activation Orchestration",category:"Customer Data Platform",description:"Omnichannel activation with journey builder, personalization engine, and next-best-action AI.",price:"$6,200/mo",features:["Journey builder","Personalization engine","Next-best-action","Omnichannel orchestration"],icon:"🚀",contactInfo,link:"/services/cdp-activation-orchestration-v859"},
  {id:"cdp-attribution-modeling-v859",name:"CDP Attribution Modeling",category:"Customer Data Platform",description:"Multi-touch attribution with algorithmic modeling, incrementality testing, and marketing mix analysis.",price:"$5,800/mo",features:["Multi-touch attribution","Algorithmic modeling","Incrementality testing","Marketing mix modeling"],icon:"📊",contactInfo,link:"/services/cdp-attribution-modeling-v859"},
  {id:"cdp-customer-journey-v859",name:"CDP Customer Journey Analytics",category:"Customer Data Platform",description:"Customer journey analytics with path analysis, friction detection, and journey optimization.",price:"$5,200/mo",features:["Path analysis","Friction detection","Journey optimization","Cross-journey insights"],icon:"🗺️",contactInfo,link:"/services/cdp-customer-journey-v859"},

  // V860: Content Strategy & SEO Services - 6 services
  {id:"content-gap-analysis-v860",name:"Content Gap Analysis Platform",category:"Content & SEO",description:"Content gap analysis with competitor benchmarking, topic clustering, and content audit automation.",price:"$3,800/mo",features:["Competitor benchmarking","Topic clustering","Content audit","Gap identification"],icon:"📝",contactInfo,link:"/services/content-gap-analysis-v860"},
  {id:"keyword-intelligence-v860",name:"Keyword Intelligence Platform",category:"Content & SEO",description:"Keyword research with search intent analysis, opportunity scoring, and keyword clustering.",price:"$3,200/mo",features:["Search intent analysis","Opportunity scoring","Keyword clustering","Long-tail discovery"],icon:"🔑",contactInfo,link:"/services/keyword-intelligence-v860"},
  {id:"seo-optimization-engine-v860",name:"SEO Optimization Engine",category:"Content & SEO",description:"Technical SEO with on-page optimization, Core Web Vitals monitoring, and schema markup automation.",price:"$4,500/mo",features:["On-page optimization","Core Web Vitals","Schema markup","Technical SEO audit"],icon:"⚙️",contactInfo,link:"/services/seo-optimization-engine-v860"},
  {id:"competitor-content-benchmarking-v860",name:"Competitor Content Benchmarking",category:"Content & SEO",description:"Competitor analysis with content comparison, share of voice tracking, and backlink analysis.",price:"$3,500/mo",features:["Content comparison","Share of voice","Backlink analysis","Competitive positioning"],icon:"🏆",contactInfo,link:"/services/competitor-content-benchmarking-v860"},
  {id:"content-roi-analytics-v860",name:"Content ROI Analytics",category:"Content & SEO",description:"Content performance analytics with ROI measurement, attribution modeling, and content scoring.",price:"$4,200/mo",features:["ROI measurement","Attribution modeling","Content scoring","Performance optimization"],icon:"💰",contactInfo,link:"/services/content-roi-analytics-v860"},
  {id:"serp-tracking-platform-v860",name:"SERP Tracking Platform",category:"Content & SEO",description:"Search ranking tracking with SERP feature monitoring, CTR optimization, and algorithm impact analysis.",price:"$3,900/mo",features:["Ranking tracking","SERP features","CTR optimization","Algorithm monitoring"],icon:"📈",contactInfo,link:"/services/serp-tracking-platform-v860"}
];

// Read existing services
const servicesFile = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const existingServices = JSON.parse(fs.readFileSync(servicesFile, 'utf8'));

// Check for duplicates and add new services
const existingIds = new Set(existingServices.map(s => s.id));
let added = 0;
for (const service of newServices) {
  if (!existingIds.has(service.id)) {
    existingServices.push(service);
    existingIds.add(service.id);
    added++;
  }
}

// Write back to file
fs.writeFileSync(servicesFile, JSON.stringify(existingServices, null, 2));

console.log(`Added ${added} new services (V856-V860). Total services: ${existingServices.length}`);
