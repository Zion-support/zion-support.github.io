import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription } from '../components/ui/card';

export default function Partners() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Our Partners</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p className="text-lg text-gray-600 mb-6">
            We work with industry-leading partners to deliver the best solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
                <CardDescription>
                  Leading technology companies that help us deliver cutting-edge solutions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Service Partners</h3>
                <CardDescription>
                  Professional service providers that complement our offerings.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Strategic Partners</h3>
                <CardDescription>
                  Long-term strategic relationships that drive mutual growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}