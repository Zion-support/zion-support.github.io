import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function taskManagerPro() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Task Manager Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Task Manager Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function TaskManagerProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced task manager pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Task Manager Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}