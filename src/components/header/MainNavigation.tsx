


export function MainNavigation({ className = '' }) {



  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

      </Link>
      {/* Services Dropdown */}
      <div className=&apos;relative group&apos;>&apos;

        <button;
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}

          <span>Services</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isServicesOpen && (}
          <div;
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos;
              <div className=&apos;grid grid-cols-3 gap-4&apos;>&apos;

                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;
                    <Zap className=&apos;w-4 h-4 mr-2&apos; />
                    Micro SAAS&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;

                    <li>

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

                      </Link>
                    </li>
                  </ul>
                </div>
                <div>

                      </Link>
                    </li>
                  </ul>
                </div>
              </div>


                </Link>
              </div>
            </div>
          </div>

        )}

          <span>Solutions</span>
          <ChevronDown className="w-3 h-3"/>
        </button>
        {isSolutionsOpen && (}
          <div;
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos;
              <div className=&apos;grid grid-cols-2 gap-4&apos;>&apos;

                <div>
                  <h4 className=&apos;text-zion-cyan font-semibold mb-3 flex items-center&apos;>&apos;
                    <Users className=&apos;w-4 h-4 mr-2&apos; />
                    Talent&apos;
                  </h4>
                  <ul className=&apos;space-y-2 text-sm&apos;>&apos;

                    <li>

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

                    </li>
                  </ul>
                </div>
              </div>


                </Link>
              </div>
            </div>
          </div>

        )}

          <span>Company</span>
          <ChevronDown className=&apos;w-3 h-3&apos; />&apos;
        </button>
        {isCompanyOpen && (}
          <div;
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className=&apos;absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50&apos;
          >&apos;
            <div className=&apos;p-4&apos;>&apos;
              <ul className=&apos;space-y-2 text-sm&apos;>&apos;'
                <li>

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
      </div>;
      {/* Resources */}, {/* Blog */}
      <Link;
        to='/blog';

      {/* Pricing */}
      <Link;
        to='/pricing';

      </Link>

    </nav>
  )}



