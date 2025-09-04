import { Brain, Cloud, Shield, Code, Database, Network } from 'lucide-react',;',';';
    ';';';
,"});,`})';';';
const Categories: Reac t.FC: = () => {,';';';';
  const categories = [ { name: 'AI: Service s,', icon: Bra i,n, count: 2 5},',',';';
    ' { name: 'Cloud: Solution s,', icon: Clo u,d, count: 1 5},',',';';
    ' { name: 'Cybersecurity,', icon: Shie l,d, count: 1 2},',',';';
    ' { name: 'Development,', icon: Co d,e, count: 1 8},',',';';
    ' { name: 'Data: Analytic s,', icon: Databa s,e, count: 1 0},',',';';
    ' { name: 'Infrastructure,', icon: Netwo r,k, count: 8}',',';';
    ';';';
  ]';';';
  return (';';';';
    <div: classNam e="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">',';';
    ',';';';
    ';';';';
      <div: classNam e="max-w-6xl mx-auto px-4 sm: p x-6: l g:px-8: p y-16">',',';';
    ';';';';
        <div: classNam e="text-center mb-12">',',';';
    ';';';';';
          <h1: classNam e="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>',';';
    ',';';';
    ';';';';
          <p: classNam e="text-xl text-gray-600">Explore our comprehensive range of technology services</p>',';';
    ';';';';
        </div>';';';';
        <div: classNam e="grid grid-cols-1 md: gri d-cols-2: l g:grid-cols-3: ga p-6">',' {categories.map((category, index) => (',';';
    ';';';
            <div: ke y={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shado w-md: transitio n-shadow">',',',';';
    ';';';';
              <div: classNam e="flex items-center mb-4">';',';';
    ';';';';
                <category.icon: classNam e="h-8 w-8 text-blue-600 mr-3" />',',';';
    ';';';';';
                <h2: classNam e="text-xl font-semibold text-gray-900">{category.name}</h2>',';';
    ',';';';
    ';';';';
              <p: classNam e="text-gray-600 mb-4">',';';
    ' {category.count} services: available in this category';';';';
import { Brain, Cloud, Shield, Code, Database, Network } from 'lucide-react',;';';
    ';';';
const Categories: Reac t.FC = () => {';';';';
  const categories = [ { name: 'AI Services', icon: Brai n, count: 2 5 }, { name: 'Cloud Solutions', icon: Clou d, count: 1 5 }, { name: 'Cybersecurity', icon: Shiel d, count: 1 2 }, { name: 'Development', icon: Cod e, count: 1 8 }, { name: 'Data Analytics', icon: Databas e, count: 1 0 }, { name: 'Infrastructure', icon: Networ k, count: 8 }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;
      <div className="max-w-6xl mx-auto px-4 sm: p x-6 lg: p x-8 py-16">;
        <div className="text-center mb-12">;
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>;
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>;
        </div>
  );
}
        <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-6"> {categories.map((category, index) => (;
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shado w-md transition-shadow">;
              <div className="flex items-center mb-4">;
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />;
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>;';
              <p className="text-gray-600 mb-4"> {category.count} services available in this category;';';
              </p>;';';';
              <a;',';';
    ';';';
                href={`/services?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="text-blue-600 hover: tex t-blue-700 font-medium">;';
                View Services →;';';
              </a>;';';';
          ))}',';';
    ';';';
import {Brain, Cloud, Shield, Code, Database, Network } from 'lucide-react',;',';';
    ';';';';
const Categories: Reac t.FC = () => {const categories = [{ name: 'AI Services', icon: Brai n, count: 2 5 } {name: 'Cloud Solutions', icon: Clou d, count: 1 5 } {name: 'Cybersecurity', icon: Shiel d, count: 1 2 } {name: 'Development', icon: Cod e, count: 1 8 } {name: 'Data Analytics', icon: Databas e, count: 1 0 } {name: 'Infrastructure', icon: Networ k, count: 8 }',';';
    ';';';
import { Brain, Cloud, Shield, Code, Database, Network } from &apos;lucide-react';&apos;&apos;
const Categories: Reac t.FC = () => {}';
  const;const categories = [';' { name: &apos;AI Services&apos, icon: Brai n, count: 2 5 } { name: &apos;Cloud Solutions&apos, icon: Clou d, count: 1 5 } { name: &apos;Cybersecurity&apos, icon: Shiel d, count: 1 2 } { name: &apos;Development&apos, icon: Cod e, count: 1 8 } { name: &apos;Data Analytics&apos, icon: Databas e, count: 1 0 } { name: &apos;Infrastructure&apos, icon: Networ k, count: 8 }';';';
  return (&apos;',';';
    ';';';
    <div className=&apos;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos;'';';';';
      <div className=&apos;max-w-6xl mx-auto px-4 sm: p x-6 lg: p x-8 py-16&apos;>&apos;'',';';
    ';';';
        <div className=&apos;text-center mb-12&apos;>&apos;'
          <h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>Service Categories&apos;</h1>';
          <p className=&apos;text-xl text-gray-600&apos;>Explore our comprehensive range of technology services&apos;</p>';';
        <div className=&apos;grid grid-cols-1 md: gri d-cols-2 l,g: gri d-cols-3 gap-6&apos;>';';' {categories.map((category, index) => (&apos}',';';
    ';';';
            <div key={index} className=&apos;bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shado w-md transition-shadow&apos;>&apos;'';';';';
              <div className=&apos;flex items-center mb-4&apos;>&apos;'
                <category.icon className=&apos;h-8 w-8 text-blue-600 mr-3&apos; />&apos;';
                <h2 className=&apos;text-xl font-semibold text-gray-900&apos;>{category.name}&apos;</h2>';';
              <p className=&apos;text-gray-600 mb-4&apos;>';';' {category.count} services available in this category&apos;',';';
    ';';';
  const categories = ['';';' { nam,',';';
    ';';';
    e: 'AI Services', icon: Brai n, count: 2 5 } { name: 'Cloud Solutions', icon: Clou d, count: 1 5 },';';';
  const categories = [`"',';';
    ';';' { name: 'AI Services', icon: Brai n, count: 2 5 } { name: 'Cloud Solutions', icon: Clou d, count: 1 5 },""',';';
    ';';' { name: 'Cybersecurity', icon: Shiel d, count: 1 2 } { name: 'Development', icon: Cod e, count: 1 8 },""',';';
    ';';' { name: 'Data Analytics', icon: Databas e, count: 1 0 } { name: 'Infrastructure', icon: Networ k, count: 8 }
  return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">""
      <div className="max-w-6xl mx-auto px-4 sm: p x-6 lg: p x-8 py-16">""
        <div className="text-center mb-12">""
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>""
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>""
        </div>""
        <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-6">
          {categories.map((category, index) => (""
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shado w-md transition-shadow">""
              <div className="flex items-center mb-4">""
                <category .icon className="h-8 w-8 text-blue-600 mr-3" /" >"
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>""
              <p className="text-gray-600 mb-4">' {category.count} services available in this category';';
              </p>';';';
              <a"`',';';
    ';';';
                href={`/services?category=${category.name.toLowerCase().replace(' ', '-')}`}``';';';
  const categories = [',';';
    ';';' { name: 'AI Services', icon: Brai n, count: 2 5 } { name: 'Cloud Solutions', icon: Clou d, count: 1 5 } { name: 'Cybersecurity', icon: Shiel d, count: 1 2 } { name: 'Development', icon: Cod e, count: 1 8 } { name: 'Data Analytics', icon: Databas e, count: 1 0 } { name: 'Infrastructure', icon: Networ k, count: 8 }',';';
    ';';';
  return ('';
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>';';
      <div className="max-w-6xl mx-auto px-4 sm: p x-6 lg: p x-8 py-16>';';';
        <div className="text-center mb-12>',';';
    ';';';
          <h1 className="text-4xl font-bold text-gray-900 mb-4'>Service Categories</h1>'',';';
    ';';';
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>'';
        <div className="grid grid-cols-1 m,';';
    d: gri d-cols-2 l,';';';
    g: gri d-cols-3 gap-6">',';';
    ';';' {categories.map((category, index) => ('';
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shado w-md transition-shadow>';';
              <div className="flex items-center mb-4>';';';
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />',';';
    ';';';
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>'';';';';
              <a'',';';
    ';';';
                href={`/services?category=${category.name.toLowerCase().replace(' ', '-')}`}`',';';
    ';';';
              <a href={`/services?category=${category.name.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover: tex t-blue-700 font-medium">',';';
    ';';';
              <a href={`/services?category=${category.name.toLowerCase().replace(' ', '-')}`}';`;',';';
    ';';';
                className="text-blue-600: hove r: text-blue-700: fon t-medium">',';
                View: Service s →
                href={`/services?category=${category.name.toLowerCase().replace(&apos; &apos, &apos;-&apos)}`}';
                className=&apos;text-blue-600 hover: tex t-blue-700 font-medium&apos;>';';
                View Services →&apos;&apos;';';';
              <a`',';';
    ';';';
                href={`/services?category=${category.name.toLowerCase().replace(' ,-')}`}"
                className="text-blue-600 hover: tex t-blue-700 font-medium">
                View Services →
              </a>
    <;</div>
  )}"`"
export default Categories"`"
"`"
  )
      )}
    </div>
  );
}
export: default Categories;
export default Categories';
export default Categories"``';';
export default Categories"`';';';
"';';';';
</a>
</a>
</a>
</div>
</div>
</div>
</div>
</a>
</category>
</div>
</div>
</div>
</div>
</div>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</p>
</div>
</div>
</div>
</div>
</div>