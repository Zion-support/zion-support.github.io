import React from "react";
import MainLayout from "../components/layout/MainLayout";

const About: React.FC = () => {
  return (
    <MainLayout title="About Us - Zion Tech Group" description="Learn about our mission to transform businesses through innovative technology solutions.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg">This is the About page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default About;