#!/bin/bash

# List of problematic service files to clean
services=(
  "ai-social-media-scheduler"
  "devops-automation" 
  "it-services"
  "micro-saas"
  "smart-invoice-generator"
)

# Template for service pages
cat > service_template.tsx << 'EOF'
export const metadata = {
  title: 'Service Name | Zion Tech Group',
  description: 'Service description for the Zion Tech Group service page.',
  keywords: 'service keywords, relevant terms',
};

export default function ServicePage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Name
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Service description goes here.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
EOF

# Clean each service file
for service in "${services[@]}"; do
  echo "Cleaning $service..."
  cp service_template.tsx "app/services/$service/page.tsx"
done

# Clean up template
rm service_template.tsx

echo "All service files cleaned!"