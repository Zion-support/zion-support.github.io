import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
const Head = dynamic(() => import("next/head"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
          answer: "You can create an account by visiting our sign-up page and providing your email address and basic information. We"ll send you a verification email to complete the process."}, {;
          question: "What services do you offer?",
          answer: "We offer AI services, cloud solutions, cybersecurity, and micro SaaS development. Visit our services page for detailed information about each offering.;
},
        {";
          question: "How do I get my API key?", answer: "Once you"ve created an account, you can find your API key in the dashboard under the "API Keys" section. You can generate new keys or revoke existing ones as needed.;

      ];
}, {";
      title: "Billing & Pricing",
      questions: [,
        {,";
question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also arrange for invoicing and payment terms.;
},
        {";
          question: "Can I change my plan anytime?", answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we"ll prorate any billing differences.;
},
        {";
          question: "Do you offer refunds?", answer: "We offer a 30-day money-back guarantee for all our services. If you"re not satisfied, contact our support team for a full refund.;
      ];
}, {";
      title: "Technical Support",
      questions: [,
        {,";
question: "How do I integrate your API?", answer: "We provide comprehensive documentation and SDKs for popular programming languages. Check our API documentation for detailed integration guides."},
        {";
          question: "What are your API rate limits?", answer: "Rate limits vary by plan. Free plans have 1,000 requests per month, Professional plans have 100,000 requests per month, and Enterprise plans have unlimited requests.;
},
        {";
          question: "How do I report a bug?", answer: "You can report bugs through our support portal, email support@ziontechgroup.com, or use the feedback form in your dashboard.;
      ];
  ];

  const supportTiers = [], price: "Free"},
    {";
      name: "Standard Support", description: "Professional support for business users",";
      responseTime: "4-8 hours", features: [",
        "Priority email support",";
        "Live chat support", "Phone support",";
        "Advanced documentation", "API support;
      ], price: "Included with Professional Plan"},
    {";
      name: "Premium Support", description: "Dedicated support for enterprise customers",";
      responseTime: "1-2 hours", features: [",
        "Dedicated support manager",";
        "24/7 phone support", "Priority ticket handling",";
        "Custom integrations", "SLA guarantees",";
        "On-site support;
      ], price: "Custom Pricing",
  {,";
name: "Community Support",";
      description: "Free support through our community forums and knowledge base",";
      responseTime: "24-48 hours",
      features: [",
        "Community forums,Knowledge base access,Basic documentation,Email support" ],";
      price: "Free"},
    {";
      name: "Standard Support",";
      description: "Professional support for business users",";
      responseTime: "4-8 hours",
      features: [",
        "Priority email support,Live chat support,Phone support,Advanced documentation,API support" ],";
      price: "Included with Professional Plan"},
    {";
      name: "Premium Support",";
      description: "Dedicated support for enterprise customers",";
      responseTime: "1-2 hours",
      features: [",
        "Dedicated support manager,24/7 phone support,Priority ticket handling,Custom integrations,SLA guarantees,On-site support" ],";