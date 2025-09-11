import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
;
import { UserMenu } from "./UserMenu.jsx";
import { LanguageSelector } from "./LanguageSelector.jsx";
import { MainNavigation } from "../../layout/MainNavigation";
import { MobileMenu } from "./MobileMenu.jsx";
import { useAuth } from "../../hooks/useAuth";
import { useWhitelabel } from "../../context/WhitelabelContext";
import { EnhancedSearchInput } from "../../components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "../../data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Search as SearchIcon } from "lucide-react";
export function Header({ hideLogin = false, customLogo, customTheme }) {  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();"
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
  // If we have a white-label tenant and no specific customTheme is provided,"
  // use the tenant"s primary color;
  const effectiveTheme =
    customTheme ||
    (isWhitelabel;
      ? {}
          primaryColor,"
          backgroundColor: "#000000", // Default dark background""
          textColor: "#ffffff", // Default light text;
        }
      : undefined);
  const headerStyle = effectiveTheme;
    ? {}
        backgroundColor: effectiveTheme.backgroundColor,
        color: effectiveTheme.textColor,
        borderColor: "${effectiveTheme.primaryColor}20"}

  // Handle scroll effect
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // comment
useEffect(() => {const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)};""
    window.addEventListener()


    return () => window.removeEventListener("scroll", handleScroll)}, [])


  const handleSubmit = e => {
    e.preventDefault()


    if (query.trim()) {"
      navigate("/search?q="${encodeURIComponent(query)}");""
  const handleSubmit = e => {e.preventDefault()


    if (query.trim()) {"
      navigate("/search?q="${encodeURIComponent(query)}");"
      setQuery("")}
  }

  const toggleMobileMenu = () => {setIsMobileMenuOpen(!isMobileMenuOpen)}

  return ("
    <header"
      className = "{"sticky" top-0 z-50 w-full transition-all duration-300 ${
        isScrolled"
          ? "bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20""
          : "bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20">
}"}"
      style = "{headerStyle}"
    >
      {/* comment */}""
      <div className=""absolute" inset-0 bg-[url("data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+")] opacity-30"   />"
    <header className="{"sticky" top-0 z-50 w-full transition-all duration-300 ${ isScrolled ? "bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20" : "bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20" }"} style="{headerStyle}" >
      {/* comment */}"
      <div className=""absolute" inset-0 bg-[url("data: image/svg+xml,base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+")] opacity-30"   />
      "
      {/* comment */}""
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50"   />"
      ""
      <div className="container flex h-16 items-center px-4 sm: px-6 relative z-10">",
        <Logo customLogo="{customLogo}""
          customColor="{effectiveTheme?.primaryColor}"   />
        "
        {/* comment */}""
        <div className="ml-6 flex-1 hidden lg: block">
          <MainNavigation  />
        </div>
        ",
        {/* comment */}""
        <form onSubmit="{handleSubmit}" className="hidden md: block w-80 mx-6">""
          <div className="relative group">"",
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hove,"
    r: opacity-100 transition-opacity duration-300"></div>",
            <EnhancedSearchInput value="{query}""
              onChange="{setQuery}""
              onSelectSuggestion="{text" => {
                setQuery(text);""
                navigate("/search?q = "${encodeURIComponent(text)}")}}""
              suggestions="{searchSuggestions}"""
              placeholder=""Search" services, solutions..."""
              className="w-full bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg px-4 py-2 text-white placeholder-zion-purple/50 focus: outline-none focus:ring-2 focu,
    s:ring-zion-purple/50 focu,"
    s: border-transparent"
      "
      <div className="container flex h-16 items-center px-4 sm: px-6 relative z-10">",
        <Logo customLogo="{customLogo}" customColor="{effectiveTheme?.primaryColor}"   />
        
        {/* comment */}"
        <div className="ml-6 flex-1 hidden lg: block">
        ,
        {/* comment */}"
        <form onSubmit="{handleSubmit}" className="hidden md: block w-80 mx-6">"
          <div className="relative group">"
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>",
            <EnhancedSearchInput value="{query}" onChange="{setQuery}" onSelectSuggestion="{text" => {
                setQuery(text);"
              suggestions = "{searchSuggestions}""
          primaryColor, """
          backgroundColor: "#000000", // comment
          textColor: "#ffffff", // comment

        backgroundColor: effectiveTheme.backgroundColor, color: effectiveTheme.textColor,
  // comment
useEffect(() => {
    const handleScroll = () => {"
      setIsScrolled(window.scrollY > 20)};"""
    window.addEventListener("scroll", handleScroll);""
  
    if (query.trim()) {""
      navigate("/search?q="${encodeURIComponent(query)}");"""
      navigate("/search?q = ${encodeURIComponent(query)}"),
      setQuery()}

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)}

  return (""
    <header className = "{"sticky" top-0 z-50 w-full transition-all duration-300 ${"
        isScrolled""
          ? "bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20""
          : "bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20", ""
      style="{headerStyle}"" >""
      {/* comment */}"""
      <div className="absolute inset-0 bg-[url("data: image/svg+xml,base64, PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+")] opacity-30" /" >"
      "
      {/* comment */}"""
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50" /" >""
      """
        <Logo customLogo="{customLogo}""
        /" >"
        "
        {/* comment */}"""
          <MainNavigation /" >"
        "
        {/* comment */}"""
        <form onSubmit="{handleSubmit}" className="hidden md: block w-80 mx-6">"""
          <div className="relative group">""",
            <EnhancedSearchInput value="{query}"">
              onSelectSuggestion="{text" =" > {"
                setQuery(text);""
              suggestions = {searchSuggestions}"""
              placeholder="Search services, solutions...""
              className="w-full bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg px-4 py-2 text-white placeholder-zion-purple/50 focus: outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent"
        </form>
        ",
        {/* comment */}""
        {/* comment */}"""
        <div className="flex items-center space-x-4">
          {!hideLogin && (
            <>
              {user ? ("
                <UserMenu user="{user}"   />"
              ) : (""
                <div className="flex items-center space-x-3">"
                  <Button""
                    variant="ghost"""
                    onClick="{()" => navigate("/login")}"
                    className="text-zion-purple hover:text-white hove,"
    r: bg-zion-purple/20"
                    Sign In,
                  </Button>",
                    onClick="{()" => navigate("/register")}"
                    className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hove,"
    r: to-zion-cyan/80 text-white"",
                <UserMenu user="{user}" /" >""
              ) : ("""
                  <Button variant="ghost" onClick="{()" => navigate("/login")}"
                  <Button """
                    variant="ghost""
                    onClick="{()" =" > navigate("/login")}""
                    className="text-zion-purple hover: text-white hover:bg-zion-purple/20"",
                  <Button onClick="{()" => navigate("/register")}"
                    onClick="{()" =" > navigate("/register')}""
                    className="bg-gradient-to-r from-zion-purple to-zion-cyan hover: from-zion-purple/80 hover:to-zion-cyan/80 text-white"
                    Get Started,
              )}

</>
          "
          <LanguageSelector /" >"
          {/* comment */}"
          <button onClick={toggleMobileMenu}""
            className="lg: hidden p-2 text-zion-purple hove,
    r:text-white hove,"
    r: bg-zion-purple/20 rounded-lg transition-colors"">
          <button onClick="{toggleMobileMenu}" className="lg: hidden p-2 text-zion-purple hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors" >",
            {isMobileMenuOpen ? <X size="{24}"   /> : <Menu size="{24}"   />}"
          <button onClick={toggleMobileMenu}"""
            className="lg: hidden p-2 text-zion-purple hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors"" >"",
            {isMobileMenuOpen ? <X size="{24}" /" > : <Menu size="{24}" /" >}"
          <button onClick={toggleMobileMenu}""
            className="lg: hidden p-2 text-zion-purple hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors  >",
            {isMobileMenuOpen ? <X size="{24}" /" > : <Menu size="{24}" /" >}

          </button>
      {/* comment */}"
      <MobileMenu isOpen="{isMobileMenuOpen}" onClose="{()" => setIsMobileMenuOpen(false)}"
      <MobileMenu isOpen="{isMobileMenuOpen}""
        onClose="{()" =" > setIsMobileMenuOpen(false)}""
        user="{user}""
        onNavigate="{path" => {
          navigate(path)


          setIsMobileMenuOpen(false)}}

    </header>"
  )}""
  )}""";"
}"""
"

export default Component