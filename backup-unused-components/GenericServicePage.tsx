import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone, Mail, CheckCircle, Star } from "lucide-react";
interface GenericServicePageProps 
  title: string;
  description: string;
  icon: React.ComponentType<any>;</any>
  features: string[];
  benefits: string[];
  pricing?: string;
  category: "AI" | "IT" | "MicroSAAS" | "Emerging";

  const categoryColor =
    categoryColors[category] || "from-cyan-500 to-purple-600";
  return (
                <Icon className="w-12 h-12 text-white" />
</div>
</div>
            <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              {description}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
//               >
//                 Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
</a>
//               <a
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                href="tel:+13024640950"
//               >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white"></h3>
                      {feature}
          {/* Benefits Section */}
          <section className="py-16"></section>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                Why Choose Our {title}?
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
//               >
//                 Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
</a>
//               <a
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                href="mailto:kleber@ziontechgroup.com"
//               >
                <Mail className="w-5 h-5 mr-2" />
//                 Email Us
</a>
</div>
//           </section>
//         </main>
</div>
//     </>
  );
;
export default GenericServicePage;
</GenericServicePageProps>
</any>