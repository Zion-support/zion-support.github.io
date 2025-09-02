import { Brain, Cloud, Shield, Code, Database, Network } from &apos;lucide-react';&apos;&apos;

const Categories: React.FC = () => {}
  const;const categories = [
    { name: &apos;AI Services&apos;, icon: Brain, count: 25 },
    { name: &apos;Cloud Solutions&apos;, icon: Cloud, count: 15 },
    { name: &apos;Cybersecurity&apos;, icon: Shield, count: 12 },
    { name: &apos;Development&apos;, icon: Code, count: 18 },
    { name: &apos;Data Analytics&apos;, icon: Database, count: 10 },
    { name: &apos;Infrastructure&apos;, icon: Network, count: 8 }
  ]
  return(&apos;
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'
      <div className=&apos;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16&apos;>&apos;'
        <div className=&apos;text-center mb-12&apos;>&apos;'
          <h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>Service Categories&apos;</h1>
          <p className=&apos;text-xl text-gray-600&apos;>Explore our comprehensive range of technology services&apos;</p>
        </div>
        <div className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-6&apos;>
          {categories.map((category, index) => (&apos;}
            <div key={index} className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow&apos;>&apos;'
              <div className=&apos;flex items-center mb-4&apos;>&apos;'
                <category.icon className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;
                <h2 className=&apos;text-xl font-semibold text-gray-900&apos;>{category.name}&apos;</h2>
              </div>
              <p className=&apos;text-gray-600 mb-4&apos;>
                {category.count} services available in this category&apos;
              </p>
              <a
                href={`/services?category=${category.name.toLowerCase().replace(&apos; &apos;, &apos;-&apos;)}`}
                className=&apos;text-blue-600 hover:text-blue-700 font-medium&apos;>
                View Services →&apos;&apos;
              </a>
            </div>
          ))}
        </div>
      </div>
    <;</div>
  )}
;
export default Categories