import React, { useState } from 'react';
import Head from 'next/head';
;
const Examples: React.FC = () => {};
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },;
    { id: 'python', name: 'Python', icon: '🐍' },;
    { id: 'curl', name: 'cURL', icon: '📡' },;
    { id: 'php', name: 'PHP', icon: '🐘' },;
    { id: 'java', name: 'Java', icon: '☕' },;
  ];
;
  const examples = {};
}
});

const services = await response.json();
console.log(services);`;,
},;
      {};
};
;
const response = await fetch('https://api.zion.ai/projects', {};
},;
  body: JSON.stringify(projectData);,
});
;
const project = await response.json();
console.log('Project created:', project);`;,
},;
      {};
});
;
const response = await fetch(\`https://api.zion.ai/talents?\${searchParams}\`, {};
}
});
;
const talents = await response.json();
console.log('Found talents:', talents);`}
    ],;
    python: [;
      {};
}
;
response = requests.get('https://api.zion.ai/services', headers=headers);
services = response.json();
print(services)`;,
},;
      {};
}
;
headers = {};
}
;
response = requests.post(;
    'https://api.zion.ai/projects',;
    json=project_data,;
    headers=headers;
);

project = response.json();
print('Project created:', project)`;,
},;
      {};
}
;
headers = {};
}
;
response = requests.get(;
    'https://api.zion.ai/talents',;
    params=params,;
    headers=headers;
);

talents = response.json();
print('Found talents:', talents)`}
    ],;
    curl: [;
      {};
},;
      {};
}'`;,
},;
      {};
}
    ],;
    php: [;
      {};
},;
      {};
}
    ],;
    java: [;
      {};
},;
      {};
String projectData = "{\\"name\\":\\"AI Chatbot Integration\\",\\"description\\":\\"Integrate AI chatbot into our website\\",\\"budget\\":5000,\\"timeline\\":\\"2 weeks\\"}";

HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder();
    .uri(URI.create("https://api.zion.ai/projects"));
    .header("Authorization", "Bearer YOUR_API_KEY");
    .header("Content-Type", "application/json");
    .POST(HttpRequest.BodyPublishers.ofString(projectData));
    .build();

HttpResponse<String> response = client.send(request, ;
    HttpResponse.BodyHandlers.ofString());
System.out.println("Project created: " + response.body());`}
    ]}
  return (;
    <>;
      <Head>;
        <title>Code Examples - Zion AI Marketplace</title>;
        <meta name="description" content="Code examples and integration samples for Zion AI Marketplace API" />;
        <meta name="keywords" content="code examples, API, integration, Zion AI, marketplace" />;
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">;
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">;
          <div className="container mx-auto px-6 py-8">;
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
              Code Examples;
            </h1>;
            <p className="text-xl text-gray-300 mt-4">;
              Ready-to-use code examples for integrating with Zion AI Marketplace;
            </p>;
          </div>;
        </header>;

        {/* Language Selector */}
        <section className="container mx-auto px-6 py-8">;
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">;
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Choose Your Language</h2>;
            <div className="flex flex-wrap gap-3">;
              {};
                  onClick={() => setActiveLanguage(language.id)}
                  className={};
}`}
                >;
                  <span className="mr-2">{language.icon}</span>;
                  {language.name}
                </button>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Examples */}
        <main className="container mx-auto px-6 py-12">;
          <h2 className="text-3xl font-bold text-blue-400 mb-8">;
            {languages.find(l => l.id === activeLanguage)?.name} Examples;
          </h2>;

          <div className="space-y-8">;
            {};
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">;
                <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>;
                <p className="text-gray-300 mb-4">{example.description}</p>;

                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">;
                  <pre className="text-sm text-green-400">;
                    <code>{example.code}</code>;
                  </pre>;
                </div>;

                <div className="mt-4 flex gap-3">;
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">;
                    Copy Code;
                  </button>;
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">;
                    Run Example;
                  </button>;
                </div>;
              </div>;
            ))}
          </div>;
        </main>;

        {/* Integration Guide */}
        <section className="container mx-auto px-6 py-16">;
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Ready to Integrate?</h2>;
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">;
            <h3 className="text-2xl font-bold text-white mb-4">Get Your API Key</h3>;
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">;
              Start building with our API today. Get your free API key and access to all our AI services.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                Get API Key;
              </button>;
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                View Documentation;
              </button>;
            </div>;
          </div>;
        </section>;

        {/* Additional Resources */}
        <section className="container mx-auto px-6 py-16">;
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Additional Resources</h2>;
          <div className="grid md:grid-cols-3 gap-6">;
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">;
              <div className="text-4xl mb-4">📚</div>;
              <h3 className="text-xl font-semibold text-white mb-4">Full Documentation</h3>;
              <p className="text-gray-300 text-sm mb-4">;
                Complete API reference with all endpoints and parameters;
              </p>;
              <a href="/api-documentation" className="text-blue-400 hover:text-blue-300 text-sm font-medium">;
                View Docs →;
              </a>;
            </div>;

            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">;
              <div className="text-4xl mb-4">🎓</div>;
              <h3 className="text-xl font-semibold text-white mb-4">Tutorials</h3>;
              <p className="text-gray-300 text-sm mb-4">;
                Step-by-step guides for common integration scenarios;
              </p>;
              <a href="/guides" className="text-blue-400 hover:text-blue-300 text-sm font-medium">;
                View Tutorials →;
              </a>;
            </div>;

            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30 text-center">;
              <div className="text-4xl mb-4">💬</div>;
              <h3 className="text-xl font-semibold text-white mb-4">Support</h3>;
              <p className="text-gray-300 text-sm mb-4">;
                Get help from our developer support team;
              </p>;
              <a href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-medium">;
                Contact Support →;
              </a>;
            </div>;
          </div>;
        </section>;

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">;
          <div className="container mx-auto px-6 py-8">;
            <div className="text-center text-gray-400">;
              <p>Need help with integration? Check our comprehensive documentation</p>;
              <p className="mt-2">;
                <a href="/api-documentation" className="text-blue-400 hover:text-blue-300">;
                  View API Docs →;
                </a>;
              </p>;
            </div>;
          </div>;
        </footer>;
      </div>;
    </>;
  )}
export default Examples;