<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import { CheckCircle, Star, ArrowRight, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
interface FuturisticServiceCardProps;
  title: string;
  description: string;
  icon: React.ComponentType<any>;</any>
  features: string[];
  benefits: string[];
  pricing?: string;
  category: "AI" | "IT" | "MicroSAAS" | "Emerging";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface FuturisticServiceCardProps ,
    title: string;,
    description: string;,
    icon: React.ComponentType<any>;</any>,
    features: string[];,
    benefits: string[];
  pricing?: string;,
    category: "AI" | "IT" | "MicroSAAS" | "Emerging";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

<<<<<<< HEAD
interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticServiceCard({ className = '', children }: FuturisticServiceCardProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
=======
<<<<<<< HEAD
const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = (
  title,
  description,
    icon: Icon,
  features,
  benefits,
  pricing,
  category,
) => 
  const categoryColors = ,
    AI: "from-purple-500 to-pink-600",
      IT: "from-blue-500 to-cyan-600",
      MicroSAAS: "from-green-500 to-emerald-600",
      Emerging: "from-orange-500 to-red-600",
;
=======
const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
//   title,
//   description,
//   icon: Icon,
//   features,
//   benefits,
//   pricing,
//   category,
}) => {
  const categoryColors = {
//     AI: "from-purple-500 to-pink-600",
//     IT: "from-blue-500 to-cyan-600",
//     MicroSAAS: "from-green-500 to-emerald-600",
//     Emerging: "from-orange-500 to-red-600",
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  const categoryColor =
    categoryColors[category] || "from-cyan-500 to-purple-600";
  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    <>
      <Helmet></Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content="{description}" />
<<<<<<< HEAD
        <meta;
          name="keywords"
          content="{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`}
=======
        <meta>
  name="keywords">
  content="{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></main>
          {/* Hero Section */}
          <section className="text-center py-16"></section>
            <div className="flex justify-center mb-8"></div>
<<<<<<< HEAD
              <div;
                className="{`p-4" rounded-full bg-gradient-to-r ${categoryColor} shadow-lg`}
=======
              <div>
  className="{`p-4" rounded-full bg-gradient-to-r ${categoryColor} shadow-lg`}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
=======
//     <>
//       <Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta name="description" content={description} />
//         <meta
          name="keywords"
          content={`${title.toLowerCase()}, AI solutions, IT services, ${category.toLowerCase()}`}
//         />
//       </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center py-16">
            <div className="flex justify-center mb-8">
//               <div
                className={`p-4 rounded-full bg-gradient-to-r ${categoryColor} shadow-lg`}
//               >
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                <Icon className="w-12 h-12 text-white" />
<<<<<<< HEAD
  </div>
  </div>
=======
</div>
</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              {description}
<<<<<<< HEAD
            </p>
            
              <div className="text-2xl font-semibold text-cyan-400 mb-8"></div>
                Starting at {pricing}
  </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<<<<<<< HEAD
<<<<<<< HEAD
              <a;
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
=======
              <a>
  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105">
  href="/contact"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                Get Started Today;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
<<<<<<< HEAD
              <a;
=======
              <a
=======
</p>
            {pricing && (
              <div className="text-2xl font-semibold text-cyan-400 mb-8">
                Starting at {pricing}
</div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
//               >
//                 Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
</a>
//               <a
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                href="tel:+13024640950"
//               >
=======
              <a>
  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group">
  href="tel:+13024640950"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                <Phone className="w-5 h-5 mr-2" />
<<<<<<< HEAD
                Call (302) 464-0950;
=======
                Call (302) 464-0950
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              </a>
  </div>
          </section>
          {/* Features Section */}
          <section className="py-16"></section>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                Key Features;
              </h2>
              <p className="text-lg text-gray-300"></p>
                Comprehensive {title.toLowerCase()} solutions designed to drive;
                your business forward;
              </p>
  </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              
<<<<<<< HEAD
                <div;
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
=======
                <div>
  key={index}>
  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                >
                  <div className="flex items-center mb-4"></div>
=======
</a>
</div>
//           </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
//                 Key Features
</h2>
              <p className="text-lg text-gray-300">
                Comprehensive {title.toLowerCase()} solutions designed to drive
                your business forward
</p>
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
//                 <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
//                 >
                  <div className="flex items-center mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white"></h3>
                      {feature}
<<<<<<< HEAD
                    </h3>
  </div>
  </div>  </div>
          </section>
=======
</h3>
</div>
</div>
              ))}
</div>
//           </section>

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
          {/* Benefits Section */}
          <section className="py-16"></section>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                Why Choose Our {title}?
<<<<<<< HEAD
              </h2>
              <p className="text-lg text-gray-300"></p>
                Experience the difference with our proven expertise and;
                cutting-edge technology;
              </p>
  </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              
                <div key="{index}" className="flex items-start space-x-4"></div>
                  <div className="flex-shrink-0"></div>
                    <Star className="w-6 h-6 text-yellow-400" />
  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-2"></h3>
                      {benefit}
                    </h3>
                    <p className="text-gray-300"></p>
                      Leverage our expertise to maximize your business potential;
                      with {title.toLowerCase()}
                    </p>
  </div>
  </div>  </div>
          </section>
          {/* Stats Section */}
          <section className="py-16"></section>
            <div className="text-center mb-12"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>
                    500+
  </div>
                  <div className="text-gray-300">Happy Clients</div>
  </div>
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>
                    99%
  </div>
                  <div className="text-gray-300">Success Rate</div>
  </div>
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>
                    24/7;
  </div>
                  <div className="text-gray-300">Support</div>
  </div>
                <div className="text-center"></div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2"></div>
                    10+
  </div>
                  <div className="text-gray-300">Years Experience</div>
  </div>
  </div>
  </div>
          </section>
          {/* CTA Section */}
          <section className="py-16 text-center"></section>
            <h2 className="text-3xl font-bold text-white mb-4"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Join hundreds of companies that trust Zion Tech Group for their{" "}
              {title.toLowerCase()} needs. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
<<<<<<< HEAD
<<<<<<< HEAD
              <a;
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
=======
              <a>
  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105">
  href="/contact"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
              >
                Get Free Consultation;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
<<<<<<< HEAD
              <a;
=======
              <a
=======
</h2>
              <p className="text-lg text-gray-300">
                Experience the difference with our proven expertise and
//                 cutting-edge technology
</p>
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-400" />
</div>
//                   <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit}
</h3>
                    <p className="text-gray-300">
//                       Leverage our expertise to maximize your business potential
                      with {title.toLowerCase()}
</p>
</div>
</div>
              ))}
</div>
//           </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
//                     500+
</div>
                  <div className="text-gray-300">Happy Clients</div>
</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
//                     99%
</div>
                  <div className="text-gray-300">Success Rate</div>
</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
//                     24/7
</div>
                  <div className="text-gray-300">Support</div>
</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
//                     10+
</div>
                  <div className="text-gray-300">Years Experience</div>
</div>
</div>
</div>
//           </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
//               Ready to Get Started?
</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their{" "}
              {title.toLowerCase()} needs. Get a free consultation today.
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                href="/contact"
//               >
//                 Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
</a>
//               <a
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                href="mailto:kleber@ziontechgroup.com"
//               >
=======
              <a>
  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group">
  href="mailto:kleber@ziontechgroup.com"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                <Mail className="w-5 h-5 mr-2" />
<<<<<<< HEAD
                Email Us;
              </a>
  </div>
          </section>
        </main>
  </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
//                 Email Us
</a>
</div>
//           </section>
//         </main>
</div>
//     </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}