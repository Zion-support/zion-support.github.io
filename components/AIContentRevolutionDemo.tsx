import React, { useState, useEffect } from 'react';

const AIContentRevolutionDemo = () => {
  const [inputText, setInputText] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedType, setSelectedType] = useState('blog');
  const [metrics, setMetrics] = useState({
    timeSaved: 0,
    efficiency: 0,
    quality: 0
  });

  const contentTypes = [
    { id: 'blog', label: 'Blog Post', icon: '📝' },
    { id: 'social', label: 'Social Media', icon: '📱' },
    { id: 'email', label: 'Email Campaign', icon: '📧' },
    { id: 'ad', label: 'Advertisement', icon: '📢' },
    { id: 'product', label: 'Product Description', icon: '🛍️' }
  ];

  const sampleInputs = [
    "AI automation for manufacturing",
    "Digital transformation in healthcare",
    "Cloud computing benefits for SMEs",
    "Cybersecurity best practices",
    "Machine learning applications"
  ];

  const generateContent = async () => {
    if (!inputText.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const generated = generateAIContent(inputText, selectedType);
    setGeneratedContent(generated);
    
    // Update metrics
    setMetrics({
      timeSaved: Math.floor(Math.random() * 95) + 80, // 80-95%
      efficiency: Math.floor(Math.random() * 40) + 200, // 200-240%
      quality: Math.floor(Math.random() * 20) + 85 // 85-95
    });
    
    setIsGenerating(false);
  };

  const generateAIContent = (input: string, type: string) => {
    const templates = {
      blog: `# ${input}: The Ultimate Guide

## Introduction
${input} represents one of the most significant technological breakthroughs of our time. This comprehensive guide explores how this revolutionary technology is transforming industries worldwide.

## Key Benefits
- **Efficiency**: 98% reduction in manual processes
- **Scalability**: Unlimited growth potential
- **ROI**: Average 2,500% return on investment
- **Innovation**: Cutting-edge AI-powered solutions

## Implementation Strategy
1. **Assessment**: Comprehensive analysis of current systems
2. **Planning**: Customized implementation roadmap
3. **Deployment**: Seamless integration with existing infrastructure
4. **Optimization**: Continuous performance improvement

## Real-World Results
Companies implementing ${input} solutions have achieved:
- 5,000% ROI within 6 months
- 98% reduction in operational costs
- 340% increase in productivity
- 150% improvement in customer satisfaction

## Conclusion
${input} is not just a technology—'it', 's a complete business transformation. Organizations that embrace this revolution today will dominate their markets tomorrow.

*Ready to transform your business? Contact Zion Tech Group for a free consultation.*`,

      social: `🚀 BREAKTHROUGH ALERT: ${input} is revolutionizing industries!

✅ 98% efficiency gains
✅ 2,500% average ROI
✅ 47 countries served
✅ Zero human intervention

The future is here. Are you ready?

#AI #Innovation #Technology #BusinessTransformation #ZionTechGroup`,

      email: `Subject: Transform Your Business with ${input} - 2,500% ROI Guaranteed

Dear [Name],

I hope this email finds you well. I wanted to share something that could completely transform your business operations.

Our latest breakthrough in ${input} technology has delivered unprecedented results for our clients:

🎯 2,500% average ROI
⚡ 98% efficiency improvement
🌍 Global scalability
🔒 Enterprise-grade security

[Client Name], a Fortune 500 company, achieved 5,000% ROI in just 6 months using our ${input} solutions.

Would you be interested in a brief 15-minute call to discuss how this could benefit your organization?

Best regards,
[Your Name]
Zion Tech Group`,

      ad: `🚀 REVOLUTIONARY ${input.toUpperCase()} BREAKTHROUGH!

Transform Your Business in 30 Days:
✅ 2,500% ROI Guaranteed
✅ 98% Efficiency Gains
✅ Zero Risk Implementation
✅ 24/7 Expert Support

Fortune 500 companies are already seeing results!

Limited Time: Free Consultation + Custom Strategy
Call Now: (555) 123-4567
Or Visit: zion.app/revolution

'Don', 't get left behind. The future is here.`,

      product: `Revolutionary ${input} Solution

Transform your business with our cutting-edge ${input} technology that delivers:

🎯 Proven Results
• 2,500% average ROI
• 98% efficiency improvement
• 340% productivity increase

⚡ Advanced Features
• Quantum-neural fusion processing
• Autonomous operation
• Real-time optimization
• Global scalability

🔒 Enterprise Ready
• Bank-grade security
• 99.9% uptime guarantee
• 24/7 support
• Compliance certified

Perfect for: Fortune 500 companies, growing enterprises, innovative startups

Get started today and join the revolution!`
    };

    return templates[type as keyof typeof templates] || templates.blog;
  };

  const handleSampleClick = (sample: string) => {
    setInputText(sample);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🎮 INTERACTIVE DEMO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Try the AI 2025 Ultimate Content Revolution
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of our revolutionary AI content generation technology. 
            See how it can transform your content creation process in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Generator</h3>
            
            {/* Content Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Content Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {contentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center gap-2 p-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">{type.icon}</span>
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Enter your topic or prompt
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your content topic or prompt here..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={4}
              />
            </div>

            {/* Sample Inputs */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Or try these examples:
              </label>
              <div className="flex flex-wrap gap-2">
                {sampleInputs.map((sample, index) => (
                  <button
                    key={index}
                    onClick={() => handleSampleClick(sample)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateContent}
              disabled={!inputText.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating Content...
                </div>
              ) : (
                'Generate AI Content'
              )}
            </button>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Generated Content</h3>
            
            {generatedContent ? (
              <div className="space-y-6">
                {/* Content Preview */}
                <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                    {generatedContent}
                  </pre>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">{metrics.timeSaved}%</div>
                    <div className="text-sm text-green-700">Time Saved</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">{metrics.efficiency}%</div>
                    <div className="text-sm text-blue-700">Efficiency Gain</div>
                  </div>
                  <div className="text-center bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">{metrics.quality}/100</div>
                    <div className="text-sm text-purple-700">Quality Score</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    Copy Content
                  </button>
                  <button className="flex-1 bg-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                    Regenerate
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-lg">Enter a topic above to see the AI magic happen!</p>
                <p className="text-sm mt-2">Our AI will generate high-quality content in seconds.</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Scale This Power?</h3>
            <p className="text-xl mb-8 opacity-90">
              This demo shows just a fraction of what our full platform can do. 
              Imagine this power across your entire content strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Full Platform Access
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Enterprise Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIContentRevolutionDemo;