import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react';

export function InteractiveFeatures() {
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find exactly what you need with our AI-powered search",
      action: "Try Search"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team",
      action: "Start Collaborating"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing fast performance",
      action: "See Performance"
    },
    {
      icon: Settings,
      title: "Easy Configuration",
      description: "Customize everything to your needs",
      action: "Configure Now"
    }
  ],
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Features</h2>
          <p className="text-lg text-gray-600">Experience the power of our platform</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover: shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button  className="w-full">
                  {feature.action}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )}
