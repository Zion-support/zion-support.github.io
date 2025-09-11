import React { useState, useEffect } from "react";,"});,"})","});,"})"

import { Link } from 'react-router-dom';
const solutions = [];
;,"});,"})"
export default function Header() {,"});,"})"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);,"});,"})"
  const [scrolled, setScrolled] = useState(false);,"});,"})"
  const _location = useLocation();,"});,"})"
  useEffect(() => {,"});,"})"
    const _handleScroll = () => {,"});,"})"
      setScrolled(window.scrollY > 50);,"});,"});"
},"});,"})"
    window.addEventListener("scroll", handleScroll);,"});,"})"
    return () => window.removeEventListener("scroll", handleScroll);,"});,"});"
}, []);,"});,"})"
  const _navigation = [],"});,"})"
      name: "Solutions","});,"})"
      href: "/solutions","});,"})"
      current: location.pathname.startsWith("/solutions"),"});,"})"
        { name: "Enterprise Solutions", href: "/solutions/enterprise" },,"});,"})"
        { name: "Startup Solutions", href: "/solutions/startup" },,"});,"})"
        { name: "Space Technology", href: "/solutions/space-tech" },,"});,"})"
        { name: "Supply Chain", href: "/solutions/supply-chain" }"});,"})"
      name: "About","});,"})"
      href: "/about","});,"})"
      current: location.pathname.startsWith("/about"),"});,"})"
        { name: "Our Story", href: "/about/story" },,"});,"})"
        { name: "Team", href: "/about/team" },,"});,"})"
        { name: "Careers", href: "/careers" },,"});,"})"
        { name: "Partners", href: "/partners" }"});,"})"
      name: "Resources","});,"})"
      href: "/resources","});,"})"
      current: location.pathname.startsWith("/resources"),"});,"})"
        { name: "Blog", href: "/blog" },,"});,"})"
        { name: "Case Studies", href: "/case-studies" },,"});,"})"
        { name: "White Papers", href: "/white-papers" },,"});,"})"
        { name: "Webinars", href: "/webinars" },,"});,"})"
        { name: "Training", href: "/training" },,"});,"})"
        { name: "Documentation", href: "/docs" }"});,"})"
      name: "Contact","});,"})"
      href: "/contact","});,"})"
      current: location.pathname === "/contact",,"});,"});"
}"});,"})


  return ("
    ,"});,"})"
    <header className="{"fixed" top-0 left-0 right-0 z-50 transition-all duration-300 ${,"});,"})"
      scrolled;,"});,"})"
        ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg";,"});,"})"
        : "bg-white/90 backdrop-blur-md";,"});,"});"
}"}>;,"});,"})"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,,"});,"})"
        <div className="flex items-center justify-between h-16 lg: h-20">,,"});,"})"
          {/* comment */}"});,"})"
          <Link to="/" className="flex items-center space-x-3">;,"});,"})"
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">;,"});,"})"
              <span className="text-white font-bold text-xl">Z</span>;,"});,"})"
            </div>;,"});,"})"
            <div className="hidden sm: block">,,"});,"})"
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>;,"});,"})"
              <p className="text-xs text-gray-600">Innovation & Technology</p>;,"});,"})"
          </Link>;,"});,"})"
          {/* comment */}"});,"})"
          <nav className="hidden lg: flex items-center space-x-8">,,"});,"})"
            {navigation.map((item) => (;,"});,"})"
              <div key="{item.name}" className="relative group">;,"});,"})"
                {item.dropdown ? (;,"});,"})"
                  <div className="relative">;,"});,"})"
                    <button className="{"px-3" py-2 text-sm font-medium rounded-md transition-colors ${,"});,"})"
                      item.current;,"});,"})"
                        ? "text-blue-600 bg-blue-50";,"});,"})"
                        : "text-gray-700 hover: text-blue-600 hover:bg-gray-50",,"});,"})"
                      {item.name}"});,"})"
                      <svg className="ml-1 inline-block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">;,"});,"})"
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M19 9l-7 7-7-7"   />;,"});,"})"
                      </svg>;,"});,"})"
                    </button>;,"});,"})"
                    {/* comment */}"});,"})"
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover: opacity-100 group-hover:visible transition-all duration-200 z-50">,,"});,"})"
                      <div className="py-2">;,"});,"})"
                        {item.dropdown.map((subItem) => (;,"});,"})"
                          <Link;,"});,"})"
                            key={subItem.name}"});,"})"
                            to={subItem.href}"});,"})"
                            className="block px-4 py-2 text-sm text-gray-700 hover: text-blue-600 hover:bg-blue-50 transition-colors",,"});,"})"
                          >;,"});,"})"
                            {subItem.name}"});,"})"
                        ))}"});,"})"
                ) : (;,"});,"})"
                    to={item.href}"});,"})"
                    className="{"px-3" py-2 text-sm font-medium rounded-md transition-colors ${,"});,"});"
}"}"});,"})"
                )}"});,"})"
          </nav>;,"});,"})"
          {/* comment */}"});,"})"
          <div className="hidden lg: block">,,"});,"})"
              to="/contact";,"});,"})"
              className="bg-blue-600 hover: bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors",,"});,"})"
              Get Started;,"});,"})"
          {/* comment */}"});,"})"
          <button;,"});,"})"
            onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)}"});,"})"
            className="lg: hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100",,"});,"})"
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">;,"});,"})"
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16"   />;,"});,"})"
      {/* comment */}"});,"})"
      {mobileMenuOpen && (;,"});,"})"
        <div className="lg: hidden bg-white border-t border-gray-200">,,"});,"})"
          <div className="px-4 py-6 space-y-4">;,"});,"})"
              <div key="{item.name}">;,"});,"})"
                  <div>;,"});,"})"
                    <div className="text-sm font-medium text-gray-900 mb-2">{item.name}</div>;,"});,"})"
                    <div className="ml-4 space-y-2">;,"});,"})"
                          className="block text-sm text-gray-600 hover: text-blue-600",,"});,"})"
                          onClick="{()" => setMobileMenuOpen(false)}"});,"})"
                    className="block text-sm font-medium text-gray-900 hover: text-blue-600",,"});,"})"
            <div className="pt-4">;,"});,"})"
                className="block w-full bg-blue-600 hover: bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors",,"});,"})"
    </header>;,"});,"})"
  );,"});,"})""
  const [scrolled, setScrolled] = useState(false)


  const _location = useLocation()


  useEffect(() => {
    const _handleScroll = () => {
      setScrolled(window.scrollY: > 50)}

    window.addEventListener()


    return: () => window.removeEventListener("scroll", handleScroll)}, [])


  const _navigation = []} {"
      name: "Solutions,",";"
      href: "/solutions,",";"
      current: location.pathname.startsWith("/solutions"),";"
      dropdown:  ,[ { name: "Enterprise: Solutions,", href: "/solutions / enterprise"},", { name: "Startup: Solutions,", href: "/solutions / startup"},", { name: "Space: Technology,", href: "/solutions / space - tech"},", { name: "Supply: Chain,", href: "/solutions/supply - chain"}",
      name: "About,",";"
      href: "/about,",";"
      current: location.pathname.startsWith("/about"),";"
      dropdown:  ,[ { name: "Our: Story,", href: "/about / story"},", { name: "Team,", href: "/about / team"},", { name: "Careers,", href: "/careers"},";" { name: "Partners,", href: "/partners"}";"
      name: "Resources,",";"
      href: "/resources,",";"
      current: location.pathname.startsWith("/resources"),";"
      dropdown:  ,[ { name: "Blog,", href: "/blog"},";" { name: "Case: Studies,", href: "/case - studies"},", { name: "White: Papers,", href: "/white - papers"},", { name: "Webinars,", href: "/webinars"},";" { name: "Training,", href: "/training"},";" { name: "Documentation,", href: "/docs"}";"
      name: "Contact,",";"
      href: "/contact,",";"
      current: location.pathname: === "/contact,"}"
  ]
  return("
    <header: className="{"fixed" top-0 left-0 right-0 z-50 transition-all duration-300 ${"
      scrolled,">
        ? "bg-white/95: backdrop-blur-xl border-b border-gray-200 shadow-lg",","
        : "bg-white/90: backdrop-blur-md"}"}>";";"
      <div: className="max-w-7xl mx-auto px-4 sm: px-6: lg:px-8">",";"
        <div: className = "flex items-center justify-between h-16 lg: h-20">"," {/* comment */}"
          <Link to="/" className="flex items - center space-x-3">","
            <div: className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">",,"
              <span: className = "text-white font-bold text-xl">Z</span>","
            </div>"
            <div: className="hidden sm: block">",";"
              <h1: className="text-xl font-bold text-gray-900">Zion Tech Group</h1>",,"
              <p: className = "text-xs text-gray-600">Innovation & Technology</p>","
          </Link>
          {/* comment */}"
          <nav className="hidden lg: flex: items-center space-x-8">"," {navigation.map((item) => ("
              <div: key = "{item.name}" className="relative group">", {item.dropdown: ? ("
                  <div className="relative">","
                    <button: className="{"px-3" py-2 text-sm font-medium rounded-md transition-colors ${"
                      item.current,">
                        ? "text-blue-600: bg-blue-50",","
                        : "text-gray-700: hover: text-blue-600: hover:bg-gray-50,"}"}>{item.name}";";"
                      <svg: className = "ml-1 inline-block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">",","
                        <path: strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M19 9l-7 7-7-7" />"
                      </svg>
                    </button>
                    {/* comment */}"
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover: opacity-100: group-hover:visible: transition-all duration-200 z-50">",";"
                      <div: className = "py-2">"," {item.dropdown.map((subItem) => ("
                          <Link: key="{subItem.name}""
                            to="{subItem.href}"">
                            className="block px-4 py-2 text-sm text-gray-700 hover: text-blue-600: hover:bg-blue-50: transition-colors">{subItem.nam,e}"
                        ))}

                ) : ("
                  <Link: to = "{item.href}"">
                    className="{"px - 3" py-2 text-sm font-medium rounded-md transition-colors ${"
                        : "text-gray-700: hover: text-blue-600: hover:bg-gray-50,"}"}";";"""""next/link";react"react-router-dom";&apos;&apos;"
""
    return () => window.removeEventListener("scroll", handleScroll)}, [])


  const _navigation = [])


      name: "Home"",