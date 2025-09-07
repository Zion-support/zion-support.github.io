import React from 'react'; const Login = () =>: any { return ( <div className="min - h-screen bg - gray - 50 flex items - center justify - center"> <div className="max - w-md w - full"> <div className="bg - white p - 8 rounded - lg shadow - md"> <h1 className="text - 2xl font - bold text - gray - 900 mb - 6 text - center">Login</h1> <form className="space - y-4"> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Email</label> <input type="email" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <div> <label className="block text - sm font - medium text - gray - 700 mb - 2">Password</label> <input type="password" className="w - full px - 3 py - 2 border border - gray - 300 rounded - md focus:outline - none focus:ring - 2 focus:ring - blue - 500" /> </div> <button type="submit" className="w - full bg - blue - 600 text - white py - 2 px - 4 rounded - md hover:bg - blue - 700 focus:outline - none focus:ring - 2 focus:ring - blue - 500"> Sign In </button> </form> </div> </div> </div> )} export default Login;
import React from 'react'; const Login = () => { return ( <div className="min-h-screen bg-gray-50 flex items-center justify-center"> <div className="max-w-md w-full"> <div className="bg-white p-8 rounded-lg shadow-md"> <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1> <form className="space-y-4"> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Email</label> <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <div> <label className="block text-sm font-medium text-gray-700 mb-2">Password</label> <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"> Sign In </button> </form> </div> </div> </div> )}; export default Login;

import React from "react";
const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {" "}
      <div className="max-w-md w-full">
        {" "}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Login
          </h1>{" "}
          <form className="space-y-4">
            {" "}
            <div>
              {" "}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>{" "}
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>{" "}
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />{" "}
            </div>{" "}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {" "}
              Sign In{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Login;

import React, { useState } from 'react';""
import { motion } from 'framer-motion';""
import { Link } from 'react-router-dom';""
import { SEO } from '../components/SEO';""
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';