
import React from "react",
import { Brain, Clock, Award, Zap } from "lucide-react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
const features = [
  {
    icon: <Brain className=&quot;h-10 w-10 text-zion-cyan&quot; />,
    title: &quot;AI Talent Matching&quot;,
    description: &quot;Our AI algorithm matches you with the perfect talent or job based on your skills and requirements.&quot;
  },
  {
    icon: <Clock className=&quot;h-10 w-10 text-zion-cyan&quot; />,
    title: &quot;1-Click Hiring&quot;,
    description: &quot;Streamlined hiring process that lets you connect with talent instantly with just one click.&quot;
  },
  {
    icon: <Award className=&quot;h-10 w-10 text-zion-cyan&quot; />,
    title: &quot;Resume Builder&quot;,
    description: &quot;Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired.&quot;
  },
  {
    icon: <Zap className=&quot;h-10 w-10 text-zion-cyan&quot; />,
    title: &quot;Real-time Notifications&quot;,
    description: &quot;Get instant alerts about new job opportunities, messages, and hiring requests.&quot; 
  }
],

export const AppFeatures: React.FC = () => {
  return (
    <section className=&quot;py-16 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>Powerful Features</h2>
          <p className=&quot;text-lg text-gray-300 max-w-2xl mx-auto&quot;>
            Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed.
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {features.map((feature, index) => (
            <Card key={index} className=&quot;bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300&quot;>
              <CardHeader>
                <div className=&quot;mb-4&quot;>{feature.icon}</div>
                <CardTitle className=&quot;text-white&quot;>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-gray-300&quot;>{feature.description}</CardDescription>
import React from "react";

const _features = [
  {_icon: <Brain className="h-10 w-10 text-zion-cyan" />, _title: "AI Talent Matching", _description: "Our AI algorithm matches you with the perfect talent or job based on your skills and requirements."},
  {_icon: <Clock className="h-10 w-10 text-zion-cyan" />, _title: "1-Click Hiring", _description: "Streamlined hiring process that lets you connect with talent instantly with just one click."},
  {_icon: <Award className="h-10 w-10 text-zion-cyan" />, _title: "Resume Builder", _description: "Create professional, _AI-enhanced resumes that highlight your skills and increase your chances of getting hired."},
  {_icon: <Zap className="h-10 w-10 text-zion-cyan" />, _title: "Real-time Notifications", _description: "Get instant alerts about new job opportunities, _messages, _and hiring requests."}
];

export const AppFeatures: React.FC = () => {_return (_<section className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you love about Zion, _now in your pocket. Our mobile app brings all the powerful features you need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, _index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-purple/30 hover:border-zion-cyan transition-colors duration-300">
              <CardHeader>
                <div className="mb-4">{_feature.icon}</div>
                <CardTitle className="text-white">{_feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{_feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
},
