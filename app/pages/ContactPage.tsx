"use client";
import React from "react";

interface ContactPageProps {
  className?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>ContactPage</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

<<<<<<< HEAD
=======
export default ContactPage;

>>>>>>> ff4a9ef19e17007e5c17ec37bd59b85fe2ab6d30
