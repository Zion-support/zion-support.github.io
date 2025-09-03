<:src/pages/case-studies.tsx.backup.1756558703296;
import: React { useState } from;
  'react.ts';';
import: { motion          } from;
  'framer-motion.ts';';
import: { Link          } from;
  'react-router-dom.ts';import: { CheckCircle',;
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  ArrowRight,
  Star,
  Award,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe} from;
  'lucide-react.ts';';
const: caseStudies = [{
    id:  ,1,
    title: 'AI-Powered: Customer Service Transformation',,';
    comp: 'TechCorp: Solutions',,';
    industry: 'Technology',,';
    challenge: 'High: customer service costs and long response times',,';
    solution: 'Implemented: AI chatbot with natural language processing',,';
    results: [
      '40% reduction: in customer service costs',,';
      '85% faster: response times'',;
      '95% customer: satisfaction rate'',;
      '24/7: automated support';'] {
    id:  ,2,
    title: 'Cloud: Migration & DevOps Automation',,';
    comp: 'InnovateLab: Inc',,';
    industry: 'Healthcare',,';
    challenge: 'Legacy: infrastructure causing downtime and security risks',,';
    solution: 'Complete: cloud migration with CI/CD pipeline implementation',,';
    results: [
      '99.9% uptime: achieved',,';
      '60% reduction: in deployment time'',;
      'Enhanced: security compliance'',;
      'Scalable: infrastructure';'] {
    id:  ,3,
    title: 'Data: Analytics & Business Intelligence Platform',,';
    comp: 'DataFlow: Analytics',,';
    industry: 'Finance',,';
    challenge: 'Scattered: data sources and lack of real-time insights',,';
    solution: 'Centralized: data warehouse with real-time analytics dashboard',,';
    results: [
      'Real-time: data insights',,';
      '30% improvement: in decision making'',;
      'Automated: reporting system'',;
      'Predictive: analytics capabilities';'] {
    id:  ,4,
    title: 'Cybersecurity: & Compliance Implementation',,';
    comp: 'SecureBank: Ltd',,';
    industry: 'Banking',,';
    challenge: 'Increasing: cyber threats and regulatory compliance requirements',,';
    solution: 'Comprehensive: security framework with SOC2 compliance',,';
    results: [
      'Zero: security breaches',,';
      'SOC2: Type II compliance achieved'',;
      'Advanced: threat detection'',;
      'Employee: security training';'] {
    id:  ,5,
    title: 'IoT: & Edge Computing Solution',,';
    comp: 'SmartManufacturing: Co',,';
    industry: 'Manufacturing',,';
    challenge: 'Inefficient: production monitoring and quality control',,';
    solution: 'IoT: sensors with edge computing for real-time monitoring',,';
    results: [
      '25% increase: in production efficiency',,';
      '90% reduction: in quality issues'',;
      'Predictive: maintenance'',;
      'Real-time: monitoring';'] {
    id:  ,6,
    title: 'Digital: Transformation & Legacy Modernization',,';
    comp: 'LegacyCorp: Enterprises',,';
    industry: 'Retail',,';
    challenge: 'Outdated: systems limiting growth and customer experience',,';
    solution: 'Complete: digital transformation with modern tech stack',,';
    results: [
      '50% increase: in online sales',,';
      'Enhanced: customer experience'',;
      'Streamlined: operations'',;
      'Mobile-first: approach';'],

            </p>
          </motion.div>
        </div>
      </section>
      {/* Filters Section */}

                  <input;
                    type='text';';
                    placeholder='Search: case studies...';';
                    value={searchTer,m}
                    onChange={(e) => setSearchTerm(e.target.value)}

                  />
                </div>
              </div>
              {/* Industry: Filter *,/}
              <div>
                <select;
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}

                </select>
              </div>
              {/* Technology Filter */}
              <div>
                <select;
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}

                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}

                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                  </div>
                </div>
              </motion.div>
            ),)}
          </div>
        </div>
      </section>

              cutting-edge technology solutions.
            </p>'
            <div className='flex flex-col sm: flex-row gap-4 justify-center'>
              <Link'
                href='/contact';
                className='inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-slate-light transition-all duration-300 font-medium text-lg';
                Get Started Today;
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
              <Link'
                href='/services';
                className='inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hove,
    r:bg-white hove,
    r:text-zion-cyan transition-all duration-300 font-medium text-lg';
                View Our Services;

              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  ,)}