import React from 'react';
import { Helmet } from 'react-helmet-async';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" content="Advanced privacy solutions by Zion Tech Group"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-4"text-xl text-gray-600 mb-8"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"container mx-auto px-4 py-20"text-5 xl font-bold text-white mb-6"text-xl text-gray-300 mb-8 max-w-3 xl"bg-slate-800 p-8 rounded-lg"text-2 xl font-bold text-white mb-4"text-gray-300"container mx-auto px-4 py-16"text-center"text-4 xl font-bold text-gray-900 mb-6"text-xl text-gray-600 mb-8"min-h-screen bg-white"
<div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"container mx-auto px-4 text-center"
<h1 className="
            Privacy Policy</h1></h1>
<p className="text-xl md:text-2 xl mb-8 max-w-3 xl mx-auto"flex items-center justify-center text-sm text-blue-200"
<Calendar className="
            Last updated: {lastUpdated}
          </div></div>
</div>
<div className="py-20"container mx-auto px-4"
<div className="
            {/* Introduction */}</div>
<section></section>
<h2 className="text-3 xl font-bold text-gray-900 mb-6"text-gray-700 leading-relaxed mb-4"
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
<p className="
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p></section>

            {/* Information We Collect */}
            <section></section>
<h2 className="text-3 xl font-bold text-gray-900 mb-6"grid md:grid-cols-3 gap-6"
                {dataTypes.map((type, index) => (</div>
<div key={index} className="
<div className="flex items-center mb-4"h-6 w-6 text-blue-600 mr-3"
<h3 className="
<p className="text-gray-700 mb-3"text-sm text-gray-600 space-y-1"
                      {type.examples.map((example, idx) => (
  // TODO: Add parameters
)
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul></li>
                ))}
              </li></section>

            {/* How We Use Information */}
            <section></section>
<h2 className="
<div className="grid md:grid-cols-2 gap-6"flex items-start"
<div className="
<purpose.icon className="h-6 w-6 text-blue-600"text-lg font-semibold text-gray-900 mb-2"
<p className="
</li>
                ))}
              </li></section>

            {/* Data Security */}
            <section></section>
<h2 className="text-3 xl font-bold text-gray-900 mb-6"bg-blue-50 border border-blue-200 rounded-lg p-6"
<div className="
<Shield className="h-6 w-6 text-blue-600 mr-3 mt-1"text-lg font-semibold text-gray-900 mb-2"
<p className="
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
<ul className="text-gray-700 space-y-2"text-3 xl font-bold text-gray-900 mb-6"
<div className="
                {rights.map((right, index) => (</div>
<div key={index} className="bg-white border border-gray-200 rounded-lg p-6"flex items-center mb-3"
<right.icon className="
<h3 className="text-lg font-semibold text-gray-900"text-gray-700"
                ))}
              </li></section>

            {/* Contact Information */}
            <section className="
<h2 className="text-3 xl font-bold text-gray-900 mb-6"text-gray-700 mb-6"
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
<div className="
<div className="flex items-center"h-5 w-5 text-blue-600 mr-3"
<span className="
<div className="flex items-center"h-5 w-5 text-blue-600 mr-3"
<span className="
<div className="flex items-center"h-5 w-5 text-blue-600 mr-3"
<span className="
<div className="flex items-center"h-5 w-5 text-blue-600 mr-3"
<span className="
</li></section>

            {/* Updates */}
            <section></section>
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"flex items-start"
<AlertTriangle className="
<div></div>
<h3 className="text-lg font-semibold text-gray-900 mb-2"text-gray-700"
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the " date."
                    </p></li>
</li></li>
</section></li>
</li></li>
</li>
  );
}
;
export default PrivacyPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap } from 'lucide-react';
export default function PagePage() {
  const features = [
    {
      title: ",
      description: "Cutting-edge solutions powered by the latest technology"w-8 h-8"Secure & Reliable"Enterprise-grade security and reliability for your business",
      icon: <Shield className="Fast Implementation",
      description: ",
      icon: <Zap className="w-8 h-8">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description"Advanced  solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="text-center mb-16">
          <h1 className="text-xl text-gray-300 max-w-3 xl mx-auto">
            Advanced  solutions by Zion Tech Group
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className=">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
