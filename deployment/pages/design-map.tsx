import React, { useMemo, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { getZionDesignMap } from "../utils/design-map";

export default function DesignMapPage() {
  const designMap = useMemo(() => getZionDesignMap(), []);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Layout 
      title="Design Map - Zion Tech Group" 
      description="Explore our comprehensive design system and component library"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Design Map
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive design system and component library for building
              consistent, beautiful, and accessible user interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(designMap).map(([category, components]) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <p className="text-gray-600 mb-4">
                  {Array.isArray(components) ? components.length : Object.keys(components).length} components
                </p>
                <div className="text-blue-600 font-medium">
                  {selectedCategory === category ? 'Hide Details' : 'View Details'}
                </div>
                
                {selectedCategory === category && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {Array.isArray(components) ? (
                      <ul className="space-y-2">
                        {components.map((component, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            {component}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="space-y-2">
                        {Object.entries(components).map(([name, description]) => (
                          <li key={name} className="text-sm">
                            <span className="font-medium text-gray-900">{name}:</span>
                            <span className="text-gray-600 ml-2">{description}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}