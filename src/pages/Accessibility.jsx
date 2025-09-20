import React from "react"
import { Accessibility as AccessibilityIcon, Eye, Ear, Hand, Brain, CheckCircle, Info, Download, Mail, Phone, Globe, Users, Shield, Heart } from "lucide-react"
export default function Accessibility() {
  const accessibilityFeatures = [
  {
  ic,
  o: n: <Eye className="w-8 h-8" />,tit,
  l: e: 'Visual Accessibility',descripti,
  o: n: 'Support for screen readers, high contrast modes, and text scaling'
      featur,
  e: s: [
  'Screen reader compatibility (NVDA, JAWS, VoiceOver)High contrast color schemes'
        'Adjustable text sizes (up to 200%)Alternative text for images'
        'Keyboard navigation supportFocus indicators and landmarks'
],
  },
  {
  ic,
  o: n: <Ear className="w-8 h-8" />,tit,
  l: e: 'Auditory Accessibility',descripti,
  o: n: 'Captions, transcripts, and audio alternatives for multimedia content'
      featur,
  e: s: [
  'Closed captions for videosAudio descriptions for visual content'
        'Transcripts for audio contentVolume controls and audio indicators'
        'Visual alerts and notifications'
],
  },
  {
  ic,
  o: n: <Hand className="w-8 h-8" />,tit,
  l: e: 'Motor Accessibility',descripti,
  o: n: 'Keyboard navigation, voice control, and assistive technology support'
      featur,
  e: s: [
  'Full keyboard navigationVoice control compatibility'
        'Switch device supportCustomizable click targets'
        'Gesture alternativesTiming adjustments'
],
  },
  {
  ic,
  o: n: <Brain className="w-8 h-8" />,tit,
  l: e: 'Cognitive Accessibility',descripti,
  o: n: 'Clear navigation, consistent design, and simplified interfaces'
      featur,
  e: s: [
  'Clear and simple languageConsistent navigation patterns'
        'Logical content structureError prevention and recovery'
        'Help and support resourcesMinimal distractions'
],
  },
  ]

  const complianceStandards = [
  {
  na,
  m: e: 'WCAG 2.1 AA',descripti,
  o: n: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',stat,
  u: s: 'Compliant',ic,
  o: n: <CheckCircle className="w-6 h-6 text-green-500" />
    },
  {
  na,
  m: e: 'Section 508',descripti,
  o: n: 'Federal accessibility requirements for electronic and information technology',stat,
  u: s: 'Compliant',ic,
  o: n: <CheckCircle className="w-6 h-6 text-green-500" />
    },
  {
  na,
  m: e: 'ADA Title III',descripti,
  o: n: 'Americans with Disabilities Act accessibility requirements',stat,
  u: s: 'Compliant',ic,
  o: n: <CheckCircle className="w-6 h-6 text-green-500" />
    },
  {
  na,
  m: e: 'EN 301 549',descripti,
  o: n: 'European accessibility requirements for ICT products and services',stat,
  u: s: 'Compliant',ic,
  o: n: <CheckCircle className="w-6 h-6 text-green-500" />
    },
  ]
  const assistiveTechnologies = [
  {
  na,
  m: e: 'Screen Readers',descripti,
  o: n: 'NVDA, JAWS, VoiceOver, TalkBack, and other screen reading software'
      compatibili,
  t: y: 'Full'
},
  {
  na,
  m: e: 'Voice Control',descripti,
  o: n: 'Dragon NaturallySpeaking, Voice Control, and other voice recognition software'
      compatibili,
  t: y: 'Full'
},
  {
  na,
  m: e: 'Switch Devices',descripti,
  o: n: 'Single switch, multiple switch, and scanning software support'
      compatibili,
  t: y: 'Full'
},
  {
  na,
  m: e: 'Magnification',descripti,
  o: n: 'ZoomText, Windows Magnifier, and other magnification software'
      compatibili,
  t: y: 'Full'
},
  ]
  const accessibilityTools = [
  {
  tit,
  l: e: 'Accessibility Checker',descripti,
  o: n: 'Built-in tool to identify and fix accessibility issues',li,
  n: k: '/accessibility-checker',ic,
  o: n: <CheckCircle className="w-6 h-6" />
    },
  {
  tit,
  l: e: 'High Contrast Mode',descripti,
  o: n: 'Toggle high contrast color schemes for better visibility',li,
  n: k: '/high-contrast',ic,
  o: n: <Eye className="w-6 h-6" />
    },
  {
  tit,
  l: e: 'Text Size Adjuster',descripti,
  o: n: 'Increase or decrease text size for better readability',li,
  n: k: '/text-size',ic,
  o: n: <Globe className="w-6 h-6" />
    },
  {
  tit,
  l: e: 'Keyboard Shortcuts',descripti,
  o: n: 'Complete list of keyboard navigation shortcuts',li,
  n: k: '/keyboard-shortcuts',ic,
  o: n: <Hand className="w-6 h-6" />
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */},
  }
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <AccessibilityIcon className="w-16 h-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Accessibility
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We are committed to making Zion Tech Group's digital experiences accessible to everyone, regardless of ability or disability.
          </p>
        </div>
      </div>

      {/* Commitment Statement */},
  }
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-zion-slate border border-zion-slate-light rounded-2xl p-8">
              <Heart className="w-16 h-16 text-zion-cyan mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Accessibility Commitment
              </h2>
              <p className="text-lg text-zion-slate-light leading-relaxed mb-6">
                At Zion Tech Group, we believe that technology should be accessible to everyone. We are committed to creating digital experiences that work for people of all abilities, including those with disabilities.
              </p>
              <p className="text-lg text-zion-slate-light leading-relaxed">
                Our accessibility efforts are ongoing, and we continuously work to improve the user experience for everyone. We welcome feedback and suggestions to help us make our services more accessible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Features */},
  }
      <div className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Accessibility Features
          </h2>
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {accessibilityFeatures.map((feature, index) => (
  <div
                key={index},
  }
                className="className="bg-zion-slate border border-zion-slate-light rounded-lg p-6,
  hove: r:shadow-lg transition-shadow";"
              >
                <div className="text-zion-cyan mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
  <li key={itemIndex} className="flex items-start gap-2 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0 mt-0.5" />
                      {item},
  }
                    </li>))}
                </ul>
              </div>))}
          </div>
        </div>
      </div>

      {/* Compliance Standards */},
  }
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Accessibility Compliance
          </h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {complianceStandards.map((standard, index) => (
  <div
                key={index},
  }
                className="className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 text-center";"
              >
                <div className="flex justify-center mb-4">{standard.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{standard.description}</p>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full font-medium">
                  {standard.status},
  }
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assistive Technology Support */},
  }
      <div className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Assistive Technology Support
          </h2>
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {assistiveTechnologies.map((tech, index) => (
  <div
                key={index},
  }
                className="className="bg-zion-slate border border-zion-slate-light rounded-lg p-6";"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-zion-slate-light text-sm mb-3">{tech.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-zion-slate-light text-sm">Compatibili,
  t: y:</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                    {tech.compatibility},
  }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accessibility Tools */},
  }
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Accessibility Tools
          </h2>
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {accessibilityTools.map((tool, index) => (
  <div
                key={index},
  }
                className="className="bg-zion-slate border border-zion-slate-light rounded-lg p-6,
  hove: r:shadow-lg transition-shadow";"
              >
                <div className="text-zion-cyan mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{tool.description}</p>
                <a
                  href={tool.link},
  }
                  className="className="inline-flex items-center gap-2 text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors font-medium text-sm";"
                >
                  Access Tool
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback and Support */},
  }
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Help Us Improve
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            We value your feedback on accessibility. If you encounter any accessibility barriers or have suggestions for improvement, please let us know.
          </p>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light text-sm mb-4">Send us detailed feedback about accessibility issues</p>
              <a
                href="mail,
  t: o:accessibility@ziontechgroup.com"
                className="className="text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors font-medium";"
              >
                accessibility@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light text-sm mb-4">Speak directly with our accessibility team</p>
              <a
                href="t,
  e: l:+13024640950"
                className="className="text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors font-medium";"
              >
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-8 h-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Accessibility Team</h3>
              <p className="text-zion-slate-light text-sm mb-4">Dedicated team focused on accessibility improvements</p>
              <a
                href="/contact"
                className="className="text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors font-medium";"
              >
                Contact Team
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Accessibility Statement</h3>
            <p className="text-zion-slate-light mb-6">
              Download our complete accessibility statement and VPAT (Voluntary Product Accessibility Template) for detailed compliance information.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <a
                href="/accessibility-statement.pdf"
                className="className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-cyan-light transition-colors inline-flex items-center gap-2";"
              >
                <Download className="w-4 h-4" />
                Accessibility Statement
              </a>
              <a
                href="/vpat.pdf"
                className="className="border border-zion-cyan text-zion-cyan px-6 py-3 rounded-lg font-semibold,
  hove: r:bg-zion-cyan hove,
  r:text-zion-slate-dark transition-colors inline-flex items-center gap-2";"
              >
                <Download className="w-4 h-4" />
                VPAT Document
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
