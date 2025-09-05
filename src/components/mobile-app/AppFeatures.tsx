
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
  );
};
