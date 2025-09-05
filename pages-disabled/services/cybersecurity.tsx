import React from "react";
import Layout from "../../components/Layout";"
export default function CybersecurityPage() {},
  {
  const securityServices = []
    {'},
  {
      title: "Security Assessment",
      description: "Comprehensive security evaluation of your systems",
      icon: Eye,];
      features: [Vulnerability Scanning", "Penetration Testing", "Risk Analysis"];
    },
  {
    {},
  {
      title: "Threat Protection",
      description: "Advanced threat detection and prevention systems",
      icon: Shield,
      features: [Real-time Monitoring", "AI-Powered Detection", "Incident Response"];
    },
  {
    {},
  {
      title: "Data Encryption",
      description: "End-to-end encryption for sensitive data",
      icon: Lock,
      features: [Data at Rest", "Data in Transit", "Key Management"];
    },
  {
    {},
  {
      title: "Compliance",
      description: "Ensure compliance with industry standards",
      icon: AlertTriangle,
      features: [GDPR", "HIPAA", "SOC 2", "ISO 27001"];
    },
  {
  ];

  return ()
    <Layout;"
      title="Cybersecurity Services - Zion Tech Group"
      description="Advanced cybersecurity solutions to protect your business from evolving threats and ensure compliance."
    >
</Layout>"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div
              initial={{ opacity: 0, y: 30 }},
  {
              animate={{ opacity: 1, y: 0 }},
  {
              transition={{ duration: 0.8 }},
  {
              className="text-center"
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
</div>
                  <motion.div
                    key={index},
  {
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }},
  {
                    whileInView={{ opacity: 1, y: 0 }},
  {
                    transition={{ duration: 0.8, delay: index * 0.1 }},
  {
                    viewport={{ once: true }},
  {
                  >
</motion>"
                    <div className="text-red-600 mb-4">"
</div>"
                      <IconComponent className="w-10 h-10" />"
</IconComponent>
                    </div>"
                    <h3 className="text-xl font-bold text-gray-900 mb-4">"
</h3>
                    </h3>"
                    <p className="text-gray-600 mb-4">"
</p>
                    </p>"
                    <ul className="space-y-2">"
</ul>"
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
</li>"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"
</CheckCircle>
                        </li>
                    </ul>
                  </motion.div>);
                );
              })},
  {
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>"
            <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
            </h2>"
            <p className="text-xl mb-8 max-w-2xl mx-auto">"
</p>
            </p>
            <motion.a;"
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }},
  {
            >
</motion>"
              <ArrowRight className="w-5 h-5 ml-2" />"
</ArrowRight>
            </motion.a>
          </div>
        </section>
      </div>
    </Layout>"