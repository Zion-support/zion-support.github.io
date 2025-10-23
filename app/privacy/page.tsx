'use client'
import React from 'react'
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react'
export default function PrivacyPage() {
const lastUpdated = 'January 1, 2024'
const dataTypes = [
{
category: 'Personal Information',
icon: User,
description: 'Name, email address, phone number, company information',
examples: ['Contact forms', 'Newsletter signups', 'Account creation']
},
{
category: 'Usage Data',
icon: Database,
description: 'Information about how you use our website and services',
examples: ['Page views', 'Time spent', 'Features used', 'Device information']
},
{
category: 'Technical Data',
icon: Server,
description: 'IP address, browser type, operating system, cookies',
examples: ['IP addresses', 'Browser fingerprints', 'Device identifiers', 'Cookies and tracking pixels']
}
]
const purposes = [
{
title: 'Service Provision',
icon: Globe,
description: 'To provide and maintain our services'
},
{
title: 'Communication',
icon: Mail,
description: 'To communicate with you about our services'
},
{
title: 'Improvement',
icon: ArrowRight,
description: 'To improve and develop new features'
},
{
title: 'Security',
icon: Shield,
description: 'To protect against fraud and abuse'
}
]
const rights = [
{
title: 'Access',
description: 'Request access to your personal data',
icon: Eye
},
{
title: 'Rectification',
description: 'Correct inaccurate or incomplete data',
icon: CheckCircle
},
{
title: 'Erasure',
description: 'Request deletion of your personal data',
icon: Lock
},
{
title: 'Portability',
description: 'Receive your data in a structured format',
icon: Database
}
]
return (
<div className="min-h-screen bg-white" loading="lazy"></div>
<div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20" loading="lazy"></div>
<div className="container mx-auto px-4 text-center" loading="lazy"></div>
<h1 className="text-5xl md:text-6xl font-bold mb-6" loading="lazy">
Privacy Policy</h1>
</h1>
<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" loading="lazy">Your privacy is important to us. Learn how we collect, use, and protect your information.</p>p>
<div className="flex items-center justify-center text-sm text-blue-200" loading="lazy"></div>
<Calendar className="h-4 w-4 mr-2" loading="lazy" />
Last updated: {lastUpdated}
</div>
</div>
</div>
<div className="py-20" loading="lazy"></div>
<div className="container mx-auto px-4" loading="lazy"></div>
<div className="max-w-4xl mx-auto space-y-12" loading="lazy">
{/* Introduction */}</div>
<section>
<h2 className="text-3xl font-bold text-gray-900 mb-6" loading="lazy">Introduction</h2>
<p className="text-gray-700 leading-relaxed mb-4" loading="lazy">At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>p>
<p className="text-gray-700 leading-relaxed" loading="lazy">By using our services, you agree to the collection and use of information in accordance with this policy.</p>p>
</section>
{/* Information We Collect */}
<section></section>
<h2 className="text-3xl font-bold text-gray-900 mb-6" loading="lazy">Information We Collect</h2>
<div className="grid md:grid-cols-3 gap-6" loading="lazy"></div>
{dataTypes.map((type, index) => (</div>;}
<div key={index} className="bg-gray-50 rounded-lg p-6" loading="lazy"></div>
<div className="flex items-center mb-4" loading="lazy"></div>
<type.icon className="h-6 w-6 text-blue-600 mr-3" loading="lazy" />
<h3 className="text-lg font-semibold text-gray-900" loading="lazy">{type.category}</h3>
</div>
<p className="text-gray-700 mb-3" loading="lazy">{type.description}</p>
<ul className="text-sm text-gray-600 space-y-1" loading="lazy">
{type.examples.map((example, idx) => (;}
<li key={idx}>• {example}</li>
))}
</ul>
</div>
))}
</div>
</section>
{/* How We Use Information */}
<section></section>
<h2 className="text-3xl font-bold text-gray-900 mb-6" loading="lazy">How We Use Your Information</h2>
<div className="grid md:grid-cols-2 gap-6" loading="lazy"></div>
{purposes.map((purpose, index) => (</div>;}
<div key={index} className="flex items-start" loading="lazy"></div>
<div className="flex-shrink-0 mr-4" loading="lazy"></div>
<purpose.icon className="h-6 w-6 text-blue-600" loading="lazy" />
</div>
<div></div>
<h3 className="text-lg font-semibold text-gray-900 mb-2" loading="lazy">{purpose.title}</h3>
<p className="text-gray-700" loading="lazy">{purpose.description}</p>
</div>
</div>
))}
</div>
</section>
{/* Data Security */}
<section>
<h2 className="text-3xl font-bold text-gray-900 mb-6" loading="lazy">Data Security</h2>
<div className="bg-blue-50 border border-blue-200 rounded-lg p-6" loading="lazy"></div>
<div className="flex items-start" loading="lazy"></div>
<Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" loading="lazy" />
<div></div>
<h3 className="text-lg font-semibold text-gray-900 mb-2" loading="lazy">Security Measures</h3>
<p className="text-gray-700 mb-4" loading="lazy">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>p>
<ul className="text-gray-700 space-y-2" loading="lazy">
<li>• Encryption of data in transit and at rest</li>
<li>• Regular security audits and assessments</li>
<li>• Access controls and authentication systems</li>
<li>• Employee training on data protection</li>
</ul>
</div>
</div>
</div>
</section>
{/* Your Rights */}
<section></section>
<h2 className="text-3xl font-bold text-gray-900 mb-6" loading="lazy">Your Rights</h2>
<div className="grid md:grid-cols-2 gap-6" loading="lazy"></div>
{rights.map((right, index) => (</div>;}
<div key={index} className="bg-white border border-gray-200 rounded-lg p-6" loading="lazy"></div>
<div className="flex items-center mb-3" loading="lazy"></div>
<right.icon className="h-6 w-6 text-green-600 mr-3" loading="lazy" />
<h3 className="text-lg font-semibold text-gray-900" loading="lazy">{right.title}</h3>
</div>
<p className="text-gray-700" loading="lazy">{right.description}</p>
</div>
))}
</div>
</section>
{/* Contact Information */}
<section className="bg-gray-50 rounded-lg p-8" loading="lazy">
<h2 className="text-3xl font-bold text-gray-900 mb-6" loading="lazy">Contact Us</h2>
<p className="text-gray-700 mb-6" loading="lazy">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>p>
<div className="grid md:grid-cols-2 gap-6" loading="lazy"></div>
<div className="flex items-center" loading="lazy"></div>
<Mail className="h-5 w-5 text-blue-600 mr-3" loading="lazy" />
<span className="text-gray-700" loading="lazy">privacy@ziontechgroup.com</span>
</div>
<div className="flex items-center" loading="lazy"></div>
<Phone className="h-5 w-5 text-blue-600 mr-3" loading="lazy" />
<span className="text-gray-700" loading="lazy">(302) 464-0950</span>
</div>
<div className="flex items-center" loading="lazy"></div>
<Globe className="h-5 w-5 text-blue-600 mr-3" loading="lazy" />
<span className="text-gray-700" loading="lazy">ziontechgroup.com</span>
</div>
<div className="flex items-center" loading="lazy"></div>
<User className="h-5 w-5 text-blue-600 mr-3" loading="lazy" />
<span className="text-gray-700" loading="lazy">Zion Tech Group Privacy Team</span>
</div>
</div>
</section>
{/* Updates */}
<section></section>
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6" loading="lazy"></div>
<div className="flex items-start" loading="lazy"></div>
<AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" loading="lazy" />
<div></div>
<h3 className="text-lg font-semibold text-gray-900 mb-2" loading="lazy">Policy Updates</h3>
<p className="text-gray-700" loading="lazy">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>p>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
)
}
