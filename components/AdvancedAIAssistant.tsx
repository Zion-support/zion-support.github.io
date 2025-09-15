"use client";
'use client';
import React{ useStateuseEffectuseRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  type: 'text' | 'code' | 'analysis' | 'recommendation';
}

interface AICapability {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'analysis' | 'automation' | 'optimization' | 'insights';
}

const AdvancedAIAssistant: React.FC = () => {
  const [messagesetMessages] = useState<Message[]>([]);
  const [inputTextsetInputText] = useState('');
  const [isLoadingsetIsLoading] = useState(false);
  const [activeCapabilitysetActiveCapability] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const capabilities: AICapability[] = [
    {
      id: 'business-analysis',
      name: 'Business Analysis',
      description: 'Analyze business metrics and provide strategic insights',
      icon: '📊',
      category: 'analysis'
    },
    {
      id: 'code-review',
      name: 'Code Review',
      description: 'Review code quality and suggest improvements',
      icon: '🔍',
      category: 'analysis'
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      description: 'Optimize system performance and identify bottlenecks',
      icon: '⚡',
      category: 'optimization'
    },
    {
      id: 'security-audit',
      name: 'Security Audit',
      description: 'Analyze security vulnerabilities and compliance',
      icon: '🔒',
      category: 'analysis'
    },
    {
      id: 'automation-suggestions',
      name: 'Automation Ideas',
      description: 'Suggest process automation opportunities',
      icon: '🤖',
      category: 'automation'
    },
    {
      id: 'market-insights',
      name: 'Market Insights',
      description: 'Provide market trends and competitive analysis',
      icon: '📈',
      category: 'insights'
    }
  ];

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }[messages]);

  useEffect(() => {
    // Add welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: "Hello! 'I', 'm your advanced AI assistant. I can help you with business analysiscode reviewperformance optimizationsecurity auditsautomation suggestionsand market insights. What would you like to explore today?",
      sender: 'assistant',
      timestamp: new Date(),
      type: 'text'
    };
    setMessages([welcomeMessage]);
  }[]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prevuserMessage]);
    setInputText(', ');
    setIsLoading(true);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve1500));

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateAIResponse(inputText),
      sender: 'assistant',
      timestamp: new Date(),
      type: determineResponseType(inputText)
    };

    setMessages(prev => [...prevaiResponse]);
    setIsLoading(false);
  };

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('business') || lowerInput.includes('analysis')) {
      return `Based on your business analysis requesthere are my key insights:

📊 **Business Performance Metrics:**
- Revenue growth: +23% YoY
- Customer acquisition cost: -15% improvement
- Market share: Expanding in 3 new segments

🎯 **Strategic Recommendations:**
1. Focus on high-value customer segments
2. Implement AI-driven personalization
3. Expand into emerging markets

💡 **Next Steps:**
- Conduct deeper customer behavior analysis
- Implement predictive analytics
- Consider strategic partnerships

Would you like me to dive deeper into any specific area?`;
    }
    
    if (lowerInput.includes('code') || lowerInput.includes('review')) {
      return `🔍 **Code Review Analysis:**

**Strengths:**
✅ Clean architecture and separation of concerns
✅ Good error handling implementation
✅ Comprehensive test coverage (87%)

**Areas for Improvement:**
⚠️ Some functions exceed 50 lines (consider refactoring)
⚠️ Missing JSDoc comments for complex functions
⚠️ Potential memory leaks in event listeners

**Security Considerations:**
🔒 Input validation looks solid
🔒 No sensitive data exposure detected
🔒 CSRF protection implemented correctly

**Performance Optimization:**
⚡ Database queries could be optimized with indexing
⚡ Consider implementing caching for frequently accessed data
⚡ Image compression could reduce bundle size by ~30%`;
    }
    
    if (lowerInput.includes('performance') || lowerInput.includes('optimize')) {
      return `⚡ **Performance Optimization Analysis:**

**Current Metrics:**
- Page load time: 2.3s (Target: <2s)
- Core Web Vitals: Good
- Bundle size: 1.2MB (Could be reduced by 25%)

**Optimization Recommendations:**
1. **Code Splitting**: Implement lazy loading for non-critical components
2. **Image Optimization**: Use WebP format and responsive images
3. **Caching Strategy**: Implement Redis for API responses
4. **CDN**: Deploy static assets to global CDN

**Immediate Actions:**
- Enable gzip compression
- Implement service worker for offline functionality
- Optimize database queries with proper indexing

**Expected Results:**
- 40% faster page load times
- 60% reduction in server load
- Improved user experience scores`;
    }
    
    if (lowerInput.includes('security') || lowerInput.includes('audit')) {
      return `🔒 **Security Audit Results:**

**Overall Security Score: 8.5/10** ✅

**Strengths:**
✅ HTTPS enforcement implemented
✅ Strong password policies in place
✅ Regular security updates applied
✅ Input sanitization working correctly

**Vulnerabilities Found:**
⚠️ **Medium Risk**: Missing rate limiting on API endpoints
⚠️ **Low Risk**: Some third-party dependencies need updates
⚠️ **Low Risk**: Session timeout could be optimized

**Recommendations:**
1. Implement API rate limiting (Redis-based)
2. Update dependencies to latest secure versions
3. Add security headers (CSPHSTSX-Frame-Options)
4. Conduct penetration testing quarterly

**Compliance Status:**
- GDPR: ✅ Compliant
- SOC 2: ✅ Compliant
- ISO 27001: In progress`;
    }
    
    if (lowerInput.includes('automation') || lowerInput.includes('automate')) {
      return `🤖 **Automation Opportunities Analysis:**

**High-Impact Automation Targets:**
1. **Customer Onboarding** (Save 15 hours/week)
   - Automated welcome emails
   - Document verification
   - Account setup workflows

2. **Report Generation** (Save 8 hours/week)
   - Automated weekly performance reports
   - Client dashboards
   - Data visualization

3. **Content Management** (Save 12 hours/week)
   - SEO optimization
   - Social media scheduling
   - Content categorization

**Implementation Roadmap:**
- Phase 1: Email automation (2 weeks)
- Phase 2: Report automation (3 weeks)
- Phase 3: Content automation (4 weeks)

**ROI Projection:**
- Time savings: 35 hours/week
- Cost savings: $3,500/month
- Payback period: 2.5 months`;
    }
    
    return `I understand 'you', 're asking about "${input}". 'Here', 's what I can help you with:

🎯 **My Capabilities:**
- Business analysis and strategic insights
- Code review and technical recommendations
- Performance optimization strategies
- Security audit and compliance
- Process automation suggestions
- Market research and competitive analysis

Could you provide more specific details about what 'you', 'd like me to analyze or help you with? I can dive deeper into any of these areas to give you actionable insights and recommendations.`;
  };

  const determineResponseType = (input: string): 'text' | 'code' | 'analysis' | 'recommendation' => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('code')) return 'code';
    if (lowerInput.includes('analysis') || lowerInput.includes('audit')) return 'analysis';
    if (lowerInput.includes('recommend') || lowerInput.includes('suggest')) return 'recommendation';
    return 'text';
  };

  const handleCapabilityClick = (capability: AICapability) => {
    setActiveCapability(capability.id);
    const capabilityMessage: Message = {
      id: Date.now().toString(),
      text: `'I', 'd like help with ${capability.name.toLowerCase()}. ${capability.description}`,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };
    setMessages(prev => [...prevcapabilityMessage]);
    setInputText(`Help me with ${capability.name.toLowerCase()}`);
  };

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([]{ hour: '2-'digit', 'minute: '2-digit' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🤖 Advanced AI Assistant
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get intelligent insightsanalysisand recommendations powered by advanced AI algorithms. 
          I can help with business analysiscode reviewperformance optimizationand much more.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* AI Capabilities Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🎯 AI Capabilities</h3>
            <div className="space-y-4">
              {capabilities.map((capability) => (
                <button
                  key={capability.id}
                  onClick={() => handleCapabilityClick(capability)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    activeCapability === capability.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{capability.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{capability.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{capability.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Assistant</h3>
                  <p className="text-blue-100 text-sm">Always ready to help</p>
                </div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.text}</div>
                    <div className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about businesstechnologyor optimization..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => setInputText('Analyze my business performance and suggest improvements')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-left"
          >
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-semibold text-gray-900 mb-2">Business Analysis</h4>
            <p className="text-gray-600 text-sm">Get comprehensive business insights and strategic recommendations</p>
          </button>
          
          <button
            onClick={() => setInputText('Review my code quality and suggest optimizations')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-left"
          >
            <div className="text-3xl mb-3">🔍</div>
            <h4 className="font-semibold text-gray-900 mb-2">Code Review</h4>
            <p className="text-gray-600 text-sm">Get expert code analysis and improvement suggestions</p>
          </button>
          
          <button
            onClick={() => setInputText('Suggest automation opportunities for my business')}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-left"
          >
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="font-semibold text-gray-900 mb-2">Automation Ideas</h4>
            <p className="text-gray-600 text-sm">Discover process automation opportunities and ROI projections</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAIAssistant;