import React from 'react';
  }
];

const dataCollection = [
  {
    type: "Personal Information",
    description: "Information that can identify you directly",
    examples: ["Name", "Email address", "Phone number", "Company information"]
  },
  {
    type: "Usage Data",
    description: "Information about how you use our website",
    examples: ["Pages visited", "Time spent on site", "Click patterns", "Device information"]
  },
  {
    type: "Technical Data",
    description: "Information collected automatically",
    examples: ["IP address", "Browser type", "Operating system", "Screen resolution"]
  }
];

const rights = [
  {
    title: "Right to Information",
    description: "You have the right to know what cookies we use and why we use them."
  },
  {
    title: "Right to Control",
    description: "You can control which cookies are stored on your device through your browser settings."
  },
  {
    title: "Right to Withdraw",
    description: "You can withdraw your consent for non-essential cookies at any time."
  },
  {
    title: "Right to Access",
    description: "You can request information about the cookies we have stored about you."
  }
];
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function cookies() {
  return (
    <Layout>
      <Head>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Cookies solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookies</h1>
          <p className="text-lg text-gray-600">
            Professional cookies solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
