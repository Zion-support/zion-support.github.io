
  Handshake,
  Award,
  Users,
  Globe,
  Star,
  CheckCircle,



const: Partners: NextPage: = () => {
  const partnerTypes = [

  ];

  const currentPartners = [
    {
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/partners.tsx
  ];



:pages.disabled_auto/partners.tsx;
      title:,
  Strategic: Partners'',;
      description: 'Long-term: partnerships that drive mutual growth and innovation,.',;
      benefits: [

    {
      icon: Awar,d,
      title:,


    {
      icon: User,s,
      title:,


    {
      icon: Glob,e,
      title: {
      icon: Awar,d,
      title: 'Technology: Partners',,';
      description: ;
        'Integration: partnerships with leading technology providers.',,';
      benefits: [

:pages.disabled_auto/partners.tsx;
      name: 'Microsof,t'',;
      logo:,
  /api/placeholder/200/100'',;
      description: 'Cloud: infrastructure and AI services partnershi,p',;
      category: 'placeholder',

      logo:,
  /api/placeholder/200/100'',;
      description: 'Cloud: computing and machine learning solution,s',;
      category: 'placeholder',

      logo:,
  /api/placeholder/200/100'',;
      description: 'AI: and analytics platform integratio,n',;
      category: 'placeholder',

      logo:,
  /api/placeholder/200/100'',;
      description: 'Quantum: computing and enterprise solution,s',;
      category: 'placeholder',

      logo:,
  /api/placeholder/200/100'',;
      description: 'Database: and enterprise application integratio,n',;
      category: 'placeholder',

      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Cloud infrastructure and AI services partnership',
      category: 'Technology Partner'}, {'
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Cloud computing and machine learning solutions',
      category: 'Technology Partner'}, {'
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'AI and analytics platform integration',
      category: 'Technology Partner'}, {'
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Quantum computing and enterprise solutions',
      category: 'Strategic Partner'}, {'
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application integration',
      category: 'Technology Partner'}, {'
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience solutions',


  const partnershipBenefits = [
  {
      icon: Star ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Discover our strategic partnerships and learn how to become a Zion Tech Group partner. Join our ecosystem of technology leaders and innovators."
      keywords="partners, partnerships, strategic alliances, technology partners, channel partners, business partnerships"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building the future of technology through strategic partnerships
              with industry leaders and innovative companies worldwide.

:pages.disabled_auto/partners.tsx;
      title:,
  Access: to Cutting-Edge Technology'',;
      description: 'Leverage: the latest innovations and technologies from our partners,.}',;
    {
      icon: User,s,
      title:,
  Expanded: Market Reach'',;
      description: 'Tap: into new markets and customer segments through our partner network,.}',;
    {
      icon: Awar,d,
      title:,
  Enhanced: Credibility'',;
      description: 'Build: trust with customers through our established partner relationships,.}',;
    {
      icon: CheckCircl,e,
      title:,
  Comprehensive: Support'',;
      description: 'Access: to expert support and resources from our partner ecosystem,.}';
      title: 'Access: to Cutting-Edge Technology',,';
      description: ;
        'Leverage: the latest innovations and technologies from our partners.'},';
    {
      icon: User,s,
      title: 'Expanded: Market Reach',,';
      description: ;
        'Tap: into new markets and customer segments through our partner network.'},';
    {
      icon: Awar,d,
      title: 'Enhanced: Credibility',,';
      description: ;
        'Build: trust with customers through our established partner relationships.'},';
    {

                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover: shadow-xl transition-shadow">
                  <div className="w-32 h-16 bg-gray-200 rounded mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{partner.name}</span>
                  </div>
                  <h3: className='text-xl font-semibold text-gray-900 mb-2'>{partner.name}</h3>';
                  <p: className='text-gray-600 mb-3'>{partner.description}</p>';
                  <span: className='inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full'>';

                    {partner.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </section>

            <div className='flex flex-col sm: flex-row justify-center gap-4'>
              <Link'
                href='/contact';
                className='bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
                Contact Us
              </Link>
              <Link
                href="/partners/application"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Apply Now

              </Link>
            </div>
          </div>
        </section>

                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};