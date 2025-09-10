<<<<<<< HEAD
import React from 'react';""',';';
    ';';';
import React from 'react;;
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
const "TrustIndicators": "React.FC = () => {;
  const indicators = [;
    {;
      "icon": Shiel d", "";
      "title": "Enterprise Security","";
      "description": "SOC 2 Type II Certified", "";
  {;
      "icon": "Shiel d",";
      "title": "Enterprise Security,;
      "description": "SOC 2 Type II Certified,;
      "color": "text-green-500"}, {;
      "icon": "Awar d","";
      "title": "Industry Recognition", "";
      "description": "Top 100 Tech Companies 2026","";
      "color": "text-blue-500"},;
    {;
      "icon": "User s", "";
      "title": "Expert Team","";
      "description": "50+ Certified Professionals", "";
      "icon": "Awar d",";
      "title": "Industry Recognition,;
      "description": "Top 100 Tech Companies 2026,;
      "color": "text-blue-500"},;
    {;
      "icon": "User s",";
      "title": "Expert Team,;
      "description": "50+ Certified Professionals,;
      "color": "text-purple-500"}, {;
      "icon": "Cloc k","";
      "title": "24/7 Support", "";
      "description": "Round-the-clock assistance","";
      "color": "text-orange-500"},;
    {;
      "icon": "CheckCircl e", "";
      "title": "Quality Assurance","";
      "description": "99.9% Uptime Guarantee", "";
      "color": "text-cyan-500"}, {;
      "icon": "Sta r","";
      "title": "Client Satisfaction", "";
      "description": "98% Customer Rating","";
      "color": "text-yellow-500"}
      "icon": "Cloc k",";
      "title": "24/7 Support,;
      "description": "Round-the-clock assistance,;
      "color": "text-orange-500"},;
    {;
      "icon": "CheckCircl e",";
      "title": "Quality Assurance,;
      "description": "99.9% Uptime Guarantee,;
      "color": "text-cyan-500"},;
    {;
      "icon": "Sta r",";
      "title": "Client Satisfaction,;
      "description": "98% Customer Rating,;
      "color": "text-yellow-500"}
  ];
  return ("";
    <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50">"";
      <div className="container mx-auto px-4">"";
        <div className="text-center mb-12">"";
          <h2 className="text-3xl font-bold text-white mb-4">;
            Trusted by Industry Leaders;
          </h2>"";
          <p className="text-slate-300 max-w-2xl mx-auto">;
            Our commitment to excellence and security has earned us the trust of organizations worldwide;
          </p>;
        </div>;
"";
        <div className="grid grid-cols-2 "md": "gri d-cols-3 "lg": gri d-cols-6 gap-8">;
          {indicators.map((indicator", index) => (;
            <div key={index}"";
              className="text-center group "hover": "scal e-105 transition-transform duration-300"" >";
            <div key={index"}";
              className="text-center group "hover": "scal e-105 transition-transform duration-300  >";
              <div className={`w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-"hover": b g-slate-700/50 transition-colors`>;
                <indicator .icon className={`w-8 h-8 ${indicator.color"}`} /` >`}
              </div>"";
              <h3 className="text-sm font-semibold text-white mb-1">;        </div>;
        {/* Additional Trust Elements */}"";
        <div className="mt-16 text-center">"";
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">SSL Secured</span>;
            </div>"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">GDPR Compliant</span>;
            </div>"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">ISO 27001 Certified</span>;
            </div>"";
            <div className="flex items-center gap-2">"";
              <CheckCircle className="w-5 h-5 text-green-500" /" >";
              <span className="text-sm">HIPAA Compliant</span>;
            </div>;
          </div>;
        </div>;
          </div>
        </div>
      </div>';
    </section>';';
  );};';';';
export default TrustIndicators;"`"";
</CheckCircle>;
</CheckCircle>;
</CheckCircle>;
</CheckCircle>;
</indicator>;export default TrustIndicators;"`""';';';';
</CheckCircle>
</CheckCircle>
</CheckCircle>
</CheckCircle>
</indicator>
=======
import React from 'react';
import { Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap } from 'lucide-react';
export function TrustIndicators({ className, showStats = true, showCertifications = true }) {
    const indicators = [
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "SOC 2 Type II certified with end-to-end encryption",
            color: "text-zion-cyan"
        },
        {
            icon: Lock,
            title: "Data Protection",
            description: "GDPR & CCPA compliant with zero-knowledge architecture",
            color: "text-zion-purple"
        },
        {
            icon: Award,
            title: "Industry Leader",
            description: "Recognized by Gartner & Forrester as market leader",
            color: "text-zion-cyan"
        },
        {
            icon: Users,
            title: "Verified Community",
            description: "10,000+ verified professionals and companies",
            color: "text-zion-purple"
        }
    ];
    const certifications = [
        { name: "SOC 2 Type II", status: "Certified", year: "2024" },
        { name: "ISO 27001", status: "Certified", year: "2024" },
        { name: "GDPR", status: "Compliant", year: "2024" },
        { name: "CCPA", status: "Compliant", year: "2024" }
    ];
    const stats = [
        { label: "Active Users", value: "50K+", icon: Users },
        { label: "Countries", value: "100+", icon: Globe },
        { label: "Projects", value: "$10M+", icon: Award },
        { label: "Uptime", value: "99.9%", icon: Zap }
    ];
    return (<section className={`py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || ''}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group maintains the highest standards of security, compliance, and reliability 
            to ensure your business operations remain secure and uninterrupted.
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {indicators.map((indicator, index) => (<div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`mx-auto w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4`}>
                <indicator.icon className={`w-8 h-8 ${indicator.color}`}/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {indicator.title}
              </h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {indicator.description}
              </p>
            </div>))}
        </div>

        {/* Stats Section */}
        {showStats && (<div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (<div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-zion-cyan"/>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {stat.label}
                  </div>
                </div>))}
            </div>
          </div>)}

        {/* Certifications Section */}
        {showCertifications && (<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Certifications & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (<div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-zion-cyan"/>
                  </div>
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <div className="text-zion-cyan text-sm font-medium mb-1">{cert.status}</div>
                  <div className="text-zion-slate-light text-xs">{cert.year}</div>
                </div>))}
            </div>
          </div>)}

        {/* Customer Testimonials Preview */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>))}
          </div>
          <p className="text-zion-slate-light mb-2">
            "Zion Tech Group has transformed how we source tech talent. The platform's security and reliability give us complete confidence."
          </p>
          <p className="text-white font-medium">- Sarah Chen, CTO at TechCorp</p>
        </div>
      </div>
    </section>);
}
// Compact version for smaller spaces
export function TrustIndicatorsCompact({ className }) {
    return (<div className={`flex flex-wrap justify-center gap-6 ${className || ''}`}>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <Shield className="w-4 h-4"/>
        <span>SOC 2 Certified</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Lock className="w-4 h-4"/>
        <span>GDPR Compliant</span>
      </div>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <Users className="w-4 h-4"/>
        <span>10K+ Verified</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Zap className="w-4 h-4"/>
        <span>99.9% Uptime</span>
      </div>
    </div>);
}
>>>>>>> origin/backup-improvements-20250827-015311
