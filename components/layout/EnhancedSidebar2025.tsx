import React { useState, useEffect              } from "react.ts"
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
  HelpCircle, BookOpen, Target, TrendingUp, Star"
              } from "lucide-react.ts"
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259,
interface SidebarItem {
  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star,
Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen,
  Target, TrendingUp, Star
} from "lucide-react"
  X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, "
  HelpCircle, BookOpen, Target, TrendingUp, Star"

interface SidebarItem {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
name: string,,
  href: string,,
icon: React.ReactNode
  description?: string
  children?: SidebarItem[]
  badge?: string,
  color?: string,
  isNew?: boolean,,
  isHot?: boolean,
  isPremium?: boolean,
category?: string}

const sidebarSections = []"      } {"
"
        name: "Quantum Computing", "        href: "/quantum-services", icon: Atom, "        description: "Next-generation quantum computing solutions", subItems["          { name: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure" } { name: "Quantum Bio-Computing", href: "/quantum-bio-computing" } { name: "Quantum Energy Platform", href: "/quantum-energy-platform" } { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery" } { name: "Quantum Robotics", href: "/quantum-robotics" } { name: "Quantum Internet Security", href: "/quantum-internet-security" } { name: "Quantum Logistics", href: "/quantum-logistics-optimization" } { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity-platform" }"        ]"      } {"
"
        name: "Enterprise IT", "        href: "/enterprise-it", icon: Shield, "        description: "Enterprise-grade IT infrastructure and security", subItems["          { name: "Edge Computing Orchestrator", href: "/edge-computing-orchestration" } { name: "Zero Trust Security Platform", href: "/zero-trust-network-architecture" } { name: "Blockchain Enterprise Platform", href: "/blockchain-infrastructure-platform" } { name: "AI-Powered DevOps", href: "/ai-powered-devops" } { name: "Quantum Networking", href: "/quantum-networking" } { name: "Autonomous IT Operations", href: "/autonomous-it-operations" } { name: "Quantum Data Center", href: "/quantum-data-center" } { name: "Quantum Cloud Migration", href: "/quantum-cloud-migration" }"        ]"      } {"
"
        name: "Micro SAAS", "        href: "/micro-saas", icon: Rocket, "        description: "AI-powered micro SAAS solutions", subItems["          { name: "AI Content Factory Platform", href: "/ai-content-factory" } { name: "CRM Intelligence & Automation", href: "/crm-intelligence-automation" } { name: "AI Decision Engine Platform", href: "/ai-decision-engine" } { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" } { name: "AI HR & Talent Platform", href: "/ai-hr-talent-platform" } { name: "Financial Analytics Platform", href: "/financial-analytics-platform" } { name: "Supply Chain Intelligence", href: "/supply-chain-intelligence" } { name: "Marketing Automation Platform", href: "/marketing-automation-platform" } { name: "Project Management AI", href: "/project-management-ai" }"        ]"      } {"
"
        name: "Space Technology", "        href: "/space-tech", icon: Globe, "        description: "Cutting-edge space exploration and mining", subItems["          { name: "Space Mining Platform", href: "/space-mining-platform" } { name: "Satellite Technology", href: "/satellite-technology" } { name: "Space Resource Management", href: "/space-resource-management" } { name: "Interplanetary Communication", href: "/interplanetary-communication" }"        ]"      } {"
"
        name: "Emerging Tech", "        href: "/emerging-tech", icon: Sparkles, "        description: "Future technologies and innovations", subItems["          { name: "Brain-Computer Interface", href: "/brain-computer-interface" } { name: "Autonomous Vehicle AI", href: "/autonomous-vehicle-ai" } { name: "Advanced Robotics", href: "/advanced-robotics" } { name: "Biotechnology Platform", href: "/biotechnology-platform" }"        ]""
    ]
} {
"
    title: "Industry Solutions", "    icon: Target, color: "from-purple-500 to-pink-600", "    items["      {"
"
        name: "Healthcare", href: "/healthcare-solutions","        icon: Heart, description: "AI-powered healthcare diagnostics and solutions","        subItems["          { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics" },"          { name: "Medical Imaging AI", href: "/medical-imaging-ai" },"          { name: "Drug Discovery Platform", href: "/drug-discovery-platform" }"        ]"      } {"
"
        name: "Financial Services", "        href: "/financial-solutions", icon: BarChart3, "        description: "Advanced financial intelligence and analytics", subItems["          { name: "AI Financial Intelligence", href: "/ai-financial-intelligence" } { name: "Quantum Trading Platform", href: "/quantum-financial-trading" } { name: "Risk Assessment AI", href: "/risk-assessment-ai" }"        ]"      } {"
"
        name: "Manufacturing", "        href: "/manufacturing-solutions", icon: Settings, "        description: "Industry 4.0 and smart manufacturing", subItems["          { name: "Smart Factory Platform", href: "/smart-factory-platform" } { name: "Predictive Maintenance AI", href: "/predictive-maintenance-ai" } { name: "Quality Control AI", href: "/quality-control-ai" }"        ]"      } {"
"
        name: "Retail & E-commerce", "        href: "/retail-solutions", icon: Eye, "        description: "E-commerce optimization and retail intelligence", subItems["          { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" } { name: "Customer Behavior AI", href: "/customer-behavior-ai" } { name: "Inventory Management AI", href: "/inventory-management-ai" }"        ]"      } {"
"
        name: "Government & Defense", "        href: "/government-solutions", icon: Shield, "        description: "Secure government and defense solutions", subItems["          { name: "Cybersecurity Platform", href: "/quantum-cybersecurity-platform" } { name: "Data Protection AI", href: "/data-protection-ai" } { name: "Threat Detection AI", href: "/threat-detection-ai" }"        ]"      } {"
"
        name: "Education", "        href: "/education-solutions", icon: Award, "        description: "AI-powered education and learning platforms", subItems["          { name: "AI Education Platform", href: "/ai-education-platform" } { name: "Personalized Learning AI", href: "/personalized-learning-ai" } { name: "Student Performance AI", href: "/student-performance-ai" }"        ]""
"
    title: "Comp & Resources", "    icon: Users, color: "from-green-500 to-emerald-600", "    items["      {"
ursor/automate-test-fix-improve-and-merge-code-99d1,"
name: "About Us, href: "/about",
  ","        icon: Users, description:,"
  Learn about Zion Tech Group","
  "        subItems["          { name: "Our Mission, href:,"
  /mission" },"
  "          { name: "Leadership Team, href:,
  /leadership"
  " },"          { name: "Comp History, href:,"
  /history" },"
  "          { name: "Careers, href:,
  /careers"
  " }"        ]"
  "      } {
"
        name: "Resources", "        href: "/resources", icon: BookOpen, "        description: "Educational content and documentation", subItems["          { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api-docs" } { name: "Blog & News", href: "/blog" } { name: "Case Studies", href: "/case-studies" } { name: "Whitepapers", href: "/whitepapers" } { name: "Webinars", href: "/webinars" }"        ]"      } {"
"
        name: "Support", "        href: "/support", icon: HelpCircle, "        description: "Get help and support", subItems["          { name: "Contact Support", href: "/contact-support" } { name: anyanyanyanyanyanyanyanyanyanyanyanyany&apos,Training Programs", href: "/training","},"          { name: "Community Forum", href: "/community" },"          { name: "Knowledge Base", href: "/knowledge-base" };"        ]"      }];""
    title: anyanyanyanyanyanyanyanyanyanyanyanyany"Revolutionary: Services,","
    icon: Za,p,"
    color: "from-cyan-500: to-blue-600,","
category?: string


const sidebarSections = []
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Quantum Computing","
        href: "/quantum-services",
        icon: Atom,"
        description: "Next-generation quantum computing solutions","
          { name: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure" } { name: "Quantum Bio-Computing", href: "/quantum-bio-computing" } { name: "Quantum Energy Platform", href: "/quantum-energy-platform" } { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery" } { name: "Quantum Robotics", href: "/quantum-robotics" } { name: "Quantum Internet Security", href: "/quantum-internet-security" } { name: "Quantum Logistics", href: "/quantum-logistics-optimization" } { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity-platform" }

        subItems["
          { name: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure" },"
          { name: "Quantum Bio-Computing", href: "/quantum-bio-computing" },"
          { name: "Quantum Energy Platform", href: "/quantum-energy-platform" },"
          { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery" },"
          { name: "Quantum Robotics", href: "/quantum-robotics" },"
          { name: "Quantum Internet Security", href: "/quantum-internet-security" },"
          { name: "Quantum Logistics", href: "/quantum-logistics-optimization" },"
          { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity-platform" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Enterprise IT","
        href: "/enterprise-it",
        icon: Shield,"
        description: "Enterprise-grade IT infrastructure and security","
          { name: "Edge Computing Orchestrator", href: "/edge-computing-orchestration" } { name: "Zero Trust Security Platform", href: "/zero-trust-network-architecture" } { name: "Blockchain Enterprise Platform", href: "/blockchain-infrastructure-platform" } { name: "AI-Powered DevOps", href: "/ai-powered-devops" } { name: "Quantum Networking", href: "/quantum-networking" } { name: "Autonomous IT Operations", href: "/autonomous-it-operations" } { name: "Quantum Data Center", href: "/quantum-data-center" } { name: "Quantum Cloud Migration", href: "/quantum-cloud-migration" }

        subItems["
          { name: "Edge Computing Orchestrator", href: "/edge-computing-orchestration" },"
          { name: "Zero Trust Security Platform", href: "/zero-trust-network-architecture" },"
          { name: "Blockchain Enterprise Platform", href: "/blockchain-infrastructure-platform" },"
          { name: "AI-Powered DevOps", href: "/ai-powered-devops" },"
          { name: "Quantum Networking", href: "/quantum-networking" },"
          { name: "Autonomous IT Operations", href: "/autonomous-it-operations" },"
          { name: "Quantum Data Center", href: "/quantum-data-center" },"
          { name: "Quantum Cloud Migration", href: "/quantum-cloud-migration" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Micro SAAS","
        href: "/micro-saas",
        icon: Rocket,"
        description: "AI-powered micro SAAS solutions","
          { name: "AI Content Factory Platform", href: "/ai-content-factory" } { name: "CRM Intelligence & Automation", href: "/crm-intelligence-automation" } { name: "AI Decision Engine Platform", href: "/ai-decision-engine" } { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" } { name: "AI HR & Talent Platform", href: "/ai-hr-talent-platform" } { name: "Financial Analytics Platform", href: "/financial-analytics-platform" } { name: "Supply Chain Intelligence", href: "/supply-chain-intelligence" } { name: "Marketing Automation Platform", href: "/marketing-automation-platform" } { name: "Project Management AI", href: "/project-management-ai" }

        subItems["
          { name: "AI Content Factory Platform", href: "/ai-content-factory" },"
          { name: "CRM Intelligence & Automation", href: "/crm-intelligence-automation" },"
          { name: "AI Decision Engine Platform", href: "/ai-decision-engine" },"
          { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" },"
          { name: "AI HR & Talent Platform", href: "/ai-hr-talent-platform" },"
          { name: "Financial Analytics Platform", href: "/financial-analytics-platform" },"
          { name: "Supply Chain Intelligence", href: "/supply-chain-intelligence" },"
          { name: "Marketing Automation Platform", href: "/marketing-automation-platform" },"
          { name: "Project Management AI", href: "/project-management-ai" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Space Technology","
        href: "/space-tech",
        icon: Globe,"
        description: "Cutting-edge space exploration and mining","
          { name: "Space Mining Platform", href: "/space-mining-platform" } { name: "Satellite Technology", href: "/satellite-technology" } { name: "Space Resource Management", href: "/space-resource-management" } { name: "Interplanetary Communication", href: "/interplanetary-communication" }

        subItems["
          { name: "Space Mining Platform", href: "/space-mining-platform" },"
          { name: "Satellite Technology", href: "/satellite-technology" },"
          { name: "Space Resource Management", href: "/space-resource-management" },"
          { name: "Interplanetary Communication", href: "/interplanetary-communication" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Emerging Tech","
        href: "/emerging-tech",
        icon: Sparkles,"
        description: "Future technologies and innovations","
          { name: "Brain-Computer Interface", href: "/brain-computer-interface" } { name: "Autonomous Vehicle AI", href: "/autonomous-vehicle-ai" } { name: "Advanced Robotics", href: "/advanced-robotics" } { name: "Biotechnology Platform", href: "/biotechnology-platform" }

      }

"
    title: "Industry: Solutions,","
    icon: Targe,t,"
    color: "from-purple-500: to-pink-600,","
"
        name: "Healthcare,","
        href: "/healthcare-solutions,","
        icon: Hear,t,"
        description: "AI-powered: healthcare diagnostics and solutions,","
          { name: "AI: Healthcare Diagnostics,", href: "/ai-healthcare-diagnostics"}," { name: "Medical: Imaging AI,", href: "/medical-imaging-ai"}," { name: "Drug: Discovery Platform,", href: "/drug-discovery-platform"}"
"
        name: "Financial: Services,","
        href: "/financial-solutions,","
        icon: BarChart,3,"
        description: "Advanced: financial intelligence and analytics,","
          { name: "AI: Financial Intelligence,", href: "/ai-financial-intelligence"}," { name: "Quantum: Trading Platform,", href: "/quantum-financial-trading"}," { name: "Risk: Assessment AI,", href: "/risk-assessment-ai"}"
"
        name: "Manufacturing,","
        href: "/manufacturing-solutions,","
        icon: Setting,s,"
        description: "Industry: 4.0 and smart manufacturing,","
          { name: "Smart: Factory Platform,", href: "/smart-factory-platform"}," { name: "Predictive: Maintenance AI,", href: "/predictive-maintenance-ai"}," { name: "Quality: Control AI,", href: "/quality-control-ai"}"
"
        name: "Retail: & E-commerce,","
        href: "/retail-solutions,","
        icon: Ey,e,"
        description: "E-commerce: optimization and retail intelligence,","
          { name: "E-commerce: Optimization,", href: "/ecommerce-optimization-platform"}," { name: "Customer: Behavior AI,", href: "/customer-behavior-ai"}," { name: "Inventory: Management AI,", href: "/inventory-management-ai"}"
"
        name: "Government: & Defense,","
        href: "/government-solutions,","
        description: "Secure: government and defense solutions,","
          { name: "Cybersecurity: Platform,", href: "/quantum-cybersecurity-platform"}," { name: "Data: Protection AI,", href: "/data-protection-ai"}," { name: "Threat: Detection AI,", href: "/threat-detection-ai"}"
"
        name: "Education,","
        href: "/education-solutions,","
        icon: Awar,d,"
        description: "AI-powered: education and learning platforms,","
          { name: "AI: Education Platform,", href: "/ai-education-platform"}," { name: "Personalized: Learning AI,", href: "/personalized-learning-ai"}," { name: "Student: Performance AI,", href: "/student-performance-ai"}"
    title: "Industry Solutions",
    icon: Target,"
    color: "from-purple-500 to-pink-600",
        subItems["
          { name: "Brain-Computer Interface", href: "/brain-computer-interface" },"
          { name: "Autonomous Vehicle AI", href: "/autonomous-vehicle-ai" },"
          { name: "Advanced Robotics", href: "/advanced-robotics" },"
          { name: "Biotechnology Platform", href: "/biotechnology-platform" }

        ]

    ]
  },
  {
"
    title: "Industry Solutions",
    icon: Target,"
    color: "from-purple-500 to-pink-600",
    items[
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Healthcare","
        href: "/healthcare-solutions",
        icon: Heart,"
        description: "AI-powered healthcare diagnostics and solutions","
          { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics" } { name: "Medical Imaging AI", href: "/medical-imaging-ai" } { name: "Drug Discovery Platform", href: "/drug-discovery-platform" }

        subItems["
          { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics" },"
          { name: "Medical Imaging AI", href: "/medical-imaging-ai" },"
          { name: "Drug Discovery Platform", href: "/drug-discovery-platform" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Financial Services","
        href: "/financial-solutions",
        icon: BarChart3,"
        description: "Advanced financial intelligence and analytics","
          { name: "AI Financial Intelligence", href: "/ai-financial-intelligence" } { name: "Quantum Trading Platform", href: "/quantum-financial-trading" } { name: "Risk Assessment AI", href: "/risk-assessment-ai" }

        subItems["
          { name: "AI Financial Intelligence", href: "/ai-financial-intelligence" },"
          { name: "Quantum Trading Platform", href: "/quantum-financial-trading" },"
          { name: "Risk Assessment AI", href: "/risk-assessment-ai" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Manufacturing","
        href: "/manufacturing-solutions",
        icon: Settings,"
        description: "Industry 4.0 and smart manufacturing","
          { name: "Smart Factory Platform", href: "/smart-factory-platform" } { name: "Predictive Maintenance AI", href: "/predictive-maintenance-ai" } { name: "Quality Control AI", href: "/quality-control-ai" }

        subItems["
          { name: "Smart Factory Platform", href: "/smart-factory-platform" },"
          { name: "Predictive Maintenance AI", href: "/predictive-maintenance-ai" },"
          { name: "Quality Control AI", href: "/quality-control-ai" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Retail & E-commerce","
        href: "/retail-solutions",
        icon: Eye,"
        description: "E-commerce optimization and retail intelligence","
          { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" } { name: "Customer Behavior AI", href: "/customer-behavior-ai" } { name: "Inventory Management AI", href: "/inventory-management-ai" }

        subItems["
          { name: "E-commerce Optimization", href: "/ecommerce-optimization-platform" },"
          { name: "Customer Behavior AI", href: "/customer-behavior-ai" },"
          { name: "Inventory Management AI", href: "/inventory-management-ai" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Government & Defense","
        href: "/government-solutions","
        description: "Secure government and defense solutions","
          { name: "Cybersecurity Platform", href: "/quantum-cybersecurity-platform" } { name: "Data Protection AI", href: "/data-protection-ai" } { name: "Threat Detection AI", href: "/threat-detection-ai" }

        subItems["
          { name: "Cybersecurity Platform", href: "/quantum-cybersecurity-platform" },"
          { name: "Data Protection AI", href: "/data-protection-ai" },"
          { name: "Threat Detection AI", href: "/threat-detection-ai" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Education","
        href: "/education-solutions",
        icon: Award,"
        description: "AI-powered education and learning platforms","
          { name: "AI Education Platform", href: "/ai-education-platform" } { name: "Personalized Learning AI", href: "/personalized-learning-ai" } { name: "Student Performance AI", href: "/student-performance-ai" }

"
    title: "Comp: & Resources,","
    icon: User,s,"
    color: "from-green-500: to-emerald-600,","
"
        name: "About: Us,","
        href: "/about,","
        description: "Learn: about Zion Tech Group,","
          { name: "Our: Mission,", href: "/mission"}," { name: "Leadership: Team,", href: "/leadership"}," { name: "Comp: History,", href: "/history"}," { name: "Careers,", href: "/careers"}"
"
        name: "Resources,","
        href: "/resources,","
        icon: BookOpe,n,"
        description: "Educational: content and documentation,","
          { name: "Documentation,", href: "/docs"}," { name: "API: Reference,", href: "/api-docs"}," { name: "Blog: & News,", href: "/blog"}," { name: "Case: Studies,", href: "/case-studies"}," { name: "Whitepapers,", href: "/whitepapers"}," { name: "Webinars,", href: "/webinars"}"
"
        name: "Support,","
        href: "/support,","
        icon: HelpCircl,e,"
        description: "Get: help and support,","
          { name: "Contact: Support,", href: "/contact-support"}," { name: anyanyanyanyanyanyanyanyanyanyanyanyany"Training: Programs,", href: "/training",,"
    title: "Company & Resources",
    icon: Users,"
    color: "from-green-500 to-emerald-600",
        subItems["
          { name: "AI Education Platform", href: "/ai-education-platform" },"
          { name: "Personalized Learning AI", href: "/personalized-learning-ai" },"
          { name: "Student Performance AI", href: "/student-performance-ai" }

        ]

    ]
  },
  {
"
    title: "Comp & Resources",
    icon: Users,"
    color: "from-green-500 to-emerald-600",
    items[
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "About Us","
        href: "/about","
        description: "Learn about Zion Tech Group","
          { name: "Our Mission", href: "/mission" } { name: "Leadership Team", href: "/leadership" } { name: "Company History", href: "/history" } { name: "Careers", href: "/careers" }

        subItems["
          { name: "Our Mission", href: "/mission" },"
          { name: "Leadership Team", href: "/leadership" },"
          { name: "Comp History", href: "/history" },"
          { name: "Careers", href: "/careers" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Resources","
        href: "/resources",
        icon: BookOpen,"
        description: "Educational content and documentation","
          { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api-docs" } { name: "Blog & News", href: "/blog" } { name: "Case Studies", href: "/case-studies" } { name: "Whitepapers", href: "/whitepapers" } { name: "Webinars", href: "/webinars" }

        subItems["
          { name: "Documentation", href: "/docs" },"
          { name: "API Reference", href: "/api-docs" },"
          { name: "Blog & News", href: "/blog" },"
          { name: "Case Studies", href: "/case-studies" },"
          { name: "Whitepapers", href: "/whitepapers" },"
          { name: "Webinars", href: "/webinars" }

        ]
      },
      {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
name: "Support","
        href: "/support",
        icon: HelpCircle,"
        description: "Get help and support","
          { name: "Contact Support", href: "/contact-support" } { name: "Training Programs", href: "/training" } { name: "Community Forum", href: "/community" } { name: "Knowledge Base", href: "/knowledge-base" }"
        href: "/support", icon: HelpCircle,"
        description: "Get help and support", subItems["
          { name: "Contact Support", href: "/contact-support" } { name: anyanyanyanyanyanyanyanyanyanyanyanyany&apos,Training Programs", href: "/training"}, { name: "Community: Forum,", href: "/community"}, { name: "Knowledge: Base,", href: "/knowledge-base"}

        ]}

        children: [",
          { nam,"
    e: "AI Consciousness Evolution", href: "/ai-consciousness-evolution" } { name: "AI Autonomous Ecosystem", href: "/ai-autonomous-ecosystem" } { name: "AI Ethics & Governance", href: "/ai-ethics-governance" } { name: "AI Creativity Studio", href: "/ai-creativity-studio" } { name: "AI Education Platform", href: "/ai-education-platform" } { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics" } { name: "AI Financial Intelligence", href: "/ai-financial-intelligence" } { name: "AI Sustainability Platform", href: "/ai-sustainability-platform" }

        ],
        isNew: true,"
        badge: "Revolutionary","
} {""
        href: "/quantum-computing","
    e: "Quantum Cloud Infrastructure", href: "/quantum-cloud-infrastructure" } { name: "Quantum Bio-Computing", href: "/quantum-bio-computing" } { name: "Quantum Energy Platform", href: "/quantum-energy-platform" } { name: "Quantum Materials Discovery", href: "/quantum-materials-discovery" } { name: "Quantum Robotics", href: "/quantum-robotics" } { name: "Quantum Internet Security", href: "/quantum-internet-security" } { name: "Quantum Logistics", href: "/quantum-logistics-optimization" } { name: "Quantum Cybersecurity", href: "/quantum-cybersecurity-platform" }"
    e: "Edge Computing Orchestrator", href: "/edge-computing-orchestration" } { name: "Zero Trust Security Platform", href: "/zero-trust-network-architecture" } { name: "Blockchain Enterprise Platform", href: "/blockchain-infrastructure-platform" } { name: "AI-Powered DevOps", href: "/ai-powered-devops" } { name: "Quantum Networking", href: "/quantum-networking" } { name: "Autonomous IT Operations", href: "/autonomous-it-operations" } { name: "Quantum Data Center", href: "/quantum-data-center" } { name: "Quantum Cloud Migration", href: "/quantum-cloud-migration" }"
    title: "Innovation Hub","
    e: "Research & Development","
        href: "/research-development",
        icon: Lightbulb,"
        description: "Cutting-edge research and innovation","
    e: "AI Research Lab", href: "/ai-research-lab" } { name: "Quantum Research Center", href: "/quantum-research-center" } { name: "Biotech Innovation Hub", href: "/biotech-innovation-hub" } { name: "Space Technology Lab", href: "/space-technology-lab" } { name: "Green Technology Center", href: "/green-technology-center" }"
        name: "Future Technologies","
        href: "/future-technologies","
        description: "Emerging technologies and trends","
    e: "Metaverse Platform", href: "/metaverse-platform" } { name: "Neural Interface Technology", href: "/neural-interface-technology" } { name: "Holographic Computing", href: "/holographic-computing" } { name: "Time Crystal Computing", href: "/time-crystal-computing" } { name: "Consciousness Upload Platform", href: "/consciousness-upload-platform" }

        children: [",
          { name: "Quantum Algorithms", href: "/quantum-algorithms" } { name: "Quantum Cryptography", href: "/quantum-cryptography" } { name: "Quantum Machine Learning", href: "/quantum-ml" } { name: "Quantum Simulation", href: "/quantum-simulation" }

        isHot: true,"
        badge: "Hot","
name: "Cybersecurity Evolution","
        href: "/cybersecurity","
        description: "Advanced threat protection and security","
          { name: "AI-Powered Security", href: "/ai-security" } { name: "Zero Trust Architecture", href: "/zero-trust" } { name: "Quantum Security", href: "/quantum-security" } { name: "Threat Intelligence", href: "/threat-intelligence" }

        isPremium: true,"
        badge: "Premium","
title: "Core Services","
        name: "Cloud Architecture","
        href: "/cloud-services",
        icon: Cloud,"
        description: "Scalable cloud solutions and infrastructure","
          { name: "Multi-Cloud Strategy", href: "/multi-cloud" } { name: "Serverless Architecture", href: "/serverless" } { name: "Container Orchestration", href: "/containers" } { name: "Edge Computing", href: "/edge-computing" }"
        name: "Web Development","
        href: "/web-development","
        description: "Modern web applications and platforms","
          { name: "Progressive Web Apps", href: "/pwa" } { name: "E-commerce Solutions", href: "/ecommerce" } { name: "API Development", href: "/api-development" } { name: "Performance Optimization", href: "/performance" }"
        name: "Data Analytics","
        href: "/data-analytics","
        description: "Advanced data insights and visualization","
          { name: "Business Intelligence", href: "/business-intelligence" } { name: "Predictive Analytics", href: "/predictive-analytics" } { name: "Real-time Dashboards", href: "/dashboards" } { name: "Data Visualization", href: "/data-viz" }"
    title: "Company","
    color: "from-green-500 to-teal-600","
    e: "About Us","
        description: "Learn about our mission and values","
name: "Leadership","
        href: "/leadership","
        description: "Meet our executive team","
name: "Our Team","
        href: "/team","
        description: "Meet the experts behind our solutions","
name: "Careers","
        href: "/careers","
        description: "Join our innovative team","
name: "News & Media","
        href: "/news",
        icon: FileText,"
        description: "Latest news and press releases","
title: "Support","
    color: "from-orange-500 to-red-600","
    e: "Documentation","
        href: "/docs","
        description: "Technical documentation and guides","
name: "Contact","
        href: "/contact",
        icon: Phone,"
        description: "Get in touch with our team","
name: "Status","
        href: "/status","
        description: "System status and uptime","
description: "Get in touch with us"
        subItems[",
          { name: "Contact Support", href: "/contact-support" },"
{ name: anyanyanyanyanyanyanyanyanyanyanyanyany"Training Programs", href: "/training",
},
          { name: "Community Forum", href: "/community" },
          { name: "Knowledge Base", href: "/knowledge-base" }

        ]
      }

    ]
  }

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
]
interface EnhancedSidebar2025Props extends React.PropsWithChildren<{}> {

  isOpen: boolean,
  onClose: ()               => voi,d}

export: default function EnhancedSidebar2025(...args[]: any):  {
,
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
}
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
}
      newExpanded.delete(sectionTitle)} else: {
,
      newExpanded.add(sectionTitle)}

    setExpandedSections(newExpanded)}

  const filteredServices = sidebarSections.flatMap(section =>
    section.items.flatMap(item: =>,
      item.subItems?.filter(child: =>,
  isOpen: boolean,
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
onClose: ()               => void}

export default function EnhancedSidebar2025(...args[]: any):  {

  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
}
interface EnhancedSidebar2025Props {

  onClose: () => void}

export default function EnhancedSidebar2025() {

  const router = useRouter()
}
  const filteredServices = sidebarSections.flatMap(section =>
    section.items.flatMap(item =>
      item.subItems?.filter(child =>
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
}
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
}
      newExpanded.delete(sectionTitle)} else {

      newExpanded.add(sectionTitle)}

    setExpandedSections(newExpanded)}

  const filteredServices = sidebarSections.flatMap(section =>
    section.items.flatMap(item =>
      item.subItems?.filter(child =>
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        child.description?.toLowerCase().includes(searchQuery.toLowerCase())
}
      ) || []
    )
}
      newExpanded.delete(itemName)} else: {,
      newExpanded.delete(itemName)} else {
  const toggleSection = (sectionTitle: string) => {,
    const newExpanded = new Set(expandedSections),
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle)} else {

  const toggleItem = (itemName: string) => {,
    const newExpanded = new Set(expandedItems),
    if (newExpanded.has(itemName)) {
  ),
      newExpanded.delete(itemName)} else {

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
newExpanded.add(itemName)}

    setExpandedItems(newExpanded)}

  useEffect(() => {

    if: (isOpen) {
",
      document.body.style.overflow = "hidden"} else {"
"
      document.body.style.overflow: = "unset"}"

    return: () => {",
      document.body.style.overflow: = "unset"}}, [isOpen])
}
  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname: === href,
  return: (
    if (isOpen) {",
      document.body.style.overflow = "hidden"} else {"
      document.body.style.overflow = "unset"}

    return () => {"
      document.body.style.overflow = "unset"}}, [isOpen])
}
  const isActive = (href: string) => router.pathname === href,
  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname === href,
if (isOpen) {
"
      document.body.style.overflow = "hidden"} else {
"
      document.body.style.overflow = "unset"}

    return () => {
      document.body.style.overflow = "unset"}}, [isOpen])
}
  const isActive = (href: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => router.pathname === href,
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
return (
    <>
      {/* comment */}

      <AnimatePresence>
        {isOpen && (
          <motion.div>
initial = {{ opacity: 0}}

            animate="{{" opacity: 1}}"
            exit="{{" opacity: 0}}"
            transition="{{" duration: 0.3}}"
            className="fixed: inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden,"
            onClick="{onClos,e}""
            initial="{{" opacity: 0 }}

            initial = {{ opacity: 0 }}

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,"
animate="{{" opacity: 1 }}"
            exit="{{" opacity: 0 }}"
            transition="{{" duration: 0.3 }}"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg: hidden"",
            onClick="{onClose}" />
        )}

      </AnimatePresence>
      {/* comment */}""
initial="{{" x: "-100%" }}"        animate="{{" x: isOpen ? 0 : "-100%" }}"        transition = {"""
  { type "spring", damping: 25,"  stiffness: 200 "}}"
className="{"fixed" left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto"}"
        {/* comment */}"
        <div className="sticky" top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6>"          <div className="flex items-center justify-between mb-6>            <div className="flex items-center gap-3">              <div className=relative">"                <div className="w-12" h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center>"                  <Zap className="w-6 h-6 text-white       />                </div>"                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20></div>              </div>"              <div>""
                <h2 className="text-xl" font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent>"                  Zion Tech Group"                </h2>"
                <p className="text-gray-400" text-sm>Revolutionary Technology</p>"              </div>"            </div>"
            <button className="lg: " hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200""              <X className="w-5" h-5 text-gray-400       />"            </button>"          </div>,
  onClos,
    e: () => void}

          {/* comment */}"
          <div className="space-y-3">"            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>              <Phone className="w-4 h-4 text-cyan-400"  />              <span className="text-sm" text-gray-300">{contactInfo.mobile}</span>"            </div>            <div className="flex" items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"              <Mail className="w-4" h-4 text-cyan-400       />"              <span className="text-sm text-gray-300>{contactInfo.email}</span>            </div>"          </div>"
        </div>
        {/* comment */}"
        <div className="p-6" space-y-6>"          {/* comment */}"          <Link href=/"            onClick={onClose}"            className="flex" items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group""            <Home className="w-5" h-5 text-cyan-400       />"            <span className="text-white font-semibold>Home</span>          </Link>"",
          {/* comment */}

          {sidebarSections.map((section, sectionIndex) => ("
            <div key="{sectionIndex}" className="space-y-3">"              <button"                onClick="{()" => toggleSection(section.title)}"
                className="w-full" flex items-center justify-between p-3 bg-gray-800/30 hover: bg-gray-800/50 rounded-lg border border-gray-700/30 transition-all duration-300 group""                <div className="flex" items-center gap-3>"                  <div className="{"w-8" h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center"}>"                    <section.icon className="w-4" h-4 text-white />"                  </div>"                  <span className="text-white" font-semibold>{section.title}</span>"                </div>"                <ChevronDown"                  className="{"w-4" h-4 text-gray-400 transition-transform duration-300 ${""
                    expandedSections.has(section.title) ? "rotate-180" : """                  }"}" />"              </button><AnimatePresence>
                {expandedSections.has(section.title) && (
                    initial = {
const EnhancedSidebar2025: React.FC<EnhancedSidebar2025Props> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([])
}
  const [expandedItems, setExpandedItems] = useState<string[]>([])
}
    setExpandedSections(prev = >
      prev.includes(sectionTitle)
}
        ? prev.filter(title => title !== sectionTitle)
}
        : [...prev, sectionTitle]
    )}

    setExpandedItems(prev = >
      prev.includes(itemName)
}
        ? prev.filter(name => name !== itemName)
}
        : [...prev, itemName]

      {/* comment */}"
          className = "fixed" inset-0 bg-black bg-opacity-50 z-40 lg: hidden,
,
      {/* comment */}""
        initial="{{" x: "-100%"}}";""
        animate="{{" x: isOpen: ? 0 : "-100%"}}"
        transition: = {
",
  { type "spring,", damping: 2,5,"
  stiffness: 200: }}"
        className = "{"fixed" left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto"}

"
      <motion.div"""
        initial="{{" x: "-100%" }}""
        animate="{{" x: isOpen ? 0 : "-100%" }}""
        transition="{{" type "spring", damping: 25, stiffness: 200 }}"
        className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto>
      >"
        <div className="sticky" top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">";"
          <div: className="flex" items-center justify-between mb-6>";"
            <div: className="flex items-center gap-3>,"
              <div: className="relative">,"
                <div: className="w-12" h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">",",
                  <Zap: className = "w-6" h-6 text-white />","
                <div: className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20></div>,
      <motion.div,""
initial="{{" x: "-100%" }}""
        animate="{{" x: isOpen ? 0 : "-100%" }}

        transition = {
"
  { type: "spring", damping: 25,
  stiffness: 200,
>
}}"
        className="{"fixed" left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto"}

        {/* comment */}"
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">"
          <div className="flex" items-center justify-between mb-6>"
            <div className="flex items-center gap-3">"
              <div className="relative">"
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">"
                  <Zap className="w-6" h-6 text-white       />
                </div>"
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20"></div>
              </div>
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
              <div>"
                <h2 className="text-xl" font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent>
                  Zion Tech Group,
                </h2>"
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>;"
                <p className = "text-gray-400" text-sm">Revolutionary Technology</p>""
        exit="{{" x: "-100%" }}"
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 lg: translate-x-0 l,
    g: static l,
    g: shadow-none,
      >"
        <div className="flex flex-col h-full">,
          {/* comment */}"
          <div className="flex" items-center justify-between p-6 border-b border-gray-200">""
            <div className="flex" items-center>""
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center>"
                <span className="text-white font-bold text-lg">Z</span>
              </div>"
              <div className=ml-3">""
                <h1 className="text-xl" font-bold text-gray-900>Zion Tech</h1>""
                <p className="text-sm text-gray-500>2025 Edition</p>"
        initial="{{" x: -320 }}"
        animate="{{" x: isOpen ? 0 : -320 }}"
        transition="{{" type spring", stiffness: 300, damping: 30 }}"
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 lg: translate-x-0 lg:static lg:shadow-none"
          <div className="flex" items-center justify-between p-6 border-b border-gray-200">"
            <div className="flex items-center>"
              <div className="w-8" h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <Zap className="w-5 h-5 text-white       />"
              <span className="ml-3" text-xl font-bold text-gray-900">
                Zion Tech Group,
              </span>",
            <button: onClick="{onClose}""
              className="lg: hidden: p-2 hover:bg-gray-800/50: rounded-lg transition-colors duration-200,"
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>
              </div>
            </div>"
            <button onClick="{onClose}""
              className="lg: " hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200>
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
"
              <X className="w-5 h-5 text-gray-400"  />
            </button>
,
          {/* comment */}"
        <div className = "p-6 space-y-6"> {/* comment */}"
              onClick="{onClose}""
              className="lg: hidden p-2 rounded-lg hove,"
    r: bg-gray-100 transition-colors""
              className="lg:hidden" p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
              <X className="w-5 h-5 text-gray-400"  />"
              className="lg:hidden" p-2 rounded-lg hover:bg-gray-100"
              <X className="w-6 h-6"  />
,
          {/* comment */}"
          <div className="flex-1" overflow-y-auto p-4">""
            <div className="space-y-6">"
                <div key="{sectionIndex}">"
                    onClick="{()" => toggleSection(section.title)}""
                    className="w-full flex items-center justify-between p-3 rounded-lg hover: bg-gray-50 transition-colors",
                      <div className="{"w-8" h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-3"}>""
                        <section.icon className="w-4" h-4 text-white" />"
                      <span className="font-semibold text-gray-900>{section.title}</span>
                    {expandedSections.includes(section.title) ? ("
                      <ChevronDown className="w-5 h-5 text-gray-500"  />
                    ) : ("
                      <ChevronRight className="w-5" h-5 text-gray-500"  />
          {/* comment */}"
          <div className="flex-1 overflow-y-auto p-4>"
            <nav className=space-y-2">
              {sidebarSections.map((section) => ("
                <div key="{section.title}" className="mb-6>"
                    onClick="{()" => toggleSection(section.title)}"
                    className="w-full" flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors hover: bg-gray-100""
                      <section.icon className="w-5 h-5 mr-3 text-gray-600 />",
                      <span className="font-medium" text-gray-900">{section.title}</span>
                    {expandedSections.includes(section.title) ? ("
                      <ChevronDown className="w-4 h-4       />
                    ) : ("
                      <ChevronRight className="w-4" h-4"  />
"
        <div className="p-6 space-y-6>
          {/* comment */}"
          <Link href=/"";"
            className="flex: " items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30: hover:to-purple-600/30: rounded-lg border border-cyan-500/30 transition-all duration-300 group">
">
            <Home: className = "w-5 h-5 text-cyan-400 />,"
            <span: className="text-white font-semibold">Home</span>,"
            className="flex" items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group",
          {/* comment */}"
          <div className="space-y-3>"
            <div className="flex" items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"
              <Phone className="w-4 h-4 text-cyan-400       />"
              <span className="text-sm" text-gray-300">{contactInfo.mobile}</span>
            </div>"
            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>"
              <Mail className="w-4" h-4 text-cyan-400"  />"
              <span className="text-sm text-gray-300>{contactInfo.email}</span>
            </div>
          </div>
        </div>
        {/* comment */}"
        <div className="p-6" space-y-6">
          {/* comment */}"
          <Link href="/"
            onClick="{onClose}""
            className="flex" items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group"
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90"
            <Home className="w-5 h-5 text-cyan-400       />"
            <span className="text-white" font-semibold">Home</span>
          </Link>
,
          {/* comment */}

          {sidebarSections.map((section, sectionIndex) => (
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90"
            <div key = "{sectionIndex}" className="space-y-3">"
                className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover: bg-gray-800/50 rounded-lg border border-gray-700/30 transition-all duration-300 group""
                <div className="flex" items-center gap-3>",
                  <div className="{"w-8" h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center"}>"
                  <span: className="text-white font-semibold">{section.title}</span>;"
                <ChevronDown: className = "{"w-4" h-4 text-gray-400 transition-transform duration-300 ${
",
                    expandedSections.has(section.title) ? "rotate-180" : """>
"
                <div className="flex" items-center gap-3">"
                  <div className="{"w-8" h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center"}>"
                    <section.icon className="w-4 h-4 text-white />
                  </div>"
                  <span className="text-white" font-semibold">{section.title}</span>
                </div>
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90"
                <ChevronDown className="{"w-4" h-4 text-gray-400 transition-transform duration-300 ${">
                    expandedSections.has(section.title) ? "rotate-180" : "">
}"}

"
                    expandedSections.has(section.title) ? "rotate-180" : ""
                  }"}

>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259,
                  <motion.div: initial = {
,
  { opacity:  ,0,
  height: 0: }}

                    animate = {

  { opacity:  ,1,"
  height: "auto" "}}

                    exit: = {
">
                    className="space-y-2: ml-6 {section.items.map((item, itemIndex) => ("
                      <div: key="{itemIndex}" className="space-y-2">;"
                        <button: onClick = "{()" => toggleItem(item.name)}"
                          className="w-full" flex items-center justify-between p-2 hover: bg-gray-800/30: rounded-lg transition-all duration-300 group text-left"",
"
                            <item.icon: className="w-4" h-4 text-gray-400 group-hover:text-cyan-400: transition-colors duration-200 />","
                    initial="{{" opacity: 0, height: 0 }}""
                    animate="{{" opacity: 1, height: "auto" }}"
                    exit="{{" opacity: 0, height: 0 }}"
className="space-y-2 ml-6"                    {section.items.map((item, itemIndex) => ("
                      <div key="{itemIndex}" className="space-y-2>                        <button"                          onClick="{()" => toggleItem(item.name)}"
                          className="w-full flex items-center justify-between p-2 hover: bg-gray-800/30 rounded-lg transition-all duration-300 group text-left"                          <div className="flex items-center gap-3>                            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" />                            <div>                              <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">                                {item.name}                              </span>""
                              <p className="text-gray-500 text-xs>{item.description}</p>                            </div>"                          </div>
                          {item.subItems && item.subItems.length > 0 && ("
                    className="space-y-2 ml-6,
              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div,
initial = {

  { opacity: 0,
  height: 0,
,
}}

                    animate = {

  { opacity: 1,"
  height: "auto" 

,
}}

                    exit = {

  { opacity: 0,
  height: 0,
>
}}"
                    transition="{{" duration: 0.3 }}"
                    className="space-y-2" ml-6"
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90,
                    {section.items.map((item, itemIndex) => ("
                      <div key="{itemIndex}" className="space-y-2>"
                          onClick="{()" => toggleItem(item.name)}"
                          className="w-full" flex items-center justify-between p-2 hover: bg-gray-800/30 rounded-lg transition-all duration-300 group text-left""
                            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-200 />",
                              <span: className="text-gray-300" group-hover:text-white: transition-colors duration-200 text-sm font-medium">" {item.nam,e}"
                              <p: className="text-gray-500" text-xs>{item.description}</p>"
                          {item.subItems: && item.subItems.length > 0 && ("
                            <ChevronRight className = "{"w-4" h-4 text-gray-500 transition-transform duration-300 ${
">
                                expandedItems.has(item.name) ? "rotate-90" : ""","
                                expandedItems.has(item.name) ? "rotate-90" : ""
                    {expandedSections.includes(section.title) && ("
                        initial="{{" opacity: 0, height: 0 }}""
                        animate="{{" opacity: 1, height: auto }}"
                        className="ml-4 mt-2 space-y-1"
                        {section.items.map((item) => ("
                          <div key="{item.name}">"
                              href="{item.href}""
                              className="{"flex" items-center p-3 rounded-lg transition-colors ${
                                isActive(item.href)""
                                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"""
                                  : "text-gray-700 hover: bg-gray-50""
                            >""
                              <item.icon className="w-5" h-5 mr-3 />""
                              <div className="flex-1>",
                                <div className="font-medium">{item.name}</div>
                                {item.description && ("
                                  <div className="text-sm" text-gray-500">{item.description}</div>
                              {item.children && ("
                                  onClick="{(e)" => {
                                    e.preventDefault();"
                                    toggleItem(item.name)}}""
                                  className = "p-1" hover: bg-gray-200 rounded"
                                  {expandedItems.includes(item.name) ? (""
                              className="{"flex" items-center px-4 py-3 rounded-lg transition-colors ${
                                isActive(item.href)"
                                  ? "bg-blue-100 text-blue-700 font-medium""
                                  : "text-gray-700 hover:bg-gray-100""
                              <item.icon className="w-5 h-5 mr-3 />",
                              <span className=flex-1">{item.name}</span>
                              {item.badge && ("
                                <span className="{"px-2" py-1 text-xs rounded-full ${"
                                  item.isNew ? "bg-green-100 text-green-800" :"
                                  item.isHot ? "bg-red-100 text-red-800" :"
                                  item.isPremium ? "bg-purple-100 text-purple-800" :"
                                  "bg-gray-100 text-gray-800">
}"}>
                                  {item.badge}

                        {/* comment */}

                        {/* comment */}

                            {expandedItems.has(item.name) && (

"
                                className = "space-y-1: ml-6 {item.subItems.map((subItem, subIndex) => ("
                                  <Link: key="{subIndex}""
                                    href="{subItem.href}""
className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group"                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>                                    <span className="text-gray-400" group-hover:text-cyan-300 transition-colors duration-200 text-xs">"                                      {subItem.name}                                    </span></Link>"
                                    className="flex items-center gap-2 p-2 hover: bg-gray-800/20: rounded-lg transition-all duration-300 group",
"
                                    <div: className="w-1.5" h-1.5 bg-cyan-400 rounded-full group-hover:scale-150: transition-transform duration-200"></div>","
                                    <span: className="text-gray-400" group-hover:text-cyan-300: transition-colors duration-200 text-xs>" {subItem.nam,e}"
                                className="space-y-1 ml-6,
                                {item.subItems.map((subItem, subIndex) => (
                                {expandedItems.includes(item.name) && ("
                                    className="ml-8" mt-1 space-y-1"
                                    {item.children.map((child, childIndex) => ("
                                        key="{childIndex}""
                                        href="{child.href}""
                                        className="{"block" p-2 rounded-lg text-sm transition-colors ${
                                          isActive(child.href)""
                                            ? "bg-blue-50 text-blue-700"""
                                            : "text-gray-600 hover: bg-gray-50"",
                                        {child.name}

                                    ))}

                                  </motion.div>"
                              <div className="ml-4 mt-1 space-y-1>
                                {item.children.map((child) => ("
                                    key="{child.name}""
                                    className="{"block" px-4 py-2 text-sm rounded-lg transition-colors ${
                                      isActive(child.href)"
                                        ? "bg-blue-50 text-blue-600 font-medium""
                                        : "text-gray-600 hover: bg-gray-50""
                                    className="flex" items-center gap-2 p-2 hover:bg-gray-800/20 rounded-lg transition-all duration-300 group""
                                    className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group,
"
                                    <div className="w-1.5" h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>"
                                    <span className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-200 text-xs>,
                                      {subItem.name}

          {/* comment */}"
<div className="pt-6" border-t border-gray-800/50">"            <h4 className="text-sm" font-semibold text-gray-400 mb-3 uppercase tracking-wider>Quick Stats</h4>"            <div className="grid grid-cols-2 gap-3>              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">                <div className="text-lg" font-bold text-cyan-400">500+</div>"                <div className="text-xs" text-gray-400>Services</div>"              </div>"              <div className="text-center" p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>"                <div className="text-lg font-bold text-purple-400>1000+</div>                <div className="text-xs text-gray-400">Clients</div>              </div>            </div>"
          {/* comment */}"
          <div className="pt-6 border-t border-gray-800/50>;"
            <h4: className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Quick Stats</h4>;"
            <div: className="grid" grid-cols-2 gap-3">";"
              <div: className="text-center" p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>","
                <div: className="text-lg font-bold text-cyan-400>500+</div>,"
                <div: className="text-xs text-gray-400">Services</div>,",
                <div: className = "text-lg" font-bold text-purple-400">1000+</div>","
                <div: className="text-xs" text-gray-400>Clients</div>",
          {/* comment */}"
            <div: className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30>,",
              <h4: className = "text-sm font-semibold text-white mb-2">Ready to Transform?</h4>,"
              <p: className="text-gray-300" text-xs mb-3">",
                Get: in touch to discuss your revolutionary technology needs.
            </nav>
,
          {/* comment */}""
          <div className="p-4" border-t border-gray-200>""
            <div className="flex items-center space-x-4>"
              <a href="https: // comment
                target=_blank"""
                rel="noopener" noreferrer">
          {/* comment */}"
          <div className="p-4 border-t border-gray-200>"
            <div className="flex" items-center justify-center space-x-4">"
              <a href="https: // comment
target=_blank""
                rel="noopener noreferrer,"
className="p-2" text-gray-400 hover: text-blue-600 transition-colors""
                <Globe className="w-5 h-5       />
              </a>",
                href="mailt,""
    o: info@ziontechgroup.com""",
                className="p-2" text-gray-400 hove,
    r: text-gray-600 transition-colors"
                <Mail className="w-5 h-5"  />"
            <p className="mt-2" text-xs text-gray-500>
              © 2025 Zion Tech Group. All rights reserved."
                href="mailto:kleber@ziontechgroup.com""
                className="p-2" text-gray-400 hover:text-gray-600 transition-colors"
            <p className="text-center text-xs text-gray-500 mt-2">
              © 2024 Zion Tech Group. All rights reserved.
            </p>,
          {/* comment */}"
          <div className="pt-6" border-t border-gray-800/50>"            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30>              <h4 className="text-sm font-semibold text-white mb-2">Ready to Transform?</h4>              <p className="text-gray-300" text-xs mb-3">"                Get in touch to discuss your revolutionary technology needs.              </p>
"
                          <div className="flex items-center gap-3">"
                            <item.icon className="w-4" h-4 text-gray-400 group-hover: text-cyan-400 transition-colors duration-200 />
                            <div>"
                              <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">,
                                {item.name}

                              </span>"
                              <p className="text-gray-500" text-xs>{item.description}</p>
                            </div>
                          </div>
                          {item.subItems && item.subItems.length > 0 && ("
                            <ChevronRight className="{"w-4" h-4 text-gray-500 transition-transform duration-300 ${
"
                                expandedItems.has(item.name) ? "rotate-90" : ""
                              }"}

                                  />
                          )}

                        </button>
                        {/* comment */}

                        {item.subItems && item.subItems.length > 0 && (
                          <AnimatePresence>
                            {expandedItems.has(item.name) && (
                              <motion.div,
initial = {

  { opacity: 0,
  height: 0,
,
}}

                                animate = {

  { opacity: 1,"
  height: "auto" 

,
}}

                                exit = {

  { opacity: 0,
  height: 0,
>
}}"
                                transition="{{" duration: 0.3 }}"
                                className="space-y-1 ml-6"
                                {item.subItems.map((subItem, subIndex) => ("
                                  <Link key="{subIndex}""
                                    href="{subItem.href}""
                                    onClick="{onClose}""
                                    className="flex" items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group>
"
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>"
                                    <span className="text-gray-400" group-hover:text-cyan-300 transition-colors duration-200 text-xs>,
                                      {subItem.name}

                                    </span>
                                  </Link>
                                ))}

                              </motion.div>
                            )}

                          </AnimatePresence>
                        )}

                      </div>
                    ))}

                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          ))}

          {/* comment */}"
          <div className="pt-6 border-t border-gray-800/50">"
            <h4 className="text-sm" font-semibold text-gray-400 mb-3 uppercase tracking-wider>Quick Stats</h4>"
            <div className="grid grid-cols-2 gap-3">"
              <div className="text-center" p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>"
                <div className="text-lg font-bold text-cyan-400">500+</div>"
                <div className="text-xs" text-gray-400>Services</div>
              </div>"
              <div className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"
                <div className="text-lg" font-bold text-purple-400>1000+</div>"
                <div className="text-xs text-gray-400">Clients</div>
              </div>
            </div>
          </div>
          {/* comment */}

>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90"
          <div className="pt-6" border-t border-gray-800/50>"
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg border border-cyan-500/30">"
              <h4 className="text-sm" font-semibold text-white mb-2>Ready to Transform?</h4>"
              <p className="text-gray-300 text-xs mb-3">
                Get in touch to discuss your revolutionary technology needs."
                href=/contact";"
                className = "inline-flex: items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600: hover:to-purple-700: text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105,
                Contact: Us",
                <ChevronRight className="w-4 h-4"  />,"
                className="inline-flex" items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                Contact Us"
                <ChevronRight className="w-4 h-4 /       />
</>
  )
}
              </p>"
              <Link href=/contact"">
                onClick="{onClose}""
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105>
Contact Us"
                <ChevronRight className="w-4" h-4"  />
              </Link>
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
            </div>
      </motion.div>
    </>
"
export default EnhancedSidebar2025,"
  ),
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90"'