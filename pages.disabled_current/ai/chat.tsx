import React from 'react';
import Head from 'next/head';

export default function AiChat() {
  return (
    <>
      <Head>
        <title>AI Chat - AI Assistant</title>
        <meta name="description" content="Chat with our AI assistant" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AI Chat</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="h-96 border rounded-lg p-4 mb-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                  Hello! How can I help you today?
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-4 py-2"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}