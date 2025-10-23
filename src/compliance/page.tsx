'use client';
import React from 'react';
import {ArrowLeft, FileText, Lock, CheckCircle, Users, Shield, Award, Award} from 'lucide-react';;;
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

constCompliancePage: React.FC= () =>{constcertifications= [
    { name: 'SOC2Type II', status: 'Certified'},
    {name: 'ISO27001', status: 'Certified'},
    {name: 'GDPR', status: 'Compliant'},
    {name: 'HIPAA', status: 'Compliant'},
    {name: 'PCI DSS', status: 'Compliant'}
  ];

  return (
  <><divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-blue-50"><Navigation />{/* Header */}
      <sectionclassName="bg-whiteshadow-smborder-b"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8py-6"><divclassName="flexitems-center"><ahref="/privacy" 
               className="flex items-center text-blue-600 hover:text-blue-800transition-colors"
              ><ArrowLeftclassName="w-5h-5mr-2" />Back to Privacy Policy
            </a></di></di></sectio>{/* HeroSection */}
      <sectionclassName="py-16bg-gradient-to-r from-blue-600to-purple-600text-white"><divclassName="max-w-4 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-4 xlmd:text-5 xlfont-boldmb-6"></spa></className="text-4 xlmd:text-5 xlfont-boldmb-6">Compliance & Certifications
          </h><spanclassName="text-xl text-blue-100mb-8"></spa></className="text-xl text-blue-100mb-8">We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p></di></sectio>{/* CertificationsSection */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><spanclassName="text-3 xl font-bold text-gray-900text-centermb-12"></spa></className="text-3 xl font-bold text-gray-900text-centermb-12">Our Certifications
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{certifications.map((certindex) => (
             <divkey={index}className="bg-gray-50rounded-lg p-6 text-center borderborder-gray-200"><AwardclassName="w-12h-1 2text-blue-600mb-4mx-auto" /><h3className="text-xl font-semibold text-gray-900mb-2">{cert.name}</h><divclassName="flex items-center justify-centertext-green-600"><CheckCircleclassName="w-5h-5mr-2" />{cert.status}
                </di></di>))}
          </di></di></sectio>{/* SecurityFeatures */}
      <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><spanclassName="text-3 xl font-bold text-gray-900text-centermb-12"></spa></className="text-3 xl font-bold text-gray-900text-centermb-12">Security Features
          </h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><ShieldclassName="w-12h-12text-blue-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">DataEncryption</h><pclassName="text-gray-600">All data is encrypted in transit and at rest using industry-standardencryptionprotocols.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><CheckCircleclassName="w-12h-12text-green-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">RegularAudits</h><pclassName="text-gray-600">We conduct regular security audits and penetration testing to ensure our systemsremainsecure.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><AwardclassName="w-12h-12text-purple-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">ComplianceMonitoring</h><pclassName="text-gray-600">Continuous monitoring and reporting to ensure ongoing compliance with allrelevantregulations.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><FileTextclassName="w-12h-12text-orange-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">AuditTrails</h><pclassName="text-gray-600">Comprehensive logging and monitoring for completeauditcompliance.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><UsersclassName="w-12h-12text-indigo-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">AccessControl</h><pclassName="text-gray-600">Role-based access controls andmulti-factorauthentication.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><LockclassName="w-12h-12text-red-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">SecureInfrastructure</h><pclassName="text-gray-600">End-to-end encryption for data in transit andatrest.</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-blue-600to-purple-600text-white"><divclassName="max-w-4 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Compliance Questions?
          </h><spanclassName="text-xl mb-8text-blue-100"></spa></className="text-xl mb-8text-blue-100">Our compliance team is available to answer your questions and provide additional do cumentation.
          </p><ahref="mailto:compliance@ziontechgroup.com"
             className="bg-white text-blue-600px-8 py-3 rounded-lghover:bg-blue-50transition-colorsinline-flexitems-center"
            >Contact Compliance Team
          </a><divclassName="mt-8 text-smtext-blue-200"><p>Compliance team available Monday-Friday,9AM-5PMEST</p></di></di></sectio></di><Footer /></>
  );
};

export default CompliancePage;