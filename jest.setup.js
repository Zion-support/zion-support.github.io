<<<<<<< HEAD
import React from 'react'; import { Helmet } from 'react-helmet-async'; export default function Jest.setup.js() {} return ( <>Helme t><//titl e>Jest.setup.js - Zion Tech Group</titl e><//meta nam e="description" conten t="Professional jest.setup.js services by Zion Tech Group." />"" </Helme t><//div classNam e="min-h-screen bg-white">"" {/* Hero Section */} <section classNam e="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"" <div classNam e="max-w-6xl mx-auto text-center">"" <h1 classNam e="text-5xl font-bold text-gray-900 mb-6">"; Jest.setup.js </h 1><//p classNam e="text-xl text-gray-600 max-w-3xl mx-auto">"; Professional jest.setup.js services by Zion Tech Group. </p><///di v><///sectio n> {/* Content Section */} <section classNam e="py-20 px-4">"" <div classNam e="max-w-6xl mx-auto">"" <div classNam e="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"" <div classNam e="bg-white p-6 rounded-lg shadow-lg">"" <h3 classNam e="text-2xl font-bold text-gray-900 mb-4">Professional Service</h 3>"" <p classNam e="text-gray-600">High-quality professional services tailored to your needs.</p>"" </di v><//div classNam e="bg-white p-6 rounded-lg shadow-lg">"" <h3 classNam e="text-2xl font-bold text-gray-900 mb-4">Expert Team</h 3>"" <p classNam e="text-gray-600">Experienced professionals with deep industry knowledge.</p>"" </di v><//div classNam e="bg-white p-6 rounded-lg shadow-lg">"" <h3 classNam e="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h 3>"" <p classNam e="text-gray-600">Round-the-clock support to ensure your success.</p>"" </di v><///di v><///di v><///sectio n> {/* CTA Section */} <section classNam e="py-20 px-4 bg-gray-900">"" <div classNam e="max-w-4xl mx-auto text-center">"" <h2 classNam e="text-4xl font-bold text-white mb-6">"; Ready to Get Started? </h 2><//p classNam e="text-xl text-gray-300 mb-8">"; Contact us today to learn more about our services and how they can benefit your organization. </p><//button classNam e="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">"; Get Started </butto n><///di v><///sectio n><///di v><///> ); }'""'"'
=======
import '@testing-library/jest-dom';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});
>>>>>>> cursor/fix-errors-and-merge-to-main-fabf
