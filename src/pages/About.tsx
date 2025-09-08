import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, value: "500+", label: "Happy Clients" },
    { icon: <Target className="h-8 w-8 text-green-600" />, value: "1000+", label: "Projects Completed" },
    { icon: <Award className="h-8 w-8 text-purple-600" />, value: "50+", label: "Awards Won" },
    { icon: <TrendingUp className="h-8 w-8 text-orange-600" />, value: "99.9%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              We are a leading technology company dedicated to transforming businesses 
              through innovative digital solutions and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and success. We believe in creating meaningful impact through 
                  technology that solves real-world problems.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be the world's most trusted technology partner, known for delivering 
                  exceptional solutions that transform industries and create lasting value 
                  for our clients and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
              },
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards in all our business practices and relationships."
              },
              {
                title: "Excellence",
                description: "We strive for perfection in everything we do, from code quality to customer service."
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and work closely with our clients and partners."
              },
              {
                title: "Transparency",
                description: "We maintain open communication and provide clear visibility into our processes."
              },
              {
                title: "Growth",
                description: "We are committed to continuous learning and helping our clients grow their businesses."
              }
            ].map((value, index) => (
              <Card key={index} variant="outlined" className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;