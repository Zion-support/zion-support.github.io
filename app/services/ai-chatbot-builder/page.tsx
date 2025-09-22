import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder - Zion Tech Group',
  description: 'Build intelligent chatbots with our AI-powered platform.',
};

export default function ServicePage() {
  return (
    <div>
      <h1>AI Chatbot Builder</h1>
      <p>Create intelligent, conversational AI chatbots for your business.</p>
    </div>
  );
}