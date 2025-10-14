import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton;

const AIAutomationPlatform = () => {
  const features = [
    {
          title: ';Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning",
      icon: <Settings className="w-6 h-6" />
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",
      icon: <Circle className="w-6 h-6" />
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    
    <div>
      <EnhancedSEO />
      <div />
        {/* Hero Section */}
        <section>
        <div>
    <ResponsiveContainer />
            <div>
    <div />
                <span className="text-cyan-400 text-sm font-medium">Intelligent Automation</span>
              </div>
              <h1>AI Automation Platform
              </h1></h1>
              <p />
                Transform your business with AI-powered automation. 
                Automate workflows, optimize processes, and make intelligent decisions at scale.
              </p>
              <div>
    <FuturisticButton
                  icon={<Right className="w-5 h-5">}
                >
                  Get Started Today
                </FuturisticButton>
                <FuturisticButton />
                  View Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 />
                Advanced Automation Features
              </h2>
              <p />
                Everything you need to automate and optimize your business processes.
              </p>
            </div>
            
            <div />
              {features.map((feature, index) => (
                <FuturisticCard />
                  <div />
                    {feature.icon}
                  </div>
                  <h3 />
                    {feature.title}
                  </h3>
                  <p />
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 />
                Why Choose AI Automation Platform?
              </h2>
              <p />
                Experience intelligent automation that transforms your business operations.
              </p>
            </div>
            
            <div />
              {benefits.map((benefit, index) => (
                <div>
    <Circle />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 />
                Ready to Automate Your Business?
              </h2>
              <p />
                Join thousands of businesses already using AI automation to streamline their operations.
              </p>
              <FuturisticButton />
                Start Your Automation Journey
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  )};

export default AIAutomationPlatform
',
'