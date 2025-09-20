import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const WorkflowAutomation: React.FC = () => {
  const [workflows] = useState([
    {
      id: '1',
      name: 'User Registration Flow',
      description: 'Automated workflow for new user onboarding',
      enabled: true,
      steps: ['Trigger', 'Send Email', 'Wait 24h', 'Send Guide']
    },
    {
      id: '2',
      name: 'Support Escalation',
      description: 'Automated escalation for support tickets',
      enabled: false,
      steps: ['Trigger', 'Check Priority', 'Notify Manager']
    }
  ]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Workflow Automation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{workflow.name}</h3>
                <div className={`w-3 h-3 rounded-full ${workflow.enabled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              </div>
              
              <p className="text-gray-400 mb-4">{workflow.description}</p>
              
              <div className="space-y-2">
                {workflow.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <span>{stepIndex + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkflowAutomation;
