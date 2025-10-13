import React from 'react';
import React from "react"react-helmet-async";
import { ArrowRight, Phone, Mail, CheckCircle, Star } from ";
interface GenericServicePageProps;
  title: string;
  description: string;
  icon: React.ComponentType<any>;</any>
  features: string[];
  benefits: string[];
  pricing?: string;
  category: "AI"IT" | " | "Emerging"AI" | " | "MicroSAAS"Emerging";

interface GenericServicePageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GenericServicePage({ className = '', children }: GenericServicePageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
const GenericServicePage: React.FC<GenericServicePageProps> = (
  title,
  description,
    icon: Icon,
  features,
  benefits,
  pricing,
  category,
) =>
  const categoryColors = ,
    AI: ",
      IT: "from-blue-500 to-cyan-600"from-green-500 to-emerald-600",
      Emerging: ",
;
const GenericServicePage: React.FC<GenericServicePageProps> = ({
//   title,
//   description,
//   icon: Icon,
//   features,
//   benefits,
//   pricing,
//   category,
}) => {
  const categoryColors = {
//     AI: "from-purple-500 to-pink-600"from-blue-500 to-cyan-600",
//     MicroSAAS: ",
//     Emerging: "from-orange-500 to-red-600"from-cyan-500 to-purple-600";
  return (
    <>
      <Helmet></Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name=" content="{description}"keywords"
          content=" AI solutions, IT services, ${category.toLowerCase()}`}
        <meta>
  name="keywords"{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`}
        />
      </Helmet>
      <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></main>
          {/* Hero Section */}
          <section className="flex justify-center mb-8"></div>
              <div;
                className="{`p-4" rounded-full bg-gradient-to-r ${categoryColor} shadow-lg`}
              >
//     <>
//       <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name=" content={description} />
//         <meta
          name="keywords"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"text-center py-16"flex justify-center mb-8"w-12 h-12 text-white"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"text-2 xl font-semibold text-cyan-400 mb-8"flex flex-col sm:flex-row gap-4 justify-center"px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"/contact"
              <a>
  className="/contact"
              >
                Get Started Today;
                <ArrowRight className="text-2 xl font-semibold text-cyan-400 mb-8">
                Starting at {pricing}
</div>
            )}
            <div className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="
//               >
//                 Get Started Today
                <ArrowRight className="w-5 h-5 ml-2"
                href="tel:+13024640950"px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"tel:+13024640950"w-5 h-5 mr-2"py-16"text-center mb-12"text-3 xl font-bold text-white mb-4"text-lg text-gray-300"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"flex items-center mb-4"py-16"text-center mb-12"text-3 xl font-bold text-white mb-4"text-lg text-gray-300"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"flex items-center mb-4"w-6 h-6 text-cyan-400 mr-3"text-lg font-semibold text-white"py-16"text-center mb-12"text-3 xl font-bold text-white mb-4"text-lg text-gray-300"grid grid-cols-1 md:grid-cols-2 gap-8"{index}"flex items-start space-x-4"flex-shrink-0"w-6 h-6 text-yellow-400"text-lg font-semibold text-white mb-2"text-gray-300"py-16"text-center mb-12"grid grid-cols-2 md:grid-cols-4 gap-8"text-center"text-4 xl font-bold text-cyan-400 mb-2"text-gray-300"text-center"text-4 xl font-bold text-cyan-400 mb-2"text-gray-300"text-center"text-4 xl font-bold text-cyan-400 mb-2"text-gray-300"text-center"text-4 xl font-bold text-cyan-400 mb-2"text-gray-300"py-16 text-center"text-3 xl font-bold text-white mb-4"text-lg text-gray-300 mb-8 max-w-2 xl mx-auto" "flex flex-col sm:flex-row gap-4 justify-center"px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"/contact"
              <a>
  className="/contact"
              >
                Get Free Consultation;
                <ArrowRight className="text-lg text-gray-300">
                Experience the difference with our proven expertise and
//                 cutting-edge technology
</p>
</div>
            <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 text-yellow-400" />
</div>
//                   <div>
                    <h3 className="text-gray-300">
//                       Leverage our expertise to maximize your business potential
                      with {title.toLowerCase()}
</p>
</div>
</div>
              ))}
</div>
//           </section>

          {/* Stats Section */}
          <section className="text-center mb-12">
              <div className="text-center">
                  <div className="text-gray-300">Happy Clients</div>
</div>
                <div className="text-4 xl font-bold text-cyan-400 mb-2">
//                     99%
</div>
                  <div className="text-center">
                  <div className="text-gray-300">Support</div>
</div>
                <div className="text-4 xl font-bold text-cyan-400 mb-2">
//                     10+
</div>
                  <div className="py-16 text-center">
            <h2 className="text-lg text-gray-300 mb-8 max-w-2 xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their{"}
              {title.toLowerCase()} needs. Get a free consultation today.
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"
                href="/contact"w-5 h-5 ml-2"px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"mailto:kleber@ziontechgroup.com"
//               >
              <a>
  className="mailto:kleber@ziontechgroup.com"
              >
                <Mail className=" />
                Email Us;
              </a>
  </div>
          </section>
        </main>
  </div>
    </>
//                 Email Us
</a>
</div>
//           </section>
//         </main>
</div>
//     </>
  );
}
);
