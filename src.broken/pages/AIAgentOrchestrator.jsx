import { Helmet } from 'react - helmet -async',

export default function Page() {
,
            {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Monitor agent performance, resource utilization, and workflow efficiency in real - time"
            },
            {
                icon: Shield,
                title: "Security & Compliance",
                description: "Enterprise - grade security with role - based access control and audit trails"
            },
            {
                icon: Zap,
                title: "Real - time Processing",
                description: "Handle high-volume requests with low-latency agent communication and task distribution"
            },
            {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Built - in quality control mechanisms and validation frameworks for agent outputs"

        ].map ( (feature, index) => (<div key={index} className="bg-white / 5 backdrop - blur - lg rounded-2xl p - 8 border border-white / 10 hover: border-purple - 500 / 50 transition -colors">,
                  <feature.icon className="w-12 h-12 text-purple - 400 mb-6"/>
                  <h3 className="text-xl font - semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray - 300 leading -relaxed">{feature.description}</p>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-black / 20">
          <div className="max - w-7xl mx -auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font - bold text-white mb-4">Use Cases</h2>
              <p className="text-gray - 300 text-lg max - w-2xl mx -auto">
                Transform your business operations with intelligent agent orchestration
              </p>
            </div>

            <div className="grid md:grid - cols - 2 gap-8">
              {[{
                title: "Customer Service Automation",
                description: "Deploy multiple specialized AI agents for different customer service scenarios, from initial inquiry to resolution."
            },
            {
                title: "Content Creation Pipeline",
                description: "Orchestrate AI agents for research, writing, editing, and publishing content across multiple channels."
            },
            {
                title: "Data Processing Workflows",
                description: "Coordinate agents for data collection, cleaning, analysis, and reporting with seamless handoffs."
            },
            {
                title: "Business Process Automation",
                description: "Automate complex business processes with intelligent agents handling different aspects of the workflow."

        ].map((useCase, index) => (<div key={index} className="bg-white / 5 backdrop - blur - lg rounded-2xl p - 8 border border-white / 10">,
                  <h3 className="text-xl font - semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray - 300 leading -relaxed">{useCase.description}</p>
                </div>) ) }
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max - w-4xl mx - auto text-center">
            <h2 className="text-4xl font - bold text-white mb-6">
              Ready to Orchestrate Your AI Workforce?
            </h2>
            <p className="text-xl text-gray - 300 mb-8">
              Get started with our AI Agent Orchestrator and transform your business operations today.</p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-gradient - to - r from - purple - 600 to - blue - 600 text-white px-8 py-4 rounded-lg font - semibold hover:shadow-lg transition - all flex items - center gap-2 justify -center">
                Start Free Trial < ArrowRight className="w-5 h-5"/>
              </button>
              <button className="border border-purple - 500 text-purple - 400 px-8 py-4 rounded-lg font - semibold hover:bg-purple - 500 / 10 transition -all">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>) },
}}}