<<<<<<< HEAD
import React from "react";"
import { Helmet }; from "react-helmet-async"";"
import { Link }; from "react-router-dom"";"
import { ArrowRight }; from "lucide-react"";"
=======
<<<<<<< HEAD
import { Helmet } from "react-helmet-async;";";";
interface ServiceTemplateProps {},";";";";
      title: string"
import React from "react;";";";";
import { Helmet } from "react-helmet-async";"
import { Link } from "react-router-dom";"
import { ArrowRight } from "lucide-react";
interface ServiceTemplateProps {};
=======


import { Helmet } from "react-helmet-async";
interface ServiceTemplateProps {},
      title: string

<<<<<<< HEAD
import React from "react";";
import { Helmet } from "react-helmet-async"";";
import { Link } from "react-router-dom"";";
import { ArrowRight } from "lucide-react"";";
>>>>>>> main
=======
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
interface ServiceTemplateProps {}
>>>>>>> main
  title: string
  description: string
  features: Array<{};
    title: string
    description: string
  }></{};
<<<<<<< HEAD
>";
},";";
      const ServiceTemplate: React.FC<ServiceTemplateProps>  =  ({},)";";";
      title, description, _features, _}) => {},"
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet></Helmet>
const ServiceTemplate: React.FC<ServiceTemplateProps> = ({,
    title, description, _features, _
  }) => {";
const ComponentName = () => {";";
  ";";";
  return (";";";";
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";
      <Helmet>";
        <title>{title";";
};";";";
      </Helmet>"
      <div className ="pt-20 pb-16 px-4 sm: px-6 lg:px-8">";"
        <div className ="max-w-7xl mx-auto text-center">";"
          <h1 className ="text-4xl md:text-6xl font-bold text-white mb-6">";"
            <span className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">",";
              {title};";";
            </span>";";";
          </h1>"
          <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";";";
            {description}";";";
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>";";";
            <>"
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></>";";";
              Get Started"
              <ArrowRight className="w-5 h-5 ml-2" />";";
            </>";";";
            <>"
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></>"
          <div className ="flex flex-col sm: flex-row gap-4 justify-center">";"
            <Link to ="/contact"";"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"";";";
            >";";";
              Get Started"
              <ArrowRight className ="w-5 h-5 ml-2" />";";";";
            </Link>"
            <Link to ="/contact"";"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"";
=======
>
},
      const ServiceTemplate: React.FC<ServiceTemplateProps> = ({},)
      title, description, _features, _}) => {},
      return (<div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)";
      <Helmet></Helmet>

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title, description, _features, _}) => {
<<<<<<< HEAD
<<<<<<< HEAD
const  ComponentName = () => {
  return (
    <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";"
=======
const: ComponentName = () => {
  return (;
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";";
>>>>>>> main
      <Helmet>

        <title>{title} | Zion Tech Group</title>
<<<<<<< HEAD
        <meta: name ="description" content={description} />";"
      </Helmet>
      <div  className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8">";"
        <div  className ="max-w-7xl mx-auto text-center">";"
          <h1  className ="text-4xl md=text-6xl font-bold text-white mb-6">";"
            <span  className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">";"
              {title}
            </span>
          </h1>
          <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";"
            {description}
          </p>
          <div  className ="flex flex-col sm:flex-row gap-4 justify-center">";"
            <Link: to ="/contact"";"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"";"
            >
              Get Started
              <ArrowRight: className ="w-5 h-5 ml-2" />";"
            </Link>
            <Link: to ="/contact"";"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"";"
=======
        <meta: name ="description" content={description} />";";
=======
const ComponentName  = () => {
  return (;
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";
      <Helmet>

        <title>{title} | Zion Tech Group</title>
        <meta: name ="description" content={description} />";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      </Helmet>
      <div: className ="pt-20 pb-16 px-4 sm: px-6 lg:px-8">";
        <div: className ="max-w-7xl mx-auto text-center">";
          <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">";
            <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">",";
              {title}
            </span>
          </h1>
          <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
            {description}
          </p>

          <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
            <>
              to="/contact";
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center";
            ></>

              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />";
            </>
            <>
              to="/contact";
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300";
            ></>

          <div: className ="flex flex-col sm: flex-row gap-4 justify-center">";
            <Link: to ="/contact";
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center";
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />";
            </Link>
<<<<<<< HEAD
            <Link: to ="/contact"";";
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"";";
>>>>>>> main
>>>>>>> main
=======
            <Link: to ="/contact";
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
            >
              Learn More
<<<<<<< HEAD
            </>";
          </div>";";
        </div>";";";
      </div>"
      <div className="py-16 px-4 sm:px-6 lg:px-8"></div>"
        <div className="max-w-7xl mx-auto"></div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>";";
            {features.map((feature, index) => ()}";";";
              <divkey={index},>"
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div";";";
>"
                <h3 className="text-xl font-semibold text-white mb-3"></h3>";";";
                  {feature.title};"
      <div className ="py-16 px-4 sm:px-6 lg:px-8">";"
        <div className ="max-w-7xl mx-auto">";"
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",";";
            {features.map((feature, index) => ()";";";
              <div key ={index}"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"";";";";
              >"
                <h3 className ="text-xl font-semibold text-white mb-3">",";";
                  {feature.title}";";";
                </h3>"
                <p className ="text-gray-300">{feature.description}</$1>
=======
            </>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div  className ="py-16 px-4 sm:px-6 lg:px-8">";"
        <div  className ="max-w-7xl mx-auto">";"
          <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-3 gap-8">";"
            {features.map((feature, index) => ()
              <div  key ={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"";"
              >
                <h3  className ="text-xl font-semibold text-white mb-3">";"
=======

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
>>>>>>> main
                  {feature.title}

                </h3>
<<<<<<< HEAD
<<<<<<< HEAD
                <p  className ="text-gray-300">{feature.description}</p>";"
=======
                <p: className ="text-gray-300">{feature.description}</p>";";
>>>>>>> main
>>>>>>> main
=======
                <p: className ="text-gray-300">{feature.description}</p>";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              </div>
            ))};
          </div>
        </div>
      </div>
    </div>";
  )";";
}";";";
export default ServiceTemplate";";";