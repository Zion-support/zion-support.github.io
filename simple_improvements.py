#!/usr/bin/env python3

import os
import subprocess

def run_command(command, cwd=None):
    """Run a command and return success status"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            capture_output=True, 
            text=True, 
            cwd=cwd,
            timeout=60
        )
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def create_advanced_dashboard():
    """Create an advanced dashboard component"""
    
    print("📊 Creating Advanced Dashboard...")
    
    content = '''import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AdvancedDashboard: React.FC = () => {
  const [metrics] = useState([
    { title: 'Total Users', value: '12,543', change: '+12.5%', trend: 'up' },
    { title: 'Revenue', value: '$2,847,392', change: '+8.3%', trend: 'up' },
    { title: 'Conversion Rate', value: '3.24%', change: '-2.1%', trend: 'down' },
    { title: 'Active Sessions', value: '1,247', change: '0.0%', trend: 'stable' }
  ]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Advanced Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
              <p className="text-2xl font-bold text-white mb-2">{metric.value}</p>
              <p className={`text-sm ${
                metric.trend === 'up' ? 'text-green-400' : 
                metric.trend === 'down' ? 'text-red-400' : 'text-gray-400'
              }`}>
                {metric.change} vs last month
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedDashboard;
'''
    
    with open('/workspace/src/components/AdvancedDashboard.tsx', 'w') as f:
        f.write(content)
    
    print("✅ Created Advanced Dashboard")

def create_ai_assistant():
    """Create an AI Assistant component"""
    
    print("🤖 Creating AI Assistant...")
    
    content = '''import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = { id: Date.now(), text: inputText, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        text: `I understand you're asking about "${inputText}". Here's my response.`, 
        isUser: false 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-8">AI Assistant</h1>
        
        <div className="bg-gray-800 rounded-lg border border-gray-700 h-96 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIAssistant;
'''
    
    with open('/workspace/src/components/AIAssistant.tsx', 'w') as f:
        f.write(content)
    
    print("✅ Created AI Assistant")

def update_app():
    """Update App.tsx with new components"""
    
    print("🔄 Updating App.tsx...")
    
    try:
        with open('/workspace/src/App.tsx', 'r') as f:
            app_content = f.read()
        
        # Add imports
        if 'AdvancedDashboard' not in app_content:
            app_content = app_content.replace(
                "import WorkflowAutomation from './components/WorkflowAutomation';",
                "import WorkflowAutomation from './components/WorkflowAutomation';\nimport AdvancedDashboard from './components/AdvancedDashboard';\nimport AIAssistant from './components/AIAssistant';"
            )
            
            app_content = app_content.replace(
                "              <Route path='/workflow-automation' element={<WorkflowAutomation />} />",
                "              <Route path='/workflow-automation' element={<WorkflowAutomation />} />\n              <Route path='/dashboard' element={<AdvancedDashboard />} />\n              <Route path='/ai-assistant' element={<AIAssistant />} />"
            )
        
        with open('/workspace/src/App.tsx', 'w') as f:
            f.write(app_content)
        
        print("✅ Updated App.tsx")
        
    except Exception as e:
        print(f"❌ Error updating App.tsx: {e}")

def main():
    """Main function"""
    
    print("🚀 Creating improvements...")
    
    try:
        create_advanced_dashboard()
        create_ai_assistant()
        update_app()
        
        print("\n🎉 Improvements completed!")
        print("✅ Advanced Dashboard")
        print("✅ AI Assistant")
        print("✅ Updated App.tsx")
        
        # Test build
        print("\n🔨 Testing build...")
        success, stdout, stderr = run_command("npm run build")
        if success:
            print("✅ Build successful!")
        else:
            print(f"⚠️  Build issues: {stderr}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()