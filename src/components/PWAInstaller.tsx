<<<<<<< HEAD
'use client'
import React from 'react';

const PWAInstaller: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          P W A Installer
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This is a placeholder page for P W A Installer.
=======
import React from "react";

interface PWAInstallerProps {
  // Add props here
}

const PWAInstaller: React.FC<PWAInstallerProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          PWAInstaller
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the PWAInstaller page.
>>>>>>> origin/main
          </p>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;
