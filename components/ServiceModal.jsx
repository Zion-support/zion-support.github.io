import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">{service.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg border border-cyan-500/20">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Investment</h4>
                <p className="text-gray-300">Starting price for this service</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg text-center font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="tel:+13024640950"
              className="flex-1 border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg text-center font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}