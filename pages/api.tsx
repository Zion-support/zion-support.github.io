<<<<<<< HEAD
=======

  Code,
  Check,
  Globe,
  Shield,
  Zap,
  Database,
  Cpu,
  Cloud,
  XCircle,;
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
  }'`,
        },
      ],
    },;
  ];
;
  const response_examples = {
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
        {/* Quick Start */}
        <section className="py-20 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >;
                  <div className="bg - indigo - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <Shield className="w - 8 h - 8 text - indigo - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - gray - 900 mb - 2">;
                    1. Get API Key;
                  </h3>;
                  <p className="text - gray - 600">;
                    Sign up and obtain your API key from the dashboard;
                  </p>;
                </motion.div>;
                <motion.div;
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className="bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <Code className="w - 8 h - 8 text - purple - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - gray - 900 mb - 2">;
                    2. Make Request;
                  </h3>;
                  <p className="text - gray - 600">;
                    Use our RESTful APIs with your preferred language;
                  </p>;
                </motion.div>;
                <motion.div;
                  className="text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8 }}
                  viewport={{ once: true }}>;
                  <div className="flex items-center mb-4">;
                    <Check className="w-6 h-6 text-green-500 mr-3" />;
                    <h3 className="text-lg font-semibold text-gray-900">;
                      Success Response;
                    </h3>;
                  </div>;
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">;
                    <pre className="text-green-400 text-sm font-mono">;
                      <code>;
                        {JSON && JSON.stringify(responseExamples && responseExamples.success, null, 2)}
                      </code>;
                    </pre>;
                  </div>;
                </motion && motion.div>;

                <motion&& motion.div
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className="flex items-center mb-4">;
                    <XCircle className="w-6 h-6 text-red-500 mr-3" />;
                    <h3 className="text-lg font-semibold text-gray-900">;
                      Error Response;
                    </h3>;
                  </div>;
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">;
                    <pre className="text-red-400 text-sm font-mono">;
                      <code>;
                        {JSON && JSON.stringify(responseExamples && responseExamples.error, null, 2)}
                      </code>;
                    </pre>;
                  </div>;
                </motion && motion.div>;
        {/* Response Examples */}
        <section className="py - 20 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Response Examples;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto">;
                Understand the structure of our API responses with these;
                examples.;
              </p>;
            </motion.div>;
            <div className="max - w-4xl mx - auto">;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8">;
                <motion.div;
                  className="bg - white border border - gray - 200 rounded - lg p - 6";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >;
                  <div className="flex items - center mb - 4">;
                    <Check className="w - 6 h - 6 text - green - 500 mr - 3" />;
                    <h3 className="text - lg font - semibold text - gray - 900">;
                      Success Response;
                    </h3>;
                  </div>;
                  <div className="bg - gray - 900 rounded - lg p - 4 overflow - x-auto">;
                    <pre className="text - green - 400 text - sm font - mono">;
                      <code>;
                        {JSON.stringify (response_examples.success, null, 2)}
                      </code>;
                    </pre>;
                  </div>;
                </motion.div>;
                <motion.div;
                  className="bg - white border border - gray - 200 rounded - lg p - 6";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
import Head from 'next/head';
import Layout from '../components/Layout';

export default function APIPage() {
  
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                API Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, scalable API solutions for your applications
              </p>
            </div>
          </div>
        </section>

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      </div>
    </Layout>
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
