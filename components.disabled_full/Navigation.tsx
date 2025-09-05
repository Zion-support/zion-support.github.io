import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Brain, Menu, X, ChevronDown } from 'lucide-react'
    window.addEventListener('scroll'
    return () => window.removeEventListener('scroll'
  const navigation = [{ "name": 'Services', "href": '/services', "hasDropdown"
    { "name": 'Solutions', "href": '/solutions', "hasDropdown"
    { "name": 'About', "href"
    { "name": 'Blog', "href"
    { "name": 'Contact', "href"
  const servicesDropdown = [{ "name": 'AI Services', "href"
    { "name": 'IT Services', "href"
    { "name": 'Micro SaaS', "href"
    { "name": 'Cloud Services', "href"
    { "name": 'Cybersecurity', "href"
  const solutionsDropdown = [{ "name": 'AI Content Creation', "href"
    { "name": 'Customer Support', "href"
    { "name": 'Email Automation', "href"
    { "name": 'Project Management', "href"
              <Brain className="w-5 h-5 text-white"
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${router.pathname.startsWith(item.href) ? 'text-blue-600' : 'text-gray-700 "hover"
                      <ChevronDown className="w-4 h-4"
                    className={`text-sm font-medium transition-colors ${router.pathname === item.href ? 'text-blue-600' : 'text-gray-700 "hover"
                        <ChevronDown className="w-4 h-4"
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${router.pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 "hover"