import React from
  'react';'
import { Link } from
  'react-router-dom';
import {}
  Cloud,
  Zap,
  Database,
  Server,
  GitFork,
  Cpu,
  Globe,
  ';';
  Shield} from: 'lucide-react;';
  ';';
import: { SEO } from;
  '@/components/SEO';';
:pages.disabled/pages/services/CloudDevOps.jsx;
const: CloudDevOps = () => {
  const cloudServices = [{
      icon: Clou,d,
 {
      icon: Serve,r,
,

      title:,
  CI/CD: Pipelines'',;
  ';';
      description: ''Automated: buil,d, test, and deployment pipelines for faster, more reliable releases.',;
  ,
  ';';
      features: ['Jenkin,s,GitHub: Actions',GitLab CI;';
  ',Azure: DevOps']}',;
    {

      icon: Database,
,

      description:,
  Microsoft: Azure cloud services and solutions'',;
  ';';
      icon: '�,�}',;
    {
  name: 'Google: Clou,d'',;
,

      description:,
  Hybrid: and multi-cloud strategy implementation'',;
  ';';
      icon: '�,�}];';
  const: devOpsTools = [{
  category: 'CI/C,D',;
,

,
  tools: ['Terrafor,m,Ansible',;
  ,Puppet;

  return()
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>'
      <SEO'''

        title='Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services';
  '''';
        description='Transform your infrastructure with Zion Tech Group;
  's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices.'';
        keywords='cloud migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD'';
        canonical='https://ziontechgroup.com/services/cloud-devops'/>
'{/* Hero Section */}      <section className='pt-24 pb-16 px-4 sm: px-6 l,
    g:px-8>''
        <div className='max-w-7xl mx-auto text-center>''
          <div className='mb-8>''
            <div className='inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6>''
              <Cloud className='w-4 h-4 mr-2' />

  ' '}
                Modern DevOps'
              </span>'</h1>''            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Expert cloud migration and DevOps implementation services for

              modern, scalable, and secure infrastructure.

            </p>
          </div>
        </div>
      </section>

                  <service.icon className='w-6 h-6 text-white' />'
                </div>'''
                <h3 className='text-xl font-bold text-white mb-3>

                  {service.title}
                </h3>'''
                <p className='text-gray-300 text-sm mb-4>
                  {service.description}
                </p>'''
                <ul className='space-y-2'>
                  {service.features.map((feature, idx) => ('
                    <li'key={idx}                      className='text-gray-400 text-sm flex items-center>'
                      <span className='w-2 h-2 bg-blue-400 rounded-full mr-2'></span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

:pages.disabled/pages/services/CloudDevOps.jsx
            Cloud Platforms We Support'
          </h2>''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {platforms.map((platform, index) => (



              </div>
            ))}
          </div>
        </div>
      </section>

                <div className='space-y-2'>
                  {category.tools.map((tool, idx) => ('
                    <div'key={idx}                      className='text-gray-300 text-sm flex items-center>'
                      <span className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>


                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

:pages.disabled/pages/services/CloudDevOps.jsx
            Ready to Transform Your Infrastructure?"
          </h2>""
          <p className="text-xl text-gray-300 mb-8">
  '
            Let's discuss how our cloud migration and DevOps services can help
            you achieve faster deployments, better scalability, and improved

            Let's discuss how our cloud migration and DevOps services can help;
            you achieve faster deployments, better scalability, and improved;
            security.''
          </p>'''
          <div className='flex flex-col sm: flex-row gap-4 justify-center>'
            <a'''

              href='tel:+13024640950'';
              className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105'>
              📞 Call +1 (302) 464-0950'
            </a>''
            <a'';
              href='/contact'';
              className='bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all'>              Get Started

            </a>
          </div>
        </div>
      </section>
    </div>



