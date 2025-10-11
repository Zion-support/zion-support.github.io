
interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
'use client'
<<<<<<< HEAD
import React from 'react';
  const partnerTiers = {
    strategic: {
      title: 'Strategic Partners',
      description: 'Our most import ant partnerships with industry leaders',
      color: 'bg-blue-100 text-blue-800'
    },
    preferred: {
      title: 'Preferred Partners',
      description: 'Trusted partners with proven track records',
      color: 'bg-green-100 text-green-800'
    },
    certified: {
      title: 'Certified Partners',
      description: 'Certified solution providers with specialized expertise',
      color: 'bg-purple-100 text-purple-800'
    }
  };

  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.tier]) {
      acc[partner.tier] = [];
    }
    acc[partner.tier].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
=======
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
const PartnersPage: React.FC = () => {
  const partners = [
import { ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react'
interface Partner {
  id: string
  name: string
  logo: string
  description: string
  category: string
  website: string
  tier: 'preferred' | 'certified' | 'strategic'
}]
const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTier, setSelectedTier] = useState('all')
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',},
    {id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',}'Access to cutting-edge technology',
    {
      id: '1',
      name: 'Microsoft',
    },
    {
      id: '2',
      name: 'Amazon Web Services',
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        <section className="py-20 px-4"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1></h1>,</h1>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                Our Technology Partners;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>We work with leading technology companies to deliver the best solutions for our clients.</p>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12"></div></div>{categories.map((category) => (</div>
                <button;
                  key={category}className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover: bg-white/20 transition-all duration-300",
                ></button>{category</button&gt;} </button>
  ]
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        </div><section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12"></div></div>
              {categories.map((category) => (
                </div><div></div>
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div></div>,</div>
              {partners.map((partner, index) => (
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-bold text-white mb-2"></h3></h3>{partner.name}</h3>
=======
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            </div>
          </div>
        </section>
      </div>
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    return matchesCategory && matchesTier;});

  const getTierColor = (tier: string) => {,
  const categories = ['all', ...Array.from(new Set(partners.map(partner =&gt; partner.category)))]
  const tiers = ['all', ...Array.from(new Set(partners.map(partner =&gt; partner.tier)))]
  const filteredPartners = partners.filter()
  })
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'from-purple-500 to-pink-600'
      case 'preferred':
        return 'from-blue-500 to-purple-600'
      case 'certified':
    switch (tier) {
      case 'strategic':
        return <Star className="w-4 h-4" />
      case 'preferred':
        return <Award className="w-4 h-4" />
      case 'certified':
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" />
      </Helmet>

          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>We work with industry leaders to deliver the best AI and IT solutions.</p>
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
        </div>
      </section>

              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></h3>Strategic Collaboration</h3>
              <p className="text-gray-300"></p></p>Work together to develop innovative solutions that benefit both organizations and their customers.</p>
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div></div>
              </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div></div>
                </div><Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></h3>Joint Go-to-Market</h3>
              <p className="text-gray-300"></p></p>Leverage our combined expertise and market presence to reach new customers and expand market share.</p>
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div></div>
              </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div></div>
                </div><Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></h3>Certification Programs</h3>
              <p className="text-gray-300"></p></p>Access to training, certification, and technical resources to stay ahead of technology trends.</p>
              </p>
            </div>
          </div>
        </div>
      </section>

              ))}
            </select>
            <select;
              value={selectedTier}onChange={(e) =&gt; setSelectedTier(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500",
            >
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div></div>,</div>
            {filteredPartners.map((partner) => (
                    {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2"></h3></h3>{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4"></p></p>{partner.category</p&gt;}</p>
                <p className="text-gray-300 mb-6"></p></p>{partner.description</p&gt;}</p>

                <div className="flex items-center justify-between"></div></div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12"&gt;</div&gt;
              </div&gt;<p className="text-gray-400 text-lg"&gt;</p&gt;No partners found matching your criteria.</p&gt;
            </div&gt;
          )} </div>
      </section>

                </div>
                <h3 className="text-2xl font-bold text-white"></h3></h3>Certified Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                </ul><li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Basic training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Marketing support materials</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Technical documentation access</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20"></div></div>
              </div><div className="flex items-center gap-3 mb-6"></div></div>
                </div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"></div></div>
                  </div><Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white"></h3></h3>Preferred Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                </ul><li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Advanced training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Priority technical support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Dedicated partner manager</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div></div>
              </div><div className="flex items-center gap-3 mb-6"></div></div>
                </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div></div>
                  </div><Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white"></h3></h3>Strategic Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300"></ul>
                </ul><li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Exclusive training and certification</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Joint product development</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2"></li>
                  </li><CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Executive relationship management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
