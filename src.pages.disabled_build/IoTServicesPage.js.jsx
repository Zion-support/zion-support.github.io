import { Link } from "react - router - dom";"""
import React from "react";
import {}
  Card,
  CardContent,"
  CardDescription,""
  CardHeader,"""
  CardTitle} from "../components/ui/card";"""
import { Button } from "../components/ui/button";"""
import { Badge } from "../components/ui/badge";"""
import { Link } from "react-router-dom";
import {}
  Settings,
  BarChart3,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap as Cpu,"
  Cloud,""
  Smartphone,"""
  TrendingUp as Activity} from "lucide-react";"""
import { TrustedBySection } from "../components/TrustedBySection.js.jsx";
const iotUseCases = []
  {}
"
""
"""
    title: "Smart Manufacturing","""
    description:""""
      "Monitor production lines, predict maintenance needs, and optimize manufacturing processes",
    icon: <Cpu className="h-6 w-6"   />},
  {}
"
    title: "Smart Cities","
    description:"""""
      "Manage traffic, utilities, and public services with connected IoT infrastructure",""""
    icon: <Globe className="h-6 w-6"   />},
  {}
"
    title: "Connected Healthcare","
    description:"""""
      "Remote patient monitoring, medical device management, and healthcare analytics",""""
    icon: <Activity className="h-6 w-6"   />},
  {}
"
    title: "Smart Agriculture","
    description:"""""
      "Precision farming, environmental monitoring, and automated irrigation systems",""""
    icon: <Settings className="h-6 w-6"   />}
];
export default function IoTServicesPage() {}
"""
  return (""""
    <div className="min-h-screen bg-background">"""
      {/* comment */}""""
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">""""
        <div className="container mx-auto px-4 text-center">""""
          <div className="max-w-4xl mx-auto">""""
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"""
              IoT Solutions for the""""
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
                Connected World;
              </span>"""
            </h1>""""
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Connect, monitor, and optimize your business with cutting-edge IoT;
              technology. From device management to advanced analytics, we;
              deliver comprehensive IoT solutions that drive innovation and;
              efficiency."""
            </p>""""
            <div className="flex flex-wrap justify-center gap-4">""""
              <Link href="/request-quote">""""
                <Button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Start IoT Project;
                </Button>"""
              </Link>""""
              <Link href="/contact">""""
                <Button className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Schedule Demo;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-16 bg-zion-blue">""""
        <div className="container mx-auto px-4">""""
          <div className="text-center mb-12">""""
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose IoT Solutions?"""
            </h2>""""
            <p className="text-zion-slate-light text-lg">
              Leverage the power of connected devices to transform your business;
              operations;
            </p>"""
          </div>""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"""
            {iotBenefits.map((benefit, index) => (""""
              <div key={index} className="text-center p-6">""""
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan rounded-full mb-4">""""
                  <div className="text-white">{benefit.icon}</div>"""
                </div>""""
                <h3 className="text-white text-xl font-semibold mb-2">
                  {benefit.title}"""
                </h3>""""
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-16 bg-zion-blue-dark">""""
        <div className="container mx-auto px-4">""""
          <div className="text-center mb-12">""""
            <h2 className="text-3xl font-bold text-white mb-4">
              IoT Use Cases"""
            </h2>""""
            <p className="text-zion-slate-light text-lg">
              Discover how IoT technology can transform your industry;
            </p>"""
          </div>""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iotUseCases.map((useCase, index) => (
              <div"""
                key={index}""""
                className="text-center p-6 border border-zion-blue-light rounded-lg""""
              >""""
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-purple rounded-full mb-4">""""
                  <div className="text-white">{useCase.icon}</div>"""
                </div>""""
                <h3 className="text-white text-xl font-semibold mb-2">
                  {useCase.title}"""
                </h3>""""
                <p className="text-zion-slate-light">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-16">""""
        <div className="container mx-auto px-4">""""
          <div className="text-center mb-12">""""
            <h2 className="text-3xl font-bold mb-4">
              Our IoT Service Portfolio"""
            </h2>""""
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of IoT solutions designed to;
              address your specific business needs;
            </p>"""
          </div>""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iotServices.map(service => (
              <Card"""
                key={service.id}""""
                className="overflow-hidden hover:shadow-lg transition-all duration-300""""
              >""""
                <div className="aspect-video overflow-hidden">
                  <img;
                    src={service.image}"""
                    alt={service.title}""""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300""" />"""
                </div>""""
                <CardHeader className="pb-3">""""
                  <div className="flex justify-between items-start mb-2">"""
                    <Badge""""
                      variant="secondary""""
                      className="bg-zion-purple/20 text-zion-purple"""
                    >
                      {service.category}
                    </Badge>
                    {service.badge && ("""
                      <Badge""""
                        variant="outline""""
                        className="border-zion-cyan text-zion-cyan"""
                      >
                        {service.badge}
                      </Badge>
                    )}"""
                  </div>""""
                  <div className="flex items-center gap-3 mb-3">""""
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {service.icon}"""
                    </div>""""
                    <CardTitle className="text-xl">{service.title}</CardTitle>"""
                  </div>""""
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>"""
                </CardHeader>""""
                <CardContent className="pb-4">""""
                  <div className="mb-4">""""
                    <span className="text-3xl font-bold text-zion-purple">
                      {service.currency}
                      {service.price}"""
                    </span>""""
                    <span className="text-muted-foreground">
                      {service.period}
                    </span>"""
                  </div>""""
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li"""
                        key={index}""""
                        className="flex items-center gap-2 text-sm""""
                      >""""
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0"   />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>"""
                </CardContent>""""
                <CardContent className="pt-0">""""
                  <Button asChild className="w-full">
                    <Link href={service.link}>"""
                      Learn More""""
                      <ArrowRight className="h-4 w-4 ml-2"   />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-16 bg-zion-blue">""""
        <div className="container mx-auto px-4 text-center">""""
          <div className="max-w-3xl mx-auto">""""
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Connect Your World with IoT?"""
            </h2>""""
            <p className="text-zion-slate-light text-lg mb-8">
              Join the IoT revolution and transform your business with connected;
              technology"""
            </p>""""
            <div className="flex flex-wrap justify-center gap-4">""""
              <Link href="/request-quote">""""
                <Button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3">
                  Get IoT Quote;
                </Button>"""
              </Link>""""
              <Link href="/contact">""""
                <Button className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                  Contact IoT Experts;
                </Button>
              </Link>"""
            </div>""""
            <div className="mt-8 text-zion-slate-light">
              <p>
                📞 <strong>Mobile:</strong> +1 302 464 0950;
              </p>
              <p>
                📧 <strong>Email:</strong> kleber@ziontechgroup.com;
              </p>
              <p>
                📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown;
                DE 19709;
              </p>
            </div>
          </div>
        </div>
      </section>
      <TrustedBySection  />
    </div>)}


export { IoTServicesPage };
export { IoTServicesPage };
export { IoTServicesPage };
export { IoTServicesPage };
export { IoTServicesPage };