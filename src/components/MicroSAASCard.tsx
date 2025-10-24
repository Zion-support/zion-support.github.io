<<<<<<< HEAD
'use client'
import React from 'react';

const MicroSAASCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Micro S A A S Card
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for Micro S A A S Card.
=======
import React from "react";

interface MicroSAASCardProps {
  // Add props here
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          MicroSAASCard
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the MicroSAASCard page.
>>>>>>> origin/main
          </p>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASCard;
