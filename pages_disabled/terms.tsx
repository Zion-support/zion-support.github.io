



import Head from 'next/head';
import Link from 'next/link';



export default function Terms() {
  const contact = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our micro SaaS products, AI services, and IT solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, zion tech group" />
        <link rel="canonical" href={`${contact.site}/terms`} />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance of Terms</h2>
              <p className="text-slate-300 mb-4">
                By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Use License</h2>
              <p className="text-slate-300 mb-4">
                Permission is granted to temporarily download one copy of Zion Tech Group&apos;s services for personal
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Service Availability</h2>
              <p className="text-slate-300 mb-4">
                Zion Tech Group strives to maintain high service availability but does not guarantee uninterrupted access.
                We reserve the right to modify, suspend, or discontinue any service at any time without notice.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">4. User Responsibilities</h2>
              <p className="text-slate-300 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-2">
                <li>Maintaining the confidentiality of their account credentials</li>
                <li>All activities that occur under their account</li>
                <li>Complying with all applicable laws and regulations</li>
                <li>Not using the services for any unlawful or prohibited purpose</li>
              </ul>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Payment Terms</h2>
              <p className="text-slate-300 mb-4">
                Payment terms vary by service. All fees are non-refundable unless otherwise specified.
                We reserve the right to change our pricing with 30 days notice to existing customers.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Limitation of Liability</h2>
              <p className="text-slate-300 mb-4">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the services, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Privacy Policy</h2>
              <p className="text-slate-300 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services.
              </p>
            </section>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Contact Information</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-900/60 p-6 rounded-lg border border-white/10">
                <p className="text-slate-300 mb-2">
                  <strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-blue-400 hover:text-blue-300">{contact.phone}</a>
                </p>
                <p className="text-slate-300 mb-2">
                  <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-300">{contact.email}</a>
                </p>
                <p className="text-slate-300">
                  <strong>Address:</strong> {contact.address}
                </p>






              </div>
            </section>
          </div>
          <div className="mt-12 text-center">
            <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
            <section className="mb-12">;
              <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Contact Information</h2>;
              <p className="text-slate-300 mb-4">;
                If you have any questions about these Terms of Service, please contact us:;
              </p>;
              <div className="bg-slate-900/60 p-6 rounded-lg border border-white/10">;
                <p className="text-slate-300 mb-2">;
                  <strong>Phone:</strong> <a href={`tel:${contact && contact.phone.replace(/[^\d+]/g,'')}`} className="text-blue-400 hover:text-blue-300">{contact && contact.phone}</a>;
                </p>;
                <p className="text-slate-300 mb-2">;
                  <strong>Email:</strong> <a href={`mailto:${contact && contact.email}`} className="text-blue-400 hover:text-blue-300">{contact && contact.email}</a>;
                </p>;
                <p className="text-slate-300">;
                  <strong>Address:</strong> {contact && contact.address}
import Head from 'next / head';
import Link from 'next / link';
;
export default /**
 * Terms - Function description
 */
function Terms() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com';
  }
  );
}
ursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react';
] 
};
const termsSections = [ {
  Please read these terms carefully before using our website or services. </p> </div> </section> 
};
{
  title: 'Service Description',
content: `Zion Tech Group provides AI consciousness technology, quantum computing solutions, autonomous systems, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`;
icon: <Globe className="w-6 h-6 text-green-400" /> 
};
{
  title: 'User Responsibilities',
content: `Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users must not use our services for any illegal or unauthorized purpose, or in any way that violates applicable laws or regulations.`;
icon: <Users className="w-6 h-6 text-yellow-400" /> 
};
{
  title: 'Privacy and Data Protection',
content: `Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. We are committed to protecting your data in accordance with applicable data protection laws.`;
icon: <Eye className="w-6 h-6 text-cyan-400" /> 
};
{
  title: 'Intellectual Property Rights',
content: `All content on this website, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Zion Tech Group or its licensors and is protected by copyright, trademark, and other intellectual property laws.`;
icon: <Shield className="w-6 h-6 text-red-400" /> 
}];
const importantNotices = [ {
  title: 'AI Technology Risks';
content: 'Our AI consciousness technology involves experimental and cutting-edge research. Users acknowledge that such technology may carry inherent risks and uncertainties.',
type: 'warning' 
};
{
  title: 'Quantum Computing Limitations';
content: 'Quantum computing services are subject to current technological limitations and may not be suitable for all applications or use cases.',
type: 'info' 
};
{
  title: 'Service Availability';
content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services due to factors beyond our control.',
type: 'info' 
}];

  title: 'Acceptance of Terms';
icon: <CheckCircle className="w-6 h-6 text-green-400" />;
content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.' 
};
{
  title: 'Use License';
icon: <Scale className="w-6 h-6 text-blue-400" />;
content: 'Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.' 
};
{
  title: 'Disclaimer';
icon: <AlertTriangle className="w-6 h-6 text-orange-400" />;
content: 'The materials on our website are provided on an "as is" basis. We make no warranties, expressed or implied.' 
};
{
  title: 'Limitations';
icon: <Shield className="w-6 h-6 text-purple-400" />;
content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.' 
}];

}</ul> 'Unauthorized access to our systems or networksInterference with service operationDistribution of malware or harmful codeViolation of third-party rightsAttempts to gain unauthorized accessUse of services for illegal activities' ];
'No guarantee of uninterrupted service';
'Limitation of liability for damages';
'No responsibility for third-party content';
'Service availability subject to change';
'Technical support during business hours only' ];
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.6 

}> <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" > Terms of Service </h1> <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" > Please read these terms carefully before using our services. They govern your use of Zion Tech Group's technology solutions. </p> </div> </motion.div> </div> </section> <motion.div initial= {
  {
  opacity: 0, x: -20 

}whileInView= {
  {
  opacity: 1, x: 0 

}transition= {
  {
  duration: 0.6 

}> <h2 className="text-4xl font-bold mb-6 text-white" > Understanding Our Terms </h2> <p className="text-lg text-gray-300 mb-6 leading-relaxed" > These Terms of Service establish the rules and guidelines for using Zion Tech Group's services. They protect both you and us, ensuring a clear understanding of our relationship and responsibilities. </p> </p> <div className="flex items-center gap-4 text-cyan-400" > <Scale className="w-6 h-6" /> <span className="font-medium" >Clear and fair terms</span> </div> </motion.div> <motion.div > <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30" > <div className="text-center space-y-6" > <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto" > <FileText className="w-12 h-12 text-white" /> </div> <h3 className="text-2xl font-bold text-white" >Legal Framework</h3> <p className="text-gray-300" >Protecting your rights and ours</p> <div className="grid grid-cols-2 gap-4 text-sm" > <div className="text-center" > <div className="text-2xl font-bold text-cyan-400" >100%</div> <div className="text-gray-400" >Transparent</div> </div> <div className="text-center" > <div className="text-2xl font-bold text-purple-400" >24/7</div> <div className="text-gray-400" >Support</div> </div> </div> </div> </div> </motion.div> </div> </div> </section> > <h2 className="text-4xl font-bold mb-4 text-white" >Key Terms and Conditions</h2> <p className="text-xl text-gray-300" >Essential information about using our services</p> </motion.div> </li>) ) 
}</ul> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold mb-4 text-white" >Prohibited Activities</h2> <p className="text-xl text-gray-300" >Activities that are not allowed when using our services</p> </motion.div> <motion.div > <div className="flex items-center gap-4 mb-6" > <AlertTriangle className="w-8 h-8 text-red-400" /> <h3 className="text-2xl font-bold text-white" >What You Cannot Do</h3> </div> </div>) ) 
}</div> <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg" > <p className="text-red-400 text-sm" > <strong>Note:</strong> Violation of these prohibitions may result in immediate suspension or termination of your access to our services, and may be reported to appropriate authorities. </p> </div> </motion.div> </div> </section> > <h2 className="text-4xl font-bold mb-4 text-white" >Service Limitations and Disclaimers</h2> <p className="text-xl text-gray-300" >Important information about service availability and warranties</p> </motion.div> <motion.div > <div className="flex items-center gap-4 mb-6" > <Shield className="w-8 h-8 text-yellow-400" /> <h3 className="text-2xl font-bold text-white" >Service Limitations</h3> </div> </div>) ) 
}</div> <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg" > <p className="text-yellow-400 text-sm" > <strong>Important:</strong> These limitations are designed to set realistic expectations and protect both parties. We strive to provide excellent service but cannot guarantee perfection in all circumstances. </p> </div> </motion.div> </div> </section> > <div> <h2 className="text-3xl font-bold text-white mb-6" >Detailed Terms and Conditions</h2> <div className="space-y-8" > <div> <h3 className="text-2xl font-bold text-white mb-4" >1. Service Agreement</h3> <p className="text-gray-300 mb-4 leading-relaxed" > This agreement is between Zion Tech Group ("we, " "us, " or "our") and you ("user, " "client, " or "customer") . By using our services, you agree to these terms and acknowledge that you have read and understood them. </p> <p className="text-gray-300 leading-relaxed" > We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of services after changes constitutes acceptance of the new terms. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >2. Service Description and Availability</h3> <p className="text-gray-300 mb-4 leading-relaxed" > Our services include AI and machine learning solutions, quantum computing services;
IT infrastructure consulting, micro SAAS applications, business automation, and technical support. </p> <p className="text-gray-300 leading-relaxed" > We strive to maintain high service availability but cannot guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >3. User Accounts and Responsibilities</h3> <p className="text-gray-300 mb-4 leading-relaxed" > You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use. </p> <p className="text-gray-300 leading-relaxed" > You agree to provide accurate, current, and complete information when creating accounts and using our services. You must use services only for lawful purposes and in compliance with applicable laws and regulations. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >4. Payment Terms and Billing</h3> <p className="text-gray-300 mb-4 leading-relaxed" > Service fees are billed according to the pricing schedule in effect at the time of service. All fees are non-refundable except as expressly stated in our refund policy. </p> <p className="text-gray-300 leading-relaxed" > We may change our pricing with 30 days'notice. Late payments may result in service suspension or termination. You are responsible for all applicable taxes. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >5. Intellectual Property Rights</h3> <p className="text-gray-300 mb-4 leading-relaxed" > Our services, including software, content, and technology, are protected by copyright;
trademark, and other intellectual property laws. You retain rights to your own content. </p> <p className="text-gray-300 leading-relaxed" > You may not copy, modify, distribute, sell, or lease any part of our services without our written permission. You may not reverse engineer or attempt to extract source code. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >6. Data Privacy and Security</h3> <p className="text-gray-300 mb-4 leading-relaxed" > We are committed to protecting your privacy and data security. Our collection and use of personal information is governed by our Privacy Policy. </p> <p className="text-gray-300 leading-relaxed" > We implement appropriate security measures to protect your data, but cannot guarantee absolute security. You are responsible for maintaining the security of your own systems. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >7. Limitation of Liability</h3> <p className="text-gray-300 mb-4 leading-relaxed" > To the maximum extent permitted by law, our liability for any claims arising from the use of our services is limited to the amount you paid for services in the 12 months preceding the claim. </p> <p className="text-gray-300 leading-relaxed" > We are not liable for indirect, incidental, special, consequential, or punitive damages, including lost profits, data, or business opportunities. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >8. Termination and Suspension</h3> <p className="text-gray-300 mb-4 leading-relaxed" > Either party may terminate this agreement with written notice. We may suspend or terminate services immediately for violations of these terms or for non-payment. </p> <p className="text-gray-300 leading-relaxed" > Upon termination, your access to services will cease, and we may delete your data in accordance with our data retention policies. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >9. Governing Law and Disputes</h3> <p className="text-gray-300 mb-4 leading-relaxed" > These terms are governed by the laws of Delaware, United States. Any disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. </p> <p className="text-gray-300 leading-relaxed" > You agree to resolve disputes individually and waive any right to participate in class action lawsuits or class-wide arbitration. </p> </div> <div> <h3 className="text-2xl font-bold text-white mb-4" >10. Contact Information</h3> <p className="text-gray-300 mb-4 leading-relaxed" > For questions about these terms or our services, please contact us at: </p> <div className="bg-gray-800/50 rounded-lg p-4 space-y-2" > <p className="text-gray-300" > <strong>Email:</strong> kleber@ziontechgroup.com </p> <p className="text-gray-300" > <strong>Phone:</strong> +1 302 464 0950 </p> <p className="text-gray-300" > <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709 </p> </div> </div> </div> </div> </motion.div> <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-6" /> <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Terms of Service </h1> <p className="text-xl text-gray-300 mb-8" > Please read these terms and conditions carefully before using our services. </p> <div className="flex items-center justify-center space-x-2 text-sm text-gray-400" > <Clock className="w-4 h-4" /> <span>Last updated: January 1, 2025</span> </div> </motion.div> </div> </section> > <h2 className="text-4xl font-bold mb-6" >Terms Overview</h2> <p className="text-xl text-gray-400 leading-relaxed" > These Terms of Service govern your use of Zion Tech Group's website and services. By using our services, you agree to these terms. </p> </motion.div> </motion.div>) ) 
}</div> </div> </section> > <div className="text-center mb-16" > <h2 className="text-4xl font-bold mb-4" >Detailed Terms and Conditions</h2> <p className="text-xl text-gray-400" > Complete terms governing your use of our services. </p> </div> <p> The following terms shall have the meanings set forth below: </p> <ul className="list-disc list-inside space-y-2 ml-4" > <li><strong>"Company" </strong> refers to Zion Tech Group</li> <li><strong>"Services" </strong> refers to our website, platforms, and technology solutions</li> <li><strong>"User" </strong> refers to any individual or entity using our services</li> <li><strong>"Content" </strong> refers to all text, data, information, software, and other materials</li> <li><strong>"Agreement" </strong> refers to these Terms of Service</li> </ul> </div> </div> <p> By accessing, browsing, or using our services, you acknowledge that you have read;
understood, and agree to be bound by these Terms of Service and our Privacy Policy. </p> <p> If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting. </p> </div> </div> <p> You may use our services for lawful purposes only. You agree not to use the services: </p> <ul className="list-disc list-inside space-y-2 ml-4" > <li>In any way that violates applicable laws or regulations</li> <li>To transmit or distribute viruses, malware, or other harmful code</li> <li>To interfere with or disrupt the integrity or performance of our services</li> <li>To attempt to gain unauthorized access to our systems</li> <li>To impersonate any person or entity or misrepresent your affiliation</li> </ul> <h4 className="text-lg font-semibold text-white" >Account Security</h4> <p> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. </p> </div> </div> <p> All content, features, and functionality of our services are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws. </p> <h4 className="text-lg font-semibold text-white" >License Grant</h4> <p> Subject to these terms, we grant you a limited, non-exclusive, non-transferable license to access and use our services for your personal or business use. </p> <h4 className="text-lg font-semibold text-white" >Restrictions</h4> <ul className="list-disc list-inside space-y-2 ml-4" > <li>You may not reproduce, distribute, or create derivative works</li> <li>You may not reverse engineer or attempt to extract source code</li> <li>You may not remove or alter any proprietary notices</li> </ul> </div> </div> <p> Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices. </p> <p> By using our services, you consent to the collection and use of information as outlined in our Privacy Policy. </p> </div> </div> <p> We strive to maintain service availability but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or technical issues. </p> <h4 className="text-lg font-semibold text-white" >Disclaimer of Warranties</h4> <p> Our services are provided "as is" and "as available" without warranties of any kind;
either express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose. </p> <h4 className="text-lg font-semibold text-white" >Limitation of Liability</h4> <p> To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. </p> </div> </div> <p> We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever, including breach of these terms. </p> <p> Upon termination, your right to use our services will cease immediately, and you must discontinue all use of our services. </p> </div> </div> <p> These terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to conflict of law principles. </p> <p> Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Delaware. </p> </div> </div> <p> If you have any questions about these Terms of Service, please contact us: </p> <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6" > <h4 className="text-lg font-semibold text-white mb-3" >Zion Tech Group</h4> <div className="space-y-2" > <p>Email: legal@ziontechgroup.com</p> <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p> <p>Phone: +1 302 464 0950</p> </div> </div> </div> </div> </motion.div> </div> </section> > <Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" /> <h3 className="text-2xl font-bold mb-4" >Agreement Acknowledgment</h3> <p className="text-gray-300 mb-6" > By using our services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services. </p> <p className="text-sm text-gray-400" > These terms are effective as of the date last updated and will remain in effect until modified or terminated. </p> </motion.div> </div> </section> </div> </Layout>) 
};
export default Terms;
</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.6 

origin/main
    title: 'Limitations',
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    content: 'In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.'
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
export default function Terms() {
  return (
    <>;
      <Head>;
        <title > Terms of Service - Zion Tech Group</title>;
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our micro SaaS products, AI services, and IT solutions." />;
        <meta name="keywords" content="terms of service, terms and conditions, legal, zion tech group" />;
        <link rel="canonical" href={`${contact.site}/terms`} />;
      </Head>;
      <main className="min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white">;
        <div className="max - w-4xl mx - auto py - 20 px - 4">;
          <h1 className="text - 4xl md:text - 5xl font - extrabold tracking - tight mb - 8">;
            Terms of Service;
          </h1>;
          <div className="prose prose - invert max - w-none">;
            <p className="text - lg text - slate - 300 mb - 8">;
              Last updated: {new Date ().toLocaleDateString ()}
            </p>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">1. Acceptance of Terms</h2>;
              <p className="text - slate - 300 mb - 4">;
                By accessing and using Zion Tech Group & apos;s services, you accept and agree to be bound by the terms;
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">2. Use License</h2>;
              <p className="text - slate - 300 mb - 4">;
                Permission is granted to temporarily download one copy of Zion Tech Group & apos;s services for personal,
                non - commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:;
              </p>;
              <ul className="list - disc list - inside text - slate - 300 mb - 4 space - y-2">;
                <li > modify or copy the materials</li>;
                <li > use the materials for any commercial purpose or for any public display</li>;
                <li > attempt to reverse engineer any software contained on the website</li>;
                <li > remove any copyright or other proprietary notations from the materials</li>;
              </ul>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">3. Service Availability</h2>;
              <p className="text - slate - 300 mb - 4">;
                Zion Tech Group strives to maintain high service availability but does not guarantee uninterrupted access.;
                We reserve the right to modify, suspend, or discontinue any service at any time without notice.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">4. User Responsibilities</h2>;
              <p className="text - slate - 300 mb - 4">;
                Users are responsible for:;
              </p>;
              <ul className="list - disc list - inside text - slate - 300 mb - 4 space - y-2">;
                <li > Maintaining the confidentiality of their account credentials</li>;
                <li > All activities that occur under their account</li>;
                <li > Complying with all applicable laws and regulations</li>;
                <li > Not using the services for any unlawful or prohibited purpose</li>;
              </ul>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">5. Payment Terms</h2>;
              <p className="text - slate - 300 mb - 4">;
                Payment terms vary by service. All fees are non - refundable unless otherwise specified.;
                We reserve the right to change our pricing with 30 days notice to existing customers.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">6. Limitation of Liability</h2>;
              <p className="text - slate - 300 mb - 4">;
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability;
                to use the services, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified;
                orally or in writing of the possibility of such damage.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">7. Privacy Policy</h2>;
              <p className="text - slate - 300 mb - 4">;
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services.;
              </p>;
            </section>;
            <section className="mb - 12">;
              <h2 className="text - 2xl font - bold mb - 4 text - blue - 400">8. Contact Information</h2>;
              <p className="text - slate - 300 mb - 4">;
                If you have any questions about these Terms of Service, please contact us:;
              </p>;
              <div className="bg - slate - 900 / 60 p - 6 rounded - lg border border - white / 10">;
                <p className="text - slate - 300 mb - 2">;
                  <strong > Phone:</strong> <a href={`tel:${contact.phone.replace (/[^\d+]/g, '')}`} className="text - blue - 400 hover:text - blue - 300">{contact.phone}</a>;
                </p>;
                <p className="text - slate - 300 mb - 2">;
                  <strong > Email:</strong> <a href={`mailto:${contact.email}`} className="text - blue - 400 hover:text - blue - 300">{contact.email}</a>;
                </p>;
                <p className="text - slate - 300">;
                  <strong > Address:</strong> {contact.address}
                </p>;
              </div>;
            </section>;
          </div>;


          <div className="mt - 12 text - center">;
            <Link href="/" className="px - 8 py - 3 bg - blue - 600 hover:bg - blue - 700 rounded - lg font - semibold transition - colors">;


              Back to Home;
            </Link>;
          </div>;
        </div>;
      </main>;





                      {service.icon}
                    </div>;
                  </div>;
                  <div className="p - 6">;
                    <h3 className="text - xl font - bold mb - 4 group - hover:text - cyan - 400 transition - colors duration - 300">;
                      {service.category}




                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Restrictions:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {service.restrictions.map((restriction, restrictionIndex) => (
                          <li key={restrictionIndex} className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />

            transition={{ duration: 0 && 0.8 }}
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
              Service Categories & Terms;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Detailed terms for each category of services we provide;
            </p>;
          </motion && motion.div>;



          <div className="grid lg:grid-cols-2 gap-8">;
            {serviceCategories && serviceCategories.map((service, index) => (;
              <motion&& motion.div
                key={service && service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                className="group">;
                <div className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">;
                  <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">;
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">;
                      {service && service.icon}
                    </div>;
                  </div>;
                  <div className="p-6">;
                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">;
                      {service && service.category}
                    </h3>;
                    <p className="text-gray-300 mb-4">{service && service.description}</p>;
                    <div className="mb-4">;
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>;
                      <ul className="text-sm text-gray-300 space-y-1">;
                        {service && service.features.map((feature, featureIndex) => (;
                          <li key={featureIndex} className="flex items-start gap-2">;
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0 && 0.5 flex-shrink-0" />;
                            {feature}
                          </li>;



                        ))}
                      </ul>;
                    </div>;
                    <div>;
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Restrictions:</h4>;
                      <ul className="text-sm text-gray-300 space-y-1">;
                        {service && service.restrictions.map((restriction, restrictionIndex) => (;
                          <li key={restrictionIndex} className="flex items-start gap-2">;
                            <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0 && 0.5 flex-shrink-0" />;
                            {restriction}
                          </li>;
                        ))}
                      </ul>;
    'Unauthorized access to our systems or networksInterference with service operationDistribution of malware or harmful codeViolation of third-party rightsAttempts to gain unauthorized accessUse of services for illegal activities';
  ];





  const limitations = [
    'Services provided "as is" without warrantiesNo guarantee of uninterrupted serviceLimitation of liability for damagesNo responsibility for third-party contentService availability subject to changeTechnical support during business hours only'

              </div>
            </motion.div>
          </div>





              className="p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl"
            >
              <Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h3>
              <p className="text-gray-300 mb-6">
                By using our services, you acknowledge that you have read and understood these Terms of Service
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.
              </p>
              <p className="text-sm text-gray-400">
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Terms;
            </div>
          </section>



              className="p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl">;
              <Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" />;
              <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h3>;
              <p className="text-gray-300 mb-6">;
                By using our services, you acknowledge that you have read and understood these Terms of Service ;
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.;
              </p>;
              <p className="text-sm text-gray-400">;
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
};
export default Terms;
            </div>;
          </section>;




          {/* Contact Information */}
          <section className="py-20 px-4">;
            <div className="max-w-4xl mx-auto text-center">;
              <motion&& motion.div


}
export default TermsPage;


}> <h2 className="text-4xl font-bold mb-6 text-white" > Questions About These Terms? </h2> <p className="text-xl text-gray-300 mb-8" > If you have any questions about these Terms of Service or need clarification on any provision, please don't hesitate to reach out to us. </p> <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <Mail className="w-5 h-5" /> Email Us </Link> <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <User className="w-5 h-5" /> Contact Form </Link> </div> </motion.div> </div> </section> </main> </Layout> </ErrorBoundary>) 
};export default TermsPage;


}> <h2 className="text-4xl font-bold mb-6 text-white" > Questions About These Terms? </h2> <p className="text-xl text-gray-300 mb-8" > If you have any questions about these Terms of Service or need clarification on any provision, please don't hesitate to reach out to us. </p> <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <Mail className="w-5 h-5" /> Email Us </Link> <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <User className="w-5 h-5" /> Contact Form </Link> </div> </motion.div> </div> </section> </main> </Layout> </ErrorBoundary>)
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">;
                    <User className="w-5 h-5" />;
                    Contact Form;
                  </a>;
                </div>;
              </motion && motion.div>;
            </div>;
          </section>;
        </main>;
      </Layout>;
    </ErrorBoundary>;
  );
};
export default TermsPage;
}> <h2 className="text-4xl font-bold mb-6 text-white" > Questions About These Terms? </h2> <p className="text-xl text-gray-300 mb-8" > If you have any questions about these Terms of Service or need clarification on any provision, please don't hesitate to reach out to us. </p> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <Mail className="w-5 h-5" /> Email Us </Link> <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" > <User className="w-5 h-5" /> Contact Form </Link> </div> </motion && motion.div> </div> </section> </main> </Layout> </ErrorBoundary>) ;
};export default TermsPage;







export default TermsPage;





            </motion.div>;
          </div>;
        </section>;
        {/* Agreement Section */}
        <section className="py - 20">;
          <div className="max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p - 8 bg - gradient - to - br from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20 border border - cyan - 400 / 20 rounded - xl";
            >;
              <Scale className="w - 12 h - 12 text - cyan - 400 mx - auto mb - 4" />;
              <h3 className="text - 2xl font - bold mb - 4">Agreement Acknowledgment</h3>;
              <p className="text - gray - 300 mb - 6">;
                By using our services, you acknowledge that you have read and understood these Terms of Service;
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.;
              </p>;
              <p className="text - sm text - gray - 400">;
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}
;
export default Terms;
            </div>;
          </section>;
          {/* Contact Information */}
          <section className="py - 20 px - 4">;
            <div className="max - w-4xl mx - auto text - center">;
              <motion.div;
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6 }}
              >;
                <h2 className="text - 4xl font - bold mb - 6 text - white">;
                  Questions About These Terms?;
                </h2>;
                <p className="text - xl text - gray - 300 mb - 8">;
                  If you have any questions about these Terms of Service or need clarification on any;
                  provision, please don't hesitate to reach out to us.;
                </p>;
                <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
                  <a;
                    href="mailto:kleber@ziontechgroup.com";
                    className="bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2";
                  >;
                    <Mail className="w - 5 h - 5" />;
                    Email Us;
                  </a>;
                  <a;
                    href="/contact";
                    className="border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - lg font - semibold hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2";
                  >;
                    <User className="w - 5 h - 5" />;
                    Contact Form;
                  </a>;
                </div>;
              </motion.div>;
            </div>;
          </section>;
        </main>;
      </Layout>;
    </ErrorBoundary>);
}
export default TermsPage;
}> <h2 className="text - 4xl font - bold mb - 6 text - white" > Questions About These Terms? </h2> <p className="text - xl text - gray - 300 mb - 8" > If you have any questions about these Terms of Service or need clarification on any provision, please don't hesitate to reach out to us. </p> <a href="mailto:kleber@ziontechgroup.com" className="bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2" > <Mail className="w - 5 h - 5" /> Email Us </Link> <a href="/contact" className="border - 2 border - cyan - 400 text - cyan - 400 px - 8 py - 4 rounded - lg font - semibold hover:bg - cyan - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105 inline - flex items - center gap - 2" > <User className="w - 5 h - 5" /> Contact Form </Link> </div> </motion.div> </div> </section> </main> </Layout> </ErrorBoundary>);
}export default TermsPage;
;



