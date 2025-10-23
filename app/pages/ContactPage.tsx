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
>>>>>>> e8203bb1cee2dc83b8a75239c674fa7ce0902515
