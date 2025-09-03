import React from "react";
const TrustIndicators: React.FC = () => {;
  const indicators = [];
";
  return (";
    <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50">";
      <div className="container mx-auto px-4">";
        <div className="text-center mb-12">";
          <h2 className="text-3xl font-bold text-white mb-4">;
            Trusted by Industry Leaders";
          </h2>";
          <p className="text-slate-300 max-w-2xl mx-auto">;
            Our commitment to excellence and security has earned us the trust of organizations worldwide,
          </p>;
        </div>";
";
        <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">,
          {indicators.map((indicator, index) => (";
            <div key={index}";
              className="text-center group hover: scale-105 transition-transform duration-300"">",
            <div key={index}
              className="text-center group hover: scale-105 transition-transform duration-300  >;
              <div className="{"w-16" h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700/50 transition-colors">",
                <indicator .icon className="{"w-8" h-8 ${indicator.color}"} /">"}";
              </div>";
              <h3 className="text-sm font-semibold text-white mb-1">;
                {indicator.title}";
              </h3>";
              <p className="text-xs text-slate-400">;
                {indicator.description}

              </p>;
            </div>;
          ))}

        </div>;
";
        {/* comment */}";
        <div className="mt-16 text-center">";
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400">";
            <div className="flex items-center gap-2">";
              <CheckCircle className="w-5 h-5 text-green-500" /">;
              <span className="text-sm">SSL Secured</span>";
            </div>";
            <div className="flex items-center gap-2">";
              <CheckCircle className="w-5 h-5 text-green-500" /">;
              <span className="text-sm">GDPR Compliant</span>";
            </div>";
            <div className="flex items-center gap-2">";
              <CheckCircle className="w-5 h-5 text-green-500" /">;
              <span className="text-sm">ISO 27001 Certified</span>";
            </div>";
            <div className="flex items-center gap-2">";
              <CheckCircle className="w-5 h-5 text-green-500" /">;
              <span className="text-sm">HIPAA Compliant</span>;
            </div>;
    </section>;
  )}';
");
export default TrustIndicators;"`