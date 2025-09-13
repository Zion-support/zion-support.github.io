import React, { useState } from 'react';
import SEO from "../../components/SEO";
import Card from '../../../components/ui/Card';

export default function MLOpsBestPractices() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'infrastructure', title: 'Infrastructure', icon: '🏗️' },
    { id: 'data-pipeline', title: 'Data Pipeline', icon: '📊' },
    { id: 'model-lifecycle', title: 'Model Lifecycle', icon: '🔄' },
    { id: 'monitoring', title: 'Monitoring', icon: '📈' },
    { id: 'governance', title: 'Governance', icon: '🛡️' }
  ];

  const mlopsPillars = [
    {
      title: 'Data Management',
      icon: '📊',
      description: 'Robust data pipelines, versioning, and quality assurance',
      practices: [
        'Implement data versioning and lineage tracking',
        'Establish automated data quality checks',
        'Create reproducible data preprocessing pipelines',
        'Use feature stores for consistent feature engineering',
        'Implement data drift detection and monitoring'
      ],
      tools: ['Apache Airflow', 'Great Expectations', 'DVC', 'Feast', 'Apache Kafka']
    },
    {
      title: 'Model Development',
      icon: '🧠',
      description: 'Streamlined model training, validation, and experimentation',
      practices: [
        'Use experiment tracking and model registry',
        'Implement automated model validation',
        'Create reproducible training pipelines',
        'Use containerization for consistent environments',
        'Implement A/B testing frameworks'
      ],
      tools: ['MLflow', 'Weights & Biases', 'Kubeflow', 'Docker', 'TensorBoard']
    },
    {
      title: 'Model Deployment',
      icon: '🚀',
      description: 'Reliable model serving and deployment automation',
      practices: [
        'Implement CI/CD pipelines for models',
        'Use blue-green or canary deployments',
        'Create model serving infrastructure',
        'Implement rollback mechanisms',
        'Use auto-scaling for model serving'
      ],
      tools: ['Kubernetes', 'Seldon Core', 'KServe', 'TensorFlow Serving', 'ONNX Runtime']
    },
    {
      title: 'Monitoring & Observability',
      icon: '📈',
      description: 'Continuous monitoring of model performance and system health',
      practices: [
        'Monitor model performance metrics',
        'Track data and concept drift',
        'Implement alerting systems',
        'Create comprehensive logging',
        'Use distributed tracing'
      ],
      tools: ['Prometheus', 'Grafana', 'Evidently AI', 'Arize', 'MLflow']
    },
    {
      title: 'Governance & Compliance',
      icon: '🛡️',
      description: 'Model governance, security, and regulatory compliance',
      practices: [
        'Implement model approval workflows',
        'Create audit trails and documentation',
        'Ensure model interpretability',
        'Implement security controls',
        'Maintain regulatory compliance'
      ],
      tools: ['Model Cards', 'SHAP', 'LIME', 'Apache Atlas', 'DataHub']
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1: Foundation Setup',
      duration: '2-4 weeks',
      icon: '🏗️',
      description: 'Establish basic MLOps infrastructure and processes',
      tasks: [
        'Set up version control for code and data',
        'Implement basic CI/CD pipelines',
        'Create development and staging environments',
        'Establish model registry and experiment tracking',
        'Define basic monitoring and logging'
      ],
      deliverables: [
        'Version control system configured',
        'Basic CI/CD pipeline operational',
        'Model registry established',
        'Development workflows documented',
        'Initial monitoring setup'
      ]
    },
    {
      phase: 'Phase 2: Data Pipeline Automation',
      duration: '3-6 weeks',
      icon: '📊',
      description: 'Automate data processing and feature engineering',
      tasks: [
        'Implement automated data ingestion',
        'Create feature engineering pipelines',
        'Set up data quality monitoring',
        'Establish data versioning and lineage',
        'Implement automated data validation'
      ],
      deliverables: [
        'Automated data pipelines',
        'Feature store implementation',
        'Data quality monitoring system',
        'Data lineage documentation',
        'Automated validation framework'
      ]
    },
    {
      phase: 'Phase 3: Model Lifecycle Automation',
      duration: '4-8 weeks',
      icon: '🔄',
      description: 'Automate model training, validation, and deployment',
      tasks: [
        'Implement automated model training',
        'Create model validation frameworks',
        'Set up automated deployment pipelines',
        'Implement model serving infrastructure',
        'Create rollback and recovery mechanisms'
      ],
      deliverables: [
        'Automated training pipelines',
        'Model validation framework',
        'Deployment automation',
        'Model serving infrastructure',
        'Recovery procedures'
      ]
    },
    {
      phase: 'Phase 4: Advanced Monitoring',
      duration: '3-5 weeks',
      icon: '📈',
      description: 'Implement comprehensive monitoring and alerting',
      tasks: [
        'Set up model performance monitoring',
        'Implement drift detection systems',
        'Create alerting and notification systems',
        'Establish SLA monitoring',
        'Implement automated retraining triggers'
      ],
      deliverables: [
        'Performance monitoring dashboard',
        'Drift detection system',
        'Alerting infrastructure',
        'SLA monitoring setup',
        'Automated retraining system'
      ]
    },
    {
      phase: 'Phase 5: Governance & Optimization',
      duration: '2-4 weeks',
      icon: '🛡️',
      description: 'Implement governance and optimize operations',
      tasks: [
        'Establish model governance processes',
        'Implement security controls',
        'Create compliance documentation',
        'Optimize infrastructure costs',
        'Establish best practices and training'
      ],
      deliverables: [
        'Governance framework',
        'Security implementation',
        'Compliance documentation',
        'Cost optimization strategy',
        'Team training program'
      ]
    }
  ];

  const bestPractices = [
    {
      category: 'Infrastructure & Platform',
      practices: [
        {
          practice: 'Use Infrastructure as Code (IaC)',
          description: 'Define and manage infrastructure using code to ensure consistency and reproducibility.',
          benefits: ['Consistent environments', 'Version control', 'Automated provisioning', 'Disaster recovery']
        },
        {
          practice: 'Implement Containerization',
          description: 'Use containers to package models and dependencies for consistent deployment across environments.',
          benefits: ['Environment consistency', 'Scalability', 'Resource isolation', 'Easy deployment']
        },
        {
          practice: 'Adopt Cloud-Native Architecture',
          description: 'Design systems to leverage cloud services for scalability, reliability, and cost optimization.',
          benefits: ['Auto-scaling', 'High availability', 'Cost efficiency', 'Managed services']
        }
      ]
    },
    {
      category: 'Data Management',
      practices: [
        {
          practice: 'Implement Data Versioning',
          description: 'Version control your data to track changes and enable reproducibility.',
          benefits: ['Reproducibility', 'Rollback capability', 'Change tracking', 'Collaboration']
        },
        {
          practice: 'Use Feature Stores',
          description: 'Centralize feature management to ensure consistency and reuse across models.',
          benefits: ['Feature reuse', 'Consistency', 'Governance', 'Performance']
        },
        {
          practice: 'Monitor Data Quality',
          description: 'Continuously monitor data quality to detect issues early and maintain model performance.',
          benefits: ['Early issue detection', 'Model reliability', 'Automated validation', 'Quality assurance']
        }
      ]
    },
    {
      category: 'Model Development',
      practices: [
        {
          practice: 'Track Experiments Systematically',
          description: 'Use experiment tracking tools to log parameters, metrics, and artifacts.',
          benefits: ['Reproducibility', 'Comparison', 'Knowledge sharing', 'Debugging']
        },
        {
          practice: 'Implement Automated Testing',
          description: 'Create comprehensive tests for models, including unit, integration, and performance tests.',
          benefits: ['Quality assurance', 'Regression prevention', 'Confidence in deployments', 'Automated validation']
        },
        {
          practice: 'Use Model Validation Frameworks',
          description: 'Implement systematic validation to ensure models meet performance and business requirements.',
          benefits: ['Quality gates', 'Risk mitigation', 'Compliance', 'Performance assurance']
        }
      ]
    },
    {
      category: 'Deployment & Operations',
      practices: [
        {
          practice: 'Implement CI/CD for ML',
          description: 'Create continuous integration and deployment pipelines specifically designed for ML workflows.',
          benefits: ['Faster deployment', 'Quality assurance', 'Automation', 'Risk reduction']
        },
        {
          practice: 'Use Gradual Rollouts',
          description: 'Deploy models gradually using canary or blue-green deployment strategies.',
          benefits: ['Risk mitigation', 'Performance validation', 'Quick rollback', 'User experience']
        },
        {
          practice: 'Monitor Model Performance',
          description: 'Continuously monitor model performance in production to detect degradation.',
          benefits: ['Performance assurance', 'Early issue detection', 'Automated alerts', 'Data-driven decisions']
        }
      ]
    }
  ];

  const commonChallenges = [
    {
      challenge: 'Model Drift and Performance Degradation',
      description: 'Models can degrade over time due to changing data patterns or concept drift.',
      solutions: [
        'Implement automated drift detection',
        'Set up continuous model monitoring',
        'Create automated retraining pipelines',
        'Establish performance alerting',
        'Use A/B testing for model validation'
      ]
    },
    {
      challenge: 'Data Pipeline Complexity',
      description: 'Managing complex data pipelines with multiple dependencies and transformations.',
      solutions: [
        'Use workflow orchestration tools',
        'Implement data lineage tracking',
        'Create modular pipeline components',
        'Use feature stores for consistency',
        'Implement comprehensive testing'
      ]
    },
    {
      challenge: 'Model Versioning and Reproducibility',
      description: 'Ensuring model reproducibility and managing multiple model versions.',
      solutions: [
        'Use model registries and versioning',
        'Implement experiment tracking',
        'Containerize models and environments',
        'Document all dependencies',
        'Create reproducible training pipelines'
      ]
    },
    {
      challenge: 'Scalability and Resource Management',
      description: 'Managing computational resources and scaling ML workloads efficiently.',
      solutions: [
        'Use cloud-native auto-scaling',
        'Implement resource monitoring',
        'Optimize model serving infrastructure',
        'Use distributed training frameworks',
        'Implement cost optimization strategies'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="MLOps Best Practices Guide 2025 - Zion Tech Group"
        description="Comprehensive guide to MLOps best practices covering infrastructure, data pipelines, model lifecycle, monitoring, and governance. Industry-leading strategies for ML operations."
        keywords="MLOps, machine learning operations, ML pipeline, model deployment, ML monitoring, ML governance, ML infrastructure"
        url="/resources/ai-mlops-best-practices-2025"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🔧 MLOps Best Practices Guide 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Master Machine Learning Operations with industry-leading practices for infrastructure, 
              data pipelines, model lifecycle, monitoring, and governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tools/ai-model-monitor"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                📊 Model Monitoring Tool
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
              >
                🔧 MLOps Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 m-2 rounded-lg font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {section.icon} {section.title}
            </button>
          ))}
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">🔧 MLOps Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">What is MLOps?</h3>
                  <p className="text-gray-700 mb-4">
                    MLOps (Machine Learning Operations) is a set of practices that combines Machine Learning 
                    and DevOps to standardize and streamline the ML lifecycle. It focuses on automating and 
                    monitoring the entire ML workflow from development to deployment and maintenance.
                  </p>
                  <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Faster time-to-market for ML models</li>
                    <li>• Improved model reliability and performance</li>
                    <li>• Reduced operational overhead</li>
                    <li>• Better collaboration between teams</li>
                    <li>• Enhanced model governance and compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">MLOps Maturity Levels</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800">Level 1: Manual</h4>
                      <p className="text-blue-700">Ad-hoc processes, manual deployment</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800">Level 2: Automated</h4>
                      <p className="text-green-700">CI/CD pipelines, automated training</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800">Level 3: Optimized</h4>
                      <p className="text-purple-700">Advanced monitoring, auto-scaling</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800">Level 4: Self-Healing</h4>
                      <p className="text-orange-700">Automated retraining, self-optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* MLOps Pillars */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-8">🏗️ MLOps Pillars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mlopsPillars.map((pillar, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{pillar.icon}</span>
                      <h3 className="text-xl font-bold">{pillar.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{pillar.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Practices:</h4>
                      <ul className="space-y-1 text-sm">
                        {pillar.practices.slice(0, 3).map((practice, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Tools:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pillar.tools.map((tool, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Implementation Phases */}
        {activeSection === 'infrastructure' && (
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-8">🏗️ MLOps Implementation Phases</h2>
              <div className="space-y-8">
                {implementationPhases.map((phase, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{phase.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold">{phase.phase}</h3>
                        <p className="text-gray-600">Duration: {phase.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{phase.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Tasks:</h4>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              <span className="text-gray-700">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start">
                              <span className="text-blue-600 mr-2">📄</span>
                              <span className="text-gray-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Best Practices */}
        {activeSection === 'data-pipeline' && (
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-8">📊 MLOps Best Practices</h2>
              <div className="space-y-8">
                {bestPractices.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                    <div className="space-y-6">
                      {category.practices.map((practice, practiceIndex) => (
                        <div key={practiceIndex} className="border-l-4 border-green-500 pl-4">
                          <h4 className="text-lg font-semibold mb-2">{practice.practice}</h4>
                          <p className="text-gray-700 mb-3">{practice.description}</p>
                          <div>
                            <h5 className="font-medium mb-2">Benefits:</h5>
                            <ul className="grid grid-cols-2 gap-2">
                              {practice.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-center text-sm">
                                  <span className="text-green-600 mr-2">•</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Common Challenges */}
        {(activeSection === 'monitoring' || activeSection === 'governance') && (
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-8">⚠️ Common Challenges & Solutions</h2>
              <div className="space-y-8">
                {commonChallenges.map((challenge, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">{challenge.challenge}</h3>
                    <p className="text-gray-700 mb-4">{challenge.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Solutions:</h4>
                      <ul className="space-y-2">
                        {challenge.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <Card className="p-8 mt-12 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Implement MLOps Best Practices?</h3>
            <p className="text-lg mb-6">
              Get expert guidance and support for your MLOps implementation with our comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tools/ai-model-monitor"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📊 Try Model Monitor
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                🔧 Schedule MLOps Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                🛠️ View MLOps Services
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}