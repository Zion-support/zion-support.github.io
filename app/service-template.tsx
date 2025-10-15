

import { Helmet } from "react-helmet-async";
interface ServiceTemplateProps {},
      title: string

import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
>
},
      const ServiceTemplate: React.FC<ServiceTemplateProps> = ({},)
      title, description, _features, _}) => {},
      return (<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)";
      <Helmet></Helmet>

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title, description, _features, _}) => {
const: ComponentName = () => {
  return (;
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";";
        <meta: name ="description" content={description} />";";
            <Link: to ="/contact";
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300";
            </>
          </div>
        </div>
      </div>

      <div: className ="py-16 px-4 sm:px-6 lg:px-8"></div>";
        <div: className ="max-w-7xl mx-auto"></div>";
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>";
            {features.map((feature, index) => ()}
              <divkey={index},>
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300";
              ></div
>
                <h3: className ="text-xl font-semibold text-white mb-3"></h3>";
                  {feature.title};

      <div: className ="py-16 px-4 sm:px-6 lg:px-8">";
        <div: className ="max-w-7xl mx-auto">";
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",";
            {features.map((feature, index) => ()
              <div: key ={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300";
              >
                <h3: className ="text-xl font-semibold text-white mb-3">",";
                <p: className ="text-gray-300">{feature.description}</p>";";
