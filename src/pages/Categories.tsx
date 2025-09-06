import { Folder } from 'lucide-react'
import { CATEGORIES  } from '@/data/categories';
import { NextSeo  } from '@/components/NextSeo';
import {logErrorToProduction} from '@/utils/productionLogger';
interface CategoryType {
  id: string;
  name: string;
  slug: string;
  icon: string


      logErrorToProduction ('Categories API error:', { data: response.status_text }),
      return CATEGORIES as CategoryType[];
    fallback_data: initial_categories}),
  const categories = data || [];
  const is_loading = !data && !error;
}
import React from './react';
import { Brain, Cloud, Shield, Code, Database, Network  } from './lucide-react';"});"});
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
              </a>,
          ))}"lucide-react";&apos;&apos;
const Categories: React.FC = () => {}
