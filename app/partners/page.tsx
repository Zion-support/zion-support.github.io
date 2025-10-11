'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
  const partners = [;
import  ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Partner {
const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [,
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
    }
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'

  ];

                We work with leading technology companies to deliver the best solutions for our clients.
              </p></p></p>
            </div>

              ))}
            </div>

                  </div>
                ))}
              </div>
            </div>

            </div>
          </div>
        </section>
      </div>
    </>
  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

      case 'strategic':;
        return 'from-purple-500 to-pink-600';
      case 'preferred':
        return 'from-blue-500 to-purple-600';
      case 'certified':
        return 'from-green-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

      case 'strategic':;
        return <Star className="w-4 h-4" />;
      case 'preferred':
        return <Award className="w-4 h-4" />;
      case 'certified':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Handshake className="w-4 h-4" />;
    }
  };

              ))}
            </select>
            <select;
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                </option>
              ))}
            </select>
          </div>

                    {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div></div></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3></h3></h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p></p></p>
                <p className="text-gray-300 mb-6">{partner.description}</p></p></p>

                  </a>
                </div>
              </div>
            ))}
          </div>

          )}
        </div>
      </section>

      {/* Partnership Tiers */}
                </div>
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3></h3></h3>
              </div>
                </li>
              </ul>
            </div>

                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3></h3></h3>
              </div>
                </li>
              </ul>
            </div>

                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3></h3></h3>
              </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default PartnersPage;
