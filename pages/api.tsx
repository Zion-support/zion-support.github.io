} from "lucide-react";
export default function APIPage() {
  const apiEndpoints = [
    {
      id: "auth"
      title: "Authentication"
      description: "Secure authentication and authorization endpoints"
      baseUrl: "/api/v1/auth"
      methods: [
        {
          method: "POST"
          endpoint: "/login"
          description: "Authenticate user with email and password"
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com"
    "password": "your_password"
  }'`
        }
        {
          method: "POST"
          endpoint: "/register"
          description: "Register a new user account"
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com"
    "password": "your_password"
    "name": "John Doe"
  }'`
        }
      ]
    }
    {
      id: "ai-services"
      title: "AI Services"
      description: "Access our AI-powered services and models"
      baseUrl: "/api/v1/ai"
      methods: [
        {
          method: "POST"
          endpoint: "/chat"
          description: "Send messages to our AI chat service"
          code: `curl -X POST https://api.ziontechgroup.com/v1/ai/chat \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, how can you help me?"
    "model": "gpt-4"
    "temperature": 0.7
import React from './react';
import MainLayout from "../src / components / layout / MainLayout";
import { motion  } from './framer-motion';
import {
  Code,
  Check,
  Globe,
  Shield,
  Zap,
  Database,
  Cpu,
  Cloud,
  XCircle,
} from './lucide-react';
;
export default /**
 * APIPage - Function description
 */
function APIPage() {
  const api_endpoints = [;
    {
      id: "auth",
      title: "Authentication",
      description: "Secure authentication and authorization endpoints",
      base_url: "/api / v1 / auth",
      methods: [;
        {
          method: "POST",
          endpoint: "/login",
          description: "Authenticate user with email and password",
          code: `curl -X POST https://api.ziontechgroup.com / v1 / auth / login \\;
  -H "Content - Type: application / json" \\;
  -d '{
    "email": "user@example.com",
    "password": "your_password";
  }'`,
        },
        {
          method: "POST",
          endpoint: "/register",
          description: "Register a new user account",
          code: `curl -X POST https://api.ziontechgroup.com / v1 / auth / register \\;
  -H "Content - Type: application / json" \\;
  -d '{
    "email": "user@example.com",
    "password": "your_password",
    "name": "John Doe";
  }'`,
        },
      ],
    },
    {
      id: "ai - services",
      title: "AI Services",
      description: "Access our AI - powered services and models",
      base_url: "/api / v1 / ai",
      methods: [;
        {
          method: "POST",
          endpoint: "/chat",
          description: "Send messages to our AI chat service",
          code: `curl -X POST https://api.ziontechgroup.com / v1 / ai / chat \\;
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\;
  -H "Content - Type: application / json" \\;
  -d '{
    "message": "Hello, how can you help me?",
    "model": "gpt - 4",
    "temperature": 0.7;
  }'`,
        },
      ],
    },
    success: {
      status: 200
      data: {
        message: "Request successful"
        data: {
    error: {
      status: 400
      error: {
        code: "VALIDATION_ERROR"
        message: "Invalid request parameters"
        details: {
  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our AI, cloud, and enterprise APIs with detailed examples and guides."
      keywords="API documentation, REST API, AI API, cloud API, developer resources">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                API{" "}
        {/* Quick Start */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              </div>;
            </div>;
          </div>;
        </section>;
              </div>;
            </div>;
          </div>;
        </section>;
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold">;
                  View Documentation;
                </a>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;
  );
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - indigo - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Ready to Get Started?;
              </h2>;
              <p className="text - xl text - indigo - 100 mb - 8 max - w-3xl mx - auto">;
                Start building with our APIs today. Get your API key and begin;
                integrating with our powerful services.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - indigo - 600 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                >;
                  Get API Key;
                </a>;
                <a;
                  href="/docs";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - indigo - 600 transition - all duration - 300 font - semibold";
                >;
                  View Documentation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
