import React, { useState } from &apos;
import Link from &apos;next/link';react';
import { Link } from &apos;react-router-dom';
import { ChevronDown, Zap, Brain, Shield, Users, HardDrive, TrendingUp, Building2, FileText, HelpCircle, BarChart3 } from &apos;lucide-react';&apos;&apos;

export function MainNavigation({ className = &apos;&apos; }) {&apos;}&apos;
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  return(
    <nav className={`flex items-center space-x-8 ${className}`}>
      {/* Home */}
      <Link
        to=&apos;/';
        className=&apos;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
        Home&apos;&apos;
      </Link>
      {/* Services Dropdown */}
      <div className=&apos;relative group&apos;>&apos;'
        <button;
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className=&apos;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;
        >&apos;
          <Zap className=&apos;w-4 h-4&apos; />&apos;
          <span>Services</span>
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        </button>
        {isServicesOpen && (}
          <div;
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos;'
              <div className=&apos;grid grid-cols-3 gap-4&apos;>&apos;'
                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;'
                    <Zap className=&apos;w-4 h-4 mr-2&apos; />
                    Micro SAAS&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                    <li>
                      <Link to=&apos;/services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        All Services&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-sales-copilot&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Sales Copilot&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/cloud-finops-optimizer&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cloud FinOps Optimizer&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-compliance-assistant&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Compliance Assistant&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-business-intelligence&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Business Intelligence&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-customer-support-automation&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Customer Support&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-content-generator&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Content Generator&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/smart-inventory-management&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Smart Inventory Management&apos;
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;'
                    <Shield className=&apos;w-4 h-4 mr-2&apos; />
                    IT Services&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                    <li>
                      <Link to=&apos;/services/quantum-computing&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Quantum Computing&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/cloud-devops&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cloud & DevOps&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/cybersecurity&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cybersecurity&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/cloud-migration-services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Cloud Migration Services&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/digital-transformation&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Digital Transformation&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/healthcare-tech&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Healthcare Tech&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/iot-edge-computing&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        IoT & Edge Computing&apos;
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;'
                    <Brain className=&apos;w-4 h-4 mr-2&apos; />
                    AI Solutions&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                    <li>
                      <Link to=&apos;/services/ai-services&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Services&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-solutions&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Solutions&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-cybersecurity&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Cybersecurity&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-healthcare-platform&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Healthcare&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-supply-chain-optimization&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Supply Chain&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/services/ai-quantum-hybrid-platform&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Quantum Hybrid&apos;
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=&apos;mt-4 pt-4 border-t border-zion-purple/20&apos;>&apos;'
                <Link
                  to=&apos;/services';
                  className=&apos;text-zion-cyan hove,r:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center&apos;>
                  View All Services&apos;&apos;
                  <TrendingUp className=&apos;w-4 h-4 ml-2&apos; />&apos;
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Solutions Dropdown */}
      <div className=&apos;relative group&apos;>&apos;'
        <button;
          onMouseEnter={() => setIsSolutionsOpen(true)}
          onMouseLeave={() => setIsSolutionsOpen(false)}
          className=&apos;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;
        >&apos;
          <Brain className=&apos;w-4 h-4&apos; />&apos;
          <span>Solutions</span>
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        </button>
        {isSolutionsOpen && (}
          <div;
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos;'
              <div className=&apos;grid grid-cols-2 gap-4&apos;>&apos;'
                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;'
                    <Users className=&apos;w-4 h-4 mr-2&apos; />
                    Talent&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                    <li>
                      <Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Find Experts&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/zion-hire-ai&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        AI Hiring&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Skill Matching&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/talent&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Project Teams&apos;
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;'
                    <HardDrive className=&apos;w-4 h-4 mr-2&apos; />
                    Resources&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                    <li>
                      <Link to=&apos;/enterprise&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Enterprise Solutions&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/solutions&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Industry Solutions&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/case-studies&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Case Studies&apos;
                      </Link>
                    </li>
                    <li>
                      <Link to=&apos;/marketplace&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                        Marketplace&apos;
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=&apos;mt-4 pt-4 border-t border-zion-purple/20&apos;>&apos;'
                <Link
                  to=&apos;/request-quote';
                  className=&apos;text-zion-cyan hove,r:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center&apos;>
                  Get Custom Quote&apos;&apos;
                  <TrendingUp className=&apos;w-4 h-4 ml-2&apos; />&apos;
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Company Dropdown */}
      <div className=&apos;relative group&apos;>&apos;'
        <button;
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className=&apos;flex items-center space-x-1 text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;
        >&apos;
          <Building2 className=&apos;w-4 h-4&apos; />&apos;
          <span>Company</span>
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        </button>
        {isCompanyOpen && (}
          <div;
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos;'
              <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                <li>
                  <Link to=&apos;/about&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    About Us&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/team&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Our Team&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/careers&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Careers&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/news&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    News&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/events&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Events&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/partners&apos; className=&apos;text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
                    Partners&apos;
                  </Link>
                </li>
                <li>
                  <Link to=&apos;/contact&apos; className=&apos;text-zion-slate-light hove,r:text-zion-cyan transition-colors&apos;>
                    Contact&apos;
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* Resources */}
      <Link
        to=&apos;/resources';
        className=&apos;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
        Resources&apos;&apos;
      </Link>
      {/* Blog */}
      <Link
        to=&apos;/blog';
        className=&apos;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
        Blog&apos;&apos;
      </Link>
      {/* Pricing */}
      <Link
        to=&apos;/pricing';
        className=&apos;text-sm font-medium text-zion-slate-light hover:text-zion-cyan transition-colors&apos;>
        Pricing&apos;&apos;
      </Link>
    </nav>
  )}