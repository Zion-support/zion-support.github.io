import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ShoppingCart, Package, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  // For now, we'll show an empty cart state
  // In a real implementation, this would use Redux store and other hooks
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <ShoppingCart className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Your Cart is Empty</h1>
            <p className="text-gray-300 mb-8">
              Looks like you haven't added any items to your cart yet. Start exploring our AI services and products!
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Package className="w-5 h-5 mr-2" />
                Browse Services
              </Button>
            </Link>
            
            <div className="text-gray-400 text-sm">
              or
            </div>
            
            <Link href="/marketplace">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                <ArrowRight className="w-5 h-5 mr-2" />
                Visit Marketplace
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}