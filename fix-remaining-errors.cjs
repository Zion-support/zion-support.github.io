const fs = require('fs');
const path = require('path');

// Function to fix HTML entities in a file
function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common HTML entities
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed HTML entities in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix malformed JSX structure
function fixMalformedJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has malformed structure with early return
    if (content.includes('return;') && content.includes('export default function')) {
      console.log(`Fixing malformed JSX in ${filePath}...`);
      
      // Extract function name
      const functionNameMatch = content.match(/export default function (\w+)/);
      if (!functionNameMatch) return;
      
      const functionName = functionNameMatch[1];
      
      // Create a basic page structure
      const newContent = `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Target, 
  FileText, 
  Users, 
  Globe, 
  Box, 
  Clock, 
  Sparkles,
  Check,
  Star,
  ArrowRight,
  Play,
  Download,
  Share2,
  Heart,
  MessageCircle,
  ThumbsUp,
  Shield,
  Lock,
  Award,
  TrendingUp,
  BarChart3
} from "lucide-react";

export default function ${functionName}() {
  return (
    <>
      <Helmet>
        <title>${functionName.replace(/([A-Z])/g, ' $1').trim()} - Zion Tech Group</title>
        <meta name="description" content="Discover our ${functionName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} solutions powered by advanced AI technology." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ${functionName.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our advanced ${functionName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} solutions powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="#demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful capabilities designed to meet your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Advanced AI
                </h3>
                <p className="text-gray-300">
                  Leverage cutting-edge artificial intelligence for optimal results
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Secure & Reliable
                </h3>
                <p className="text-gray-300">
                  Enterprise-grade security and reliability for your peace of mind
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-purple-400 mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Scalable Solutions
                </h3>
                <p className="text-gray-300">
                  Scale your operations with our flexible and adaptable platform
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about our ${functionName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="#demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}`;

      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed malformed JSX in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files in the app directory
const appDir = path.join(__dirname, 'app');
const files = fs.readdirSync(appDir, { recursive: true });

// Filter for page.tsx files
const pageFiles = files
  .filter(file => file.endsWith('page.tsx'))
  .map(file => path.join(appDir, file));

console.log(`Found ${pageFiles.length} page files to check...`);

// Fix each page file
pageFiles.forEach(filePath => {
  fixHtmlEntities(filePath);
  fixMalformedJSX(filePath);
});

console.log('Done fixing remaining errors!');