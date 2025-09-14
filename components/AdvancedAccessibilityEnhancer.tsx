import React from 'react';
EyeVolume2MousePointerKeyboardShieldCheckCircle

const AdvancedAccessibilityEnhancer = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast ratioscreen reader supportand visual indicators",
      compliance: "WCAG 2.1 AA",
      features: ["4.5:1 contrast ratio"Screen reader compatibility"Focus indicators"Alt text optimization"]
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio descriptionscaptionsand sound alternatives",
      compliance: "WCAG 2.1 AA",
      features: ["Audio descriptions"Closed captions"Transcripts"Sound alternatives"]
    },
    {
      icon: MousePointer,
      title: "Motor Accessibility",
      description: "Large click targetskeyboard navigationand gesture alternatives",
      compliance: "WCAG 2.1 AA",
      features: ["44px minimum touch targets"Keyboard navigation"Gesture alternatives"Voice control"]
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard accessibility and focus management",
      compliance: "WCAG 2.1 AA",
      features: ["Tab navigation"Focus management"Skip links"Keyboard shortcuts"]
    },
    {
      icon: Shield,
      title: "Cognitive Accessibility",
      description: "Clear navigationconsistent designand error prevention",
      compliance: "WCAG 2.1 AA",
      features: ["Clear navigation"Consistent design"Error prevention"Help text"]
    },
    {
      icon: CheckCircle,
      title: "Compliance Testing",
      description: "Automated and manual accessibility testing",
      compliance: "WCAG 2.1 AA",
      features: ["Automated testing"Manual testing"User testing"Continuous monitoring"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-green-900 to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Accessibility Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inclusive
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Design</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ensuring our website is accessible to everyoneregardless of ability or technology. 
            We follow WCAG 2.1 AA guidelines to create an inclusive digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {accessibilityFeatures.map((featureindex) => (
            <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-bold text-white">
                  {feature.compliance}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.features.map((itemidx) => (
                  <div key={idx} className="flex items-center text-green-400 text-xs">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Accessibility Stats */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Accessibility Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-1">WCAG 2.1 AA</div>
              <div className="text-gray-300 text-sm">Compliance Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-white font-semibold mb-1">Screen Readers</div>
              <div className="text-gray-300 text-sm">Supported</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.5:1</div>
              <div className="text-white font-semibold mb-1">Contrast Ratio</div>
              <div className="text-gray-300 text-sm">Minimum Standard</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">44px</div>
              <div className="text-white font-semibold mb-1">Touch Targets</div>
              <div className="text-gray-300 text-sm">Minimum Size</div>
            </div>
          </div>
        </div>

        {/* Accessibility Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">15%</div>
            <div className="text-white font-semibold mb-2">Larger Audience</div>
            <div className="text-gray-300 text-sm">Accessible to more users</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">20%</div>
            <div className="text-white font-semibold mb-2">Better SEO</div>
            <div className="text-gray-300 text-sm">Search engine optimization</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">Legal</div>
            <div className="text-white font-semibold mb-2">Compliance</div>
            <div className="text-gray-300 text-sm">ADA and WCAG standards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;