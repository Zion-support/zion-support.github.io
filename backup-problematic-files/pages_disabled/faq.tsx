import React from "react";

const faqCategories = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    color: 'blue'
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    icon: HelpCircle,
    color: 'green'
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: HelpCircle,
    color: 'purple'
  },
  {
    id: 'billing',
    title: 'Billing & Pricing',
    icon: HelpCircle,
    color: 'orange'
  }
];

const Faq: React.FC<FaqProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Faq</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Faq;
