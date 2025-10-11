'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';
;
const FAQPage: React.FC = () => {
return (;
const [openItems, setOpenItems] = useState<number[]>
);
}([]);
;
const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]);
;
const faqs = [
    {
    },
    {
      question: "How can AI benefit my business?",
      answer: "AI can automate repetitive tasks, provide data-driven insights, improve customer experience, enhance security, optimize operations, and drive innovation. Our solutions typically deliver 300% ROI within the first year."
    },
    {
      question: "Do you provide IT infrastructure services?",
      answer: "Yes, we offer complete IT infrastructure services including cloud migration, DevOps, database management, cybersecurity, managed IT services, and IT consulting to modernize your technology stack."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including subscription-based plans starting at $99/month for small businesses, custom enterprise solutions, and project-based pricing. Contact us for a personalized quote."
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team is available via phone, email, and live chat to ensure your systems run smoothly around the clock."
    },
    {
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, education, real estate, legal, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards."
    }
  ];


        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
  );
};

>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
export default FAQPage;
