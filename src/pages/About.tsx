import React from 'react';
<<<<<<< HEAD
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that 
                  drive innovation, efficiency, and growth. We believe technology 
                  should be accessible, reliable, and transformative.
                </p>
              </Card>
    </div>
  );
};

export default About;
