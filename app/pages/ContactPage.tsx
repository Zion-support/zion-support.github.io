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
export default ContactPage;

=======
export default ContactPage;
>>>>>>> 516d08636e963cc03ae2bfbc2645b9ab9784f8a2
