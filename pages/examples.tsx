import React, { useState } from "react";
import Head from "next/head";
const Examples: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  const languages = [
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "curl", name: "cURL", icon: "📡" },
    { id: "php", name: "PHP", icon: "🐘" },
    { id: "java", name: "Java", icon: "☕" },