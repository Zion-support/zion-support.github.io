export const metadata = { 
  title: 'AI Content Generation Platform | Zion Tech Group',
  description: 'Build AI-powered content generation platforms with text, image, and video creation capabilities. Professional content AI solutions starting at $12k.'
};

export default function AIContentGenerationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Content Generation Platform</h1>
        <p className="text-xl text-gray-600 mb-8">
          Build AI-powered content generation platforms with text, image, video, and audio creation capabilities for marketing and creative teams.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item 
            title="Text Generation" 
            details={[
              "Blog posts & articles",
              "Social media content",
              "Email campaigns",
              "Product descriptions",
              "Ad copy generation",
              "SEO-optimized content",
              "Multi-language support"
            ]} 
          />
          <Item 
            title="Visual Content" 
            details={[
              "Image generation",
              "Logo creation",
              "Social media graphics",
              "Banner ads",
              "Product mockups",
              "Infographic design",
              "Brand consistency"
            ]} 
          />
          <Item 
            title="Video & Audio" 
            details={[
              "Video script generation",
              "Voice synthesis",
              "Video editing automation",
              "Podcast content",
              "Tutorial creation",
              "Social media videos",
              "Audio content"
            ]} 
          />
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Content Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Brand Consistency</h3>
              <p className="text-gray-600">Train AI models on your brand voice, style guidelines, and content preferences for consistent output.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Content Optimization</h3>
              <p className="text-gray-600">AI-powered SEO optimization, readability scoring, and performance prediction for better content.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Workflow Integration</h3>
              <p className="text-gray-600">Seamlessly integrate with your existing content management and marketing automation tools.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Control</h3>
              <p className="text-gray-600">Built-in quality checks, plagiarism detection, and human review workflows for content approval.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Content Platform Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan 
          name="Content Creator" 
          price="$12k–$25k" 
          duration="6–10 weeks"
          features={[
            "Text generation",
            "Basic image creation",
            "Content templates",
            "Simple analytics",
            "API access",
            "Standard support",
            "Cloud hosting"
          ]} 
        />
        <Plan 
          name="Content Studio" 
          price="$25k–$50k" 
          duration="10–16 weeks"
          features={[
            "Everything in Creator",
            "Video generation",
            "Audio synthesis",
            "Advanced analytics",
            "Brand customization",
            "Workflow automation",
            "Priority support"
          ]} 
        />
        <Plan 
          name="Content Enterprise" 
          price="$50k+" 
          duration="14–22 weeks"
          features={[
            "Everything in Studio",
            "Custom AI models",
            "Advanced integrations",
            "White-label options",
            "Dedicated support",
            "SLA guarantees",
            "On-premise deployment"
          ]} 
        />
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Content AI?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's create a powerful AI content generation platform that streamlines your creative workflow and scales content production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-purple-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=AI Content Generation Platform Inquiry"
        className="block w-full mt-6 bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}