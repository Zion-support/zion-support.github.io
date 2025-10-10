'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';
            {/* Information We Collect */}
            <section></section>;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>;
              <div className="grid md:grid-cols-3 gap-6"></div>;
                {dataTypes.map((type, index) => (</div>;}
                  <div key={index} className="bg-gray-50 rounded-lg p-6"></div>;
                    <div className="flex items-center mb-4"></div>;
                      <type.icon className="h-6 w-6 text-blue-600 mr-3" />;
                      <h3 className="text-lg font-semibold text-gray-900">{type.category}</h3>;
                    </div>;
                    <p className="text-gray-700 mb-3">{type.description}</p>;
                    <ul className="text-sm text-gray-600 space-y-1">;
                      {type.examples.map((example, idx) => (;}
                        <li key={idx}>• {example}</li>;
                      ))}
                    </ul>;
                  </div>;
                ))}
            {/* How We Use Information */}
            <section></section>;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>;
              <div className="grid md:grid-cols-2 gap-6"></div>;
                {purposes.map((purpose, index) => (</div>;}
                  <div key={index} className="flex items-start"></div>;
                    <div className="flex-shrink-0 mr-4"></div>;
                      <purpose.icon className="h-6 w-6 text-blue-600" />;
                    </div>;
                    <div></div>;
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{purpose.title}</h3>;
                      <p className="text-gray-700">{purpose.description}</p>;
                    </div>;
                  </div>;
                ))}
            {/* Your Rights */}
            <section></section>;
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>;
              <div className="grid md:grid-cols-2 gap-6"></div>;
                {rights.map((right, index) => (</div>;}
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6"></div>;
                    <div className="flex items-center mb-3"></div>;
                      <right.icon className="h-6 w-6 text-green-600 mr-3" />;
                      <h3 className="text-lg font-semibold text-gray-900">{right.title}</h3>;
                    </div>;
                    <p className="text-gray-700">{right.description}</p>;
                  </div>;
                ))}
            {/* Updates */}
            <section></section>;
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"></div>;
                <div className="flex items-start"></div>;
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />;
                  <div></div>;
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Policy Updates</h3>;
                    <p className="text-gray-700">;
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.;
                    </p>;
                  </div>;
                </div>;
              </div>;
            </section>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
;