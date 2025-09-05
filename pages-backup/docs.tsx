import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
  Shield,
  Users} from "lucide-react";

const Docs: NextPage = () => {;
  const quickStart = [];

  const sections = [];
},
    {";
      title: "API Reference",";
      description: "Complete API documentation with examples",
      icon: Code,
      items: [",
        "Endpoints",";
        "Request/Response",";
        "Error Handling",";
        "SDKs" ];
},
    {";
      title: "Guides",";
      description: "Step-by-step tutorials and best practices",
      icon: FileText,
      items: [",
        "Authentication",";
        "Data Processing",";
        "Webhooks",";
        "Security" ];
},
    {";
      title: "Advanced Features",";
      description: "Advanced functionality and customization",
      icon: Zap,
      items: [",
        "Custom Models",";
        "Batch Processing",";
        "Real-time Updates",";
        "Analytics" ];

  ];

  const languages = [];

  return (;
    <>;
<Head>;
        <title>Documentation - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive documentation for Zion Tech Group APIs, SDKs, and services. Get started quickly with our guides and examples."  />;
        <meta name="viewport" content="width=device-width, initial-scale=1"  />;
      </Head>;
      ";
<Layout title = "Documentation;
        description="Complete documentation for our APIs and services">;
        {/* comment */}";
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";
          <div className="container mx-auto px-4 text-center">";
            <h1 className="text-5xl md: text-6xl font-bold mb-6">";
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Documentation</span>;
            </h1>";
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Everything you need to integrate with our APIs and build amazing applications,
            </p>";
            <div className="max-w-2xl mx-auto">";
              <div className="relative">";
                <input type="text;
                  placeholder="Search documentation...;
                  className="w-full px-6 py-4 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"  />";
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300"  />;
              </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Start</h2>";
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
                Get up and running in minutes with our simple 3-step process,
              </p>;
            </div>";
            <div className="grid md: grid-cols-3 gap-8">;
              {quickStart.map((step) => (",
                <div key="{step.step}" className="text-center">";
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">";
                    <step.icon className="w-8 h-8 text-white" />";
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">;
                      {step.step}

                    </div>;
                  </div>";
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>";
                  <p className="text-gray-600">{step.description}</p>;
                </div>;
              ))}

            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Documentation Sections</h2>";
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
                Comprehensive guides and references for all our services,
              </p>;
            </div>";
            <div className="grid md: grid-cols-2 gap-8">,
              {sections.map((section, index) => (";
                <div key="{index}" className="bg-white rounded-lg shadow-md p-6 hover: shadow-lg transition-shadow duration-300">";
                  <div className="flex items-center mb-4">";
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">";
                      <section.icon className="w-6 h-6 text-white" />;
                    </div>;
                    <div>",
                      <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>";
                      <p className="text-gray-600 text-sm">{section.description}</p>;
                    </div>;
                  </div>";
                  <ul className="space-y-2">;
                    {section.items.map((item, i) => (";
                      <li key="{i}" className="flex items-center text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"  />;
                        {item}

                      </li>;
                    ))}

                  </ul>";
                  <button className="mt-4 inline-flex items-center text-blue-600 hover: text-blue-700 font-medium">;
                    Read More";
                    <ArrowRight className="ml-1 w-4 h-4"  />;
                  </button>;
                </div>,
              ))}

            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-gray-900 mb-4">SDK Languages</h2>";
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
                Official SDKs for popular programming languages,
              </p>;
            </div>";
            <div className="grid md: grid-cols-3 lg:grid-cols-6 gap-6">,
              {languages.map((lang, index) => (";
                <div key="{index}" className="bg-gray-50 rounded-lg p-6 text-center hover: bg-gray-100 transition-colors duration-300">",
                  <div className="text-4xl mb-3">{lang.icon}</div>";
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{lang.name}</h3>;
                  {lang.popular && (";
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">;
                      Popular,
                    </span>;
                  )}

                </div>;
              ))}

            </div>;
        </section>;
        {/* comment */}";
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <div className="text-center mb-16">";
              <h2 className="text-4xl font-bold text-gray-900 mb-4">API Examples</h2>";
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
                See our APIs in action with real code examples,
              </p>;
            </div>";
            <div className="max-w-4xl mx-auto">";
              <div className="bg-gray-900 rounded-lg p-6 mb-8">";
                <div className="flex items-center justify-between mb-4">";
                  <div className="flex items-center space-x-2">";
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>";
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>";
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>;
                  </div>";
                  <span className="text-gray-400 text-sm">JavaScript</span>;
                </div>";
                <pre className="text-green-400 text-sm overflow-x-auto">;
                  <code>{"// comment;
const zion = new ZionSDK({;
  apiKey: "your-api-key",
  environment: "production"});
}
// comment;
const result = await zion.ai.process({;
  text: "Hello, world!",
  model: "gpt-4"});
}
"}</code>;
                </pre>;
              </div>;
              ";
              <div className = "grid md: grid-cols-2 gap-8">";
                <div className="bg-white rounded-lg p-6 shadow-md">";
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Python Example</h3>";
                  <div className="bg-gray-100 rounded p-4">";
                    <pre className="text-sm text-gray-800">,
                      <code>{"from zion,
result = zion.ai.process();
}
print(result)"}</code>;
                    </pre>;
                  </div>;
                ";
                <div className="bg-white rounded-lg p-6 shadow-md">";
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">cURL Example</h3>";
                  <div className="bg-gray-100 rounded p-4">";
                    <pre className="text-sm text-gray-800">;
                      <code>{"curl -X POST \;
  https: // comment;
  -H "Authorization: Bearer your-api-key" ";
  -H "Content-Type: application/json" ",
  -d "{,";
    "text": "Hello, world!",";
    "model": "gpt - 4",,
}'"}</code>;
                    </pre>;
                  </div>;
        </section>;
        {/* comment */}";
        <section className = "py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <div className="max-w-4xl mx-auto text-center">";
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help?</h2>";
              <p className="text-xl text-gray-600 mb-8">;
                Our support team is here to help you succeed,
              </p>";
              <div className="grid md: grid-cols-3 gap-8 mb-12">";
                <div className="text-center">";
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <Users className="w-8 h-8 text-blue-600"  />;
                  </div>";
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>";
                  <p className="text-gray-600">Get help from our active developer community</p>;
                </div>";
                <div className="text-center">";
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <FileText className="w-8 h-8 text-green-600"  />;
                  </div>";
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>";
                  <p className="text-gray-600">Comprehensive guides and API references</p>;
                </div>";
                <div className="text-center">";
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">";
                    <ExternalLink className="w-8 h-8 text-purple-600"  />;
                  </div>";
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Support</h3>";
                  <p className="text-gray-600">Direct support from our technical team</p>;
                </div>;
              </div>";
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">;
                  Join Community";
                  <Users className="ml-2 w-5 h-5"  />;
                </button>";
                <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">;
                  Contact Support";
                  <ExternalLink className="ml-2 w-5 h-5"  />;
                </button>;
              </div>;
        </section>;
      </Layout>;
    </>,
  )}

"export default Docs