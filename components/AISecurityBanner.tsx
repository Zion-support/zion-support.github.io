"use client";

import React from 'react';
import { Link } from 'react-router-dom';

export default function AISecurityBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="text-3xl animate-pulse">🔐</span>
            <span className="font-bold text-lg uppercase tracking-wide">CRITICAL:</span>
            <Link 
              href="/blog/ai-2025-oct-ai-security-enterprise-best-practices" 
              className="underline hover:text-yellow-200 font-bold text-lg decoration-2 underline-offset-4"
            >
              AI Security Best Practices 2025
            </Link>
            <span className="hidden md:inline text-yellow-300">•</span>
            <span className="font-semibold text-yellow-100">99.8% Threat Detection • Prevent $8.7M Breaches</span>
          </div>
          <Link
            href="/blog/ai-2025-oct-ai-security-enterprise-best-practices"
            className="bg-white text-red-700 hover:bg-yellow-400 hover:text-red-900 px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Secure Now →
          </Link>
        </div>
      </div>
    </section>
  );
}

export const AISecurityShowcaseBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-2 rounded-t-xl">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl animate-pulse">⚠️</span>
            <span className="font-bold text-sm uppercase">Critical Security Alert</span>
            <span className="text-2xl animate-pulse">⚠️</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-b-xl shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              85% of AI Systems Have Vulnerabilities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Protect your AI infrastructure with enterprise-grade security practices. Average breach cost: $8.7M
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-red-50 rounded-lg border-2 border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-1">48%</div>
              <div className="text-sm text-gray-700">Prompt Injection Attacks</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-1">22%</div>
              <div className="text-sm text-gray-700">Data Poisoning</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">15%</div>
              <div className="text-sm text-gray-700">Model Theft</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-1">23</div>
              <div className="text-sm text-gray-700">Days to Detect</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Threat Defense</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Comprehensive protection against prompt injection, data poisoning, model theft, and adversarial attacks.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>✓ Input sanitization</li>
                <li>✓ Output filtering</li>
                <li>✓ Anomaly detection</li>
                <li>✓ Rate limiting</li>
              </ul>
              <Link 
                href="/blog/ai-2025-oct-ai-security-enterprise-best-practices"
                className="text-red-600 font-semibold hover:text-red-800 flex items-center"
              >
                Learn Defense Strategies <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Protect sensitive data with PII detection, encryption, and GDPR-compliant practices.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>✓ PII detection & redaction</li>
                <li>✓ End-to-end encryption</li>
                <li>✓ Data minimization</li>
                <li>✓ Compliance (GDPR, SOC 2)</li>
              </ul>
              <Link 
                href="/blog/ai-2025-oct-ai-security-enterprise-best-practices#data-protection"
                className="text-orange-600 font-semibold hover:text-orange-800 flex items-center"
              >
                View Protection Methods <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security Monitoring</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Real-time threat detection with comprehensive monitoring and incident response.
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                <li>✓ Real-time monitoring</li>
                <li>✓ Threat detection</li>
                <li>✓ Incident response</li>
                <li>✓ Audit logging</li>
              </ul>
              <Link 
                href="/services/ai-security-enterprise-threat-detection"
                className="text-amber-600 font-semibold hover:text-amber-800 flex items-center"
              >
                Get Security Services <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white p-8 rounded-xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Don't Let Your AI Be the Weak Link</h3>
                <p className="text-red-100">
                  Free security assessment • Expert consultation • 99.8% threat detection rate
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-yellow-400 hover:text-red-900 px-8 py-3 rounded-full font-bold whitespace-nowrap transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Security Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
