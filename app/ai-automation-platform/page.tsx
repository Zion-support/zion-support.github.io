import React from 'react';
import { ArrowRight, Zap, Brain, CheckCircle, Settings, Target, Workflow } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",""
      description: "Automate complex business processes with AI-powered workflows",""
      icon: <Workflow className="w-6 h-6" />,"
""
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",

      icon: <Brain className="w-6 h-6" />,      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",

      icon: <Zap className="w-6 h-6" />,                <span className="text-cyan-400 text-sm font-medium">Intelligent Automation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation Platform
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your business with AI-powered automation. 
                Automate workflows, optimize processes, and make intelligent decisions at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  icon={<Right className="w-5 h-5" />}
                >
                  Get Started Today
                </FuturisticButton>
                <FuturisticButton
                  variant="outline"

                  icon={<Play className="w-5 h-5" />}              >
                Start Your Automation Journey
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}
export default AIAutomationPlatform;
