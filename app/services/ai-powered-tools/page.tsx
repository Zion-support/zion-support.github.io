


export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ai Powered Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our advanced ai powered tools solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIToolCategory({
  title,
  icon,
  description,
  tools,
}: {
  title: string;
  icon: string;
  description: string;
  tools: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {tools.map((tool, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-purple-500 mr-2">•</span>
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AITool({
  title,
  description,
  features,
  price,
  category,
  useCase,
  demoUrl,
}: {
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  useCase: string;
  demoUrl: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-purple-600">{price}</div>
          <a href={demoUrl} className="text-sm text-blue-600 hover:underline">
            View Demo
          </a>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

function AITechnology({
  category,
  technologies,
}: {
  category: string;
  technologies: string[];
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Integration({
  title,
  description,
  platforms,
}: {
  title: string;
  description: string;
  platforms: string[];
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
          >
            {platform}
          </span>
        ))}
      </div>
    </div>
  );
}

function AIPricingPlan({
  name,
  price,
  description,
  features,
  popular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? "border-purple-500" : "border-gray-200"} relative`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{description}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function SuccessStory({
  company,
  industry,
  tool,
  result,
  description,
}: {
  company: string;
  industry: string;
  tool: string;
  result: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-purple-600 font-bold text-lg">
            {company.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{company}</h4>
          <p className="text-sm text-gray-500">{industry}</p>
        </div>
      </div>
      <h5 className="font-semibold text-gray-900 mb-2">{tool}</h5>
      <div className="text-2xl font-bold text-purple-600 mb-2">{result}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
