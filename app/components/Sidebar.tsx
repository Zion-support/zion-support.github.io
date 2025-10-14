import React from "react";
import { Helmet } from "react-helmet-async";

const SidebarPage = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 md:hidden">
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />
        <div className="fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-cyan-500/20 overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Zion Tech Group</span>
            </div>
      ]
    },
    { name: 'Solutions', href: '/solutions', icon: GlobeAltIcon },'
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon },'
    { name: 'Blog', href: '/blog', icon: AcademicCapIcon },'
    { name: 'Resources', href: '/resources', icon: PlayIcon },'
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },'
    { name: 'Contact', href: '/contact', icon: PhoneIcon }'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">"
      <div className="fixed inset-0 bg-black bg-opacity-50">
        <div className="relative flex flex-col w-64 h-full bg-slate-900">"
        <div className="flex items-center justify-between p-4 border-b border-slate-700">"
          <span className="text-xl font-bold text-white">Menu</span>"
          <button onClick={onClose} className="text-gray-400 hover:text-white">"
            <XMarkIcon className="w-6 h-6" />"
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarPage;
