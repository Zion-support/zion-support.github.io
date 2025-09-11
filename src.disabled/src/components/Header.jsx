import _React from 'react'; import { Link } from 'react-router-dom'; import { MainNavigation } from "header/MainNavigation.tsx"; export function Header() {; return (; <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;
=======

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
import React from \'react\'; import { Link } from \'react-router-dom\'; import { MainNavigation } from \"header/MainNavigation ; export function Header() {; return ( <header className=\"bg-white shadow-sm border-b border-gray-200\"> <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\"> <div className=\"flex justify-between items-center h-16\"> <div className=\"flex items-center\"> <Link to=\"/\" className=\"flex-shrink-0\"> <h1 className=\"text-2xl font-bold text-zion-purple\">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;
const React from "react"; import { Link } from "react-router-dom"; import { MainNavigation } from "header/MainNavigation ; export function Header() {; return ( <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;'"'"

import _React from 'react'; import { Link } from 'react-router-dom'; import { MainNavigation } from "header/MainNavigation ; export function Header() {; return ( <header className="bg-white shadow-sm border-b border-gray-200"> <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8"> <div className="flex justify-between items-center h-16"> <div className="flex items-center"> <Link to="/" className="flex-shrink-0"> <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group></div> ></div> ></div> <MainNavigation /> ></div> ></div> ></div> );} export default Header;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
