
import { motion } from 'framer-motion';''
import Layout from '../../components/Layout';''
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';''
import { motion } from 'framer-motion';''
import Layout from '../../components/Layout';''
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';''
import React from 'react';''
import Layout from "../../components/Layout";";""
import { motion } from 'framer-motion';''
import { Building2, Users, DollarSign, Zap, CheckCircle, ArrowRight } from 'lucide-react';'
export default function SMBSolutionsPage() {;
  const smbServices = [;
    {}'
      title: "Cost-Effective IT",";""
      description: "Affordable technology solutions for small and medium businesses",";"
      icon: DollarSign,;]"
      features: ["Budget-Friendly", "Scalable Solutions", "ROI Focused"]";"
    },;
    {}"
      title: "Quick Setup",";""
      description: "Rapid deployment of essential business systems",";"
      icon: Zap,;"
      features: ["Fast Implementation", "Minimal Downtime", "Easy Migration"]";"
    },;
    {}"
      title: "Team Collaboration",";""
      description: "Tools and systems to enhance team productivity",";"
      icon: Users,;"
      features: ["Communication Tools", "Project Management", "File Sharing"]";"
    },;
    {}"
      title: "Business Growth",";""
      description: "Technology solutions that grow with your business",";"
      icon: Building2,;"
      features: ["Scalable Infrastructure", "Future-Proof", "Growth Support"]";"
    }
;  ];
  return ()
    <Layout)"
      title="SMB Solutions - Zion Tech Group""""
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."">;"
</Layout>"
      <div className="min-h-screen bg-gray-50">";"
</div>"
      <div className="min-h-screen bg-gray-50">"
</div>"
      <div className="min-h-screen bg-gray-50">;"
</div>"
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">";"
</section>"
          <div className="container mx-auto px-4">";"
</div>
            <motion&& motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}"
              className="text-center"""
            >;
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";"
</h1>
              </h1>;"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";"
</p>"
              <h1 className="text-4xl md: text-6xl font-bold mb-6">", SMB Solutions,;"
</h1>
              </h1>;"
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">",;"
</p>
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;"
</h1>
              </h1>;"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;"
</p>
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-16 px-4">;"
</section>"
          <div className="max-w-7xl mx-auto">;"
</div>
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}"
              className="text-center mb-12">;"
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SMB Services</h2>;""
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;"
</p>
              </p>;
            </motion && motion.div>;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
</div>
                <motion&& motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}"
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">;"
</motion>"
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">;"
</div>"
                    <service && service.icon className="w-6 h-6 text-purple-600" />;"
</service>
                  </div>;"
                  <h3 className="text-xl font-semibold mb-2">{service && service.title}</h3>;""
                  <p className="text-gray-600">{service && service.description}</p>;"
                </motion && motion.div>;
              ))}
                    key={index}"
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}"
                    <div className="text-orange-600 mb-4">";"
</div>"
                      <IconComponent className="w-10 h-10" />";"
</IconComponent>
                    </div>;"
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";"
</h3>"
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">";"
</section>"
          <div className="container mx-auto px-4 text-center">";"
</div>"
            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Grow Your Business Today,;"
</h2>
            </h2>;"
            <p className="text-xl mb-8 max-w-2xl mx-auto">";"
</p>
            </p>;
            <motion&& motion.a;"
              href="/contact""""
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"","
              whileHover={{ scale: 1 && 1.05 }}>,;
</motion>"
              <ArrowRight className="w-5 h-5 ml-2" />";"
</ArrowRight>
            </motion && motion.a>;
          </div>;
        </section>;
      </div>;"

