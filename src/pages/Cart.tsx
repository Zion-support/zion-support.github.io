import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Lock, 
  Shield, 
  Truck, 
  CreditCard, 
  CheckCircle,
  AlertCircle,
  Package,
  Star,
  Heart,
  Share2,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'ai-business-manager',
      name: 'AI Business Manager Pro',
      description: 'Enterprise AI platform for business process automation',
      price: 2500,
      quantity: 1,
      image: '/products/ai-business-manager.jpg',
      category: 'AI & Machine Learning',
      features: ['Predictive Analytics', 'Process Optimization', 'Real-time Insights'],
      inStock: true
    },
    {
      id: 'cybersecurity-suite',
      name: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive security solution for enterprise protection',
      price: 3200,
      quantity: 1,
      image: '/products/cybersecurity-suite.jpg',
      category: 'Security & Compliance',
      features: ['Threat Detection', 'Compliance Monitoring', '24/7 Support'],
      inStock: true
    },
    {
      id: 'cloud-optimizer',
      name: 'Cloud Cost Optimizer',
      description: 'AI-powered cloud infrastructure optimization',
      price: 800,
      quantity: 2,
      image: '/products/cloud-optimizer.jpg',
      category: 'Cloud & Infrastructure',
      features: ['Cost Analysis', 'Resource Optimization', 'Multi-cloud Support'],
      inStock: true
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome20') {
      setCouponApplied(true);
      setCouponDiscount(0.20);
    } else if (couponCode.toLowerCase() === 'save15') {
      setCouponApplied(true);
      setCouponDiscount(0.15);
    } else {
      setCouponApplied(false);
      setCouponDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal * couponDiscount;
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const shipping = subtotal > 5000 ? 0 : 150; // Free shipping over $5000
  const total = subtotal - discount + tax + shipping;

  const benefits = [
    {
      icon: Shield,
      title: 'Secure Checkout',
      description: 'Bank-level security for your payment information'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $5,000'
    },
    {
      icon: CheckCircle,
      title: '30-Day Returns',
      description: 'Hassle-free returns within 30 days'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Your data is protected and never shared'
    }
  ];

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <SEO 
          title="Shopping Cart - Zion Tech Group"
          description="Your shopping cart is empty. Browse our products and add items to get started."
        />
        
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-300 mb-8">
              Looks like you haven't added any products to your cart yet. 
              Browse our catalog and find the perfect solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Shopping Cart - Zion Tech Group"
        description="Review your cart items, apply discounts, and proceed to secure checkout."
      />
      
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Shopping <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Cart</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Review your items and proceed to secure checkout
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6 text-cyan-400" />
                    Cart Items ({cartItems.length})
                  </h2>

                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-slate-600/30 rounded-xl border border-slate-500/30 p-6"
                      >
                        <div className="flex items-start gap-4">
                          {/* Product Image */}
                          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Package className="w-10 h-10 text-white" />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                                <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                  <span className="px-2 py-1 bg-slate-600/50 rounded-full">{item.category}</span>
                                  {item.inStock ? (
                                    <span className="flex items-center gap-1 text-green-400">
                                      <CheckCircle className="w-3 h-3" />
                                      In Stock
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-1 text-red-400">
                                      <AlertCircle className="w-3 h-3" />
                                      Out of Stock
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-400 transition-colors p-1"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>

                            {/* Features */}
                            <div className="mb-4">
                              <button
                                onClick={() => toggleExpanded(item.id)}
                                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                              >
                                {expandedItems.has(item.id) ? (
                                  <>
                                    <ChevronUp className="w-4 h-4" />
                                    Hide Features
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="w-4 h-4" />
                                    Show Features
                                  </>
                                )}
                              </button>
                              {expandedItems.has(item.id) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-3 space-y-1"
                                >
                                  {item.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                      {feature}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </div>

                            {/* Quantity and Price */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-400">Quantity:</span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-8 h-8 bg-slate-600/50 rounded-lg flex items-center justify-center text-white hover:bg-slate-500/50 transition-colors"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="w-12 text-center text-white font-medium">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-8 h-8 bg-slate-600/50 rounded-lg flex items-center justify-center text-white hover:bg-slate-500/50 transition-colors"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-white">${(item.price * item.quantity).toLocaleString()}</div>
                                <div className="text-sm text-gray-400">${item.price.toLocaleString()} each</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-6 sticky top-6"
                >
                  <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>

                  {/* Coupon Code */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Coupon Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                      <button
                        onClick={applyCoupon}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Apply
                      </button>
                    </div>
                    {couponApplied && (
                      <div className="mt-2 text-sm text-green-400 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Coupon applied! {couponDiscount * 100}% discount
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount</span>
                        <span>-${discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-300">
                      <span>Tax (8%)</span>
                      <span>${tax.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                    </div>
                    <div className="border-t border-slate-500/30 pt-3">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total</span>
                        <span>${total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 mb-4">
                    <Lock className="w-5 h-5" />
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Security Notice */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-2">
                      <Shield className="w-4 h-4" />
                      Secure Checkout
                    </div>
                    <p className="text-xs text-gray-500">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Shop with Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're committed to providing the best shopping experience with security, 
              quality, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue Shopping */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Need More Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Continue browsing our comprehensive catalog of products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}