import { Helmet } from 'react - helmet -async',

export default function Page() {
,
            {
                icon: AlertTriangle,
                title: "Real - time Monitoring",
                description: "24 / 7 security operations center with automated incident response and threat hunting capabilities"
            },
            {
                icon: Shield,
                title: "Endpoint Protection",
                description: "Comprehensive endpoint security with anti - malware, device control, and application whitelisting"
            },
            {
                icon: Zap,
                title: "Automated Response",
                description: "Instant threat mitigation with automated quarantine, isolation, and remediation workflows"
            },
            {
                icon: Users,
                title: "User Behavior Analytics",
                description: "Machine learning - based analysis to detect insider threats and compromised accounts"

        ].map ( (feature, index) => (<div key={index} className="bg-white / 5 backdrop - blur - lg rounded-2xl p - 8 border border-white / 10 hover: border-red - 500 / 50 transition -colors">,
                  <feature.icon className="w-12 h-12 text-red - 400 mb-6"/>
                  <h3 className="text-xl font - semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray - 300 leading -relaxed">{feature.description}</p>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* Security Metrics Section */}
        <section className="py-20 px-4 bg-black / 20">
          <div className="max - w-7xl mx -auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font - bold text-white mb-4">Security Performance</h2>
              <p className="text-gray - 300 text-lg max - w-2xl mx -auto">
                Proven results in threat detection and prevention across enterprise environments
              </p>
            </div>

            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap-8">
              {[{
                metric: "99.99%",
                title: "Threat Detection",
                description: "Accuracy in identifying malicious activities"
            },
            {
                metric: "<5s",
                title: "Response Time",
                description: "Average time to threat containment"
            },
            {
                metric: "Zero",
                title: "Successful Breaches",
                description: "Client environments with our full suite"
            },
            {
                metric: "24 / 7",
                title: "Monitoring",
                description: "Continuous security operations coverage"

        ].map((metric, index) => (<div key={index} className="text-center">,
                  <div className="bg-gradient - to - r from - red - 600 to - orange - 600 rounded-2xl p - 8 mb-4">
                    <h3 className="text-3xl font - bold text-white mb-2">{metric.metric}</h3>
                    <h4 className="text-lg font - semibold text-white">{metric.title}</h4>
                  </div>
                  <p className="text-gray -300">{metric.description}</p>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="max - w-7xl mx -auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font - bold text-white mb-4">Compliance & Certifications</h2>
              <p className="text-gray - 300 text-lg max - w-2xl mx -auto">
                Meet industry standards and regulatory requirements with our certified security framework
              </p>
            </div>

            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap-8">
              {['SOC 2 Type IIISO 27001',
            'GDPR CompliantHIPAA Ready',
            'PCI DSSNIST Framework',
            'FISMA CompliantFedRAMP Ready'
        ].map((cert, index) => (<div key={index} className="bg-white / 5 backdrop - blur - lg rounded-xl p - 6 border border-white / 10 text-center">
                  <CheckCircle className="w-8 h-8 text-green - 400 mx - auto mb-3"/>
                  <h3 className="text-white font -semibold">{cert}</h3>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max - w-4xl mx - auto text-center">
            <h2 className="text-4xl font - bold text-white mb-6">
              Secure Your Enterprise Today
            </h2>
            <p className="text-xl text-gray - 300 mb-8">
              Deploy our Advanced Cybersecurity Suite and protect your organization from evolving threats.</p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-gradient - to - r from - red - 600 to - orange - 600 text-white px-8 py-4 rounded-lg font - semibold hover:shadow-lg transition - all flex items - center gap-2 justify -center">
                Start Security Assessment < ArrowRight className="w-5 h-5"/>
              </button>
              <button className="border border-red - 500 text-red - 400 px-8 py-4 rounded-lg font - semibold hover:bg-red - 500 / 10 transition -all">
                Contact Security Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </>) },
}}}