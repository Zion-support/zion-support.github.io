import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
  Award,;,
} from "lucide-react";

const EnhancedHome: NextPage = () => {;
  const features = [];

  const services = [];,
},;
    {";
      title: "Cloud Services",";
      description: "Comprehensive cloud infrastructure and management",;
      icon: Cloud,";
      features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Containerization"];,
},;
    {";
      title: "Web Development",";
      description: "Modern, responsive web applications",;
      icon: Code,";
      features: ["React/Next.js", "Node.js", "TypeScript", "Progressive Web Apps"];,
},;
    {";
      title: "Mobile Development",";
      description: "Native and cross-platform mobile solutions",;
      icon: Globe,";
      features: ["iOS/Android", "React Native", "Flutter", "App Store Optimization"];

  ];

  const stats = [];

  return (;
    <>;
<Head>;
        <title>Zion Tech Group - Leading Technology Solutions</title>;
        <meta name="description" content="Transform your business with cutting-edge AI, cloud solutions, and innovative technology services from Zion Tech Group."  />;
        <meta name="viewport" content="width=device-width, initial-scale=1"  />;
      </Head>;
      ";
<Layout title = "Zion Tech Group - Leading Technology Solutions;
        description="Transform your business with cutting-edge AI, cloud solutions, and innovative technology services">;
        {/* comment */}";
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">";
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>";
          <div className="absolute inset-0 bg-black/20"></div>;
          {/* comment */}";
          <div className="absolute inset-0">;
            <motion.div,";
className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl;
              animate="{{";
                x: [0, 100, 0],;
                y: [0, -100, 0],>;,
}}";
              transition = "{{";
                duration: 20,;
                repeat: Infinity,";
                ease: "linear"}}
;
           />;
            <motion.div,";
className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl;
              animate="{{";
                x: [0, -100, 0],;
                y: [0, 100, 0],>;,
}}";
              transition = "{{";
                duration: 25,;
                repeat: Infinity,";
                ease: "linear"}}
;
           />;
          </div>;
";
          <div className="relative z-10 container mx-auto px-4 text-center text-white">;
            <motion.div,";
initial="{{" opacity: 0, y: 30 }}";
              animate="{{" opacity: 1, y: 0 }}";
              transition="{{" duration: 0.8 }}
;
            >";
              <h1 className="text-6xl md: text-8xl font-bold mb-6">";
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">;
                  Zion Tech Group,;
                </span>;
              </h1>";
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">,;
                Transform your business with cutting-edge AI, cloud solutions, and innovative technology services,;
              </p>";
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,;
                <motion.button,";
whileHover="{{" scale: 1.05 }}";
                  whileTap="{{" scale: 0.95 }}";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover: shadow-lg hover:shadow-blue-500/25 transition-all duration-300">;
                  Get Started";
                  <ArrowRight className="ml-2 w-5 h-5"  />;
                </motion.button>,;
                <motion.button,";
whileHover="{{" scale: 1.05 }}";
                  whileTap="{{" scale: 0.95 }}";
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover: bg-white/10 transition-all duration-300">;
                  Learn More,;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
,;
        {/* comment */}";
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>";
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
                We deliver exceptional results through innovation, expertise, and cutting-edge technology,;
              </p>;
            </div>";
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,;
              {features.map((feature, index) => (;
                <motion.div,";
key="{index}
                  initial="{{" opacity: 0, y: 30 }}";
                  whileInView="{{" opacity: 1, y: 0 }}";
                  transition="{{" duration: 0.6, delay: index * 0.1 }}";
                  viewport="{{" once: true }}";
                  className="{"text-center" group">";
                  <div className="{"w-20" h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"}>";
                    <feature.icon className=""w-10" h-10 text-white"} />;
                  </div>";
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>";
                  <p className="text-gray-600">{feature.description}</p>;
                </motion.div>;
              ))}
;
            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>";
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
                Comprehensive technology solutions to drive your business forward,;
              </p>;
            </div>";
            <div className="grid md: grid-cols-2 gap-8">,;
              {services.map((service, index) => (;
                <motion.div,";
key="{index}
                  initial="{{" opacity: 0, x: index % 2 === 0 ? -30 : 30 }}";
                  whileInView="{{" opacity: 1, x: 0 }}";
                  transition="{{" duration: 0.6 }}";
                  viewport="{{" once: true }}";
                  className="bg-white rounded-xl p-8 shadow-lg hover: shadow-xl transition-shadow duration-300">";
                  <div className="flex items-center mb-6">";
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">";
                      <service.icon className="w-8 h-8 text-white" />;
                    </div>;
                    <div>",;
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>";
                      <p className="text-gray-600">{service.description}</p>;
                    </div>;
                  </div>";
                  <ul className="space-y-2">;
                    {service.features.map((feature, i) => (";
                      <li key="{i}" className="flex items-center text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"  />;
                        {feature}
;
                      </li>;
                    ))}
;
                  </ul>;
                </motion.div>;
              ))}
;
            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>";
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">;
                Numbers that speak to our success and commitment to excellence,;
              </p>;
            </div>";
            <div className="grid md: grid-cols-4 gap-8">,;
              {stats.map((stat, index) => (;
                <motion.div,";
key="{index}
                  initial="{{" opacity: 0, scale: 0.5 }}";
                  whileInView="{{" opacity: 1, scale: 1 }}";
                  transition="{{" duration: 0.6, delay: index * 0.1 }}";
                  viewport="{{" once: true }}";
                  className="text-center">";
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>";
                  <div className="text-gray-200">{stat.label}</div>;
                </motion.div>;
              ))}
;
            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4 text-center">;
            <motion.div,";
initial="{{" opacity: 0, y: 30 }}";
              whileInView="{{" opacity: 1, y: 0 }}";
              transition="{{" duration: 0.8 }}";
              viewport="{{" once: true }}
;
            >";
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>";
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">";
                Let's work together to build innovative solutions that drive your success,;
              </p>";
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,;
                <motion.button,";
whileHover="{{" scale: 1.05 }}";
                  whileTap="{{" scale: 0.95 }}";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover: shadow-lg hover:shadow-blue-500/25 transition-all duration-300">;
                  Start Your Project";
                  <ArrowRight className="ml-2 w-5 h-5"  />;
                </motion.button>,;
                <motion.button,";
whileHover="{{" scale: 1.05 }}";
                  whileTap="{{" scale: 0.95 }}";
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover: bg-gray-50 transition-all duration-300">;
                  View Portfolio,;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>;
  )}
;
"export default EnhancedHome