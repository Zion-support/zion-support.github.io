import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState("buttons");
  const components = {
    buttons: [
      { name: "Primary Button", variant: "primary", code: "className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"" },
      { name: "Secondary Button", variant: "secondary", code: "className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"" },
      { name: "Success Button", variant: "success", code: "className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"" },
      { name: "Danger Button", variant: "danger", code: "className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"" },
      { name: "Outline Button", variant: "outline", code: "className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"" },
    ],
    forms: [
      { name: "Text Input", variant: "input", code: "className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"" },
      { name: "Select Dropdown", variant: "select", code: "className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"" },
      { name: "Checkbox", variant: "checkbox", code: "className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"" },
      { name: "Radio Button", variant: "radio", code: "className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"" },
      { name: "Textarea", variant: "textarea", code: "className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"" },
    ],
    cards: [
      { name: "Basic Card", variant: "basic", code: "className="bg-white rounded-lg shadow-md p-6"" },
      { name: "Featured Card", variant: "featured", code: "className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6"" },
      { name: "Interactive Card", variant: "interactive", code: "className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"" },
      { name: "Compact Card", variant: "compact", code: "className="bg-white rounded-lg shadow-sm p-4"" },
    ],
    navigation: [
      { name: "Primary Nav", variant: "primary", code: "className="bg-white shadow-sm border-b"" },
      { name: "Sidebar Nav", variant: "sidebar", code: "className="bg-gray-800 text-white w-64 min-h-screen"" },
      { name: "Breadcrumbs", variant: "breadcrumbs", code: "className="flex items-center space-x-2 text-sm text-gray-500"" },
      { name: "Pagination", variant: "pagination", code: "className="flex items-center space-x-1"" },
    ],
    feedback: [
      { name: "Alert Success", variant: "success", code: "className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"" },
      { name: "Alert Error", variant: "error", code: "className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"" },
      { name: "Alert Warning", variant: "warning", code: "className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded"" },
      { name: "Alert Info", variant: "info", code: "className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded"" },
    ],
  };
  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case "primary": return "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors";
      case "secondary": return "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors";
      case "success": return "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors";
      case "danger": return "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors";
      case "outline": return "border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors";
      default: return "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors";
    }
  };
  const getFormClasses = (variant: string) => {
    switch (variant) {
      case "input": return "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
      case "select": return "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
      case "checkbox": return "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500";
      case "radio": return "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500";
      case "textarea": return "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
      default: return "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
    }
  };
  const getCardClasses = (variant: string) => {
    switch (variant) {
      case "basic": return "bg-white rounded-lg shadow-md p-6";
      case "featured": return "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6";
      case "interactive": return "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer";
      case "compact": return "bg-white rounded-lg shadow-sm p-4";
      default: return "bg-white rounded-lg shadow-md p-6";
    }
  };
  const getAlertClasses = (variant: string) => {
    switch (variant) {
      case "success": return "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded";
      case "error": return "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded";
      case "warning": return "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded";
      case "info": return "bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded";
      default: return "bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded";
    }
  };
  const renderComponent = (component: any, category: string) => {
    switch (category) {
      case "buttons":