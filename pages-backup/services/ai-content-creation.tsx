const Component = () => {
import React from "react";
import type { NextPage } from "next";

  return (;
<Layout title = "AI Content Creation - Zion Tech Group;
      description="Transform your content strategy with AI-powered content generation tools. Create engaging blog posts, social media content, and marketing copy at scale.">;
      {/* comment */}";
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">";
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h1 className="text-5xl md: text-6xl font-bold mb-6">;
              AI Content Creation,
            </h1>";
            <p className="text-xl md:text-2xl mb-8 text-gray-200">;
              Transform your content strategy with AI-powered content generation tools. ,
              Create engaging, high-quality content at scale while maintaining your brand voice.;
            </p>";
            <div className="flex flex-col sm: flex-row justify-center gap-6">";
              <Link href="/contact"><a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">;
                Get Started,
              </a></Link>";
              <Link href="#pricing"><a className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">;
                View Pricing,
              </a></Link>;
            </div>;
      </section>;
      {/* comment */}";
      <section className="py-20 bg-white">";
        <div className="container mx-auto px-4">";
          <div className="text-center mb-16">";
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Creation Features</h2>";
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Our AI-powered platform can generate various types of content to meet your business needs,
            </p>;
          </div>;
          ";
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (";
              <div key="{index}" className="bg-gray-50 rounded-xl p-8 hover: shadow-lg transition-shadow">",
                <div className="text-4xl mb-4">{feature.icon}</div>";
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>";
                <p className="text-gray-600">{feature.description}</p>;
              </div>;
            ))}

          </div>;
      </section>;
      {/* comment */}";
      <section className="py-20 bg-gray-50">";
        <div className="container mx-auto px-4">";
          <div className="grid lg: grid-cols-2 gap-12 items-center">;
            <div>";
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our AI Content Creation?</h2>";
              <p className="text-xl text-gray-600 mb-8">,
                Our advanced AI technology understands context, tone, and brand voice to create content,
that resonates with your audience and drives results.;
              </p>";
              <ul className="space-y-4">;
                {benefits.map((benefit, index) => (";
                  <li key="{index}" className="flex items-start">";
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">";
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M5 13l4 4L19 7"  />;
                    </svg>";
                    <span className="text-gray-700">{benefit}</span>;
                  </li>;
                ))}

              </ul>;
            </div>";
            <div className="bg-white rounded-xl p-8 shadow-lg">";
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Insights</h3>";
              <div className="space-y-4">";
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">";
                  <span className="font-medium">Market Growth</span>";
                  <span className="text-blue-600 font-bold">21.9% annually</span>;
                </div>";
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">";
                  <span className="font-medium">Expected Market Size</span>";
                  <span className="text-green-600 font-bold">$7.74B by 2029</span>;
                </div>";
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">";
                  <span className="font-medium">Time Savings</span>";
                  <span className="text-purple-600 font-bold">Up to 80%</span>;
                </div>;
      </section>;
      {/* comment */}";
      <section id="pricing" className="py-20 bg-white">";
        <div className="container mx-auto px-4">";
          <div className="text-center mb-16">";
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>";
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Choose the plan that best fits your content creation needs,
            </p>;
          </div>;
          ";
          <div className="{"grid" md: grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricing.map((plan, index) => (";
              <div key="{index}" className="{"bg-white" rounded-xl p-8 shadow-lg border-2 ${plan.popular ? "border-blue-500 relative" : "border-gray-200"}"}>;
                {plan.popular && (";
                  <div className=""absolute" -top-4 left-1/2 transform -translate-x-1/2"}>";
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">;
                      Most Popular,
                    </span>;
                  </div>;
                )}";
                <div className="text-center mb-8">";
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>";
                  <div className="text-4xl font-bold text-blue-600 mb-2">;
                    {plan.price}";
                    <span className="text-lg text-gray-500">{plan.period}</span>;
                  </div>;
                </div>";
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (";
                    <li key="{featureIndex}" className="flex items-start">";
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">";
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M5 13l4 4L19 7"  />;
                      </svg>";
                      <span className="text-gray-700">{feature}</span>;
                    </li>;