import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
    import { ArrowRight, Mail, Phone, MapPin } from "lucide-react",
      const EnhancedFooter: React.FC = () => {},
      return (
    <>
      <footer className="bg-slate-900 text-white">

        <>
      <>
      <h3 className="text-2xl font-bold text-white mb-4">
              Zion Tech Group;
            
<p className="text-gray-300 mb-4">

              Leading provider of AI and IT solutions for businesses worldwide.;
            <>
      <Link to="/contact",
      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300";
            >
              Get Started;

            <>
      <h4 className="text-lg font-semibold text-white mb-4">Services
<ul className="space-y-2">

              <>
      <li>
<Link to="/ai-solutions",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
                >

                  AI Solutions;
                <>
      <li>

                <>
      <Link to="/it-services",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
                >
                  IT Services;
=======
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI and IT solutions for businesses worldwide.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
<<<<<<< HEAD

                <>
      <Link to="/cloud-solutions",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
=======
                <Link
                  to="/ai-solutions"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
                >
                  AI Solutions
                </Link>
              </li>
              <li>
<<<<<<< HEAD

                <>
      <Link to="/cybersecurity",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
                >
                  Cybersecurity;

          <>
      <h4 className="text-lgfont-semibold text-white mb-4">Company

            <>
      <ul className="space-y-2">
<li>

                <>
      <Link to="/about",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
                >
                  About Us;

              <li>

                <>
      <Link to="/team",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
=======
                <Link
                  to="/it-services"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  IT Services
                </Link>
              </li>
              <li>
                <Link
                  to="/cloud-solutions"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
<<<<<<< HEAD

                <>
      <Link to="/careers",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
=======
                <Link
                  to="/cybersecurity"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
<<<<<<< HEAD

                <>
      <Link to="/contact",
      className="text-gray-300 hover:text-cyan-400 transition-colors";
=======
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

<<<<<<< HEAD
          <>
      <h4 className="text-lg font-semibold text-white mb-4">

              Contact Info;
            <>
      <>
      <span className="text-gray-300">info@ziontechgroup.com

                <>
      <span className="text-gray-300">+1 (555) 123-4567

                <>
      <span className="text-gray-300">San Francisco, CA

          <>
      <>
      <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.;

  )
},
      export default EnhancedFooter;
=======
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-cyan-400 mr-3" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
