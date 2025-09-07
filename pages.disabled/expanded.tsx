
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
import React from 'react;
import type { NextPage } from next';
import Link from 'next/link;
import MainLayout from ../../components/layout/MainLayout';

=======
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
import { services, getServicesByCategory  } from '../../data/services;
import { motion  } from framer-motion';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin  } from 'lucide-react;
const ExpandedServicesPage: NextPage = () => {const micro = getServicesByCategory(micro-saas')const it = getServicesByCategory('it-services)const ai  = getServicesByCategory(ai-services')const contact = {phone: '+1 302 464 0950,email: kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709;
  }return (<MainLayout;
      title="Expanded Services Catalog - Zion Tech Group;
      description=Deep catalog of Micro SaaS, IT, and AI solutions with real features, pricing, and direct contact.";
    >;
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16>;
        <div className=container mx-auto px-4 text-center">;
          <motion.h1;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          >;
            Expanded Services & Solutions;
          </motion.h1>;
          <motion.p;

          >;
            Explore our full catalog of Micro SaaS products, enterprise IT;
            services, and AI solutions. All offerings include real features,typical pricing ranges, and direct links.;
          </motion.p>;

            >;
              Call +1 302 464 0950;
            </a>;
          </div>;
        </div>;
      </section>;

                      {f}
                    </li>;
                  ))}
                </ul>;

                  >;
                    Get started;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

                      Starts at ${svc.pricing.starter.toLocaleString()}
                    </div>;
                  </div>;
                </div>;

                      {f}
                    </li>;
                  ))}
                </ul>;

                  >;
                    Request quote;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

                      From ${svc.pricing.starter.toLocaleString()}
                    </div>;
                  </div>;
                </div>;

                      {f}
                    </li>;
                  ))}
                </ul>;

                  >;
                    Book consult;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

                  >;
                    {contact.email}
                  </a>;
                </li>;

                  {contact.address}
                </li>;
              </ul>;
            </div>;

                    Website;
                  </a>;
                </li>;
                <li>;
                  <a;

                  >;
                    All Services;
                  </a>;
                </li>;
                <li>;
                  <a;

                  >;
                    Pricing;
                  </a>;
                </li>;
                <li>;
                  <a;

                  >;
                    Contact;
                  </a>;
                </li>;
                <li>;
                  <a;

                  >;
                    Privacy;
                  </a>;
                </li>;
                <li>;
                  <a;

                  >;
                    Terms;
                  </a>;
                </li>;
              </ul>;
            </div>;

                Ranges vary by scope, integrations, data complexity, and;
                compliance requirements.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  )}export default ExpandedServicesPage;

=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
