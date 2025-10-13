
export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,"      title: "AI Solutions","      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.","      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]"    },
    {
      icon: <Shield className="w-8 h-8" />,"      title: "Cybersecurity","      description: "Protect your digital assets with our comprehensive cybersecurity solutions and threat monitoring.","      features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance"]"    },
    {
      icon: <Cloud className="w-8 h-8" />,"      title: "Cloud Services","      description: "Migrate and optimize your infrastructure with our cloud solutions and managed services.","      features: ["Cloud Migration", "Infrastructure Management", "Scalability", "Cost Optimization"]"    },
    {
      icon: <Zap className="w-8 h-8" />,"      title: "Micro SAAS","      description: "Ready-to-use software solutions that can transform your business operations immediately.","      features: ["AI Tools", "Business Automation", "Quick Deployment", "No Setup Required"]"    },
    {
      icon: <Globe className="w-8 h-8" />,"      title: "5G Solutions","      description: "Leverage the power of 5G technology for next-generation connectivity and IoT solutions.","      features: ["5G Infrastructure", "IoT Solutions", "Edge Computing", "Smart Cities"]"    },
    {
      icon: <BarChart3 className="w-8 h-8" />,"      title: "Data Analytics","      description: "Unlock insights from your data with our advanced analytics and business intelligence solutions.","      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling", "Real-time Analytics"]"    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"      <Helmet>
        <title>Services - Zion Tech Group</title>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">"                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>"                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
