import React from 'react';;,
label: 'Countries Reached',;,
description: 'Global presence and impact across diverse markets'
    },
    {;,
number: '95%',;,
label: 'Client Satisfaction',;,
description: 'Consistently exceeding client expectations and needs'
    },
    {;,
number: '100%',;,
label: 'Carbon Neutral',;,
description: 'Committed to sustainable technology development';
import { Link } from 'react-router-dom';
import {;;
Target,;
Heart,;
Users,;
Globe,;
Rocket,;
Shield,;
Award,;
ArrowRight,;
Brain,;
Cpu,;
Zap,;
Building,;
Star,;
TrendingUp,;
Eye
} from 'lucide-react';
export default function Mission() {;
const coreValues = [;
    {; }

title: "Innovation First"},;,
description: "We push the boundaries of what's possible with cutting-edge technology",;,
icon: Rocket,;,
details: [
        "Continuous research and development",
        "Adoption of emerging technologies",
        "Creative problem-solving approaches",
        "Future-focused solutions"
      ]

    },
    {;,
title: "Excellence",;,
description: "We deliver the highest quality solutions and exceptional service",;,
icon: Award,;,
details: [
        "Rigorous quality standards",
        "Continuous improvement processes",
        "Attention to detail",
        "Customer satisfaction focus"
      ]

    },
    {;,
title: "Collaboration",;,
description: "We work together to achieve extraordinary results for our clients",;,
icon: Users,;,
details: [
        "Team-based problem solving",
        "Cross-functional expertise",
        "Client partnership approach",
        "Knowledge sharing culture"
      ]

    },
    {;,
title: "Integrity",;,
description: "We maintain the highest ethical standards in all our interactions",;,
icon: Shield,;,
details: [
        "Transparent communication",
        "Ethical AI development",
        "Data privacy protection",
        "Trust-based relationships"
      ]

    }

  ];
const missionPillars = [;
    {;,
title: "AI-Powered Transformation",;,
description: "Leveraging artificial intelligence to revolutionize business operations and decision-making",;,
icon: Brain,;,
goals: [
        "Democratize AI access for businesses of all sizes",
        "Develop autonomous systems that enhance human capabilities",
        "Create intelligent solutions that learn and adapt",
        "Bridge the gap between AI research and practical applications"
      ],;,
metrics: ["500+ AI implementations", "40% average efficiency improvement", "99.9% system reliability"]

    },
    {;,
title: "Quantum Computing Innovation",;,
description: "Pioneering quantum computing solutions for complex computational challenges",;,
icon: Cpu,;,
goals: [
        "Advance quantum computing research and development",
        "Create quantum-safe security solutions",
        "Develop quantum algorithms for real-world problems",
        "Establish quantum computing as a mainstream technology"
      ],;,
metrics: ["3 quantum research partnerships", "2 quantum patents filed", "10x computational speed improvement"]

    },
    {;,
title: "Cybersecurity Excellence",;,
description: "Protecting businesses from evolving threats with advanced security solutions",;,
icon: Shield,;,
goals: [
        "Provide comprehensive security protection",
        "Automate compliance and risk management",
        "Develop proactive threat detection",
        "Ensure business continuity and resilience"
      ],;,
metrics: ["Zero security breaches", "100% compliance success", "24/7 threat monitoring"]

    },
    {;,
title: "Global Impact",;,
description: "Making technology accessible and beneficial to businesses worldwide",;,
icon: Globe,;,
goals: [
        "Expand our global presence and reach",
        "Localize solutions for regional markets",
        "Support sustainable technology development",
        "Contribute to digital inclusion initiatives"
      ],;,
metrics: ["25+ countries served", "10+ regional offices", "Multi-language support"]

    }

  ];
const impactAreas = [;
    {;,
title: "Healthcare",;,
description: "Improving patient care and medical research through AI-powered solutions",;,
icon: Heart,;,
impact: [
        "30% improvement in diagnostic accuracy",
        "50% reduction in administrative burden",
        "Enhanced patient engagement and outcomes",
        "Accelerated drug discovery processes"
      ]

    },
    {;,
title: "Manufacturing",;,
description: "Revolutionizing production processes with intelligent automation and predictive analytics",;,
icon: Building,;,
impact: [
        "40% increase in production efficiency",
        "60% reduction in downtime",
        "Real-time quality monitoring and control",
        "Sustainable manufacturing practices"
      ]

    },
    {;,
title: "Financial Services",;,
description: "Enhancing security, compliance, and customer experience in financial operations",;,
icon: TrendingUp,;,
impact: [
        "99.9% fraud detection accuracy",
        "Real-time risk assessment and management",
        "Automated compliance monitoring",
        "Enhanced customer personalization"
      ]

    },
    {;,
title: "Education",;,
description: "Transforming learning experiences through personalized and adaptive technology",;,
icon: Star,;,
impact: [
        "Personalized learning pathways",
        "Adaptive content delivery",
        "Enhanced student engagement",
        "Improved learning outcomes"
      ]

    }

  ];
const futureVision = [;
    {;,
year: "2025",;,
title: "AI Democratization",;,
description: "Making AI accessible to businesses of all sizes through simplified platforms and tools",;,
milestones: [
        "Launch of AI marketplace platform",
        "1000+ AI implementations",
        "Partnership with 50+ technology providers"
      ]

    },
    {;,
year: "2027",;,
title: "Quantum Revolution",;,
description: "Commercial quantum computing solutions for enterprise applications",;,
milestones: [
        "First commercial quantum platform",
        "Quantum-safe security standards",
        "Industry-specific quantum solutions"
      ]

    },
    {;,
year: "2030",;,
title: "Autonomous Future",;,
description: "Fully autonomous business operations powered by AI and quantum computing",;,
milestones: [
        "Autonomous business platform launch",
        "Zero-touch business operations",
        "AI-human collaboration ecosystem"
      ]

    }

  ];
return (;
      {/* Mission Pillars */}

      <section className="py-20 px-4 sm: px-6 lg: px-8">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">;
Our Mission Pillars
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
Four core pillars that guide our mission and drive our impact across the technology landscape.
            </p>
          </div>
          
          <div>
            {missionPillars.map((pillar), index) => (
              <$2 />;
key={index}

                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div>
                  <pillar.icon className="w-8 h-8 text-white" />
  </pillar>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{pillar.description}</p>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Key Goals:</h4>
                  <ul className="space-y-2">
                    {pillar.goals.map((goal), goalIndex) => (
                      <li key={goalIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                        <CheckCircle />
                        <span>{goal}</span>
                      </li>
                    ))}

                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Strategic Goals Timeline */}

      <section className="py-20 px-4 sm: px-6 lg: px-8 bg-black/20">
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">;
Strategic Roadmap
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
Our strategic goals and milestones for the next five years, driving innovation;
and transformation across industries.
            </p>
          </div>
          
          <div>
            {/* Timeline line */}

            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div>
              {strategicGoals.map((goal), index) => (
                < key={index} className={`relative flex items-center ${$2 />};
index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}

                  <div>
          <div>
                      <div>
          <div>
                          <goal.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-cyan-400">{goal.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{goal.title}</h3>
                      <p className="text-gray-400">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}

    <div>
      {/* Hero Section */}

      <div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
Our Mission
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">;
To democratize cutting-edge technology and empower businesses worldwide to achieve;
extraordinary results through AI, quantum computing, and innovative digital solutions.;
We believe that every organization, regardless of size, should have access to the;
transformative power of advanced technology.
            </p>
            <div>
          <div>
                <Target />
                <span>Clear Vision</span>
              </div>
              <div>
                <Heart />
                <span>Passionate Purpose</span>
              </div>
              <div>
                <Globe />
                <span>Global Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}

                <p className="text-gray-400 leading-relaxed">{value.description}</p>
      <div>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
        <div>
          {coreValues.map((value), index) => {;
const Icon = value.icon;;
return (;
              <$2 />;
}

key={index}

                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div>
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{value.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{value.description}</p>
                
                <ul className="space-y-2">
                  {value.details.map((detail), idx) => (
                    <li key={idx} className="text-gray-300 text-xs flex items-start">
                      <div>
                      {detail}

                    </li>
                  ))}

                </ul>
              </div>
            )
          })}

        </div>
              <div>
          <div>
                  {metric.number}

      </div>

      {/* Mission Pillars */}

      <div>
          <div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Mission Pillars</h2>
          <div>
            {missionPillars.map((pillar), index) => {;
const Icon = pillar.icon;;
return (;
                <$2 />;
}

key={index}

                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
                >
                  <div>
          <div>
                      <Icon />
                    </div>
                    <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{pillar.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Goals</h4>
                    <ul className="space-y-2">
                      {pillar.goals.map((goal), idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <div>
                          {goal}

                        </li>
                      ))}

                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Success Metrics</h4>
                    <div>
                      {pillar.metrics.map((metric), idx) => (
                        <$2 />;
key={idx}

                          className="px-3 py-1 bg-gray-600 text-gray-300 text-xs rounded-full"
                        >
                          {metric}

                        </span>
                      ))}

                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>

      {/* Impact Areas */}

      <div>
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Impact</h2>
        <div>
          {impactAreas.map((area), index) => {;
const Icon = area.icon;;
return (;
              <$2 />;
}

key={index}

                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
              >
                <div>
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">{area.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{area.description}</p>
                
                <ul className="space-y-2">
                  {area.impact.map((item), idx) => (
                    <li key={idx} className="text-gray-300 text-xs flex items-start">
                      <div>
                      {item}

                    </li>
                  ))}

                </ul>
              </div>
            )
          })}

        </div>
      </div>

      {/* Future Vision */}

      <div>
          <div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Future Vision</h2>
          <div>
            {futureVision.map((vision), index) => (
              <$2 />;
key={index}

                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
              >
                <div>
          <div>
                    <span className="text-white font-bold text-2xl">{vision.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{vision.title}</h3>
                  <p className="text-gray-300 text-sm">{vision.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Milestones</h4>
                  <ul className="space-y-2">
                    {vision.milestones.map((milestone), idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <div>
                        {milestone}

                      </li>
                    ))}

                  </ul>
                </div>
                <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                <p className="text-sm text-gray-300">{metric.description}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      </div>
      {/* Call to Action */}

      <div>
          <div>
          <h2 className="text-3xl font-bold text-white mb-6">;
Join Us in Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
Whether you're a client looking to transform your business, a partner wanting to;
collaborate, or a team member passionate about making a difference, we invite you;
to be part of our journey to democratize technology and create positive global impact.
          </p>
          <div>
            <$2 />;
to="/contact";
className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >;
Get Started Today
              <ArrowRight />
            </Link>
            <$2 />;
to="/careers";
className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
            >;
Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission</$1></div></p></section>