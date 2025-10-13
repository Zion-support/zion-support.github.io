import { ArrowRight, Shield, Brain, CheckCircle, Zap, Globe, Star, Users, Award, Clock, Eye, Image, Target, Scan, Lock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
const CybersecurityAudit = () => {
  const features = [
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive security vulnerability scanning and analysis",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify security weaknesses",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Compliance Review",
      description: "Ensure adherence to security standards and regulations",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Recommendations",
      description: "Detailed action plan to improve your security posture",
      icon: <Lock className="w-6 h-6" />,
    "Comprehensive security analysis",
    "Industry-standard compliance",
    "Detailed vulnerability reports",
    "Actionable recommendations",
    "Ongoing security monitoring",
    "Expert security guidance"
        title="Cybersecurity Audit - Comprehensive Security Assessment | Zion Tech Group"
        description="Protect your business with comprehensive cybersecurity audits. Vulnerability assessment, penetration testing, and compliance review for maximum security."
        keywords="cybersecurity audit, security assessment, vulnerability testing, penetration testing, compliance review, security audit"
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Security Assessment</span>
            Protect your business with comprehensive cybersecurity audits. 
            Identify vulnerabilities, test defenses, and ensure compliance with industry standards.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Audit;
              icon={<Shield className="w-5 h-5" />}
            >
              Learn More;
              Comprehensive Security Services;
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to assess and improve your cybersecurity posture.
              </p><FuturisticCard;
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}</FuturisticCard>
                </p>
              </FuturisticCard>
        <ResponsiveContainer /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity Audit?</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience comprehensive security assessment that protects your business.
              </p><div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg" /><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /><ResponsiveContainer /><div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using our cybersecurity audit services to protect their assets.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /><FuturisticButton;
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Your Audit;
              </FuturisticButton>
              <FuturisticButton;
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing;
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
export default CybersecurityAudit;
