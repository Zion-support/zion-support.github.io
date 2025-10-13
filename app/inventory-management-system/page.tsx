import { ArrowRight, Package, BarChart3, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function InventoryManagementSystemPage() {
  return (
    <>
      <Helmet>
        <title>Inventory Management System - Zion Tech Group | Stock Management Solution</title>
        <meta name="description" content="Comprehensive inventory management system to track stock, manage orders, and optimize warehouse operations." />
        <meta name="keywords" content="inventory management, stock management, warehouse management, inventory tracking" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Inventory Management System</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional inventory management solution coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}