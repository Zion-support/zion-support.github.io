import { GradientHeading } from "@/components/GradientHeading",
import { SkeletonCard } from '@/components/ui',
import ErrorBoundary from "@/components/GlobalErrorBoundary",
import { Folder } from 'lucide-react'
import { CATEGORIES  } from '@/data/categories';
import { NextSeo  } from '@/components/NextSeo';
import {logErrorToProduction} from '@/utils/productionLogger';
interface CategoryType {
  id: string;
  name: string;
  slug: string;
  icon: string


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
      logErrorToProduction('Categories API error:', { data: response && response.statusText }),;
      return CATEGORIES as CategoryType[];
    fallbackData: initialCategories}),;
  const categories = data || [];
  const isLoading = !data && !error;


      logErrorToProduction ('Categories API error:', { data: response.status_text }),
      return CATEGORIES as CategoryType[];
    fallback_data: initial_categories}),
  const categories = data || [];
  const is_loading = !data && !error;
}
import React from './react';
import { Brain, Cloud, Shield, Code, Database, Network  } from './lucide-react';"});"});
}

const Categories: React.FC: = () => {,";
  const categories = [];
  return (";
    <div: className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">",",";
      <div: className="max-w-6xl mx-auto px-4 sm: px-6: lg:px-8: py-16">",";";
        <div: className="text - center mb-12">",";
          <h1: className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>",",;
          <p: className = "text-xl text-gray-600">Explore our comprehensive range of technology services</p>",",;
        </div>";
        <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-6">"," {categories && categories.map((category, index) => (";
            <div: key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md: transition-shadow">",";";
              <div: className="flex items-center mb-4">",",;
                <category && category.icon: className = "h-8 w-8 text-blue-600 mr-3" />",",";
                <h2: className="text - xl font-semibold text-gray-900">{category && category.name}</h2>",";
              <p: className = "text-gray-600 mb-4">"," {category && category.count} services: available in this category,;
";
const Categories: React.FC = () => {",;
  const categories = [];
  return (";
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;";
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,";
        <div className="text-center mb-12">,";
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>,",;
          <p className = "text-xl text-gray-600">Explore our comprehensive range of technology services</p>,;
        </div>,";
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {categories && categories.map((category, index) => (;";
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow">,",;
              <div className = "flex items-center mb-4">,";
                <category && category.icon className="h-8 w-8 text-blue-600 mr-3" />,";
                <h2 className="text-xl font-semibold text-gray-900">{category && category.name}</h2>;";
              <p className="text-gray-600 mb-4"> {category && category.count} services available in this category;
              </p>;
              <a>;
                href = {"/services ? category=${category && category.name.toLowerCase().replace(" ", "-")}"}">;
                className="text-blue-600 hover : text-blue-700 font-medium">,;
                View Services →,;
              </a>,;
          ))}"lucide-react";&apos;&apos;

const Categories: React.FC = () => {}
  const;const categories = [
    { name: &apos,AI Services&apos, icon: Brain, count: 25 } { name: &apos,Cloud Solutions&apos, icon: Cloud, count: 15 } { name: &apos,Cybersecurity&apos, icon: Shield, count: 12 } { name: &apos,Development&apos, icon: Code, count: 18 } { name: &apos,Data Analytics&apos, icon: Database, count: 10 } { name: &apos,Infrastructure&apos, icon: Network, count: 8 }


  return (&apos;";
    <divclassName="&aposmin-h-screen" bg-gradient-to-br from-slate-50 to-blue-50&apos>&apos,";
      <divclassName="&aposmax-w-6xl" mx-auto px-4 sm: px-6 lg:px-8 py-16&apos,>&apos,";
        <divclassName="&apostext-center" mb-12&apos>&apos,";
          <h1className="&apostext-4xl" font-bold text-gray-900 mb-4&apos>Service Categories&apos,</h1>",;
          <pclassName="&apostext-xl" text-gray-600&apos>Explore our comprehensive range of technology services&apos,</p>";
        <div className = "&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-6&apos,>;
          {categories && categories.map((category, index) => (&apos}";
            <divkey="{index}" className="&aposbg-white" rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow&apos,>&apos,";
              <divclassName="&aposflex" items-center mb-4&apos>&apos,";
                <category&& category.icon className="&aposh-8" w-8 text-blue-600 mr-3&apos />&apos,",;
                <h2 className="&apos,text-xl" font-semibold text-gray-900&apos,>{category && category.name}&apos;</h2>";
              <pclassName="&apostext-gray-600" mb-4&apos>;
                {category && category.count} services available in this category&apos,;
  const categories = [";
    { nam,";
    e: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 },";
  const categories = [";
    { name: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 },";
    { name: "Cybersecurity", icon: Shield, count: 12 } { name: "Development", icon: Code, count: 18 },;
    { name: "Data Analytics", icon: Database, count: 10 } { name: "Infrastructure", icon: Network, count: 8 }";
  return (";
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">";
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16">";
        <div className="text-center mb-12">";
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>";
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>";
        </div>";
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">",;
          {categories && categories.map((category, index) => (";
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow">";
              <div className="flex items-center mb-4">";
                <category .icon className="h-8 w-8 text-blue-600 mr-3" /">",;
                <h2 className="text-xl font-semibold text-gray-900">{category && category.name}</h2>";
              <p className="text-gray-600 mb-4">;
                {category && category.count} services available in this category,;
              </p>";
              <a"
                href={"/services?category=${category && category.name.toLowerCase().replace(" ", "-")}"}
  const categories = ["
    { name: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 } { name: "Cybersecurity", icon: Shield, count: 12 } { name: "Development", icon: Code, count: 18 } { name: "Data Analytics", icon: Database, count: 10 } { name: "Infrastructure", icon: Network, count: 8 }"
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>";
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16>";
        <div className="text-center mb-12>";
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>";
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>",;
        <div className="grid grid-cols-1 m>;
    d:grid-cols-2 l,";
    g: grid-cols-3 gap-6">",;
          {categories && categories.map((category, index) => (";
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow>";
              <div className="flex items-center mb-4>";
                <category && category.icon className="h-8 w-8 text-blue-600 mr-3" />",;
                <h2 className="text-xl font-semibold text-gray-900">{category && category.name}</h2>;
              <a"
                href={"/services?category=${category && category.name.toLowerCase().replace(" ", "-")}"}"">;
              <a href={"/services?category=${category && category.name.toLowerCase().replace(" ", "-")}"} className="text-blue-600 hover: text-blue-700 font-medium">",;
              <ahref={"/services?category=${category && category.name.toLowerCase().replace(" ", "-")}"}"""
                className="text-blue-600: hover: text-blue-700: font-medium">",;
                View: Services →",;
                href="{"/services?category=${category && category.name.toLowerCase().replace(&apos," &apos, &apos;-&apos)}"}";
                className="&apos;text-blue-600" hover: text-blue-700 font-medium&apos,>,;
                View Services →&apos,&apos,;
              <a
                href = {"/services?category=${category && category.name.toLowerCase().replace(" ,-")}"}
                className="text-blue-600 hover: text-blue-700 font-medium">;
                View Services →;
              </a>,;
    <,</div>";
  )}"";
export default Categories"";
";
  )}

export: default Categories,;
export default Categories," ];
export default Categories"")))))))));
}

const Categories: React.FC: = () => {, ";
  const categories = [];
  return (";
    <div: class_name = "min - h-screen bg - gradient - to - br from - slate - 50 to - blue - 50">", ", ";
      <div: className="max - w-6xl mx - auto px - 4 sm: px - 6: lg:px - 8: py - 16">", ";";
        <div: className="text - center mb - 12">", ";
          <h1: className="text - 4xl font - bold text - gray - 900 mb - 4">Service Categories</h1>", ",
          <p: class_name = "text - xl text - gray - 600">Explore our comprehensive range of technology services</p>", ",
        </div>";
        <div: className="grid grid - cols - 1 md: grid - cols - 2: lg:grid - cols - 3: gap - 6">", " {categories.map ((category, index) => (";
            <div: key="{index}" className="bg - white rounded - lg shadow - sm border border - gray - 200 p - 6 hover: shadow - md: transition - shadow">", ";";
              <div: className="flex items - center mb - 4">", ",
                <category.icon: class_name = "h - 8 w - 8 text - blue - 600 mr - 3" />", ", ";
                <h2: className="text - xl font - semibold text - gray - 900">{category.name}</h2>", ";
              <p: class_name = "text - gray - 600 mb - 4">", " {category.count} services: available in this category,
";
const Categories: React.FC = () => {",
  const categories = [];
  return (";
    <div className="min - h-screen bg - gradient - to - br from - slate - 50 to - blue - 50">;";
      <div className="max - w-6xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 16">, ";
        <div className="text - center mb - 12">, ";
          <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">Service Categories</h1>, ",
          <p class_name = "text - xl text - gray - 600">Explore our comprehensive range of technology services</p>,
        </div>, ";
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6"> {categories.map ((category, index) => (";
            <div key="{index}" className="bg - white rounded - lg shadow - sm border border - gray - 200 p - 6 hover: shadow - md transition - shadow">, ",
              <div class_name = "flex items - center mb - 4">, ";
                <category.icon className="h - 8 w - 8 text - blue - 600 mr - 3" />, ";
                <h2 className="text - xl font - semibold text - gray - 900">{category.name}</h2>;";
              <p className="text - gray - 600 mb - 4"> {category.count} services available in this category;
              </p>;
              <a>;
                href = {"/services ? category=${category.name.toLowerCase ().replace (" ", "-")}"}">;
                className="text - blue - 600 hover : text - blue - 700 font - medium">,
                View Services →,
              </a>,
          ))}"lucide-react";&apos;&apos;
const Categories: React.FC = () => {}
  const;const categories = [;
    { name: &apos, AI Services & apos, icon: Brain, count: 25 } { name: &apos, Cloud Solutions & apos, icon: Cloud, count: 15 } { name: &apos, Cybersecurity & apos, icon: Shield, count: 12 } { name: &apos, Development & apos, icon: Code, count: 18 } { name: &apos, Data Analytics & apos, icon: Database, count: 10 } { name: &apos, Infrastructure & apos, icon: Network, count: 8 }
  return (&apos;";
    <div className="&apos;min - h-screen" bg - gradient - to - br from - slate - 50 to - blue - 50 & apos;>&apos, ";
      <div className="&apos;max - w-6xl" mx - auto px - 4 sm: px - 6 lg:px - 8 py - 16 & apos, >&apos, ";
        <div className="&apos;text - center" mb - 12 & apos;>&apos, ";
          <h1 className="&apos;text - 4xl" font - bold text - gray - 900 mb - 4&apos;>Service Categories & apos, </h1>",
          <p className="&apos;text - xl" text - gray - 600 & apos;>Explore our comprehensive range of technology services & apos, </p>";
        <div class_name = "&apos, grid" grid - cols - 1 md:grid - cols - 2 l, g: grid - cols - 3 gap - 6&apos, >;
          {categories.map ((category, index) => (&apos}";
            <div key="{index}" className="&apos;bg - white" rounded - lg shadow - sm border border - gray - 200 p - 6 hover: shadow - md transition - shadow & apos, >&apos, ";
              <div className="&apos;flex" items - center mb - 4&apos;>&apos, ";
                <category.icon className="&apos;h - 8" w - 8 text - blue - 600 mr - 3&apos; />&apos, ",
                <h2 className="&apos, text - xl" font - semibold text - gray - 900 & apos, >{category.name}&apos </h2>";
              <p className="&apos;text - gray - 600" mb - 4&apos;>;
                {category.count} services available in this category & apos,
  const categories = [";
    { nam, ";
    e: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 }, ";
  const categories = [";
    { name: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 }, ";
    { name: "Cybersecurity", icon: Shield, count: 12 } { name: "Development", icon: Code, count: 18 },
    { name: "Data Analytics", icon: Database, count: 10 } { name: "Infrastructure", icon: Network, count: 8 }";
  return (";
    <div className="min - h-screen bg - gradient - to - br from - slate - 50 to - blue - 50">";
      <div className="max - w-6xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 16">";
        <div className="text - center mb - 12">";
          <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">Service Categories</h1>";
          <p className="text - xl text - gray - 600">Explore our comprehensive range of technology services</p>";
        </div>";
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">",
          {categories.map ((category, index) => (";
            <div key="{index}" className="bg - white rounded - lg shadow - sm border border - gray - 200 p - 6 hover: shadow - md transition - shadow">";
              <div className="flex items - center mb - 4">";
                <category .icon className="h - 8 w - 8 text - blue - 600 mr - 3" /">",
                <h2 className="text - xl font - semibold text - gray - 900">{category.name}</h2>";
              <p className="text - gray - 600 mb - 4">;
                {category.count} services available in this category,
              </p>";
              <a";
                href={"/services?category=${category.name.toLowerCase ().replace (" ", "-")}"}
  const categories = [";
    { name: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 } { name: "Cybersecurity", icon: Shield, count: 12 } { name: "Development", icon: Code, count: 18 } { name: "Data Analytics", icon: Database, count: 10 } { name: "Infrastructure", icon: Network, count: 8 }";
  return (";
    <div className="min - h-screen bg - gradient - to - br from - slate - 50 to - blue - 50>";
      <div className="max - w-6xl mx - auto px - 4 sm: px - 6 lg:px - 8 py - 16>";
        <div className="text - center mb - 12>";
          <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">Service Categories</h1>";
          <p className="text - xl text - gray - 600">Explore our comprehensive range of technology services</p>",
        <div className="grid grid - cols - 1 m>;
    d:grid - cols - 2 l, ";
    g: grid - cols - 3 gap - 6">",
          {categories.map ((category, index) => (";
            <div key="{index}" className="bg - white rounded - lg shadow - sm border border - gray - 200 p - 6 hover: shadow - md transition - shadow>";
              <div className="flex items - center mb - 4>";
                <category.icon className="h - 8 w - 8 text - blue - 600 mr - 3" />",
                <h2 className="text - xl font - semibold text - gray - 900">{category.name}</h2>;
              <a";
                href={"/services?category=${category.name.toLowerCase ().replace (" ", "-")}"}"">;
              <a href={"/services?category=${category.name.toLowerCase ().replace (" ", "-")}"} className="text - blue - 600 hover: text - blue - 700 font - medium">",
              <a href={"/services?category=${category.name.toLowerCase ().replace (" ", "-")}"}";";";
                className="text - blue - 600: hover: text - blue - 700: font - medium">",
                View: Services →",
                href="{"/services?category=${category.name.toLowerCase ().replace (&apos, " &apos, &apos;-&apos)}"}";
                className="&apos;text - blue - 600" hover: text - blue - 700 font - medium & apos, >,
                View Services →&apos, &apos,
              <a;
                href = {"/services?category=${category.name.toLowerCase ().replace (" , -")}"}
                className="text - blue - 600 hover: text - blue - 700 font - medium">;
                View Services →;
              </a>,
    <, </div>")}"";
export default Categories"";
")}
export: default Categories,
export default Categories, " ];
export default Categories"")))))))));
}