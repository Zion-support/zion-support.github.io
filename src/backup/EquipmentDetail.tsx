import React from 'react';
import SEO from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function EquipmentDetail() {
  return (
    <>
      <SEO 
        title="Equipment Detail - Zion Tech Group" 
        description="Detailed information about our equipment and technology solutions." 
        keywords="equipment, technology, solutions, Zion Tech Group"
        url="https://ziontechgroup.com/equipment"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Equipment Details</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Comprehensive information about our technology equipment and solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Equipment Specifications</h2>
              <p className="text-zion-slate-light mb-8">
                Detailed specifications and information about our technology equipment.
              </p>
              
              <div className="space-y-6">
                <div className="bg-zion-blue p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-zion-cyan font-semibold">Model:</span>
                      <span className="text-white ml-2">ZionTech Pro Series</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Category:</span>
                      <span className="text-white ml-2">Enterprise Solutions</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Performance:</span>
                      <span className="text-white ml-2">High Performance</span>
                    </div>
                    <div>
                      <span className="text-zion-cyan font-semibold">Warranty:</span>
                      <span className="text-white ml-2">3 Years</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan-light transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}